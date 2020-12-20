(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b523b210"],{"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var i=a("3835"),n=a("5530"),s=(a("1f09"),a("c995")),o=a("24b2"),r=a("7560"),l=a("58df"),c=a("80d2");e["a"]=Object(l["a"])(s["a"],o["a"],r["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),n=Object(i["a"])(a,2),s=n[0],o=n[1],r=function(){return e.genStructure(s)};return Array.from({length:o}).map(r)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["o"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"5fe9":function(t,e,a){"use strict";a("644a")},"644a":function(t,e,a){},"6c16":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"place d-flex pb-12"},[a("div",{staticClass:"hidden-sm-and-down"},[a("sidebar",{attrs:{placeNavItems:t.placeNavItems}})],1),a("v-card",{staticClass:"ma-xs-0 ma-sm-5 pa-5 flex-grow-1 flex-shrink-10",attrs:{elevation:t.elevation,"min-width":"0"}},[a("router-view")],1),a("div",{staticClass:"hidden-md-and-up"},[a("bottombar",{attrs:{placeNavItems:t.placeNavItems}})],1)],1)},n=[],s=(a("b0c0"),a("5530")),o=a("2f62"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-navigation",{staticClass:"bottom-bar",attrs:{height:"50px",grow:"",shift:"",icon:"",and:"",text:"",color:"green"}},t._l(t.placeNavItems,(function(e,i){return a("v-btn",{key:i,staticClass:"mx-n2",attrs:{value:e.path,to:e.path}},[a("v-icon",{attrs:{tag:"li"}},[t._v(t._s(e.icon))]),a("span",[t._v(t._s(e.title))])],1)})),1)},l=[],c=a("a6f4"),h=Object(c["c"])({name:"Bottombar",props:{placeNavItems:Array}}),d=h,u=(a("5fe9"),a("2877")),p=a("6544"),v=a.n(p),f=(a("a9e3"),a("c7cd"),a("dd43"),a("3a66")),b=a("604c"),m=b["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return b["a"].options.computed.classes.call(this)}},methods:{genData:b["a"].options.methods.genData}}),g=a("a9ad"),y=a("24b2"),_=a("a452"),x=a("277e"),O=a("7560"),S=a("f2e7"),$=a("58df"),j=a("d9bd"),k=Object($["a"])(Object(f["a"])("bottom",["height","inputValue"]),g["a"],y["a"],Object(S["b"])("inputValue"),_["a"],x["a"],O["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return x["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(j["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(m,this.setTextColor(this.color,e),this.$slots.default)}}),B=a("8336"),C=a("132d"),w=Object(u["a"])(d,r,l,!1,null,null,null),V=w.exports;v()(w,{VBottomNavigation:k,VBtn:B["a"],VIcon:C["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading_place?a("v-skeleton-loader",{staticClass:"pt-10 pa-8 ma-5 elevation-3 flex-shrink-0",attrs:{type:"heading, list-item@5",width:"350px",height:"600px"}}):a("v-card",{staticClass:"d-flex flex-column align-center ma-5 elevation-3 flex-shrink-0",attrs:{width:"350px",height:"600px"}},[a("v-card-title",[t._v(t._s(t.place.name))]),t._l(t.placeNavItems,(function(e,i){return a("v-btn",{key:i,staticClass:"my-2",attrs:{to:e.path,width:"80%"}},[a("v-icon",{staticClass:"mx-3"},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)}))],2)],1)},L=[],I={data:function(){return{}},props:{placeNavItems:Array},computed:Object(s["a"])({},Object(o["c"])("place",["place","loading_place"]))},N=I,A=a("b0af"),z=a("99d9"),T=a("3129"),P=Object(u["a"])(N,E,L,!1,null,null,null),D=P.exports;v()(P,{VBtn:B["a"],VCard:A["a"],VCardTitle:z["c"],VIcon:C["a"],VSkeletonLoader:T["a"]});var G={name:"Place",components:{Sidebar:D,Bottombar:V},data:function(){return{place_id:this.$route.params.id}},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])("place",["place"])),{},{placeNavItems:function(){return[{title:this.$options.filters.capitalize(this.$t("home")),path:"/place/"+this.$route.params.id+"/overview",icon:"home"},{title:this.$options.filters.capitalize(this.$t("calendar")),path:"/place/"+this.$route.params.id+"/calendar",icon:"event"},{title:this.$options.filters.capitalize(this.$t("projects")),path:"/place/"+this.$route.params.id+"/projects",icon:"handyman"},{title:this.$options.filters.capitalize(this.$t("events")),path:"/place/"+this.$route.params.id+"/events",icon:"star"},{title:this.$options.filters.capitalize(this.$t("contact")),path:"/place/"+this.$route.params.id+"/contact",icon:"contact_support"}]},elevation:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 0}return 3}}),created:function(){this.GET_PLACE(this.place_id)},methods:Object(s["a"])({},Object(o["b"])("place",["GET_PLACE"]))},J=G,H=Object(u["a"])(J,i,n,!1,null,"0e2e5f01",null);e["default"]=H.exports;v()(H,{VCard:A["a"]})},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return l}));var i=a("b0af"),n=a("80d2"),s=Object(n["h"])("v-card__actions"),o=Object(n["h"])("v-card__subtitle"),r=Object(n["h"])("v-card__text"),l=Object(n["h"])("v-card__title");i["a"]},dd43:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b523b210.d8109dc6.js.map