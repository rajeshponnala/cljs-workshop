// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljsworkshop.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.net.Jsonp');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.style');
cljsworkshop.core.app = goog.dom.getElement("app");
cljsworkshop.core.set_html_BANG_ = (function set_html_BANG_(el,content){
return el.innerHTML = content;
});
cljsworkshop.core.search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
cljsworkshop.core.home_html = [cljs.core.str("<h1>Wikipedia Search:</h1>"),cljs.core.str("<section>"),cljs.core.str(" <input id=\"query\" placeholder=\"Type your search...\" />"),cljs.core.str("  <button id=\"searchbutton\">Search</button>"),cljs.core.str("  <ul id=\"results\"></ul>"),cljs.core.str("</section>")].join('');
cljsworkshop.core.render_results = (function render_results(results){
var results__$1 = cljs.core.js__GT_clj.call(null,results);
return cljs.core.reduce.call(null,((function (results__$1){
return (function (acc,result){
return [cljs.core.str(acc),cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join('');
});})(results__$1))
,"",cljs.core.second.call(null,results__$1));
});
cljsworkshop.core.do_jsonp = (function do_jsonp(uri,callback){
var req = (new goog.net.Jsonp((new goog.Uri(uri))));
return req.send(null,callback);
});
var action__4649__auto___4811 = (function (params__4650__auto__){
if(cljs.core.map_QMARK_.call(null,params__4650__auto__)){
var map__4809 = params__4650__auto__;
var map__4809__$1 = ((cljs.core.seq_QMARK_.call(null,map__4809))?cljs.core.apply.call(null,cljs.core.hash_map,map__4809):map__4809);
cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,cljsworkshop.core.home_html);

var on_response = ((function (map__4809,map__4809__$1){
return (function (results){
var html = cljsworkshop.core.render_results.call(null,results);
return cljsworkshop.core.set_html_BANG_.call(null,goog.dom.getElement("results"),html);
});})(map__4809,map__4809__$1))
;
var on_search_click = ((function (on_response,map__4809,map__4809__$1){
return (function (e){
var user_query = goog.dom.getElement("query").value;
var searchuri = [cljs.core.str(cljsworkshop.core.search_url),cljs.core.str(user_query)].join('');
return cljsworkshop.core.do_jsonp.call(null,searchuri,on_response);
});})(on_response,map__4809,map__4809__$1))
;
return goog.events.listen(goog.dom.getElement("searchbutton"),"click",on_search_click);
} else {
if(cljs.core.vector_QMARK_.call(null,params__4650__auto__)){
var vec__4810 = params__4650__auto__;
cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,cljsworkshop.core.home_html);

var on_response = ((function (vec__4810){
return (function (results){
var html = cljsworkshop.core.render_results.call(null,results);
return cljsworkshop.core.set_html_BANG_.call(null,goog.dom.getElement("results"),html);
});})(vec__4810))
;
var on_search_click = ((function (on_response,vec__4810){
return (function (e){
var user_query = goog.dom.getElement("query").value;
var searchuri = [cljs.core.str(cljsworkshop.core.search_url),cljs.core.str(user_query)].join('');
return cljsworkshop.core.do_jsonp.call(null,searchuri,on_response);
});})(on_response,vec__4810))
;
return goog.events.listen(goog.dom.getElement("searchbutton"),"click",on_search_click);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__4649__auto___4811);

/**
* @param {...*} var_args
*/
cljsworkshop.core.home_path = ((function (action__4649__auto___4811){
return (function() { 
var home_path__delegate = function (args__4648__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__4648__auto__);
};
var home_path = function (var_args){
var args__4648__auto__ = null;
if (arguments.length > 0) {
var G__4812__i = 0, G__4812__a = new Array(arguments.length -  0);
while (G__4812__i < G__4812__a.length) {G__4812__a[G__4812__i] = arguments[G__4812__i + 0]; ++G__4812__i;}
  args__4648__auto__ = new cljs.core.IndexedSeq(G__4812__a,0);
} 
return home_path__delegate.call(this,args__4648__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__4813){
var args__4648__auto__ = cljs.core.seq(arglist__4813);
return home_path__delegate(args__4648__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__4649__auto___4811))
;
var action__4649__auto___4816 = (function (params__4650__auto__){
if(cljs.core.map_QMARK_.call(null,params__4650__auto__)){
var map__4814 = params__4650__auto__;
var map__4814__$1 = ((cljs.core.seq_QMARK_.call(null,map__4814))?cljs.core.apply.call(null,cljs.core.hash_map,map__4814):map__4814);
var param = cljs.core.get.call(null,map__4814__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,message);
} else {
if(cljs.core.vector_QMARK_.call(null,params__4650__auto__)){
var vec__4815 = params__4650__auto__;
var param = cljs.core.nth.call(null,vec__4815,(0),null);
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,message);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:param",action__4649__auto___4816);

/**
* @param {...*} var_args
*/
cljsworkshop.core.some_path = ((function (action__4649__auto___4816){
return (function() { 
var some_path__delegate = function (args__4648__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:param",args__4648__auto__);
};
var some_path = function (var_args){
var args__4648__auto__ = null;
if (arguments.length > 0) {
var G__4817__i = 0, G__4817__a = new Array(arguments.length -  0);
while (G__4817__i < G__4817__a.length) {G__4817__a[G__4817__i] = arguments[G__4817__i + 0]; ++G__4817__i;}
  args__4648__auto__ = new cljs.core.IndexedSeq(G__4817__a,0);
} 
return some_path__delegate.call(this,args__4648__auto__);};
some_path.cljs$lang$maxFixedArity = 0;
some_path.cljs$lang$applyTo = (function (arglist__4818){
var args__4648__auto__ = cljs.core.seq(arglist__4818);
return some_path__delegate(args__4648__auto__);
});
some_path.cljs$core$IFn$_invoke$arity$variadic = some_path__delegate;
return some_path;
})()
;})(action__4649__auto___4816))
;
var action__4649__auto___4821 = (function (params__4650__auto__){
if(cljs.core.map_QMARK_.call(null,params__4650__auto__)){
var map__4819 = params__4650__auto__;
var map__4819__$1 = ((cljs.core.seq_QMARK_.call(null,map__4819))?cljs.core.apply.call(null,cljs.core.hash_map,map__4819):map__4819);
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Not Found</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__4650__auto__)){
var vec__4820 = params__4650__auto__;
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Not Found</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__4649__auto___4821);

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