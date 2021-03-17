(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e439ae0"],{"16a5":function(t,e,a){"use strict";a("b516")},"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var i=a("3835"),n=a("5530"),s=(a("1f09"),a("c995")),r=a("24b2"),o=a("7560"),l=a("58df"),c=a("80d2");e["a"]=Object(l["a"])(s["a"],r["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),n=Object(i["a"])(a,2),s=n[0],r=n[1],o=function(){return e.genStructure(s)};return Array.from({length:r}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["o"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},9240:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"text-center"},[t._v(" "+t._s(t.title)+" ")])},n=[],s=a("a6f4"),r=Object(s["c"])({name:"PageTitle",props:{title:String}}),o=r,l=a("2877"),c=Object(l["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports},aadb:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-title",{staticClass:"my-5",attrs:{title:t._f("capitalize")(t.$t("place projects"))}}),t.user.place&&t.user.place.id===t.place_id?a("div",{staticClass:"text-center"},[a("create-button",{attrs:{text:t.$t("actions.create.project")},on:{action:function(e){return t.$router.push("/project/create/"+t.place_id)}}})],1):t._e(),t.loading||t.projects.length?t.loading||t.activeProjects.length?t._e():a("h4",{staticClass:"text-center"},[t._v(" -- "+t._s(t.$t("data.empty_typed",{item:t.$t("project")}))+" -- ")]):a("h4",{staticClass:"text-center"},[t._v(" -- "+t._s(t.$t("data.empty",{item:t.$t("project")}))+" -- ")]),t.loading?a("div",{staticClass:"projects d-flex justify-center flex-wrap"},t._l(6,(function(t){return a("skeleton-index",{key:t})})),1):a("div",[a("transition-group",{staticClass:"projects d-flex justify-center flex-wrap",attrs:{name:"list-complete",tag:"p"}},t._l(t.activeProjects,(function(t){return a("div",{key:t.id,staticClass:"list-complete-item ma-2"},[a("project-card",{staticClass:"mb-sm-2 mb-5",attrs:{project:t}})],1)})),0)],1)],1)},n=[],s=(a("4de4"),a("5530")),r=a("2f62"),o=a("3023"),l=a("375f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-skeleton-loader",{staticClass:"ma-2",attrs:{type:"card",width:"220px",height:"260px"}})},d=[],p=a("2877"),u=a("6544"),h=a.n(u),f=a("3129"),g={},b=Object(p["a"])(g,c,d,!1,null,null,null),v=b.exports;h()(b,{VSkeletonLoader:f["a"]});var m=a("9240"),y={name:"Projects",components:{ProjectCard:o["a"],CreateButton:l["a"],SkeletonIndex:v,PageTitle:m["a"]},data:function(){return{hash:null,place_id:parseInt(this.$route.params.id),editing:!1,creating:!1,editionProject:void 0,loading:!1}},mounted:function(){var t=this;this.loading=!0,this.GET_PROJECTS_BY_PLACE(this.place_id).then((function(){t.loading=!1}))},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["c"])("project",["projects"])),Object(r["c"])("auth",["user"])),{},{activeProjects:function(){var t=this;return this.projects.filter((function(e){return e.place_id==t.place_id}))}}),methods:Object(s["a"])({},Object(r["b"])("project",["GET_PROJECTS_BY_PLACE"]))},j=y,_=(a("16a5"),Object(p["a"])(j,i,n,!1,null,"e368b0b4",null));e["default"]=_.exports},b516:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2e439ae0.0f054a6f.js.map