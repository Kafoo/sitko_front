(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e8f4411"],{1673:function(e,t,a){"use strict";a("e8b4")},a5e9:function(e,t,a){},aadb:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-center"},[a("create-button",{attrs:{item:e.$t("project")},on:{action:function(t){e.creating=!0}}})],1),a("v-select",{attrs:{items:e.types,label:"Type",outlined:""},model:{value:e.activeType,callback:function(t){e.activeType=t},expression:"activeType"}}),e.loading_projects||e.projects.length?e.loading_projects||e.activeProjects.length?e._e():a("h4",{staticClass:"text-center"},[e._v(" -- "+e._s(e.$t("data.empty_typed",{item:e.$t("project")}))+" -- ")]):a("h4",{staticClass:"text-center"},[e._v(" -- "+e._s(e.$t("data.empty",{item:e.$t("project")}))+" -- ")]),e.loading_projects?a("div",{staticClass:"d-flex flex-column"},[a("skeleton-index")],1):a("div",[a("transition-group",{staticClass:"projects d-flex flex-column",attrs:{name:"list-complete",tag:"p"}},e._l(e.activeProjects,(function(t,i){return a("div",{key:t.id,staticClass:"list-complete-item"},[a("card-project",{attrs:{project:t,index:i,expanded:t.expanded},on:{toogleExpand:function(a){return e.toogleExpand(t.id)},openEdit:e.openEdit,deleteProject:e.SEND_PROJECT_DELETION,toogleImage:e.toogleImage}})],1)})),0),a("v-dialog",{attrs:{width:"500"},model:{value:e.creating,callback:function(t){e.creating=t},expression:"creating"}},[a("create-project",{on:{closeCreation:e.closeCreation}})],1),a("v-dialog",{attrs:{width:"500"},model:{value:e.editing,callback:function(t){e.editing=t},expression:"editing"}},[a("edit-project",{attrs:{propProject:e.editionProject},on:{closeEdit:e.closeEdit}})],1),a("v-dialog",{attrs:{width:"90%"},model:{value:e.expand_image,callback:function(t){e.expand_image=t},expression:"expand_image"}},[a("image-popup",{attrs:{image:e.expanded_image},on:{toogleImage:e.toogleImage}})],1)],1)],1)},c=[],o=(a("4de4"),a("fb6a"),a("5530")),n=a("2f62"),s=(a("bc3a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"pt-7 pb-3 px-4"},[e.pickingDate?e._e():a("div",{staticClass:"card-body py-0"},[a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendEdit(t)}},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[a("v-text-field",{attrs:{outlined:"",label:e._f("capitalize")(e.$t("title")),rules:[e.rules.required]},model:{value:e.editedProject.title,callback:function(t){e.$set(e.editedProject,"title",t)},expression:"editedProject.title"}}),a("v-select",{attrs:{label:e._f("capitalize")(e.$t("type")),type:"type",id:"type",items:e.types,rules:[e.rules.required],solo:"","max-width":"200px"},model:{value:e.editedProject.type,callback:function(t){e.$set(e.editedProject,"type",t)},expression:"editedProject.type"}}),a("v-textarea",{attrs:{outlined:"",label:e._f("capitalize")(e.$t("description")),name:"input-7-4",rules:[e.rules.required]},model:{value:e.editedProject.description,callback:function(t){e.$set(e.editedProject,"description",t)},expression:"editedProject.description"}}),e.editedProject.image&&!e.editedProject.imageChanged?a("div",{staticClass:"imgContainer"},[a("img",{attrs:{src:e.editedProject.image.thumb}}),a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:e.removeImage}},[a("v-icon",[e._v("close")])],1)],1):a("v-file-input",{attrs:{rules:[e.rules.image],accept:"image/jpeg",label:e._f("capitalize")(e.$t("image")),"prepend-icon":"insert_photo"},on:{change:e.imageChange},model:{value:e.editedProject.file,callback:function(t){e.$set(e.editedProject,"file",t)},expression:"editedProject.file"}}),a("v-chip-group",{staticClass:"d-flex align-center",attrs:{column:""}},[!e.editedProject.caldates||e.editedProject.caldates&&!e.editedProject.caldates.length?a("v-chip",{staticClass:"py-5",on:{click:function(t){e.pickingDate=!0}}},[e._v(" "+e._s(e._f("capitalize")(e.$t("actions.add",{item:e.$t("caldate")})))+" ")]):e._e(),e._l(e.editedProject.caldates,(function(t,i){return a("v-tooltip",{key:i,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(c){var o=c.on;return[a("v-chip",e._g({staticClass:"caldate-chip py-6 mt-0",attrs:{close:""},on:{"click:close":function(t){return e.removeCaldate(i)}}},o),[t.singleDate?a("v-icon",{staticClass:"px-2"},[e._v("today")]):a("v-icon",{staticClass:"px-2"},[e._v("date_range")])],1)]}}],null,!0)},[a("span",[e._v(e._s(t.chip))])])})),e.editedProject.caldates&&e.editedProject.caldates.length?a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[e.showCaldates?a("v-btn",e._g({attrs:{icon:"",height:"45",width:"45",color:"green"},on:{click:function(t){e.pickingDate=!0}}},i),[a("v-icon",[e._v("add")])],1):e._e()]}}],null,!1,1746415089)},[a("span",[e._v(" "+e._s(e._f("capitalize")(e.$t("actions.add",{item:e.$t("caldate")})))+" ")])]):e._e()],2),a("v-divider",{staticClass:"mb-0"}),a("v-card-actions",{staticClass:"actions d-flex justify-end"},[a("v-spacer"),a("v-btn",{attrs:{disabled:e.loading,text:""},on:{click:e.closeEdit}},[e._v(" "+e._s(e.$t("confirm.cancel"))+" ")]),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:e.loading||!e.form,text:""}},[e._v(" "+e._s(e.$t("confirm.confirm"))+" ")]),e.loading?a("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):e._e()],1)],1)],1),e.pickingDate?a("ChooseDate",{staticClass:"choose-date",on:{closeDatePicker:e.closeDatePicker,addCaldate:e.addCaldate}}):e._e()],1)}),r=[],l=(a("a434"),a("2c2a")),d={name:"EditProject",components:{ChooseDate:l["a"]},data:function(){return{form:!1,loading:!1,pickingDate:!1,editedProject:{},types:["ferme","écolieu","autre"]}},mounted:function(){this.editedProject=JSON.parse(JSON.stringify(this.propProject))},props:{propProject:Object,showCaldates:{type:Boolean,default:!0}},computed:{rules:function(){var e=this;return{required:function(t){return!!t||e.$options.filters.capitalize(e.$t("form.required"))},image:function(t){return!t||t.size<3e6||e.$options.filters.capitalize(e.$t("media.max_size",{max:"3 MB"}))}}}},watch:{propProject:function(e){this.editedProject=JSON.parse(JSON.stringify(e))}},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])("project",["SEND_PROJECT_EDITION"])),{},{closeEdit:function(){this.$emit("closeEdit")},sendEdit:function(){var e=this;this.loading=!0,this.editedProject.projectOnly=!this.showCaldates,this.SEND_PROJECT_EDITION(this.editedProject).then((function(){e.$emit("closeEdit"),e.loading=!1})).catch((function(){e.loading=!1}))},closeDatePicker:function(){this.pickingDate=!1},addCaldate:function(e){this.editedProject.caldates.push(e)},removeCaldate:function(e){this.editedProject.caldates.splice(e,1)},imageChange:function(){var e=this;if(this.editedProject.imageChanged=!0,this.editedProject.file){var t=new FileReader;t.readAsDataURL(this.editedProject.file),t.onload=function(t){e.editedProject.image=t.target.result}}else this.editedProject.image=null},removeImage:function(){this.editedProject.imageChanged=!0,this.editedProject.image=null}})},p=d,u=(a("acaf"),a("2877")),f=a("6544"),m=a.n(f),v=a("8336"),h=a("b0af"),g=a("99d9"),_=a("cc20"),j=a("ef9a"),P=a("ce7e"),C=a("23a7"),x=a("4bd4"),b=a("132d"),y=a("8e36"),k=a("b974"),w=a("2fa4"),$=a("8654"),E=a("a844"),O=a("3a2f"),V=Object(u["a"])(p,s,r,!1,null,"1b253228",null),D=V.exports;m()(V,{VBtn:v["a"],VCard:h["a"],VCardActions:g["a"],VChip:_["a"],VChipGroup:j["a"],VDivider:P["a"],VFileInput:C["a"],VForm:x["a"],VIcon:b["a"],VProgressLinear:y["a"],VSelect:k["a"],VSpacer:w["a"],VTextField:$["a"],VTextarea:E["a"],VTooltip:O["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"pt-7 pb-3 px-4"},[e.pickingDate?e._e():a("div",{staticClass:"card-body"},[a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.createProject(t)}},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"title",attrs:{for:"title"}},[e._v(" "+e._s(e._f("camelize")(e.$t("actions.new",{item:e.$t("project")})))+" ")])]),a("v-text-field",{attrs:{label:e._f("capitalize")(e.$t("title")),outlined:"",rules:[e.rules.required],disabled:e.loading},model:{value:e.newProject.title,callback:function(t){e.$set(e.newProject,"title",t)},expression:"newProject.title"}}),a("v-select",{attrs:{label:e._f("capitalize")(e.$t("type")),type:"type",id:"type",items:e.types,rules:[e.rules.required],solo:"","max-width":"200px"},model:{value:e.newProject.type,callback:function(t){e.$set(e.newProject,"type",t)},expression:"newProject.type"}}),a("v-textarea",{attrs:{label:e._f("capitalize")(e.$t("description")),type:"description",id:"description",outlined:"",rules:[e.rules.required],name:"input-7-4",disabled:e.loading},model:{value:e.newProject.description,callback:function(t){e.$set(e.newProject,"description",t)},expression:"newProject.description"}}),a("v-file-input",{attrs:{label:e._f("capitalize")(e.$t("image")),rules:[e.rules.image],accept:"image/jpeg"},on:{change:e.changeImage},model:{value:e.newProject.file,callback:function(t){e.$set(e.newProject,"file",t)},expression:"newProject.file"}}),a("v-chip-group",{attrs:{column:""}},[!e.newProject.caldates||e.newProject.caldates&&!e.newProject.caldates.length?a("v-chip",{staticClass:"py-5",on:{click:function(t){e.pickingDate=!0}}},[e._v(" "+e._s(e._f("capitalize")(e.$t("actions.add",{item:e.$t("caldate")})))+" ")]):e._e(),e._l(e.newProject.caldates,(function(t,i){return a("v-tooltip",{key:i,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(c){var o=c.on;return[a("v-chip",e._g({staticClass:"caldate-chip py-6 mt-0",attrs:{close:""},on:{"click:close":function(t){return e.removeCaldate(i)}}},o),[t.singleDate?a("v-icon",{staticClass:"px-2"},[e._v("today")]):a("v-icon",{staticClass:"px-2"},[e._v("date_range")])],1)]}}],null,!0)},[a("span",[e._v(e._s(t.chip))])])})),e.newProject.caldates&&e.newProject.caldates.length?a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-btn",e._g({attrs:{icon:"",height:"45",width:"45",color:"green"},on:{click:function(t){e.pickingDate=!0}}},i),[a("v-icon",[e._v("add")])],1)]}}],null,!1,687051364)},[a("span",[e._v(" "+e._s(e._f("capitalize")(e.$t("actions.add",{item:e.$t("caldate")})))+" ")])]):e._e()],2),a("v-card-actions",{staticClass:"d-flex justify-center"},[a("v-btn",{attrs:{disabled:e.loading},on:{click:e.cancel}},[e._v(" "+e._s(e.$t("confirm.cancel"))+" ")]),a("v-btn",{attrs:{type:"submit",disabled:e.loading||!e.form}},[e._v(" "+e._s(e.$t("confirm.confirm"))+" ")])],1)],1),e.loading?a("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):e._e()],1),e.pickingDate?a("ChooseDate",{staticClass:"choose-date",on:{closeDatePicker:e.closeDatePicker,addCaldate:e.addCaldate}}):e._e()],1)},I=[],S={name:"CreateProject",data:function(){return{place_id:this.$route.params.id,form:!1,loading:!1,pickingDate:!1,newProject:{place_id:this.$route.params.id,caldates:[]},types:["ferme","écolieu","autre"]}},components:{ChooseDate:l["a"]},props:{project:Object},computed:{rules:function(){var e=this;return{required:function(t){return!!t||e.$options.filters.capitalize(e.$t("form.required"))},image:function(t){return!t||t.size<3e6||e.$options.filters.capitalize(e.$t("media.max_size",{max:"3 MB"}))}}}},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])("project",["SEND_PROJECT_CREATION"])),{},{cancel:function(){this.resetProject(),this.$emit("closeCreation")},resetProject:function(){this.newProject={place_id:this.place_id,caldates:[]}},createProject:function(){var e=this;this.loading=!0,this.SEND_PROJECT_CREATION(this.newProject).then((function(){e.loading=!1,e.$emit("closeCreation"),e.resetProject()})).catch((function(){e.loading=!1}))},closeDatePicker:function(){this.pickingDate=!1},addCaldate:function(e){this.newProject.caldates.push(e)},removeCaldate:function(e){this.newProject.caldates.splice(e,1)},changeImage:function(){var e=this;if(this.newProject.file){var t=new FileReader;t.readAsDataURL(this.newProject.file),t.onload=function(t){e.newProject.image=t.target.result}}else this.newProject.image=void 0}})},z=S,N=Object(u["a"])(z,T,I,!1,null,null,null),R=N.exports;m()(N,{VBtn:v["a"],VCard:h["a"],VCardActions:g["a"],VChip:_["a"],VChipGroup:j["a"],VFileInput:C["a"],VForm:x["a"],VIcon:b["a"],VProgressLinear:y["a"],VSelect:k["a"],VTextField:$["a"],VTextarea:E["a"],VTooltip:O["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.hover;return[a("v-card",{staticClass:"project ma-1",class:{"on-hover":i},attrs:{id:e.project.id,elevation:i?4:2}},[a("div",{staticClass:"d-flex project-main",on:{click:function(t){return e.$emit("toogleExpand")}}},[a("v-card-title",{staticClass:"d-inline-block py-3 text-truncate"},[a("v-chip",{staticClass:"type hidden-xs-only white--text rounded-lg",class:e.project.color},[e._v(" "+e._s(e.project.type)+" ")]),e._v(" "+e._s(e.project.title)+" ")],1),a("v-spacer"),a("v-card-actions",[a("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.$emit("openEdit",e.index)}}},[a("v-icon",[e._v("create")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.deleting=!0}}},[a("v-icon",[e._v("delete")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v(e._s(e.expanded?"expand_less":"expand_more"))])],1)],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}],staticClass:"expand"},[a("v-divider",{staticClass:"my-0"}),a("v-card-text",{staticClass:"pt-2",attrs:{"min-height":"200px"}},[a("div",{staticClass:"d-flex flex-column-reverse align-start flex-sm-row"},[e.project.image?a("v-img",{staticClass:"image mr-sm-3 mb-sm-3 mt-sm-0 mt-3 flex-grow-0",attrs:{"lazy-src":e.project.image.low_medium,src:e.project.image.medium},on:{click:function(t){return e.$emit("toogleImage",e.project.image)}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"image_placeholder fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}):e._e(),e.project.image?a("v-divider",{staticClass:"hidden-xs-only mr-2",attrs:{vertical:""}}):e._e(),a("div",{staticClass:"flex-grow-1"},[a("div",{staticClass:"d-flex flex-wrap"},[a("v-chip",{staticClass:"type hidden-sm-and-up white--text rounded-lg my-1 mr-2",class:e.project.color},[e._v(" "+e._s(e.project.type)+" ")]),a("v-chip-group",{attrs:{column:""}},e._l(e.project.caldates,(function(t){return a("v-tooltip",{key:t.id,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(i){var c=i.on;return[a("v-chip",e._g({staticClass:"c-default pa-2 mt-0"},c),[t.singleDate?a("v-icon",[e._v("today")]):a("v-icon",[e._v("date_range")])],1)]}}],null,!0)},[a("span",[e._v(e._s(t.chip))])])})),1)],1),a("v-clamp",{staticClass:"description",attrs:{autoresize:"","max-lines":10}}),a("span",{staticStyle:{"white-space":"pre-wrap"},attrs:{width:"100%"}},[e._v(e._s(e.project.description))])],1)],1)])],1)]),a("v-dialog",{attrs:{width:"500"},model:{value:e.deleting,callback:function(t){e.deleting=t},expression:"deleting"}},[a("v-card",{staticClass:"pt-7 pb-3"},[a("v-card-text",{staticClass:"text-h6"},[e._v(" "+e._s(e.$t("This project will be removed definitely"))+" ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.deleting=!1}}},[e._v(" "+e._s(e.$t("confirm.cancel"))+" ")]),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(t){return e.$emit("deleteProject",e.project.id)}}},[e._v(" "+e._s(e.$t("delete"))+" ")])],1)],1)],1)],1)]}}])})},A=[],L=(a("a9e3"),a("3f87")),q={name:"CardProject",components:{VClamp:L["a"]},props:{project:Object,index:Number,expanded:Boolean},data:function(){return{deleting:!1,color:"red"}}},B=q,F=(a("c0af"),a("169a")),G=a("0789"),X=a("ce87"),M=a("adda"),U=a("490a"),H=a("0fd9"),K=Object(u["a"])(B,J,A,!1,null,"40b59bf3",null),Q=K.exports;m()(K,{VBtn:v["a"],VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VChip:_["a"],VChipGroup:j["a"],VDialog:F["a"],VDivider:P["a"],VExpandTransition:G["a"],VHover:X["a"],VIcon:b["a"],VImg:M["a"],VProgressCircular:U["a"],VRow:H["a"],VSpacer:w["a"],VTooltip:O["a"]});var W=a("3063"),Y=a("375f"),Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l([1,2,3,4],(function(e){return a("v-skeleton-loader",{key:e,staticClass:"boilerplate ma-1 elevation-3",attrs:{height:"60",type:"table-heading"}})})),1)},ee=[],te=a("3129"),ae={},ie=Object(u["a"])(ae,Z,ee,!1,null,null,null),ce=ie.exports;m()(ie,{VSkeletonLoader:te["a"]});var oe={name:"Projects",components:{EditProject:D,CreateProject:R,CardProject:Q,ImagePopup:W["a"],CreateButton:Y["a"],SkeletonIndex:ce},data:function(){return{hash:null,place_id:this.$route.params.id,expand_image:!1,expanded_image:{},editing:!1,creating:!1,activeType:"",editionProject:{}}},mounted:function(){this.activeType=this.types[0],location.hash&&(this.hash=location.hash),location.hash="";var e={place_id:this.place_id,hash:this.hash};this.GET_PLACE_PROJECTS(e)},watch:{loading_projects:function(){var e=this;!1===this.loading_projects&&this.$nextTick((function(){if(e.hash){var t=e.hash.slice(1);e.TOOGLE_PROJECT_EXPAND(t),setTimeout((function(){document.getElementById(t).scrollIntoView({behavior:"smooth"})}),300)}}))},types:function(){this.activeType=this.types[0]}},computed:Object(o["a"])(Object(o["a"])({},Object(n["c"])("project",["loading_projects","projects"])),{},{types:function(){return[this.$t("all"),"ferme","écolieu","autre"]},activeProjects:function(){var e=this;return this.activeType===this.$t("all")?this.projects:this.projects.filter((function(t){return t.type===e.activeType}))}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(n["b"])("project",["GET_PLACE_PROJECTS","SEND_PROJECT_DELETION","TOOGLE_PROJECT_EXPAND"])),Object(n["d"])("project",["closeExpands"])),{},{openEdit:function(e){this.editionProject=this.projects[e],this.editing=!0},closeEdit:function(){this.editing=!1,this.editionProject={}},closeCreation:function(){this.creating=!1},toogleImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.expanded_image=e,this.expand_image=!this.expand_image},toogleExpand:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.TOOGLE_PROJECT_EXPAND(e)}})},ne=oe,se=(a("1673"),Object(u["a"])(ne,i,c,!1,null,"75a237f4",null));t["default"]=se.exports;m()(se,{VDialog:F["a"],VSelect:k["a"]})},acaf:function(e,t,a){"use strict";a("a5e9")},c0af:function(e,t,a){"use strict";a("fa5c")},e8b4:function(e,t,a){},fa5c:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3e8f4411.7df28755.js.map