(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c62c","chunk-0fdf"],{"2q1O":function(e,t,a){},D82y:function(e,t,a){"use strict";a.r(t);var n=a("QbLZ"),i=a.n(n),r=a("MT78"),s=a.n(r),o=(a("MTm3"),a("Efp+")),c={color:["#5c70ea","#ff46a9","#5ce5ea","#2b75f5","#ac7cbb","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],tooltip:{trigger:"item",backgroundColor:"#ffffff",extraCssText:"box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",padding:[0,0],textStyle:{color:"#666666"},formatter:function(e){var t=e.data;if(!t)return"该省份暂无数据！";var a="";return a+='<div class="hover-class"><p class="province-item">'+t.name+'</p><div class="type-list"><p class="type-item">设备量: '+t.equipmentCount+'</p><p class="type-item">订单量: '+t.payCount+'</p><p class="type-item">订单总额(元): '+t.payAmount+'</p><p class="type-item">客单价(元): '+t.unitPrice+"</p></div></div>"}},visualMap:{show:!1,bottom:40,type:"continuous",min:0,max:2e3,text:["高","低"],orient:"horizontal",itemWidth:30,itemHeight:120,inRange:{color:["#ea5cba","#e938ad","#e10f9a","#c80285"],symbolSize:[110,230]},inverse:!0},series:[{name:"设备量",type:"map",mapType:"china",data:[{name:"北京",value:1467,equipmentCount:345,payCount:765,payAmount:457,unitPrice:1094}]}]},l=a("s6oT"),p={name:"Zone",components:{AnalysisPicker:o.default},data:function(){return{width:"600px",searchFormInfo:{pageIndex:1,pageSize:20,total:10,district:-1,startDate:"2019-06-21",endDate:"2019-06-21",agentId:-1,agent:!0,lyyEquipmentTypeId:-1,orderBy:"equipment_count"},tableData:[],loading:!1}},methods:{handleSizeChange:function(e){this.searchFormInfo.pageSize=e,this.createEcharts()},handleCurrentChange:function(e){this.searchFormInfo.pageIndex=e,this.createEcharts()},createEcharts:function(){var e=this;this.loading=!0,Object(l.a)(i()({},this.searchFormInfo)).then(function(t){if(0===t.result){e.loading=!1;var a=t.data.items;e.searchFormInfo.total=t.data.total,e.tableData=a;var n={},r=[],o=a.map(function(t){var a=t.provinceName;a=a.indexOf("内蒙古")>0?"内蒙古":a.indexOf("自治区")>0?t.provinceName.slice(0,2):a.indexOf("行政区")>0?t.provinceName.slice(0,2):t.provinceName.slice(0,t.provinceName.length-1);var r=i()({name:a},t);return"equipment_count"===e.searchFormInfo.orderBy?r.value=t.equipmentCount:"pay_count"===e.searchFormInfo.orderBy?r.value=t.payCount:"pay_amount"===e.searchFormInfo.orderBy?r.value=t.payAmount:"unit_price"===e.searchFormInfo.orderBy&&(r.value=t.unitPrice),n[a]=r,r});for(var l in n)r.push(n[l]);var p={type:"map",mapType:"china",data:r=r.map(function(e){var t=e;function a(e,t){return e+t}var n=o.filter(function(t){return t.name===e.name});return t.equipmentCount=n.map(function(e){return e.equipmentCount}).reduce(a),t.payCount=n.map(function(e){return e.payCount}).reduce(a),t.payAmount=n.map(function(e){return e.payAmount}).reduce(a),t.unitPrice=n.map(function(e){return e.unitPrice}).reduce(a),t})};"equipment_count"===e.searchFormInfo.orderBy?p.name="设备量":"pay_count"===e.searchFormInfo.orderBy?p.name="订单量":"pay_amount"===e.searchFormInfo.orderBy?p.name="订单总额":"unit_price"===e.searchFormInfo.orderBy&&(p.name="客单价"),c.series[0]=p,e.$nextTick(function(){var t=e.$refs.chinaMap;e.chinaMap=s.a.init(t),e.chinaMap.setOption(c,!0)})}})},exportData:function(){Object(l.b)(this.searchFormInfo)},changeType:function(){this.createEcharts()},pickerChange:function(e){this.searchFormInfo=i()({},this.searchFormInfo,e),this.createEcharts()}}},u=(a("SsIz"),a("KHd+")),h=Object(u.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"zone-contanter"},[a("div",{staticClass:"search-form-item"},[a("analysis-picker",{attrs:{layout:"date, merchant, equipmentType, export"},on:{change:e.pickerChange,exportFile:e.exportData}})],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"mainContainer",staticClass:"main"},[a("div",{staticClass:"left-map"},[a("div",{ref:"chinaMap",staticClass:"map"}),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"select-type"},[a("span",[e._v("图例指标: ")]),e._v(" "),a("el-radio-group",{on:{change:e.changeType},model:{value:e.searchFormInfo.orderBy,callback:function(t){e.$set(e.searchFormInfo,"orderBy",t)},expression:"searchFormInfo.orderBy"}},[a("el-radio",{attrs:{label:"equipment_count"}},[e._v("设备量")]),e._v(" "),a("el-radio",{attrs:{label:"pay_count"}},[e._v("订单量")]),e._v(" "),a("el-radio",{attrs:{label:"pay_amount"}},[e._v("订单总额")]),e._v(" "),a("el-radio",{attrs:{label:"unit_price"}},[e._v("客单价")])],1)],1)]),e._v(" "),a("div",{staticClass:"right-table"},[a("el-table",{attrs:{border:!0,data:e.tableData,"header-cell-style":{backgroundColor:"#F3F3F3"},height:500,"default-sort":{prop:"equipmentCount",order:"descending"}}},[a("el-table-column",{attrs:{align:"center",label:"城市",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.provinceName+"-"+t.row.cityName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"equipmentCount",label:"设备量(台)",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"payCount",label:"订单量",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"payAmount",label:"订单总额(元)",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"unitPrice",label:"客单价(元)",sortable:""}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.searchFormInfo.pageIndex,"page-sizes":[20,50,100,200],"page-size":20,total:e.searchFormInfo.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])])},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"range-item"},[a("span",{staticClass:"high"},[e._v("高")]),e._v(" "),a("span",{staticClass:"range range4"}),e._v(" "),a("span",{staticClass:"range range3"}),e._v(" "),a("span",{staticClass:"range range2"}),e._v(" "),a("span",{staticClass:"range range1"}),e._v(" "),a("span",{staticClass:"range range0"}),e._v(" "),a("span",{staticClass:"low"},[e._v("低")])])}],!1,null,null,null);h.options.__file="index.vue";t.default=h.exports},"Efp+":function(e,t,a){"use strict";a.r(t);var n=a("QbLZ"),i=a.n(n),r=a("7Qib"),s=a("s6oT"),o=a("L2JU"),c={name:"AnalysisPicker",props:{layout:{type:String,default:"date, merchant, equipmentType, area, export"}},data:function(){return{cascaderProps:{value:"value",label:"text"},agentId:-1,agent:!0,selectDates:[],district:-1,districtLevel:1,areaInfo:[-1],lyyEquipmentTypeId:-1,equipmentTypeOptions:[],layoutInfo:{isShowDate:!1,isShowMerchant:!1,isShowArea:!1,isShowEquipmentType:!1,isShowExport:!1},curQuicklySelect:-30,quicklySelectOptions:[{value:-1,label:"昨天"},{value:-7,label:"最近7天"},{value:-30,label:"最近30天"}],pickerOptions:{disabledDate:function(e){var t=new Date((new Date).toDateString()),a=new Date(new Date("2019/7/1").toDateString());return Object(r.e)(e)>Object(r.e)(t)-86400||Object(r.e)(e)<Object(r.e)(a)}}}},computed:i()({},Object(o.b)(["areaList","agentMerchantList"])),created:function(){this.initLayout(),this.initSelectorData()},mounted:function(){this.emitPickerChange()},methods:{initLayout:function(){var e=this.layout.split(",").map(function(e){return e.replace(/(^\s*)|(\s*$)/g,"")});e.indexOf("date")>-1&&(this.toggleQuicklySelect(-30),this.layoutInfo.isShowDate=!0),this.layoutInfo.isShowMerchant=e.indexOf("merchant")>-1,this.layoutInfo.isShowEquipmentType=e.indexOf("equipmentType")>-1,this.layoutInfo.isShowArea=e.indexOf("area")>-1,this.layoutInfo.isShowExport=e.indexOf("export")>-1},initSelectorData:function(){if(this.layoutInfo.isShowEquipmentType){this.getEquipmentType({agentUser:-1,agent:!0})}this.layoutInfo.isShowArea&&this.$store.dispatch("GetAreaList"),this.layoutInfo.isShowMerchant&&this.$store.dispatch("GetAgentAndMerchant")},getEquipmentType:function(e){var t=this;Object(s.m)(e).then(function(e){0===e.result&&(t.equipmentTypeOptions=[{lyyEquipmentTypeId:-1,equipmentTypeName:"全部"}],t.equipmentTypeOptions=t.equipmentTypeOptions.concat(e.data),t.lyyEquipmentTypeId=-1)})},toggleQuicklySelect:function(e){var t=new Date((new Date).toDateString()),a=new Date,n=new Date(new Date("2019/7/1").toDateString());t.setTime(t.getTime()-864e5),a.setTime(t.getTime()+864e5*(e+1)),new Date(n)>new Date(a)&&(a=n),this.curQuicklySelect=e,this.selectDates=[Object(r.h)(a,"{y}-{m}-{d}"),Object(r.h)(t,"{y}-{m}-{d}")]},merchantChange:function(e){var t=this;this.agentMerchantList.forEach(function(a){e===a.id&&(t.agent=!!a.agent)});var a={agentUser:e,agent:this.agent};this.getEquipmentType(a)},districtChange:function(e){this.district=e[e.length-1],this.districtLevel=e.length},emitPickerChange:function(){var e=this.getParamsData();this.$emit("change",e)},getParamsData:function(){var e={};return this.layoutInfo.isShowDate&&(e.startDate=this.selectDates[0],e.endDate=this.selectDates[1]),this.layoutInfo.isShowMerchant&&(e.agent=this.agent,e.agentId=this.agentId),this.layoutInfo.isShowEquipmentType&&(e.lyyEquipmentTypeId=this.lyyEquipmentTypeId),this.layoutInfo.isShowArea&&(e.district=this.district,e.districtLevel=this.districtLevel),e},exportDataHandle:function(){var e=this.getParamsData();this.$emit("exportFile",e)}}},l=(a("X6zN"),a("KHd+")),p=Object(l.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"analysis-picker"},[e.layoutInfo.isShowDate?a("div",{staticClass:"picker-panel"},[e._v("\n    时间：\n    "),a("ul",{staticClass:"quickly-select-list"},e._l(e.quicklySelectOptions,function(t){return a("li",{key:t.value,class:{cur:t.value===e.curQuicklySelect},on:{click:function(a){e.toggleQuicklySelect(t.value)}}},[e._v("\n        "+e._s(t.label)+"\n      ")])})),e._v(" "),a("el-date-picker",{staticClass:"picker-date-item",attrs:{"picker-options":e.pickerOptions,clearable:!1,type:"daterange",align:"center","value-format":"yyyy-MM-dd","unlink-panels":"","range-separator":"至","prefix-icon":"el-icon-time","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.selectDates,callback:function(t){e.selectDates=t},expression:"selectDates"}})],1):e._e(),e._v(" "),e.layoutInfo.isShowMerchant?a("div",{staticClass:"picker-panel"},[e._v("\n    代理/商家：\n    "),a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.merchantChange},model:{value:e.agentId,callback:function(t){e.agentId=t},expression:"agentId"}},[a("el-option",{key:"-1",attrs:{value:-1,label:"全部"}}),e._v(" "),e._l(e.agentMerchantList,function(e){return a("el-option",{key:e.id,attrs:{label:(e.name||"")+"("+(e.agent?"代理账号":"商家账号")+(e.phone||"")+")",value:e.id}})})],2)],1):e._e(),e._v(" "),e.layoutInfo.isShowArea?a("div",{staticClass:"picker-panel"},[e._v("\n    区域：\n    "),a("el-cascader",{attrs:{options:e.areaList,"change-on-select":!0,"show-all-levels":!1,props:e.cascaderProps,placeholder:"全部",filterable:""},on:{change:e.districtChange},model:{value:e.areaInfo,callback:function(t){e.areaInfo=t},expression:"areaInfo"}})],1):e._e(),e._v(" "),e.layoutInfo.isShowEquipmentType?a("div",{staticClass:"picker-panel"},[e._v("\n    设备类型：\n    "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.lyyEquipmentTypeId,callback:function(t){e.lyyEquipmentTypeId=t},expression:"lyyEquipmentTypeId"}},e._l(e.equipmentTypeOptions,function(e){return a("el-option",{key:e.lyyEquipmentTypeId,attrs:{label:e.equipmentTypeName,value:e.lyyEquipmentTypeId}})}))],1):e._e(),e._v(" "),a("div",{staticClass:"picker-panel"},[a("el-button",{attrs:{type:"primary"},on:{click:e.emitPickerChange}},[e._v("搜索")])],1),e._v(" "),e.layoutInfo.isShowExport?a("div",{staticClass:"picker-panel"},[a("el-button",{attrs:{type:"text"},on:{click:e.exportDataHandle}},[a("i",{staticClass:"el-icon-download"}),e._v("\n      导出数据\n    ")])],1):e._e(),e._v(" "),e._t("default")],2)},[],!1,null,"3e613069",null);p.options.__file="index.vue";t.default=p.exports},"Q/pn":function(e,t,a){},SsIz:function(e,t,a){"use strict";var n=a("2q1O");a.n(n).a},X6zN:function(e,t,a){"use strict";var n=a("Q/pn");a.n(n).a}}]);