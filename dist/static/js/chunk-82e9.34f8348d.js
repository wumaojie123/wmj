(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-82e9"],{"0K+0":function(t,e,n){t.exports=n.p+"static/img/pay.a154900.png"},"0i1e":function(t,e,n){t.exports=n.p+"static/img/banner.ccb1bd4.png"},"6zss":function(t,e,n){t.exports=n.p+"static/img/title.b3b9b28.png"},"8ngm":function(t,e,n){"use strict";n.r(e);var r=n("cLjf"),a=n.n(r),o=n("hDQ3"),i=n.n(o),s=n("mt21"),c=n("xBhl"),u=n("kbZS"),l={data:function(){return{baseInfo:{title:"",businessName:"",agentUserId:"",isdel:"N",adConsumersConfigId:""},baseInfoRules:{},imageUrl:"",uploadUrl:u.a,preUrl:"http://lyy-public.oss-cn-shenzhen.aliyuncs.com/"}},created:function(){this.getAngentInfo()},methods:{getAngentInfo:function(){var t=this;return i()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.c)();case 2:0===(n=e.sent).result&&n.data&&n.data.agentUserId&&t.getAdConfig(n.data.agentUserId);case 4:case"end":return e.stop()}},e,t)}))()},getAdConfig:function(t){var e=this;return i()(a.a.mark(function n(){var r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.d)({agentUserId:t});case 2:0===(r=n.sent).result&&(r.data?(e.baseInfo=r.data,e.baseInfo.bannerImg&&(e.imageUrl=""+e.preUrl+e.baseInfo.bannerImg)):e.baseInfo={title:"",businessName:"",agentUserId:t,isdel:"N",adConsumersConfigId:"",bannerImg:""});case 4:case"end":return n.stop()}},n,e)}))()},handleAvatarSuccess:function(t,e){this.baseInfo.bannerImg=t.para,this.imageUrl=""+this.preUrl+t.para},beforeAvatarUpload:function(t){var e=t.size/1024/1024<.5,n="image/jpeg"===t.type||"image/png"===t.type||"image/jpg"===t.type;return n||this.$message.error("格式为jpeg，png， jpg"),e||this.$message.error("文件不能超过500K!"),n&&e},handleBaseInfo:function(){var t=this;this.$refs.baseInfoRef.validate(function(e){if(!e)return!1;t.handleAngentInfo()})},handleAngentInfo:function(){var t=this,e=this.baseInfo;Object(s.b)(e).then(function(e){0===e.result?(t.$message({message:e.data||"配置信息成功",type:"success"}),t.getAdConfig(t.baseInfo.agentUserId)):t.$message({message:"配置信息失败",type:"error"})})},handleRemove:function(){this.imageUrl="",this.baseInfo.bannerImg=""}}},f=(n("qb/v"),n("ZrdR")),h=Object(f.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-area"},[r("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:t.baseInfo,rules:t.baseInfoRules,"label-width":"180px","label-position":"right"}},[r("el-form-item",{attrs:{label:"扫码消费页面标题"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入扫码消费页面标题",type:"text",maxlength:"10",clearable:""},model:{value:t.baseInfo.title,callback:function(e){t.$set(t.baseInfo,"title",e)},expression:"baseInfo.title"}}),t._v(" "),r("span",{staticClass:"input-anno"},[t._v("用户扫描设备二维码进入页面显示的顶部标题，不超过10个文字\n        "),r("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[r("img",{staticClass:"popver-img",staticStyle:{width:"255px",height:"190px"},attrs:{src:n("6zss")}}),t._v(" "),r("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"扫码消费页面banner图"}},[t.imageUrl?t._e():r("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,action:t.uploadUrl}},[r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),t.imageUrl?r("div",{staticClass:"uploader-wrap"},[r("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}),t._v(" "),r("div",{staticClass:"uploader-wrap-avatar",on:{click:t.handleRemove}},[r("i",{staticClass:"el-icon-delete el-icon"})])]):t._e(),t._v(" "),r("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0"}},[t._v("1.用户扫描设备二维码进入页面显示的banner图,\n        "),r("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[r("img",{staticClass:"popver-img",staticStyle:{width:"315px",height:"190px"},attrs:{src:n("0i1e")}}),t._v(" "),r("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1),t._v(" "),r("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0"}},[t._v("2.建议尺寸：375*125px，文件大小不超过500k。")])],1),t._v(" "),r("el-form-item",{attrs:{label:"扫码支付品牌名称"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入扫码支付品牌名称",type:"text",maxlength:"10",clearable:""},model:{value:t.baseInfo.businessName,callback:function(e){t.$set(t.baseInfo,"businessName",e)},expression:"baseInfo.businessName"}}),t._v(" "),r("span",{staticClass:"input-anno"},[t._v("用户扫码支付时显示的商户品牌名称，不超过10个文字，\n        "),r("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[r("img",{staticClass:"popver-img",staticStyle:{width:"255px",height:"240px"},attrs:{src:n("0K+0")}}),t._v(" "),r("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1)],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.handleBaseInfo}},[t._v("保存")])],1)],1)],1)},[],!1,null,null,null);h.options.__file="ToCBrand.vue";e.default=h.exports},VmUz:function(t,e,n){},cLjf:function(t,e,n){t.exports=n("xOJF")},hDQ3:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("Asgo"),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){return function r(a,i){try{var s=e[a](i),c=s.value}catch(t){return void n(t)}if(!s.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},k4Ii:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={},m={};m[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==r&&a.call(y,i)&&(m=y);var b=C.prototype=I.prototype=Object.create(m);_.prototype=b.constructor=C,C.constructor=_,C[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,n,r){var a=new O(w(t,e,n,r));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=k,U.prototype={constructor:U,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function w(t,e,n,r){var a=e&&e.prototype instanceof I?e:I,o=Object.create(a.prototype),i=new U(r||[]);return o._invoke=function(t,e,n){var r=f;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=L(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?d:h,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function I(){}function _(){}function C(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,i){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},i)}i(s.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=x(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},kbZS:function(t,e,n){"use strict";e.a="/agent/rest/file/upload"},mt21:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});var r=n("t3Un");function a(t){return Object(r.a)({url:"/rest/adConsumersConfig/getAdConsumersConfig",method:"get",params:t})}function o(t){return Object(r.a)({url:"/rest/adBrandConfig/getAdBrandConfig",method:"get",params:t})}function i(t){return Object(r.a)({url:"/rest/adConsumersConfig/editAdConsumersConfig",method:"post",data:t})}function s(t){return Object(r.a)({url:"/rest/adBrandConfig/editAdBrandConfig",method:"post",data:t})}},"qb/v":function(t,e,n){"use strict";var r=n("VmUz");n.n(r).a},xBhl:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"h",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return f});var r=n("t3Un");function a(t){return Object(r.a)({url:"/agentManage/sendCode",method:"get",params:t})}function o(t){return Object(r.a)({url:"/agentManage/updateAgent",method:"post",data:t})}function i(t){return Object(r.a)({url:"/agentManage/addAgent",method:"post",data:t})}function s(t){return Object(r.a)({url:"/agentManage/getAgent",method:"get",params:t})}function c(t){return Object(r.a)({url:"/agentManage/getMerchant",method:"get",params:t})}function u(t){return Object(r.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:t})}function l(){return Object(r.a)({url:"/agentManage/getIssend",method:"get"})}function f(t){return Object(r.a)({url:"/agentManage/deleteAgent",method:"post",data:t})}},xOJF:function(t,e,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("k4Ii"),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}}]);