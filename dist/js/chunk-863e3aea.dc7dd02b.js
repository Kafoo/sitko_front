(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-863e3aea"],{"2d5f":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("6a3c");function i(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Object(n["a"])(t,"event",e),i=a.loading,s=a.entity;return{loading:i,event:s}}},"67de":function(t,e,a){},"6a3c":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a("7db0");var n=a("a6f4"),i=a("8d7e"),s=a("3183"),c=a("1c98"),r=a("42fe"),l=a("4dc1"),o={project:r["a"],place:c["a"],event:l["a"]};function u(t){return o[t]}function d(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=u(e),r="GET_"+e.toUpperCase(),l=Object(n["f"])(!1),o=Object(n["f"])(void 0),d=Object(i["a"])(s["a"],{GET_ENTITY:e+"/"+r}),p=d.GET_ENTITY,f=Object(i["b"])(s["a"],{entities:e+"/"+e+"s"}),m=f.entities;return Object(n["e"])((function(){l.value=!0,p(t).then((function(){l.value=!1,o.value=a?new c(m.value.find((function(e){return e.id===t}))):m.value.find((function(e){return e.id===t}))}))})),{loading:l,entity:o}}},7047:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.image?a("v-img",{class:t.isDefault?"":"c-pointer",attrs:{src:t.image.medium},on:{click:function(e){t.isDefault||(t.expand_image=!0)}}},[[a("v-dialog",{attrs:{width:"90%"},model:{value:t.expand_image,callback:function(e){t.expand_image=e},expression:"expand_image"}},[a("image-popup",{attrs:{image:t.image},on:{close:function(e){t.expand_image=!1}}})],1)]],2):t._e()},i=[],s=a("a6f4"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":t.image.thumb,src:t.image.full},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},r=[],l=Object(s["c"])({name:"ImagePopup",props:{image:Object}}),o=l,u=(a("bfb1"),a("2877")),d=a("6544"),p=a.n(d),f=a("8336"),m=a("b0af"),v=a("132d"),g=a("adda"),b=a("490a"),h=a("0fd9"),_=Object(u["a"])(o,c,r,!1,null,"05125804",null),x=_.exports;p()(_,{VBtn:f["a"],VCard:m["a"],VIcon:v["a"],VImg:g["a"],VProgressCircular:b["a"],VRow:h["a"]});var y=a("4a42"),j=Object(s["c"])({name:"MediumImage",components:{ImagePopup:x},props:{image:{type:Object,default:function(){return new y["a"]}}},setup:function(t){var e=Object(s["f"])(!1),a="https://res.cloudinary.com/dyigive9u/image/upload/v1611173096/default_image_01_scb2id.png"===t.image.full;return{expand_image:e,isDefault:a}}}),C=j,O=a("169a"),w=Object(u["a"])(C,n,i,!1,null,"e60b98d0",null);e["a"]=w.exports;p()(w,{VDialog:O["a"],VImg:g["a"]})},"73ab":function(t,e,a){"use strict";a("a0d3")},"7ff3":function(t,e,a){},"82ce":function(t,e,a){"use strict";a("7ff3")},"8f5a":function(t,e,a){},9794:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return!t.loading&&t.event?a("div",{staticClass:"pt-sm-5",staticStyle:{"max-width":"800px",margin:"auto"}},[a("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center mb-5"},[a("medium-image",{staticClass:"image mr-sm-5 flex-grow-0",attrs:{image:t.event.image}}),a("div",{staticClass:"d-flex flex-column flex-wrap align-center align-sm-start"},[a("h1",{staticClass:"mt-2"},[t._v(" "+t._s(t.event.title)+" "),t.user.id==t.event.author.id?a("v-btn",{staticClass:"ml-1",attrs:{icon:"",fab:"",small:"",to:"/event/"+t.event.id+"/edit"}},[a("v-icon",[t._v("edit")])],1):t._e()],1),a("div"),a("place-chip",{attrs:{place:t.event.place}}),a("span",{staticClass:"ml-1 text-caption grey--text text--darken-1"},[t._v(" "+t._s(t._f("capitalize")(t.$t("created_by.event",{user:t.event.author.name})))+" ")]),a("current-caldates",{staticClass:"ml-1",attrs:{caldates:t.event.caldates,title:"Dates du projet",more:""}})],1)],1),a("div",{staticClass:"mx-2"},[a("current-tags",{attrs:{tags:t.event.tags,label:t._f("capitalize")(t.$t("event tags"))}})],1),a("div",{staticClass:"description grey lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap",class:"xs"!==t.$vuetify.breakpoint.name?"rounded-xl":""},[t._v(" "+t._s(t.event.description)+" ")])]):t._e()},i=[],s=a("a6f4"),c=a("8d7e"),r=a("b679"),l=a("2d5f"),o=a("7047"),u=a("7ee6"),d=a("e6c8"),p=Object(s["c"])({name:"EventOverview",components:{CurrentTags:r["a"],MediumImage:o["a"],CurrentCaldates:u["a"],PlaceChip:d["a"]},setup:function(t,e){var a=e.root,n=Object(c["b"])({user:"auth/user"}),i=n.user,s=parseInt(a.$route.params.id),r=Object(l["a"])(s),o=r.event,u=r.loading;return{event:o,loading:u,user:i}}}),f=p,m=(a("82ce"),a("2877")),v=a("6544"),g=a.n(v),b=a("8336"),h=a("132d"),_=Object(m["a"])(f,n,i,!1,null,"02109bcc",null);e["default"]=_.exports;g()(_,{VBtn:b["a"],VIcon:h["a"]})},a0d3:function(t,e,a){},b679:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("v-card",{staticClass:"tags-container px-3 pt-2 pb-1 d-flex flex-column align-center justify-center rounded-xl",class:t.editable?"mb-4 pb-3":"",attrs:{outlined:"",width:"100%"}},[a("div",{staticClass:"text-caption labelized noselect"},[t._v(t._s(t.label))]),t.tags.length?a("v-chip-group",{staticStyle:{width:"100%"},attrs:{"show-arrows":"xs"!==t.$vuetify.breakpoint.name}},t._l(t.tags,(function(e,n){return a("tag-chip",{key:n,attrs:{close:t.close,noselect:"",tag:e},on:{close:function(e){return t.$emit("removeTag",n)}}})})),1):a("span",{staticClass:"font-italic noselect"},[t._v("-- "+t._s(t._f("capitalize")(t.$t("no tag yet")))+" --")])],1),t.editable?a("v-btn",{staticClass:"pa-2 edit-icon",attrs:{small:"",elevation:"1","min-width":"0"},on:{click:function(e){return t.$emit("edit")}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:"",outlined:""}},[t._v(" edit ")]),t._v(" "+t._s(t.$t("options.edit"))+" ")],1):t._e()],1)},i=[],s=a("a6f4"),c=a("eb76"),r=Object(s["c"])({components:{TagChip:c["a"]},props:{tags:{type:Array,default:function(){return[]}},label:{type:String,default:"Tags"},editable:{type:Boolean,default:!1},close:{type:Boolean,default:!1}},name:"",setup:function(){return{}}}),l=r,o=(a("73ab"),a("2877")),u=a("6544"),d=a.n(u),p=a("8336"),f=a("b0af"),m=a("5530"),v=(a("8f5a"),a("7efd")),g=a("a9ad"),b=a("58df"),h=Object(b["a"])(v["a"],g["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(m["a"])(Object(m["a"])({},v["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(m["a"])({},v["a"].options.methods.genData.call(this)))}}}),_=a("132d"),x=Object(o["a"])(l,n,i,!1,null,"16faff1d",null);e["a"]=x.exports;d()(x,{VBtn:p["a"],VCard:f["a"],VChipGroup:h,VIcon:_["a"]})},bfb1:function(t,e,a){"use strict";a("67de")},e6c8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"pl-0 pr-3",attrs:{to:"/place/"+t.place.id,height:"40px",rounded:"",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-2",attrs:{image:t.place.image.thumb}}),a("span",[t._v(t._s(t.place.name))])],1)},i=[],s=a("a6f4"),c=a("a6ea"),r=Object(s["c"])({name:"PlaceChip",components:{TinyAvatar:c["a"]},props:{place:{type:Object}},setup:function(){return{}}}),l=r,o=a("2877"),u=a("6544"),d=a.n(u),p=a("8336"),f=Object(o["a"])(l,n,i,!1,null,"552ce949",null);e["a"]=f.exports;d()(f,{VBtn:p["a"]})}}]);
//# sourceMappingURL=chunk-863e3aea.dc7dd02b.js.map