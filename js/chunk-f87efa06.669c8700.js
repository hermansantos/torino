(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f87efa06"],{1880:function(e,a,s){e.exports=s.p+"img/register.cfd9ef09.jpg"},"3bae":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"},[t("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[t("vx-card",[t("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[t("div",{staticClass:"vx-row no-gutter"},[t("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[t("img",{staticClass:"mx-auto",attrs:{src:s("1880"),alt:"register"}})]),t("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[t("div",{staticClass:"px-8 pt-8 register-tabs-container"},[t("div",{staticClass:"vx-card__title mb-4"},[t("h4",{staticClass:"mb-4"},[e._v("Create Account")]),t("p",[e._v("Fill the below form to create a new account.")])]),t("vs-tabs",[t("vs-tab",{attrs:{label:"JWT"}},[t("register-jwt")],1),t("vs-tab",{attrs:{label:"Firebase"}},[t("register-firebase")],1),t("vs-tab",{attrs:{label:"Auth0"}},[t("register-auth0")],1)],1)],1)])])])])],1)])},i=[],r=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"clearfix"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:e.displayName,callback:function(a){e.displayName=a},expression:"displayName"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("displayName")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:e.confirm_password,callback:function(a){e.confirm_password=a},expression:"confirm_password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))]),s("vs-checkbox",{staticClass:"mt-6",model:{value:e.isTermsConditionAccepted,callback:function(a){e.isTermsConditionAccepted=a},expression:"isTermsConditionAccepted"}},[e._v("I accept the terms & conditions.")]),s("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[e._v("Login")]),s("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!e.validateForm},on:{click:e.registerUserJWt}},[e._v("Register")])],1)},l=[],o={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.displayName&&""!=this.email&&""!=this.password&&""!=this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUserJWt:function(){if(this.validateForm&&this.checkLogin()){var e={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUserJWT",e)}}}},n=o,d=s("2877"),c=Object(d["a"])(n,r,l,!1,null,null,null),m=c.exports,p=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"clearfix"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:e.displayName,callback:function(a){e.displayName=a},expression:"displayName"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("displayName")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:e.confirm_password,callback:function(a){e.confirm_password=a},expression:"confirm_password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))]),s("vs-checkbox",{staticClass:"mt-6",model:{value:e.isTermsConditionAccepted,callback:function(a){e.isTermsConditionAccepted=a},expression:"isTermsConditionAccepted"}},[e._v("I accept the terms & conditions.")]),s("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[e._v("Login")]),s("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!e.validateForm},on:{click:e.registerUser}},[e._v("Register")])],1)},v=[],u={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.displayName&&""!=this.email&&""!=this.password&&""!=this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUser:function(){if(this.validateForm&&this.checkLogin()){var e={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUser",e)}}}},f=u,h=Object(d["a"])(f,p,v,!1,null,null,null),w=h.exports,g=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("vs-button",{staticClass:"mb-3 mt-4 ml-2",attrs:{color:"#eb5424"},on:{click:e.registerAuth0}},[e._v("Auth0")])},x=[],b={methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerAuth0:function(){this.checkLogin()&&this.$auth.login({target:this.$route.query.to})}}},_=b,C=Object(d["a"])(_,g,x,!1,null,null,null),y=C.exports,N={components:{RegisterJwt:m,RegisterFirebase:w,RegisterAuth0:y}},k=N,A=(s("f153"),Object(d["a"])(k,t,i,!1,null,null,null));a["default"]=A.exports},e3d8:function(e,a,s){},f153:function(e,a,s){"use strict";var t=s("e3d8"),i=s.n(t);i.a}}]);
//# sourceMappingURL=chunk-f87efa06.669c8700.js.map