(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6f94"],{"2awh":function(t,e,r){"use strict";r.r(e);var n=r("cLjf"),a=r.n(n),o=r("hDQ3"),i=r.n(o),u=r("qpgI"),s={name:"ParamC",data:function(){return{params:{},list:[],index:"",dataInfo:{},modalData:{pulseWidth:"",pulseInterval:""},type:"1",flag:!1,saveData:{pulseWidth:"",pulseInterval:"",battery:""}}},watch:{index:function(t){var e=this.list[t];"自定义"===e.pulsePatternName?(this.flag=!0,this.saveData.pulseWidth="",this.saveData.pulseInterval="",this.modalData={pulseWidth:"",pulseInterval:""}):(this.saveData.pulseWidth=e.pulseWidth,this.saveData.pulseInterval=e.pulseInterval,this.modalData.pulseWidth=e.pulseWidth,this.modalData.pulseInterval=e.pulseInterval,this.flag=!1)}},created:function(){this.params=this.$route.query,this.query()},methods:{saveTemp:function(){this.modalData.pulseWidth<10||this.modalData.pulseWidth>1e3?this.$message({message:"脉冲宽度为10~1000整数",type:"error"}):this.modalData.pulseInterval<10||this.modalData.pulseInterval>1e3?this.$message({message:'"脉冲间隔为10~1000整数',type:"error"}):(this.saveData.pulseWidth=this.modalData.pulseWidth,this.saveData.pulseInterval=this.modalData.pulseInterval)},query:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={value:t.params.value,data:1,t:Date.now()},e.next=3,Object(u.d)(r);case 3:1===e.sent.result?setTimeout(function(){t.getEquipmentParamDef()},2500):t.$message({message:"参数读取失败,不能设置",type:"error"});case 5:case"end":return e.stop()}},e,t)}))()},getEquipmentParamDef:function(){var t=this;return i()(a.a.mark(function e(){var r,n,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={typeValue:t.params.typeValue,value:t.params.value,t:Date.now()},n={equipmentId:t.params.value},e.next=4,Object(u.f)(n);case 4:return o=e.sent,e.next=7,Object(u.j)(r);case 7:1===(i=e.sent).result&&(t.dataInfo=i.para,t.$nextTick(function(){t.saveData.pulseWidth=t.dataInfo.pulseWidth1,t.saveData.pulseInterval=t.dataInfo.pulseInterval1,t.saveData.battery=t.dataInfo.battery})),0===o.result&&(t.list=(o.data||[]).concat([{pulsePatternName:"自定义"}]),t.list.forEach(function(e,r){e.pulsePatternName!==t.dataInfo.pulsePatternName||(t.index=r)}),t.index===t.list.length-1&&(t.modalData.pulseWidth=t.dataInfo.pulseWidth,t.modalData.pulseInterval=t.dataInfo.pulseInterval,setTimeout(function(){t.saveData.pulseWidth=t.dataInfo.pulseWidth1,t.saveData.pulseInterval=t.dataInfo.pulseInterval1,t.saveData.battery=t.dataInfo.battery},500))),t.$nextTick(function(){"自定义"===i.para.pulsePatternName&&(t.modalData.pulseWidth=t.dataInfo.pulseWidth1,t.modalData.pulseInterval=t.dataInfo.pulseInterval1)});case 11:case"end":return e.stop()}},e,t)}))()},saveNewEquipment:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.index===t.list.length-1&&(t.saveData.pulseWidth=t.modalData.pulseWidth,t.saveData.pulseInterval=t.modalData.pulseInterval),t.saveData.pulseWidth&&t.saveData.pulseInterval){e.next=4;break}return t.$message({message:"脉冲设置或脉冲间隔不能为空",type:"error"}),e.abrupt("return");case 4:if(!(t.modalData.pulseWidth<10||t.modalData.pulseWidth>1e3)){e.next=7;break}return t.$message({message:"脉冲宽度为10~1000整数",type:"error"}),e.abrupt("return");case 7:if(!(t.modalData.pulseInterval<10||t.modalData.pulseInterval>1e3)){e.next=10;break}return t.$message({message:'"脉冲间隔为10~1000整数',type:"error"}),e.abrupt("return");case 10:return r={value:t.params.value,pulseWidth1:t.saveData.pulseWidth,pulseInterval1:t.saveData.pulseInterval,battery:t.saveData.battery,pulseWidth2:0,pulseInterval2:0,gift:0,drag:0,interfaceType:0,interfaceBaudRate:0,noteTypes:0},e.next=13,Object(u.p)(r);case 13:1===e.sent.result&&t.$message({message:"设置成功",type:"success"});case 15:case"end":return e.stop()}},e,t)}))()},goBack:function(){window.history.go(-1)}}},l=r("ZrdR"),c=Object(l.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{margin:"40px"}},[r("div",{staticStyle:{"margin-bottom":"20px","font-size":"14px"}},[t._v(t._s(t.params.equipmentTypeName)+": "+t._s(t.params.value)),r("span",{staticStyle:{color:"#888","margin-left":"10px"}},[t._v("(脉冲宽度 / 间隔范围为10-1000)")])]),t._v(" "),r("el-form",[r("el-form-item",{attrs:{label:"脉冲设置"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},t._l(t.list,function(t,e){return r("el-option",{key:t.value,attrs:{label:t.pulsePatternName,value:e}})}))],1),t._v(" "),r("p",{staticStyle:{"font-size":"14px",color:"#888","margin-top":"20px","margin-bottom":"20px"}},[t._v(" 脉冲设置： 脉冲宽度"+t._s(t.saveData.pulseWidth)+", 脉冲间隔 "+t._s(t.saveData.pulseInterval)+" ")]),t._v(" "),t.flag?r("div",[r("el-form-item",{attrs:{label:"脉冲宽度"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入10~1000之间整数",type:"number",maxlength:"4",clearable:""},model:{value:t.modalData.pulseWidth,callback:function(e){t.$set(t.modalData,"pulseWidth",e)},expression:"modalData.pulseWidth"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"脉冲间隔"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入10~1000之间整数",type:"number",maxlength:"4",clearable:""},model:{value:t.modalData.pulseInterval,callback:function(e){t.$set(t.modalData,"pulseInterval",e)},expression:"modalData.pulseInterval"}})],1)],1):t._e(),t._v(" "),r("el-form-item",{attrs:{label:"待机电平"}},[r("el-radio",{attrs:{label:"0"},model:{value:t.saveData.battery,callback:function(e){t.$set(t.saveData,"battery",e)},expression:"saveData.battery"}},[t._v("常开")]),t._v(" "),r("el-radio",{attrs:{label:"1"},model:{value:t.saveData.battery,callback:function(e){t.$set(t.saveData,"battery",e)},expression:"saveData.battery"}},[t._v("常闭")])],1)],1),t._v(" "),r("div",{staticStyle:{"text-align":"left","margin-top":"80px"}},[r("el-button",{on:{click:t.goBack}},[t._v("返回上一页")]),t._v(" "),r("el-button",{on:{click:t.query}},[t._v("重新加载页面")]),t._v(" "),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.saveNewEquipment}},[t._v("保存设置")])],1)],1)},[],!1,null,null,null);c.options.__file="deviceParamsLife.vue";e.default=c.exports},cLjf:function(t,e,r){t.exports=r("xOJF")},hDQ3:function(t,e,r){"use strict";e.__esModule=!0;var n,a=r("Asgo"),o=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){return function n(a,i){try{var u=e[a](i),s=u.value}catch(t){return void r(t)}if(!u.done)return o.default.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})}}},k4Ii:function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"==typeof t,c=e.regeneratorRuntime;if(c)l&&(t.exports=c);else{(c=e.regeneratorRuntime=l?t.exports:{}).wrap=x;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",m={},v={};v[i]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(q([])));g&&g!==n&&a.call(g,i)&&(v=g);var b=_.prototype=D.prototype=Object.create(v);I.prototype=b.constructor=_,_.constructor=I,_[s]=I.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===I||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},c.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[u]=function(){return this},c.AsyncIterator=O,c.async=function(t,e,r,n){var a=new O(x(t,e,r,n));return c.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=q,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return u.type="throw",u.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:q(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function x(t,e,r,n){var a=e&&e.prototype instanceof D?e:D,o=Object.create(a.prototype),i=new W(n||[]);return o._invoke=function(t,e,r){var n=p;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var u=E(i,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=w(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function D(){}function I(){}function _(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,i){var u=w(t[r],t,n);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(l).then(function(t){s.value=t,o(s)},i)}i(u.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=w(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function W(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function q(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},qpgI:function(t,e,r){"use strict";r.d(e,"u",function(){return o}),r.d(e,"n",function(){return i}),r.d(e,"b",function(){return u}),r.d(e,"h",function(){return s}),r.d(e,"e",function(){return l}),r.d(e,"v",function(){return c}),r.d(e,"g",function(){return p}),r.d(e,"m",function(){return f}),r.d(e,"k",function(){return h}),r.d(e,"l",function(){return d}),r.d(e,"a",function(){return m}),r.d(e,"c",function(){return v}),r.d(e,"i",function(){return y}),r.d(e,"q",function(){return g}),r.d(e,"t",function(){return b}),r.d(e,"r",function(){return x}),r.d(e,"s",function(){return w}),r.d(e,"d",function(){return D}),r.d(e,"f",function(){return I}),r.d(e,"j",function(){return _}),r.d(e,"p",function(){return j}),r.d(e,"o",function(){return O});var n=r("t3Un"),a=r("7Qib");function o(t){return Object(n.a)({url:"/rest/factory/unbundling",method:"post",data:t})}function i(t){return Object(n.a)({url:"/rest/factory/savaEquipmentService",method:"post",data:t})}function u(t){return Object(n.a)({url:"/rest/factory/batchRegisteredEquipment",method:"post",data:t})}function s(){return Object(n.a)({url:"/query/merchants",method:"get"})}function l(t){return Object(n.a)({url:"/rest/factory/dateleEquipmentService",method:"post",data:t})}function c(t){return Object(n.a)({url:"/rest/factory/updateEquipmentService",method:"post",data:t})}function p(t){return Object(n.a)({url:"/rest/factory/groupServiceList",method:"get",params:t})}function f(t){return Object(n.a)({url:"/rest/factory/registeredLogList",method:"get",params:t})}function h(t){return Object(n.a)({url:"/rest/factory/registeredDetailList",method:"get",params:t})}function d(t){return Object(n.a)({url:"/rest/factory/registeredList",method:"get",params:t})}function m(t){return Object(n.a)({url:"/rest/factory/agentGroupServiceList",method:"get",params:t})}function v(t){return Object(n.a)({url:"/rest/setting/lyyopen/load",method:"get",params:t})}function y(t){return Object(n.a)({url:"/rest/setting/lyyopen/query",method:"post",data:t})}function g(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"get",params:t})}function b(t){var e="/rest/setting/setting/ty"+Object(a.i)(t);return Object(n.a)({url:e,method:"post",data:t})}function x(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"get",params:t})}function w(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"post",data:t})}function D(t){return Object(n.a)({url:"/rest/setting/cxNewEquipment",method:"get",params:t})}function I(t){return Object(n.a)({url:"/rest/setting/getEquipmentParamDef",method:"get",params:t})}function _(t){return Object(n.a)({url:"/rest/setting/readNewEquipment",method:"get",params:t})}function j(t){return Object(n.a)({url:"/rest/setting/szNewEquipment",method:"get",params:t})}function O(t){var e="/rest/setting/setEquipment"+Object(a.i)(t);return Object(n.a)({url:e,method:"post"})}},xOJF:function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("k4Ii"),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}}]);