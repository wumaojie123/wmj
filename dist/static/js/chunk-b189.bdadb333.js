(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b189"],{"14Xm":function(t,e,n){t.exports=n("u938")},AVzk:function(t,e,n){"use strict";n.r(e);var r=n("14Xm"),o=n.n(r),a=n("D3Ub"),i=n.n(a),s=n("B5LO"),u=n("xBhl"),c=n("Yfch"),l={data:function(){return{text:"获取验证码",time:120,timer:null,flag:!1,isShowCodeTag:!1,linkName:"",baseInfo:{agentUserName:"",linkName:"",phone:"",address:"",code:"",loginPhone:"",linkUserId:""},baseInfoRules:{phone:[{validator:s.e,trigger:"blur"}],loginPhone:[{required:!0,message:"请输入代理商账号",trigger:"blur"}],code:[{required:!0,message:"请输入4位手机验证码",trigger:"blur"}]}}},created:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIsShowSMSNotification();case 2:case"end":return e.stop()}},e,t)}))()},methods:{handleBaseInfo:function(){var t=this;this.$refs.baseInfoRef.validate(function(e){if(!e)return!1;t.handleAngentInfo()})},handleAngentInfo:function(){var t=this,e=this.baseInfo;e.type=2,Object(u.a)(e).then(function(e){0===e.result?(t.$message({message:"新增代理信息成功",type:"success"}),t.$router.go(-1)):t.$message({message:"新增代理信息失败",type:"error"})})},changLoginPhone:function(){this.linkName="",this.baseInfo.linkUserId=""},getCode:function(){var t=this;Object(c.d)(this.baseInfo.loginPhone)?this.flag||(this.flag=!0,Object(u.d)({phone:this.baseInfo.loginPhone}).then(function(e){setTimeout(function(){t.flag=!1},1e3),0===e.result?(t.timer=setInterval(function(){t.time=t.time-1,t.text=t.time+"s",-1===t.time&&(clearInterval(t.timer),t.timer=null,t.text="获取验证码",t.time=120)},1e3),t.$message({message:"手机短信验证码已经发送成功",type:"success"})):t.$message({message:"手机短信验证码已经发送失败",type:"error"})})):this.$message({message:"请输入正确的代理账号(11手机号)",type:"error"})},getIsShowSMSNotification:function(){var t=this;Object(u.e)().then(function(e){1===e.data&&(t.isShowCodeTag=!0)})}}},f=n("KHd+"),h=Object(f.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-area"},[n("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:t.baseInfo,rules:t.baseInfoRules,"label-width":"120px","label-position":"right"}},[n("el-form-item",{attrs:{label:"代理账号",prop:"loginPhone"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商账号（手机号码）",maxlength:"11",clearable:""},model:{value:t.baseInfo.loginPhone,callback:function(e){t.$set(t.baseInfo,"loginPhone",e)},expression:"baseInfo.loginPhone"}}),t._v(" "),n("span",{staticClass:"input-anno"},[t._v("账号设置后，不可修改")])],1),t._v(" "),t.isShowCodeTag?n("el-form-item",{attrs:{label:"短信验证码",prop:"code"}},[n("el-input",{staticStyle:{width:"160px","margin-right":"22px"},attrs:{placeholder:"请输入短信验证码",maxlength:"4",clearable:""},model:{value:t.baseInfo.code,callback:function(e){t.$set(t.baseInfo,"code",e)},expression:"baseInfo.code"}}),t._v(" "),n("el-button",{staticStyle:{width:"112px"},attrs:{disabled:"获取验证码"!==t.text||t.flag,type:"primary"},on:{click:t.getCode}},[t._v(t._s(t.text))]),t._v(" "),n("span",{staticClass:"input-anno"},[t._v("请及时让代理告知短信验证码")])],1):t._e(),t._v(" "),n("el-form-item",{attrs:{label:"代理商名称"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商名称",type:"text",maxlength:"16",clearable:""},model:{value:t.baseInfo.agentUserName,callback:function(e){t.$set(t.baseInfo,"agentUserName",e)},expression:"baseInfo.agentUserName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人姓名"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系人姓名",type:"text",maxlength:"16",clearable:""},model:{value:t.baseInfo.linkName,callback:function(e){t.$set(t.baseInfo,"linkName",e)},expression:"baseInfo.linkName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系电话",type:"tel",maxlength:"11",clearable:""},model:{value:t.baseInfo.phone,callback:function(e){t.$set(t.baseInfo,"phone",e)},expression:"baseInfo.phone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系地址"}},[n("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入联系地址",type:"text",maxlength:"40",clearable:""},model:{value:t.baseInfo.address,callback:function(e){t.$set(t.baseInfo,"address",e)},expression:"baseInfo.address"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.handleBaseInfo}},[t._v("创建")])],1),t._v(" "),n("div",{staticStyle:{"font-size":"14px","padding-left":"120px",color:"#b1a8a8"}},[n("p",[t._v("如果该账号未注册，则会直接开通注册，初始密码为16881688，请提醒及时修改密码")])])],1)],1)},[],!1,null,null,null);h.options.__file="NewAgent.vue";e.default=h.exports},B5LO:function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"a",function(){return u});var r=n("Yfch"),o=function(t,e,n){if(!e||e&&!Object(r.d)(e))return n(new Error("请输入正确的11位手机号码"));n()},a=function(t,e,n){if(e&&!/^[A-Za-z0-9]{6,16}$/.test(e))return n(new Error("请输入6-16位的数字或字母"));n()},i=function(t,e,n){if(!/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/.test(e)||e>1e4)return n(new Error("价格必须为大于0的正数,价格需小于10000,最多保留2位小数"));n()},s=function(t,e,n){if(!/^([1-9][0-9]*)$/.test(e)||e>1440)return n(new Error("服务时间必须为大于0的小于等于1440(24小时)正整数"));n()},u=function(t,e,n){if(!/^([1-9][0-9]*)$/.test(e)||0===e||e>1e4)return n(new Error("模拟投币数必须为大于0的整数"));n()}},D3Ub:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("4d7F"),a=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,n){return function r(o,i){try{var s=e[o](i),u=s.value}catch(t){return void n(t)}if(!s.done)return a.default.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}("next")})}}},ls82:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={},m={};m[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v($([])));y&&y!==r&&o.call(y,i)&&(m=y);var b=L.prototype=I.prototype=Object.create(m);_.prototype=b.constructor=L,L.constructor=_,L[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[s]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,r){var o=new k(w(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(b),b[u]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=$,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function w(t,e,n,r){var o=e&&e.prototype instanceof I?e:I,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=E(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=x(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function I(){}function _(){}function L(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,r){function a(){return new Promise(function(e,a){!function e(n,r,a,i){var s=x(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(c).then(function(t){u.value=t,a(u)},i)}i(s.arg)}(n,r,e,a)})}return e=e?e.then(a,a):a()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function $(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},u938:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("ls82"),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},xBhl:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"h",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return f});var r=n("t3Un");function o(t){return Object(r.a)({url:"/agentManage/sendCode",method:"get",params:t})}function a(t){return Object(r.a)({url:"/agentManage/updateAgent",method:"post",data:t})}function i(t){return Object(r.a)({url:"/agentManage/addAgent",method:"post",data:t})}function s(t){return Object(r.a)({url:"/agentManage/getAgent",method:"get",params:t})}function u(t){return Object(r.a)({url:"/agentManage/getMerchant",method:"get",params:t})}function c(t){return Object(r.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:t})}function l(){return Object(r.a)({url:"/agentManage/getIssend",method:"get"})}function f(t){return Object(r.a)({url:"/agentManage/deleteAgent",method:"post",data:t})}}}]);