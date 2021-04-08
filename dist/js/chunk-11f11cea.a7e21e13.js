(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f11cea"],{"0396":function(t,e,a){"use strict";a("4791")},"1ce1":function(t,e,a){"use strict";a("fadd")},"210d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.place?t.place?a("div",{staticStyle:{"max-width":"1000px",margin:"auto"}},[a("place-header",{attrs:{place:t.place}}),a("current-tags",{staticClass:"mx-5 mb-5",attrs:{tags:t.place.tags,label:t._f("capitalize")(t.$t("place tags"))}}),a("div",{staticClass:"description grey lighten-3 font-italic mx-0 my-3 ma-sm-5 pa-5 breakwrap",class:"xs"!==t.$vuetify.breakpoint.name?"rounded-xl":""},[t._v(" "+t._s(t.place.description)+" ")]),a("current-notes",{staticClass:"mx-5 mb-5",attrs:{notes:t.notes,loading:t.loading_notes,label:t._f("capitalize")(t.$t("notes"))}}),a("div",{staticClass:"centering"},[a("create-button",{attrs:{text:t.$t("actions.create.note")},on:{action:function(e){return t.$router.push("/note/create/"+t.place.id)}}})],1),a("net-slide",{staticClass:"mb-7",attrs:{title:t._f("capitalize")(t.$t("current projects")),all:"/place/"+t.place.id+"/projects",empty:t._f("capitalize")(t.$t("no current project")),type:"project",items:t._f("incoming")(t.projects),loading:t.loading_projects}}),a("net-slide",{staticClass:"mb-7",attrs:{title:t._f("capitalize")(t.$t("incoming events")),all:"/place/"+t.place.id+"/events",empty:t._f("capitalize")(t.$t("no incoming event")),type:"event",items:t._f("incoming")(t.events),loading:t.loading_events}}),a("net-slide",{staticClass:"mb-7",attrs:{title:t._f("capitalize")(t.$t("past projects")),all:"/place/"+t.place.id+"/projects",empty:t._f("capitalize")(t.$t("no project")),type:"project",items:t._f("past")(t.projects),loading:t.loading_projects}}),a("net-slide",{staticClass:"mb-7",attrs:{title:t._f("capitalize")(t.$t("past events")),all:"/place/"+t.place.id+"/events",empty:t._f("capitalize")(t.$t("no event")),type:"event",items:t._f("past")(t.events),loading:t.loading_events}})],1):t._e():a("loading-circle",{attrs:{small:""}})},i=[],c=a("a6f4"),s=a("8d7e"),o=a("b7aa"),r=a("3aa2"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("current-outlined",{attrs:{label:t.label,items:t.compNotes,editable:t.editable,draggable:t.draggable,loading:t.loading,maxHeight:"200px",empty:t._f("capitalize")(t.$t("no note yet")),edit_text:t.$t("options.edit")},on:{edit:function(e){return t.$emit("edit")}}},[a("draggable",t._b({staticClass:"list-group",attrs:{disabled:!t.draggable,note:"ul"},on:{start:function(e){t.drag=!0},change:function(e){return t.$emit("update",t.compNotes)},end:function(e){t.drag=!1}},model:{value:t.compNotes,callback:function(e){t.compNotes=e},expression:"compNotes"}},"draggable",t.dragOptions,!1),[a("transition-group",{staticClass:"d-flex flex-wrap flex-row justify-center align-center",attrs:{type:"transition"}},t._l(t.compNotes,(function(e,n){return a("note-card",{key:e.title,staticClass:"mx-2",class:t.draggable?"list-group-item":"",attrs:{closable:t.closable,noselect:!t.draggable,note:e},on:{close:function(e){return t.close(n)}}})})),1)],1)],1)],1)},u=[],p=a("850a"),d=a("f221"),f=a("b76a"),m=a.n(f),g=Object(c["c"])({components:{NoteCard:p["a"],CurrentOutlined:d["a"],Draggable:m.a},props:{notes:{type:Array,default:function(){return[]}},label:{type:String,default:"Notes"},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1}},name:"",setup:function(t,e){var a=e.emit,n=Object(c["f"])([]),i=function(t){n.value=JSON.parse(JSON.stringify(t))};Object(c["e"])((function(){i(t.notes)})),Object(c["g"])((function(){return t.notes}),(function(t){i(t)}));var s=Object(c["f"])(!1),o=Object(c["a"])((function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}})),r=function(t){n.value[t];a("removeNote",t)};return{drag:s,dragOptions:o,compNotes:n,close:r}}}),b=g,_=(a("0396"),a("2877")),v=Object(_["a"])(b,l,u,!1,null,"2e5cc672",null),y=v.exports,j=a("a6c8"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-center"},[a("header-image",{staticClass:"mb-2 flex-grow-0",attrs:{image:t.place.image}})],1),a("div",{staticClass:"mx-sm-4 d-flex flex-column flex-sm-row align-center justify-sm-space-between"},[a("div",{staticClass:"mb-5 mx-sm-0 mx-4 text-sm-start text-center"},[a("h1",[t._v(" "+t._s(t.place.name)+" ")]),a("created-by",{attrs:{item:t.place}})],1),a("div",{staticClass:"placeAction-container mb-5 d-flex flex-column flex-sm-row justify-end"},[a("join-button",{staticClass:"mb-4",attrs:{entity:t.place,type:"place"}}),a("v-btn",{staticClass:"placeAction rounded-lg mb-4 ml-sm-4",attrs:{to:"/place/"+t.$route.params.id+"/contact"}},[a("v-icon",{staticClass:"mr-2"},[t._v("mail")]),t._v(" "+t._s(t._f("capitalize")(t.$t("contact")))+" ")],1),a("v-menu",{attrs:{rounded:"xl",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"more-button ml-sm-4",attrs:{large:"xs"==t.$vuetify.breakpoint.name,icon:"xs"!==t.$vuetify.breakpoint.name,fab:"xs"==t.$vuetify.breakpoint.name}},"v-btn",i,!1),n),[a("v-icon",{attrs:{color:"black"}},[t._v("more_vert")])],1)]}}])},[a("v-list",t._l(t.morePlaceActions,(function(e){return a("v-list-item",{key:e.title,on:{click:e.action}},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-2"},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)],1)})),1)],1)],1)])])},x=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.image?a("v-img",{staticClass:"image",class:t.isDefault?"":"c-pointer",attrs:{"max-height":"400px",width:"100%","aspect-ratio":16/9,src:t.image.full},on:{click:function(e){t.isDefault||(t.expand_image=!0)}}},[[a("v-dialog",{attrs:{width:"90%"},model:{value:t.expand_image,callback:function(e){t.expand_image=e},expression:"expand_image"}},[a("image-popup",{attrs:{image:t.image},on:{close:function(e){t.expand_image=!1}}})],1)]],2):t._e()},C=[],O=a("3063"),E=a("4a42"),N=Object(c["c"])({name:"MediumImage",components:{ImagePopup:O["a"]},props:{image:{type:Object,default:function(){return new E["a"]}}},setup:function(t){var e=Object(c["f"])(!1),a="https://res.cloudinary.com/dyigive9u/image/upload/v1611173096/default_image_01_scb2id.png"===t.image.full;return{expand_image:e,isDefault:a}}}),S=N,k=(a("60e9"),a("6544")),w=a.n(k),I=a("169a"),z=a("adda"),T=Object(_["a"])(S,$,C,!1,null,"f9a9d79e",null),L=T.exports;w()(T,{VDialog:I["a"],VImg:z["a"]});var V=a("43f6"),B=a("81ca"),D=Object(c["c"])({name:"PlaceHeader",components:{HeaderImage:L,JoinButton:V["a"],CreatedBy:B["a"]},props:{place:{type:Object}},setup:function(t,e){var a=e.root,n=Object(c["f"])([{title:a.$options.filters.capitalize(a.$t("calendar")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/calendar")},icon:"event"},{title:a.$options.filters.capitalize(a.$t("notes")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/notes")},icon:"description"},{title:a.$options.filters.capitalize(a.$t("projects")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/projects")},icon:"handyman"},{title:a.$options.filters.capitalize(a.$t("events")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/events")},icon:"star"}]),i=Object(s["b"])({user:"auth/user"}),o=i.user;return t.place&&o.value.id==t.place.author.id&&n.value.push({title:a.$options.filters.capitalize(a.$t("edit")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/edit")},icon:"edit"}),{morePlaceActions:n,user:o}}}),U=D,A=(a("1ce1"),a("8336")),P=a("132d"),R=a("8860"),K=a("da13"),Q=a("5d23"),J=a("e449"),H=Object(_["a"])(U,h,x,!1,null,"a4d16edc",null),G=H.exports;w()(H,{VBtn:A["a"],VIcon:P["a"],VList:R["a"],VListItem:K["a"],VListItemTitle:Q["b"],VMenu:J["a"]});var Y=a("375f"),M=Object(c["c"])({name:"PlaceOverview",props:{place:Object},components:{CurrentTags:r["a"],CurrentNotes:y,NetSlide:j["a"],PlaceHeader:G,CreateButton:Y["a"]},setup:function(t,e){var a=e.root,n=Object(s["b"])({user:"auth/user"}),i=n.user,r=parseInt(a.$route.params.id);Object(c["e"])((function(){window.scrollTo(0,0)}));var l=Object(o["a"])("project/GET_PROJECTS_BY_PLACE",r),u=l.entity,p=l.loading,d=Object(o["a"])("event/GET_EVENTS_BY_PLACE",r),f=d.entity,m=d.loading,g=Object(o["a"])("note/GET_NOTES_BY_PLACE",r),b=g.entity,_=g.loading;return{user:i,loading_projects:p,loading_events:m,loading_notes:_,projects:u,events:f,notes:b}}}),q=M,F=Object(_["a"])(q,n,i,!1,null,"391663df",null);e["default"]=F.exports},3063:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":t.image.thumb,src:t.image.full},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},i=[],c=a("a6f4"),s=Object(c["c"])({name:"ImagePopup",props:{image:Object}}),o=s,r=(a("bfb1"),a("2877")),l=a("6544"),u=a.n(l),p=a("8336"),d=a("b0af"),f=a("132d"),m=a("adda"),g=a("490a"),b=a("0fd9"),_=Object(r["a"])(o,n,i,!1,null,"05125804",null);e["a"]=_.exports;u()(_,{VBtn:p["a"],VCard:d["a"],VIcon:f["a"],VImg:m["a"],VProgressCircular:g["a"],VRow:b["a"]})},"43f6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"placeAction rounded-lg",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.btn.action}},[a("v-icon",{staticClass:"mr-2",attrs:{color:t.btn.color}},[t._v(t._s(t.btn.icon))]),t._v(" "+t._s(t.btn.title)+" ")],1)},i=[],c=(a("9911"),a("a6f4")),s=a("8d7e"),o=Object(c["c"])({name:"JoinButton",props:{entity:Object,type:String},setup:function(t,e){var a=e.root,n=Object(s["a"])({SEND_LINK_REQUEST:t.type+"/SEND_LINK_REQUEST"}),i=n.SEND_LINK_REQUEST,o=Object(s["a"])({SEND_CANCEL_LINK_REQUEST:t.type+"/SEND_CANCEL_LINK_REQUEST"}),r=o.SEND_CANCEL_LINK_REQUEST,l=Object(s["a"])({SEND_UNLINK_REQUEST:t.type+"/SEND_UNLINK_REQUEST"}),u=l.SEND_UNLINK_REQUEST,p=Object(c["f"])(!1),d=function(){p.value=!0,u(t.entity).then((function(){p.value=!1})).catch((function(){p.value=!1}))},f=function(){p.value=!0,r(t.entity).then((function(){p.value=!1})).catch((function(){p.value=!1}))},m=function(){p.value=!0,i(t.entity).then((function(){p.value=!1})).catch((function(){p.value=!1}))},g={title:a.$i18n.t("connect"),icon:"link",color:"green",action:m},b={title:a.$i18n.t("cancel"),icon:"link",color:"blue",action:f},_={title:a.$i18n.t("disconnect"),icon:"link",color:"red",action:d},v=Object(c["a"])((function(){if(t.entity)return"pending"===t.entity.link?b:"confirmed"===t.entity.link?_:g}));return{loading:p,btn:v}}}),r=o,l=a("2877"),u=a("6544"),p=a.n(u),d=a("8336"),f=a("132d"),m=Object(l["a"])(r,n,i,!1,null,"e25d9196",null);e["a"]=m.exports;p()(m,{VBtn:d["a"],VIcon:f["a"]})},4791:function(t,e,a){},"60e9":function(t,e,a){"use strict";a("c29d")},"67de":function(t,e,a){},"81ca":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("span",{staticClass:"text-caption grey--text text--darken-1"},[t._v(" "+t._s(t._f("capitalize")(t.$t("created_by."+t.item.essence+".public")))+" "),a("user-chip",{attrs:{user:t.item.author}})],1):t._e()},i=[],c=a("a6f4"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("v-btn",{staticClass:"pl-0 pr-2 text-none",attrs:{to:"/user/"+t.user.id,height:"25px",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-1",attrs:{size:"20",image:t.user.image}}),t._v(" "+t._s(t.user.name)+" ")],1):t._e()},o=[],r=a("a6ea"),l=Object(c["c"])({name:"UserChip",props:{user:Object},components:{TinyAvatar:r["a"]},setup:function(){return{}}}),u=l,p=a("2877"),d=a("6544"),f=a.n(d),m=a("8336"),g=Object(p["a"])(u,s,o,!1,null,"1f33fa00",null),b=g.exports;f()(g,{VBtn:m["a"]});var _=Object(c["c"])({name:"CreatedBy",props:{item:Object},components:{UserChip:b},setup:function(){return{}}}),v=_,y=Object(p["a"])(v,n,i,!1,null,"3bd534c4",null);e["a"]=y.exports},bfb1:function(t,e,a){"use strict";a("67de")},c29d:function(t,e,a){},fadd:function(t,e,a){}}]);
//# sourceMappingURL=chunk-11f11cea.a7e21e13.js.map