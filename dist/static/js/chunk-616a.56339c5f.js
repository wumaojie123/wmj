(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-616a"],{MFTS:function(e,t,a){},h0cu:function(e,t,a){"use strict";var n=a("MFTS");a.n(n).a},"mG/D":function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return i});var n=[{value:"CDZ",label:"充电桩"}],r={CDZ:"充电桩"},i={0:"无",1:"脉冲",2:"串口"}},miVi:function(e,t,a){"use strict";a.r(t);var n=a("14Xm"),r=a.n(n),i=a("D3Ub"),s=a.n(i),l=a("qpgI"),o=a("mG/D"),c={data:function(){return{queryParams:{equipmentType:"CDZ",equipmentValue:"",registered:0},equipmentTypesArr:o.b,list:[],colums:[{key:"equipmentTypeText",label:"设备类型"},{key:"value",label:"设备编号"},{key:"communicationText",label:"通信方式"},{key:"chargePattern",label:"计费方式"},{key:"sourceText",label:"设备来源"},{key:"updated",label:"操作时间"}],pageInfo:{total:0,pageSize:10,currPage:1},selectList:[],showPatternBoxFlag:!1,arrCDZDiaologContent:{TIME:"充电时长计算充电费用，如1元240分钟",ELEC:"电量消耗计算充电费用，如1元1度"},arrCDZChargePattern:[],tempChargePattern:"",selectedPattern:"",tempEquipmentArr:[]}},created:function(){this.queryList()},methods:{getChargePatternText:function(e){var t="";return(e=e||[]).forEach(function(e){t+=e.description+","}),""!==t&&(t=t.substr(0,t.length-1)),t},queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return s()(r.a.mark(function a(){var n,i,s,c;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:for(i in e.selectList=[],e.list=[],e.pageInfo.currPage=t,n={pageSize:e.pageInfo.pageSize,pageIndex:e.pageInfo.currPage},e.queryParams)n[i]=e.queryParams[i];return a.next=7,Object(l.m)(n);case 7:0===(s=a.sent).result&&(e.listLoading=!1,s.data?(c=(c=s.data.items||[]).map(function(t){t.sourceText=1===t.source?"商家解绑":0===t.source?"平台导入":"",t.communicationText=o.a[t.communication];var a=o.c;return t.equipmentTypeText=a[t.equipmentType],2===t.communication?t.chargePattern=e.getChargePatternText(t.billingModel):t.chargePattern="--",t}),e.list=c,e.pageInfo.total=s.data.total||0):e.pageInfo.total=0);case 9:case"end":return a.stop()}},a,e)}))()},handleSelectionChange:function(e){this.selectList=e},getTemplateRow:function(e){this.check=e,this.selectList=[this.list[e]]},handleAngent:function(e){1===this.selectList.length||(this.selectList.length>1?this.$message({message:"只能编辑一条代理商信息",type:"error"}):this.$message({message:"请选中一条代理商信息！！",type:"error"}))},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.total=0,this.queryList(1)},handleCurrentChange:function(e){this.queryList(e)},filerQueryList:function(){this.pageInfo.total=0,this.queryList(this.pageInfo.currPage)},setChargePattern:function(e){this.tempChargePattern=e},sureChargePattern:function(){this.showPatternBoxFlag=!1,this.$router.push({path:"/register",query:{deviceType:this.queryParams.equipmentType,equipmentArr:this.tempEquipmentArr,communication:2,chargePattern:this.tempChargePattern}})},handleRegister:function(){if(0!==this.selectList.length){var e=[],t=[];if(this.selectList.forEach(function(a){e.push(a.value),t.push(a.communication)}),t.some(function(e){return e!==t[0]}))this.$message({message:"只能选择同一种通信方式的设备进行注册",type:"error"});else{if(2===t[0]){var a=this.checkChargePattern();if(-1!==a.TIME&&-1!==a.ELEC)return void this.$message({message:"只能选择相同计费模式设备进行注册",type:"error"});-1===a.TIME&&-1===a.ELEC?this.selectedPattern="TWO":this.selectedPattern=-1===a.TIME?"ELEC":"TIME"}"TWO"===this.selectedPattern?(this.showPatternBoxFlag=!0,this.tempEquipmentArr=e):this.$router.push({path:"/register",query:{deviceType:this.queryParams.equipmentType,equipmentArr:e,communication:t[0],chargePattern:this.selectedPattern}})}}else this.$message({message:"请选择要注册的设备",type:"error"})},checkChargePattern:function(){var e=this,t={TIME:-1,ELEC:-1,TWO:-1};return this.arrCDZChargePattern=[],this.selectList.forEach(function(a){a.billingModel.length>1&&(t.TWO=0,0===e.arrCDZChargePattern.length&&a.billingModel.forEach(function(t){e.arrCDZChargePattern.push(t.name)})),1===a.billingModel.length&&t[a.billingModel[0].name]++}),t}}},u=(a("h0cu"),a("KHd+")),h=Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-area"},[a("el-form",{staticStyle:{"margin-bottom":"20px"},attrs:{inline:!0,"label-width":"90px","label-position":"right"}},[a("el-form-item",{attrs:{label:"设备类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryParams.equipmentType,callback:function(t){e.$set(e.queryParams,"equipmentType",t)},expression:"queryParams.equipmentType"}},e._l(e.equipmentTypesArr,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"设备编号"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"输入多台设备时用,隔开",maxlength:"100",clearable:""},model:{value:e.queryParams.equipmentValue,callback:function(t){e.$set(e.queryParams,"equipmentValue",t)},expression:"queryParams.equipmentValue"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.filerQueryList}},[e._v("查询")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.handleRegister}},[e._v("设备注册")]),e._v(" "),a("router-link",{attrs:{to:{path:"/registerRecord"}}},[a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"success"}},[e._v("设备注册记录")])],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.colums,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})],2),e._v(" "),a("div",{staticStyle:{"padding-bottom":"10px","font-size":"16px"}},[e._v("合计设备数："+e._s(e.pageInfo.total)+"台")]),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showPatternBoxFlag,expression:"showPatternBoxFlag"}],staticClass:"s-charge-pattern-panel"},[a("div",{staticClass:"s-charge-pattern-box"},[a("div",{staticClass:"title"},[e._v("请选择服务套餐计费模式")]),e._v(" "),a("div",{staticClass:"s-sel-charge-pattern"},[e._l(e.arrCDZChargePattern,function(t,n){return[a("div",{key:n,class:["charge-pattern-box"," time-pattern",{active:t==e.tempChargePattern}],on:{click:function(a){e.setChargePattern(t)}}},[a("div",{staticClass:"icon"}),e._v(" "),a("div",{staticClass:"pattern-content"},[e._v("\n              "+e._s("ELEC"===t?"按电量计费":"按时长计费")+"\n              "),a("p",[e._v(e._s(e.arrCDZDiaologContent[t]))])])])]})],2),e._v(" "),a("div",{staticClass:"btn-panel"},[a("div",{staticClass:"no-scroll cancel-btn",on:{click:function(t){e.showPatternBoxFlag=!1}}},[e._v("取消")]),e._v(" "),a("div",{staticClass:"no-scroll sure-btn",on:{click:e.sureChargePattern}},[e._v("确定")])])])])],1)},[],!1,null,"7f6a7969",null);h.options.__file="deviceUnregister.vue";t.default=h.exports}}]);