(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-803a"],{"14Xm":function(t,e,r){t.exports=r("u938")},D3Ub:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("4d7F"),a=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,r){return function n(o,i){try{var c=e[o](i),u=c.value}catch(t){return void r(t)}if(!c.done)return a.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}},EnMo:function(t,e,r){"use strict";r.r(e);var n=r("14Xm"),o=r.n(n),a=r("D3Ub"),i=r.n(a),c=r("MT78"),u=r.n(c),s=(r("MTm3"),{name:"China",props:{dataList:{type:Array,default:function(){return[]}},totalAgent:{type:Number,default:0}},data:function(){return{localList:this.dataList,echartData:[],geoCoordMap:{}}},computed:{total:function(){var t=0;return this.localList.map(function(e){t+=e.lyyDistributorCount||0}),t}},watch:{dataList:function(t){this.localList=t},localList:function(t){var e=[],r={};t.map(function(t){var n={name:t.cityName,value:t.lyyDistributorCount,equipmentCount:t.equipmentCount};r[t.cityName]=[parseFloat(t.lng),parseFloat(t.lat)],e.push(n)}),this.echartData=e,this.geoCoordMap=r,this.initDatas()}},methods:{initDatas:function(){var t=this;return i()(o.a.mark(function e(){var r,n,a,i,c,s,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=u.a.init(document.getElementById("china")),n="china",a=t.echartData,i=t.geoCoordMap,c=[],l={tooltip:{padding:0,enterable:!0,transitionDuration:1,textStyle:{color:"#000",decoration:"none"},grid:{bottom:"6%"},formatter:function(t,e){if(!(t.dataIndex<0))return'<div class="hover-bg" >\n                <p style="color:#fff;font-size:12px;">\n                  '+c[t.dataIndex].name+'</p>\n                <p style="color:#fff;font-size:12px;">\n                  投放商'+c[t.dataIndex].distributorCount+'个\n                <p style="color:#fff;font-size:12px;">\n                  共计投放设备'+c[t.dataIndex].equipmentCount+"台\n                </p>\n              </div>"}},geo:{show:!0,zoom:1.1,map:n,label:{normal:{show:!1},emphasis:{show:!1}},regions:[{name:"南海诸岛",value:0,itemStyle:{normal:{opacity:0,label:{show:!1}}}}],roam:!1,itemStyle:{normal:{areaColor:"#023677",borderColor:"#1180c7"},emphasis:{areaColor:"#4499d0"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:(s=function(t){for(var e=[],r=0;r<t.length;r++){var n=i[t[r].name];n&&e.push({name:t[r].name,distributorCount:t[r].value,equipmentCount:t[r].equipmentCount,value:n.concat(t[r].value)})}return c=e,e})(a),symbolSize:function(t){return t[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#fff"}}},{type:"map",map:n,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:a},{name:"点",type:"scatter",coordinateSystem:"geo",symbolSize:function(t){return 10},zlevel:6},{name:"Top 1",type:"effectScatter",coordinateSystem:"geo",data:s(a),symbolSize:function(t){return 10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"left",show:!1}},itemStyle:{normal:{color:"#44CFD9",shadowBlur:10,shadowColor:"#44CFD9"}},zlevel:1}]},r.setOption(l);case 8:case"end":return e.stop()}},e,t)}))()},getLocationInfo:function(t){var e=this;return i()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,e)}))()}}}),l=(r("HbFy"),r("KHd+")),f=Object(l.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"china-wrap"},[r("section",{staticClass:"order-total"},[r("p",[t._v("全国投放点位分布图")]),t._v(" "),r("p",{staticStyle:{"margin-top":"18px"}},[t._v("覆盖城市\n      "),r("span",{staticStyle:{color:"#44CFD9","font-weight":"700"}},[t._v(t._s(t.localList.length))]),t._v("\n      个，共计投放商\n      "),r("span",{staticStyle:{color:"#44CFD9","font-weight":"700"}},[t._v(t._s(t.totalAgent))]),t._v("\n      个\n    ")])]),t._v(" "),r("section",{staticStyle:{width:"100%",height:"3.200416666rem",margin:"0 auto","margin-top":"0.15625rem"},attrs:{id:"china"}})])},[],!1,null,null,null);f.options.__file="china.vue";e.default=f.exports},HbFy:function(t,e,r){"use strict";var n=r("puOk");r.n(n).a},ls82:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={},y={};y[i]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==n&&o.call(g,i)&&(y=g);var w=E.prototype=L.prototype=Object.create(y);_.prototype=w.constructor=E,E.constructor=_,E[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(S.prototype),S.prototype[c]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,r,n){var o=new S(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},C(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=j,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,a=Object.create(o.prototype),i=new D(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function L(){}function _(){}function E(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,i){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(s).then(function(t){u.value=t,a(u)},i)}i(c.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},puOk:function(t,e,r){},u938:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("ls82"),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}}]);