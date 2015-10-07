(ns cljsworkshop.core
  (:require [goog.events :as events]
            [goog.dom :as dom]))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

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

;;(main)
(main1)
