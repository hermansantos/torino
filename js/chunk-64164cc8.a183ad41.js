(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64164cc8"],{"64c2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"page-book-edit"}},[a("vs-alert",{attrs:{color:"danger",title:"Book Not Found",active:t.book_not_found},on:{"update:active":function(e){t.book_not_found=e}}},[a("span",[t._v(t._s(t.$t("book.notFound.message",{bookId:t.$route.params.bookId}))+" ")])]),t.book_data?a("vx-card",[a("div",{staticClass:"tabs-container px-6 pt-6",attrs:{slot:"no-body"},slot:"no-body"},[a("vs-tabs",{staticClass:"tab-action-btn-fill-conatiner",model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("vs-tab",{attrs:{label:t.$t("book.book"),"icon-pack":"feather",icon:"icon-book"}},[a("div",{staticClass:"tab-text"},[a("book-edit-tab-account",{staticClass:"mt-4",attrs:{data:t.book_data}})],1)])],1)],1)]):t._e()],1)},o=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"user-edit-tab-info"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:t.$t("book.title"),name:"title"},model:{value:t.dataLocal.title,callback:function(e){t.$set(t.dataLocal,"title",e)},expression:"dataLocal.title"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:t.$t("book.author"),name:"author"},model:{value:t.dataLocal.author,callback:function(e){t.$set(t.dataLocal,"author",e)},expression:"dataLocal.author"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("author"),expression:"errors.has('author')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("author")))]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:t.$t("book.publishingHouse"),name:"publishingHouse"},model:{value:t.dataLocal.publishingHouse,callback:function(e){t.$set(t.dataLocal,"publishingHouse",e)},expression:"dataLocal.publishingHouse"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("publishingHouse"),expression:"errors.has('publishingHouse')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("publishingHouse")))])],1),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:t.$t("book.isbn"),name:"isbn"},model:{value:t.dataLocal.isbn,callback:function(e){t.$set(t.dataLocal,"isbn",e)},expression:"dataLocal.isbn"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("isbn"),expression:"errors.has('isbn')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("isbn")))]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:t.$t("book.price"),name:"price"},model:{value:t.dataLocal.price,callback:function(e){t.$set(t.dataLocal,"price",e)},expression:"dataLocal.price"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("price"),expression:"errors.has('price')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("price")))]),a("div",{staticClass:"w-full mt-4"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(this.$t("book.status")))]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:t.statusOptions,name:"status",dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.dataLocal.status,callback:function(e){t.$set(t.dataLocal,"status",e)},expression:"dataLocal.status"}})],1),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("status"),expression:"errors.has('status')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("status")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[a("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:!t.validateForm},on:{click:t.save_changes}},[t._v(t._s(t.$t("button.save")))]),a("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:t.reset_data}},[t._v(t._s(t.$t("button.reset")))])],1)])])])},i=[],c=a("4a7a"),l=a.n(c),u=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={components:{vSelect:l.a},props:{data:{type:Object,required:!0}},data:function(){return{loading:!1,dataLocal:JSON.parse(JSON.stringify(this.data)),statusOptions:[{label:this.$t("active"),value:1},{label:this.$t("deactivated"),value:0}]}},computed:{validateForm:function(){return!this.errors.any()}},methods:b({},Object(u["b"])(["setAlert"]),{save_changes:function(){var t=this;this.validateForm&&(this.$vs.loading(),this.$store.dispatch("bookManagement/updateBook",this.dataLocal).then((function(e){t.book_data=e.data.attributes,t.setAlert({type:"success",message:"alert.edit.success"}),t.$router.push({name:"admin-book-list"})})).catch((function(t){console.error(t)})).then((function(){t.$vs.loading.close()})))},reset_data:function(){this.dataLocal=JSON.parse(JSON.stringify(this.data))}})},v=p,f=a("2877"),h=Object(f["a"])(v,n,i,!1,null,null,null),m=h.exports,O=a("76ab");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var k={components:{BookEditTabAccount:m},data:function(){return{book_data:null,book_not_found:!1,activeTab:0}},watch:{activeTab:function(){this.fetch_book_data(this.$route.params.bookId)}},methods:{fetch_book_data:function(t){var e=this;this.$store.dispatch("bookManagement/fetchBook",t).then((function(t){e.book_data=w({},t.data.attributes,{id:t.data.id})})).catch((function(t){404!==t.response.status?console.error(t):e.book_not_found=!0}))}},created:function(){O["a"].isRegistered||(this.$store.registerModule("bookManagement",O["a"]),O["a"].isRegistered=!0),this.fetch_book_data(this.$route.params.bookId)}},_=k,j=Object(f["a"])(_,s,o,!1,null,null,null);e["default"]=j.exports},"76ab":function(t,e,a){"use strict";var s={books:[]},o=(a("8e6e"),a("ac6a"),a("456d"),a("20d6"),a("bd86"));function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var i={SET_BOOKS:function(t,e){t.books=e.map((function(t){return console.log(t),n({},t.attributes,{id:t.id})}))},UPDATE_BOOK:function(t,e){return console.log("update book"),console.log(t),console.log(e),!0},ADD_BOOK:function(t,e){return console.log("add book"),console.log(t),console.log(e),!0},REMOVE_BOOK:function(t,e){var a=t.books.findIndex((function(t){return t.id==e}));t.books.splice(a,1)}},c=a("bb36");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={fetchBooks:function(t){var e=this,a=t.commit;return new Promise((function(t,s){c["a"].get("/admin/books").then((function(s){a("SET_BOOKS",e.state.responseDataPath?s[e.state.responseDataPath].data:s.data),t(s)})).catch((function(t){s(t)}))}))},fetchBook:function(t,e){var a=this;return new Promise((function(t,s){c["a"].get("/admin/books/".concat(e)).then((function(e){t(a.state.responseDataPath?e[a.state.responseDataPath]:e)})).catch((function(t){s(t)}))}))},addBook:function(t,e){var a=this,s=t.commit;return new Promise((function(t,o){var r=u({},e,{status:e.status.value});c["a"].post("/admin/books",{attributes:r}).then((function(e){s("ADD_BOOK",a.state.responseDataPath?e[a.state.responseDataPath].data:e.data),t(e)})).catch((function(t){o(t)}))}))},updateBook:function(t,e){var a=t.commit;return new Promise((function(t,s){var o=u({},e,{status:e.status.value});c["a"].patch("/admin/books/".concat(e.id),{attributes:o}).then((function(s){console.log(e),console.log(s),a("UPDATE_BOOK",Object.assign(e,{id:s.data.data.id})),t(s)})).catch((function(t){console.log("error"),console.log(t),s(t)}))}))},removeRecord:function(t,e){var a=t.commit;return new Promise((function(t,s){c["a"].delete("/admin/books/".concat(e)).then((function(s){a("REMOVE_BOOK",e),t(s)})).catch((function(t){s(t)}))}))}},b={};e["a"]={isRegistered:!1,namespaced:!0,state:s,mutations:i,actions:d,getters:b}}}]);
//# sourceMappingURL=chunk-64164cc8.a183ad41.js.map