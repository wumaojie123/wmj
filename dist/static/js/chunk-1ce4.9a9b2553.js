(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ce4","chunk-6598"],{"14Xm":function(t,e,n){t.exports=n("u938")},Cs38:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return o}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var r=n("t3Un");function a(){return Object(r.a)({url:"/rest/charging/wechatThirdConfig/getAllResult",method:"get"})}function i(t){return Object(r.a)({url:"/rest/charging/wechatThirdConfig/getConfig",method:"get",params:t})}function o(t){return Object(r.a)({url:"/rest/charging/wechatThirdConfig/updateConfig",method:"post",data:t})}function s(){return Object(r.a)({url:"/rest/charging/wechatThirdConfig/authTypes",method:"get"})}function u(t){return Object(r.a)({url:"/rest/factory/deleteAuthorization",method:"get",params:t})}},D3Ub:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("4d7F"),i=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,n){return function r(a,o){try{var s=e[a](o),u=s.value}catch(t){return void n(t)}if(!s.done)return i.default.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}("next")})}}},GFJe:function(t,e,n){"use strict";n.r(e);n("gDS+");var r=n("14Xm"),a=n.n(r),i=n("D3Ub"),o=n.n(i),s=n("V95q"),u=n("xdSL"),c=n("Cs38"),l=n("xBhl"),f={components:{editDialog:s.default,preview:u.default},data:function(){return{tempLead1:"关注公众号，可接收消息通知",tempLead2:"请先关注后使用",previewVisible:!1,dataInfo:{},appId:"",value:!0,configValue:!0,actionType:"",menuList:[],industry:"",typeId:!1,serviceVisible:!1,params:{},isFirstAuth:"N",publicTypeVisible:!1,subscribeMode:0,ag:""}},beforeMount:function(){this.appId=this.$route.query.appId,this.typeId=this.$route.query.typeId||!1,this.isFirstAuth=this.$route.query.isFirstAuth||"N",this.getConfigInfo()},methods:{getConfigInfo:function(){var t=this;return o()(a.a.mark(function e(){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.c)();case 2:return 0===(n=e.sent).result&&(t.ag=n.data.agentUserId+""),e.next=6,Object(c.d)({appId:t.appId});case 6:0===(r=e.sent).result&&(t.dataInfo=r.data,t.subscribeMode=r.data.subscribeMode+"","0"===t.subscribeMode?(t.tempLead1=r.data.lead||"关注公众号，可接收消息通知","NY"===t.isFirstAuth&&(t.tempLead1="关注公众号，可接收消息通知")):"1"===t.subscribeMode&&(t.tempLead2=r.data.lead||"请先关注后使用"),t.menuList=r.data.menuConfig&&r.data.menuConfig.button||[],t.configValue="Y"===r.data.templateSuccess&&"Y"===r.data.isTemplateAuth,t.value="Y"===r.data.menuSuccess&&"Y"===r.data.isMenuAuth,"Y"===t.isFirstAuth&&(t.configValue=!0,t.value=!0));case 8:case"end":return e.stop()}},e,t)}))()},handleType:function(t){this.subscribeMode=t},selectIndustry:function(t){this.industry=t},update:function(t){var e={appId:this.appId};this.configValue&&this.value?e.type="all":this.configValue&&!this.value?e.type="template":!this.configValue&&this.value&&(e.type="menu"),e.menus=t,this.params=e},handlePreview:function(){this.value?(this.$refs.datepicker.handleDataInfo(),this.previewVisible=!0):this.$message({message:"公众号菜单未开启",type:"success"})},updateConfig:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.datepicker.handleDataInfo(),this.$nextTick(function(){t.updateConfigAction()})},updateConfigAction:function(){var t=this;return o()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.params.menus.some(function(t){if(t.sub_button.length>0&&t.name.length>=6)return!0})){e.next=4;break}return t.$message({message:"二级菜单超过一个，一级菜单名称不能超过5个汉字",type:"error"}),e.abrupt("return");case 4:return t.params.subscribeMode=t.subscribeMode,"0"===t.subscribeMode?t.params.lead=t.tempLead1:t.params.lead=t.tempLead2,t.industry===t.dataInfo.primaryIndustrySecond&&(t.params.industryId1=t.dataInfo.forceIndustryCode,t.params.industryId2=t.dataInfo.secondaryIndustryCode),t.industry===t.dataInfo.secondaryIndustrySecond&&(t.params.industryId1=t.dataInfo.primaryIndustryCode,t.params.industryId2=t.dataInfo.forceIndustryCode),e.next=12,Object(c.e)(t.params);case 12:0===e.sent.result&&(t.$message({message:"公众号配置成功",type:"success"}),window.history.go(-1));case 14:case"end":return e.stop()}},e,t)}))()}}},d=(n("qGmb"),n("KHd+")),p=Object(d.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"official-account-edit",staticStyle:{margin:"20px"}},[r("p",{staticClass:"title"},[t._v("关注公众号方式")]),t._v(" "),r("el-radio",{attrs:{label:"0"},model:{value:t.subscribeMode,callback:function(e){t.subscribeMode=e},expression:"subscribeMode"}},[r("span",[t._v("支付后引导关注"),r("span",{staticStyle:{color:"#888"}},[t._v("（顾客扫码支付后页面会引导顾客关注公众号)")])]),t._v(" "),r("div",{staticClass:"radio-wrap"},[r("span",{staticClass:"title-desc"},[t._v("引导关注语")]),t._v(" "),r("el-input",{staticClass:"input-500",attrs:{placeholder:"关注公众号，可接收充电消息通知",maxlength:"30"},model:{value:t.tempLead1,callback:function(e){t.tempLead1=e},expression:"tempLead1"}})],1)]),r("br"),t._v(" "),r("el-radio",{attrs:{label:"1"},model:{value:t.subscribeMode,callback:function(e){t.subscribeMode=e},expression:"subscribeMode"}},[r("span",[t._v("先关注后支付"),r("span",{staticStyle:{color:"#888"}},[t._v("（顾客扫码必须先关注公众号才可进行消费）")])]),t._v(" "),r("div",{staticClass:"radio-wrap"},[r("span",{staticClass:"title-desc"},[t._v("引导关注语")]),t._v(" "),r("el-input",{staticClass:"input-500",attrs:{placeholder:"请先关注后使用",maxlength:"30"},model:{value:t.tempLead2,callback:function(e){t.tempLead2=e},expression:"tempLead2"}})],1)]),t._v(" "),r("p",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[r("span",[t._v("服务消息通知")]),t._v(" "),r("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-color":"#13ce66",size:"big","inactive-color":"#f0f0f0"},model:{value:t.configValue,callback:function(e){t.configValue=e},expression:"configValue"}})],1),t._v(" "),r("div",[t._v("客户扫码消费后可在公众号接收服务开始、服务结束消息通知，"),r("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[r("img",{staticClass:"popver-img",staticStyle:{width:"300px",height:"448px"},attrs:{src:n("qZ3h")}}),t._v(" "),r("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1),t._v(" "),r("p",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[r("span",[t._v("公众号菜单配置")]),t._v(" "),r("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-color":"#13ce66","inactive-color":"#f0f0f0"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),[r("edit-dialog",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],ref:"datepicker",attrs:{ag:t.ag,"device-type":t.dataInfo.eType,"app-id":t.appId,"action-type":t.actionType,"menu-list":t.menuList},on:{"on-OK":t.update}})],t._v(" "),r("div",{staticStyle:{margin:"20px 40px 0 80px"}},[r("el-button",{attrs:{type:"success"},on:{click:t.handlePreview}},[t._v("公众号菜单预览")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.updateConfig}},[t._v("保存")])],1),t._v(" "),r("preview",{attrs:{menu:t.params.menus},model:{value:t.previewVisible,callback:function(e){t.previewVisible=e},expression:"previewVisible"}})],2)},[],!1,null,"9d27346e",null);p.options.__file="EditOfficialAccount.vue";e.default=p.exports},UJga:function(t,e,n){"use strict";var r=n("WIYF");n.n(r).a},WIYF:function(t,e,n){},ls82:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=w;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==r&&a.call(y,o)&&(g=y);var b=I.prototype=_.prototype=Object.create(g);L.prototype=b.constructor=I,I.constructor=L,I[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,I):(t.__proto__=I,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},C(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,n,r){var a=new O(w(t,e,n,r));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},C(b),b[u]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var a=e&&e.prototype instanceof _?e:_,i=Object.create(a.prototype),o=new E(r||[]);return i._invoke=function(t,e,n){var r=f;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return V()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=j(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=x(t,e,n);if("normal"===u.type){if(r=n.done?h:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,o),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function I(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,o){var s=x(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,o)},function(t){e("throw",t,i,o)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},o)}o(s.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=x(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:V}}function V(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},ncD1:function(t,e,n){},qGmb:function(t,e,n){"use strict";var r=n("ncD1");n.n(r).a},qZ3h:function(t,e,n){t.exports=n.p+"static/img/title.8b4de15.png"},u938:function(t,e,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("ls82"),a)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},xBhl:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"h",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return f});var r=n("t3Un");function a(t){return Object(r.a)({url:"/agentManage/sendCode",method:"get",params:t})}function i(t){return Object(r.a)({url:"/agentManage/updateAgent",method:"post",data:t})}function o(t){return Object(r.a)({url:"/agentManage/addAgent",method:"post",data:t})}function s(t){return Object(r.a)({url:"/agentManage/getAgent",method:"get",params:t})}function u(t){return Object(r.a)({url:"/agentManage/getMerchant",method:"get",params:t})}function c(t){return Object(r.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:t})}function l(){return Object(r.a)({url:"/agentManage/getIssend",method:"get"})}function f(t){return Object(r.a)({url:"/agentManage/deleteAgent",method:"post",data:t})}},xdSL:function(t,e,n){"use strict";n.r(e);var r={name:"Preview",props:{menu:{type:Array,default:function(){return[]}},value:{type:Boolean,default:!1}},data:function(){return{localValue:this.value}},computed:{localMeau:function(){var t=[];return this.menu.forEach(function(e){var n=[];e.sub_button.length>0?(e.sub_button.map(function(t){n.push(t.name)}),n.push(e.name),t.push(n.reverse())):(n.push(e.name),t.push(n))}),t}},watch:{value:function(t){this.localValue=t},localValue:function(t){this.$emit("input",t)}}},a=(n("UJga"),n("KHd+")),i=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.localValue,title:"公众号菜单预览",width:"45%"},on:{"update:visible":function(e){t.localValue=e}}},[n("div",{staticClass:"preview-wrap"},[n("div",{staticClass:"preview-footer"},[n("div",{staticStyle:{width:"45px","text-align":"center",border:"1px solid #f0f0f0"}},[n("i",{staticClass:"el-icon-copy-document",staticStyle:{"font-size":"26px",height:"48px","line-height":"48px"}})]),t._v(" "),t._l(t.localMeau,function(e,r){return n("div",{key:r,staticClass:"footer-item"},t._l(e,function(e,r){return n("span",{key:r,staticClass:"item-item"},[t._v(t._s(e))])}))})],2)])])},[],!1,null,"29e413e9",null);i.options.__file="preview.vue";e.default=i.exports}}]);