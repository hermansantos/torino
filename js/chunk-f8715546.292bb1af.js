(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8715546"],{"12ff":function(e,t,r){"use strict";var n=r("66c2"),a=r.n(n);a.a},"5ffd":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page-user-list"}},[r("div",{staticClass:"vx-card p-6"},[r("div",{staticClass:"flex flex-wrap items-center"},[r("div",{staticClass:"flex-grow"},[r("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[r("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[r("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.paginationPageSize-(e.paginationPageSize-1))+" - "+e._s(e.ordersData.length-e.currentPage*e.paginationPageSize>0?e.currentPage*e.paginationPageSize:e.ordersData.length)+" of "+e._s(e.ordersData.length))]),r("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),r("vs-dropdown-menu",[r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(10)}}},[r("span",[e._v("10")])]),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(20)}}},[r("span",[e._v("20")])]),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(25)}}},[r("span",[e._v("25")])]),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(30)}}},[r("span",[e._v("30")])])],1)],1)],1),r("vs-input",{staticClass:"sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4",attrs:{placeholder:"Search..."},on:{input:e.updateSearchQuery},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),r("ag-grid-vue",{ref:"agGridTable",staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{components:e.components,gridOptions:e.gridOptions,columnDefs:e.columnDefs,defaultColDef:e.defaultColDef,rowData:e.ordersData,rowSelection:"multiple",colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.paginationPageSize,suppressPaginationPanel:!0,enableRtl:e.$vs.rtl}}),r("vs-pagination",{attrs:{total:e.totalPages,max:7},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])},a=[],i=(r("c5f6"),r("401be")),s=(r("4e06"),r("4a7a")),o=r.n(s),l=r("96b8"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center"},[r("router-link",{staticClass:"text-inherit hover:text-primary",attrs:{to:e.url},on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},[e._v(e._s(e.params.value))])],1)},u=[],d={name:"CellRendererLink",computed:{url:function(){return"/admin/order/view/".concat(this.params.data.id)}}},p=d,f=r("2877"),m=Object(f["a"])(p,c,u,!1,null,null,null),h=m.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._v(e._s(e._f("moment")(e.params.value,"DD/MM/YYYY")))])},v=[],R={name:"CellRendererDate"},C=R,P=Object(f["a"])(C,g,v,!1,null,null,null),w=P.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{direction:e.$vs.rtl?"rtl":"ltr"}},[r("feather-icon",{attrs:{icon:"EyeIcon",svgClasses:"h-5 w-5 mr-4 hover:text-primary cursor-pointer"},on:{click:e.viewRecord}})],1)},y=[],_={name:"CellRendererActions",methods:{viewRecord:function(){this.$router.push("/admin/order/view/".concat(this.params.data.id)).catch((function(){}))},confirmDeleteRecord:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm Delete",text:'You are about to delete "'.concat(this.params.data.username,'"'),accept:this.deleteRecord,acceptText:"Delete"})},deleteRecord:function(){this.showDeleteSuccess()},showDeleteSuccess:function(){this.$vs.notify({color:"success",title:"User Deleted",text:"The selected user was successfully deleted"})}}},S=_,b=Object(f["a"])(S,D,y,!1,null,null,null),O=b.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vs-chip",{staticClass:"ag-grid-cell-chip",attrs:{color:e.chipColor(e.params.value)}},[r("span",[e._v(e._s(e.$t(e.textStatus(e.params.value))))])])},x=[],A={name:"CellRendererPaymentStatus",computed:{chipColor:function(){return function(e){switch(e){case 0:return"danger";case 1:return"success";case 2:return"danger";case 3:return"danger";default:return"info"}}},textStatus:function(){return function(e){switch(e){case 0:return"order.payment.status.waiting";case 1:return"order.payment.status.paid";case 2:return"order.payment.status.pending";case 3:return"order.payment.status.expired";default:return e}}}}},$=A,k=(r("12ff"),Object(f["a"])($,E,x,!1,null,null,null)),F=k.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vs-chip",{staticClass:"ag-grid-cell-chip",attrs:{color:e.chipColor(e.params.value)}},[r("span",[e._v(e._s(e.$t(e.textMethod(e.params.value))))])])},T=[],z={name:"CellRendererPaymentMethod",computed:{chipColor:function(){return function(e){switch(e){case 1:return"primary";case 2:return"primary";default:return e}}},textMethod:function(){return function(e){switch(e){case 1:return"order.payment.method.slip";case 2:return"order.payment.method.credit";default:return e}}}}},V=z,j=(r("94e4b"),Object(f["a"])(V,M,T,!1,null,null,null)),G=j.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._v(e._s(e.params.value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})))])},N=[],I={name:"CellRendererPaymentValue"},L=I,Y=Object(f["a"])(L,Q,N,!1,null,null,null),U=Y.exports,q={components:{AgGridVue:i["AgGridVue"],vSelect:o.a,CellRendererLink:h,CellRendererDate:w,CellRendererActions:O,CellRendererPaymentStatus:F,CellRendererPaymentMethod:G,CellRendererPaymentValue:U},data:function(){return{searchQuery:"",gridApi:null,gridOptions:{},defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:this.$t("order.id"),field:"id",width:125,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:this.$t("order.paymentStatus"),field:"paymentStatus",width:225,cellRendererFramework:"CellRendererPaymentStatus"},{headerName:this.$t("order.paymentMethod"),field:"paymentMethod",width:225,cellRendererFramework:"CellRendererPaymentMethod"},{headerName:this.$t("order.paymentValue"),field:"paymentValue",width:225,cellRendererFramework:"CellRendererPaymentValue"},{headerName:this.$t("actions"),field:"transactions",width:150,cellRendererFramework:"CellRendererActions"}],components:{CellRendererLink:h,CellRendererDate:w,CellRendererActions:O}}},watch:{roleFilter:function(e){this.setColumnFilter("role",e.value)},statusFilter:function(e){this.setColumnFilter("status",e.value)},isVerifiedFilter:function(e){var t="all"===e.value?"all":"yes"==e.value?"true":"false";this.setColumnFilter("is_verified",t)},departmentFilter:function(e){this.setColumnFilter("department",e.value)}},computed:{ordersData:function(){return this.$store.state.orderManagement.orders},paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(e){this.gridApi.paginationGoToPage(e-1)}}},methods:{setColumnFilter:function(e,t){var r=this.gridApi.getFilterInstance(e),n=null;"all"!==t&&(n={type:"equals",filter:t}),r.setModel(n),this.gridApi.onFilterChanged()},resetColFilters:function(){this.gridApi.setFilterModel(null),this.gridApi.onFilterChanged(),this.roleFilter=this.statusFilter=this.isVerifiedFilter=this.departmentFilter={label:"All",value:"all"},this.$refs.filterCard.removeRefreshAnimation()},updateSearchQuery:function(e){this.gridApi.setQuickFilter(e)}},mounted:function(){if(this.gridApi=this.gridOptions.api,this.$vs.rtl){var e=this.$refs.agGridTable.$el.querySelector(".ag-header-container");e.style.left="-"+String(Number(e.style.transform.slice(11,-3))+9)+"px"}},created:function(){l["a"].isRegistered||(this.$store.registerModule("orderManagement",l["a"]),l["a"].isRegistered=!0);var e=this.$route.params.batchId;this.$store.dispatch("orderManagement/fetchOrders",e).catch((function(e){console.error(e)}))}},B=q,J=(r("ed3a"),Object(f["a"])(B,n,a,!1,null,null,null));t["default"]=J.exports},"66c2":function(e,t,r){},"7d1e":function(e,t,r){},"94e4b":function(e,t,r){"use strict";var n=r("7d1e"),a=r.n(n);a.a},"96b8":function(e,t,r){"use strict";var n={orders:[]},a=(r("20d6"),{SET_ORDERS:function(e,t){e.orders=t.map((function(e){return console.log("set orders"),console.log(e.attributes),e.attributes}))},SET_ORDER:function(e,t){e.order=t.attributes,console.log("set order"),console.log(t.attributes)},UPDATE_ORDER:function(e,t){return console.log("update order"),console.log(e),console.log(t),!0},ADD_ORDER:function(e,t){return console.log("add order"),console.log(e),console.log(t),!0},REMOVE_ORDER:function(e,t){var r=e.orders.findIndex((function(e){return e.id==t}));e.orders.splice(r,1)},SET_ORDERS_REPORT:function(e,t){console.log("teste"),console.log(t),e.ordersReport.books=t.map((function(e){return console.log("set orders"),console.log(e.attributes),e.attributes}))}}),i=r("bb36"),s={fetchOrders:function(e,t){var r=this,n=e.commit;return new Promise((function(e,a){i["a"].get("/admin/batches/".concat(t,"/orders")).then((function(t){n("SET_ORDERS",r.state.responseDataPath?t[r.state.responseDataPath].data:t.data),e(t)})).catch((function(e){a(e)}))}))},fetchOrder:function(e,t){var r=this,n=e.commit;return new Promise((function(e,a){i["a"].get("/admin/orders/".concat(t)).then((function(t){n("SET_ORDER",r.state.responseDataPath?t[r.state.responseDataPath].data:t.data),e(r.state.responseDataPath?t[r.state.responseDataPath]:t)})).catch((function(e){a(e)}))}))},addOrder:function(e,t){return new Promise((function(e,r){i["a"].post("/admin/orders",{data:t}).then((function(t){e(t)})).catch((function(e){r(e)}))}))},updateOrder:function(e,t){var r=e.commit;return new Promise((function(e,n){i["a"].post("/admin/orders/".concat(t.id),{data:t}).then((function(n){r("UPDATE_ORDER",Object.assign(t,{id:n.data.id})),e(n)})).catch((function(e){n(e)}))}))},removeOrder:function(e,t){var r=e.commit;return new Promise((function(e,n){i["a"].delete("/admin/orders/".concat(t)).then((function(n){r("REMOVE_ORDER",t),e(n)})).catch((function(e){n(e)}))}))},fetchOrdersReport:function(e,t){var r=this,n=e.commit;return new Promise((function(e,a){i["a"].get("/admin/orders/".concat(t,"/orders-report")).then((function(t){n("SET_ORDERS_REPORT",r.state.responseDataPath?t[r.state.responseDataPath].data:t.data),e(t)})).catch((function(e){a(e)}))}))}},o={};t["a"]={isRegistered:!1,namespaced:!0,state:n,mutations:a,actions:s,getters:o}},ed3a:function(e,t,r){"use strict";var n=r("f052"),a=r.n(n);a.a},f052:function(e,t,r){}}]);
//# sourceMappingURL=chunk-f8715546.292bb1af.js.map