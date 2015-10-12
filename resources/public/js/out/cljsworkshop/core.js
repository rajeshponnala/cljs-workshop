// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljsworkshop.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('goog.History');
cljsworkshop.core.app = goog.dom.getElement("app");
cljsworkshop.core.set_html_BANG_ = (function set_html_BANG_(el,content){
return el.innerHTML = content;
});
var action__4649__auto___4736 = (function (params__4650__auto__){
if(cljs.core.map_QMARK_.call(null,params__4650__auto__)){
var map__4734 = params__4650__auto__;
var map__4734__$1 = ((cljs.core.seq_QMARK_.call(null,map__4734))?cljs.core.apply.call(null,cljs.core.hash_map,map__4734):map__4734);
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Hello World from home page.</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__4650__auto__)){
var vec__4735 = params__4650__auto__;
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Hello World from home page.</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__4649__auto___4736);

/**
* @param {...*} var_args
*/
cljsworkshop.core.home_path = ((function (action__4649__auto___4736){
return (function() { 
var home_path__delegate = function (args__4648__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__4648__auto__);
};
var home_path = function (var_args){
var args__4648__auto__ = null;
if (arguments.length > 0) {
var G__4737__i = 0, G__4737__a = new Array(arguments.length -  0);
while (G__4737__i < G__4737__a.length) {G__4737__a[G__4737__i] = arguments[G__4737__i + 0]; ++G__4737__i;}
  args__4648__auto__ = new cljs.core.IndexedSeq(G__4737__a,0);
} 
return home_path__delegate.call(this,args__4648__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__4738){
var args__4648__auto__ = cljs.core.seq(arglist__4738);
return home_path__delegate(args__4648__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__4649__auto___4736))
;
var action__4649__auto___4741 = (function (params__4650__auto__){
if(cljs.core.map_QMARK_.call(null,params__4650__auto__)){
var map__4739 = params__4650__auto__;
var map__4739__$1 = ((cljs.core.seq_QMARK_.call(null,map__4739))?cljs.core.apply.call(null,cljs.core.hash_map,map__4739):map__4739);
var param = cljs.core.get.call(null,map__4739__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,message);
} else {
if(cljs.core.vector_QMARK_.call(null,params__4650__auto__)){
var vec__4740 = params__4650__auto__;
var param = cljs.core.nth.call(null,vec__4740,(0),null);
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,message);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:param",action__4649__auto___4741);

/**
* @param {...*} var_args
*/
cljsworkshop.core.some_path = ((function (action__4649__auto___4741){
return (function() { 
var some_path__delegate = function (args__4648__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:param",args__4648__auto__);
};
var some_path = function (var_args){
var args__4648__auto__ = null;
if (arguments.length > 0) {
var G__4742__i = 0, G__4742__a = new Array(arguments.length -  0);
while (G__4742__i < G__4742__a.length) {G__4742__a[G__4742__i] = arguments[G__4742__i + 0]; ++G__4742__i;}
  args__4648__auto__ = new cljs.core.IndexedSeq(G__4742__a,0);
} 
return some_path__delegate.call(this,args__4648__auto__);};
some_path.cljs$lang$maxFixedArity = 0;
some_path.cljs$lang$applyTo = (function (arglist__4743){
var args__4648__auto__ = cljs.core.seq(arglist__4743);
return some_path__delegate(args__4648__auto__);
});
some_path.cljs$core$IFn$_invoke$arity$variadic = some_path__delegate;
return some_path;
})()
;})(action__4649__auto___4741))
;
var action__4649__auto___4746 = (function (params__4650__auto__){
if(cljs.core.map_QMARK_.call(null,params__4650__auto__)){
var map__4744 = params__4650__auto__;
var map__4744__$1 = ((cljs.core.seq_QMARK_.call(null,map__4744))?cljs.core.apply.call(null,cljs.core.hash_map,map__4744):map__4744);
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Not Found</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__4650__auto__)){
var vec__4745 = params__4650__auto__;
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Not Found</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__4649__auto___4746);

cljsworkshop.core.main = (function main(){
var content = "Hello World from ClojureScript";
var element = (document.getElementsByTagName("main")[(0)]);
return cljsworkshop.core.set_html_BANG_.call(null,element,content);
});
cljsworkshop.core.main1 = (function main1(){
var counter = cljs.core.atom.call(null,(0));
var button = goog.dom.getElement("button");
var display = goog.dom.getElement("clicksnumber");
display.innerHTML = cljs.core.deref.call(null,counter);

return goog.events.listen(button,"click",((function (counter,button,display){
return (function (event){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return display.innerHTML = cljs.core.deref.call(null,counter);
});})(counter,button,display))
);
});
cljsworkshop.core.main2 = (function main2(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var history = (new goog.History());
goog.events.listen(history,"navigate",((function (history){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(history))
);

return history.setEnabled(true);
});
cljsworkshop.core.main2.call(null);

//# sourceMappingURL=core.js.map