(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a609"],{"9NVu":function(t,e,n){"use strict";var r=n("VUuH");n.n(r).a},VUuH:function(t,e,n){},Vuo3:function(t,e,n){"use strict";n.r(e);var r=n("cLjf"),a=n.n(r),o=n("hDQ3"),i=n.n(o),s=n("xBhl"),c=n("c1P4"),u=n("Yfch"),l={data:function(){return{checkList:[],text:"获取验证码",time:120,timer:null,flag:!1,isShowCodeTag:!1,baseInfo:{userName:"",linkName:"",merchantName:"",code:"",merchantAuthority:"",description:""},baseInfoRules:{userName:[{required:!0,message:"请输入商家账号",trigger:"blur"}],code:[{required:!0,message:"请输入4位手机验证码",trigger:"blur"}]},state:"",disableFlag:!1,check:!0}},created:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIsShowSMSNotification();case 2:case"end":return e.stop()}},e,t)}))()},methods:{handleBaseInfo:function(){var t=this;this.$refs.baseInfoRef.validate(function(e){if(!e)return!1;t.handleAngentInfo()})},handleAngentInfo:function(){var t=this,e=this.baseInfo;e.merchantAuthority=this.check?1:0,Object(c.a)(e).then(function(e){0===e.result?(t.$message({message:e.data,type:"success"}),setTimeout(function(){t.$router.go(-1)},2e3)):t.$message({message:"新增商家信息失败",type:"error"})})},changLoginPhone:function(){this.state="",this.baseInfo.merchantName="",this.baseInfo.linkName=""},handelBlur:function(){var t=this;this.disableFlag=!1,this.baseInfo.merchantName="",this.baseInfo.linkName="",Object(u.d)(this.baseInfo.userName)&&Object(s.f)({phone:this.baseInfo.userName}).then(function(e){0===e.result&&e.data&&e.data.adUserId?(t.state="已注册",t.baseInfo.merchantName=e.data.phone,t.baseInfo.linkName=e.data.phone2,t.disableFlag=!0):0!==e.result||e.data?-1===e.result&&(t.state=""):t.state="未注册"})},getCode:function(){var t=this;Object(u.d)(this.baseInfo.userName)?this.flag||(this.flag=!0,Object(s.d)({phone:this.baseInfo.userName}).then(function(e){setTimeout(function(){t.flag=!1},1e3),0===e.result?(t.timer=setInterval(function(){t.time=t.time-1,t.text=t.time+"s",-1===t.time&&(clearInterval(t.timer),t.timer=null,t.text="获取验证码",t.time=120)},1e3),t.$message({message:"手机短信验证码已经发送成功",type:"success"})):t.$message({message:"手机短信验证码已经发送失败",type:"error"})})):this.$message({message:"请输入正确的商家账号(11手机号)",type:"error"})},getIsShowSMSNotification:function(){var t=this;Object(s.e)().then(function(e){1===e.data&&(t.isShowCodeTag=!0)})}}},f=(n("9NVu"),n("ZrdR")),h=Object(f.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-area"},[n("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:t.baseInfo,rules:t.baseInfoRules,"label-width":"120px","label-position":"right"}},[n("el-form-item",{attrs:{label:"商家账号",prop:"userName"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入商家账号",type:"text",maxlength:"11",clearable:""},on:{blur:t.handelBlur,change:t.changuserName},model:{value:t.baseInfo.userName,callback:function(e){t.$set(t.baseInfo,"userName",e)},expression:"baseInfo.userName"}}),t._v(" "),n("span",{staticClass:"input-anno"},[t._v("账号设置后，不可修改")])],1),t._v(" "),n("el-form-item",{attrs:{label:"账号状态"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"系统自动识别",type:"text",disabled:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1),t._v(" "),t.isShowCodeTag?n("el-form-item",{attrs:{label:"手机验证码",prop:"code"}},[n("el-input",{staticStyle:{width:"150px","margin-right":"32px"},attrs:{placeholder:"请输入验证码",maxlength:"4",clearable:""},model:{value:t.baseInfo.code,callback:function(e){t.$set(t.baseInfo,"code",e)},expression:"baseInfo.code"}}),t._v(" "),n("el-button",{staticStyle:{width:"112px"},attrs:{disabled:"获取验证码"!==t.text||t.flag,type:"primary"},on:{click:t.getCode}},[t._v(t._s(t.text))]),t._v(" "),n("span",{staticClass:"input-anno"},[t._v("请及时让商家告知手机验证码")])],1):t._e(),t._v(" "),n("el-form-item",{attrs:{label:"商家名称"}},[n("el-input",{staticClass:"input-300",attrs:{disabled:t.disableFlag,placeholder:"请输入商家名称",type:"tel",maxlength:"16",clearable:""},model:{value:t.baseInfo.merchantName,callback:function(e){t.$set(t.baseInfo,"merchantName",e)},expression:"baseInfo.merchantName"}}),t._v(" "),n("span",{staticClass:"input-anno",staticStyle:{color:"red"}},[t._v("注意：“商家名称”设置后，商家可以在手机B端后台修改。修改路径：我的 > 品牌信息设置 > 商户品牌名称。")])],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人姓名"}},[n("el-input",{staticClass:"input-300",attrs:{disabled:t.disableFlag,placeholder:"请输入联系人姓名",type:"text",maxlength:"16",clearable:""},model:{value:t.baseInfo.linkName,callback:function(e){t.$set(t.baseInfo,"linkName",e)},expression:"baseInfo.linkName"}}),t._v(" "),n("span",{staticClass:"input-anno",staticStyle:{color:"red"}},[t._v("注意：“姓名”设置后，将显示在手机B端后台的账号信息中，且无法修改，请慎重填写！")])],1),t._v(" "),n("el-form-item",{attrs:{label:"备注信息"}},[n("el-input",{staticClass:"input-300",staticStyle:{width:"550px"},attrs:{placeholder:"请输入10字以内备注信息（备注信息仅供你自己查看，便于记录商家信息）",type:"text",maxlength:"10",clearable:""},model:{value:t.baseInfo.description,callback:function(e){t.$set(t.baseInfo,"description",e)},expression:"baseInfo.description"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"商家权限"}},[n("el-checkbox-group",{model:{value:t.check,callback:function(e){t.check=e},expression:"check"}},[n("el-checkbox",{attrs:{label:"禁用设备/启用设备"}}),t._v(" "),n("span",{staticClass:"input-anno"},[t._v("（取消勾选后，该商家在B端后台则无权限 “禁用设备” 和 “启用设备”，此功能仅对与代理关联的设备生效）")])],1),t._v(" "),n("p",{staticStyle:{color:"#606266"}},[t._v("注意：“禁用设备”功能，目前只适用于  按摩椅、足疗机、按摩垫、洗衣机、充电桩、扭蛋机。")])],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.handleBaseInfo}},[t._v("创建/绑定")])],1),t._v(" "),n("div",{staticStyle:{"font-size":"14px","padding-left":"120px",color:"#b1a8a8"}},[n("p",[t._v("如果该账号之前已注册，将会直接关联绑定，原账号密码不变；")]),t._v(" "),n("p",[t._v("如果该账号未注册，则会直接开通注册，初始密码为16881688，请提醒及时修改密码")])])],1)],1)},[],!1,null,null,null);h.options.__file="AddBusiness.vue";e.default=h.exports},c1P4:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"e",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"c",function(){return c});var r=n("t3Un");function a(t){return Object(r.a)({url:"/merchant/manage/query",method:"post",data:t})}function o(t){return Object(r.a)({url:"/merchant/childMerchants/query",method:"get",params:t})}function i(t){return Object(r.a)({url:"/merchant/updateMerchant",method:"post",data:t})}function s(t){return Object(r.a)({url:"/merchant/addMerchant",method:"post",data:t})}function c(t){return Object(r.a)({url:"/merchant/deleteMerchant",method:"post",data:t})}},cLjf:function(t,e,n){t.exports=n("xOJF")},hDQ3:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("Asgo"),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){return function r(a,i){try{var s=e[a](i),c=s.value}catch(t){return void n(t)}if(!s.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},k4Ii:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={},g={};g[i]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(C([])));b&&b!==r&&a.call(b,i)&&(g=b);var y=k.prototype=_.prototype=Object.create(g);I.prototype=y.constructor=k,k.constructor=I,k[c]=I.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===I||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},l.awrap=function(t){return{__await:t}},N(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,n,r){var a=new O(x(t,e,n,r));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},N(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function x(t,e,n,r){var a=e&&e.prototype instanceof _?e:_,o=Object.create(a.prototype),i=new E(r||[]);return o._invoke=function(t,e,n){var r=f;return function(a,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return M()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=j(i,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function I(){}function k(){}function N(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,i){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},i)}i(s.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=w(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},xBhl:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"h",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return f});var r=n("t3Un");function a(t){return Object(r.a)({url:"/agentManage/sendCode",method:"get",params:t})}function o(t){return Object(r.a)({url:"/agentManage/updateAgent",method:"post",data:t})}function i(t){return Object(r.a)({url:"/agentManage/addAgent",method:"post",data:t})}function s(t){return Object(r.a)({url:"/agentManage/getAgent",method:"get",params:t})}function c(t){return Object(r.a)({url:"/agentManage/getMerchant",method:"get",params:t})}function u(t){return Object(r.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:t})}function l(){return Object(r.a)({url:"/agentManage/getIssend",method:"get"})}function f(t){return Object(r.a)({url:"/agentManage/deleteAgent",method:"post",data:t})}},xOJF:function(t,e,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("k4Ii"),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}}]);