(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"920e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("primary-content-body",[a("div",{staticClass:"card-body"},[a("v-card-text",[a("v-form",{ref:"registerForm",on:{submit:function(t){return t.preventDefault(),e.register(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[e.errors.name?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errors.name[0])+" ")]):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",rules:[e.rules.required[0]],label:e.firstNameLabel,maxlength:"20",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",label:e.lastNameLabel,maxlength:"20",required:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1),a("v-col",{attrs:{cols:"12"}},[e.errors.email?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errors.email[0])+" ")]):e._e()],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",id:"email",rules:[e.rules.required[0],e.rules.email[0]],label:e.$options.filters.capitalize(e.$t("e-mail")),required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[e.rules.required[0],e.rules.min(8)[0]],type:e.show_password?"text":"password",name:"input-10-1",label:e.$options.filters.capitalize(e.$tc("password",1)),hint:e.$options.filters.capitalize(e.$t("form.min_carac",{n:"8"})),counter:""},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",block:"","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",rules:[e.rules.required[0],e.rules.match(e.form.password,e.form.password_confirmation)[0]],type:e.show_password?"text":"password",name:"input-10-1",label:e.$options.filters.capitalize(e.$t("confirmation")),counter:""},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1),a("v-spacer"),a("v-col",{staticClass:"d-flex ml-auto",attrs:{cols:"12",sm:"3",xsm:"12"}},[a("v-btn",{attrs:{"x-large":"",block:"",disabled:!e.valid||e.loading,color:"success",type:"submit"}},[e._v(" "+e._s(e.$t("register"))+" ")])],1)],1)],1)],1),e.loading?a("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):e._e()],1)])},o=[],s=(a("ac1f"),a("466d"),a("a6f4")),l=a("8d7e"),n=a("15f2"),i=a("5928"),c=a("d5ad"),d=Object(s["c"])({name:"Home",components:{PrimaryContentBody:n["a"]},setup:function(e,t){var a=t.root,r=t.refs,o=Object(l["a"])({SEND_REGISTER_REQUEST:"auth/SEND_REGISTER_REQUEST"}),n=o.SEND_REGISTER_REQUEST,d=Object(l["b"])({errors:"app/errors"}),m=d.errors;Object(s["f"])((function(){a.$store.commit("app/setErrors",{})}));var u=Object(s["g"])(!1),p=Object(s["g"])({name:"",last_name:"",email:"",password:"",password_confirmation:""}),f=Object(s["g"])(!1),b=Object(s["g"])(!1),v=Object(s["a"])((function(){return Object(i["a"])(a.$t("first name"))+" / "+Object(i["a"])(a.$t("alias"))})),w=Object(s["a"])((function(){return Object(i["a"])(a.$t("last name"))+" ("+a.$t("form.optional")+")"})),_=Object(s["g"])({email:Object(c["a"])().email,required:Object(c["a"])().required,min:Object(c["a"])().min,match:Object(c["a"])().match});console.log(_);var h=Object(s["a"])((function(){return r.registerForm})),g=function(){h.value.validate()&&(b.value=!0,n(p.value).then((function(){a.$router.push({name:"Home"}).catch((function(){}))})).catch((function(){b.value=!1})))};return{errors:m,valid:u,form:p,show_password:f,loading:b,firstNameLabel:v,lastNameLabel:w,rules:_,register:g}}}),m=d,u=a("2877"),p=a("6544"),f=a.n(p),b=a("0798"),v=a("8336"),w=a("99d9"),_=a("62ad"),h=a("4bd4"),g=a("8e36"),x=a("0fd9"),$=a("2fa4"),j=a("8654"),O=Object(u["a"])(m,r,o,!1,null,null,null);t["default"]=O.exports;f()(O,{VAlert:b["a"],VBtn:v["a"],VCardText:w["b"],VCol:_["a"],VForm:h["a"],VProgressLinear:g["a"],VRow:x["a"],VSpacer:$["a"],VTextField:j["a"]})}}]);
//# sourceMappingURL=register.c644a3b3.js.map