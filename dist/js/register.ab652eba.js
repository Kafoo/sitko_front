(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{3232:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("primary-content-body",[a("div",{staticClass:"card-body"},[a("v-card-text",[a("v-form",{ref:"registerForm",on:{submit:function(t){return t.preventDefault(),e.register(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",rules:[e.rules.required],label:e.labels.firstName,maxlength:"20",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",label:e.labels.lastName,maxlength:"20",required:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",id:"email",rules:e.emailRules,label:e.$options.filters.capitalize(e.$t("e-mail")),required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled","append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",name:"input-10-1",label:e.$options.filters.capitalize(e.$tc("password",1)),hint:e.$options.filters.capitalize(e.$t("form.min_carac",{n:"8"})),counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",autocomplete:"disabled",block:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.passwordMatch],type:e.show1?"text":"password",name:"input-10-1",label:e.$options.filters.capitalize(e.$t("confirmation")),counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1),a("v-spacer"),a("v-col",{staticClass:"d-flex ml-auto",attrs:{cols:"12",sm:"3",xsm:"12"}},[a("v-btn",{attrs:{"x-large":"",block:"",disabled:!e.valid||e.loading,color:"success",type:"submit"}},[e._v(" "+e._s(e.$t("register"))+" ")])],1)],1)],1)],1),e.loading?a("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):e._e()],1)])},o=[],i=a("5530"),r=a("2f62"),n=a("1256"),l={name:"Home",components:{PrimaryContentBody:n["a"]},data:function(){return{valid:!1,form:{name:"",last_name:"",email:"",password:"",password_confirmation:""},show1:!1,loading:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(r["c"])(["errors"])),{},{passwordMatch:function(){var e=this;return function(){return e.form.password===e.form.password_confirmation||e.$options.filters.capitalize(e.$t("form.differents",{items:e.$tc("password",2)}))}},emailRules:function(){var e=this;return[function(t){return!!t||e.$options.filters.capitalize(e.$t("form.required"))},function(t){return/.+@.+\..+/.test(t)||e.$options.filters.capitalize(e.$t("form.unvalid",{item:e.$t("e-mail")}))}]},rules:function(){var e=this;return{required:function(t){return!!t||e.$options.filters.capitalize(e.$t("form.required"))},min:function(t){return t&&t.length>=8||e.$options.filters.capitalize(e.$t("form.min_carac",{n:"8"}))}}},labels:function(){return{firstName:this.$options.filters.capitalize(this.$t("first name"))+" / "+this.$options.filters.capitalize(this.$t("alias")),lastName:this.$options.filters.capitalize(this.$t("last name"))+" ("+this.$t("form.optional")+")"}}}),mounted:function(){this.$store.commit("setErrors",{})},methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])("auth",["sendRegisterRequest"])),{},{register:function(){var e=this;this.$refs.registerForm.validate()&&(this.loading=!0,this.sendRegisterRequest(this.form).then((function(){e.$router.push({name:"Home"}).catch((function(){}))})).catch((function(){e.loading=!1})))}})},c=l,m=(a("a128"),a("2877")),d=a("6544"),u=a.n(d),f=a("8336"),p=a("99d9"),h=a("62ad"),v=a("4bd4"),b=a("8e36"),$=a("0fd9"),w=a("2fa4"),g=a("8654"),x=Object(m["a"])(c,s,o,!1,null,"c427730e",null);t["default"]=x.exports;u()(x,{VBtn:f["a"],VCardText:p["b"],VCol:h["a"],VForm:v["a"],VProgressLinear:b["a"],VRow:$["a"],VSpacer:w["a"],VTextField:g["a"]})},"53fd":function(e,t,a){},a128:function(e,t,a){"use strict";a("53fd")}}]);
//# sourceMappingURL=register.ab652eba.js.map