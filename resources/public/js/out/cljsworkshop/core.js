// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljsworkshop.core');
goog.require('cljs.core');
cljsworkshop.core.set_html_BANG_ = (function set_html_BANG_(el,content){
return el.innerHTML = content;
});
cljsworkshop.core.main = (function main(){
var content = "Hello World from ClojureScript";
var element = (document.getElementsByTagName("main")[(0)]);
return cljsworkshop.core.set_html_BANG_.call(null,element,content);
});
cljsworkshop.core.main.call(null);

//# sourceMappingURL=core.js.map