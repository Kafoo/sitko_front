(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ec495c9"],{"0396":function(t,e,a){"use strict";a("4791")},"0875":function(t,e,a){},1262:function(t,e,a){"use strict";a("1a6f")},"1a6f":function(t,e,a){},"210d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading_place?a("loading-circle",{attrs:{small:""}}):t.place?a("div",{staticStyle:{"max-width":"1000px",margin:"auto"}},[a("place-header",{attrs:{place:t.place}}),t.place.description?a("description",{attrs:{description:t.place.description}}):t._e(),t.place.can.createEntity?a("div",{staticClass:"centering mb-4 d-flex flex-wrap"},[a("create-button",{staticClass:"mx-2",attrs:{text:t.$t("actions.create.note")},on:{action:function(e){return t.$router.push("/note/create/"+t.place.id)}}}),a("create-button",{staticClass:"mx-2",attrs:{text:t.$t("actions.create.project")},on:{action:function(e){return t.$router.push("/project/create/"+t.place.id)}}}),a("create-button",{staticClass:"mx-2",attrs:{text:t.$t("actions.create.event")},on:{action:function(e){return t.$router.push("/event/create/"+t.place.id)}}})],1):t._e(),a("current-tags",{staticClass:"mx-5 mb-8",attrs:{tags:t.place.tags,label:t._f("capitalize")(t.$t("place tags"))}}),a("current-notes",{staticClass:"mx-5 mb-8",attrs:{notes:t.notes,loading:t.loading_notes,label:t._f("capitalize")(t.$t("notes"))}}),a("net-slide",{staticClass:"mb-9",attrs:{title:t._f("capitalize")(t.$t("current projects")),all:"/place/"+t.place.id+"/projects",empty:t._f("capitalize")(t.$t("no current project")),type:"project",items:t._f("incoming")(t.projects),loading:t.loading_projects}}),a("net-slide",{staticClass:"mb-9",attrs:{title:t._f("capitalize")(t.$t("incoming events")),all:"/place/"+t.place.id+"/events",empty:t._f("capitalize")(t.$t("no incoming event")),type:"event",items:t._f("incoming")(t.events),loading:t.loading_events}}),t.pastProjects.length?a("net-slide",{staticClass:"mb-9",attrs:{title:t._f("capitalize")(t.$t("past projects")),all:"/place/"+t.place.id+"/projects",empty:t._f("capitalize")(t.$t("no project")),type:"project",items:t._f("past")(t.projects),loading:t.loading_projects}}):t._e(),t.pastEvents.length?a("net-slide",{staticClass:"mb-7",attrs:{title:t._f("capitalize")(t.$t("past events")),all:"/place/"+t.place.id+"/events",empty:t._f("capitalize")(t.$t("no event")),type:"event",items:t._f("past")(t.events),loading:t.loading_events}}):t._e()],1):t._e()},i=[],c=a("a6f4"),s=a("8d7e"),o=a("b7aa"),r=a("3aa2"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("current-outlined",{attrs:{label:t.label,items:t.compNotes,editable:t.editable,draggable:t.draggable,loading:t.loading,maxHeight:"200px",empty:t._f("capitalize")(t.$t("no note yet")),edit_text:t.$t("options.edit")},on:{edit:function(e){return t.$emit("edit")}}},[a("draggable",t._b({staticClass:"list-group",attrs:{disabled:!t.draggable,note:"ul"},on:{start:function(e){t.drag=!0},change:function(e){return t.$emit("update",t.compNotes)},end:function(e){t.drag=!1}},model:{value:t.compNotes,callback:function(e){t.compNotes=e},expression:"compNotes"}},"draggable",t.dragOptions,!1),[a("transition-group",{staticClass:"d-flex flex-wrap flex-row justify-center align-center",attrs:{type:"transition"}},t._l(t.compNotes,(function(e,n){return a("note-card",{key:e.title,staticClass:"mx-2",class:t.draggable?"list-group-item":"",attrs:{closable:t.closable,noselect:!t.draggable,note:e},on:{close:function(e){return t.close(n)}}})})),1)],1)],1)],1)},u=[],p=a("850a"),d=a("f221"),f=a("b76a"),m=a.n(f),_=Object(c["c"])({components:{NoteCard:p["a"],CurrentOutlined:d["a"],Draggable:m.a},props:{notes:{type:Array,default:function(){return[]}},label:{type:String,default:"Notes"},loading:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1}},name:"",setup:function(t,e){var a=e.emit,n=Object(c["f"])([]),i=function(t){n.value=JSON.parse(JSON.stringify(t))};Object(c["e"])((function(){i(t.notes)})),Object(c["g"])((function(){return t.notes}),(function(t){i(t)}));var s=Object(c["f"])(!1),o=Object(c["a"])((function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}})),r=function(t){n.value[t];a("removeNote",t)};return{drag:s,dragOptions:o,compNotes:n,close:r}}}),v=_,b=(a("0396"),a("2877")),g=Object(b["a"])(v,l,u,!1,null,"2e5cc672",null),y=g.exports,h=a("a6c8"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-center",staticStyle:{position:"relative"}},[a("header-image",{staticClass:"mb-2 flex-grow-0",attrs:{image:t.place.image}}),t.place.location?a("div",{staticStyle:{position:"absolute",right:"10px",bottom:"15px"}},[a("v-btn",{staticClass:"rounded-lg",attrs:{small:"",color:"#00000075",dark:"",to:"/map/place/"+t.place.id}},[a("v-icon",{attrs:{left:""}},[t._v("map")]),t._v(" Sur la carte ")],1)],1):t._e()],1),a("div",{staticClass:"mx-sm-4 d-flex flex-column flex-sm-row align-center justify-sm-space-between"},[a("div",{staticClass:"mb-5 mx-sm-0 mx-4 text-sm-start text-center"},[a("h1",[t._v(" "+t._s(t.place.name)+" ")]),a("created-by",{attrs:{item:t.place}})],1),a("div",{staticClass:"placeAction-container mb-5 d-flex flex-column flex-sm-row justify-end"},[t.place.can.link?a("join-button",{staticClass:"mb-4",attrs:{entity:t.place,type:"place"}}):t.place.can.update?a("v-btn",{staticClass:"mb-4",attrs:{to:"/place/"+t.$route.params.id+"/edit"}},[a("v-icon",{attrs:{left:""}},[t._v(" edit ")]),t._v(" "+t._s(t.$t("edit"))+" ")],1):t._e(),Object.keys(t.place.contact_infos).length?a("v-menu",{attrs:{rounded:"xl",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"placeAction rounded-lg mb-4 ml-sm-4"},"v-btn",i,!1),n),[a("v-icon",{staticClass:"mr-2"},[t._v("mail")]),t._v(" "+t._s(t._f("capitalize")(t.$t("contact")))+" ")],1)]}}],null,!1,1857475214)},[a("v-list",[a("div",{staticClass:"d-flex flex-wrap justify-center"},[t.place.contact_infos.facebook?a("v-btn",{staticClass:"ma-2",attrs:{rounded:"",href:t.place.contact_infos.facebook,target:"_blank",color:"#4267B2",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("facebook")]),t._v(" Facebook ")],1):t._e(),t.place.contact_infos.instagram?a("v-btn",{staticClass:"ma-2",attrs:{rounded:"",href:t.place.contact_infos.instagram,target:"_blank",color:"purple",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("camera")]),t._v(" Instagram ")],1):t._e(),t.place.contact_infos.youtube?a("v-btn",{staticClass:"ma-2",attrs:{rounded:"",href:t.place.contact_infos.youtube,target:"_blank",color:"#ea0000",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("play_arrow")]),t._v(" Youtube ")],1):t._e(),t.place.contact_infos.email?a("v-btn",{staticClass:"ma-2 pr-3",attrs:{rounded:"",color:"grey darken-2",dark:""},on:{click:function(e){t.show_email=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("email")]),t._v(" Email ")],1):t._e()],1)])],1):t._e(),a("v-dialog",{attrs:{width:"unset"},model:{value:t.show_email,callback:function(e){t.show_email=e},expression:"show_email"}},[a("v-card",{staticClass:"pa-8 selectable-text"},[a("v-icon",[t._v("email")]),a("span",{staticClass:"ml-2 selectable-text"},[t._v(" "+t._s(t.place.contact_infos.email)+" ")])],1)],1),a("v-menu",{attrs:{rounded:"xl",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"more-button ml-sm-4",attrs:{large:"xs"==t.$vuetify.breakpoint.name,icon:"xs"!==t.$vuetify.breakpoint.name,fab:"xs"==t.$vuetify.breakpoint.name}},"v-btn",i,!1),n),[a("v-icon",{attrs:{color:"black"}},[t._v("more_vert")])],1)]}}])},[a("v-list",t._l(t.morePlaceActions,(function(e){return a("v-list-item",{key:e.title,on:{click:e.action}},[a("v-list-item-title",[a("v-icon",{staticClass:"mr-2"},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)],1)})),1)],1)],1)])])},x=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.comp_image?a("v-img",{staticClass:"image",class:t.image?"c-pointer":"",attrs:{"max-height":"400px",width:"100%","aspect-ratio":16/9,src:t.comp_image.full},on:{click:function(e){t.image&&(t.expand_image=!0)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"image_placeholder fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"50",color:"#858585"}})],1)]},proxy:!0}],null,!1,2902058276)},[[a("v-dialog",{attrs:{width:"90%"},model:{value:t.expand_image,callback:function(e){t.expand_image=e},expression:"expand_image"}},[a("image-popup",{attrs:{image:t.comp_image},on:{close:function(e){t.expand_image=!1}}})],1)]],2):t._e()},E=[],$=a("3063"),O=a("4a42"),N=Object(c["c"])({name:"HeaderImage",components:{ImagePopup:$["a"]},props:{image:{type:Object}},setup:function(t){var e=Object(c["f"])(!1),a=Object(c["a"])((function(){return t.image?t.image:new O["a"]}));return{expand_image:e,comp_image:a}}}),k=N,S=(a("3fe4"),a("6544")),I=a.n(S),w=a("169a"),L=a("adda"),V=a("490a"),D=a("0fd9"),z=Object(b["a"])(k,C,E,!1,null,"4f509d8e",null),B=z.exports;I()(z,{VDialog:w["a"],VImg:L["a"],VProgressCircular:V["a"],VRow:D["a"]});var T=a("43f6"),A=a("81ca"),K=Object(c["c"])({name:"PlaceHeader",components:{HeaderImage:B,JoinButton:T["a"],CreatedBy:A["a"]},props:{place:{type:Object}},setup:function(t,e){var a=e.root,n=Object(c["f"])([{title:a.$options.filters.capitalize(a.$t("calendar")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/calendar")},icon:"event"},{title:a.$options.filters.capitalize(a.$t("notes")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/notes")},icon:"description"},{title:a.$options.filters.capitalize(a.$t("projects")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/projects")},icon:"handyman"},{title:a.$options.filters.capitalize(a.$t("events")),action:function(){a.$router.push("/place/"+a.$route.params.id+"/events")},icon:"star"}]),i=Object(c["f"])(!1);return{morePlaceActions:n,show_email:i}}}),P=K,R=(a("1262"),a("8336")),U=a("b0af"),Q=a("132d"),q=a("8860"),M=a("da13"),J=a("5d23"),H=a("e449"),F=Object(b["a"])(P,j,x,!1,null,"1b220769",null),Y=F.exports;I()(F,{VBtn:R["a"],VCard:U["a"],VDialog:w["a"],VIcon:Q["a"],VList:q["a"],VListItem:M["a"],VListItemTitle:J["b"],VMenu:H["a"]});var G=a("375f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description grey lighten-3 text-subtitle-2 mx-0 mb-5 mx-sm-5 pa-5 breakwrap",class:"xs"!==t.$vuetify.breakpoint.name?"rounded-xl":""},[t.readMoreActivated?a("span",[t._v(" "+t._s(t.description)),a("br"),t.description.length>500?a("v-btn",{staticClass:"pl-1",attrs:{plain:"",text:"",small:""},on:{click:function(e){t.readMoreActivated=!1}}},[t._v(" "+t._s(t.$t("see less"))+" ")]):t._e()],1):a("span",[t._v(" "+t._s(t.description.slice(0,500))+" "),t.description.length>500?a("span",[t._v(" ... "),a("v-btn",{staticClass:"pl-1",attrs:{plain:"",text:"",small:""},on:{click:function(e){t.readMoreActivated=!0}}},[t._v(" "+t._s(t.$t("see more"))+" ")])],1):t._e()])])},X=[],Z=(a("a4d3"),a("e01a"),Object(c["c"])({name:"Description",props:{description:{type:String,default:""}},setup:function(t){var e=Object(c["f"])(!1);return Object(c["g"])((function(){return t.description}),(function(a){t.description&&t.description.length>500?e.value=!1:e.value=!0})),{readMoreActivated:e}}})),tt=Z,et=Object(b["a"])(tt,W,X,!1,null,"19382d2f",null),at=et.exports;I()(et,{VBtn:R["a"]});var nt=Object(c["c"])({name:"PlaceOverview",props:{place:Object,loading_place:Boolean},components:{CurrentTags:r["a"],CurrentNotes:y,NetSlide:h["a"],PlaceHeader:Y,CreateButton:G["a"],description:at},setup:function(t,e){var a=e.root,n=Object(s["b"])({user:"auth/user"}),i=n.user,r=parseInt(a.$route.params.id);Object(c["e"])((function(){window.scrollTo(0,0)}));var l=Object(o["a"])("project/GET_PROJECTS_BY_PLACE",{action_param:r}),u=l.entity,p=l.loading,d=Object(o["a"])("event/GET_EVENTS_BY_PLACE",{action_param:r}),f=d.entity,m=d.loading,_=Object(o["a"])("note/GET_NOTES_BY_PLACE",{action_param:r}),v=_.entity,b=_.loading,g=Object(c["a"])((function(){return a.$options.filters.past(u.value)})),y=Object(c["a"])((function(){return a.$options.filters.past(f.value)}));return{user:i,loading_projects:p,loading_events:m,loading_notes:b,projects:u,events:f,notes:v,pastProjects:g,pastEvents:y}}}),it=nt,ct=Object(b["a"])(it,n,i,!1,null,"5279486a",null);e["default"]=ct.exports},3063:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":t.image.thumb,src:t.image.full},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},i=[],c=a("a6f4"),s=Object(c["c"])({name:"ImagePopup",props:{image:Object}}),o=s,r=(a("bfb1"),a("2877")),l=a("6544"),u=a.n(l),p=a("8336"),d=a("b0af"),f=a("132d"),m=a("adda"),_=a("490a"),v=a("0fd9"),b=Object(r["a"])(o,n,i,!1,null,"05125804",null);e["a"]=b.exports;u()(b,{VBtn:p["a"],VCard:d["a"],VIcon:f["a"],VImg:m["a"],VProgressCircular:_["a"],VRow:v["a"]})},"3fe4":function(t,e,a){"use strict";a("0875")},"43f6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column"},t._l(t.btns,(function(e,n){return a("v-btn",{key:n,staticClass:"placeAction rounded-lg mb-3",attrs:{loading:t.loading,disabled:t.loading},on:{click:e.action}},[a("v-icon",{staticClass:"mr-2",attrs:{color:e.color}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),1)},i=[],c=(a("9911"),a("a6f4")),s=a("8d7e"),o=Object(c["c"])({name:"JoinButton",props:{entity:Object,type:String},setup:function(t,e){var a=e.root,n=Object(s["a"])({SEND_LINK_REQUEST:t.type+"/SEND_LINK_REQUEST"}),i=n.SEND_LINK_REQUEST,o=Object(s["a"])({SEND_CANCEL_LINK_REQUEST:t.type+"/SEND_CANCEL_LINK_REQUEST"}),r=o.SEND_CANCEL_LINK_REQUEST,l=Object(s["a"])({SEND_DECLINE_LINK:t.type+"/SEND_DECLINE_LINK"}),u=l.SEND_DECLINE_LINK,p=Object(s["a"])({SEND_CONFIRM_LINK:t.type+"/SEND_CONFIRM_LINK"}),d=p.SEND_CONFIRM_LINK,f=Object(s["a"])({SEND_UNLINK_REQUEST:t.type+"/SEND_UNLINK_REQUEST"}),m=f.SEND_UNLINK_REQUEST,_=Object(s["b"])({user:"auth/user"}),v=_.user,b=Object(c["f"])(!1),g=function(){b.value=!0,m(t.entity).then((function(){b.value=!1})).catch((function(){b.value=!1}))},y=function(){b.value=!0,u({requesting:t.entity,requested:v.value}).then((function(){b.value=!1})).catch((function(){b.value=!1}))},h=function(){b.value=!0,d({requesting:t.entity,requested:v.value}).then((function(){b.value=!1})).catch((function(){b.value=!1}))},j=function(){b.value=!0,r({requesting:v.value,requested:t.entity}).then((function(){b.value=!1})).catch((function(){b.value=!1}))},x=function(){b.value=!0,i(t.entity).then((function(){b.value=!1})).catch((function(){b.value=!1}))},C={title:a.$i18n.t("connect"),icon:"link",color:"green",action:x},E={title:a.$i18n.t("decline"),icon:"link",color:"red",action:y},$={title:a.$i18n.t("accept"),icon:"link",color:"green",action:h},O={title:a.$i18n.t("cancel"),icon:"link",color:"blue",action:j},N={title:a.$i18n.t("disconnect"),icon:"link",color:"red",action:g},k=Object(c["a"])((function(){if(t.entity)return"requesting"===t.entity.link?[O]:"requested"===t.entity.link?[$,E]:"confirmed"===t.entity.link?[N]:[C]}));return{loading:b,btns:k}}}),r=o,l=a("2877"),u=a("6544"),p=a.n(u),d=a("8336"),f=a("132d"),m=Object(l["a"])(r,n,i,!1,null,"14a81646",null);e["a"]=m.exports;p()(m,{VBtn:d["a"],VIcon:f["a"]})},4791:function(t,e,a){},"67de":function(t,e,a){},"81ca":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("span",{staticClass:"text-caption grey--text text--darken-1"},[t._v(" "+t._s(t._f("capitalize")(t.$t("created_by."+t.item.essence+"."+t.item.visibility)))+" "),a("user-chip",{attrs:{user:t.item.author}})],1):t._e()},i=[],c=a("a6f4"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("v-btn",{staticClass:"pl-0 pr-2 text-none",attrs:{to:"/user/"+t.user.id,height:"25px",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-1",attrs:{size:"20",image:t.user.image}}),t._v(" "+t._s(t.user.name)+" ")],1):t._e()},o=[],r=a("a6ea"),l=Object(c["c"])({name:"UserChip",props:{user:Object},components:{TinyAvatar:r["a"]},setup:function(){return{}}}),u=l,p=a("2877"),d=a("6544"),f=a.n(d),m=a("8336"),_=Object(p["a"])(u,s,o,!1,null,"1f33fa00",null),v=_.exports;f()(_,{VBtn:m["a"]});var b=Object(c["c"])({name:"CreatedBy",props:{item:Object},components:{UserChip:v},setup:function(){return{}}}),g=b,y=Object(p["a"])(g,n,i,!1,null,"6073f276",null);e["a"]=y.exports},bfb1:function(t,e,a){"use strict";a("67de")}}]);
//# sourceMappingURL=chunk-2ec495c9.b6b287a9.js.map