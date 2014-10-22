if(!lt.util.load.provided_QMARK_('lt.plugins.user')) {
goog.provide('lt.plugins.user');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.user.__BEH__push_active_tab = (function __BEH__push_active_tab(this$){lt.object.assoc_in_BANG_.call(null,lt.plugins.user.tabs_extended,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-tab","last-tab",3848306512)], null),new cljs.core.Keyword(null,"current-tab","current-tab",1613988019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.user.tabs_extended)));
return lt.object.assoc_in_BANG_.call(null,lt.plugins.user.tabs_extended,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tab","current-tab",1613988019)], null),this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","push-active-tab","lt.plugins.user/push-active-tab",2543491167),new cljs.core.Keyword(null,"throttle","throttle",2497347228),100,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.__BEH__push_active_tab,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.user.__BEH__last_tab = (function __BEH__last_tab(this$,tab){if(cljs.core.truth_(cljs.core.deref.call(null,tab)))
{return lt.objs.tabs.active_BANG_.call(null,tab);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","last-tab","lt.plugins.user/last-tab",1761750370),new cljs.core.Keyword(null,"throttle","throttle",2497347228),100,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.__BEH__last_tab,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab.last","tab.last",4356404417),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabs.last","tabs.last",3470658168),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tab: Last tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.user.tabs_extended,new cljs.core.Keyword(null,"tab.last","tab.last",4356404417),new cljs.core.Keyword(null,"last-tab","last-tab",3848306512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.user.tabs_extended)));
})], null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","tabs-extended","lt.plugins.user/tabs-extended",532149912),new cljs.core.Keyword(null,"last-tab","last-tab",3848306512),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"current-tab","current-tab",1613988019),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs-extended","tabs-extended",2586230298),null], null), null));
lt.plugins.user.tabs_extended = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.user","tabs-extended","lt.plugins.user/tabs-extended",532149912));
}

//# sourceMappingURL=user_compiled.js.map