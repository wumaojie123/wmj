(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-41e0","chunk-0a44","chunk-31be","chunk-9aa8","chunk-bf26","chunk-2b92","chunk-3d69","chunk-23ea"],{"3JF0":function(t,e,a){"use strict";a.r(e);var s={filters:{numFormatFilter:function(t){return t.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,")}},props:{data:{type:Object,default:function(){}}}},i=(a("TTzy"),a("KHd+")),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"income-wrap"},[a("section",{staticClass:"right"},[a("p",{staticClass:"title"},[t._v("累积订单")]),t._v(" "),a("p",{staticClass:"price"},[t._v(t._s(t._f("numFormatFilter")(t.data.totalPayCount)))])]),t._v(" "),a("section",{staticClass:"left"},[a("p",{staticClass:"title"},[t._v("今日订单")]),t._v(" "),a("p",{staticClass:"price"},[t._v(t._s(t._f("numFormatFilter")(t.data.todayPayCount)))])])])},[],!1,null,"8cb97f78",null);n.options.__file="incomeY.vue";e.default=n.exports},"5pA2":function(t,e,a){"use strict";a.r(e);var s=a("14Xm"),i=a.n(s),n=a("D3Ub"),r=a.n(n),c=a("dZCS"),o=a("au79"),l=a("s+hE"),u=a("WiDU"),p=a("ATLP"),d=a("3JF0"),m=a("jes3"),v=a("EnMo"),f=a("t3Un");function A(t){return Object(f.a)({url:"/rest/agentTitalReport/agentTotalData",method:"get",params:t})}var h={components:{headerCom:c.default,tend:o.default,city:l.default,equipment:u.default,income:p.default,incomeY:d.default,order:m.default,china:v.default},data:function(){return{id:"",equipmentData:{offlineCount:0,onlineCount:0,totalQuipmentCount:0},incomeYData:{totalPayCount:0,todayPayCount:0},userList:[],cityTopList:[],tendList:[],incomeData:{todayOnlineIncomde:0,totalOnlineIncomde:0},eType:"",timeType:1,localTimeType:1,eTypeName:"全部设备",name:"",timer:null,equipmentList:[]}},created:function(){this.init(),this.getSHL()},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{selectEtype:function(t){var e=this;this.eType!==t.code&&(this.eType=t.code,this.eTypeName=t.equipmenttypename,this.userList=[],this.cityTopList=[],this.tendList=[],clearInterval(this.timer),this.timer=setInterval(function(){e.getCurrentOnlineCoin()},3e3),this.getData(),this.getCurrentOnlineCoin(),this.getTrendChartDatas(),this.getCityTopByDistributor())},init:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s={},Object(f.a)({url:"/agentManage/getAgent",method:"get",params:s});case 2:0===(a=e.sent).result&&(t.id=a.data.agentUserId,t.name=a.data.agentUserName,t.getData(),t.timer=setInterval(function(){t.getCurrentOnlineCoin()},3e3),t.getTrendChartDatas(),t.getCityTopByDistributor());case 4:case"end":return e.stop()}var s},e,t)}))()},getSHL:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({url:"/equipment/getEquipmentTypes",method:"get"});case 2:0===(a=e.sent).result&&(t.equipmentList=a.data);case 4:case"end":return e.stop()}},e,t)}))()},getData:function(){var t=this;return r()(i.a.mark(function e(){var a,s,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({agentUserId:t.id,equipmentTypeValue:t.eType});case 2:0===(a=e.sent).result&&(s=a.data||{},t.equipmentData=a.data.agentEquipmentCountDTO||{},n=s.agentIncomeStatisticsTotalDTO||{},t.incomeYData.totalPayCount=n.totalPayCount||0,t.incomeYData.todayPayCount=n.todayPayCount||0,t.incomeData.todayOnlineIncomde=n.todayOnlineIncomde||0,t.incomeData.totalOnlineIncomde=n.totalOnlineIncomde||0);case 4:case"end":return e.stop()}},e,t)}))()},getCurrentOnlineCoin:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s={agentUserId:t.id,equipmentTypeValue:t.eType},Object(f.a)({url:"/rest/agentTitalReport/getCurrentOnlineCoins",method:"get",params:s});case 2:0===(a=e.sent).result&&(t.userList=a.data||[]);case 4:case"end":return e.stop()}var s},e,t)}))()},handleTime:function(t){this.localTimeType=t,this.getTrendChartDatas()},getTrendChartDatas:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s={agentUserId:t.id,equipmentTypeValue:t.eType,type:t.localTimeType},Object(f.a)({url:"/rest/agentTitalReport/getTrendChartData",method:"get",params:s});case 2:0===(a=e.sent).result&&(t.timeType=t.localTimeType,t.tendList=a.data||[]);case 4:case"end":return e.stop()}var s},e,t)}))()},getCityTopByDistributor:function(){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s={agentUserId:t.id,equipmentTypeValue:t.eType},Object(f.a)({url:"/rest/agentTitalReport/getCityTopByDistributorId",method:"get",params:s});case 2:0===(a=e.sent).result&&(t.cityTopList=a.data||[]);case 4:case"end":return e.stop()}var s},e,t)}))()}}},C=(a("VTdK"),a("KHd+")),g=Object(C.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-bg"},[a("header-com",{attrs:{"e-type-name":t.eTypeName,name:t.name,"equipment-list":t.equipmentList},on:{"on-OK":t.selectEtype},model:{value:t.eType,callback:function(e){t.eType=e},expression:"eType"}}),t._v(" "),a("section",{staticClass:"wrapper"},[a("div",{staticClass:"wrapper-content"},[a("section",{staticClass:"margin-left"}),t._v(" "),a("section",{staticClass:"left"},[a("tend",{attrs:{data:t.tendList,"time-type":t.timeType},on:{"on-change-time":t.handleTime}}),t._v(" "),a("city",{staticStyle:{"margin-top":"0.09375rem"},attrs:{"data-list":t.cityTopList}})],1),t._v(" "),a("section",{staticClass:"center"},[a("div",{staticClass:"flex-wrapp"},[a("income",{staticStyle:{"margin-right":"0.052083333333333336rem"},attrs:{data:t.incomeData}}),t._v(" "),a("income-y",{attrs:{data:t.incomeYData}})],1),t._v(" "),a("china",{staticStyle:{"margin-top":"26px"},attrs:{"data-list":t.cityTopList}})],1),t._v(" "),a("section",{staticClass:"right"},[a("equipment",{attrs:{data:t.equipmentData}}),t._v(" "),a("order",{staticStyle:{"margin-top":"0.09375rem"},attrs:{list:t.userList}})],1),t._v(" "),a("section",{staticClass:"margin-left"})])])],1)},[],!1,null,"72008c2e",null);g.options.__file="data.vue";e.default=g.exports},"6XAp":function(t,e,a){"use strict";var s=a("wEDx");a.n(s).a},"8YTk":function(t,e,a){"use strict";var s=a("A/Zk");a.n(s).a},"A/Zk":function(t,e,a){},ATLP:function(t,e,a){"use strict";a.r(e);var s={filters:{numFormatFilter:function(t){return t.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,")}},props:{data:{type:Object,default:function(){}}}},i=(a("6XAp"),a("KHd+")),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"income-wrap"},[a("section",{staticClass:"left"},[a("p",{staticClass:"title"},[t._v("累积总收益(元)")]),t._v(" "),a("p",{staticClass:"price"},[t._v(t._s(t._f("numFormatFilter")(t.data.totalOnlineIncomde)))])]),t._v(" "),a("section",{staticClass:"right"},[a("p",{staticClass:"title"},[t._v("今日收益(元）")]),t._v(" "),a("p",{staticClass:"price"},[t._v(t._s(t._f("numFormatFilter")(t.data.todayOnlineIncomde.toFixed(2))))])])])},[],!1,null,"56c0e009",null);n.options.__file="income.vue";e.default=n.exports},K3tD:function(t,e,a){},OMSV:function(t,e,a){"use strict";var s=a("wI5W");a.n(s).a},QNiV:function(t,e,a){},RVYT:function(t,e,a){"use strict";var s=a("K3tD");a.n(s).a},TTzy:function(t,e,a){"use strict";var s=a("xPgy");a.n(s).a},V41C:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAgMAAADxkFD+AAAADFBMVEVHcEwo//Um//Yl//iEyoScAAAABHRSTlMAZjYio7UBmQAAAC5JREFUGNNjYGBgCA2AEQPE5P8PJMEEA2sokAQTI4W5NHRVaBSYYAiFA2QmVgAAVi5J/ShdGUIAAAAASUVORK5CYII="},VTdK:function(t,e,a){"use strict";var s=a("QNiV");a.n(s).a},WiDU:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"title"},[e("img",{staticClass:"icon-title",attrs:{src:a("wM9E")}}),this._v(" "),e("span",[this._v("设备监控")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"total"},[e("span",[this._v("设备总数")])])}],i={name:"Equipment",props:{data:{type:Object,default:function(){}}},computed:{totalStr:function(){var t=this.data.totalQuipmentCount.toString().split(""),e=t.length;if(t.length<5){for(var a=5-e,s=[],i=0;i<a;i++)s.push(0);t=s.concat(t)}return t}}},n=(a("iPk/"),a("KHd+")),r=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"equipment-wrap"},[a("div",{staticClass:"equipment-area"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("section",{staticClass:"num"},[a("div",{staticClass:"num-wrap"},t._l(t.totalStr,function(e,s){return a("span",{key:s,staticClass:"num-item"},[t._v(t._s(e))])})),t._v(" "),a("div",{staticClass:"num-status"},[a("div",{staticClass:"status-item"},[a("div",{staticClass:"item-title"},[t._v("在线设备数")]),t._v(" "),a("div",{staticClass:"staus-num"},[a("span",[t._v(t._s(t.data.onlineCount))])])]),t._v(" "),a("div",{staticClass:"status-item"},[a("div",{staticClass:"item-title"},[t._v("离线设备数")]),t._v(" "),a("div",{staticClass:"staus-num"},[a("span",[t._v(t._s(t.data.offlineCount))])])])])])])])},s,!1,null,"03a00aef",null);r.options.__file="equipment.vue";e.default=r.exports},YYC0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAABI0lEQVQ4T2NkgAKnCzdzGBgZJzH8Z2CEiVFC7zNQA5sDN8zp4u13DP//C1JiKLJeDAscL9x2Z2RgWMfA8J+LGpZgWAAy1OnCTTMGRqaNDP//S1BoydN9BmoyKEEEM9Dt4g3FP/+ZNjMwMGiTYwkjA8OFv4yMvgf0VZ9gtQAkaHPpoSDb/5+rGf4zOJNkCSPj9p/sf8OPamh8hunDmWJCr1xhe/uHbSYDA0MCkZbMEL6lmrM6jPEvsnqCSdLpwq0aBkaGJpzJl5HxHwPD//J9+mo92BxC0AKQJsdLt6IY/zPMY/jPwI5qCOP3/4z/Y/frq63F5UuiLACnsIu3jRj+/29kYGAwY2BgYGdgZDjIyPSvdq+uxiV8QUi0BUTGA4YymlsAAK/xTw1uxn9NAAAAAElFTkSuQmCC"},ZRgJ:function(t,e,a){"use strict";var s=a("sU8/");a.n(s).a},au79:function(t,e,a){"use strict";a.r(e);a("gDS+");var s=a("MT78"),i=a.n(s),n={props:{data:{type:Array,default:function(){return[]}},timeType:{type:Number,default:1}},data:function(){return{type:"1",localData:this.data,dateList:[],incomeList:[],orderList:[]}},watch:{data:function(t){var e=[],a=[],s=[];this.data.map(function(t){e.push(t.statisticsDate),s.push(t.dayPayCount),a.push(t.dayOnlineIncomde)}),this.dateList=e,this.incomeList=a,this.orderList=s,this.initData(this.dateList,this.orderList),this.localData=t},timeType:function(t){var e=[],a=[],s=[];this.localData.map(function(t){e.push(t.statisticsDate),s.push(t.dayPayCount),a.push(t.dayOnlineIncomde)}),"1"===this.type?this.initData(e,s):this.initData(e,a)}},methods:{handleTime:function(t){this.$emit("on-change-time",t)},handleType:function(t){this.type=t,"1"===t?this.initData(this.dateList,this.orderList):this.initData(this.dateList,this.incomeList)},initData:function(t,e){var a=i.a.init(document.querySelector(".echart")),s={grid:{top:"5%",left:"10%",right:"10%",bottom:"43",containLabel:!0},tooltip:{trigger:"axis"},xAxis:[{type:"category",boundaryGap:!1,data:t,axisTick:{alignWithLabel:!0,show:!1},axisPointer:{type:"shadow"},axisLabel:{show:!0,textStyle:{color:"#44CFD9"}},axisLine:{lineStyle:{width:2,color:"#44CFD9"}}}],yAxis:[{type:"value",splitNumber:"4",min:0,axisTick:{show:!1},axisLabel:{show:!0,color:"#44CFD9",textStyle:{color:"#44CFD9"}},axisLine:{show:!0,lineStyle:{width:2,color:"#44CFD9"}},splitLine:{show:!1,lineStyle:{color:"#44CFD9",type:"dashed"}}}],series:[{name:"1"===this.type?"订单数(笔)":"营业额(元)",type:"line",stack:"总量",data:e,areaStyle:{normal:{color:new i.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(22,236,236,0.1)"},{offset:.8,color:"rgba(22,236,236,0.08)"}],!1),shadowColor:"#44CFD9",shadowBlur:10}},itemStyle:{normal:{color:"#16ECEC",borderColor:"#16ECEC",borderWidth:4}}}]};a.setOption(s)}}},r=(a("ZRgJ"),a("KHd+")),c=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"tend-wrapper"},[a("div",{staticClass:"title"},[a("div",{staticClass:"left"},[a("span",{class:{select:"1"===t.type},on:{click:function(e){t.handleType("1")}}},[t._v("订单趋势")]),t._v(" "),a("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),a("span",{class:{select:"2"===t.type},on:{click:function(e){t.handleType("2")}}},[t._v("营业额趋势")])]),t._v(" "),a("div",{staticClass:"right"},[a("span",{staticClass:"default default_left",class:{select:1===t.timeType},on:{click:function(e){t.handleTime(1)}}},[t._v("近1月")]),t._v(" "),a("span",{staticClass:"default default_right",class:{select:2===t.timeType},on:{click:function(e){t.handleTime(2)}}},[t._v("近半年")])])]),t._v(" "),a("section",{staticClass:"echart"})])},[],!1,null,"fe6084e8",null);c.options.__file="tend.vue";e.default=c.exports},dZCS:function(t,e,a){"use strict";a.r(e);var s={props:{value:{type:String,default:""},eTypeName:{type:String,default:""},name:{type:String,default:""},equipmentList:{type:Array,default:function(){return[]}}},data:function(){return{visible:!1,now:Date.now()}},computed:{localEquipmentList:function(){return[{equipmenttypename:"全部设备",code:""}].concat(this.equipmentList)}},methods:{handleLogout:function(){this.$store.dispatch("LogOut").then(function(){location.reload()}).catch(function(t){})},handleItem:function(t){this.$emit("on-OK",t)},dateFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss",a=void 0;if("[object Date]"===Object.prototype.toString.call(t))a=t;else if("string"==typeof t)a=new Date(parseInt(t,10));else{if("number"!=typeof t)throw TypeError("参数类型错误");a=new Date(t)}var s={"M+":a.getMonth()+1,"d+":a.getDate(),"H+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds()};for(var i in a=/(y+)/.test(e)?e.replace(RegExp.$1,a.getFullYear()).substr(4-RegExp.$1.length):e,s)new RegExp("("+i+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?s[i]:("00"+s[i]).substr((""+s[i]).length)));return a}}},i=(a("OMSV"),a("KHd+")),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-wrapper"},[s("span",{staticClass:"time"},[t._v("更新时间："+t._s(t.dateFormat(t.now)))]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.name)+"运维管理平台")]),t._v(" "),s("img",{staticClass:"header-bg",attrs:{src:a("f1wE")}}),t._v(" "),s("div",{staticClass:"icon-wrapper"},[s("div",{staticClass:"logout-wrap all-equipment",on:{click:function(e){t.visible=!t.visible}}},[s("img",{staticClass:"logout",attrs:{src:a("oHYt")}}),t._v(" "),s("span",[t._v(t._s(t.eTypeName))]),t._v(" "),s("img",{staticClass:"down",attrs:{src:a("YYC0")}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"item-wrap"},[s("div",{staticClass:"bg-mask"}),t._v(" "),s("div",{staticClass:"item-content-wrap"},t._l(t.localEquipmentList,function(e,a){return s("div",{key:a,staticClass:"item",class:{select:t.value===e.code},on:{click:function(a){t.handleItem(e)}}},[t._v(t._s(e.equipmenttypename))])}))])]),t._v(" "),s("div",{staticClass:"logout-wrap",on:{click:t.handleLogout}},[s("img",{staticClass:"logout",attrs:{src:a("pds5")}}),t._v(" "),s("span",[t._v("退出")])])])])},[],!1,null,"3a14f87a",null);n.options.__file="header.vue";e.default=n.exports},f1wE:function(t,e,a){t.exports=a.p+"static/img/header-bg.c69da34.png"},"iPk/":function(t,e,a){"use strict";var s=a("wVbN");a.n(s).a},jes3:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-wrapper"},[e("img",{staticClass:"order-icon",attrs:{src:a("V41C")}}),this._v(" "),e("p",{staticClass:"order-title"},[this._v("实时订单信息")])])}],i={name:"",props:{list:{type:Array,default:function(){return[]}}}},n=(a("RVYT"),a("KHd+")),r=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"order-wrapper"},[t._m(0),t._v(" "),a("div",{staticClass:"content-wrapper"},t._l(t.list,function(e,s){return a("div",{key:s,staticClass:"item"},[e.headImg?a("img",{staticClass:"header-img",attrs:{src:e.headImg}}):t._e(),t._v(" "),a("p",{staticClass:"order-info"},[t._v(t._s(e.createTime)+"    "),a("span",{staticClass:"user-name"},[t._v(t._s(e.userName))]),t._v("    启动"+t._s(e.equipmentTypeName))])])}))])},s,!1,null,"71cae35f",null);r.options.__file="order.vue";e.default=r.exports},oHYt:function(t,e){t.exports="data:image/png;base64,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"},pds5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAACGElEQVRYR+3ZTUvcQBgH8P+z8VhEvAq9uMmeSiJ6LWzTz+DrRVp6aGFbRCkqpXgppYiIiIi6ntS21M/gJh68FhI8dbM99N4eehcfiXR12U42u+bNgex1NjO//Wcy80yWINmHJPOCTKfOSaML4McnRuksjnFysCjFPOE45lanPhJPuHChDJyMDf9N+ofcpX/hQ5eDA6I0z71h65H6s5ekM0v4qftjlpn2CajUDG23W3QmYNOpPwOoCrACAjOoYuvqdjfo1MFPHO85EapgLtwACQzmN5ZR2gpDpw423foxGOP/wa6Txpyta5ud0KmDy7bdVxgc+hKEBmje0tWNIHTqYB8yfszKn5L3VYgGwKAF21DXRehMwE30b63xmcCTwjQJby1dW2tvywx8k7TmHQGYEqbJWKyNaKutbZmCW6bHIRjT4nlLy5ahfmq2RQKbrvcKjP6wpSisnehS8ectGIPCpInf1fTSR78tKvgXmB+GgWJqf28Z2geZwCDQSg6O6faLuolhSjjeEsADkZEEBcBLMB4k+tBFht7uegdgzCS+rEUF/9uiA9dguk8bh4+VZmsOw96r4ke68tJ0vG8AT0hTwJuu9wLgPb/oleKI5COlOoQ2U20e8wG8tgxtp9slMlIt0e0gQd8rf28UT0eLjV76yRTcCzSWAv4uA0a9Jn8DL0ow8ffDUW9b+/U5OO5EE004aWzc/Uv3T+gVuEe2FPpUh0kAAAAASUVORK5CYII="},"s+hE":function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"equipment-area"},[e("section",{staticClass:"title"},[e("img",{staticClass:"icon-title",attrs:{src:a("V41C")}}),this._v(" "),e("span",{staticClass:"order-title"},[this._v("设备城市分步TOP10")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"city-header"},[a("span",[t._v("排名")]),t._v(" "),a("span",[t._v("城市")]),t._v(" "),a("span",[t._v("设备数")]),t._v(" "),a("span",[t._v("订单数")]),t._v(" "),a("span",[t._v("营业额")])])}],i={props:{dataList:{type:Array,default:function(){return[]}}},computed:{localList:function(){return this.dataList.length<=10?this.dataList:this.dataList.slice(0,9)}}},n=(a("8YTk"),a("KHd+")),r=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"equipment-wrap"},[t._m(0),t._v(" "),a("section",{staticClass:"city-wrap"},[t._m(1),t._v(" "),a("div",{staticClass:"city-list"},t._l(t.localList,function(e,s){return a("div",{key:s,staticClass:"city-list-wrap"},[s<3?[a("span",{staticClass:"spec-num"},[a("span",[t._v(t._s(s+1))])]),t._v(" "),a("span",{staticClass:"list-num list-num-top"},[t._v(t._s(e.cityName))]),t._v(" "),a("span",{staticClass:"list-num list-num-top"},[t._v(t._s(e.equipmentCount))]),t._v(" "),a("span",{staticClass:"list-num list-num-top"},[t._v(t._s(e.payCount))]),t._v(" "),a("span",{staticClass:"list-num list-num-top"},[t._v(t._s(e.onlineIncomde))])]:t._e(),t._v(" "),s>=3?[a("span",{staticClass:"list-num"},[t._v(t._s(s+1))]),t._v(" "),a("span",{staticClass:"list-num"},[t._v(t._s(e.cityName))]),t._v(" "),a("span",{staticClass:"list-num"},[t._v(t._s(e.equipmentCount))]),t._v(" "),a("span",{staticClass:"list-num"},[t._v(t._s(e.payCount))]),t._v(" "),a("span",{staticClass:"list-num"},[t._v(t._s(e.onlineIncomde))])]:t._e()],2)}))])])},s,!1,null,"0ef260a6",null);r.options.__file="city.vue";e.default=r.exports},"sU8/":function(t,e,a){},wEDx:function(t,e,a){},wI5W:function(t,e,a){},wM9E:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0BAMAAAA3VgbYAAAALVBMVEVHcEwAtP8AtP8Asv8AtP8AtP8AtP8AtP8AtP8Atf8Atf8As/8AtP8AtP8AtP9x+CvUAAAADnRSTlMA6WQM2Kb7KcFWkBSEOtOdh0EAAAELSURBVDjLY2AYQmDjOyAQxip1DyT1FquUHkjqEVapdSCpN1il4kBST7FK+YGknqCLNi5nYCgFybx7BmRViSJkmN69a9qT9w4id1rj3bsJcCnDd2hAGNVtyADuTvY8dKlnBVApjncYUg1QqXkYUu9eQqXkoHyZ23sPQplPkP0KDAgDBgbmOAj7BVTKFMJdAGKzQtjBMCeqIcxgBhuRBPcXux/CZlDUPClAhBTIjckQ5j4k98GUOkCYjGjxiUcKt4EYzrjAgOL4FGyOx+NlLAH1BHfwPiQcKZhR+a6BcALATDaviElsGElUARFSgaCEDZZ7Fg5M2BLEZQdCmegcqtuIzLB4srkh7sJhkAIAn7CjvJZ6olgAAAAASUVORK5CYII="},wVbN:function(t,e,a){},xPgy:function(t,e,a){}}]);