(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f0549ed"],{"04a7":function(e,t,a){},2331:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("v-btn",{staticClass:"pl-0 pr-2 text-none",attrs:{to:"/user/"+e.user.id,height:"25px",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-1",attrs:{size:"20",image:e.user.image}}),e._v(" "+e._s(e.user.name)+" ")],1):e._e()},c=[],n=a("a6f4"),i=a("a6ea"),s=Object(n["c"])({name:"UserChip",props:{user:Object},components:{TinyAvatar:i["a"]},setup:function(){return{}}}),l=s,o=a("2877"),u=a("6544"),p=a.n(u),m=a("8336"),d=Object(o["a"])(l,r,c,!1,null,"1f33fa00",null);t["a"]=d.exports;p()(d,{VBtn:m["a"]})},3063:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.$emit("close")}}},[a("v-icon",[e._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":e.image.thumb,src:e.image.full},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},c=[],n=a("a6f4"),i=Object(n["c"])({name:"ImagePopup",props:{image:Object}}),s=i,l=(a("bfb1"),a("2877")),o=a("6544"),u=a.n(o),p=a("8336"),m=a("b0af"),d=a("132d"),f=a("adda"),g=a("490a"),b=a("0fd9"),v=Object(l["a"])(s,r,c,!1,null,"05125804",null);t["a"]=v.exports;u()(v,{VBtn:p["a"],VCard:m["a"],VIcon:d["a"],VImg:f["a"],VProgressCircular:g["a"],VRow:b["a"]})},"67de":function(e,t,a){},7047:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.comp_image?a("v-img",{staticClass:"image mt-sm-5",class:e.image?"c-pointer":"",attrs:{"aspect-ratio":16/9,src:e.comp_image.full},on:{click:function(t){e.image&&(e.expand_image=!0)}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"image_placeholder fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,1639609816)},[[a("v-dialog",{attrs:{width:"90%"},model:{value:e.expand_image,callback:function(t){e.expand_image=t},expression:"expand_image"}},[a("image-popup",{attrs:{image:e.comp_image},on:{close:function(t){e.expand_image=!1}}})],1)]],2):e._e()},c=[],n=a("a6f4"),i=a("3063"),s=a("4a42"),l=Object(n["c"])({name:"MediumImage",components:{ImagePopup:i["a"]},props:{image:{type:Object}},setup:function(e){var t=Object(n["f"])(!1),a=Object(n["a"])((function(){return e.image?e.image:new s["a"]}));return{comp_image:a,expand_image:t}}}),o=l,u=(a("8543"),a("2877")),p=a("6544"),m=a.n(p),d=a("169a"),f=a("adda"),g=a("490a"),b=a("0fd9"),v=Object(u["a"])(o,r,c,!1,null,"0b2a1a74",null);t["a"]=v.exports;m()(v,{VDialog:d["a"],VImg:f["a"],VProgressCircular:g["a"],VRow:b["a"]})},"70fe":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{position:"relative"}},[a("current-outlined",{attrs:{label:e.label,items:e.caldates,editable:e.editable,empty:e._f("capitalize")(e.$t("no date yet"))},on:{edit:function(t){return e.$emit("edit")}}},[a("div",{staticClass:"d-flex flex-column justify-center align-center"},e._l(e.caldates,(function(t,r){return a("caldate-chip",{key:t.id,attrs:{clickable:e.clickable,closable:e.closable,caldate:t},on:{close:function(t){return e.$emit("removeCaldate",r)}}})})),1)])],1)},c=[],n=a("a6f4"),i=a("5c65"),s=a("f221"),l=Object(n["c"])({components:{CaldateChip:i["a"],CurrentOutlined:s["a"]},props:{caldates:{type:Array,default:function(){return[]}},label:{type:String,default:"Caldates"},editable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1}},name:"",setup:function(){return{}}}),o=l,u=a("2877"),p=Object(u["a"])(o,r,c,!1,null,"2378e08c",null);t["a"]=p.exports},"81ca":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item?a("span",{staticClass:"text-caption grey--text text--darken-1"},[e._v(" "+e._s(e._f("capitalize")(e.$t("created_by."+e.item.essence+"."+e.item.visibility)))+" "),a("user-chip",{attrs:{user:e.item.author}})],1):e._e()},c=[],n=a("a6f4"),i=a("2331"),s=Object(n["c"])({name:"CreatedBy",props:{item:Object},components:{UserChip:i["a"]},setup:function(){return{}}}),l=s,o=a("2877"),u=Object(o["a"])(l,r,c,!1,null,"274be50f",null);t["a"]=u.exports},8543:function(e,t,a){"use strict";a("04a7")},bfb1:function(e,t,a){"use strict";a("67de")},e6c8:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{staticClass:"pl-0 pr-3",attrs:{outlined:"",to:"/place/"+e.place.id,height:"32px",rounded:"",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-2",attrs:{size:"28",image:e.image}}),a("span",[e._v(e._s(e.place.name))])],1)},c=[],n=a("a6f4"),i=a("4a42"),s=a("a6ea"),l=Object(n["c"])({name:"PlaceChip",components:{TinyAvatar:s["a"]},props:{place:{type:Object}},setup:function(e){var t;return t=e.place&&e.place.image?e.place.image:new i["a"],{image:t}}}),o=l,u=a("2877"),p=a("6544"),m=a.n(p),d=a("8336"),f=Object(u["a"])(o,r,c,!1,null,"0440554e",null);t["a"]=f.exports;m()(f,{VBtn:d["a"]})},eacc:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("loading-circle",{attrs:{small:""}}):e.project?a("div",{staticStyle:{"max-width":"1000px",margin:"auto"}},[a("div",{staticClass:"d-flex justify-center"},[a("medium-image",{staticClass:"image mr-sm-5 flex-grow-0",attrs:{image:e.project.image}})],1),a("div",{staticClass:"mx-5 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch justify-space-around"},[a("div",{staticClass:"mt-2 mb-5 d-flex flex-column align-center text-center text-sm-start align-sm-start"},[a("h1",[e._v(" "+e._s(e.project.title)+" ")]),a("created-by",{attrs:{item:e.project}}),e.project.can.update?a("v-btn",{staticClass:"mb-2 pa-0",attrs:{"x-small":"",text:"",plain:"",to:"/project/"+e.project.id+"/edit"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[e._v("edit")]),e._v(" "+e._s(e.$t("options.edit"))+" ")],1):e._e(),a("place-chip",{attrs:{place:e.project.place}})],1),a("div",{staticClass:"mt-4"},[a("current-caldates",{staticClass:"ml-1 mb-5",attrs:{clickable:"",caldates:e.project.caldates,label:e._f("capitalize")(e.$t("project dates")),more:""}})],1)]),a("div",{staticClass:"mx-5"},[a("current-tags",{attrs:{tags:e.project.tags,label:e._f("capitalize")(e.$t("project tags"))}})],1),a("div",{staticClass:"description grey lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap",class:"xs"!==e.$vuetify.breakpoint.name?"rounded-xl":""},[e._v(" "+e._s(e.project.description)+" ")])]):e._e()},c=[],n=a("a6f4"),i=a("8d7e"),s=a("3aa2"),l=a("b7aa"),o=a("7047"),u=a("70fe"),p=a("e6c8"),m=a("81ca"),d=Object(n["c"])({name:"ProjectOverview",components:{CurrentTags:s["a"],MediumImage:o["a"],CurrentCaldates:u["a"],PlaceChip:p["a"],CreatedBy:m["a"]},setup:function(e,t){var a=t.root,r=Object(i["b"])({user:"auth/user"}),c=r.user,n=parseInt(a.$route.params.id),s=Object(l["a"])("project/GET_PROJECT",n),o=s.entity,u=s.loading;return{project:o,loading:u,user:c}}}),f=d,g=a("2877"),b=a("6544"),v=a.n(b),_=a("8336"),x=a("132d"),h=Object(g["a"])(f,r,c,!1,null,"56a5b5d5",null);t["default"]=h.exports;v()(h,{VBtn:_["a"],VIcon:x["a"]})}}]);
//# sourceMappingURL=chunk-3f0549ed.fa1ac475.js.map