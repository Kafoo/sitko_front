(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a10d95be"],{1505:function(e,t,a){"use strict";a("c6ef")},3063:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.$emit("close")}}},[a("v-icon",[e._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":e.image.thumb,src:e.image.full},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},i=[],r=a("a6f4"),c=Object(r["c"])({name:"ImagePopup",props:{image:Object}}),s=c,l=(a("bfb1"),a("2877")),o=a("6544"),u=a.n(o),m=a("8336"),p=a("b0af"),d=a("132d"),f=a("adda"),b=a("490a"),g=a("0fd9"),v=Object(l["a"])(s,n,i,!1,null,"05125804",null);t["a"]=v.exports;u()(v,{VBtn:m["a"],VCard:p["a"],VIcon:d["a"],VImg:f["a"],VProgressCircular:b["a"],VRow:g["a"]})},"67de":function(e,t,a){},7047:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.comp_image?a("v-img",{staticClass:"image mt-sm-5",class:e.image?"c-pointer":"",attrs:{"aspect-ratio":16/9,src:e.comp_image.full},on:{click:function(t){e.image&&(e.expand_image=!0)}}},[[a("v-dialog",{attrs:{width:"90%"},model:{value:e.expand_image,callback:function(t){e.expand_image=t},expression:"expand_image"}},[a("image-popup",{attrs:{image:e.comp_image},on:{close:function(t){e.expand_image=!1}}})],1)]],2):e._e()},i=[],r=a("a6f4"),c=a("3063"),s=a("4a42"),l=Object(r["c"])({name:"MediumImage",components:{ImagePopup:c["a"]},props:{image:{type:Object}},setup:function(e){var t=Object(r["f"])(!1),a=Object(r["a"])((function(){return e.image?e.image:new s["a"]}));return{comp_image:a,expand_image:t}}}),o=l,u=(a("1505"),a("2877")),m=a("6544"),p=a.n(m),d=a("169a"),f=a("adda"),b=Object(u["a"])(o,n,i,!1,null,"235c605a",null);t["a"]=b.exports;p()(b,{VDialog:d["a"],VImg:f["a"]})},"70fe":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{position:"relative"}},[a("current-outlined",{attrs:{label:e.label,items:e.caldates,editable:e.editable,empty:e._f("capitalize")(e.$t("no date yet"))},on:{edit:function(t){return e.$emit("edit")}}},[a("div",{staticClass:"d-flex flex-column justify-center align-center"},e._l(e.caldates,(function(t,n){return a("caldate-chip",{key:t.id,attrs:{clickable:e.clickable,closable:e.closable,caldate:t},on:{close:function(t){return e.$emit("removeCaldate",n)}}})})),1)])],1)},i=[],r=a("a6f4"),c=a("5c65"),s=a("f221"),l=Object(r["c"])({components:{CaldateChip:c["a"],CurrentOutlined:s["a"]},props:{caldates:{type:Array,default:function(){return[]}},label:{type:String,default:"Caldates"},editable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1}},name:"",setup:function(){return{}}}),o=l,u=a("2877"),m=Object(u["a"])(o,n,i,!1,null,"2378e08c",null);t["a"]=m.exports},"7fa9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-center"},[e.loading?a("loading-circle",{attrs:{small:""}}):e.note?a("v-card",{staticClass:"ma-8",attrs:{"min-width":"400px","max-width":"600px"}},[a("div",{staticClass:"mx-sm-4 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch"},[a("div",{staticClass:"mt-2 mb-5 d-flex flex-column align-center align-sm-start"},[a("h1",[e._v(" "+e._s(e.note.title)+" ")]),a("created-by",{attrs:{item:e.note}}),e.note.can.update?a("v-btn",{staticClass:"mb-2 pa-0",attrs:{"x-small":"",text:"",plain:"",to:"/note/"+e.note.id+"/edit"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[e._v("edit")]),e._v(" "+e._s(e.$t("options.edit"))+" ")],1):e._e(),a("place-chip",{attrs:{place:e.note.place}})],1)]),a("div",{staticClass:"description yellow lighten-3 font-italic mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap",class:"xs"!==e.$vuetify.breakpoint.name?"rounded-xl":""},[e._v(" "+e._s(e.note.description)+" Lorem exercitation nulla amet enim laboris duis nulla Lorem velit officia. Anim ut duis enim pariatur ea. Enim sunt deserunt enim magna Lorem enim proident id et qui deserunt fugiat velit. Lorem nostrud aliquip ea veniam officia reprehenderit ipsum tempor cillum laborum. ")])]):e._e()],1)},i=[],r=a("a6f4"),c=a("8d7e"),s=a("3aa2"),l=a("b7aa"),o=a("7047"),u=a("70fe"),m=a("e6c8"),p=a("81ca"),d=Object(r["c"])({name:"NoteOverview",components:{CurrentTags:s["a"],MediumImage:o["a"],CurrentCaldates:u["a"],PlaceChip:m["a"],CreatedBy:p["a"]},setup:function(e,t){var a=t.root,n=Object(c["b"])({user:"auth/user"}),i=n.user,r=parseInt(a.$route.params.id),s=Object(l["a"])("note/GET_NOTE",r),o=s.entity,u=s.loading;return{note:o,loading:u,user:i}}}),f=d,b=a("2877"),g=a("6544"),v=a.n(g),_=a("8336"),x=a("b0af"),h=a("132d"),y=Object(b["a"])(f,n,i,!1,null,"5fb69e58",null);t["default"]=y.exports;v()(y,{VBtn:_["a"],VCard:x["a"],VIcon:h["a"]})},"81ca":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item?a("span",{staticClass:"text-caption grey--text text--darken-1"},[e._v(" "+e._s(e._f("capitalize")(e.$t("created_by."+e.item.essence+".public")))+" "),a("user-chip",{attrs:{user:e.item.author}})],1):e._e()},i=[],r=a("a6f4"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("v-btn",{staticClass:"pl-0 pr-2 text-none",attrs:{to:"/user/"+e.user.id,height:"25px",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-1",attrs:{size:"20",image:e.user.image}}),e._v(" "+e._s(e.user.name)+" ")],1):e._e()},s=[],l=a("a6ea"),o=Object(r["c"])({name:"UserChip",props:{user:Object},components:{TinyAvatar:l["a"]},setup:function(){return{}}}),u=o,m=a("2877"),p=a("6544"),d=a.n(p),f=a("8336"),b=Object(m["a"])(u,c,s,!1,null,"1f33fa00",null),g=b.exports;d()(b,{VBtn:f["a"]});var v=Object(r["c"])({name:"CreatedBy",props:{item:Object},components:{UserChip:g},setup:function(){return{}}}),_=v,x=Object(m["a"])(_,n,i,!1,null,"3bd534c4",null);t["a"]=x.exports},bfb1:function(e,t,a){"use strict";a("67de")},c6ef:function(e,t,a){},e6c8:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{staticClass:"pl-0 pr-3",attrs:{outlined:"",to:"/place/"+e.place.id,height:"32px",rounded:"",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-2",attrs:{size:"28",image:e.image}}),a("span",[e._v(e._s(e.place.name))])],1)},i=[],r=a("a6f4"),c=a("4a42"),s=a("a6ea"),l=Object(r["c"])({name:"PlaceChip",components:{TinyAvatar:s["a"]},props:{place:{type:Object}},setup:function(e){var t;return t=e.place&&e.place.image?e.place.image:new c["a"],{image:t}}}),o=l,u=a("2877"),m=a("6544"),p=a.n(m),d=a("8336"),f=Object(u["a"])(o,n,i,!1,null,"0440554e",null);t["a"]=f.exports;p()(f,{VBtn:d["a"]})}}]);
//# sourceMappingURL=chunk-a10d95be.df7d9beb.js.map