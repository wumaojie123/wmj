(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-75a9"],{PWUT:function(t,e,r){"use strict";r.r(e);var n=r("cLjf"),a=r.n(n),o=r("hDQ3"),i=r.n(o),u=r("qpgI"),s={name:"DBJ",data:function(){return{params:{},dataInfo:{},saveData:{pulseWidth:"",pulseInterval:"",battery:""}}},created:function(){this.params=this.$route.query,this.query()},methods:{query:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={value:t.params.value,data:1},e.next=3,Object(u.d)(r);case 3:1===e.sent.result?t.getEquipmentParamDef():t.$message({message:"参数读取失败,不能设置",type:"error"});case 5:case"end":return e.stop()}},e,t)}))()},getEquipmentParamDef:function(){var t=this;return i()(a.a.mark(function e(){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={typeValue:t.params.typeValue,value:t.params.value},e.next=3,Object(u.j)(r);case 3:1===(n=e.sent).result&&(t.dataInfo=n.para,t.saveData.pulseWidth=t.dataInfo.pulseWidth1,t.saveData.pulseInterval=t.dataInfo.pulseInterval1,t.saveData.battery=t.dataInfo.battery);case 5:case"end":return e.stop()}},e,t)}))()},saveNewEquipment:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.saveData.pulseWidth<10||t.saveData.pulseWidth>1e3)){e.next=3;break}return t.$message({message:"脉冲宽度为10~1000整数",type:"error"}),e.abrupt("return");case 3:if(!(t.saveData.pulseInterval<10||t.saveData.pulseInterval>1e3)){e.next=6;break}return t.$message({message:'"脉冲间隔为10~1000整数',type:"error"}),e.abrupt("return");case 6:return r={value:t.params.value,pulseWidth1:t.saveData.pulseWidth,pulseInterval1:t.saveData.pulseInterval,battery:t.saveData.battery,pulseWidth2:0,pulseInterval2:0,gift:0,drag:0,interfaceType:0,interfaceBaudRate:0,noteTypes:0},e.next=9,Object(u.p)(r);case 9:1===e.sent.result&&(t.$message({message:"设置成功",type:"success"}),setTimeout(function(){t.query()},1500));case 11:case"end":return e.stop()}},e,t)}))()}}},c=r("ZrdR"),l=Object(c.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{margin:"40px"}},[r("div",{staticStyle:{"margin-bottom":"20px","font-size":"14px"}},[t._v(t._s(t.params.equipmentTypeName)+": "+t._s(t.params.value))]),t._v(" "),r("el-form",[r("div",[r("el-form-item",{attrs:{label:"脉冲宽度"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入10~1000之间整数",type:"number",maxlength:"4",clearable:""},model:{value:t.saveData.pulseWidth,callback:function(e){t.$set(t.saveData,"pulseWidth",e)},expression:"saveData.pulseWidth"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"脉冲间隔"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入10~1000之间整数",type:"number",maxlength:"4",clearable:""},model:{value:t.saveData.pulseInterval,callback:function(e){t.$set(t.saveData,"pulseInterval",e)},expression:"saveData.pulseInterval"}})],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"待机电平"}},[r("el-radio",{attrs:{label:"0"},model:{value:t.saveData.battery,callback:function(e){t.$set(t.saveData,"battery",e)},expression:"saveData.battery"}},[t._v("常开")]),t._v(" "),r("el-radio",{attrs:{label:"1"},model:{value:t.saveData.battery,callback:function(e){t.$set(t.saveData,"battery",e)},expression:"saveData.battery"}},[t._v("常闭")])],1)],1),t._v(" "),r("div",{staticStyle:{"text-align":"left","margin-top":"80px"}},[r("el-button",{on:{click:t.query}},[t._v("重新加载")]),t._v(" "),r("el-button",{staticStyle:{"margin-left":"100px"},attrs:{type:"primary"},on:{click:t.saveNewEquipment}},[t._v("保存设置")])],1)],1)},[],!1,null,null,null);l.options.__file="deviceParamsOthers.vue";e.default=l.exports},cLjf:function(t,e,r){t.exports=r("xOJF")},hDQ3:function(t,e,r){"use strict";e.__esModule=!0;var n,a=r("Asgo"),o=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){return function n(a,i){try{var u=e[a](i),s=u.value}catch(t){return void r(t)}if(!u.done)return o.default.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})}}},k4Ii:function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=w;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},m={};m[i]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==n&&a.call(g,i)&&(m=g);var b=E.prototype=O.prototype=Object.create(m);j.prototype=b.constructor=E,E.constructor=j,E[s]=j.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[u]=function(){return this},l.AsyncIterator=_,l.async=function(t,e,r,n){var a=new _(w(t,e,r,n));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return u.type="throw",u.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;q(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var a=e&&e.prototype instanceof O?e:O,o=Object.create(a.prototype),i=new I(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var u=D(i,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function O(){}function j(){}function E(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,i){var u=x(t[r],t,n);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(c).then(function(t){s.value=t,o(s)},i)}i(u.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function D(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,D(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},qpgI:function(t,e,r){"use strict";r.d(e,"u",function(){return o}),r.d(e,"n",function(){return i}),r.d(e,"b",function(){return u}),r.d(e,"h",function(){return s}),r.d(e,"e",function(){return c}),r.d(e,"v",function(){return l}),r.d(e,"g",function(){return f}),r.d(e,"m",function(){return p}),r.d(e,"k",function(){return h}),r.d(e,"l",function(){return d}),r.d(e,"a",function(){return v}),r.d(e,"c",function(){return m}),r.d(e,"i",function(){return y}),r.d(e,"q",function(){return g}),r.d(e,"t",function(){return b}),r.d(e,"r",function(){return w}),r.d(e,"s",function(){return x}),r.d(e,"d",function(){return O}),r.d(e,"f",function(){return j}),r.d(e,"j",function(){return E}),r.d(e,"p",function(){return L}),r.d(e,"o",function(){return _});var n=r("t3Un"),a=r("7Qib");function o(t){return Object(n.a)({url:"/rest/factory/unbundling",method:"post",data:t})}function i(t){return Object(n.a)({url:"/rest/factory/savaEquipmentService",method:"post",data:t})}function u(t){return Object(n.a)({url:"/rest/factory/batchRegisteredEquipment",method:"post",data:t})}function s(){return Object(n.a)({url:"/query/merchants",method:"get"})}function c(t){return Object(n.a)({url:"/rest/factory/dateleEquipmentService",method:"post",data:t})}function l(t){return Object(n.a)({url:"/rest/factory/updateEquipmentService",method:"post",data:t})}function f(t){return Object(n.a)({url:"/rest/factory/groupServiceList",method:"get",params:t})}function p(t){return Object(n.a)({url:"/rest/factory/registeredLogList",method:"get",params:t})}function h(t){return Object(n.a)({url:"/rest/factory/registeredDetailList",method:"get",params:t})}function d(t){return Object(n.a)({url:"/rest/factory/registeredList",method:"get",params:t})}function v(t){return Object(n.a)({url:"/rest/factory/agentGroupServiceList",method:"get",params:t})}function m(t){return Object(n.a)({url:"/rest/setting/lyyopen/load",method:"get",params:t})}function y(t){return Object(n.a)({url:"/rest/setting/lyyopen/query",method:"post",data:t})}function g(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"get",params:t})}function b(t){var e="/rest/setting/setting/ty"+Object(a.i)(t);return Object(n.a)({url:e,method:"post",data:t})}function w(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"get",params:t})}function x(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"post",data:t})}function O(t){return Object(n.a)({url:"/rest/setting/cxNewEquipment",method:"get",params:t})}function j(t){return Object(n.a)({url:"/rest/setting/getEquipmentParamDef",method:"get",params:t})}function E(t){return Object(n.a)({url:"/rest/setting/readNewEquipment",method:"get",params:t})}function L(t){return Object(n.a)({url:"/rest/setting/szNewEquipment",method:"get",params:t})}function _(t){var e="/rest/setting/setEquipment"+Object(a.i)(t);return Object(n.a)({url:e,method:"post"})}},xOJF:function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("k4Ii"),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}}]);