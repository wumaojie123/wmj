(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5355","chunk-0e91e"],{"5NhE":function(t,e,r){"use strict";var n=r("D6z+");r.n(n).a},Cs38:function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"c",function(){return a}),r.d(e,"d",function(){return o}),r.d(e,"a",function(){return s});var n=r("t3Un");function i(){return Object(n.a)({url:"/rest/charging/wechatThirdConfig/getAllResult",method:"get"})}function a(t){return Object(n.a)({url:"/rest/charging/wechatThirdConfig/getConfig",method:"get",params:t})}function o(t){return Object(n.a)({url:"/rest/charging/wechatThirdConfig/updateConfig",method:"post",data:t})}function s(){return Object(n.a)({url:"/rest/charging/wechatThirdConfig/authTypes",method:"get"})}},"D6z+":function(t,e,r){},GFJe:function(t,e,r){"use strict";r.r(e);r("omC7");var n=r("cLjf"),i=r.n(n),a=r("hDQ3"),o=r.n(a),s=r("V95q"),u=r("xdSL"),c=r("Cs38"),l={components:{editDialog:s.default,preview:u.default},data:function(){return{tempLead1:"关注公众号，可接收消息通知",tempLead2:"请先关注后使用",previewVisible:!1,dataInfo:{},appId:"",value:!0,configValue:!0,actionType:"",menuList:[],industry:"",typeId:!1,serviceVisible:!1,params:{},isFirstAuth:"N",publicTypeVisible:!1,subscribeMode:0}},beforeMount:function(){this.appId=this.$route.query.appId,this.typeId=this.$route.query.typeId||!1,this.isFirstAuth=this.$route.query.isFirstAuth||"N",this.getConfigInfo()},methods:{getConfigInfo:function(){var t=this;return o()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.c)({appId:t.appId});case 2:0===(r=e.sent).result&&(t.dataInfo=r.data,t.subscribeMode=r.data.subscribeMode+"","0"===t.subscribeMode?t.tempLead1=r.data.lead||"关注公众号，可接收消息通知":"1"===t.subscribeMode&&(t.tempLead2=r.data.lead||"请先关注后使用"),t.menuList=r.data.menuConfig&&r.data.menuConfig.button||[],t.configValue="Y"===r.data.templateSuccess&&"Y"===r.data.isTemplateAuth,t.value="Y"===r.data.menuSuccess&&"Y"===r.data.isMenuAuth,"Y"===t.isFirstAuth&&(t.configValue=!0,t.value=!0));case 4:case"end":return e.stop()}},e,t)}))()},handleType:function(t){this.subscribeMode=t},selectIndustry:function(t){this.industry=t},update:function(t){var e={appId:this.appId};this.configValue&&this.value?e.type="all":this.configValue&&!this.value?e.type="template":!this.configValue&&this.value&&(e.type="menu"),e.menus=t,this.params=e},handlePreview:function(){this.value?(this.$refs.datepicker.handleDataInfo(),this.previewVisible=!0):this.$message({message:"公众号菜单未开启",type:"success"})},updateConfig:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.datepicker.handleDataInfo(),this.$nextTick(function(){t.updateConfigAction()})},updateConfigAction:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.params.menus.some(function(t){if(t.sub_button.length>0&&t.name.length>=6)return!0})){e.next=4;break}return t.$message({message:"二级菜单超过一个，一级菜单名称不能超过5个汉字",type:"error"}),e.abrupt("return");case 4:return t.params.subscribeMode=t.subscribeMode,"0"===t.subscribeMode?t.params.lead=t.tempLead1:t.params.lead=t.tempLead2,t.industry===t.dataInfo.primaryIndustrySecond&&(t.params.industryId1=t.dataInfo.forceIndustryCode,t.params.industryId2=t.dataInfo.secondaryIndustryCode),t.industry===t.dataInfo.secondaryIndustrySecond&&(t.params.industryId1=t.dataInfo.primaryIndustryCode,t.params.industryId2=t.dataInfo.forceIndustryCode),e.next=12,Object(c.d)(t.params);case 12:0===e.sent.result&&(t.$message({message:"公众号配置成功",type:"success"}),t.$router.push({path:"OfficialAccountDetail",query:{appId:t.appId}}));case 14:case"end":return e.stop()}},e,t)}))()}}},f=(r("5NhE"),r("ZrdR")),p=Object(f.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"official-account-edit",staticStyle:{margin:"20px"}},[n("p",{staticClass:"title"},[t._v("关注公众号方式")]),t._v(" "),n("el-radio",{attrs:{label:"0"},model:{value:t.subscribeMode,callback:function(e){t.subscribeMode=e},expression:"subscribeMode"}},[n("span",[t._v("支付后引导关注"),n("span",{staticStyle:{color:"#888"}},[t._v("（顾客扫码支付后页面会引导顾客关注公众号)")])]),t._v(" "),n("div",{staticClass:"radio-wrap"},[n("span",{staticClass:"title-desc"},[t._v("引导关注语")]),t._v(" "),n("el-input",{staticClass:"input-500",attrs:{placeholder:"关注公众号，可接收充电消息通知",maxlength:"30"},model:{value:t.tempLead1,callback:function(e){t.tempLead1=e},expression:"tempLead1"}})],1)]),n("br"),t._v(" "),n("el-radio",{attrs:{label:"1"},model:{value:t.subscribeMode,callback:function(e){t.subscribeMode=e},expression:"subscribeMode"}},[n("span",[t._v("先关注后支付"),n("span",{staticStyle:{color:"#888"}},[t._v("（顾客扫码必须先关注公众号才可进行消费）")])]),t._v(" "),n("div",{staticClass:"radio-wrap"},[n("span",{staticClass:"title-desc"},[t._v("引导关注语")]),t._v(" "),n("el-input",{staticClass:"input-500",attrs:{placeholder:"请先关注后使用",maxlength:"30"},model:{value:t.tempLead2,callback:function(e){t.tempLead2=e},expression:"tempLead2"}})],1)]),t._v(" "),n("p",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[n("span",[t._v("服务消息通知")]),t._v(" "),n("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-color":"#13ce66",size:"big","inactive-color":"#f0f0f0"},model:{value:t.configValue,callback:function(e){t.configValue=e},expression:"configValue"}})],1),t._v(" "),n("div",[t._v("客户扫码消费后可在公众号接收服务开始、服务结束消息通知，"),n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("img",{staticClass:"popver-img",staticStyle:{width:"255px",height:"290px"},attrs:{src:r("w4u3")}}),t._v(" "),n("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1),t._v(" "),n("p",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[n("span",[t._v("公众号菜单配置")]),t._v(" "),n("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-color":"#13ce66","inactive-color":"#f0f0f0"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),[n("edit-dialog",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],ref:"datepicker",attrs:{"device-type":t.dataInfo.eType,"app-id":t.appId,"action-type":t.actionType,"menu-list":t.menuList},on:{"on-OK":t.update}})],t._v(" "),n("div",{staticStyle:{margin:"20px 40px 0 80px"}},[n("el-button",{attrs:{type:"success"},on:{click:t.handlePreview}},[t._v("公众号菜单预览")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.updateConfig}},[t._v("保存")])],1),t._v(" "),n("preview",{attrs:{menu:t.params.menus},model:{value:t.previewVisible,callback:function(e){t.previewVisible=e},expression:"previewVisible"}})],2)},[],!1,null,"7fc2945c",null);p.options.__file="EditOfficialAccount.vue";e.default=p.exports},Wg3D:function(t,e,r){"use strict";var n=r("v6Hn");r.n(n).a},cLjf:function(t,e,r){t.exports=r("xOJF")},hDQ3:function(t,e,r){"use strict";e.__esModule=!0;var n,i=r("Asgo"),a=(n=i)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,r){return function n(i,o){try{var s=e[i](o),u=s.value}catch(t){return void r(t)}if(!s.done)return a.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}},k4Ii:function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=w;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},m={};m[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(V([])));g&&g!==n&&i.call(g,o)&&(m=g);var b=I.prototype=_.prototype=Object.create(m);L.prototype=b.constructor=I,I.constructor=L,I[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,I):(t.__proto__=I,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},C(k.prototype),k.prototype[s]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,r,n){var i=new k(w(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(b),b[u]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=V,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:V(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),o=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return M()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,o),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function I(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,o){var s=x(t[r],t,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(c).then(function(t){u.value=t,a(u)},o)}o(s.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function V(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:M}}function M(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},v6Hn:function(t,e,r){},w4u3:function(t,e,r){t.exports=r.p+"static/img/b-title.1e5844e.png"},xOJF:function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("k4Ii"),i)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},xdSL:function(t,e,r){"use strict";r.r(e);var n={name:"Preview",props:{menu:{type:Array,default:function(){return[]}},value:{type:Boolean,default:!1}},data:function(){return{localValue:this.value}},computed:{localMeau:function(){var t=[];return this.menu.forEach(function(e){var r=[];e.sub_button.length>0?(e.sub_button.map(function(t){r.push(t.name)}),r.push(e.name),t.push(r.reverse())):(r.push(e.name),t.push(r))}),t}},watch:{value:function(t){this.localValue=t},localValue:function(t){this.$emit("input",t)}}},i=(r("Wg3D"),r("ZrdR")),a=Object(i.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{visible:t.localValue,title:"公众号菜单预览",width:"45%"},on:{"update:visible":function(e){t.localValue=e}}},[r("div",{staticClass:"preview-wrap"},[r("div",{staticClass:"preview-footer"},[r("div",{staticStyle:{width:"45px","text-align":"center",border:"1px solid #f0f0f0"}},[r("i",{staticClass:"el-icon-copy-document",staticStyle:{"font-size":"26px",height:"48px","line-height":"48px"}})]),t._v(" "),t._l(t.localMeau,function(e,n){return r("div",{key:n,staticClass:"footer-item"},t._l(e,function(e,n){return r("span",{key:n,staticClass:"item-item"},[t._v(t._s(e))])}))})],2)])])},[],!1,null,"34a31512",null);a.options.__file="preview.vue";e.default=a.exports}}]);