(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5cd2","chunk-6e67","chunk-3832","chunk-34d1","chunk-421b"],{"03DC":function(t,e,i){"use strict";var n=i("AIHX");i.n(n).a},"5kFi":function(t,e,i){"use strict";var n=i("mikP");i.n(n).a},"8t42":function(t,e,i){"use strict";i.r(e);var n={name:"CardWrapper",props:{label:{type:String,default:""}}},a=(i("jYiL"),i("KHd+")),s=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-wrapper"},[e("h3",[this._v("\n    "+this._s(this.label)+"\n    "),this._t("sub-title")],2),this._v(" "),e("div",{staticClass:"content-wrapper"},[this._t("default")],2)])},[],!1,null,"240676eb",null);s.options.__file="index.vue";e.default=s.exports},"9ssn":function(t,e,i){},AIHX:function(t,e,i){},CS5N:function(t,e,i){"use strict";var n=i("cUL+");i.n(n).a},"Efp+":function(t,e,i){"use strict";i.r(e);var n=i("QbLZ"),a=i.n(n),s=i("7Qib"),o=i("s6oT"),l=i("L2JU"),c={name:"AnalysisPicker",props:{layout:{type:String,default:"date, merchant, equipmentType, area, export"}},data:function(){return{cascaderProps:{value:"value",label:"text"},agentId:-1,agent:!0,selectDates:[],district:-1,districtLevel:1,areaInfo:[-1],lyyEquipmentTypeId:-1,equipmentTypeOptions:[],layoutInfo:{isShowDate:!1,isShowMerchant:!1,isShowArea:!1,isShowEquipmentType:!1,isShowExport:!1},curQuicklySelect:-30,quicklySelectOptions:[{value:-1,label:"昨天"},{value:-7,label:"最近7天"},{value:-30,label:"最近30天"}],pickerOptions:{disabledDate:function(t){var e=new Date((new Date).toDateString());return Object(s.e)(t)>Object(s.e)(e)-86400}}}},computed:a()({},Object(l.b)(["areaList","agentMerchantList"])),created:function(){this.initLayout(),this.initSelectorData()},mounted:function(){this.emitPickerChange()},methods:{initLayout:function(){var t=this.layout.split(",");(t=t.map(function(t){return t.replace(/(^\s*)|(\s*$)/g,"")})).indexOf("date")>-1&&(this.toggleQuicklySelect(-30),this.layoutInfo.isShowDate=!0),t.indexOf("merchant")>-1&&(this.layoutInfo.isShowMerchant=!0),t.indexOf("equipmentType")>-1&&(this.layoutInfo.isShowEquipmentType=!0),t.indexOf("area")>-1&&(this.layoutInfo.isShowArea=!0),t.indexOf("export")>-1&&(this.layoutInfo.isShowExport=!0)},initSelectorData:function(){if(this.layoutInfo.isShowEquipmentType){this.getEquipmentType({agentUser:-1,agent:!0})}this.layoutInfo.isShowArea&&this.$store.dispatch("GetAreaList"),this.layoutInfo.isShowMerchant&&this.$store.dispatch("GetAgentAndMerchant")},getEquipmentType:function(t){var e=this;Object(o.m)(t).then(function(t){0===t.result&&(e.equipmentTypeOptions=[{lyyEquipmentTypeId:-1,equipmentTypeName:"全部"}],e.equipmentTypeOptions=e.equipmentTypeOptions.concat(t.data))})},toggleQuicklySelect:function(t){var e=new Date((new Date).toDateString()),i=new Date;e.setTime(e.getTime()-864e5),i.setTime(e.getTime()+864e5*t),this.curQuicklySelect=t,this.selectDates=[Object(s.h)(i,"{y}-{m}-{d}"),Object(s.h)(e,"{y}-{m}-{d}")]},merchantChange:function(t){var e=this;this.agentMerchantList.forEach(function(i){t===i.id&&(e.agent=i.agent||!0)});var i={agentUser:t,agent:this.agent};this.getEquipmentType(i)},districtChange:function(t){this.district=t[t.length-1],this.districtLevel=t.length},emitPickerChange:function(){var t=this.getParamsData();this.$emit("change",t)},getParamsData:function(){var t={};return this.layoutInfo.isShowDate&&(t.startDate=this.selectDates[0],t.endDate=this.selectDates[1]),this.layoutInfo.isShowMerchant&&(t.agent=this.agent,t.agentId=this.agentId),this.layoutInfo.isShowEquipmentType&&(t.lyyEquipmentTypeId=this.lyyEquipmentTypeId),this.layoutInfo.isShowArea&&(t.district=this.district,t.districtLevel=this.districtLevel),t},exportDataHandle:function(){var t=this.getParamsData();this.$emit("exportFile",t)}}},r=(i("MF8a"),i("KHd+")),p=Object(r.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"analysis-picker"},[t.layoutInfo.isShowDate?i("div",{staticClass:"picker-panel"},[t._v("\n    时间：\n    "),i("ul",{staticClass:"quickly-select-list"},t._l(t.quicklySelectOptions,function(e){return i("li",{key:e.value,class:{cur:e.value===t.curQuicklySelect},on:{click:function(i){t.toggleQuicklySelect(e.value)}}},[t._v("\n        "+t._s(e.label)+"\n      ")])})),t._v(" "),i("el-date-picker",{staticClass:"picker-date-item",attrs:{"picker-options":t.pickerOptions,clearable:!1,type:"daterange",align:"center","value-format":"yyyy-MM-dd","unlink-panels":"","range-separator":"至","prefix-icon":"el-icon-time","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:t.selectDates,callback:function(e){t.selectDates=e},expression:"selectDates"}})],1):t._e(),t._v(" "),t.layoutInfo.isShowMerchant?i("div",{staticClass:"picker-panel"},[t._v("\n    代理/商家：\n    "),i("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:t.merchantChange},model:{value:t.agentId,callback:function(e){t.agentId=e},expression:"agentId"}},t._l(t.agentMerchantList,function(t){return i("el-option",{key:t.id,attrs:{label:(t.name||"")+(t.phone||""),value:t.id}})}))],1):t._e(),t._v(" "),t.layoutInfo.isShowArea?i("div",{staticClass:"picker-panel"},[t._v("\n    区域：\n    "),i("el-cascader",{attrs:{options:t.areaList,"change-on-select":!0,"show-all-levels":!1,props:t.cascaderProps,placeholder:"全部",filterable:""},on:{change:t.districtChange},model:{value:t.areaInfo,callback:function(e){t.areaInfo=e},expression:"areaInfo"}})],1):t._e(),t._v(" "),t.layoutInfo.isShowEquipmentType?i("div",{staticClass:"picker-panel"},[t._v("\n    设备类型：\n    "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.lyyEquipmentTypeId,callback:function(e){t.lyyEquipmentTypeId=e},expression:"lyyEquipmentTypeId"}},t._l(t.equipmentTypeOptions,function(t){return i("el-option",{key:t.lyyEquipmentTypeId,attrs:{label:t.equipmentTypeName,value:t.lyyEquipmentTypeId}})}))],1):t._e(),t._v(" "),i("div",{staticClass:"picker-panel"},[i("el-button",{attrs:{type:"primary"},on:{click:t.emitPickerChange}},[t._v("搜索")])],1),t._v(" "),t.layoutInfo.isShowExport?i("div",{staticClass:"picker-panel"},[i("el-button",{attrs:{type:"text"},on:{click:t.exportDataHandle}},[i("i",{staticClass:"el-icon-download"}),t._v("\n      导出数据\n    ")])],1):t._e(),t._v(" "),t._t("default")],2)},[],!1,null,"72206a7e",null);p.options.__file="index.vue";e.default=p.exports},M3to:function(t,e,i){"use strict";i.r(e);var n={name:"ColumnItem",components:{ExplainModal:i("hddk").default},props:{itemList:{type:Array,default:function(){return[]}},showTipsIcon:{type:Boolean,default:function(){return!1}}},data:function(){return{tooltipsVisible:!1,tooltipsInfo:{title:"说明",content:""}}},methods:{showTooltip:function(t){this.tooltipsVisible=!0,this.tooltipsInfo={content:t}},closeTooltip:function(){this.tooltipsVisible=!1,this.tooltipsInfo={title:"说明",content:""}}}},a=(i("5kFi"),i("KHd+")),s=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"parent"},[i("div",{staticClass:"column-item"},[t._l(t.itemList,function(e,n){return[i("div",{key:n,staticClass:"item"},[i("p",{staticClass:"txt"},[t._v("\n          "+t._s(e.txt)+"\n          "),t.showTipsIcon?i("span",{staticClass:"el-icon-question",on:{click:function(i){t.showTooltip(e.tips)}}}):t._e()]),t._v(" "),i("p",{staticClass:"num"},[t._v(t._s(e.count))])])]}),t._v(" "),i("explain-modal",{attrs:{visible:t.tooltipsVisible,content:t.tooltipsInfo.content,"confirm-fn":t.closeTooltip}})],2)])},[],!1,null,"4038df04",null);s.options.__file="index.vue";e.default=s.exports},MF8a:function(t,e,i){"use strict";var n=i("tFtM");i.n(n).a},TpUP:function(t,e,i){"use strict";i.r(e);var n=i("Efp+"),a=i("8t42"),s=i("M3to"),o=i("hddk"),l=i("MT78"),c=i.n(l),r=i("s6oT"),p=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],u={color:p,title:{text:"设备在线、离线占比(昨日)",left:"50%",textAlign:"center"},legend:{data:[{name:"在线",icon:"rect"},{name:"离线",icon:"rect"}],x:"center",bottom:0,itemHeight:15,itemWidth:15},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)",textStyle:{fontSize:"11",color:"#fff"}},series:[{name:"订单占比",type:"pie",radius:"55%",avoidLabelOverlap:!0,minShowLabelAngle:1,data:[{name:"在线",value:0},{name:"离线",value:0}]}]},d={color:p,title:{text:"设备类型占比",left:"50%",textAlign:"center"},legend:{data:[],x:"center",width:"80%",bottom:0,itemHeight:15,itemWidth:15,type:"scroll"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)",textStyle:{fontSize:"11",color:"#fff"}},series:[{name:"订单占比",type:"pie",radius:"55%",avoidLabelOverlap:!0,minShowLabelAngle:1,data:[]}]},f={color:p,legend:{data:[{name:"进货数量(台)",icon:"rect"},{name:"出货数量(台)",icon:"rect"}],itemGap:20,bottom:0,itemHeight:15,itemWidth:15},grid:{top:20,left:50,right:20,bottom:50},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["2019.01","2019.02","2019.03","2019.04","2019.05","2019.06"]},yAxis:{type:"value",axisLabel:{textStyle:{color:"#333"},formatter:i("7Qib").b}},series:[{data:[1e3,3e3,5e3,7e3,8e3,12e3],type:"bar",barMaxWidth:40,name:"进货数量(台)"},{data:[2e3,400,6e3,1e3,8e3,9e3],type:"bar",barMaxWidth:40,name:"出货数量(台)"}]},h={components:{AnalysisPicker:n.default,CardWrapper:a.default,ColumnItem:s.default,ExplainModal:o.default},data:function(){return{shipment:null,onlineScale:null,equipmentTypeScale:null,shipmentLoading:!1,onlineScaleLoading:!1,equipmentTypeScaleLoading:!1,typeInfoList:[{txt:"设备总数(昨日)",count:0},{txt:"在线设备数(昨日)",count:0},{txt:"离线设备数(昨日)",count:0},{txt:"设备离线率(昨日)",count:0}],shipmentInfoList:[{txt:"设备总进货量",count:0},{txt:"设备总出货量",count:0},{txt:"设备库存量",count:0}],tooltipsInfo:{tooltipsVisible:!1,content:"",title:""}}},methods:{pickerChange:function(t){this.getEquipmentStatusData(t),this.getEquipmentTypeData(t),this.getShipmentData(t),this.getEquipmentAllStorageData(t)},getEquipmentStatusData:function(t){var e=this;this.onlineScaleLoading=!0,Object(r.k)(t).then(function(t){t.data&&(e.typeInfoList[0].count=t.data.total,e.typeInfoList[1].count=t.data.onLine,e.typeInfoList[2].count=t.data.offLine,e.typeInfoList[3].count=t.data.rate+"%",e.onlineScale=c.a.init(e.$refs.onlineScale),u.series[0].data[0]={name:"在线",value:t.data.onLine},u.series[0].data[1]={name:"离线",value:t.data.offLine},e.onlineScale.setOption(u))}).finally(function(){e.onlineScaleLoading=!1})},getEquipmentTypeData:function(t){var e=this;this.equipmentTypeScaleLoading=!0,Object(r.n)(t).then(function(t){if(t.data&&0!==t.data.length){var i=e._equipmentTypeDataTube(t.data);e.equipmentTypeScale=c.a.init(e.$refs.equipmentTypeScale),d.legend.data=i.legendData,d.series[0].data=i.seriesData,e.equipmentTypeScale.setOption(d)}}).finally(function(){e.equipmentTypeScaleLoading=!1})},_equipmentTypeDataTube:function(t){var e=[],i=[];return t.forEach(function(t){e.push({name:t.equipmentTypeName,icon:"rect"}),i.push({name:t.equipmentTypeName,value:t.equipmentCount})}),{legendData:e,seriesData:i}},getShipmentData:function(t){var e=this;this.shipmentLoading=!0,Object(r.l)(t).then(function(t){var i=e._shipmentDataTube(t.data);e.shipment=c.a.init(e.$refs.shipment),f.xAxis.data=i.xaxisData,f.series[0].data=i.seriesData1,f.series[1].data=i.seriesData2,e.shipment.setOption(f)}).finally(function(){e.shipmentLoading=!1})},_shipmentDataTube:function(t){var e=[],i=[],n=[];return t.forEach(function(t){e.push(t.statisticsDate),i.push(t.storageCount),n.push(t.outCount)}),{xaxisData:e,seriesData1:i,seriesData2:n}},getEquipmentAllStorageData:function(t){var e=this;Object(r.j)(t).then(function(t){e.shipmentInfoList[0].count=t.data.storageCount,e.shipmentInfoList[1].count=t.data.outCount,e.shipmentInfoList[2].count=t.data.stock})},showTooltip:function(){this.tooltipsInfo.selfDefineClass="long-text",this.tooltipsInfo.title="温馨提示",this.tooltipsInfo.content="\n        <p class='text'>1，“设备出货量”：是指你卖给下级商家（或下级代理）的设备数量。这些已出货的设备，将显示在“设备管理 > 已转移设备”列表中。</p>\n        <p class='text'>2，“设备进货量”：是指你跟乐摇摇购买的设备数量。</p>\n        <p class='text'>3，设备库存量 =设备进货量 - 设备出货量。库存的设备将显示在“设备管理 > 待转移设备”列表中。（注意：商家解绑返回的设备，不计入库存量）</p>\n      ",this.tooltipsInfo.tooltipsVisible=!0},closeTooltip:function(){this.tooltipsInfo={tooltipsVisible:!1,title:"温馨提示",content:""}}}},m=(i("CS5N"),i("KHd+")),y=Object(m.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container"},[i("analysis-picker",{attrs:{layout:"equipmentType"},on:{change:t.pickerChange}}),t._v(" "),i("card-wrapper",{attrs:{label:"设备状况"}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("column-item",{attrs:{"item-list":t.typeInfoList}})],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.onlineScaleLoading,expression:"onlineScaleLoading"}],ref:"onlineScale",staticClass:"echarts-item"})]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.equipmentTypeScaleLoading,expression:"equipmentTypeScaleLoading"}],ref:"equipmentTypeScale",staticClass:"echarts-item"})])],1)],1),t._v(" "),i("card-wrapper",{attrs:{label:"设备进货、出货量"}},[i("template",{slot:"sub-title"},[i("i",{staticClass:"el-icon-question",on:{click:t.showTooltip}})]),t._v(" "),i("column-item",{attrs:{"item-list":t.shipmentInfoList}}),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.shipmentLoading,expression:"shipmentLoading"}],ref:"shipment",staticClass:"echarts-item"})],2),t._v(" "),i("explain-modal",{attrs:{visible:t.tooltipsInfo.tooltipsVisible,title:t.tooltipsInfo.title,content:t.tooltipsInfo.content,"self-define-class":t.tooltipsInfo.selfDefineClass,"confirm-fn":t.closeTooltip}})],1)},[],!1,null,"99da1976",null);y.options.__file="index.vue";e.default=y.exports},"cUL+":function(t,e,i){},hddk:function(t,e,i){"use strict";i.r(e);var n=void 0,a={name:"ExplainModal",props:{visible:{type:Boolean,default:!0},title:{type:String,default:function(){return"说明"}},content:{type:String,default:function(){return"“在架商品种数” 指统计时间段内，关联了设备的商品种类数量。"}},confirmBtn:{type:String,default:function(){return"我知道了"}},confirmFn:{type:Function,default:function(){n.visible=!1}},selfDefineClass:{type:String,default:""}}},s=(i("03DC"),i("KHd+")),o=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{class:"explainModal "+t.selfDefineClass,attrs:{title:t.title,visible:t.visible,width:"350px",center:""},on:{close:t.confirmFn}},[i("div",{staticClass:"dialog-content",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("span",{on:{click:t.confirmFn}},[t._v(t._s(t.confirmBtn))])])])},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports},jYiL:function(t,e,i){"use strict";var n=i("9ssn");i.n(n).a},mikP:function(t,e,i){},tFtM:function(t,e,i){}}]);