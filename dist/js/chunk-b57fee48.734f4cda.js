(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b57fee48"],{"118e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-center"},[t.loading?n("loading-circle",{attrs:{small:""}}):t.user?n("v-card",{staticClass:"ma-8 pa-3",attrs:{width:"400px"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("big-avatar",{attrs:{circle:"",image:t.user.image,default:"avatar"}})],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("page-title",{attrs:{title:t.user.name}})],1)],1),t.user.can.link?n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("join-button",{attrs:{entity:t.user,type:"user"}})],1)],1):t._e(),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("current-tags",{attrs:{tags:t.user.tags}})],1)],1)],1):t._e()],1)},r=[],c=n("a6f4"),i=n("b7aa"),o=n("3aa2"),l=n("9240"),u=n("44a5"),s=n("43f6"),f=Object(c["c"])({name:"UserOverview",components:{CurrentTags:o["a"],PageTitle:l["a"],BigAvatar:u["a"],JoinButton:s["a"]},setup:function(t,e){var n=e.root,a=parseInt(n.$route.params.id),r=Object(i["a"])("user/GET_USER",a),c=r.entity,o=r.loading;return{user:c,loading:o}}}),d=f,b=n("2877"),v=n("6544"),g=n.n(v),p=n("b0af"),m=n("62ad"),S=n("0fd9"),E=Object(b["a"])(d,a,r,!1,null,"521c0829",null);e["default"]=E.exports;g()(E,{VCard:p["a"],VCol:m["a"],VRow:S["a"]})},"43f6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"placeAction rounded-lg",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.btn.action}},[n("v-icon",{staticClass:"mr-2",attrs:{color:t.btn.color}},[t._v(t._s(t.btn.icon))]),t._v(" "+t._s(t.btn.title)+" ")],1)},r=[],c=(n("9911"),n("a6f4")),i=n("8d7e"),o=Object(c["c"])({name:"JoinButton",props:{entity:Object,type:String},setup:function(t,e){var n=e.root,a=Object(i["a"])({SEND_LINK_REQUEST:t.type+"/SEND_LINK_REQUEST"}),r=a.SEND_LINK_REQUEST,o=Object(i["a"])({SEND_CANCEL_LINK_REQUEST:t.type+"/SEND_CANCEL_LINK_REQUEST"}),l=o.SEND_CANCEL_LINK_REQUEST,u=Object(i["a"])({SEND_UNLINK_REQUEST:t.type+"/SEND_UNLINK_REQUEST"}),s=u.SEND_UNLINK_REQUEST,f=Object(c["f"])(!1),d=function(){f.value=!0,s(t.entity).then((function(){f.value=!1})).catch((function(){f.value=!1}))},b=function(){f.value=!0,l(t.entity).then((function(){f.value=!1})).catch((function(){f.value=!1}))},v=function(){f.value=!0,r(t.entity).then((function(){f.value=!1})).catch((function(){f.value=!1}))},g={title:n.$i18n.t("connect"),icon:"link",color:"green",action:v},p={title:n.$i18n.t("cancel"),icon:"link",color:"blue",action:b},m={title:n.$i18n.t("disconnect"),icon:"link",color:"red",action:d},S=Object(c["a"])((function(){if(t.entity)return"pending"===t.entity.link?p:"confirmed"===t.entity.link?m:g}));return{loading:f,btn:S}}}),l=o,u=n("2877"),s=n("6544"),f=n.n(s),d=n("8336"),b=n("132d"),v=Object(u["a"])(l,a,r,!1,null,"e25d9196",null);e["a"]=v.exports;f()(v,{VBtn:d["a"],VIcon:b["a"]})},"44a5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{staticClass:"choose-img rounded-lg elevation-3",class:t.circle?"rounded-circle":"rounded-lg",attrs:{width:t.size,height:t.size,src:t.imageSrc}})},r=[],c=n("a6f4"),i=n("4a42"),o=Object(c["c"])({name:"",props:{image:String,size:{type:String,default:"170px"},default:{type:String,default:void 0},circle:{type:Boolean,default:!1}},setup:function(t){var e=Object(c["a"])((function(){return t.image?t.image:"avatar"==t.default?(e=new i["a"]("avatar"),e.medium):(e=new i["a"],e.medium);var e}));return{imageSrc:e}}}),l=o,u=n("2877"),s=n("6544"),f=n.n(s),d=n("adda"),b=Object(u["a"])(l,a,r,!1,null,"02c34d1e",null);e["a"]=b.exports;f()(b,{VImg:d["a"]})},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),c=(n("4b85"),n("2b0e")),i=n("d9f7"),o=n("80d2"),l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),s=function(){return l.reduce((function(t,e){return t["offset"+Object(o["y"])(e)]={type:[String,Number],default:null},t}),{})}(),f=function(){return l.reduce((function(t,e){return t["order"+Object(o["y"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(u),offset:Object.keys(s),order:Object.keys(f)};function b(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var v=new Map;e["a"]=c["default"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},s),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,c=e.children,o=(e.parent,"");for(var l in n)o+=String(n[l]);var u=v.get(o);return u||function(){var t,e;for(e in u=[],d)d[e].forEach((function(t){var a=n[t],r=b(e,t,a);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(o,u)}(),t(n.tag,Object(i["a"])(r,{class:u}),c)}})}}]);
//# sourceMappingURL=chunk-b57fee48.734f4cda.js.map