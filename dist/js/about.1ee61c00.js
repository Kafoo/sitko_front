(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"368e":function(t,e,i){},"77be":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home mt-5 d-flex justify-center"},[i("v-card",{staticClass:"pa-8 mt-2 elevation-5",attrs:{"max-width":"700px",width:"80%"}},[i("h1",[t._v("Mon Compte")]),i("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"red",dark:""}},"v-btn",a,!1),n),[t._v(" Supprimer mon compte ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{staticClass:"pt-7 pb-3"},[i("v-card-text",{staticClass:"text-h6"},[t._v(" Sûr de chez sûr ? Aucun moyen de revenir en arrière ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" En fait non ")]),i("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.deleteUser(),t.dialog=!1}}},[t._v(" Supprimer ")])],1)],1)],1)],1)],1)},a=[],o=i("5530"),s=i("2f62"),r={name:"Home",data:function(){return{dialog:!1,success:null,error:null}},computed:Object(o["a"])({},Object(s["c"])("auth",["user"])),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])("auth",["sendDeleteUser"])),{},{deleteUser:function(){var t=this;this.success=this.error=null,this.sendDeleteUser(this.user).then((function(){t.$router.push("/").catch((function(){}))})).catch((function(e){t.error="Error deleting user.",console.log(e.response)}))}})},c=r,l=i("2877"),u=i("6544"),h=i.n(u),d=i("8336"),v=i("b0af"),f=i("99d9"),m=(i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a"),i("2909")),p=i("ade3"),b=(i("368e"),i("7560")),g=b["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:b["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}}),A=(i("b0c0"),i("b64b"),i("53ca")),y=i("2b0e"),O=y["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}}),x=i("f2e7"),$=i("58df"),j=i("80d2"),k=i("d9bd"),E=Object($["a"])(O,x["a"]),w=E.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(A["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(j["l"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(k["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(j["k"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(j["k"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),C=i("b848"),_=(i("4160"),i("159b"),i("9d65"));function D(t){var e=Object(A["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var N=Object($["a"])(_["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:D},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(j["j"])(this.$vnode,"context.$options._scopeId");return t&&Object(p["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(k["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}}),S=i("e707"),T=y["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}}),B=(i("99af"),y["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(j["m"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(j["m"])(e)],n=[].concat(Object(m["a"])(document.getElementsByClassName("v-menu__content--active")),Object(m["a"])(document.getElementsByClassName("v-dialog__content--active"))),a=0;a<n.length;a++)t.includes(n[a])||i.push(Object(j["m"])(n[a]));return Math.max.apply(Math,i)}}})),I=i("a293"),V=Object($["a"])(w,C["a"],N,S["a"],T,B,x["a"]),M=V.extend({name:"v-dialog",directives:{ClickOutside:I["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(p["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(p["a"])(t,"v-dialog--active",this.isActive),Object(p["a"])(t,"v-dialog--persistent",this.persistent),Object(p["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(p["a"])(t,"v-dialog--scrollable",this.scrollable),Object(p["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(k["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):S["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===j["n"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(m["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(g,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(o["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(o["a"])(Object(o["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(j["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(j["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),Z=(i("8ce9"),b["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(o["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(o["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})),L=i("2fa4"),F=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=F.exports;h()(F,{VBtn:d["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VDialog:M,VDivider:Z,VSpacer:L["a"]})},"8ce9":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r}));var n=i("b0af"),a=i("80d2"),o=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),r=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");n["a"]}}]);
//# sourceMappingURL=about.1ee61c00.js.map