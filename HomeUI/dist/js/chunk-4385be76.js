(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4385be76"],{"01e3":function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r("2f79"),a=r("b42e"),o=r("c637"),i=r("a723"),s=r("9b76"),c=r("365c"),l=r("cf75");function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(l["d"])({label:Object(l["c"])(i["t"]),role:Object(l["c"])(i["t"],"status"),small:Object(l["c"])(i["g"],!1),tag:Object(l["c"])(i["t"],"span"),type:Object(l["c"])(i["t"],"border"),variant:Object(l["c"])(i["t"])},o["pb"]),b=Object(n["c"])({name:o["pb"],functional:!0,props:p,render:function(t,e){var r,n=e.props,o=e.data,i=e.slots,l=e.scopedSlots,p=i(),b=l||{},d=Object(c["b"])(s["s"],{},b,p)||n.label;return d&&(d=t("span",{staticClass:"sr-only"},d)),t(n.tag,Object(a["a"])(o,{attrs:{role:d?n.role||"status":null,"aria-hidden":d?null:"true"},class:(r={},u(r,"spinner-".concat(n.type),n.type),u(r,"spinner-".concat(n.type,"-sm"),n.small),u(r,"text-".concat(n.variant),n.variant),r)}),[d||t()])}})},"03da":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[r("b-card",[r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[r("b-form-group",{staticClass:"mb-0"},[r("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),r("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),r("b-col",{staticClass:"my-1",attrs:{md:"8"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),r("b-input-group-append",[r("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),r("b-col",{attrs:{cols:"12"}},[r("b-table",{attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(lastpaid)",fn:function(e){return[t._v(" "+t._s(new Date(1e3*Number(e.item.lastpaid)).toLocaleString("en-GB",t.timeoptions))+" ")]}}])})],1),r("b-col",{attrs:{cols:"12"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)},a=[],o=r("c7eb"),i=r("1da1"),s=(r("d81d"),r("4de4"),r("d3b7"),r("159b"),r("7db0"),r("14d9"),r("205f")),c=r("29a1"),l=r("a15b"),u=r("b28b"),p=r("26d2"),b=r("8226"),d=r("8361"),f=r("5e12"),m=r("47971"),g=r("ccc0"),y=r("1947"),h=r("9b03"),O=r("1d17"),v=r("bc3a"),j={components:{BCard:s["a"],BTable:c["a"],BRow:l["a"],BCol:u["a"],BPagination:p["a"],BFormGroup:b["a"],BFormSelect:d["a"],BInputGroup:f["a"],BFormInput:m["a"],BInputGroupAppend:g["a"],BButton:y["a"],BOverlay:h["a"]},data:function(){return{timeoptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},fluxListLoading:!0,perPage:10,pageOptions:[10,25,50,100,1e3],sortBy:"",sortDesc:!1,sortDirection:"asc",items:[],filter:"",filterOn:[],fields:[{key:"ip",label:"IP Address",sortable:!0},{key:"payment_address",label:"Address",sortable:!0},{key:"location.country",label:"Country",sortable:!0,formatter:this.formatTableEntry},{key:"location.org",label:"Provider",sortable:!0,formatter:this.formatTableEntry},{key:"lastpaid",label:"Last Paid",sortable:!0},{key:"tier",label:"Tier",sortable:!0}],totalRows:1,currentPage:1}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.getFluxList()},methods:{formatTableEntry:function(t){return t||"Unknown"},getFluxList:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){var r,n,a,i,s;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.fluxListLoading=!0,e.next=4,v.get("https://stats.runonflux.io/fluxlocations");case 4:return r=e.sent,n=r.data.data,e.next=8,O["a"].listFluxNodes();case 8:a=e.sent,i=a.data.data,s=[],i.forEach((function(t){var e=t;e.location=n.find((function(t){return t.ip===e.ip.split(":")[0]})),s.push(e)})),t.items=s.filter((function(t){return t.ip})),t.totalRows=t.items.length,t.currentPage=1,t.fluxListLoading=!1,console.log(t.items),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},w=j,x=r("2877"),P=Object(x["a"])(w,n,a,!1,null,null,null);e["default"]=P.exports},"1d17":function(t,e,r){"use strict";var n=r("b4c0");e["a"]={listFluxNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},fluxnodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")},blockReward:function(){return Object(n["a"])().get("/daemon/getblocksubsidy")}}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,o=r("44d2"),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},"9b03":function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r("2f79"),a=r("c637"),o=r("0056"),i=r("a723"),s=r("9b76"),c=r("3a58"),l=r("8c18"),u=r("cf75"),p=r("01e3"),b=r("ce2a");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g={top:0,left:0,bottom:0,right:0},y=Object(u["d"])({bgColor:Object(u["c"])(i["t"]),blur:Object(u["c"])(i["t"],"2px"),fixed:Object(u["c"])(i["g"],!1),noCenter:Object(u["c"])(i["g"],!1),noFade:Object(u["c"])(i["g"],!1),noWrap:Object(u["c"])(i["g"],!1),opacity:Object(u["c"])(i["o"],.85,(function(t){var e=Object(c["b"])(t,0);return e>=0&&e<=1})),overlayTag:Object(u["c"])(i["t"],"div"),rounded:Object(u["c"])(i["j"],!1),show:Object(u["c"])(i["g"],!1),spinnerSmall:Object(u["c"])(i["g"],!1),spinnerType:Object(u["c"])(i["t"],"border"),spinnerVariant:Object(u["c"])(i["t"]),variant:Object(u["c"])(i["t"],"light"),wrapTag:Object(u["c"])(i["t"],"div"),zIndex:Object(u["c"])(i["o"],10)},a["gb"]),h=Object(n["c"])({name:a["gb"],mixins:[l["a"]],props:y,computed:{computedRounded:function(){var t=this.rounded;return!0===t||""===t?"rounded":t?"rounded-".concat(t):""},computedVariant:function(){var t=this.variant;return t&&!this.bgColor?"bg-".concat(t):""},slotScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(t){var e=t.spinnerType,r=t.spinnerVariant,n=t.spinnerSmall;return this.$createElement(p["a"],{props:{type:e,variant:r,small:n}})}},render:function(t){var e=this,r=this.show,n=this.fixed,a=this.noFade,i=this.noWrap,c=this.slotScope,l=t();if(r){var u=t("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:f(f({},g),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),p=t("div",{staticClass:"position-absolute",style:this.noCenter?f({},g):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot(s["C"],c)||this.defaultOverlayFn(c)]);l=t(this.overlayTag,{staticClass:"b-overlay",class:{"position-absolute":!i||i&&!n,"position-fixed":i&&n},style:f(f({},g),{},{zIndex:this.zIndex||10}),on:{click:function(t){return e.$emit(o["f"],t)}},key:"overlay"},[u,p])}return l=t(b["a"],{props:{noFade:a,appear:!0},on:{"after-enter":function(){return e.$emit(o["O"])},"after-leave":function(){return e.$emit(o["s"])}}},[l]),i?l:t(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":r?"true":null}},i?[l]:[this.normalizeSlot(),l])}})},f07e:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){}}}]);