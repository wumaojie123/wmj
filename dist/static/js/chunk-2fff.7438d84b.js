(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2fff","chunk-60e8"],{"1oRo":function(e,t,a){"use strict";var n=a("jfIV");a.n(n).a},"3Fcl":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(){var e=null,t=null;return function(a,n){for(var i=arguments.length,l=Array(i>2?i-2:0),s=2;s<i;s++)l[s-2]=arguments[s];var o=this,r=Date.now();t&&r-t<n?(clearTimeout(e),e=setTimeout(function(){t=r,a.apply(o,l),clearTimeout(e),e=null},n)):(t=r,a.apply(o,l))}}},"3Nqk":function(e,t,a){},"9Wgr":function(e,t,a){"use strict";var n=a("3Nqk");a.n(n).a},HpJO:function(e,t,a){"use strict";function n(e){return"/agent/rest/equipment/batch/exportPayOrCode?valueStr="+e.valueStr}function i(e){return"/agent/rest/equipment/batch/exportRegisterOrCode?valueStr="+e.valueStr}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},LAzu:function(e,t,a){"use strict";var n=a("4d7F"),i=a.n(n),l={name:"SetEquipmentParas",props:{checkedrow:{type:Array,default:function(){return[]}}},data:function(){return{equipmentParaForm:{pulseWidth:"",pulseInterval:"",standbyStatus:0},rules:{pulseWidth:{message:"请输入10-1000范围内的整数",trigger:"blur",validator:function(e,t,a){parseInt(t)<10||parseInt(t)>1e3||parseInt(t)!==+t?a(new Error):a()}},pulseInterval:{message:"请输入10-1000范围内的整数",trigger:"blur",validator:function(e,t,a){parseInt(t)<10||parseInt(t)>1e3||parseInt(t)!==+t?a(new Error):a()}}}}},methods:{submitChecked:function(e){var t=this;return new i.a(function(a,n){t.$refs[e].validate(function(e){e?a():n()})})},cancel:function(e){this.$refs[e].resetFields(),this.$emit("cancel")},confirmPara:function(e){var t=this;this.submitChecked(e).then(function(a){t.$emit("confirom",t.equipmentParaForm),t.$refs[e].resetFields()}).catch(function(){})}}},s=(a("9Wgr"),a("KHd+")),o=Object(s.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"equipmentParaForm",attrs:{model:e.equipmentParaForm,rules:e.rules,"label-width":"92px"}},[a("el-form-item",[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[e._v("已勾选设备")]),e._v(" "),a("p",[e._v(" "+e._s(e.checkedrow.length)+" 个")])]),e._v(" "),a("el-form-item",{attrs:{prop:"pulseWidth"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[e._v("脉冲宽度")]),e._v(" "),a("el-input",{attrs:{type:"number",placeholder:"10~1000"},model:{value:e.equipmentParaForm.pulseWidth,callback:function(t){e.$set(e.equipmentParaForm,"pulseWidth",t)},expression:"equipmentParaForm.pulseWidth"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"pulseInterval"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[e._v("脉冲间隔")]),e._v(" "),a("el-input",{attrs:{type:"number",placeholder:"10~1000"},model:{value:e.equipmentParaForm.pulseInterval,callback:function(t){e.$set(e.equipmentParaForm,"pulseInterval",t)},expression:"equipmentParaForm.pulseInterval"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"standbyStatus"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[e._v("待机电平")]),e._v(" "),a("el-radio-group",{model:{value:e.equipmentParaForm.standbyStatus,callback:function(t){e.$set(e.equipmentParaForm,"standbyStatus",t)},expression:"equipmentParaForm.standbyStatus"}},[a("el-radio",{attrs:{label:0}},[e._v("常开")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("常闭")])],1)],1),e._v(" "),a("p",{staticStyle:{color:"#999999","font-size":"13px"}},[e._v("温馨提示：此处的参数设置，仅对 “脉冲版” 生效，对“串口版”无效。")]),e._v(" "),a("div",{staticStyle:{"padding-top":"22px","text-align":"right"}},[a("el-button",{on:{click:function(t){e.cancel("equipmentParaForm")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirmPara("equipmentParaForm")}}},[e._v("确 定")])],1)],1)},[],!1,null,"ab458e4c",null);o.options.__file="index.vue";t.a=o.exports},T67A:function(e,t,a){"use strict";a.r(t);var n=a("14Xm"),i=a.n(n),l=a("D3Ub"),s=a.n(l),o=a("QbLZ"),r=a.n(o),c=a("pK9s"),u=a("ACzA"),p=a("LAzu"),d=a("HpJO"),m=a("Rl7X"),v=a("3Fcl"),f=a("ZySA"),h=a("0FX9"),g=a.n(h),b=a("azuH"),_=[{key:0,display_name:"冻结"},{key:1,display_name:"激活"}],y={name:"DeviceList",directives:{waves:f.a},components:{SetEquipmentParasForm:p.a,DeviceOffline:b.default},data:function(){return{vis_export:!1,selRow:null,vis_detail:!1,tableKey:0,loadUrl:"",equipmentParaDialog:!1,throttle:null,downLoadFileName:"二维码下载",showQR:!1,list:null,minHeightTable:550,total:null,listLoading:!0,dialogVisiable:!1,disableOptions:[{value:0,label:"全部"},{value:1,label:"正常"},{value:2,label:"已禁用"}],basicConfig:{machineUrl:"https://m.leyaoyao.com/customer/message/t/",gashaponUrl:"https://m.leyaoyao.com/customer/message/g/",childUrl:"https://m.leyaoyao.com/customer/message/c/"},isOnline:[{label:"全部",value:0},{label:"在线",value:1},{label:"离线",value:2}],accountTypeList:[{label:"商家账号",value:1},{label:"代理账号",value:2}],equipmentTypeName:[],form:{equipmentIdStart:null,equipmentIdEnd:null,deviceName:"",status:"",groupName:"",agentUserName:"",equipmentTypeName:"",isOnline:""},accountType:1,accountName:"",listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},calendarTypeOptions:_,checked:!1,checkedRowAlone:{},checkedRow:[],temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},downloadLoading:!1,signalUI:{0:"signal-none",1:"signal-bad",2:"signal-mid",3:"signal-good",4:"signal-best"}}},created:function(){var e=this;this.throttle=Object(v.a)(),this.getList(),Object(u.b)().then(function(t){var a=t.data;a&&0!==a.length&&a.forEach(function(e){e.label=e.equipmenttypename,e.value=e.equipmenttypename}),e.equipmentTypeName=a});var t=document.body.clientHeight||document.documentElement.clientHeight;this.minHeightTable=t-334},methods:{showOffline:function(e){return["按摩椅","按摩垫","足疗机","娃娃机","兑币机","扭蛋机"].includes(e)},saveVisExport:function(e){this.vis_export=e},exportDetail:function(){this.$refs.DeviceOffline.postExport()},showDetail:function(e){this.vis_detail=!0,this.selRow=e},renderHeader:function(e){return[e("p",{},["设备参数"]),e("p",{},["(脉冲宽度/脉冲间隔/待机电平)"])]},renderEquipState:function(e){var t=this;return[e("span",{},["设备注册状态"]),e("i",{class:"el-icon-warning",style:"margin-left: 5px",on:{click:function(){t.dialogVisiable=!0}}})]},confirom:function(e){var t=this;this.equipmentParaDialog=!1;var a=[];this.checkedRow.forEach(function(e){a.push(e.equipmentId)}),Object(c.e)(r()({values:a},e)).then(function(e){0===e.result&&(t.getList(),t.$message({message:"参数设置成功！",type:"success"}))})},equipmentSetPara:function(){this.diffEquipmentType()||(this.equipmentParaDialog=!0)},diffEquipmentType:function(){var e=!1;return this.checkedRow.length<=0?(this.$message({message:"请选择需要操作的设备！",type:"warning"}),!0):(this.checkedRow.reduce(function(t,a){return e||t.equipmentTypeName===a.equipmentTypeName||(e=!0),a}),!!e&&(this.$alert("仅支持导出同一种设备类型的二维码，请重新勾选。","温馨提示",{confirmButtonText:"知道了"}),!0))},importQrcode:function(e){var t=this;return s()(i.a.mark(function a(){var n,l,s,o;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.diffEquipmentType()){a.next=2;break}return a.abrupt("return");case 2:if(n=[],l=!0,t.checkedRow.forEach(function(e){n.push(e.equipmentId),e.thirdValue||(l=!1)}),!l){a.next=14;break}return s={lyyEquipmentValues:n.join(",")},a.next=9,Object(m.f)(s);case 9:return(o=a.sent)&&0===o.result&&t.$message.success("下载成功！"),a.abrupt("return");case 14:"pay"===e?(t.downLoadFileName="支付二维码下载",t.loadUrl=Object(d.a)({valueStr:n})):"register"===e&&(t.downLoadFileName="注册二维码下载",t.loadUrl=Object(d.b)({valueStr:n.join(",")}));case 15:t.throttle(function(){t.$nextTick(function(){t.$refs.downloadZip.click()})},2500);case 16:case"end":return a.stop()}},a,t)}))()},disabledEquipment:function(e){var t=this;this.checkedRow.length<=0?this.$message({message:"请选择需要操作的设备！",type:"warning"}):"disable"===e?this.$confirm('<p>禁用设备后，用户将无法付款启动该设备。你可以通过“解除禁用”来恢复使用。确定要禁用设备吗？</p><p class="tips" style="color: red;">（注意：“禁用设备 / 解除禁用”功能，目前只适用于  按摩椅、足疗机、按摩垫、洗衣机、充电桩、扭蛋机）</p>',"温馨提示",{distinguishCancelAndClose:!0,dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t.equipmentDisable("disabled")}):"enable"===e&&this.$confirm("确定要解除禁用吗？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t.equipmentDisable("1Normal")})},equipmentDisable:function(e){var t=this,a=this.$loading({lock:!0,text:"loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n=[];this.checkedRow.forEach(function(e){n.push(e.equipmentId)}),Object(c.b)({status:e,values:n}).then(function(e){if(a.close(),0===e.result){var n=0===e.data.fail.length?"":"失败"+e.data.fail.length+"条;\n        失败的设备编号："+e.data.fail.join(",");t.$alert(e.description+" "+n,"操作结果",{confirmButtonText:"确定",callback:function(){t.getList()}})}}).catch(function(e){a.close()})},handleChange:function(){},createQRCode:function(){var e=document.getElementById("canvas"),t=this.checkedRow[0];this.checkedRowAlone=t;var a=void 0;a="儿童类"===t.equipmentTypeName?this.basicConfig.childUrl:"扭蛋机"===t.equipmentTypeName?this.basicConfig.gashaponUrl:this.basicConfig.machineUrl,g.a.toCanvas(e,a+t.equipmentId,{width:200,height:200})},updateEquipmentModel:function(){if(this.checkedRow.length>1)this.$message({message:"修改设备型号只支持单选",type:"warning"});else if(0!==this.checkedRow.length){var e=this.checkedRow[0];if("充电桩"===e.equipmentTypeName||"洗衣机"===e.equipmentTypeName)if(1e4===e.loginFlag){this.$router.push({path:"/deviceModify",query:{lyyEquipmentId:e.equipmentId,value:e.equipmentId,equipmentType:{"充电桩":"CDZ","洗衣机":"XYJ"}[e.equipmentTypeName],name:e.agentUserName,phoneNumber:e.account,type:"已注册"===e.isRegister?1:0}})}else this.$message({message:"设备不支持",type:"warning"});else this.$message({message:"请选择充电桩,洗衣机设备",type:"warning"})}else this.$message({message:"请选择设备",type:"warning"})},handleCreateQRCode:function(){this.checkedRow.length?this.checkedRow.length>1?this.$message({message:"一次只能查看一个设备的二维码！",type:"warning"}):(this.showQR=!this.showQR,this.createQRCode()):this.$message({message:"请选择要生成二维码的设备！",type:"warning"})},getTemplateRow:function(e){this.checked=!0,this.checkedRow=e},getList:function(){var e=this;this.listLoading=!0,this.form.pageSize=this.listQuery.limit,this.form.pageIndex=this.listQuery.page,delete this.form.agentAccount,delete this.form.merchantAccount,1===this.accountType&&(this.form.merchantAccount=this.accountName),2===this.accountType&&(this.form.agentAccount=this.accountName),Object(c.c)(this.form).then(function(t){e.list=t.data.items,e.total=t.data.total,e.checkedRow=[],e.checked=!1,e.listLoading=!1})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleBtn:function(e){if("find"===e){if(parseInt(this.form.equipmentIdStart)<0)return void this.$alert("设备编号不能小于0。","温馨提示",{confirmButtonText:"知道了"});if(parseInt(this.form.equipmentIdStart)>parseInt(this.form.equipmentIdEnd))return void this.$alert("设备编号请按从小到大的顺序输入。","温馨提示",{confirmButtonText:"知道了"});if(parseInt(this.form.equipmentIdStart)+100<parseInt(this.form.equipmentIdEnd))return void this.$alert("支持连号查询，一次最多可查询100个。","温馨提示",{confirmButtonText:"知道了"});this.getList()}else"clear"===e&&(this.accountName="",this.accountType=1,this.form.equipmentIdStart=null,this.form.equipmentIdEnd=null,this.$refs.form.resetFields())}}},w=(a("1oRo"),a("KHd+")),q=Object(w.a)(y,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticClass:"agent-list-container"},[a("el-form",{ref:"form",staticClass:"deviceForm",attrs:{model:e.form,"label-width":"106px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"设备编号"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("div",{staticClass:"el-input-number el-input-number--medium is-without-controls",staticStyle:{width:"100%"}},[a("div",{staticClass:"el-input el-input--medium"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.equipmentIdStart,expression:"form.equipmentIdStart"}],staticClass:"el-input__inner",attrs:{type:"number",placeholder:"设备编号"},domProps:{value:e.form.equipmentIdStart},on:{input:function(t){t.target.composing||e.$set(e.form,"equipmentIdStart",t.target.value)}}})])])]),e._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticStyle:{"text-align":"center"}},[e._v("-")])]),e._v(" "),a("el-col",{attrs:{span:11}},[a("div",{staticClass:"el-input-number el-input-number--medium is-without-controls",staticStyle:{width:"100%"}},[a("div",{staticClass:"el-input el-input--medium"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.equipmentIdEnd,expression:"form.equipmentIdEnd"}],staticClass:"el-input__inner",attrs:{type:"number",placeholder:"设备编号"},domProps:{value:e.form.equipmentIdEnd},on:{input:function(t){t.target.composing||e.$set(e.form,"equipmentIdEnd",t.target.value)}}})])])])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"场地名称",prop:"groupName"}},[a("el-input",{attrs:{placeholder:"请输入场地名称"},model:{value:e.form.groupName,callback:function(t){e.$set(e.form,"groupName",t)},expression:"form.groupName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"禁用状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.disableOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"设备类型",prop:"equipmentTypeName"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.equipmentTypeName,callback:function(t){e.$set(e.form,"equipmentTypeName",t)},expression:"form.equipmentTypeName"}},e._l(e.equipmentTypeName,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.accountType,callback:function(t){e.accountType=t},expression:"accountType"}},e._l(e.accountTypeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-input",{staticStyle:{"margin-left":"10px",width:"200px"},attrs:{placeholder:"请输入账号",type:"number"},model:{value:e.accountName,callback:function(t){e.accountName=t},expression:"accountName"}})],1)],1),e._v(" "),a("div",{staticClass:"filter-container"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.handleBtn("find")}}},[e._v("查询")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-delete"},on:{click:function(t){e.handleBtn("clear")}}},[e._v("清空查询")]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"预览支付二维码",placement:"top-start"}},[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-view"},on:{click:e.handleCreateQRCode}},[e._v("查看二维码")])],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(t){e.importQrcode("pay")}}},[e._v("导出支付二维码")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(t){e.importQrcode("register")}}},[e._v("导出注册二维码")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-goods"},on:{click:function(t){e.disabledEquipment("disable")}}},[e._v("禁用设备")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-view"},on:{click:function(t){e.disabledEquipment("enable")}}},[e._v("解除禁用")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-setting"},on:{click:e.equipmentSetPara}},[e._v("设置设备参数")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px","margin-top":"10px"},attrs:{type:"primary",icon:"el-icon-setting"},on:{click:e.updateEquipmentModel}},[e._v("修改设备型号")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.list,border:"",stripe:"",fit:"","highlight-current-row":""},on:{"selection-change":e.getTemplateRow}},[a("el-table-column",{attrs:{type:"selection",width:"65"}}),e._v(" "),a("el-table-column",{attrs:{label:"设备编号",align:"center",prop:"equipmentId"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"外部编号",align:"center",prop:"thirdValue"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.thirdValue))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentTypeName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备型号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.protocolDTO&&t.row.protocolDTO.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"在线状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.online?"在线":"离线"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"信号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("ul",{staticClass:"signal-ui",class:t.row.online?e.signalUI[t.row.signal]:"signal-none"},[a("li"),a("li"),a("li"),a("li")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"禁用状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s("正常"==t.row.status?t.row.status+"启用":t.row.status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"render-header":e.renderEquipState,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.isRegister))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"固件版本",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.firmwareVersion))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备参数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentParam||"默认"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备机台号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.groupNumber||"未设置"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"区域",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.districtName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"场地名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.groupName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"代理/商家名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.agentUserName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"角色",align:"center",prop:"role"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.role))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"查看",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showOffline(t.row.equipmentTypeName)?a("a",{staticStyle:{color:"#409eff"},on:{click:function(a){e.showDetail(t.row)}}},[e._v("离线明细")]):a("div",[e._v("-")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],staticClass:"mask-box",on:{click:function(t){t.stopPropagation(),e.showQR=!e.showQR}}},[a("div",{staticClass:"wrapper",on:{click:function(e){e.stopPropagation()}}},[a("div",{staticClass:"close",on:{click:function(t){t.stopPropagation(),e.showQR=!e.showQR}}},[e._v("X")]),e._v(" "),a("h2",[e._v("请用微信或支付宝扫描二维码")]),e._v(" "),a("canvas",{attrs:{id:"canvas"}}),e._v(" "),a("p",[e._v(e._s(e.checkedRowAlone.equipmentId))]),e._v(" "),a("p",[e._v(e._s(e.checkedRowAlone.groupNumber?e.checkedRowAlone.groupNumber+"号机":"")+e._s(e.checkedRowAlone.groupName?"("+e.checkedRowAlone.groupName+")":""))]),e._v(" "),a("p",[e._v(e._s(e.checkedRowAlone.equipmentTypeName))])])]),e._v(" "),a("a",{ref:"downloadZip",staticStyle:{display:"none"},attrs:{id:"downLoad",href:e.loadUrl,download:e.downLoadFileName}}),e._v(" "),a("el-dialog",{attrs:{visible:e.equipmentParaDialog,"show-close":!1,"close-on-click-modal":!1,width:"500px",title:"设置设备参数"},on:{"update:visible":function(t){e.equipmentParaDialog=t}}},[a("set-equipment-paras-form",{attrs:{checkedrow:e.checkedRow},on:{cancel:function(t){e.equipmentParaDialog=!1},confirom:e.confirom}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisiable,"close-on-click-modal":!1,width:"500px",title:"温馨提示"},on:{"update:visible":function(t){e.dialogVisiable=t}}},[a("p",{staticClass:"dialogP"},[e._v("1、“设备注册状态” 指的是该设备是否已被商家在B端进行绑定。")]),e._v(" "),a("p",{staticClass:"dialogP"},[e._v("2、已注册：该设备已被商家绑定。")]),e._v(" "),a("p",{staticClass:"dialogP"},[e._v("3、未注册：该设备未被商家绑定。")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisiable=!1}}},[e._v("知道了")])],1)]),e._v(" "),e.vis_detail?a("el-dialog",{attrs:{visible:e.vis_detail,width:"800px",title:"设备离线明细"},on:{"update:visible":function(t){e.vis_detail=t}}},[a("device-offline",{ref:"DeviceOffline",attrs:{"save-vis-export":e.saveVisExport,"sel-row":e.selRow}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.vis_export?a("el-button",{on:{click:e.exportDetail}},[e._v("导出数据")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.vis_detail=!1}}},[e._v("关 闭")])],1)],1):e._e()],1)},[],!1,null,null,null);q.options.__file="DeviceList.vue";t.default=q.exports},ZySA:function(e,t,a){"use strict";var n=a("P2sY"),i=a.n(n),l=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var n=i()({},t.value),l=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=l.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":((r=document.createElement("span")).className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",s.appendChild(r)),l.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=l.color,r.className="waves-ripple z-active",!1}},!1)}}),s=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(s)),l.install=s;t.a=l},azuH:function(e,t,a){"use strict";a.r(t);var n=a("gDS+"),i=a.n(n),l=a("XJYT"),s=a("7Qib"),o=a("t3Un");var r={name:"DeviceOffline",props:{selRow:{type:Object,default:null},saveVisExport:{type:Function,default:function(){}}},data:function(){return{date_btn:"2",date_sel:"",equipment_id:"",listQuery:{total:99,pageSize:10,pageIndex:1},tableData:null,loading_table:!1,pickerOptions:{disabledDate:function(e){var t=e.getTime(),a=Date.now();return t>a||t<a-15552e6}},equipment_detail:null,page_data:{},nowOption:null}},computed:{visExportBtn:function(){return this.tableData.length>0}},watch:{tableData:function(e){this.selRow&&this.saveVisExport(e&&e.length>0)}},created:function(){this.selRow&&this.getList(!0)},methods:{parseTimeMap:function(e){return Object(s.i)(e)},postExport:function(){var e="value="+this.nowOption.value+"&startDate="+this.nowOption.startDate+"&endDate="+this.nowOption.endDate;location.href=encodeURI("/agent/equipment/error/export?"+e)},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},getEquipmentState:function(e){var t,a=this;e&&(this.loading_table=!0),(t={value:this.nowOption.value},Object(o.a)({url:"/equipment/error/queryEquipmentType",method:"get",params:t})).then(function(e){0===e.result&&(a.equipment_detail={equipmentTypeName:e.data.typeName,equipmentId:e.data.value,online:e.data.online,days:e.data.days})}).finally(function(){e&&(a.loading_table=!1)})},getList:function(e){var t=this,a=this.date_sel,n=this.date_btn,r=this.parseDateBtn,c=this.listQuery,u=this.selRow,p=this.page_data,d=this.equipment_id;u?d=u.equipmentId:this.equipment_detail=null;var m=[];if(e){if(this.listQuery.pageIndex=1,""!==a&&(m[0]=Object(s.i)(a[0],"{y}-{m}-{d}"),m[1]=Object(s.i)(a[1],"{y}-{m}-{d}"),new Date(a[1]).getTime()>Date.now()))return void Object(l.Message)({message:"结束日期不能大于今天",type:"error"});""!==n&&(m=r())}else m=p.date,d=p.equipment_id;if(""===d)return Object(l.Message)({message:"请填写设备编号",type:"error"}),void(this.tableData=null);var v,f={value:d,startDate:m[0],endDate:m[1],pageSize:c.pageSize,pageIndex:c.pageIndex};this.loading_table=!0,this.page_data={equipment_id:d,date:m},this.tableData=[],this.nowOption=JSON.parse(i()({value:d,startDate:m[0],endDate:m[1],pageSize:c.pageSize,pageIndex:c.pageIndex})),(v=f,Object(o.a)({url:"/equipment/error/getEquipmentErrorLog",method:"get",params:v})).then(function(e){0===e.result&&e.data&&(e.data.date&&(t.tableData=e.data.date,t.getEquipmentState()),t.listQuery={total:e.data.total,pageSize:e.data.pageSize,pageIndex:e.data.page})}).finally(function(){t.loading_table=!1})},parseDateBtn:function(e){var t=this.date_btn,a=void 0;return"0"===t?a=[Object(s.i)(Date.now()-864e5,"{y}-{m}-{d}"),Object(s.i)(Date.now()-864e5,"{y}-{m}-{d}")]:"1"===t?a=[Object(s.i)(Date.now()-5184e5,"{y}-{m}-{d}"),Object(s.i)(Date.now(),"{y}-{m}-{d}")]:"2"===t&&(a=[Object(s.i)(Date.now()-25056e5,"{y}-{m}-{d}"),Object(s.i)(Date.now(),"{y}-{m}-{d}")]),a},handleCurrentChange:function(e){this.listQuery.pageIndex=e,this.getList()},radioChange:function(e){this.date_sel="",this.selRow&&this.getList(!0)},dateChange:function(e){this.date_btn="",this.selRow&&this.getList(!0)},objectSpanMethod:function(e){e.row,e.column,e.rowIndex,e.columnIndex}}},c=(a("pjiY"),a("KHd+")),u=Object(c.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_table,expression:"loading_table"}],staticClass:"agent-list-container",style:e.selRow?"":"min-width:1100px"},[a("div",{staticClass:"top-box"},[e.selRow?e._e():a("div",{staticClass:"sel-box"},[a("div",[e._v("设备编号：")]),e._v(" "),a("div",{staticClass:"el-input-number el-input-number--medium is-without-controls",staticStyle:{width:"200px"}},[a("div",{staticClass:"el-input el-input--medium"},[a("el-input",{attrs:{placeholder:"设备编号"},model:{value:e.equipment_id,callback:function(t){e.equipment_id="string"==typeof t?t.trim():t},expression:"equipment_id"}})],1)])]),e._v(" "),a("div",{staticClass:"sel-box"},[a("div",[e._v("时间：")]),e._v(" "),a("el-radio-group",{attrs:{size:"mini"},on:{change:e.radioChange},model:{value:e.date_btn,callback:function(t){e.date_btn=t},expression:"date_btn"}},[a("el-radio-button",{attrs:{label:"0"}},[e._v("昨日")]),e._v(" "),a("el-radio-button",{attrs:{label:"1"}},[e._v("最近7天")]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v("最近30天")])],1)],1),e._v(" "),a("div",{staticClass:"sel-box"},[a("el-date-picker",{attrs:{clearable:!1,"picker-options":e.pickerOptions,type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.dateChange},model:{value:e.date_sel,callback:function(t){e.date_sel=t},expression:"date_sel"}})],1),e._v(" "),e.selRow?e._e():a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getList(!0)}}},[e._v("查询")])],1),e._v(" "),e.selRow?e._e():a("div",{staticClass:"type-tip"},[e._v("仅支持：按摩类（按摩椅、足疗机、按摩垫），娃娃机，兑币机，扭蛋机")]),e._v(" "),!e.selRow&&(e.tableData&&0==e.tableData.length||null==e.tableData)||!e.equipment_detail?e._e():a("div",{staticClass:"mid-box"},[a("div",[e._v("设备编号："+e._s(e.equipment_detail.equipmentTypeName)+" "+e._s(e.equipment_detail.equipmentId))]),e._v(" "),e.tableData&&e.tableData.length>0?a("div",[e._v("\n      当前设备状态：\n      "),e.equipment_detail.online?e._e():a("div",{staticClass:"mid-offline"},[e._v("离线"+e._s(e.equipment_detail.days?" > "+e.equipment_detail.days+"天":""))]),e._v(" "),e.equipment_detail.online?a("div",{staticClass:"mid-online"},[e._v("在线")]):e._e(),e._v(" "),a("a",{staticClass:"mid-reload",on:{click:function(t){e.getEquipmentState(!0)}}},[e._v("刷新")])]):e._e(),e._v(" "),a("div",[e.selRow?e._e():a("a",{on:{click:e.postExport}},[e._v("导出数据")])])]),e._v(" "),e.tableData&&e.tableData.length>0?a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,"span-method":e.objectSpanMethod,border:""}},[a("el-table-column",{attrs:{align:"center",prop:"date",label:"日期"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"count",label:"离线次数"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"timeMap",label:"离线时间点"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table-timeMap"},e._l(t.row.times,function(t,n){return a("div",{key:n,staticClass:"table-timeMap-item"},[e._v("\n            "+e._s(e.parseTimeMap(t))+"\n          ")])}))]}}])})],1):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.selRow&&!e.tableData,expression:"!selRow&&!tableData"}],staticClass:"table-noData"},[e._v("\n    请输入设备编号查询设备离线、在线明细\n  ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.tableData&&0===e.tableData.length,expression:"tableData&&tableData.length===0"}],staticClass:"table-noData"},[e._v("\n    可能设备未注册等原因，暂无在线、离线记录\n  ")]),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.listQuery.total>0&&e.tableData&&e.tableData.length>0,expression:"listQuery.total>0&&tableData&&tableData.length>0"}],attrs:{"current-page":e.listQuery.pageIndex,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,total:e.listQuery.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},[],!1,null,"705809dc",null);u.options.__file="DeviceOffline.vue";t.default=u.exports},jUE0:function(e,t,a){},jfIV:function(e,t,a){},pK9s:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"e",function(){return s}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r});var n=a("t3Un");function i(e){return Object(n.a)({url:"/equipment/firstAgent/getEquipmentList",method:"get",params:e})}function l(e){return Object(n.a)({url:"/equipment/secondAgent/getSecondAgentEquipmentList",method:"post",data:e})}function s(e){return Object(n.a)({url:"/rest/equipment/batch/setEquipmentParam",method:"post",data:e})}function o(e){return Object(n.a)({url:"/rest/equipment/agentEquipment/query",method:"get",params:e})}function r(e){return Object(n.a)({url:"/equipment/batch/status",method:"post",data:e})}},pjiY:function(e,t,a){"use strict";var n=a("vIV5");a.n(n).a},vIV5:function(e,t,a){}}]);