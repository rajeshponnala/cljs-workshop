(ns cljsworkshop.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [goog.style :as style]
            [secretary.core :as secretary])
  (:import goog.History
           goog.Uri
           goog.net.Jsonp))


(def app (dom/getElement "app"))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

;; for ajax
(def search-url "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(def home-html
  (str "<h1>Wikipedia Search:</h1>"
       "<section>"
       " <input id=\"query\" placeholder=\"Type your search...\" />"
       "  <button id=\"searchbutton\">Search</button>"
       "  <ul id=\"results\"></ul>"
       "</section>"))

(defn render-results [results]
  (let [results (js->clj results)]
    (reduce (fn [acc result]
              (str acc "<li>" result "</li>"))
            ""
            (second results))))

(defn do-jsonp
  [uri callback]
  (let [req (Jsonp. (Uri. uri))]
    (.send req nil callback)))

(defroute home-path "/" []
  (set-html! app home-html)
  ;;(style/setStyle (dom/getElement "button") "display" "none")
  ;;(style/setElementShown (dom/getElement "button") false)
  ;;(style/setHeight (dom/getElement "button") 100)
  (let [on-response (fn [results]
                      (let [html (render-results results)]
                        (set-html! (dom/getElement "results") html)))
        on-search-click (fn [e]
                          (let [user-query (.-value (dom/getElement "query"))
                                searchuri (str search-url user-query)]
                            (do-jsonp searchuri on-response)))]
    (events/listen (dom/getElement "searchbutton") "click" on-search-click)))

(defroute some-path "/:param" [param]
  (let [message (str "<h1>Parameter in url: <small>"param "</small>!</h1>")]
    (set-html! app message)))

(defroute "*" []
  (set-html! app "<h1>Not Found</h1>"))

(defn main
  []
  (let [content  "Hello World from ClojureScript"
        element (aget (js/document.getElementsByTagName "main") 0)]
    (set-html! element content)))

(defn main1
  []
  (let [counter (atom 0)
        button (dom/getElement "button")
        display (dom/getElement "clicksnumber")]

    (set! (.-innerHTML display) @counter)
    (events/listen button "click"
                   (fn [event]
                     (swap! counter inc)
                     (set! (.-innerHTML display) @counter)))))

(defn main2
  []
  (secretary/set-config! :prefix "#")
  (let [history (History.)]
    (events/listen history "navigate"
                   (fn [event]
                     (secretary/dispatch! (.-token event))))
    (.setEnabled history true)))


;;(main)
;;(main1)
(main2)
