(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-39ff","chunk-6e67","chunk-3832"],{"8t42":function(e,t,a){"use strict";a.r(t);var n={name:"CardWrapper",props:{label:{type:String,default:""}}},i=(a("jYiL"),a("KHd+")),s=Object(i.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-wrapper"},[t("h3",[this._v("\n    "+this._s(this.label)+"\n    "),this._t("sub-title")],2),this._v(" "),t("div",{staticClass:"content-wrapper"},[this._t("default")],2)])},[],!1,null,"240676eb",null);s.options.__file="index.vue";t.default=s.exports},"9ssn":function(e,t,a){},"Efp+":function(e,t,a){"use strict";a.r(t);var n=a("QbLZ"),i=a.n(n),s=a("7Qib"),r=a("s6oT"),c=a("L2JU"),l={name:"AnalysisPicker",props:{layout:{type:String,default:"date, merchant, equipmentType, area, export"}},data:function(){return{cascaderProps:{value:"value",label:"text"},agentId:-1,agent:!0,selectDates:[],district:-1,districtLevel:1,areaInfo:[-1],lyyEquipmentTypeId:-1,equipmentTypeOptions:[],layoutInfo:{isShowDate:!1,isShowMerchant:!1,isShowArea:!1,isShowEquipmentType:!1,isShowExport:!1},curQuicklySelect:-30,quicklySelectOptions:[{value:-1,label:"昨天"},{value:-7,label:"最近7天"},{value:-30,label:"最近30天"}],pickerOptions:{disabledDate:function(e){var t=new Date((new Date).toDateString());return Object(s.e)(e)>Object(s.e)(t)-86400}}}},computed:i()({},Object(c.b)(["areaList","agentMerchantList"])),created:function(){this.initLayout(),this.initSelectorData()},mounted:function(){this.emitPickerChange()},methods:{initLayout:function(){var e=this.layout.split(",");(e=e.map(function(e){return e.replace(/(^\s*)|(\s*$)/g,"")})).indexOf("date")>-1&&(this.toggleQuicklySelect(-30),this.layoutInfo.isShowDate=!0),e.indexOf("merchant")>-1&&(this.layoutInfo.isShowMerchant=!0),e.indexOf("equipmentType")>-1&&(this.layoutInfo.isShowEquipmentType=!0),e.indexOf("area")>-1&&(this.layoutInfo.isShowArea=!0),e.indexOf("export")>-1&&(this.layoutInfo.isShowExport=!0)},initSelectorData:function(){if(this.layoutInfo.isShowEquipmentType){this.getEquipmentType({agentUser:-1,agent:!0})}this.layoutInfo.isShowArea&&this.$store.dispatch("GetAreaList"),this.layoutInfo.isShowMerchant&&this.$store.dispatch("GetAgentAndMerchant")},getEquipmentType:function(e){var t=this;Object(r.m)(e).then(function(e){0===e.result&&(t.equipmentTypeOptions=[{lyyEquipmentTypeId:-1,equipmentTypeName:"全部"}],t.equipmentTypeOptions=t.equipmentTypeOptions.concat(e.data))})},toggleQuicklySelect:function(e){var t=new Date((new Date).toDateString()),a=new Date;t.setTime(t.getTime()-864e5),a.setTime(t.getTime()+864e5*e),this.curQuicklySelect=e,this.selectDates=[Object(s.h)(a,"{y}-{m}-{d}"),Object(s.h)(t,"{y}-{m}-{d}")]},merchantChange:function(e){var t=this;this.agentMerchantList.forEach(function(a){e===a.id&&(t.agent=a.agent||!0)});var a={agentUser:e,agent:this.agent};this.getEquipmentType(a)},districtChange:function(e){this.district=e[e.length-1],this.districtLevel=e.length},emitPickerChange:function(){var e=this.getParamsData();this.$emit("change",e)},getParamsData:function(){var e={};return this.layoutInfo.isShowDate&&(e.startDate=this.selectDates[0],e.endDate=this.selectDates[1]),this.layoutInfo.isShowMerchant&&(e.agent=this.agent,e.agentId=this.agentId),this.layoutInfo.isShowEquipmentType&&(e.lyyEquipmentTypeId=this.lyyEquipmentTypeId),this.layoutInfo.isShowArea&&(e.district=this.district,e.districtLevel=this.districtLevel),e},exportDataHandle:function(){var e=this.getParamsData();this.$emit("exportFile",e)}}},o=(a("MF8a"),a("KHd+")),u=Object(o.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"analysis-picker"},[e.layoutInfo.isShowDate?a("div",{staticClass:"picker-panel"},[e._v("\n    时间：\n    "),a("ul",{staticClass:"quickly-select-list"},e._l(e.quicklySelectOptions,function(t){return a("li",{key:t.value,class:{cur:t.value===e.curQuicklySelect},on:{click:function(a){e.toggleQuicklySelect(t.value)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})),e._v(" "),a("el-date-picker",{staticClass:"picker-date-item",attrs:{"picker-options":e.pickerOptions,clearable:!1,type:"daterange",align:"center","value-format":"yyyy-MM-dd","unlink-panels":"","range-separator":"至","prefix-icon":"el-icon-time","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.selectDates,callback:function(t){e.selectDates=t},expression:"selectDates"}})],1):e._e(),e._v(" "),e.layoutInfo.isShowMerchant?a("div",{staticClass:"picker-panel"},[e._v("\n    代理/商家：\n    "),a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.merchantChange},model:{value:e.agentId,callback:function(t){e.agentId=t},expression:"agentId"}},e._l(e.agentMerchantList,function(e){return a("el-option",{key:e.id,attrs:{label:(e.name||"")+(e.phone||""),value:e.id}})}))],1):e._e(),e._v(" "),e.layoutInfo.isShowArea?a("div",{staticClass:"picker-panel"},[e._v("\n    区域：\n    "),a("el-cascader",{attrs:{options:e.areaList,"change-on-select":!0,"show-all-levels":!1,props:e.cascaderProps,placeholder:"全部",filterable:""},on:{change:e.districtChange},model:{value:e.areaInfo,callback:function(t){e.areaInfo=t},expression:"areaInfo"}})],1):e._e(),e._v(" "),e.layoutInfo.isShowEquipmentType?a("div",{staticClass:"picker-panel"},[e._v("\n    设备类型：\n    "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.lyyEquipmentTypeId,callback:function(t){e.lyyEquipmentTypeId=t},expression:"lyyEquipmentTypeId"}},e._l(e.equipmentTypeOptions,function(e){return a("el-option",{key:e.lyyEquipmentTypeId,attrs:{label:e.equipmentTypeName,value:e.lyyEquipmentTypeId}})}))],1):e._e(),e._v(" "),a("div",{staticClass:"picker-panel"},[a("el-button",{attrs:{type:"primary"},on:{click:e.emitPickerChange}},[e._v("搜索")])],1),e._v(" "),e.layoutInfo.isShowExport?a("div",{staticClass:"picker-panel"},[a("el-button",{attrs:{type:"text"},on:{click:e.exportDataHandle}},[a("i",{staticClass:"el-icon-download"}),e._v("\n      导出数据\n    ")])],1):e._e(),e._v(" "),e._t("default")],2)},[],!1,null,"72206a7e",null);u.options.__file="index.vue";t.default=u.exports},MF8a:function(e,t,a){"use strict";var n=a("tFtM");a.n(n).a},UxA6:function(e,t,a){"use strict";var n=a("jJtl");a.n(n).a},"a/iz":function(e,t,a){"use strict";a.r(t);var n=a("Efp+"),i=a("8t42"),s=a("MT78"),r=a.n(s),c=a("s6oT"),l=a("7Qib"),o=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],u=[{name:"商场",value:"Mall_Aisle"},{name:"电影院",value:"Cinema"},{name:"KTV",value:"KTV"},{name:"游艺厅",value:"Games_Hall"},{name:"酒店",value:"MALL,002"},{name:"步行街",value:"MALL,004"},{name:"4S店",value:"MALL,003"},{name:"旅游景点",value:"SCENIC_SPOT,001"},{name:"机场",value:"STATION,001"},{name:"火车站",value:"STATION,002"},{name:"汽车站",value:"STATION,003"},{name:"地铁站",value:"STATION,004"},{name:"工厂",value:"FACTORY,001"},{name:"社区",value:"COMMUNITY,001"},{name:"办公楼",value:"OFFICE,001"},{name:"医院",value:"HOSPITAL,001"},{name:"政府机构",value:"GOVERNMENT,001"},{name:"大学",value:"SCHOOL,005"},{name:"初中",value:"SCHOOL,003"},{name:"小学",value:"SCHOOL,002"},{name:"幼儿园",value:"SCHOOL,001"},{name:"培训机构",value:"SCHOOL,006"},{name:"高中&职业技术学院",value:"SCHOOL,004"},{name:"其他",value:"OTHERS,001"}],p={color:o,xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value",axisLabel:{textStyle:{color:"#333"},formatter:l.b}},legend:{data:[],itemGap:20,bottom:0,itemHeight:15,itemWidth:15},tooltip:{trigger:"axis",textStyle:{fontSize:"11",color:"#fff"}},grid:{top:30,bottom:50,left:50,right:50},series:[]},d={color:o,legend:{data:[{name:"设备数量(台)",icon:"rect"},{name:"成交金额(元)",icon:"rect"}],itemGap:20,bottom:0,itemHeight:15,itemWidth:15},grid:{top:20,left:50,right:20,bottom:50},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["商场","游艺厅","电影院","KTV","火车站","机场"]},yAxis:{type:"value",axisLabel:{textStyle:{color:"#333"},formatter:l.b}},series:[{data:[1e3,3e3,5e3,7e3,8e3,12e3],type:"bar",barMaxWidth:30,barGap:0,name:"设备数量(台)"},{data:[2e3,400,6e3,1e3,8e3,9e3],type:"bar",barMaxWidth:30,barGap:0,name:"成交金额(元)"}]},f={color:o,title:{text:"点位分布占比",left:"50%",textAlign:"center"},legend:{data:[],x:"center",bottom:20,itemHeight:15,itemWidth:15},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)",textStyle:{fontSize:"11",color:"#fff"}},series:[{name:"订单占比",type:"pie",radius:"55%",label:{show:!1},labelLine:{show:!1},data:[]}]},m={components:{AnalysisPicker:n.default,CardWrapper:i.default},data:function(){return{siteEarnTrend:null,siteInfoCharts:null,siteInfoPercentCharts:null,siteEarnTrendLoading:!1,siteInfoChartsLoading:!1,siteInfoPercentChartsLoading:!1}},methods:{pickerChange:function(e){this.getSiteEffectData(e),this.getSiteIncomeTrend(e)},getSiteEffectData:function(e){var t=this;this.siteInfoChartsLoading=!0,this.siteInfoPercentChartsLoading=!0,Object(c.u)(e).then(function(e){if(e.data&&0!==e.data.length){t.siteInfoCharts=r.a.init(t.$refs.siteInfo),t.siteInfoPercentCharts=r.a.init(t.$refs.siteInfoPercent);var a=t._siteEffctBarDataTube(e.data),n=t._siteEffctPieDataTube(e.data);d.xAxis.data=a.xAxisData,d.series[0].data=a.seriesData1,d.series[1].data=a.seriesData2,t.siteInfoCharts.setOption(d),f.legend.data=n.legendData,f.series[0].data=n.seriesData,t.siteInfoPercentCharts.setOption(f)}}).finally(function(){t.siteInfoChartsLoading=!1,t.siteInfoPercentChartsLoading=!1})},_siteEffctBarDataTube:function(e){var t=this,a=[],n=[],i=[];return e.forEach(function(e){a.push(t.searchSiteName(e.location)),n.push(e.equipmentCount),i.push(e.amount)}),{xAxisData:a,seriesData1:n,seriesData2:i}},_siteEffctPieDataTube:function(e){var t=this,a=[],n=[];return e.forEach(function(e){var i=t.searchSiteName(e.location),s={name:i,icon:"rect"};a.push(s);var r={name:i,value:e.equipmentCount};n.push(r)}),{legendData:a,seriesData:n}},getSiteIncomeTrend:function(e){var t=this;this.siteEarnTrendLoading=!0,Object(c.v)(e).then(function(e){if(e.data){t.siteEarnTrend=r.a.init(t.$refs.siteEarnTrend);var a=t._siteIncomeTrendDataTube(e.data);p.xAxis.data=a.xAxisData,p.legend.data=a.legendData,p.series=a.seriesData,t.siteEarnTrend.setOption(p)}}).finally(function(){t.siteEarnTrendLoading=!1})},_siteIncomeTrendDataTube:function(e){var t=[],a=[],n=[];for(var i in e){var s=this.searchSiteName(i)+"-成交金额(元)",r={icon:"circle"};r.name=s,t.push(r);var c=e[i],l={data:c.map(function(e){return e.amount}),name:s,type:"line"};a.push(l),n=c.map(function(e){return e.statisticsDate})}return{legendData:t,seriesData:a,xAxisData:n}},searchSiteName:function(e){var t=u.findIndex(function(t){return t.value===e});if(t>-1)return u[t].name}}},h=(a("UxA6"),a("KHd+")),v=Object(h.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("analysis-picker",{attrs:{layout:"date, merchant, equipmentType"},on:{change:e.pickerChange}}),e._v(" "),n("card-wrapper",{attrs:{label:"点位投放效果"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.siteInfoChartsLoading,expression:"siteInfoChartsLoading"}],ref:"siteInfo",staticClass:"echarts-item"},[n("div",{staticClass:"empty-panel"},[n("img",{attrs:{src:a("w7rE"),alt:""}}),e._v(" "),n("p",[e._v("暂无数据")])])])]),e._v(" "),n("el-col",{attrs:{span:12}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.siteInfoPercentChartsLoading,expression:"siteInfoPercentChartsLoading"}],ref:"siteInfoPercent",staticClass:"echarts-item"},[n("div",{staticClass:"empty-panel"},[n("img",{attrs:{src:a("w7rE"),alt:""}}),e._v(" "),n("p",[e._v("暂无数据")])])])])],1)],1),e._v(" "),n("card-wrapper",{attrs:{label:"点位收益趋势"}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.siteEarnTrendLoading,expression:"siteEarnTrendLoading"}],ref:"siteEarnTrend",staticClass:"echarts-item"})])],1)},[],!1,null,"69f88535",null);v.options.__file="index.vue";t.default=v.exports},jJtl:function(e,t,a){},jYiL:function(e,t,a){"use strict";var n=a("9ssn");a.n(n).a},tFtM:function(e,t,a){},w7rE:function(e,t){e.exports="data:image/png;base64,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"}}]);