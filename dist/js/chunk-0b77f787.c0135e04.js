(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b77f787"],{3063:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":t.image.thumb,src:t.image.full},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},i=[],s=a("a6f4"),n=Object(s["c"])({name:"ImagePopup",props:{image:Object}}),l=n,r=(a("bfb1"),a("2877")),o=a("6544"),u=a.n(o),p=a("8336"),d=a("b0af"),m=a("132d"),f=a("adda"),g=a("490a"),b=a("0fd9"),v=Object(r["a"])(l,c,i,!1,null,"05125804",null);e["a"]=v.exports;u()(v,{VBtn:p["a"],VCard:d["a"],VIcon:m["a"],VImg:f["a"],VProgressCircular:g["a"],VRow:b["a"]})},"67de":function(t,e,a){},7047:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.image?a("v-img",{staticClass:"image mt-sm-5",class:t.isDefault?"":"c-pointer",attrs:{"aspect-ratio":16/9,src:t.image.full},on:{click:function(e){t.isDefault||(t.expand_image=!0)}}},[[a("v-dialog",{attrs:{width:"90%"},model:{value:t.expand_image,callback:function(e){t.expand_image=e},expression:"expand_image"}},[a("image-popup",{attrs:{image:t.image},on:{close:function(e){t.expand_image=!1}}})],1)]],2):t._e()},i=[],s=a("a6f4"),n=a("3063"),l=a("4a42"),r=Object(s["c"])({name:"MediumImage",components:{ImagePopup:n["a"]},props:{image:{type:Object,default:function(){return new l["a"]}}},setup:function(t){var e=Object(s["f"])(!1),a="https://res.cloudinary.com/dyigive9u/image/upload/v1611173096/default_image_01_scb2id.png"===t.image.full;return{expand_image:e,isDefault:a}}}),o=r,u=(a("ec5c"),a("2877")),p=a("6544"),d=a.n(p),m=a("169a"),f=a("adda"),g=Object(u["a"])(o,c,i,!1,null,"e0c7988c",null);e["a"]=g.exports;d()(g,{VDialog:m["a"],VImg:f["a"]})},"70fe":function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("current-outlined",{attrs:{label:t.label,items:t.caldates,editable:t.editable,empty:t._f("capitalize")(t.$t("no date yet"))},on:{edit:function(e){return t.$emit("edit")}}},[a("div",{staticClass:"d-flex flex-column justify-center align-center"},t._l(t.caldates,(function(e,c){return a("caldate-chip",{key:e.id,attrs:{clickable:t.clickable,closable:t.closable,caldate:e},on:{close:function(e){return t.$emit("removeCaldate",c)}}})})),1)])],1)},i=[],s=a("a6f4"),n=a("5c65"),l=a("f221"),r=Object(s["c"])({components:{CaldateChip:n["a"],CurrentOutlined:l["a"]},props:{caldates:{type:Array,default:function(){return[]}},label:{type:String,default:"Caldates"},editable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1}},name:"",setup:function(){return{}}}),o=r,u=a("2877"),p=Object(u["a"])(o,c,i,!1,null,"85370d8e",null);e["a"]=p.exports},bfb1:function(t,e,a){"use strict";a("67de")},c3db:function(t,e,a){},e6c8:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"pl-0 pr-3",attrs:{outlined:"",to:"/place/"+t.place.id,height:"32px",rounded:"",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-2",attrs:{size:"28",image:t.place.image.thumb}}),a("span",[t._v(t._s(t.place.name))])],1)},i=[],s=a("a6f4"),n=a("a6ea"),l=Object(s["c"])({name:"PlaceChip",components:{TinyAvatar:n["a"]},props:{place:{type:Object}},setup:function(){return{}}}),r=l,o=a("2877"),u=a("6544"),p=a.n(u),d=a("8336"),m=Object(o["a"])(r,c,i,!1,null,"922bceae",null);e["a"]=m.exports;p()(m,{VBtn:d["a"]})},eacc:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("loading-circle",{attrs:{small:""}}):t.project?a("div",{staticStyle:{"max-width":"1000px",margin:"auto"}},[a("div",{staticClass:"d-flex justify-center"},[a("medium-image",{staticClass:"image mr-sm-5 flex-grow-0",attrs:{image:t.project.image}})],1),a("div",{staticClass:"mx-5 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch justify-space-around"},[a("div",{staticClass:"mt-2 mb-5 d-flex flex-column align-center text-center text-sm-start align-sm-start"},[a("h1",[t._v(" "+t._s(t.project.title)+" ")]),a("span",{staticClass:"ml-1 text-caption grey--text text--darken-1"},[t._v(" "+t._s(t._f("capitalize")(t.$t("created_by.project.public",{user:t.project.author.name})))+" ")]),t.user.id==t.project.author.id?a("v-btn",{staticClass:"mb-2 pa-0",attrs:{"x-small":"",text:"",plain:"",to:"/project/"+t.project.id+"/edit"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("edit")]),t._v(" "+t._s(t.$t("options.edit"))+" ")],1):t._e(),a("place-chip",{attrs:{place:t.project.place}})],1),a("div",{staticClass:"mt-4"},[a("current-caldates",{staticClass:"ml-1 mb-5",attrs:{clickable:"",caldates:t.project.caldates,label:t._f("capitalize")(t.$t("project dates")),more:""}})],1)]),a("div",{staticClass:"mx-5"},[a("current-tags",{attrs:{tags:t.project.tags,label:t._f("capitalize")(t.$t("project tags"))}})],1),a("div",{staticClass:"description grey lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap",class:"xs"!==t.$vuetify.breakpoint.name?"rounded-xl":""},[t._v(" "+t._s(t.project.description)+" ")])]):t._e()},i=[],s=a("a6f4"),n=a("8d7e"),l=a("3aa2"),r=a("b7aa"),o=a("7047"),u=a("70fe"),p=a("e6c8"),d=Object(s["c"])({name:"ProjectOverview",components:{CurrentTags:l["a"],MediumImage:o["a"],CurrentCaldates:u["a"],PlaceChip:p["a"]},setup:function(t,e){var a=e.root,c=Object(n["b"])({user:"auth/user"}),i=c.user,s=parseInt(a.$route.params.id),l=Object(r["a"])("project/GET_PROJECT",s),o=l.entity,u=l.loading;return{project:o,loading:u,user:i}}}),m=d,f=a("2877"),g=a("6544"),b=a.n(g),v=a("8336"),_=a("132d"),x=Object(f["a"])(m,c,i,!1,null,"6383f174",null);e["default"]=x.exports;b()(x,{VBtn:v["a"],VIcon:_["a"]})},ec5c:function(t,e,a){"use strict";a("c3db")}}]);
//# sourceMappingURL=chunk-0b77f787.c0135e04.js.map