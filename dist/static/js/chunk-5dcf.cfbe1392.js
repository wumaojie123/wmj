(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5dcf"],{B5LO:function(t,e,r){"use strict";r.d(e,"e",function(){return i}),r.d(e,"b",function(){return o}),r.d(e,"c",function(){return a}),r.d(e,"d",function(){return c}),r.d(e,"a",function(){return u});var n=r("Yfch"),i=function(t,e,r){if(!e||e&&!Object(n.d)(e))return r(new Error("请输入正确的11位手机号码"));r()},o=function(t,e,r){if(e&&!/^[A-Za-z0-9]{6,16}$/.test(e))return r(new Error("请输入6-16位的数字或字母"));r()},a=function(t,e,r){if(!/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/.test(e)||e>1e4)return r(new Error("价格必须为大于0的正数,价格需小于10000,最多保留2位小数"));r()},c=function(t,e,r){if(!/^([1-9][0-9]*)$/.test(e)||e>1440)return r(new Error("服务时间必须为大于0的小于等于1440(24小时)正整数"));r()},u=function(t,e,r){if(!/^([1-9][0-9]*)$/.test(e)||0===e||e>1e4)return r(new Error("模拟投币数必须为大于0的整数"));r()}},cLjf:function(t,e,r){t.exports=r("xOJF")},hDQ3:function(t,e,r){"use strict";e.__esModule=!0;var n,i=r("Asgo"),o=(n=i)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){return function n(i,a){try{var c=e[i](a),u=c.value}catch(t){return void r(t)}if(!c.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}},"i/up":function(t,e,r){"use strict";var n=r("th1P");r.n(n).a},k4Ii:function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={},g={};g[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==n&&i.call(y,a)&&(g=y);var b=O.prototype=_.prototype=Object.create(g);L.prototype=b.constructor=O,O.constructor=L,O[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var i=new j(w(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},k(b),b[u]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=S,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return c.type="throw",c.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;q(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function w(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,o=Object.create(i.prototype),a=new I(n||[]);return o._invoke=function(t,e,r){var n=f;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=D(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function O(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(s).then(function(t){u.value=t,o(u)},a)}a(c.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function D(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,D(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"mG/D":function(t,e,r){"use strict";r.d(e,"b",function(){return n}),r.d(e,"c",function(){return i}),r.d(e,"a",function(){return o});var n=[{value:"CDZ",label:"充电桩"}],i={CDZ:"充电桩"},o={0:"无",1:"脉冲",2:"串口"}},qBRV:function(t,e,r){"use strict";r.r(e);r("omC7");var n=r("cLjf"),i=r.n(n),o=r("hDQ3"),a=r.n(o),c=r("qpgI"),u=r("B5LO"),s=r("mG/D"),l={filters:{deviceFilter:function(t){return s.c[t]},communicationFilter:function(t){return s.a[t]}},data:function(){return{lyyDistributorId:"",list:[],colums:[{key:"description",label:"套餐名称"},{key:"price",label:"价格(元)"},{key:"serviceTime",label:"时长(分钟)"},{key:"coins",label:"模拟投币数"}],pageInfo:{total:0},selectList:[],dialogFormVisible:!1,deviceType:"",equipmentArr:[],communication:"",modalData:{description:"",price:"",coins:"",serviceTime:""},merchantList:[],baseInfoRules:{description:[{required:!0,message:"请输入套餐名称",trigger:"blur"}],serviceTime:[{required:!0,validator:u.d,trigger:"blur"}],coins:[{required:!0,validator:u.a,trigger:"blur"}],price:[{required:!0,validator:u.c,trigger:"blur"}]},clickDisabled:!1}},created:function(){this.deviceType=this.$route.query.deviceType,this.equipmentArr=this.$route.query.equipmentArr,this.communication=this.$route.query.communication,2==this.communication&&(this.colums=[{key:"description",label:"套餐名称"},{key:"price",label:"价格(元)"},{key:"serviceTime",label:"时长(分钟)"}]),this.queryList(),this.getMerchantList()},methods:{queryList:function(){var t=this;return a()(i.a.mark(function e(){var r,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.list=[],r={communication:t.communication,equipmentType:t.deviceType,pageSize:400,pageIndex:1},e.next=4,Object(c.a)(r);case 4:0===(n=e.sent).result&&(t.listLoading=!1,n.data?(t.list=n.data.items||[],t.pageInfo.total=n.data.total||0):t.pageInfo.total=0);case 6:case"end":return e.stop()}},e,t)}))()},getMerchantList:function(){var t=this;return a()(i.a.mark(function e(){var r,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.h)();case 2:0===(r=e.sent).result&&(n=(n=r.data||[]).map(function(t){return t.label=t.account+" "+t.name,t}),t.merchantList=n);case 4:case"end":return e.stop()}},e,t)}))()},handleSelectionChange:function(t){this.selectList=t},handleSaveModal:function(){this.dialogFormVisible=!0,this.modalData={description:"",price:"",coins:"",serviceTime:""}},handleSave:function(){var t=this;this.$refs.baseInfoRules.validate(function(e){if(!e)return!1;t.list.some(function(e){return parseInt(e.coins,10)===parseInt(t.modalData.coins,10)||parseInt(e.serviceTime,10)===parseInt(t.modalData.serviceTime,10)})?t.$message({message:"套餐不能重复, 模拟投币数或时长均不可重复",type:"error"}):(t.list=[t.modalData].concat(t.list),t.selectList.push(t.modalData),t.dialogFormVisible=!1)})},handleBatchSave:function(){var t=this;return a()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.selectList.length){e.next=3;break}return t.$message({message:"请至少选择一个服务套餐",type:"error"}),e.abrupt("return");case 3:if(t.lyyDistributorId){e.next=6;break}return t.$message({message:"请选择要绑定的商家",type:"error"}),e.abrupt("return");case 6:if(!t.clickDisabled){e.next=8;break}return e.abrupt("return");case 8:return r={communication:t.communication,equipmentType:t.deviceType,values:t.equipmentArr,lyyDistributorId:t.lyyDistributorId,lyyGroupServices:t.selectList},Array.isArray(t.equipmentArr)||(r.values=[t.equipmentArr]),t.clickDisabled=!0,setTimeout(function(){t.clickDisabled=!1},3e3),e.next=14,Object(c.b)(r);case 14:0===e.sent.result?(t.$message({message:"设备注册记录可查看设备注册进度",type:"success"}),t.handleCancel()):t.$message({message:"设备注册失败，请重新选择设备",type:"error"});case 16:case"end":return e.stop()}},e,t)}))()},handleCancel:function(){window.history.go(-1)}}},f=(r("i/up"),r("ZrdR")),d=Object(f.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-area"},[r("h1",{staticStyle:{margin:"10px 0px"}},[t._v("注册设备：已选"+t._s(t.equipmentArr.length)+"台；设备类型："+t._s(t._f("deviceFilter")(t.deviceType))+"；通信方式："+t._s(t._f("communicationFilter")(t.communication)))]),t._v(" "),r("el-form",{attrs:{inline:!0,"label-width":"90px","label-position":"left"}},[r("el-form-item",{attrs:{label:"绑定商家"}},[r("el-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择",filterable:""},model:{value:t.lyyDistributorId,callback:function(e){t.lyyDistributorId=e},expression:"lyyDistributorId"}},t._l(t.merchantList,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.adOrgId}})}))],1)],1),t._v(" "),r("div",{staticClass:"table-title-info"},[r("span",[t._v("服务套餐")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.handleSaveModal}},[t._v("添加其他套餐")])],1),t._v(" "),r("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,border:"","highlight-current-row":"",height:"400"},on:{"selection-change":t.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.colums,function(t,e){return r("el-table-column",{key:e,attrs:{prop:t.key,label:t.label,width:t.width,sortable:t.sortable,align:"center"}})})],2),t._v(" "),r("el-pagination",{attrs:{total:t.pageInfo.total,"current-page":t.pageInfo.currPage,background:"",layout:"total, pager"}}),t._v(" "),r("div",{staticStyle:{"text-align":"center"}},[r("el-button",{on:{click:t.handleCancel}},[t._v("取消")]),t._v(" "),r("el-button",{staticStyle:{"margin-left":"100px"},attrs:{type:"primary"},on:{click:t.handleBatchSave}},[t._v("完成")]),t._v(" "),r("div",{staticStyle:{color:"red","margin-top":"20px"}},[t._v("注：设备注册成功后，设备绑定在商家的默认场地下。")])],1),t._v(" "),r("el-dialog",{staticStyle:{width:"1000px"},attrs:{visible:t.dialogFormVisible,title:"编辑套餐服务"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"baseInfoRules",staticStyle:{"margin-top":"20px"},attrs:{model:t.modalData,rules:t.baseInfoRules,"label-width":"120px","label-position":"right"}},[r("el-form-item",{attrs:{label:"套餐名称",prop:"description"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入套餐名称",maxlength:"10"},model:{value:t.modalData.description,callback:function(e){t.$set(t.modalData,"description",e)},expression:"modalData.description"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"价格(元)",prop:"price"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入价格",type:"number",maxlength:"16",clearable:""},model:{value:t.modalData.price,callback:function(e){t.$set(t.modalData,"price",e)},expression:"modalData.price"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"时长(分钟)",prop:"serviceTime"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入时长",type:"tel",maxlength:"6",clearable:""},model:{value:t.modalData.serviceTime,callback:function(e){t.$set(t.modalData,"serviceTime",e)},expression:"modalData.serviceTime"}})],1),t._v(" "),"1"==t.communication?[r("el-form-item",{attrs:{label:"模拟投币数",prop:"coins"}},[r("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入模拟投币数",type:"number",maxlength:"4",clearable:""},model:{value:t.modalData.coins,callback:function(e){t.$set(t.modalData,"coins",e)},expression:"modalData.coins"}})],1)]:t._e()],2),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.handleSave}},[t._v("保存并使用")])],1)],1)],1)},[],!1,null,null,null);d.options.__file="register.vue";e.default=d.exports},qpgI:function(t,e,r){"use strict";r.d(e,"u",function(){return o}),r.d(e,"n",function(){return a}),r.d(e,"b",function(){return c}),r.d(e,"h",function(){return u}),r.d(e,"e",function(){return s}),r.d(e,"v",function(){return l}),r.d(e,"g",function(){return f}),r.d(e,"m",function(){return d}),r.d(e,"k",function(){return p}),r.d(e,"l",function(){return h}),r.d(e,"a",function(){return m}),r.d(e,"c",function(){return g}),r.d(e,"i",function(){return v}),r.d(e,"q",function(){return y}),r.d(e,"t",function(){return b}),r.d(e,"r",function(){return w}),r.d(e,"s",function(){return x}),r.d(e,"d",function(){return _}),r.d(e,"f",function(){return L}),r.d(e,"j",function(){return O}),r.d(e,"p",function(){return k}),r.d(e,"o",function(){return j});var n=r("t3Un"),i=r("7Qib");function o(t){return Object(n.a)({url:"/rest/factory/unbundling",method:"post",data:t})}function a(t){return Object(n.a)({url:"/rest/factory/savaEquipmentService",method:"post",data:t})}function c(t){return Object(n.a)({url:"/rest/factory/batchRegisteredEquipment",method:"post",data:t})}function u(){return Object(n.a)({url:"/query/merchants",method:"get"})}function s(t){return Object(n.a)({url:"/rest/factory/dateleEquipmentService",method:"post",data:t})}function l(t){return Object(n.a)({url:"/rest/factory/updateEquipmentService",method:"post",data:t})}function f(t){return Object(n.a)({url:"/rest/factory/groupServiceList",method:"get",params:t})}function d(t){return Object(n.a)({url:"/rest/factory/registeredLogList",method:"get",params:t})}function p(t){return Object(n.a)({url:"/rest/factory/registeredDetailList",method:"get",params:t})}function h(t){return Object(n.a)({url:"/rest/factory/registeredList",method:"get",params:t})}function m(t){return Object(n.a)({url:"/rest/factory/agentGroupServiceList",method:"get",params:t})}function g(t){return Object(n.a)({url:"/rest/setting/lyyopen/load",method:"get",params:t})}function v(t){return Object(n.a)({url:"/rest/setting/lyyopen/query",method:"post",data:t})}function y(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"get",params:t})}function b(t){var e="/rest/setting/setting/ty"+Object(i.i)(t);return Object(n.a)({url:e,method:"post",data:t})}function w(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"get",params:t})}function x(t){return Object(n.a)({url:"/rest/setting/setting/ty",method:"post",data:t})}function _(t){return Object(n.a)({url:"/rest/setting/cxNewEquipment",method:"get",params:t})}function L(t){return Object(n.a)({url:"/rest/setting/getEquipmentParamDef",method:"get",params:t})}function O(t){return Object(n.a)({url:"/rest/setting/readNewEquipment",method:"get",params:t})}function k(t){return Object(n.a)({url:"/rest/setting/szNewEquipment",method:"get",params:t})}function j(t){var e="/rest/setting/setEquipment"+Object(i.i)(t);return Object(n.a)({url:e,method:"post"})}},th1P:function(t,e,r){},xOJF:function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("k4Ii"),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}}]);