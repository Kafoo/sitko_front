(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["verify"],{"4d6e":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return l}));var s=a("b0af"),i=a("80d2"),r=Object(i["h"])("v-card__actions"),n=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),l=Object(i["h"])("v-card__title");s["a"]},a638:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"verify"},[t.error?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):a("div",[t.user?t._e():a("login",{attrs:{verification:"email"},on:{verify:t.verify}})],1)])},i=[],r=a("5530"),n=a("2f62"),o=a("d60c"),l={props:["hash"],components:{Login:o["default"]},data:function(){return{error:null}},mounted:function(){this.user&&this.verify()},computed:Object(r["a"])(Object(r["a"])({},Object(n["c"])("auth",["user"])),{},{getUser:function(){return this.user}}),watch:{getUser:function(t){t&&this.verify()}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",["sendVerifyRequest"])),{},{verify:function(){var t=this;this.sendVerifyRequest(this.hash).then((function(){t.$router.push("/").catch((function(){}))})).catch((function(e){console.log(e.response),t.error="Error verifying email"}))},plop:function(){alert("yop")}})},c=l,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports},d0c9:function(t,e,a){"use strict";a("4d6e")},d60c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login d-flex justify-center"},[a("v-card",{staticClass:"elevation-6 ma-5",attrs:{"max-width":"700px",width:"80%","xs-width":"100%"}},[a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("div",{staticClass:"form-group text-md-center"},[t.verification?a("span",{staticClass:"h2"},[t._v("Confirmation de l'email")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.details.email,expression:"details.email"}],staticClass:"form-control",class:{"is-invalid":t.errors.email},attrs:{type:"email",id:"email",placeholder:"Enter email",disabled:t.loading},domProps:{value:t.details.email},on:{input:function(e){e.target.composing||t.$set(t.details,"email",e.target.value)}}}),t.errors.email?a("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(t.errors.email[0])+" ")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.details.password,expression:"details.password"}],staticClass:"form-control",class:{"is-invalid":t.errors.password},attrs:{type:"password",id:"password",placeholder:"Password",disabled:t.loading},domProps:{value:t.details.password},on:{input:function(e){e.target.composing||t.$set(t.details,"password",e.target.value)}}}),t.errors.password?a("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(t.errors.password[0])+" ")]):t._e()]),a("v-card-actions",{staticClass:"d-flex justify-center"},[a("v-btn",{attrs:{type:"submit",disabled:t.loading}},[t._v(" Login ")])],1),t.loading?a("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):t._e()],1)])])],1)},i=[],r=a("5530"),n=a("2f62"),o={name:"Home",data:function(){return{details:{email:null,password:null},loading:!1}},props:{verification:{type:String,default:null}},computed:Object(r["a"])({},Object(n["c"])(["errors"])),mounted:function(){this.$store.commit("setErrors",{})},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",["sendLoginRequest"])),{},{login:function(){var t=this;this.loading=!0,this.sendLoginRequest(this.details).then((function(){t.verification?t.$emit("verify"):t.$router.push({name:"Home"}).catch((function(){}))})).catch((function(){t.loading=!1}))}})},l=o,c=(a("d0c9"),a("2877")),d=a("6544"),u=a.n(d),f=a("8336"),v=a("b0af"),m=a("99d9"),p=a("8e36"),h=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=h.exports;u()(h,{VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VProgressLinear:p["a"]})}}]);
//# sourceMappingURL=verify.b78d5e0c.js.map