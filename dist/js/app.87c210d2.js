(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about",login:"login",register:"register",verify:"verify"}[t]||t)+"."+{about:"e0eb3118",login:"03cd6f77",register:"02e90a7b",verify:"956b11a7"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,login:1,register:1,verify:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about",login:"login",register:"register",verify:"verify"}[t]||t)+"."+{about:"f9cc2fab",login:"992d7ecb",register:"205847f4",verify:"205847f4"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1538:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("4160"),n("159b");var r=n("d4ec"),o=n("bee2"),a=n("a033"),i=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r["a"])(this,t),this.id=n.id,this.title=n.title,this.type=n.type,this.description=n.description,this.events=[],this.color=this.getColor(),n.events&&n.events.forEach((function(t){e.events.push(new a["a"](t))}))}return Object(o["a"])(t,[{key:"getColor",value:function(){return"commun"===this.type?"red darken-3":"idée"===this.type?"yellow darken-3":"perso"===this.type?"blue darken-3":void 0}},{key:"bigtitle",get:function(){return this.title.toUpperCase()}}]),t}()},"2d4f":function(t,e,n){"use strict";n("ce6b")},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app"},[n("v-snackbar",{attrs:{color:"red"},model:{value:t.generalError,callback:function(e){t.generalError=e},expression:"generalError"}},[t._v(" "+t._s(t.generalError)+" ")]),n("navigation"),n("v-main",[t.loading?n("div",{staticClass:"mt-5 d-flex justify-center"},[n("v-progress-circular",{staticClass:"mt-16",attrs:{indeterminate:"",color:"green lighten-2",size:"100",width:"10"}})],1):n("router-view")],1)],1)},a=[],i=n("5530"),s=n("2f62"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{attrs:{"disable-resize-watcher":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.menuItems,(function(e){return r("v-list-item",{directives:[{name:"show",rawName:"v-show",value:e.vshow,expression:"item.vshow"}],key:e.title,attrs:{to:e.path}},[r("v-list-item-action"),r("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1),r("v-app-bar",{attrs:{app:""}},[r("span",{staticClass:"hidden-sm-and-up"},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1),r("v-toolbar-title",[r("v-app-bar-nav-icon",{staticClass:"hidden-xs-only"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("cf05"),transition:"scale-transition",width:"55"}})],1),r("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v(" "+t._s(t.appTitle)+" ")])],1),r("v-spacer"),t.loading?t._e():r("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.menuItems,(function(e){return r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.vshow,expression:"item.vshow"}],key:e.title,staticClass:"navItem",attrs:{text:"",to:e.path}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)],1)},u=[],l=(n("7db0"),{data:function(){return{appTitle:"Sitko",drawer:!1,menuItems:[{title:"Home",path:"/",icon:"",vshow:!0},{title:"Calendrier",path:"/calendar",icon:"",vshow:this.user},{title:"Projects",path:"/projects",icon:"",vshow:this.user},{title:"Compte",path:"/account",icon:"",vshow:this.user},{title:"Login",path:"/login",icon:"",vshow:!this.user},{title:"Register",path:"/register",icon:"",vshow:!this.user}]}},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])("auth",["user","loading"])),Object(s["c"])(["generalError"])),watch:{user:{handler:function(t){this.menuItems.find((function(t){return"Compte"===t.title})).vshow=t,this.menuItems.find((function(t){return"Calendrier"===t.title})).vshow=t,this.menuItems.find((function(t){return"Projects"===t.title})).vshow=t,this.menuItems.find((function(t){return"Login"===t.title})).vshow=!t,this.menuItems.find((function(t){return"Register"===t.title})).vshow=!t}},$route:function(t){document.title=t.meta.title||"Sitko"}}}),d=l,p=(n("2d4f"),n("2877")),h=n("6544"),f=n.n(h),m=n("40dc"),v=n("5bc1"),g=n("8336"),b=n("adda"),j=n("8860"),k=n("da13"),y=n("1800"),w=n("5d23"),_=n("f774"),E=n("2fa4"),O=n("2a7f"),C=Object(p["a"])(d,c,u,!1,null,null,null),x=C.exports;f()(C,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VBtn:g["a"],VImg:b["a"],VList:j["a"],VListItem:k["a"],VListItemAction:y["a"],VListItemContent:w["a"],VNavigationDrawer:_["a"],VSpacer:E["a"],VToolbarItems:O["a"],VToolbarTitle:O["b"]});var S={components:{Navigation:x},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["c"])("auth",["loading"])),Object(s["c"])({nameFromStore:"generalError"})),{},{generalError:{get:function(){return this.nameFromStore},set:function(t){return t}}}),methods:Object(i["a"])({},Object(s["b"])("auth",["getUserData"])),mounted:function(){localStorage.getItem("authToken")&&this.getUserData()}},L=S,P=(n("034f"),n("7496")),T=n("f6c4"),I=n("490a"),V=n("2db4"),D=Object(p["a"])(L,o,a,!1,null,null,null),R=D.exports;f()(D,{VApp:P["a"],VMain:T["a"],VProgressCircular:I["a"],VSnackbar:V["a"]});var A=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home mt-5 d-flex justify-center"},[t.success?n("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(t.success)+" ")]):t._e(),t.error?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),n("v-card",{staticClass:"pa-8 mt-2 elevation-5",attrs:{"max-width":"700px",width:"80%"}},[t.user?t.user.email_verified_at?n("span",{staticClass:"text-center"},[n("h2",[t._v("Coucou "+t._s(t.user.name)+" !")]),n("h4",[t._v(" Bienvenue dans ce merveilleux site où rien ne se passe. ")])]):n("span",{staticClass:"text-center"},[n("h2",[t._v("Coucou "+t._s(t.user.name)+" !")]),n("h4",[t._v(" Ton compte a bien été enregistré, maintenant, tu peux confirmer ton mail via le lien que tu as reçu dans ta boîte de réception. Tu peux aussi demander un nouveau mail de confirmation en cliquant "),n("a",{attrs:{href:"#"},on:{click:t.verifyResend}},[t._v("ici")]),t._v(". ")])]):n("h3",{staticClass:"text-center"},[t._v(" Salut, connecte-toi ou créé un compte pour profiter de ce site merveilleux où rien ne se passe encore. ")])])],1)},q=[],F={name:"Home",data:function(){return{success:null,error:null}},computed:Object(i["a"])({},Object(s["c"])("auth",["user"])),methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])("auth",["sendVerifyResendRequest"])),{},{verifyResend:function(){var t=this;this.success=this.error=null,this.sendVerifyResendRequest().then((function(){t.success="A fresh verification link has been sent to your email address."})).catch((function(e){t.error="Error sending verification link.",console.log(e.response)}))}})},N=F,B=n("b0af"),W=Object(p["a"])(N,U,q,!1,null,null,null),M=W.exports;f()(W,{VCard:B["a"]}),r["default"].use(A["a"]);var $=function(t,e,n){return localStorage.getItem("authToken")?n("/"):n()},G=function(t,e,n){return localStorage.getItem("authToken")?n():n("/login")},H=[{path:"/",name:"Home",component:M},{path:"/login",name:"Login",beforeEnter:$,component:function(){return n.e("login").then(n.bind(null,"d60c"))},meta:{title:"Sitko - Login"}},{path:"/calendar",name:"Calendar",beforeEnter:G,component:function(){return n.e("login").then(n.bind(null,"ac0f"))},meta:{title:"Sitko - Calendrier"}},{path:"/projects",name:"Projects",beforeEnter:G,component:function(){return n.e("login").then(n.bind(null,"acca"))},meta:{title:"Sitko - Projets"}},{path:"/register",name:"Register",beforeEnter:$,component:function(){return n.e("register").then(n.bind(null,"3232"))},meta:{title:"Sitko - Register"}},{path:"/verify/:hash",name:"Verify",props:!0,component:function(){return n.e("verify").then(n.bind(null,"a638"))}},{path:"/account",name:"Account",component:function(){return n.e("about").then(n.bind(null,"77be"))},meta:{title:"Sitko - Account"}}],z=new A["a"]({mode:"history",base:"/",routes:H}),J=z,K=n("bc3a"),Q=n.n(K),X={namespaced:!0,state:{userData:null,loading:!1},getters:{user:function(t){return t.userData},loading:function(t){return t.loading}},mutations:{setUserData:function(t,e){t.userData=e},setLoading:function(t){t.loading=!0},removeLoading:function(t){t.loading=!1}},actions:{getUserData:function(t){var e=t.commit;e("setLoading"),Q.a.get("https://sitko-back.herokuapp.com/api/user").then((function(t){e("setUserData",t.data),e("removeLoading")})).catch((function(){localStorage.removeItem("authToken")}))},sendLoginRequest:function(t,e){var n=t.commit;return n("setErrors",{},{root:!0}),Q.a.post("https://sitko-back.herokuapp.com/api/login",e).then((function(t){n("setUserData",t.data.user),localStorage.setItem("authToken",t.data.token)}))},sendRegisterRequest:function(t,e){var n=t.commit;return n("setErrors",{},{root:!0}),Q.a.post("https://sitko-back.herokuapp.com/api/register",e).then((function(t){n("setUserData",t.data.user),localStorage.setItem("authToken",t.data.token)}))},sendLogoutRequest:function(t){var e=t.commit;e("setLoading"),J.push("/").catch((function(){})),Q.a.post("https://sitko-back.herokuapp.com/api/logout").then((function(){e("setUserData",null),e("removeLoading"),localStorage.removeItem("authToken")}))},sendVerifyResendRequest:function(){return Q.a.get("https://sitko-back.herokuapp.com/api/email/resend")},sendVerifyRequest:function(t,e){var n=t.dispatch;return Q.a.get("https://sitko-back.herokuapp.com/api/email/verify/"+e).then((function(){n("getUserData")}))},sendDeleteUser:function(t,e){var n=t.commit;return n("setErrors",{},{root:!0}),Q.a.post("https://sitko-back.herokuapp.com/api/destroy",e).then((function(){n("setUserData",null),localStorage.removeItem("authToken")}))}}},Y=(n("c975"),n("a434"),n("b85c")),Z=n("1538"),tt={namespaced:!0,state:{projects:[],loading_projects:!1},getters:{projects:function(t){return t.projects},loading_projects:function(t){return t.loading_projects}},mutations:{setProjects:function(t,e){r["default"].set(t,"projects",e)},removeProject:function(t,e){t.projects.splice(e,1)},insertProject:function(t,e){t.projects.splice(e.index,0,e)},pushProject:function(t,e){t.projects.push(e)},editProject:function(t,e){var n=t.projects.find((function(t){return t.id===e.id})),r=t.projects.indexOf(n);t.projects.splice(r,1,e)},setLoading:function(t){t.loading_projects=!0},removeLoading:function(t){t.loading_projects=!1}},actions:{getProjects:function(t){var e=t.commit;e("setLoading"),Q.a.get("https://sitko-back.herokuapp.com/api/project").then((function(t){var n,r=[],o=Object(Y["a"])(t.data);try{for(o.s();!(n=o.n()).done;){var a=n.value;r.push(new Z["a"](a))}}catch(i){o.e(i)}finally{o.f()}e("setProjects",r),e("removeLoading")})).catch((function(){}))},sendCreateProject:function(t,e){var n=t.commit;return Q.a.post("https://sitko-back.herokuapp.com/api/project",e).then((function(t){var e=new Z["a"](t.data.project);n("pushProject",e)})).catch((function(){n("setGeneralError","Oups, petite erreur dans la création du projet",{root:!0})}))},sendEditProject:function(t,e){var n=t.commit;return Q.a.put("https://sitko-back.herokuapp.com/api/project/"+e.id,e).then((function(t){n("editProject",new Z["a"](t.data.project))})).catch((function(){n("setGeneralError","Oups, petite erreur dans l'édition du projet",{root:!0})}))},deleteProject:function(t,e){var n=t.commit,r=t.state,o=r.projects.find((function(t){return t.id===e}));o.index=r.projects.indexOf(o),n("removeProject",o.index),Q.a.delete("https://sitko-back.herokuapp.com/api/project/"+e).then((function(t){console.log(t.data.success)})).catch((function(){n("insertProject",o),n("setGeneralError","Oups, petite erreur dans la suppression du projet",{root:!0})}))}}},et=n("a033"),nt={namespaced:!0,state:{events:[],loading_events:!1},getters:{events:function(t){return t.events},loading_events:function(t){return t.loading_events}},mutations:{setEvents:function(t,e){r["default"].set(t,"events",e)},setLoading:function(t){t.loading_events=!0},removeLoading:function(t){t.loading_events=!1}},actions:{getEvents:function(t){var e=t.commit;e("setLoading"),Q.a.get("https://sitko-back.herokuapp.com/api/event").then((function(t){var n,r=[],o=Object(Y["a"])(t.data);try{for(o.s();!(n=o.n()).done;){var a=n.value;r.push(new et["a"](a))}}catch(i){o.e(i)}finally{o.f()}e("setEvents",r),e("removeLoading")})).catch((function(){}))}}};r["default"].use(s["a"]);var rt=new s["a"].Store({namespaced:!0,state:{generalError:"",errors:[],windowWidth:window.innerWidth},getters:{errors:function(t){return t.errors},generalError:function(t){return t.generalError}},mutations:{setWindowWidth:function(t){t.windowWidth=window.innerWidth},setErrors:function(t,e){t.errors=e},setGeneralError:function(t,e){t.generalError=e,setTimeout(t.generalError="",6e3)}},actions:{},modules:{auth:X,project:tt,event:nt}}),ot=n("f309");r["default"].use(ot["a"]);var at=new ot["a"]({});n("d1e78");r["default"].use(at),r["default"].config.productionTip=!1,Q.a.interceptors.response.use((function(t){return t}),(function(t){if(422===t.response.status)rt.commit("setErrors",t.response.data.errors);else{if(401!==t.response.status)return Promise.reject(t);rt.commit("auth/setUserData",null),localStorage.removeItem("authToken"),J.push({name:"Login"})}})),Q.a.interceptors.request.use((function(t){return t.headers.common={Authorization:"Bearer ".concat(localStorage.getItem("authToken")),"Content-Type":"application/json",Accept:"application/json"},t})),new r["default"]({router:J,store:rt,vuetify:at,render:function(t){return t(R)}}).$mount("#app")},"85ec":function(t,e,n){},a033:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("4160"),n("fb6a"),n("b0c0"),n("ac1f"),n("1276"),n("159b");var r=n("d4ec"),o=n("bee2"),a=n("1538"),i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Object(r["a"])(this,t),this.timed=e.timed,this.id=e.id,this.rawStart=this.timeFormat(e.start),this.rawEnd=this.timeFormat(e.end),this.start=this.timeFormat(e.start,!1),this.end=this.timeFormat(e.end,!1),this.type=e.type,e.child){var n={Project:a["a"]},o=this.type.charAt(0).toUpperCase()+this.type.slice(1);this.child=new n[o](e.child),this.name=e.child.title,this.description=e.child.description,this.color=this.child.color}else this.name="Evénement sans child",this.description="Une description d'événement lambda",this.color="blue";this.chip=this.chipFormat()}return Object(o["a"])(t,[{key:"timeFormat",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.split(" ")[0];if(!this.timed)return n;var r=t.split(" ")[1],o=r.split(":"),a="";return o.forEach((function(t,n){t.length<2&&(t="0"+t),(n!==t.length||e)&&(a+=0===n?t:":"+t)})),n+" "+a}},{key:"chipFormat",value:function(){var t="";return this.start===this.end?(this.singleDate=!0,t="le "+this.start.split(" ")[0],1==this.timed&&(t+=" à "+this.start.split(" ")[1])):(this.singleDate=!1,t="du "+this.start.split(" ")[0],1==this.timed&&(t+=" à "+this.start.split(" ")[1]),t+=" au "+this.end.split(" ")[0],1==this.timed&&(t+=" à "+this.end.split(" ")[1])),t}}]),t}()},ce6b:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.8ec273e1.png"}});
//# sourceMappingURL=app.87c210d2.js.map