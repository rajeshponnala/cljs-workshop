// Compiled by ClojureScript 0.0-2843 {}
goog.provide('cljsworkshop.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.style');
cljsworkshop.core.app = goog.dom.getElement("app");
cljsworkshop.core.set_html_BANG_ = (function set_html_BANG_(el,content){
return el.innerHTML = content;
});
cljsworkshop.core.hello = (function hello(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello ",name], null);
});
cljsworkshop.core.page = (function page(body){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),"This is header"], null),body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer","div.footer",1103856744),"This is footer"], null)], null);
});
cljsworkshop.core.expanded = reagent.core.atom.call(null,false);
cljsworkshop.core.click_count = reagent.core.atom.call(null,(0));
cljsworkshop.core.counting_component = (function counting_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,cljsworkshop.core.click_count),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,cljsworkshop.core.click_count,cljs.core.inc);
})], null)], null)], null);
});
cljsworkshop.core.register = (function register(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.well","h1.well",1898720460),"Registration Form"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-12 well"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12","div.col-sm-12",-1900061411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6 form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"First Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter First Name Here..."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6 form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Last Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Last Name Here..."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Address Here...",new cljs.core.Keyword(null,"rows","rows",850049680),"3"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-4 form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"City"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter City Name Here..."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-4 form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"State"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter State Here..."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-4 form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Zip Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Zip Code Here..."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6 form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Designation Here.."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6 form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Company"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Company Name Here.."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Phone Number"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Phone Number Here.."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Email Address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Email Here.."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Website"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"url",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Website Name Here.."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-lg btn-info",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Submit"], null)], null)], null)], null)], null)], null)], null);
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
var action__8907__auto___9594 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9592 = params__8908__auto__;
var map__9592__$1 = ((cljs.core.seq_QMARK_.call(null,map__9592))?cljs.core.apply.call(null,cljs.core.hash_map,map__9592):map__9592);
cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,cljsworkshop.core.home_html);

var on_response = ((function (map__9592,map__9592__$1){
return (function (results){
var html = cljsworkshop.core.render_results.call(null,results);
return cljsworkshop.core.set_html_BANG_.call(null,goog.dom.getElement("results"),html);
});})(map__9592,map__9592__$1))
;
var on_search_click = ((function (on_response,map__9592,map__9592__$1){
return (function (e){
var user_query = goog.dom.getElement("query").value;
var searchuri = [cljs.core.str(cljsworkshop.core.search_url),cljs.core.str(user_query)].join('');
return cljsworkshop.core.do_jsonp.call(null,searchuri,on_response);
});})(on_response,map__9592,map__9592__$1))
;
return goog.events.listen(goog.dom.getElement("searchbutton"),"click",on_search_click);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9593 = params__8908__auto__;
cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,cljsworkshop.core.home_html);

var on_response = ((function (vec__9593){
return (function (results){
var html = cljsworkshop.core.render_results.call(null,results);
return cljsworkshop.core.set_html_BANG_.call(null,goog.dom.getElement("results"),html);
});})(vec__9593))
;
var on_search_click = ((function (on_response,vec__9593){
return (function (e){
var user_query = goog.dom.getElement("query").value;
var searchuri = [cljs.core.str(cljsworkshop.core.search_url),cljs.core.str(user_query)].join('');
return cljsworkshop.core.do_jsonp.call(null,searchuri,on_response);
});})(on_response,vec__9593))
;
return goog.events.listen(goog.dom.getElement("searchbutton"),"click",on_search_click);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__8907__auto___9594);

/**
* @param {...*} var_args
*/
cljsworkshop.core.home_path = ((function (action__8907__auto___9594){
return (function() { 
var home_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__8906__auto__);
};
var home_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9595__i = 0, G__9595__a = new Array(arguments.length -  0);
while (G__9595__i < G__9595__a.length) {G__9595__a[G__9595__i] = arguments[G__9595__i + 0]; ++G__9595__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9595__a,0);
} 
return home_path__delegate.call(this,args__8906__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__9596){
var args__8906__auto__ = cljs.core.seq(arglist__9596);
return home_path__delegate(args__8906__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__8907__auto___9594))
;
var action__8907__auto___9599 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9597 = params__8908__auto__;
var map__9597__$1 = ((cljs.core.seq_QMARK_.call(null,map__9597))?cljs.core.apply.call(null,cljs.core.hash_map,map__9597):map__9597);
return reagent.core.render.call(null,cljsworkshop.core.register,document.body);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9598 = params__8908__auto__;
return reagent.core.render.call(null,cljsworkshop.core.register,document.body);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/register",action__8907__auto___9599);

/**
* @param {...*} var_args
*/
cljsworkshop.core.register_path = ((function (action__8907__auto___9599){
return (function() { 
var register_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/register",args__8906__auto__);
};
var register_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9600__i = 0, G__9600__a = new Array(arguments.length -  0);
while (G__9600__i < G__9600__a.length) {G__9600__a[G__9600__i] = arguments[G__9600__i + 0]; ++G__9600__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9600__a,0);
} 
return register_path__delegate.call(this,args__8906__auto__);};
register_path.cljs$lang$maxFixedArity = 0;
register_path.cljs$lang$applyTo = (function (arglist__9601){
var args__8906__auto__ = cljs.core.seq(arglist__9601);
return register_path__delegate(args__8906__auto__);
});
register_path.cljs$core$IFn$_invoke$arity$variadic = register_path__delegate;
return register_path;
})()
;})(action__8907__auto___9599))
;
var action__8907__auto___9604 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9602 = params__8908__auto__;
var map__9602__$1 = ((cljs.core.seq_QMARK_.call(null,map__9602))?cljs.core.apply.call(null,cljs.core.hash_map,map__9602):map__9602);
var param = cljs.core.get.call(null,map__9602__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,message);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9603 = params__8908__auto__;
var param = cljs.core.nth.call(null,vec__9603,(0),null);
var message = [cljs.core.str("<h1>Parameter in url: <small>"),cljs.core.str(param),cljs.core.str("</small>!</h1>")].join('');
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,message);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:param",action__8907__auto___9604);

