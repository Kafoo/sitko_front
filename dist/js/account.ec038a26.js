(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["account"],{"08e8":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("v-card",{staticClass:"pt-7 pb-3"},[a("v-card-text",{staticClass:"text-h6"},[e._v(" "+e._s(e._f("capitalize")(e.$t("confirm.sure")))),a("br"),e._v(" "+e._s(e.text)+" ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"secondary",text:"",disabled:e.loading},on:{click:function(t){return e.$emit("cancel-action")}}},[e._v(" "+e._s(e.cancel)+" ")]),a("v-btn",{attrs:{color:e.confirm_color,text:"",disabled:e.loading},on:{click:function(t){return e.$emit("confirm-action")}}},[e._v(" "+e._s(e.confirm)+" ")])],1),a("loading-bar",{attrs:{loading:e.loading}})],1)],1)},n=[],r=a("d4ec"),s=a("262e"),i=a("2caf"),l=a("9ab4"),c=a("2b0e"),d=a("60a3"),u=a("3b7a"),f=function(e){Object(s["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return a}(c["default"]);Object(l["a"])([Object(d["b"])(Boolean)],f.prototype,"show",void 0),Object(l["a"])([Object(d["b"])(String)],f.prototype,"text",void 0),Object(l["a"])([Object(d["b"])(String)],f.prototype,"cancel",void 0),Object(l["a"])([Object(d["b"])(String)],f.prototype,"confirm",void 0),Object(l["a"])([Object(d["b"])({default:"primary"})],f.prototype,"confirm_color",void 0),Object(l["a"])([Object(d["b"])({default:!1})],f.prototype,"loading",void 0),f=Object(l["a"])([Object(d["a"])({name:"ConfirmDialog",components:{LoadingBar:u["a"]}})],f);var m=f,b=m,p=a("2877"),v=a("6544"),_=a.n(v),g=a("8336"),O=a("b0af"),w=a("99d9"),j=a("169a"),E=a("ce7e"),h=a("2fa4"),U=Object(p["a"])(b,o,n,!1,null,null,null);t["a"]=U.exports;_()(U,{VBtn:g["a"],VCard:O["a"],VCardActions:w["a"],VCardText:w["b"],VDialog:j["a"],VDivider:E["a"],VSpacer:h["a"]})},1994:function(e,t,a){},"3b7a":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):e._e()},n=[],r=a("a6f4"),s=Object(r["c"])({name:"LoadingBar",props:{loading:Boolean}}),i=s,l=(a("6e9d"),a("2877")),c=a("6544"),d=a.n(c),u=a("8e36"),f=Object(l["a"])(i,o,n,!1,null,"3c94f8d6",null);t["a"]=f.exports;d()(f,{VProgressLinear:u["a"]})},"466e":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("primary-content-body",[a("div",[a("v-row",{attrs:{justify:"center"}},[a("page-title",{attrs:{title:e.$t("my account")}})],1),a("v-form",{model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[a("v-row",{staticClass:"my-4",attrs:{justify:"center"}},[a("image-input",{attrs:{nullable:"",circle:"",default_image:"avatar",image:e.editedUser.image},on:{update:e.changeImage}})],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[e.errors.name?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errors.name[0])+" ")]):e._e()],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",rules:[e.rules.required[0]],label:e.firstNameLabel,maxlength:"20",required:"",disabled:e.loading},on:{input:function(t){e.modified=!0}},model:{value:e.editedUser.name,callback:function(t){e.$set(e.editedUser,"name",t)},expression:"editedUser.name"}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",label:e.lastNameLabel,maxlength:"20",disabled:e.loading},on:{input:function(t){e.modified=!0}},model:{value:e.editedUser.last_name,callback:function(t){e.$set(e.editedUser,"last_name",t)},expression:"editedUser.last_name"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[e.errors.email?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errors.email[0])+" ")]):e._e()],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",id:"email",rules:[e.rules.required[0],e.rules.email[0]],label:e.$options.filters.capitalize(e.$t("e-mail")),required:"",disabled:e.loading},on:{input:function(t){e.modified=!0}},model:{value:e.editedUser.email,callback:function(t){e.$set(e.editedUser,"email",t)},expression:"editedUser.email"}})],1)],1),a("v-row",{attrs:{justify:"center",dense:""}},[a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("tags-input",{attrs:{tags:e.editedUser.tags,label:"Mes tags"},on:{update:function(t){e.editedUser.tags=t,e.modified=!0}}})],1)],1),a("v-row",{attrs:{justify:"center",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"off","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[e.rules.min(8)[0]],type:e.show_password?"text":"password",name:"input-10-1",label:e.$options.filters.capitalize(e.$tc("password",1)),hint:e.$options.filters.capitalize(e.$t("form.min_carac",{n:"8"})),counter:"",disabled:e.loading},on:{input:function(t){e.modified=!0},"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.editedUser.password,callback:function(t){e.$set(e.editedUser,"password",t)},expression:"editedUser.password"}})],1)],1),a("v-row",{attrs:{justify:"center",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"off",block:"","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[e.rules.match(e.editedUser.password,e.editedUser.password_confirmation)[0]],type:e.show_password?"text":"password",name:"input-10-1",label:e.$options.filters.capitalize(e.$t("confirmation")),counter:"",disabled:e.loading},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.editedUser.password_confirmation,callback:function(t){e.$set(e.editedUser,"password_confirmation",t)},expression:"editedUser.password_confirmation"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12",sm:"auto",xsm:"12"}},[a("v-btn",{staticClass:"d-block mb-4",attrs:{color:"success",disabled:!e.modified||!e.form||e.loading},on:{click:e.editUser}},[e._v(" "+e._s(e.$t("save"))+" ")]),a("v-btn",{staticClass:"d-block my-4",attrs:{color:"grey",disabled:e.loading},on:{click:e.logout}},[e._v(" "+e._s(e.$t("logout"))+" ")]),a("v-btn",{staticClass:"d-block",attrs:{color:"red",disabled:e.loading},on:{click:function(t){e.dialog=!0}}},[e._v(" "+e._s(e.$t("delete my account"))+" ")])],1)],1)],1),a("confirm-dialog",{attrs:{show:e.dialog,text:e.$t("Account deletion is definitive."),cancel:e.$t("confirm.cancel"),confirm:e.$t("delete"),confirm_color:"red",loading:e.loading_deletion},on:{"cancel-action":function(t){e.dialog=!1},"confirm-action":function(t){return e.deleteUser()}}})],1),a("loading-bar",{attrs:{loading:e.loading}})],1)},n=[],r=a("a6f4"),s=a("8d7e"),i=a("d5ad"),l=a("5928"),c=a("15f2"),d=a("3b7a"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v(e._s(e._f("capitalize")(e.title)))])},f=[],m=Object(r["c"])({name:"PageTitle",props:{title:String}}),b=m,p=a("2877"),v=Object(p["a"])(b,u,f,!1,null,null,null),_=v.exports,g=a("08e8"),O=a("b9a3"),w=a("9e03"),j=a("0ec5"),E=Object(r["c"])({name:"Account",components:{PrimaryContentBody:c["a"],PageTitle:_,ConfirmDialog:g["a"],ImageInput:O["a"],LoadingBar:d["a"],TagsInput:j["a"]},setup:function(e,t){var a=t.root,o=Object(i["a"])(),n=Object(r["f"])(!1),c=Object(r["f"])(!1),d=Object(r["f"])(!1),u=Object(r["f"])(!1),f=Object(r["f"])(null),m=Object(r["f"])(null),b=Object(r["f"])(!1),p=Object(r["f"])(!1),v=Object(r["f"])(new w["a"]),_=Object(s["a"])({SEND_USER_EDITION:"auth/SEND_USER_EDITION"}),g=_.SEND_USER_EDITION,O=Object(s["a"])({SEND_DELETE_USER:"auth/SEND_DELETE_USER"}),j=O.SEND_DELETE_USER,E=Object(s["a"])({SEND_LOGOUT_REQUEST:"auth/SEND_LOGOUT_REQUEST"}),h=E.SEND_LOGOUT_REQUEST,U=Object(s["b"])({user:"auth/user"}),x=U.user,y=Object(s["b"])({errors:"app/errors"}),$=y.errors;Object(r["e"])((function(){v.value=new w["a"](x.value)}));var S=Object(r["a"])((function(){return Object(l["a"])(a.$t("first name"))+" / "+Object(l["a"])(a.$t("alias"))})),D=Object(r["a"])((function(){return Object(l["a"])(a.$t("last name"))+" ("+a.$t("form.optional")+")"})),k=function(){f.value=m.value=null,p.value=!0,j(x.value).then((function(){p.value=!1,a.$router.push("/").catch((function(){}))})).catch((function(){p.value=!1,u.value=!1}))},T=function(){b.value=!0,g(v.value).then((function(){b.value=!1,n.value=!1})).catch((function(){b.value=!1}))},N=function(e){v.value.image=e,n.value=!0},C=function(){h()};return{dialog:u,success:f,error:m,loading:b,loading_deletion:p,editedUser:v,SEND_USER_EDITION:g,SEND_DELETE_USER:j,SEND_LOGOUT_REQUEST:h,logout:C,editUser:T,deleteUser:k,changeImage:N,show_password:d,rules:o,errors:$,firstNameLabel:S,lastNameLabel:D,form:c,modified:n}}}),h=E,U=a("6544"),x=a.n(U),y=a("0798"),$=a("8336"),S=a("62ad"),D=a("4bd4"),k=a("0fd9"),T=a("2fa4"),N=a("8654"),C=Object(p["a"])(h,o,n,!1,null,"f62a6b84",null);t["default"]=C.exports;x()(C,{VAlert:y["a"],VBtn:$["a"],VCol:S["a"],VForm:D["a"],VRow:k["a"],VSpacer:T["a"],VTextField:N["a"]})},"6e9d":function(e,t,a){"use strict";a("1994")}}]);
//# sourceMappingURL=account.ec038a26.js.map