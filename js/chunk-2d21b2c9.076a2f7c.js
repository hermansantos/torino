(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b2c9"],{bf3b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",[a("vs-prompt",{staticClass:"export-options",attrs:{title:"Export To Excel","accept-text":"Export",active:e.activePrompt},on:{cancle:e.clearFields,accept:e.exportToExcel,close:e.clearFields,"update:active":function(t){e.activePrompt=t}}},[a("vs-input",{staticClass:"w-full",attrs:{placeholder:"Enter File Name.."},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),a("v-select",{staticClass:"my-4",attrs:{options:e.formats},model:{value:e.selectedFormat,callback:function(t){e.selectedFormat=t},expression:"selectedFormat"}}),a("div",{staticClass:"flex"},[a("span",{staticClass:"mr-4"},[e._v("Cell Auto Width:")]),a("vs-switch",{model:{value:e.cellAutoWidth,callback:function(t){e.cellAutoWidth=t},expression:"cellAutoWidth"}},[e._v("Cell Auto Width")])],1)],1),a("div",{staticClass:"export-table"},[a("vs-table",{attrs:{data:e.users,search:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return e._l(i,(function(t,n){return a("vs-tr",{key:n},[a("vs-td",[e._v(e._s(i[n].email))]),a("vs-td",[e._v(e._s(i[n].name))]),a("vs-td",[e._v(e._s(i[n].website))]),a("vs-td",[e._v(e._s(i[n].id))])],1)}))}}])},[a("template",{slot:"header"},[a("vs-button",{on:{click:function(t){e.activePrompt=!0}}},[e._v("Export")])],1),a("template",{slot:"thead"},[a("vs-th",[e._v(" Email   ")]),a("vs-th",[e._v(" Name    ")]),a("vs-th",[e._v(" Website ")]),a("vs-th",[e._v(" Nro     ")])],1)],2)],1)],1)},n=[],s=a("4a7a"),l=a.n(s),o={components:{vSelect:l.a},data:function(){return{fileName:"",formats:["xlsx","csv","txt"],cellAutoWidth:!0,selectedFormat:"xlsx",headerTitle:["Id","Email","Username","Name","Website"],headerVal:["id","email","username","name","website"],users:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],activePrompt:!1}},methods:{exportToExcel:function(){var e=this;Promise.all([a.e("chunk-345eb468"),a.e("chunk-45107102")]).then(a.bind(null,"4bf8d")).then((function(t){var a=e.users,i=e.formatJson(e.headerVal,a);t.export_json_to_excel({header:e.headerTitle,data:i,filename:e.fileName,autoWidth:e.cellAutoWidth,bookType:e.selectedFormat}),e.clearFields()}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},clearFields:function(){this.filename="",this.cellAutoWidth=!0,this.selectedFormat="xlsx"}}},r=o,c=a("2877"),m=Object(c["a"])(r,i,n,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21b2c9.076a2f7c.js.map