/**
* @param {...*} var_args
*/
cljsworkshop.core.some_path = ((function (action__8907__auto___9604){
return (function() { 
var some_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:param",args__8906__auto__);
};
var some_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9605__i = 0, G__9605__a = new Array(arguments.length -  0);
while (G__9605__i < G__9605__a.length) {G__9605__a[G__9605__i] = arguments[G__9605__i + 0]; ++G__9605__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9605__a,0);
} 
return some_path__delegate.call(this,args__8906__auto__);};
some_path.cljs$lang$maxFixedArity = 0;
some_path.cljs$lang$applyTo = (function (arglist__9606){
var args__8906__auto__ = cljs.core.seq(arglist__9606);
return some_path__delegate(args__8906__auto__);
});
some_path.cljs$core$IFn$_invoke$arity$variadic = some_path__delegate;
return some_path;
})()
;})(action__8907__auto___9604))
;
var action__8907__auto___9609 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9607 = params__8908__auto__;
var map__9607__$1 = ((cljs.core.seq_QMARK_.call(null,map__9607))?cljs.core.apply.call(null,cljs.core.hash_map,map__9607):map__9607);
var name = cljs.core.get.call(null,map__9607__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsworkshop.core.page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsworkshop.core.hello,name], null)], null),document.body);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9608 = params__8908__auto__;
var name = cljs.core.nth.call(null,vec__9608,(0),null);
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsworkshop.core.page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsworkshop.core.hello,name], null)], null),document.body);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/hello/:name",action__8907__auto___9609);

/**
* @param {...*} var_args
*/
cljsworkshop.core.hello_path = ((function (action__8907__auto___9609){
return (function() { 
var hello_path__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/hello/:name",args__8906__auto__);
};
var hello_path = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9610__i = 0, G__9610__a = new Array(arguments.length -  0);
while (G__9610__i < G__9610__a.length) {G__9610__a[G__9610__i] = arguments[G__9610__i + 0]; ++G__9610__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9610__a,0);
} 
return hello_path__delegate.call(this,args__8906__auto__);};
hello_path.cljs$lang$maxFixedArity = 0;
hello_path.cljs$lang$applyTo = (function (arglist__9611){
var args__8906__auto__ = cljs.core.seq(arglist__9611);
return hello_path__delegate(args__8906__auto__);
});
hello_path.cljs$core$IFn$_invoke$arity$variadic = hello_path__delegate;
return hello_path;
})()
;})(action__8907__auto___9609))
;
var action__8907__auto___9614 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9612 = params__8908__auto__;
var map__9612__$1 = ((cljs.core.seq_QMARK_.call(null,map__9612))?cljs.core.apply.call(null,cljs.core.hash_map,map__9612):map__9612);
return reagent.core.render.call(null,cljsworkshop.core.counting_component,document.body);
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9613 = params__8908__auto__;
return reagent.core.render.call(null,cljsworkshop.core.counting_component,document.body);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/atomex/",action__8907__auto___9614);

/**
* @param {...*} var_args
*/
cljsworkshop.core.atomex = ((function (action__8907__auto___9614){
return (function() { 
var atomex__delegate = function (args__8906__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/atomex/",args__8906__auto__);
};
var atomex = function (var_args){
var args__8906__auto__ = null;
if (arguments.length > 0) {
var G__9615__i = 0, G__9615__a = new Array(arguments.length -  0);
while (G__9615__i < G__9615__a.length) {G__9615__a[G__9615__i] = arguments[G__9615__i + 0]; ++G__9615__i;}
  args__8906__auto__ = new cljs.core.IndexedSeq(G__9615__a,0);
} 
return atomex__delegate.call(this,args__8906__auto__);};
atomex.cljs$lang$maxFixedArity = 0;
atomex.cljs$lang$applyTo = (function (arglist__9616){
var args__8906__auto__ = cljs.core.seq(arglist__9616);
return atomex__delegate(args__8906__auto__);
});
atomex.cljs$core$IFn$_invoke$arity$variadic = atomex__delegate;
return atomex;
})()
;})(action__8907__auto___9614))
;
var action__8907__auto___9619 = (function (params__8908__auto__){
if(cljs.core.map_QMARK_.call(null,params__8908__auto__)){
var map__9617 = params__8908__auto__;
var map__9617__$1 = ((cljs.core.seq_QMARK_.call(null,map__9617))?cljs.core.apply.call(null,cljs.core.hash_map,map__9617):map__9617);
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Not Found</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__8908__auto__)){
var vec__9618 = params__8908__auto__;
return cljsworkshop.core.set_html_BANG_.call(null,cljsworkshop.core.app,"<h1>Not Found</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__8907__auto___9619);

cljsworkshop.core.main = (function main(){
var content = "Hello World from ClojureScript";
var element = (document.getElementsByTagName("main")[(0)]);
return cljsworkshop.core.set_html_BANG_.call(null,element,content);
});
cljsworkshop.core.main1 = (function main1(){
var counter = reagent.core.atom.call(null,(0));
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