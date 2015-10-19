(ns cljsworkshop.core
  (:require-macros [secretary.core :refer [defroute]]
                   [cljs.core.async.macros :refer [go]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [goog.style :as style]
            [secretary.core :as secretary]
            [cljs.core.async :refer [<! put! chan]]
            [reagent.core :as reagent :refer [atom]])
  (:import goog.History
           goog.Uri
           goog.net.Jsonp))


(def app (dom/getElement "app"))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

(defn hello [name]
  [:div "hello " name])

(defn page [body]
  [:div.page
   [:div.header "This is header"]
   body
   [:div.footer "This is footer"]])

(def expanded (reagent/atom false))
(def click-count (reagent/atom 0))

(defn counting-component []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defn register []
  [:div.container
   [:h1.well "Registration Form"]
   [:div {:class "col-lg-12 well"}
    [:div.row
     [:form
      [:div.col-sm-12
       [:div.row
        [:div {:class "col-sm-6 form-group"}
         [:label "First Name"]
         [:input.form-control
          {:type "text" :placeholder "Enter First Name Here..."}]]
        [:div {:class "col-sm-6 form-group"}
         [:label "Last Name"]
         [:input.form-control
          {:type "text" :placeholder "Enter Last Name Here..."}]]]
       [:div.form-group
        [:label "Address"]
        [:textarea.form-control {:placeholder "Enter Address Here..."
                                 :rows "3"}]]
       [:div.row
        [:div {:class "col-sm-4 form-group"}
         [:label "City"]
         [:input.form-control {:type "text"
                               :placeholder "Enter City Name Here..."}]]
        [:div {:class "col-sm-4 form-group"}
         [:label "State"]
         [:input.form-control {:type "text"
                               :placeholder "Enter State Here..."}]]
        [:div {:class "col-sm-4 form-group"}
         [:label "Zip Code"]
         [:input.form-control {:type "text"
                               :placeholder "Enter Zip Code Here..."}]]]
       [:div.row
        [:div {:class "col-sm-6 form-group"}
         [:label "Title"]
         [:input.form-control {:type "text"
                               :placeholder "Enter Designation Here.."}]]
        [:div {:class "col-sm-6 form-group"}
         [:label "Company"]
         [:input.form-control {:type "text"
                               :placeholder "Enter Company Name Here.."}]]]
       [:div.form-group
        [:label "Phone Number"]
        [:input.form-control {:type "number"
                              :placeholder "Enter Phone Number Here.."}]]
       [:div.form-group
        [:label "Email Address"]
        [:input.form-control {:type "email"
                              :placeholder "Enter Email Here.."}]]
       [:div.form-group
        [:label "Website"]
        [:input.form-control {:type "url"
                              :placeholder "Enter Website Name Here.."}]]
       [:input {:class "btn btn-lg btn-info"
                :type "button"
                :value "Submit"}]]]]]])


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

(defroute register-path "/register" []
  (reagent/render register (.-body js/document)))

(defroute some-path "/:param" [param]
  (let [message (str "<h1>Parameter in url: <small>"param "</small>!</h1>")]
    (set-html! app message)))

(defroute hello-path "/hello/:name" [name]
  (reagent/render [page [hello name]] (.-body js/document)))

(defroute atomex "/atomex/"
  []
  (reagent/render counting-component (.-body js/document)))


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
