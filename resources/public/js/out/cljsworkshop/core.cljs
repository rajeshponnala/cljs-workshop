(ns cljsworkshop.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [secretary.core :as secretary])
  (:import goog.History))


(def app (dom/getElement "app"))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

(defroute home-path "/" []
  (set-html! app "<h1>Hello World from home page.</h1>"))

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
