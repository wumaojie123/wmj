(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e70"],{"14Xm":function(t,e,r){t.exports=r("u938")},D3Ub:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("4d7F"),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){return function n(o,a){try{var u=e[o](a),c=u.value}catch(t){return void r(t)}if(!u.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}("next")})}}},UAQx:function(t,e,r){"use strict";r.r(e);var n=r("14Xm"),o=r.n(n),i=r("D3Ub"),a=r.n(i),u=r("qpgI"),c={1:"更换4G版本",2:"频繁离线",3:"系统不好用",4:"场地信号不好",5:"撤场调整",6:"支付设备坏了",7:"机器转手",8:"更换WIFI版本",9:"测试设备"},s={data:function(){return{list:c,others:"",lyyEquipmentId:"",equipmentType:"",checkList:[]}},created:function(){this.lyyEquipmentId=this.$route.query.lyyEquipmentId,this.equipmentType=this.$route.query.equipmentType},methods:{handleUnbind:function(){var t=this;return a()(o.a.mark(function e(){var r,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.others||0!==t.checkList.length){e.next=3;break}return t.$message({message:"请选择或输入解绑原因",type:"error"}),e.abrupt("return");case 3:return r=[],t.others&&(r=[t.others]),t.checkList.length&&(r=r.concat(t.checkList)),n={lyyEquipmentId:t.lyyEquipmentId,reasons:r},e.next=9,Object(u.q)(n);case 9:0===e.sent.result?t.$message({message:"设备解绑成功",type:"success"}):t.$message({message:"解绑失败",type:"error"});case 11:case"end":return e.stop()}},e,t)}))()}}},f=(r("YA1O"),r("KHd+")),l=Object(f.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-area"},[r("div",{staticClass:"text-info"},[t._v("设备编号： 充电桩"+t._s(t.lyyEquipmentId))]),t._v(" "),r("p",{staticClass:"text-info"},[t._v("解绑原因：")]),t._v(" "),r("el-checkbox-group",{staticClass:"text-info",model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.list,function(e,n){return r("el-checkbox",{key:n,attrs:{label:e,size:"medium"},model:{value:t.others,callback:function(e){t.others=e},expression:"others"}})})),t._v(" "),r("p",{staticClass:"text-info"},[t._v("其他原因:")]),t._v(" "),r("el-input",{staticStyle:{width:"400px"},attrs:{rows:4,type:"textarea",placeholder:"请输入解绑原因",maxlength:"20"}}),t._v(" "),r("p",{staticClass:"text-info"},[t._v("设备损坏、频繁离线、信号问题等设备问题，乐摇摇提供最优的设备升级方案，升级热线服务时间：每天9:00-21:00")]),t._v(" "),r("div",{staticStyle:{"margin-top":"20px"}},[r("el-button",[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.handleUnbind}},[t._v("确定解绑")])],1)],1)},[],!1,null,"1daf03ec",null);l.options.__file="unregister.vue";e.default=l.exports},YA1O:function(t,e,r){"use strict";var n=r("f5TV");r.n(n).a},f5TV:function(t,e,r){},ls82:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=e.regeneratorRuntime=s?t.exports:{}).wrap=b;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",y={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(N([])));v&&v!==n&&o.call(v,a)&&(m=v);var w=E.prototype=L.prototype=Object.create(m);_.prototype=w.constructor=E,E.constructor=_,E[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[u]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var o=new j(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function L(){}function _(){}function E(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var u=x(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},qpgI:function(t,e,r){"use strict";r.d(e,"q",function(){return o}),r.d(e,"n",function(){return i}),r.d(e,"b",function(){return a}),r.d(e,"h",function(){return u}),r.d(e,"e",function(){return c}),r.d(e,"r",function(){return s}),r.d(e,"g",function(){return f}),r.d(e,"m",function(){return l}),r.d(e,"k",function(){return h}),r.d(e,"l",function(){return p}),r.d(e,"a",function(){return d}),r.d(e,"c",function(){return y}),r.d(e,"i",function(){return m}),r.d(e,"p",function(){return g}),r.d(e,"d",function(){return v}),r.d(e,"f",function(){return w}),r.d(e,"j",function(){return b});var n=r("t3Un");function o(t){return Object(n.a)({url:"/rest/factory/unbundling",method:"post",data:t})}function i(t){return Object(n.a)({url:"/rest/factory/savaEquipmentService",method:"post",data:t})}function a(t){return Object(n.a)({url:"/rest/factory/batchRegisteredEquipment",method:"post",data:t})}function u(){return Object(n.a)({url:"/query/merchants",method:"get"})}function c(t){return Object(n.a)({url:"/rest/factory/dateleEquipmentService",method:"post",data:t})}function s(t){return Object(n.a)({url:"/rest/factory/updateEquipmentService",method:"post",data:t})}function f(t){return Object(n.a)({url:"/rest/factory/groupServiceList",method:"get",params:t})}function l(t){return Object(n.a)({url:"/rest/factory/registeredLogList",method:"get",params:t})}function h(t){return Object(n.a)({url:"/rest/factory/registeredDetailList",method:"get",params:t})}function p(t){return Object(n.a)({url:"/rest/factory/registeredList",method:"get",params:t})}function d(t){return Object(n.a)({url:"/rest/factory/agentGroupServiceList",method:"get",params:t})}function y(t){return Object(n.a)({url:"/rest/setting/lyyopen/load",method:"get",params:t})}function m(t){return Object(n.a)({url:"/rest/setting/lyyopen/query",method:"post",data:t})}function g(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"get",params:t})}function v(t){return Object(n.a)({url:"/rest/setting/cxNewEquipment",method:"get",params:t})}function w(t){return Object(n.a)({url:"/rest/setting/getEquipmentParamDef",method:"get",params:t})}function b(t){return Object(n.a)({url:"/rest/setting/readNewEquipment",method:"get",params:t})}},u938:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("ls82"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}}]);