(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fb09100"],{"118e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center"},[t.loading?a("loading-circle",{attrs:{small:""}}):t.user?a("v-card",{staticClass:"pa-3",class:"xs"===t.$vuetify.breakpoint.name?"ma-0":"ma-8",attrs:{width:"800px"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("big-avatar",{attrs:{circle:"",image:t.user.image,default:"avatar"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("page-title",{staticClass:"mb-0"},[t._v(t._s(t._f("capitalize")(t.user.name)))])],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[t.user.can.link?a("join-button",{staticClass:"mb-4",attrs:{entity:t.user,type:"user"}}):t.user.can.update?a("v-btn",{staticClass:"mb-4",attrs:{to:"/profil"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("edit")]),t._v(" "+t._s(t.$t("options.edit"))+" ")],1):t._e()],1)],1),a("v-row",{attrs:{justify:"center",dense:""}},[a("v-col",{staticClass:" text-center mb-4",attrs:{cols:"12",sm:"6",md:"6"}},[a("outlined-area",{attrs:{label:"Statut"}},[t.user.user_type?a("div",[a("v-icon",[t._v(t._s(t.user.user_type.icon))]),t._v(" "+t._s(t._f("capitalize")(t.user.user_type.translated_name))+" ")],1):a("div",{staticClass:"grey--text"},[t._v(" N/A ")])])],1),a("v-col",{staticClass:"text-center mb-4",attrs:{cols:"12",sm:"6",md:"6"}},[a("outlined-area",{attrs:{label:"Habitat"}},[t.user.home_type?a("div",[a("v-icon",[t._v(t._s(t.user.home_type.icon))]),t._v(" "+t._s(t._f("capitalize")(t.user.home_type.translated_name))+" ")],1):a("div",{staticClass:"grey--text"},[t._v(" N/A ")])])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("current-tags",{attrs:{tags:t.user.tags}})],1)],1),a("div",{staticClass:"description grey lighten-3 my-5 pa-5 breakwrap rounded-xl"},[a("div",{staticClass:"font-weight-bold mb-2"},[a("v-icon",[t._v("person")]),t._v(" Bio ")],1),t.user.bio?a("div",{domProps:{innerHTML:t._s(t.user.bio)}}):a("div",{staticClass:"grey--text text-center"},[t._v(" -- "+t._s(t.user.name)+" n'a pas encore rempli cette section -- ")])]),a("div",{staticClass:"description grey lighten-3 my-5 pa-5 breakwrap rounded-xl"},[a("div",{staticClass:"font-weight-bold mb-2"},[a("v-icon",[t._v("radio_button_checked")]),t._v(" Attentes ")],1),t.user.expectations?a("div",{domProps:{innerHTML:t._s(t.user.expectations)}}):a("div",{staticClass:"grey--text text-center"},[t._v(" -- "+t._s(t.user.name)+" n'a pas encore rempli cette section -- ")])]),t.user.contact_infos&&Object.keys(t.user.contact_infos).length>0?a("outlined-area",{attrs:{label:"Contact"}},[a("div",{staticClass:"d-flex flex-wrap justify-center"},[t.user.contact_infos.facebook?a("v-btn",{staticClass:"ma-2",attrs:{rounded:"",href:t.user.contact_infos.facebook,target:"_blank",color:"#4267B2",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("facebook")]),t._v(" Facebook ")],1):t._e(),t.user.contact_infos.instagram?a("v-btn",{staticClass:"ma-2",attrs:{rounded:"",href:t.user.contact_infos.instagram,target:"_blank",color:"purple",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("camera")]),t._v(" Instagram ")],1):t._e(),t.user.contact_infos.youtube?a("v-btn",{staticClass:"ma-2",attrs:{rounded:"",href:t.user.contact_infos.youtube,target:"_blank",color:"#ea0000",dark:""}},[a("v-icon",{attrs:{left:""}},[t._v("play_arrow")]),t._v(" Youtube ")],1):t._e(),t.user.contact_infos.email?a("v-btn",{staticClass:"ma-2 pr-3",attrs:{rounded:"",color:"grey darken-2",dark:""},on:{click:function(e){t.show_email=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("email")]),t._v(" Email ")],1):t._e(),a("v-dialog",{attrs:{width:"unset"},model:{value:t.show_email,callback:function(e){t.show_email=e},expression:"show_email"}},[a("v-card",{staticClass:"pa-8 selectable-text"},[a("v-icon",[t._v("email")]),a("span",{staticClass:"ml-2 selectable-text"},[t._v(" "+t._s(t.user.contact_infos.email)+" ")])],1)],1)],1)]):t._e()],1):t._e()],1)},r=[],c=a("a6f4"),s=a("b7aa"),i=a("3aa2"),o=a("9240"),l=a("44a5"),u=a("43f6"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"items-container text-center px-3 pt-3 pb-2 rounded-xl",attrs:{outlined:""}},[a("div",{staticClass:"text-caption labelized noselect d-flex"},[t._v(" "+t._s(t.label)+" ")]),t._t("default")],2)},f=[],v=Object(c["c"])({name:"OutlinedArea",props:{label:{type:String,default:""}},setup:function(){return{}}}),_=v,b=(a("e32c"),a("2877")),p=a("6544"),m=a.n(p),g=a("b0af"),y=Object(b["a"])(_,d,f,!1,null,"2e2ee334",null),E=y.exports;m()(y,{VCard:g["a"]});var N=Object(c["c"])({name:"UserOverview",components:{CurrentTags:i["a"],PageTitle:o["a"],BigAvatar:l["a"],JoinButton:u["a"],OutlinedArea:E},setup:function(t,e){var a=e.root,n=parseInt(a.$route.params.id),r=Object(s["a"])("user/GET_USER",n),i=r.entity,o=r.loading,l=Object(c["f"])(!1);return{user:i,loading:o,show_email:l}}}),C=N,h=a("8336"),S=a("62ad"),j=a("169a"),O=a("132d"),k=a("0fd9"),x=Object(b["a"])(C,n,r,!1,null,"689fd2ff",null);e["default"]=x.exports;m()(x,{VBtn:h["a"],VCard:g["a"],VCol:S["a"],VDialog:j["a"],VIcon:O["a"],VRow:k["a"]})},1630:function(t,e,a){},"43f6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column"},t._l(t.btns,(function(e,n){return a("v-btn",{key:n,staticClass:"placeAction rounded-lg mb-3",attrs:{loading:t.loading,disabled:t.loading},on:{click:e.action}},[a("v-icon",{staticClass:"mr-2",attrs:{color:e.color}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),1)},r=[],c=(a("9911"),a("a6f4")),s=a("8d7e"),i=Object(c["c"])({name:"JoinButton",props:{entity:Object,type:String},setup:function(t,e){var a=e.root,n=Object(s["a"])({SEND_LINK_REQUEST:t.type+"/SEND_LINK_REQUEST"}),r=n.SEND_LINK_REQUEST,i=Object(s["a"])({SEND_CANCEL_LINK_REQUEST:t.type+"/SEND_CANCEL_LINK_REQUEST"}),o=i.SEND_CANCEL_LINK_REQUEST,l=Object(s["a"])({SEND_DECLINE_LINK:t.type+"/SEND_DECLINE_LINK"}),u=l.SEND_DECLINE_LINK,d=Object(s["a"])({SEND_CONFIRM_LINK:t.type+"/SEND_CONFIRM_LINK"}),f=d.SEND_CONFIRM_LINK,v=Object(s["a"])({SEND_UNLINK_REQUEST:t.type+"/SEND_UNLINK_REQUEST"}),_=v.SEND_UNLINK_REQUEST,b=Object(s["b"])({user:"auth/user"}),p=b.user,m=Object(c["f"])(!1),g=function(){m.value=!0,_(t.entity).then((function(){m.value=!1})).catch((function(){m.value=!1}))},y=function(){m.value=!0,u({requesting:t.entity,requested:p.value}).then((function(){m.value=!1})).catch((function(){m.value=!1}))},E=function(){m.value=!0,f({requesting:t.entity,requested:p.value}).then((function(){m.value=!1})).catch((function(){m.value=!1}))},N=function(){m.value=!0,o({requesting:p.value,requested:t.entity}).then((function(){m.value=!1})).catch((function(){m.value=!1}))},C=function(){m.value=!0,r(t.entity).then((function(){m.value=!1})).catch((function(){m.value=!1}))},h={title:a.$i18n.t("connect"),icon:"link",color:"green",action:C},S={title:a.$i18n.t("decline"),icon:"link",color:"red",action:y},j={title:a.$i18n.t("accept"),icon:"link",color:"green",action:E},O={title:a.$i18n.t("cancel"),icon:"link",color:"blue",action:N},k={title:a.$i18n.t("disconnect"),icon:"link",color:"red",action:g},x=Object(c["a"])((function(){if(t.entity)return"requesting"===t.entity.link?[O]:"requested"===t.entity.link?[j,S]:"confirmed"===t.entity.link?[k]:[h]}));return{loading:m,btns:x}}}),o=i,l=a("2877"),u=a("6544"),d=a.n(u),f=a("8336"),v=a("132d"),_=Object(l["a"])(o,n,r,!1,null,"1828eb6f",null);e["a"]=_.exports;d()(_,{VBtn:f["a"],VIcon:v["a"]})},"44a5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",{staticClass:"choose-img rounded-lg elevation-3",class:t.circle?"rounded-circle":"rounded-lg",attrs:{width:t.size,height:t.size,src:t.imageSrc}})},r=[],c=a("a6f4"),s=a("4a42"),i=Object(c["c"])({name:"",props:{image:[Object,String],size:{type:String,default:"170px"},default:{type:String,default:void 0},circle:{type:Boolean,default:!1}},setup:function(t){var e=Object(c["a"])((function(){return t.image?"string"!==typeof t.image?t.image.medium:t.image:"avatar"==t.default?(e=new s["a"]("avatar"),e.medium):(e=new s["a"],e.medium);var e}));return{imageSrc:e}}}),o=i,l=a("2877"),u=a("6544"),d=a.n(u),f=a("adda"),v=Object(l["a"])(o,n,r,!1,null,"51face50",null);e["a"]=v.exports;d()(v,{VImg:f["a"]})},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),c=(a("4b85"),a("2b0e")),s=a("d9f7"),i=a("80d2"),o=["sm","md","lg","xl"],l=function(){return o.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return o.reduce((function(t,e){return t["offset"+Object(i["y"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return o.reduce((function(t,e){return t["order"+Object(i["y"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function v(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var _=new Map;e["a"]=c["default"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,c=e.children,i=(e.parent,"");for(var o in a)i+=String(a[o]);var l=_.get(i);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var n=a[t],r=v(e,t,n);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),_.set(i,l)}(),t(a.tag,Object(s["a"])(r,{class:l}),c)}})},e32c:function(t,e,a){"use strict";a("1630")}}]);
//# sourceMappingURL=chunk-4fb09100.2be4034f.js.map