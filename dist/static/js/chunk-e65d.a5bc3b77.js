(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e65d","chunk-6c9d","chunk-1794"],{"8t42":function(e,t,a){"use strict";a.r(t);var n={name:"CardWrapper",props:{label:{type:String,default:""}}},i=(a("pGgo"),a("ZrdR")),s=Object(i.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-wrapper"},[t("h3",[this._v("\n    "+this._s(this.label)+"\n    "),this._t("sub-title")],2),this._v(" "),t("div",{staticClass:"content-wrapper"},[this._t("default")],2)])},[],!1,null,"85ccb75e",null);s.options.__file="index.vue";t.default=s.exports},"Efp+":function(e,t,a){"use strict";a.r(t);var n=a("bS4n"),i=a.n(n),s=a("7Qib"),r=a("s6oT"),l=a("8t5x"),o={name:"AnalysisPicker",props:{layout:{type:String,default:"date, merchant, equipmentType, area, export"}},data:function(){return{cascaderProps:{value:"value",label:"text"},agentId:-1,agent:!0,selectDates:[],district:-1,districtLevel:1,areaInfo:[-1],lyyEquipmentTypeId:-1,equipmentTypeOptions:[],layoutInfo:{isShowDate:!1,isShowMerchant:!1,isShowArea:!1,isShowEquipmentType:!1,isShowExport:!1},curQuicklySelect:-30,quicklySelectOptions:[{value:-1,label:"昨天"},{value:-7,label:"最近7天"},{value:-30,label:"最近30天"}],pickerOptions:{disabledDate:function(e){var t=new Date((new Date).toDateString()),a=new Date(new Date("2019/7/1").toDateString());return Object(s.e)(e)>Object(s.e)(t)-86400||Object(s.e)(e)<Object(s.e)(a)}}}},computed:i()({},Object(l.b)(["areaList","agentMerchantList"])),created:function(){this.initLayout(),this.initSelectorData()},mounted:function(){this.emitPickerChange()},methods:{initLayout:function(){var e=this.layout.split(",").map(function(e){return e.replace(/(^\s*)|(\s*$)/g,"")});e.indexOf("date")>-1&&(this.toggleQuicklySelect(-30),this.layoutInfo.isShowDate=!0),this.layoutInfo.isShowMerchant=e.indexOf("merchant")>-1,this.layoutInfo.isShowEquipmentType=e.indexOf("equipmentType")>-1,this.layoutInfo.isShowArea=e.indexOf("area")>-1,this.layoutInfo.isShowExport=e.indexOf("export")>-1},initSelectorData:function(){if(this.layoutInfo.isShowEquipmentType){this.getEquipmentType({agentUser:-1,agent:!0})}this.layoutInfo.isShowArea&&this.$store.dispatch("GetAreaList"),this.layoutInfo.isShowMerchant&&this.$store.dispatch("GetAgentAndMerchant")},getEquipmentType:function(e){var t=this;Object(r.m)(e).then(function(e){0===e.result&&(t.equipmentTypeOptions=[{lyyEquipmentTypeId:-1,equipmentTypeName:"全部"}],t.equipmentTypeOptions=t.equipmentTypeOptions.concat(e.data),t.lyyEquipmentTypeId=-1)})},toggleQuicklySelect:function(e){var t=new Date((new Date).toDateString()),a=new Date,n=new Date(new Date("2019/7/1").toDateString());t.setTime(t.getTime()-864e5),a.setTime(t.getTime()+864e5*(e+1)),new Date(n)>new Date(a)&&(a=n),this.curQuicklySelect=e,this.selectDates=[Object(s.h)(a,"{y}-{m}-{d}"),Object(s.h)(t,"{y}-{m}-{d}")]},merchantChange:function(e){var t=this;this.agentMerchantList.forEach(function(a){e===a.id&&(t.agent=!!a.agent)});var a={agentUser:e,agent:this.agent};this.getEquipmentType(a)},districtChange:function(e){this.district=e[e.length-1],this.districtLevel=e.length},emitPickerChange:function(){var e=this.getParamsData();this.$emit("change",e)},getParamsData:function(){var e={};return this.layoutInfo.isShowDate&&(e.startDate=this.selectDates[0],e.endDate=this.selectDates[1]),this.layoutInfo.isShowMerchant&&(e.agent=this.agent,e.agentId=this.agentId),this.layoutInfo.isShowEquipmentType&&(e.lyyEquipmentTypeId=this.lyyEquipmentTypeId),this.layoutInfo.isShowArea&&(e.district=this.district,e.districtLevel=this.districtLevel),e},exportDataHandle:function(){var e=this.getParamsData();this.$emit("exportFile",e)}}},c=(a("kaNb"),a("ZrdR")),u=Object(c.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"analysis-picker"},[e.layoutInfo.isShowDate?a("div",{staticClass:"picker-panel"},[e._v("\n    时间：\n    "),a("ul",{staticClass:"quickly-select-list"},e._l(e.quicklySelectOptions,function(t){return a("li",{key:t.value,class:{cur:t.value===e.curQuicklySelect},on:{click:function(a){e.toggleQuicklySelect(t.value)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})),e._v(" "),a("el-date-picker",{staticClass:"picker-date-item",attrs:{"picker-options":e.pickerOptions,clearable:!1,type:"daterange",align:"center","value-format":"yyyy-MM-dd","unlink-panels":"","range-separator":"至","prefix-icon":"el-icon-time","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.selectDates,callback:function(t){e.selectDates=t},expression:"selectDates"}})],1):e._e(),e._v(" "),e.layoutInfo.isShowMerchant?a("div",{staticClass:"picker-panel"},[e._v("\n    代理/商家：\n    "),a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.merchantChange},model:{value:e.agentId,callback:function(t){e.agentId=t},expression:"agentId"}},[a("el-option",{key:"-1",attrs:{value:-1,label:"全部"}}),e._v(" "),e._l(e.agentMerchantList,function(e){return a("el-option",{key:e.id,attrs:{label:(e.name||"")+"("+(e.agent?"代理账号":"商家账号")+(e.phone||"")+")",value:e.id}})})],2)],1):e._e(),e._v(" "),e.layoutInfo.isShowArea?a("div",{staticClass:"picker-panel"},[e._v("\n    区域：\n    "),a("el-cascader",{attrs:{options:e.areaList,"change-on-select":!0,"show-all-levels":!1,props:e.cascaderProps,placeholder:"全部",filterable:""},on:{change:e.districtChange},model:{value:e.areaInfo,callback:function(t){e.areaInfo=t},expression:"areaInfo"}})],1):e._e(),e._v(" "),e.layoutInfo.isShowEquipmentType?a("div",{staticClass:"picker-panel"},[e._v("\n    设备类型：\n    "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.lyyEquipmentTypeId,callback:function(t){e.lyyEquipmentTypeId=t},expression:"lyyEquipmentTypeId"}},e._l(e.equipmentTypeOptions,function(e){return a("el-option",{key:e.lyyEquipmentTypeId,attrs:{label:e.equipmentTypeName,value:e.lyyEquipmentTypeId}})}))],1):e._e(),e._v(" "),a("div",{staticClass:"picker-panel"},[a("el-button",{attrs:{type:"primary"},on:{click:e.emitPickerChange}},[e._v("搜索")])],1),e._v(" "),e.layoutInfo.isShowExport?a("div",{staticClass:"picker-panel"},[a("el-button",{attrs:{type:"text"},on:{click:e.exportDataHandle}},[a("i",{staticClass:"el-icon-download"}),e._v("\n      导出数据\n    ")])],1):e._e(),e._v(" "),e._t("default")],2)},[],!1,null,"8fd1f3b0",null);u.options.__file="index.vue";t.default=u.exports},GqPQ:function(e,t,a){},JpNJ:function(e,t,a){"use strict";var n=a("y6y5");a.n(n).a},"a/iz":function(e,t,a){"use strict";a.r(t);var n=a("Efp+"),i=a("8t42"),s=a("88Rz"),r=a.n(s),l=a("s6oT"),o=a("7Qib"),c=["#5c70ea","#ff46a9","#5ce5ea","#2b75f5","#ac7cbb","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],u=["#ff0078","#0a36bf","#00879e","#008305","#abd500","#fdfb00","#fd5f00","#fdb300","#adfd00","#00fd8f","#00fdf4","#ca00fd","#fd00d6","#fd0000"],d=[{name:"商场",value:"Mall_Aisle"},{name:"电影院",value:"Cinema"},{name:"KTV",value:"KTV"},{name:"游艺厅",value:"Games_Hall"},{name:"酒店",value:"MALL,002"},{name:"步行街",value:"MALL,004"},{name:"4S店",value:"MALL,003"},{name:"旅游景点",value:"SCENIC_SPOT,001"},{name:"机场",value:"STATION,001"},{name:"火车站",value:"STATION,002"},{name:"汽车站",value:"STATION,003"},{name:"地铁站",value:"STATION,004"},{name:"工厂",value:"FACTORY,001"},{name:"社区",value:"COMMUNITY,001"},{name:"办公楼",value:"OFFICE,001"},{name:"医院",value:"HOSPITAL,001"},{name:"政府机构",value:"GOVERNMENT,001"},{name:"大学",value:"SCHOOL,005"},{name:"初中",value:"SCHOOL,003"},{name:"小学",value:"SCHOOL,002"},{name:"幼儿园",value:"SCHOOL,001"},{name:"培训机构",value:"SCHOOL,006"},{name:"高中&职业技术学院",value:"SCHOOL,004"},{name:"其他",value:"OTHERS,001"}],p={color:u,xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value",axisLabel:{textStyle:{color:"#333"},formatter:o.b},splitLine:{lineStyle:{color:"#dcdcdc"}}},legend:{data:[],itemGap:20,bottom:0,itemHeight:15,itemWidth:15,type:"scroll"},tooltip:{trigger:"axis",textStyle:{fontSize:"11",color:"#fff"}},grid:{top:30,bottom:50,left:50,right:50},series:[]},f={color:c,legend:{data:[{name:"设备数量(台)",icon:"rect"},{name:"成交金额(元)",icon:"rect"}],itemGap:20,bottom:0,itemHeight:15,itemWidth:15},grid:{top:20,left:50,right:20,bottom:50},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["商场","游艺厅","电影院","KTV","火车站","机场"]},yAxis:{type:"value",axisLabel:{textStyle:{color:"#333"},formatter:o.b}},series:[{data:[1e3,3e3,5e3,7e3,8e3,12e3],type:"bar",barMaxWidth:30,barGap:0,name:"设备数量(台)"},{data:[2e3,400,6e3,1e3,8e3,9e3],type:"bar",barMaxWidth:30,barGap:0,name:"成交金额(元)"}]},h={color:c,title:{text:"点位分布占比",left:"50%",textAlign:"center"},legend:{data:[],x:"center",bottom:20,itemHeight:15,itemWidth:15,type:"scroll"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)",textStyle:{fontSize:"11",color:"#fff"}},series:[{name:"订单占比",type:"pie",radius:"55%",label:{show:!1},labelLine:{show:!1},data:[]}]},m={components:{AnalysisPicker:n.default,CardWrapper:i.default},data:function(){return{siteEarnTrend:null,siteInfoCharts:null,siteInfoPercentCharts:null,siteEarnTrendLoading:!1,siteInfoChartsLoading:!1,siteInfoPercentChartsLoading:!1}},methods:{pickerChange:function(e){this.getSiteEffectData(e),this.getSiteIncomeTrend(e)},getSiteEffectData:function(e){var t=this;this.siteInfoChartsLoading=!0,this.siteInfoPercentChartsLoading=!0,Object(l.u)(e).then(function(e){if(e.data&&0!==e.data.length){t.siteInfoCharts=r.a.init(t.$refs.siteInfo),t.siteInfoPercentCharts=r.a.init(t.$refs.siteInfoPercent);var a=t._siteEffctBarDataTube(e.data),n=t._siteEffctPieDataTube(e.data);f.xAxis.data=a.xAxisData,f.series[0].data=a.seriesData1,f.series[1].data=a.seriesData2,t.siteInfoCharts.setOption(f),h.legend.data=n.legendData,h.series[0].data=n.seriesData,t.siteInfoPercentCharts.setOption(h)}}).finally(function(){t.siteInfoChartsLoading=!1,t.siteInfoPercentChartsLoading=!1})},_siteEffctBarDataTube:function(e){var t=this,a=[],n=[],i=[];return e.forEach(function(e){a.push(t.searchSiteName(e.location)),n.push(e.equipmentCount||0),i.push(e.amount||0)}),{xAxisData:a,seriesData1:n,seriesData2:i}},_siteEffctPieDataTube:function(e){var t=this,a=[],n=[];return e.forEach(function(e){var i=t.searchSiteName(e.location),s={name:i,icon:"rect"};a.push(s);var r={name:i,value:e.equipmentCount};n.push(r)}),{legendData:a,seriesData:n}},getSiteIncomeTrend:function(e){var t=this;this.siteEarnTrendLoading=!0,Object(l.v)(e).then(function(e){if(e.data){t.siteEarnTrend=r.a.init(t.$refs.siteEarnTrend);var a=t._siteIncomeTrendDataTube(e.data);p.xAxis.data=a.xAxisData,p.legend.data=a.legendData,p.series=a.seriesData,t.siteEarnTrend.setOption(p)}}).finally(function(){t.siteEarnTrendLoading=!1})},_siteIncomeTrendDataTube:function(e){var t=[],a=[],n=0,i=[];for(var s in e){var r=this.searchSiteName(s)+"-成交金额(元)",l={icon:"circle"};l.name=r,t.push(l);var o=e[s],c={data:o.map(function(e){return e.amount}),name:r,type:"line",areaStyle:{color:u[n],opacity:.1}};n++,a.push(c),i=o.map(function(e){return e.statisticsDate})}return{legendData:t,seriesData:a,xAxisData:i}},searchSiteName:function(e){var t=d.findIndex(function(t){return t.value===e});if(t>-1)return d[t].name}}},y=(a("JpNJ"),a("ZrdR")),v=Object(y.a)(m,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("analysis-picker",{attrs:{layout:"date, merchant, equipmentType"},on:{change:e.pickerChange}}),e._v(" "),a("card-wrapper",{attrs:{label:"昨日点位投放效果"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.siteInfoChartsLoading,expression:"siteInfoChartsLoading"}],ref:"siteInfo",staticClass:"echarts-item"},[a("div",{staticClass:"empty-panel"},[a("p",[e._v("暂无数据")])])])]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.siteInfoPercentChartsLoading,expression:"siteInfoPercentChartsLoading"}],ref:"siteInfoPercent",staticClass:"echarts-item"},[a("div",{staticClass:"empty-panel"},[a("p",[e._v("暂无数据")])])])])],1)],1),e._v(" "),a("card-wrapper",{attrs:{label:"点位收益趋势"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.siteEarnTrendLoading,expression:"siteEarnTrendLoading"}],ref:"siteEarnTrend",staticClass:"echarts-item"})])],1)},[],!1,null,"8015eafc",null);v.options.__file="index.vue";t.default=v.exports},kaNb:function(e,t,a){"use strict";var n=a("GqPQ");a.n(n).a},pGgo:function(e,t,a){"use strict";var n=a("qUul");a.n(n).a},qUul:function(e,t,a){},y6y5:function(e,t,a){}}]);