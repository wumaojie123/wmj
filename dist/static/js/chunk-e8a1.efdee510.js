(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e8a1"],{"14Xm":function(t,e,n){t.exports=n("u938")},D3Ub:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("4d7F"),i=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,n){return function r(a,o){try{var u=e[a](o),s=u.value}catch(t){return void n(t)}if(!u.done)return i.default.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})}}},"RU/L":function(t,e,n){n("Rqdy");var r=n("WEpk").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},Rqdy:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SEkw:function(t,e,n){t.exports={default:n("RU/L"),__esModule:!0}},V7oC:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("SEkw"),i=(r=a)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},ZySA:function(t,e,n){"use strict";var r=n("P2sY"),a=n.n(r),i=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var r=a()({},e.value),i=a()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var u=o.getBoundingClientRect(),s=o.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(u.width,u.height)+"px",o.appendChild(s)),i.type){case"center":s.style.top=u.height/2-s.offsetHeight/2+"px",s.style.left=u.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-u.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-u.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}},!1)}}),o=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;e.a=i},ddRU:function(t,e,n){"use strict";var r=n("lysi");n.n(r).a},ejs9:function(t,e,n){"use strict";n.r(e);var r=n("P2sY"),a=n.n(r),i=n("ZySA"),o=n("7Qib"),u=n("omMh"),s={name:"BdListView",directives:{waves:i.a},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,name:"",phone:""},BDList:[],checked:0,checkedRow:null,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getTemplateRow:function(t,e){this.checkedRow=e},getList:function(){var t=this;this.listLoading=!0,u.a.getBDList(this.listQuery).then(function(e){t.list=e.data,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleUpdate:function(t){var e=this;this.temp=a()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleEdit:function(t){var e=this;if("add"===t)this.$router.push({name:"addBD",query:{plan:"private"}});else{if(!e.checkedRow&&(e.$notify({title:"提示",message:"操作失败,请选中某一条数据进行操作",type:"error",duration:2e3}),1))return!1;"edit"===t&&this.$router.push({name:"editBD",query:{id:this.checkedRow.adUserId,phone:this.checkedRow.phone}})}},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(o.i)(e[t]):e[t]})})}}},c=(n("ddRU"),n("KHd+")),l=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bd-container bd-manage"},[n("div",{staticClass:"filter-container"},[n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v("  BD姓名    ")]),t._v(" "),n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入BD姓名",maxlength:"11"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}})],1),t._v(" "),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[t._v("手机号码")]),t._v(" "),n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号码",maxlength:"11"},model:{value:t.listQuery.phone,callback:function(e){t.$set(t.listQuery,"phone",e)},expression:"listQuery.phone"}})],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s("查找"))]),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.handleEdit("edit")}}},[t._v(t._s("编辑"))]),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.handleEdit("add")}}},[t._v(t._s("新增BD"))])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"操作",align:"center",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-radio",{staticClass:"radio",attrs:{label:e.row.adUserId},nativeOn:{change:function(n){t.getTemplateRow(e.$index,e.row)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(" ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"BD姓名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.username||""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"手机号码",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.phone||""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"一级代理数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.agentCounts||0))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建日期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("parseTime")(e.row.createDate,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[25],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"9e187932",null);l.options.__file="BdList.vue";e.default=l.exports},iCc5:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},jUE0:function(t,e,n){},ls82:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",g={},v={};v[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(R([])));y&&y!==r&&a.call(y,o)&&(v=y);var w=L.prototype=x.prototype=Object.create(v);_.prototype=w.constructor=L,L.constructor=_,L[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[u]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,n,r){var a=new O(b(t,e,n,r));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(w),w[s]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=R,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return u.type="throw",u.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function b(t,e,n,r){var a=e&&e.prototype instanceof x?e:x,i=Object.create(a.prototype),o=new A(r||[]);return i._invoke=function(t,e,n){var r=p;return function(a,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw i;return B()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var u=E(o,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=k(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,o),i}function k(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function _(){}function L(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,o){var u=k(t[n],t,r);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,o)},function(t){e("throw",t,i,o)}):Promise.resolve(c).then(function(t){s.value=t,i(s)},o)}o(u.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=k(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function R(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:B}}function B(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},lysi:function(t,e,n){},omMh:function(t,e,n){"use strict";var r=n("14Xm"),a=n.n(r),i=n("D3Ub"),o=n.n(i),u=n("iCc5"),s=n.n(u),c=n("V7oC"),l=n.n(c),p=n("t3Un"),f=function(){function t(){s()(this,t)}return l()(t,null,[{key:"getAgentList",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/queryAgents",method:"get",params:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getFirstAgentList",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/firstAgents/queryFirstAgents",method:"get",params:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"addAgent",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/insideManage/addAgent",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getAgentInfo",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/getAgent",method:"get",params:{agentUserId:e}}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateAgentInfo",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/addOrUpdateAgent",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateAgent",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/updateAgent",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"addAgentInfo",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/addAgent",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"addBD",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/addOrUpdateAgent",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateBDInfo",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/insideManage/addAgent",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateBD",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/updateBD",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"addBDInfo",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/addBD",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getBDList",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/getUserByRole",method:"get",params:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getShanghuInfo",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/getMerchant",method:"get",params:{phone:e}}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getBusinProjects",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/getAgentBusiness",method:"get",params:{params:e}}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getUserByRole",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/getUserByRole",method:"get",params:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"queryFirstAgentsByControl",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/firstAgents/queryFirstAgentsByControl",method:"get",params:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"saveAgentBusiness",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/saveAgentBusiness",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"agentManageRoleMapResourcesApi",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/roleMapResources",method:"get",params:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"agentManageListDefaultMenuApi",value:function(){var t=o()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/agentManage/listDefaultMenu",method:"get",params:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}();e.a=f},u938:function(t,e,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("ls82"),a)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}}]);