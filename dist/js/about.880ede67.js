(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"169a":function(t,e,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var n=i("5530"),a=i("2909"),o=i("ade3"),s=(i("368e"),i("480e")),c=i("4ad4"),r=i("b848"),l=i("75eb"),d=i("e707"),u=i("e4d3"),h=i("21be"),f=i("f2e7"),v=i("a293"),b=i("58df"),m=i("d9bd"),g=i("80d2"),p=Object(b["a"])(c["a"],r["a"],l["a"],d["a"],u["a"],h["a"],f["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["t"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(s["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"3a3a":function(t,e,i){"use strict";i("42a9")},"42a9":function(t,e,i){},"466e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("primary-content-body",[i("page-title",{attrs:{title:t.$t("my account")}}),i("v-btn",{staticClass:"d-block my-4",attrs:{color:"grey",dark:""},on:{click:t.logout}},[t._v(" "+t._s(t.$t("logout"))+" ")]),i("v-btn",{staticClass:"d-block",attrs:{color:"red",dark:""},on:{click:function(e){t.dialog=!0}}},[t._v(" "+t._s(t.$t("delete my account"))+" ")]),i("confirm-dialog",{attrs:{show:t.dialog,text:t.$t("Account deletion is definitive."),cancel:t.$t("confirm.cancel"),confirm:t.$t("delete"),confirm_color:"red",loading:t.loading},on:{"cancel-action":function(e){t.dialog=!1},"confirm-action":function(e){return t.deleteUser()}}})],1)},a=[],o=i("5530"),s=i("2f62"),c=i("15f2"),r=i("9240"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"500"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-card",{staticClass:"pt-7 pb-3"},[i("v-card-text",{staticClass:"text-h6"},[t._v(" "+t._s(t._f("capitalize")(t.$t("confirm.sure")))),i("br"),t._v(" "+t._s(t.text)+" ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"secondary",text:"",disabled:t.loading},on:{click:function(e){return t.$emit("cancel-action")}}},[t._v(" "+t._s(t.cancel)+" ")]),i("v-btn",{attrs:{color:t.confirm_color,text:"",disabled:t.loading},on:{click:function(e){return t.$emit("confirm-action")}}},[t._v(" "+t._s(t.confirm)+" ")])],1),i("loading-bar",{attrs:{loading:t.loading}})],1)],1)},d=[],u=i("d4ec"),h=i("262e"),f=i("2caf"),v=i("9ab4"),b=i("2b0e"),m=i("60a3"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):t._e()},p=[],O=i("a6f4"),_=Object(O["c"])({name:"LoadingBar",props:{loading:Boolean}}),j=_,y=(i("3a3a"),i("2877")),w=i("6544"),x=i.n(w),$=i("8e36"),k=Object(y["a"])(j,g,p,!1,null,"ba70c288",null),C=k.exports;x()(k,{VProgressLinear:$["a"]});var E=function(t){Object(h["a"])(i,t);var e=Object(f["a"])(i);function i(){return Object(u["a"])(this,i),e.apply(this,arguments)}return i}(b["default"]);Object(v["a"])([Object(m["b"])(Boolean)],E.prototype,"show",void 0),Object(v["a"])([Object(m["b"])(String)],E.prototype,"text",void 0),Object(v["a"])([Object(m["b"])(String)],E.prototype,"cancel",void 0),Object(v["a"])([Object(m["b"])(String)],E.prototype,"confirm",void 0),Object(v["a"])([Object(m["b"])({default:"primary"})],E.prototype,"confirm_color",void 0),Object(v["a"])([Object(m["b"])({default:!1})],E.prototype,"loading",void 0),E=Object(v["a"])([Object(m["a"])({name:"ConfirmDialog",components:{LoadingBar:C}})],E);var A=E,S=A,B=i("8336"),T=i("b0af"),D=i("99d9"),L=i("169a"),I=i("ce7e"),V=i("2fa4"),U=Object(y["a"])(S,l,d,!1,null,null,null),N=U.exports;x()(U,{VBtn:B["a"],VCard:T["a"],VCardActions:D["a"],VCardText:D["b"],VDialog:L["a"],VDivider:I["a"],VSpacer:V["a"]});var Z={name:"Home",components:{PrimaryContentBody:c["a"],PageTitle:r["a"],ConfirmDialog:N},data:function(){return{dialog:!1,success:null,error:null,loading:!1}},computed:Object(o["a"])({},Object(s["c"])("auth",["user"])),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])("auth",["SEND_DELETE_USER","SEND_LOGOUT_REQUEST"])),{},{deleteUser:function(){var t=this;this.success=this.error=null,this.loading=!0,this.SEND_DELETE_USER(this.user).then((function(){t.loading=!1,t.$router.push("/").catch((function(){}))})).catch((function(e){t.error="Error deleting user.",console.log(e.response)}))},logout:function(){this.SEND_LOGOUT_REQUEST()}})},z=Z,F=Object(y["a"])(z,n,a,!1,null,"55737cec",null);e["default"]=F.exports;x()(F,{VBtn:B["a"]})},"8ce9":function(t,e,i){},9240:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",[t._v(t._s(t._f("capitalize")(t.title)))])},a=[],o=i("a6f4"),s=Object(o["c"])({name:"PageTitle",props:{title:String}}),c=s,r=i("2877"),l=Object(r["a"])(c,n,a,!1,null,null,null);e["a"]=l.exports},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return r}));var n=i("b0af"),a=i("80d2"),o=Object(a["h"])("v-card__actions"),s=Object(a["h"])("v-card__subtitle"),c=Object(a["h"])("v-card__text"),r=Object(a["h"])("v-card__title");n["a"]},ce7e:function(t,e,i){"use strict";var n=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=about.880ede67.js.map