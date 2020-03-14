(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2f18"],{"25ed":function(e,a,l){"use strict";l.r(a);var n=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{attrs:{id:"form-element-input-demo"}},[l("input-default"),l("input-label"),l("input-label-placeholder"),l("input-icon"),l("input-color"),l("input-validation"),l("input-size")],1)},t=[],o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("vx-card",{attrs:{title:"Default","code-toggler":""}},[l("span",[e._v("The input is a functional part in an application, For implementing it we have the "),l("code",[e._v("vs-input")]),e._v(" component.")]),l("div",{staticClass:"demo-alignment"},[l("vs-input",{staticClass:"inputx",attrs:{placeholder:"Placeholder"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("vs-input",{staticClass:"inputx",attrs:{disabled:"",placeholder:"Disabled"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n  <div class="centerx default-input">\n    <vs-input class="inputx" placeholder="Placeholder" v-model="value1" />\n    <vs-input disabled class="inputx" placeholder="Disabled" v-model="value2" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: \'\',\n      value2: \'\'\n    }\n  }\n}\n<\/script>\n        ')])],2)},c=[],r={data:function(){return{value1:"",value2:""}}},s=r,i=l("2877"),u=Object(i["a"])(s,o,c,!1,null,null,null),v=u.exports,p=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("vx-card",{attrs:{title:"Label","code-toggler":""}},[l("span",[e._v("Add a label to the input with the property "),l("code",[e._v("label")])]),l("div",{staticClass:"demo-alignment"},[l("vs-input",{attrs:{label:"Name",placeholder:"Your Name"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("vs-input",{attrs:{type:"password",label:"Password",placeholder:"Your Password"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n    <div class="centerx labelx">\n      <vs-input label="Name" placeholder="Your Name" v-model="value1"/>\n      <vs-input type="password" label="Password" placeholder="Your Password" v-model="value2"/>\n    </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:\'\',\n      value2:\'\'\n    }\n  }\n}\n<\/script>\n        ')])],2)},d=[],h={data:function(){return{value1:"",value2:""}}},m=h,f=Object(i["a"])(m,p,d,!1,null,null,null),b=f.exports,g=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("vx-card",{attrs:{title:"Label Placeholder","code-toggler":""}},[l("span",[e._v("The placeholder can become a label when the input is focused. Use the property "),l("code",[e._v("label-placeholder")]),e._v(" for making this.")]),l("div",{staticClass:"demo-alignment"},[l("vs-input",{attrs:{"label-placeholder":"Label-placeholder"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("vs-input",{attrs:{disabled:"true","label-placeholder":"Label-placeholder-disabled"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n  <div class="centerx">\n    <vs-input label-placeholder="Label-placeholder" v-model="value1"/>\n    <vs-input disabled="true" label-placeholder="Label-placeholder-disabled" v-model="value2"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:\'\',\n      value2:\'\'\n    }\n  }\n}\n<\/script>\n        ')])],2)},x=[],_={data:function(){return{value1:"",value2:""}}},k=_,w=Object(i["a"])(k,g,x,!1,null,null,null),C=w.exports,y=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("vx-card",{attrs:{title:"Icon","code-toggler":""}},[l("span",[e._v("The input can have icons. Use the property "),l("code",[e._v("vs-icon")]),e._v(". You can also also manipulate the icon's position with the property "),l("code",[e._v("vs-icon-after")])]),l("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[l("span",[e._v("Vuesax uses the "),l("strong",[e._v("Google Material Icons")]),e._v(" font library. For a list of all available icons, visit the official "),l("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[e._v("Material Icons page.")])])]),l("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[l("span",[e._v("FontAwesome and other fonts library are supported. Simply use the "),l("code",[e._v("vs-icon-pack")]),e._v(" with "),l("code",[e._v("fa")]),e._v(" or "),l("code",[e._v("fas")]),e._v(". You still need to include the Font Awesome icons in your project.")])]),l("br"),l("div",{staticClass:"demo-alignment"},[l("vs-input",{staticClass:"is-label-placeholder",attrs:{"icon-pack":"feather",icon:"icon-search",placeholder:"Search"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("vs-input",{attrs:{"icon-pack":"feather",icon:"icon-edit-2","icon-after":"",placeholder:"icon-after","vs-placeholder":"Nombre"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("vs-input",{attrs:{"icon-pack":"feather",icon:"icon-plus","label-placeholder":"Label-placeholder"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),l("vs-input",{attrs:{"icon-pack":"feather",icon:"icon-shopping-cart","icon-after":"","vs-icon-after":"true","label-placeholder":"Label-placeholder"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}}),l("vs-input",{attrs:{"icon-pack":"feather",icon:"icon-alert-circle","label-placeholder":"icon-disabled",disabled:"true"},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}}),l("vs-input",{attrs:{"icon-pack":"feather",icon:"icon-mail",placeholder:"icon-no-border","icon-no-border":""},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n    <div class="centerx">\n        <vs-input icon-pack="feather" icon="icon-search" placeholder="Search" v-model="value1" class="is-label-placeholder" />\n        <vs-input icon-pack="feather" icon="icon-edit-2" icon-after placeholder="icon-after" vs-placeholder="Nombre" v-model="value2" />\n        <vs-input icon-pack="feather" icon="icon-plus" label-placeholder="Label-placeholder" v-model="value3" />\n        <vs-input icon-pack="feather" icon="icon-shopping-cart" icon-after vs-icon-after="true" label-placeholder="Label-placeholder" v-model="value4" />\n        <vs-input icon-pack="feather" icon="icon-alert-circle" label-placeholder="icon-disabled" disabled="true" v-model="value5" />\n        <vs-input icon-pack="feather" icon="icon-mail" placeholder="icon-no-border" v-model="value6" icon-no-border />\n    </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:\'\',\n      value2:\'\',\n      value3:\'\',\n      value4:\'\',\n      value5:\'\',\n      value6:\'\',\n      value7:\'\',\n      value8: \'\'\n    }\n  }\n}\n<\/script>\n        ')])],2)},E=[],D={data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:""}}},z=D,S=Object(i["a"])(z,y,E,!1,null,null,null),L=S.exports,P=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("vx-card",{attrs:{title:"Color","code-toggler":""}},[l("span",[e._v("You can change the color of the borders when the focus the input with the property "),l("code",[e._v("color")]),e._v(". You are able to use the "),l("router-link",{attrs:{to:"/colors"}},[e._v("Main Colors")]),e._v(" or "),l("strong",[e._v("strong")]),e._v(" and "),l("strong",[e._v("HEX")]),e._v(" colors.")],1),l("vs-alert",{staticClass:"mt-5 mb-3",attrs:{icon:"warning",active:"true",color:"warning"}},[l("span",[e._v("Only "),l("strong",[e._v("RGB")]),e._v(" and "),l("strong",[e._v("HEX")]),e._v(" colors are supported.")])]),l("div",{staticClass:"demo-alignment"},[l("vs-input",{staticClass:"mb-2",attrs:{"label-placeholder":"Default"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("vs-input",{staticClass:"mb-2",attrs:{color:"success","label-placeholder":"Success"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("vs-input",{staticClass:"mb-2",attrs:{color:"danger","label-placeholder":"Danger"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),l("vs-input",{staticClass:"mb-2",attrs:{color:"warning","label-placeholder":"Warning"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}}),l("vs-input",{attrs:{color:"dark","label-placeholder":"Dark"},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}}),l("vs-input",{attrs:{color:"rgb(213, 14, 151)","label-placeholder":"RGB: rgb(213, 14, 151)"},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}}),l("vs-input",{attrs:{color:"#11e988","label-placeholder":"HEX: #11e988"},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}})],1),l("template",{slot:"codeContainer"},[e._v('\n\n<template>\n    <div class="demo-alignment">\n      <vs-input label-placeholder="Default" v-model="value1"/>\n      <vs-input color="success" label-placeholder="Success" v-model="value2"/>\n      <vs-input color="danger" label-placeholder="Danger" v-model="value3"/>\n      <vs-input color="warning" label-placeholder="Warning" v-model="value4"/>\n      <vs-input color="dark" label-placeholder="Dark" v-model="value5"/>\n      <vs-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>\n      <vs-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value7"/>\n    </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:\'\',\n      value2:\'\',\n      value3:\'\',\n      value4:\'\',\n      value5:\'\',\n      value6:\'\',\n      value7:\'\'\n    }\n  }\n}\n<\/script>\n\n        ')])],2)},I=[],Y={data:function(){return{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:""}}},j=Y,O=Object(i["a"])(j,P,I,!1,null,null,null),T=O.exports,$=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("vx-card",{attrs:{title:"Validations","code-toggler":""}},[l("p",[e._v("You can add a state for example of in affirmative response to a validation with "),l("code",[e._v("vs-success")]),e._v(" and if it is necessary to add a description or help to the user you can do it with the property "),l("code",[e._v("vs-description")])]),l("p",[e._v("You can add icon using "),l("code",[e._v("val-icon-{}")]),e._v(" and value will be icon name")]),l("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[l("span",[e._v("Each of the states you can change the text, for example in the case of "),l("code",[e._v("vs-danger-text")]),e._v(" for the state of danger.")])]),l("div",{staticClass:"demo-alignment"},[l("vs-input",{attrs:{success:!0,"success-text":"The mail is valid",placeholder:"Email Success","val-icon-success":"icon-check","val-icon-pack":"feather"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("vs-input",{attrs:{danger:!0,"danger-text":"Wrong password",placeholder:"Password Danger","val-icon-danger":"icon-x","val-icon-pack":"feather"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("vs-input",{attrs:{warning:!0,"warning-text":"The your data could not be verified","val-icon-warning":"icon-alert-triangle","val-icon-pack":"feather"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),l("vs-input",{attrs:{"description-text":"Enter first two digit of your phone",placeholder:"Phone Description"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1),l("template",{slot:"codeContainer"},[e._v('\n<template>\n    <div class="centerx">\n    <vs-input\n        :success="true"\n        success-text="The mail is valid"\n        placeholder="Email Success"\n        val-icon-success="icon-check"\n        val-icon-pack="feather"\n        v-model="value1" />\n\n    <vs-input\n        :danger="true"\n        danger-text="Wrong password"\n        placeholder="Password Danger"\n        val-icon-danger="icon-x"\n        val-icon-pack="feather"\n        v-model="value2" />\n\n    <vs-input\n        :warning="true"\n        warning-text="The your data could not be verified"\n        val-icon-warning="icon-alert-triangle"\n        val-icon-pack="feather"\n        v-model="value3" />\n\n    <vs-input\n        description-text="Enter first two digit of your phone"\n        placeholder="Phone Description"\n        v-model="value4" />\n    </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:\'\',\n      value2:\'\',\n      value3:\'\',\n      value4:\'\',\n    }\n  }\n}\n<\/script>\n        ')])],2)},N=[],F={data:function(){return{value1:"",value2:"",value3:"",value4:""}}},G=F,H=Object(i["a"])(G,$,N,!1,null,null,null),W=H.exports,X=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("vx-card",{attrs:{title:"Size","code-toggler":""}},[l("span",[e._v("Control the size of input using "),l("code",[e._v("size")]),e._v(". The allowed values are: "),l("code",[e._v("large")]),e._v(" and "),l("code",[e._v("small")])]),l("div",{staticClass:"demo-alignment"},[l("vs-input",{staticClass:"inputx",attrs:{size:"large",placeholder:"Size large"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("vs-input",{staticClass:"inputx",attrs:{placeholder:"Size Default"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("vs-input",{staticClass:"inputx",attrs:{size:"small",placeholder:"Size small"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),l("template",{slot:"codeContainer"},[e._v('\n\n<template>\n    <div class="centerx">\n       <vs-input size="large" class="inputx" placeholder="Size large" v-model="value1"/>\n       <vs-input class="inputx" placeholder="Size Default" v-model="value2"/>\n       <vs-input size="small" class="inputx" placeholder="Size small" v-model="value3"/>\n    </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value1:\'\',\n      value2:\'\',\n      value3:\'\'\n    }\n  }\n}\n<\/script>\n\n        ')])],2)},A=[],B={data:function(){return{value1:"",value2:"",value3:""}}},M=B,R=Object(i["a"])(M,X,A,!1,null,null,null),V=R.exports,J={components:{InputDefault:v,InputLabel:b,InputLabelPlaceholder:C,InputIcon:L,InputColor:T,InputValidation:W,InputSize:V}},U=J,q=Object(i["a"])(U,n,t,!1,null,null,null);a["default"]=q.exports}}]);
//# sourceMappingURL=chunk-2d0b2f18.7f9b3605.js.map