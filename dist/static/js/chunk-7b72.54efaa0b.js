(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7b72"],{"mG/D":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i});var r=[{value:"CDZ",label:"充电桩"}],a={CDZ:"充电桩"},i={0:"无",1:"脉冲",2:"串口"}},qpgI:function(e,t,n){"use strict";n.d(t,"u",function(){return i}),n.d(t,"n",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"h",function(){return o}),n.d(t,"e",function(){return l}),n.d(t,"v",function(){return c}),n.d(t,"g",function(){return p}),n.d(t,"m",function(){return m}),n.d(t,"k",function(){return d}),n.d(t,"l",function(){return g}),n.d(t,"a",function(){return h}),n.d(t,"c",function(){return f}),n.d(t,"i",function(){return y}),n.d(t,"q",function(){return b}),n.d(t,"t",function(){return q}),n.d(t,"r",function(){return v}),n.d(t,"s",function(){return I}),n.d(t,"d",function(){return k}),n.d(t,"f",function(){return T}),n.d(t,"j",function(){return O}),n.d(t,"p",function(){return j}),n.d(t,"o",function(){return P});var r=n("t3Un"),a=n("7Qib");function i(e){return Object(r.a)({url:"/rest/factory/unbundling",method:"post",data:e})}function u(e){return Object(r.a)({url:"/rest/factory/savaEquipmentService",method:"post",data:e})}function s(e){return Object(r.a)({url:"/rest/factory/batchRegisteredEquipment",method:"post",data:e})}function o(){return Object(r.a)({url:"/query/merchants",method:"get"})}function l(e){return Object(r.a)({url:"/rest/factory/dateleEquipmentService",method:"post",data:e})}function c(e){return Object(r.a)({url:"/rest/factory/updateEquipmentService",method:"post",data:e})}function p(e){return Object(r.a)({url:"/rest/factory/groupServiceList",method:"get",params:e})}function m(e){return Object(r.a)({url:"/rest/factory/registeredLogList",method:"get",params:e})}function d(e){return Object(r.a)({url:"/rest/factory/registeredDetailList",method:"get",params:e})}function g(e){return Object(r.a)({url:"/rest/factory/registeredList",method:"get",params:e})}function h(e){return Object(r.a)({url:"/rest/factory/agentGroupServiceList",method:"get",params:e})}function f(e){return Object(r.a)({url:"/rest/setting/lyyopen/load",method:"get",params:e})}function y(e){return Object(r.a)({url:"/rest/setting/lyyopen/query",method:"post",data:e})}function b(e){return Object(r.a)({url:"/rest/setting/setting/ty",method:"get",params:e})}function q(e){var t="/rest/setting/setting/ty"+Object(a.i)(e);return Object(r.a)({url:t,method:"post",data:e})}function v(e){return Object(r.a)({url:"/rest/setting/setting/ty",method:"get",params:e})}function I(e){return Object(r.a)({url:"/rest/setting/setting/ty",method:"post",data:e})}function k(e){return Object(r.a)({url:"/rest/setting/cxNewEquipment",method:"get",params:e})}function T(e){return Object(r.a)({url:"/rest/setting/getEquipmentParamDef",method:"get",params:e})}function O(e){return Object(r.a)({url:"/rest/setting/readNewEquipment",method:"get",params:e})}function j(e){return Object(r.a)({url:"/rest/setting/szNewEquipment",method:"get",params:e})}function P(e){var t="/rest/setting/setEquipment"+Object(a.i)(e);return Object(r.a)({url:t,method:"post"})}},zQBQ:function(e,t,n){"use strict";n.r(t);var r=n("qpgI"),a=n("mG/D"),i={data:function(){return{check:-1,queryParams:{equipmentType:"CDZ",equipmentValue:"",registered:1},list:[],deviceMapInfo:a.b,colums:[{key:"value",label:"设备编号"},{key:"equipmentTypeText",label:"设备类型"},{key:"communicationText",label:"通信方式"},{key:"equipmentParam",label:"设备参数"},{key:"groupNumber",label:"机台号"},{key:"signalText",label:"信号"},{key:"onlineText",label:"在线状态"},{key:"statusText",label:"禁用状态"},{key:"account",label:"账号"},{key:"distributor",label:"商家名称"},{key:"area",label:"区域"},{key:"registerDate",label:"注册时间"}],pageInfo:{total:0,pageSize:10,currPage:1},selectItems:[],equipmentTypesArr:a.b}},created:function(){this.queryList()},methods:{queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.selectItems=[],this.list=[],this.pageInfo.currPage=t;var n={pageSize:this.pageInfo.pageSize,pageIndex:this.pageInfo.currPage};for(var i in this.queryParams)n[i]=this.queryParams[i];Object(r.l)(n).then(function(t){if(e.listLoading=!1,t.data){var n=t.data.items||[];n=n.map(function(e){e.sourceText=1===e.source?"商家解绑":0===e.source?"平台导入":"";e.communicationText={0:"无",1:"脉冲",2:"串口"}[e.communication];var t=a.c;e.equipmentTypeText=t[e.equipmentType];e.onlineText={0:"不在线",1:"在线"}[e.online];e.statusText={disabled:"禁用","1Normal":"启用"}[e.status];return e.signalText={1:"弱",2:"中",3:"强",4:"很强"}[e.signal]||"中",e.groupNumber=e.groupNumber?e.groupNumber+"号机":"未设置",e}),e.list=n,e.pageInfo.total=t.data.total||0}else e.pageInfo.total=0})},getTemplateRow:function(e){this.check=e,this.selectItems=[this.list[e]]},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.total=0,this.queryList(1)},handleCurrentChange:function(e){this.queryList(e)},filerQueryList:function(){this.pageInfo.total=0,this.queryList(this.pageInfo.currPage)},handlePage:function(e){if(1===this.selectItems.length){var t=this.selectItems[0];if(1===e){if(0===t.online)return void this.$message({message:"设备离线",type:"error"});if(1===this.selectItems[0].isLyyOpen)return void this.$router.push({path:"/deviceParamsLyyOpen",query:{uniqueCode:t.uniqueCode}});if(this.selectItems[0].interfaceFlag)this.$router.push({path:"/deviceParamsTy",query:{uniqueCode:t.uniqueCode,loginFlag:t.loginFlag}});else{var n={value:t.value,typeValue:t.equipmentType,equipmentTypeName:t.equipmentTypeName};5===t.loginFlag||7===t.loginFlag||14===t.loginFlag||16===t.loginFlag?this.$router.push({path:"/deviceParamsDBJ",query:n}):/^(AMY)|(AMD)|(ZLJ)|(XYJ)|(CDZ)$/.test(t.equipmentType)?this.$router.push({path:"/deviceLifeParams",query:n}):this.$router.push({path:"/deviceParamsOthers",query:n})}}else if(2===e){if(0===t.online)return void this.$message({message:"设备离线",type:"error"});this.$router.push({path:"/deviceServiceEdit",query:{lyyEquipmentId:this.selectItems[0].lyyEquipmentId,equipmentType:this.queryParams.equipmentType,communication:this.selectItems[0].communication}})}else 3===e&&this.$router.push({path:"/unregister",query:{lyyEquipmentId:this.selectItems[0].lyyEquipmentId,value:this.selectItems[0].value,equipmentType:this.queryParams.equipmentType}})}else this.selectItems.length,this.$message({message:"请选择设备",type:"error"})}}},u=n("ZrdR"),s=Object(u.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-area"},[n("el-form",{staticStyle:{"margin-bottom":"20px"},attrs:{inline:!0,"label-width":"90px","label-position":"right"}},[n("el-form-item",{attrs:{label:"设备类型"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryParams.equipmentType,callback:function(t){e.$set(e.queryParams,"equipmentType",t)},expression:"queryParams.equipmentType"}},e._l(e.equipmentTypesArr,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"设备编号"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"输入设备编号",maxlength:"100",clearable:""},model:{value:e.queryParams.equipmentValue,callback:function(t){e.$set(e.queryParams,"equipmentValue",t)},expression:"queryParams.equipmentValue"}}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.filerQueryList}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlePage(1)}}},[e._v("设备参数设置")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlePage(2)}}},[e._v("设备服务套餐")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlePage(3)}}},[e._v("解绑设备")])],1)],1),e._v(" "),n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"操作",width:"55",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-radio",{attrs:{label:t.$index},nativeOn:{change:function(n){e.getTemplateRow(t.$index)}},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}},[e._v(" ")])]}}])}),e._v(" "),e._l(e.colums,function(e,t){return n("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})],2),e._v(" "),n("div",{staticStyle:{"padding-bottom":"10px","font-size":"16px"}},[e._v("合计设备数："+e._s(e.pageInfo.total)+"台")]),e._v(" "),n("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},[],!1,null,null,null);s.options.__file="deviceRegister.vue";t.default=s.exports}}]);