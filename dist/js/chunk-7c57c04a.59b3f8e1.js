(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c57c04a"],{2198:function(t,e,a){},"2d5f":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("6a3c");function i(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Object(n["a"])(t,"event",e),i=a.loading,s=a.entity;return{loading:i,event:s}}},"67de":function(t,e,a){},"6a3c":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a("7db0");var n=a("a6f4"),i=a("8d7e"),s=a("3183"),c=a("1c98"),r=a("42fe"),o=a("4dc1"),l={project:r["a"],place:c["a"],event:o["a"]};function u(t){return l[t]}function d(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=u(e),r="GET_"+e.toUpperCase(),o=Object(n["f"])(!1),l=Object(n["f"])(void 0),d=Object(i["a"])(s["a"],{GET_ENTITY:e+"/"+r}),f=d.GET_ENTITY,m=Object(i["b"])(s["a"],{entities:e+"/"+e+"s"}),p=m.entities;return Object(n["e"])((function(){o.value=!0,f(t).then((function(){o.value=!1,l.value=a?new c(p.value.find((function(e){return e.id===t}))):p.value.find((function(e){return e.id===t}))}))})),{loading:o,entity:l}}},7047:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.image?a("v-img",{class:t.isDefault?"":"c-pointer",attrs:{src:t.image.medium},on:{click:function(e){t.isDefault||(t.expand_image=!0)}}},[[a("v-dialog",{attrs:{width:"90%"},model:{value:t.expand_image,callback:function(e){t.expand_image=e},expression:"expand_image"}},[a("image-popup",{attrs:{image:t.image},on:{close:function(e){t.expand_image=!1}}})],1)]],2):t._e()},i=[],s=a("a6f4"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":t.image.thumb,src:t.image.full},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},r=[],o=Object(s["c"])({name:"ImagePopup",props:{image:Object}}),l=o,u=(a("bfb1"),a("2877")),d=a("6544"),f=a.n(d),m=a("8336"),p=a("b0af"),g=a("132d"),v=a("adda"),b=a("490a"),h=a("0fd9"),_=Object(u["a"])(l,c,r,!1,null,"05125804",null),x=_.exports;f()(_,{VBtn:m["a"],VCard:p["a"],VIcon:g["a"],VImg:v["a"],VProgressCircular:b["a"],VRow:h["a"]});var j=a("4a42"),C=Object(s["c"])({name:"MediumImage",components:{ImagePopup:x},props:{image:{type:Object,default:function(){return new j["a"]}}},setup:function(t){var e=Object(s["f"])(!1),a="https://res.cloudinary.com/dyigive9u/image/upload/v1611173096/default_image_01_scb2id.png"===t.image.full;return{expand_image:e,isDefault:a}}}),y=C,O=a("169a"),w=Object(u["a"])(y,n,i,!1,null,"e60b98d0",null);e["a"]=w.exports;f()(w,{VDialog:O["a"],VImg:v["a"]})},"8f5a":function(t,e,a){},9794:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return!t.loading&&t.event?a("div",{staticClass:"pt-sm-5",staticStyle:{"max-width":"800px",margin:"auto"}},[a("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center mb-5"},[a("medium-image",{staticClass:"image mr-sm-5 flex-grow-0",attrs:{image:t.event.image}}),a("div",{staticClass:"d-flex flex-column flex-wrap align-center align-sm-start"},[a("h1",{staticClass:"mt-2"},[t._v(" "+t._s(t.event.title)+" "),a("v-btn",{staticClass:"ml-1",attrs:{icon:"",fab:"",small:"",to:"/event/"+t.event.id+"/edit"}},[a("v-icon",[t._v("edit")])],1)],1),a("current-caldates",{staticClass:"ml-1",attrs:{caldates:t.event.caldates,title:"Dates du projet",more:""}})],1)],1),a("div",{staticClass:"mx-2"},[a("current-tags",{attrs:{tags:t.event.tags,label:"Tags du projet"}})],1),a("div",{staticClass:"description grey lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap",class:"xs"!==t.$vuetify.breakpoint.name?"rounded-xl":""},[t._v(" "+t._s(t.event.description)+" ")])]):t._e()},i=[],s=a("a6f4"),c=a("b679"),r=a("2d5f"),o=a("7047"),l=a("7ee6"),u=Object(s["c"])({name:"EventOverview",components:{CurrentTags:c["a"],MediumImage:o["a"],CurrentCaldates:l["a"]},setup:function(t,e){var a=e.root,n=parseInt(a.$route.params.id),i=Object(r["a"])(n),s=i.event,c=i.loading;return{event:s,loading:c}}}),d=u,f=(a("b2e4"),a("2877")),m=a("6544"),p=a.n(m),g=a("8336"),v=a("132d"),b=Object(f["a"])(d,n,i,!1,null,"0d1b7720",null);e["default"]=b.exports;p()(b,{VBtn:g["a"],VIcon:v["a"]})},abe6:function(t,e,a){"use strict";a("b6a3")},b2e4:function(t,e,a){"use strict";a("2198")},b679:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("v-card",{staticClass:"tags-container px-3 pt-2 pb-1 d-flex flex-column align-center justify-center rounded-xl",class:t.editable?"mb-4 pb-3":"",attrs:{outlined:"",width:"100%"}},[a("div",{staticClass:"text-caption labelized noselect"},[t._v(t._s(t.label))]),t.tags.length?a("v-chip-group",{staticStyle:{width:"100%"},attrs:{"show-arrows":"xs"!==t.$vuetify.breakpoint.name}},t._l(t.tags,(function(e,n){return a("tag-chip",{key:n,attrs:{close:t.close,noselect:"",tag:e},on:{close:function(e){return t.$emit("removeTag",n)}}})})),1):a("span",{staticClass:"font-italic noselect"},[t._v("-- Pas encore de tag --")])],1),t.editable?a("v-btn",{staticClass:"pa-2 edit-icon",attrs:{small:"",elevation:"1","min-width":"0"},on:{click:function(e){return t.$emit("edit")}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:"",outlined:""}},[t._v(" edit ")]),t._v(" Modifier ")],1):t._e()],1)},i=[],s=a("a6f4"),c=a("eb76"),r=Object(s["c"])({components:{TagChip:c["a"]},props:{tags:{type:Array,default:function(){return[]}},label:{type:String,default:"Tags"},editable:{type:Boolean,default:!1},close:{type:Boolean,default:!1}},name:"",setup:function(){return{}}}),o=r,l=(a("abe6"),a("2877")),u=a("6544"),d=a.n(u),f=a("8336"),m=a("b0af"),p=a("5530"),g=(a("8f5a"),a("7efd")),v=a("a9ad"),b=a("58df"),h=Object(b["a"])(g["a"],v["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(p["a"])({},g["a"].options.methods.genData.call(this)))}}}),_=a("132d"),x=Object(l["a"])(o,n,i,!1,null,"dc20e248",null);e["a"]=x.exports;d()(x,{VBtn:f["a"],VCard:m["a"],VChipGroup:h,VIcon:_["a"]})},b6a3:function(t,e,a){},bfb1:function(t,e,a){"use strict";a("67de")}}]);
//# sourceMappingURL=chunk-7c57c04a.59b3f8e1.js.map