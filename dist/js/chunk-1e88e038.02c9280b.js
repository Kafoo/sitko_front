(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e88e038"],{"13b3":function(t,e,i){},"1bfb":function(t,e,i){},2331:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.user?i("v-btn",{staticClass:"pl-0 pr-2 text-none",attrs:{to:"/user/"+t.user.id,height:"25px",text:"",color:"grey darken-2",small:""}},[i("tiny-avatar",{staticClass:"d-inline mr-1",attrs:{size:"20",image:t.user.image}}),t._v(" "+t._s(t.user.name)+" ")],1):t._e()},s=[],r=i("a6f4"),a=i("a6ea"),o=Object(r["c"])({name:"UserChip",props:{user:Object},components:{TinyAvatar:a["a"]},setup:function(){return{}}}),l=o,c=i("2877"),h=i("6544"),u=i.n(h),d=i("8336"),v=Object(c["a"])(l,n,s,!1,null,"1f33fa00",null);e["a"]=v.exports;u()(v,{VBtn:d["a"]})},"4ca4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("primary-content-body",[i("div",{staticClass:"d-flex flex-column align-center"},[i("page-title",[t._v(t._s(t._f("capitalize")(t.$t("my network"))))]),i("v-tabs",{staticClass:"mb-5",attrs:{"no-animation":"",centered:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab",[t._v(t._s(t.$t("users")))]),i("v-tab",[t._v(t._s(t.$t("places")))])],1),i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[i("div",{staticClass:"d-flex flex-wrap justify-center",staticStyle:{"min-height":"100px","min-width":"100px"}},[t.loading_users?i("loading-circle",{attrs:{small:""}}):t.users.length?t._l(t.users,(function(t){return i("user-chip",{key:t.id,staticClass:"ma-3",attrs:{user:t}})})):i("div",{staticClass:"ma-5"},[t._v(" -- "+t._s(t.$t("You are linked to no user"))+" -- ")])],2)]),i("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[i("div",{staticClass:"d-flex flex-wrap justify-center"},[t.loading_places?i("loading-circle",{attrs:{small:""}}):t.places.length?t._l(t.places,(function(t){return i("place-card",{key:t.id,staticClass:"ma-3",attrs:{place:t}})})):i("div",{staticClass:"ma-5"},[t._v(" -- "+t._s(t.$t("You are linked to no place"))+" -- ")])],2)])],1)],1)])},s=[],r=i("a6f4"),a=i("b7aa"),o=i("fdc6"),l=i("2331"),c=i("8d7e"),h=Object(r["c"])({name:"MyNetwork",components:{PlaceCard:o["a"],UserChip:l["a"]},setup:function(){var t=Object(r["f"])(null),e=Object(c["b"])({user:"auth/user"}),i=(e.user,Object(a["a"])("place/GET_USER_PLACES")),n=(i.entity,i.loading,Object(a["a"])("place/GET_LINKED_PLACES")),s=n.entity,o=n.loading,l=Object(a["a"])("user/GET_LINKED_USERS"),h=l.entity,u=l.loading;return{tab:t,places:s,loading_places:o,users:h,loading_users:u}}}),u=h,d=i("2877"),v=i("6544"),f=i.n(v),p=(i("c975"),i("ac1f"),i("5319"),i("5530")),m=i("4e82"),b=i("1c87"),g=i("7560"),w=i("80d2"),x=i("58df"),C=Object(x["a"])(b["a"],Object(m["a"])("tabsBar"),g["a"]),y=C.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({"v-tab":!0},b["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,s=i.data;return s.attrs=Object(p["a"])(Object(p["a"])({},s.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),s.on=Object(p["a"])(Object(p["a"])({},s.on),{},{keydown:function(t){t.keyCode===w["s"].enter&&e.click(t),e.$emit("keydown",t)}}),t(n,s,this.$slots.default)}}),T=i("9d65"),$=i("c3f0"),S=Object(x["a"])(T["a"],Object(m["a"])("windowGroup","v-window-item","v-window")),I=S.extend().extend().extend({name:"v-window-item",directives:{Touch:$["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(w["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(w["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),O=I.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=I.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),B=(i("b0c0"),i("a9e3"),i("1bfb"),i("b85c")),j=i("7efd"),k=i("d10f"),_=Object(x["a"])(j["a"],k["a"],g["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},j["a"].options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=j["a"].options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var i,n=this.items,s=t.path,r=e.path,a=!1,o=!1,l=Object(B["a"])(n);try{for(l.s();!(i=l.n()).done;){var c=i.value;if(c.to===s?a=!0:c.to===r&&(o=!0),a&&o)break}}catch(h){l.e(h)}finally{l.f()}!a&&o&&(this.internalValue=void 0)}}},render:function(t){var e=j["a"].options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),A=(i("99af"),i("7db0"),i("c740"),i("13b3"),i("afdd")),E=i("9d26"),R=i("604c"),V=R["a"].extend({name:"v-window",directives:{Touch:$["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(p["a"])(Object(p["a"])({},R["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s=this,r={click:function(t){t.stopPropagation(),s.changedByDelimiters=!0,i()}},a={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},o=null!=(n=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:r,attrs:a}))?n:[this.$createElement(A["a"],{props:{icon:!0},attrs:a,on:r},[this.$createElement(E["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},o)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),G=V.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},V.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||R["a"].options.methods.getValue.call(this,t,e)}}}),z=i("a9ad"),N=Object(x["a"])(z["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),P=i("a452"),D=i("dc22"),H=Object(x["a"])(z["a"],P["a"],g["a"]),L=H.extend().extend({name:"v-tabs",directives:{Resize:D["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(p["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(w["f"])(this.slider.height),left:this.isReversed?void 0:Object(w["f"])(this.slider.left),right:this.isReversed?Object(w["f"])(this.slider.right):void 0,top:this.vertical?Object(w["f"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(w["f"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var i=e.$el;t.slider={height:t.vertical?i.scrollHeight:Number(t.sliderSize),left:t.vertical?0:i.offsetLeft,right:t.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:t.vertical?Number(t.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var i=this,n={style:{height:Object(w["f"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){i.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,n),this.setBackgroundColor(this.backgroundColor,n),this.$createElement(_,n,[this.genSlider(e),t])},genItems:function(t,e){var i=this;return t||(e.length?this.$createElement(G,{props:{value:this.internalValue},on:{change:function(t){i.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(N,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,i=[],n=[],s=this.$slots.default||[],r=s.length,a=0;a<r;a++){var o=s[a];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":i.push(o);break;default:n.push(o)}else n.push(o)}return{tab:n,slider:e,items:t,item:i}}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,r=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,n),this.genItems(s,r)])}}),W=Object(d["a"])(u,n,s,!1,null,"748348c2",null);e["default"]=W.exports;f()(W,{VTab:y,VTabItem:O,VTabs:L,VTabsItems:G})},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]}}]);
//# sourceMappingURL=chunk-1e88e038.02c9280b.js.map