(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-73b8"],{"3Fcl":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){var t=null,e=null;return function(n,a){for(var i=arguments.length,r=Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];var l=this,o=Date.now();e&&o-e<a?(clearTimeout(t),t=setTimeout(function(){e=o,n.apply(l,r),clearTimeout(t),t=null},a)):(e=o,n.apply(l,r))}}},"3Nqk":function(t,e,n){},"9Wgr":function(t,e,n){"use strict";var a=n("3Nqk");n.n(a).a},BSo3:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"c",function(){return m}),n.d(e,"a",function(){return f});var a=n("14Xm"),i=n.n(a),r=n("D3Ub"),s=n.n(r),l=n("iCc5"),o=n.n(l),u=n("V7oC"),c=n.n(u),p=n("t3Un");!function(){function t(){o()(this,t)}c()(t,null,[{key:"transfer",value:function(){var t=s()(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(p.a)({url:"/rest/equipment/batch/transfer",method:"post",data:e}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}])}();function d(t){return Object(p.a)({url:"/rest/equipment/batch/transfer",method:"post",data:t})}function m(t){return Object(p.a)({url:"/rest/equipment/batch/transferToAgent",method:"post",data:t})}function f(t){return Object(p.a)({url:"/rest/equipment/batch/rebackEquipment",method:"post",data:t})}},HpJO:function(t,e,n){"use strict";function a(t){return"/agent/rest/equipment/batch/exportPayOrCode?valueStr="+t.valueStr}function i(t){return"/agent/rest/equipment/batch/exportRegisterOrCode?valueStr="+t.valueStr}n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},LAzu:function(t,e,n){"use strict";var a=n("4d7F"),i=n.n(a),r={name:"SetEquipmentParas",props:{checkedrow:{type:Array,default:function(){return[]}}},data:function(){return{equipmentParaForm:{pulseWidth:"",pulseInterval:"",standbyStatus:0},rules:{pulseWidth:{message:"请输入10-1000范围内的整数",trigger:"blur",validator:function(t,e,n){parseInt(e)<10||parseInt(e)>1e3||parseInt(e)!==+e?n(new Error):n()}},pulseInterval:{message:"请输入10-1000范围内的整数",trigger:"blur",validator:function(t,e,n){parseInt(e)<10||parseInt(e)>1e3||parseInt(e)!==+e?n(new Error):n()}}}}},methods:{submitChecked:function(t){var e=this;return new i.a(function(n,a){e.$refs[t].validate(function(t){t?n():a()})})},cancel:function(t){this.$refs[t].resetFields(),this.$emit("cancel")},confirmPara:function(t){var e=this;this.submitChecked(t).then(function(n){e.$emit("confirom",e.equipmentParaForm),e.$refs[t].resetFields()}).catch(function(){})}}},s=(n("9Wgr"),n("KHd+")),l=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"equipmentParaForm",attrs:{model:t.equipmentParaForm,rules:t.rules,"label-width":"92px"}},[n("el-form-item",[n("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[t._v("已勾选设备")]),t._v(" "),n("p",[t._v(" "+t._s(t.checkedrow.length)+" 个")])]),t._v(" "),n("el-form-item",{attrs:{prop:"pulseWidth"}},[n("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[t._v("脉冲宽度")]),t._v(" "),n("el-input",{attrs:{type:"number",placeholder:"10~1000"},model:{value:t.equipmentParaForm.pulseWidth,callback:function(e){t.$set(t.equipmentParaForm,"pulseWidth",e)},expression:"equipmentParaForm.pulseWidth"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"pulseInterval"}},[n("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[t._v("脉冲间隔")]),t._v(" "),n("el-input",{attrs:{type:"number",placeholder:"10~1000"},model:{value:t.equipmentParaForm.pulseInterval,callback:function(e){t.$set(t.equipmentParaForm,"pulseInterval",e)},expression:"equipmentParaForm.pulseInterval"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"standbyStatus"}},[n("div",{staticStyle:{"text-align":"left"},attrs:{slot:"label"},slot:"label"},[t._v("待机电平")]),t._v(" "),n("el-radio-group",{model:{value:t.equipmentParaForm.standbyStatus,callback:function(e){t.$set(t.equipmentParaForm,"standbyStatus",e)},expression:"equipmentParaForm.standbyStatus"}},[n("el-radio",{attrs:{label:0}},[t._v("常开")]),t._v(" "),n("el-radio",{attrs:{label:1}},[t._v("常闭")])],1)],1),t._v(" "),n("p",{staticStyle:{color:"#999999","font-size":"13px"}},[t._v("温馨提示：此处的参数设置，仅对 “脉冲版” 生效，对“串口版”无效。")]),t._v(" "),n("div",{staticStyle:{"padding-top":"22px","text-align":"right"}},[n("el-button",{on:{click:function(e){t.cancel("equipmentParaForm")}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.confirmPara("equipmentParaForm")}}},[t._v("确 定")])],1)],1)},[],!1,null,"ab458e4c",null);l.options.__file="index.vue";e.a=l.exports},"RU/L":function(t,e,n){n("Rqdy");var a=n("WEpk").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},Rqdy:function(t,e,n){var a=n("Y7ZC");a(a.S+a.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SEkw:function(t,e,n){t.exports={default:n("RU/L"),__esModule:!0}},V7oC:function(t,e,n){"use strict";e.__esModule=!0;var a,i=n("SEkw"),r=(a=i)&&a.__esModule?a:{default:a};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}()},c0g1:function(t,e,n){},c1P4:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"e",function(){return s}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return o});var a=n("t3Un");function i(t){return Object(a.a)({url:"/merchant/manage/query",method:"post",data:t})}function r(t){return Object(a.a)({url:"/merchant/childMerchants/query",method:"get",params:t})}function s(t){return Object(a.a)({url:"/merchant/updateMerchant",method:"post",data:t})}function l(t){return Object(a.a)({url:"/merchant/addMerchant",method:"post",data:t})}function o(t){return Object(a.a)({url:"/merchant/deleteMerchant",method:"post",data:t})}},iCc5:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},jzU3:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("t3Un");function i(t){return Object(a.a)({url:"/rest/equipment/childAgents/query",method:"get",params:t})}},pK9s:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return s}),n.d(e,"a",function(){return l}),n.d(e,"b",function(){return o});var a=n("t3Un");function i(t){return Object(a.a)({url:"/equipment/firstAgent/getEquipmentList",method:"get",params:t})}function r(t){return Object(a.a)({url:"/equipment/secondAgent/getSecondAgentEquipmentList",method:"post",data:t})}function s(t){return Object(a.a)({url:"/rest/equipment/batch/setEquipmentParam",method:"post",data:t})}function l(t){return Object(a.a)({url:"/rest/equipment/agentEquipment/query",method:"get",params:t})}function o(t){return Object(a.a)({url:"/equipment/batch/status",method:"post",data:t})}},"wj+h":function(t,e,n){"use strict";n.r(e);var a=n("14Xm"),i=n.n(a),r=n("D3Ub"),s=n.n(r),l=n("QbLZ"),o=n.n(l),u=n("ACzA"),c=n("pK9s"),p=n("c1P4"),d=n("jzU3"),m=n("BSo3"),f=n("Rl7X"),h=n("3Fcl"),v=n("HpJO"),g={name:"DeviceTransfer",components:{SetEquipmentParasForm:n("LAzu").a},data:function(){return{type:"1",total:0,equipmentParaDialog:!1,throttle:null,downLoadFileName:"下载",questionDialogVisible:!1,loadUrl:"",agentid:"",selectAgent:"",agentsArr:[],willTranfers:[],innerVisible:!1,dialogVisible:!1,listQuery:{page:1,limit:20},infoChecked:!1,tableKey:0,listLoading:!1,minHeightTable:660,list:[],equipmentTypesArr:[],isOnline:[{label:"全部",value:0},{label:"在线",value:1},{label:"离线",value:2}],message:"将设备批量转移给商家后，需告知商家登录PC端管理后台及时批量注册设备（商家PC端管理后台网址：https://fac.leyaoyao.com/#/login  ）。",form:{isOnline:"",equipmentTypeValue:"",equipmentIdStart:null,equipmentIdEnd:null}}},watch:{type:function(t){}},created:function(){var t=this,e=document.body.clientHeight||document.documentElement.clientHeight;this.minHeightTable=e-388,this.throttle=Object(h.a)(),Object(u.c)().then(function(e){0===e.result&&e.data&&0!==e.data.length&&e.data.forEach(function(e){t.equipmentTypesArr.push({label:e.name,value:e.code})})}),this.getList()},methods:{renderHeader:function(t){return[t("p",{},["设备参数"]),t("p",{},["(脉冲宽度/脉冲间隔/待机电平)"])]},equipmentSetPara:function(){this.diffEquipmentType()||(this.equipmentParaDialog=!0)},diffEquipmentType:function(){var t=!1;return this.willTranfers.length<=0?(this.$message({message:"请选择需要操作的设备！",type:"warning"}),!0):(this.willTranfers.reduce(function(e,n){return t||e.equipmentTypeName===n.equipmentTypeName||(t=!0),n}),!!t&&(this.$alert("仅支持导出同一种设备类型的二维码，请重新勾选。","温馨提示",{confirmButtonText:"知道了"}),!0))},oftenquestionFn:function(){this.questionDialogVisible=!0},confirom:function(t){var e=this;this.equipmentParaDialog=!1;var n=[];this.willTranfers.forEach(function(t){n.push(t.equipmentValue)}),Object(c.e)(o()({values:n},t)).then(function(t){0===t.result&&(e.getList(),e.$message({message:"参数设置成功！",type:"success"}))})},importQrcode:function(t){var e=this;return s()(i.a.mark(function n(){var a,r,s,l;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.diffEquipmentType()){n.next=2;break}return n.abrupt("return");case 2:if(a=[],r=!0,e.willTranfers.forEach(function(t){a.push(t.equipmentValue),t.thirdValue||(r=!1)}),!r){n.next=14;break}return s={lyyEquipmentValues:a.join(",")},n.next=9,Object(f.f)(s);case 9:return(l=n.sent)&&0===l.result&&e.$message.success("下载成功！"),n.abrupt("return");case 14:"pay"===t?(e.downLoadFileName="支付二维码下载",e.loadUrl=Object(v.a)({valueStr:a})):"register"===t&&(e.downLoadFileName="注册二维码下载",e.loadUrl=Object(v.b)({valueStr:a.join(",")}));case 15:e.throttle(function(){e.$nextTick(function(){e.$refs.downloadZip.click()})},2500);case 16:case"end":return n.stop()}},n,e)}))()},beforeClose:function(t){this.$refs.multipleTable.clearSelection(),this.selectAgent="",this.agentid="",t()},confirmTranfer:function(){var t=this;if(this.selectAgent){if(this.agentid&&!this.infoChecked){this.dialogVisible=!1;var e=this.$loading({lock:!0,text:"转移中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n=[];this.willTranfers.forEach(function(t){n.push(t.equipmentValue)});var a={},i=null;"1"===this.type?(a={values:n,adorgid:this.agentid},i=m.b):"2"===this.type&&(a={values:n,agentUserId:this.agentid},i=m.c),i(a).then(function(){e.close(),t.listQuery.page=1,t.agentid="",t.selectAgent="",t.$message({message:"转移成功！",type:"success"}),t.getList()}).catch(function(){e.close(),t.$message.error("设备转移失败！")})}}else this.innerVisible=!0},handleSelectionChange:function(t){this.willTranfers=t},querySearch:function(t,e){var n=this,a=void 0;if("1"===this.type?a=p.b:"2"===this.type&&(a=d.a),a){var i=/^(.+)\((.+)\)$/.exec(t);i&&(t=i[1]&&i[1].trim()),a({agentQuery:t}).then(function(t){if(0===t.result&&t.data&&0!==t.data.length){var a=[];t.data.forEach(function(t){"1"===n.type?a.push({value:(t.merchantname||"")+" ("+t.username+")",agentId:t.adorgid}):"2"===n.type&&a.push({value:t.phone+" ("+t.agentusername+")",agentId:t.agentuserid})}),n.agentsArr=a,n.infoChecked=!1,e(a)}else n.infoChecked=!0,e([])})}},handleSelect:function(t){this.agentid=t.agentId},getList:function(){var t=this;this.listLoading=!0,this.form.pageSize=this.listQuery.limit,this.form.queryLevel=1,this.form.pageIndex=this.listQuery.page,Object(c.a)(this.form).then(function(e){t.list=e.data.items,t.total=e.data.total,t.willTranfers=[],t.checked=!1,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},look:function(){parseInt(this.form.equipmentIdStart)<0?this.$alert("设备编号不能小于0。","温馨提示",{confirmButtonText:"知道了"}):parseInt(this.form.equipmentIdStart)>parseInt(this.form.equipmentIdEnd)?this.$alert("设备编号请按从小到大的顺序输入。","温馨提示",{confirmButtonText:"知道了"}):parseInt(this.form.equipmentIdStart)+100<parseInt(this.form.equipmentIdEnd)?this.$alert("支持连号查询，一次最多可查询100个。","温馨提示",{confirmButtonText:"知道了"}):(this.listQuery.page=1,this.getList())},transfer:function(){this.type="1",0===this.willTranfers.length?this.$message({showClose:!1,message:"请选择要转移的设备！",type:"warning"}):this.dialogVisible=!0}}},b=(n("xALK"),n("KHd+")),y=Object(b.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[n("el-row",{staticStyle:{"align-items":"center"},attrs:{gutter:20}},[n("el-col",{attrs:{span:20}},[n("el-alert",{staticClass:"info",attrs:{title:t.message,closable:!1,type:"warning"}})],1),t._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"often-question"},[n("p",{on:{click:t.oftenquestionFn}},[n("i",{staticClass:"el-icon-question"}),t._v(" 常见问题 >>")])])])],1),t._v(" "),n("el-form",{ref:"form",staticClass:"deviceForm",staticStyle:{padding:"10px 0"},attrs:{inline:!0,model:t.form,"label-width":"90px"}},[n("el-form-item",{attrs:{label:"设备类型",prop:"equipmentTypeValue"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.equipmentTypeValue,callback:function(e){t.$set(t.form,"equipmentTypeValue",e)},expression:"form.equipmentTypeValue"}},t._l(t.equipmentTypesArr,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"设备查询",prop:"equipmentId"}},[n("div",{staticClass:"el-input-number el-input-number--medium is-without-controls input-300",staticStyle:{width:"200px"}},[n("div",{staticClass:"el-input el-input--medium"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.equipmentIdStart,expression:"form.equipmentIdStart"}],staticClass:"el-input__inner",attrs:{type:"number",placeholder:"设备编号"},domProps:{value:t.form.equipmentIdStart},on:{input:function(e){e.target.composing||t.$set(t.form,"equipmentIdStart",e.target.value)}}})])]),t._v(" "),n("span",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),n("div",{staticClass:"el-input-number el-input-number--medium is-without-controls input-300",staticStyle:{width:"200px"}},[n("div",{staticClass:"el-input el-input--medium"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.equipmentIdEnd,expression:"form.equipmentIdEnd"}],staticClass:"el-input__inner",attrs:{type:"number",placeholder:"设备编号"},domProps:{value:t.form.equipmentIdEnd},on:{input:function(e){e.target.composing||t.$set(t.form,"equipmentIdEnd",e.target.value)}}})])]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.look}},[t._v("查询")])],1)],1),t._v(" "),n("div",{staticStyle:{"padding-bottom":"10px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.transfer}},[t._v("批量转移设备")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.importQrcode("pay")}}},[t._v("导出支付二维码")]),t._v(" "),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(e){t.importQrcode("register")}}},[t._v("导出注册二维码")]),t._v(" "),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-setting"},on:{click:t.equipmentSetPara}},[t._v("设置设备参数")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,ref:"multipleTable",attrs:{data:t.list,border:"",stripe:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{label:"设备编号",align:"center",prop:"equipmentValue"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.equipmentValue))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"外部编号",align:"center",prop:"thirdValue"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.thirdValue))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"设备类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.equipmentTypeName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"固件版本",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.versionno))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"设备来源",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.agentEquipmentStatus))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"render-header":t.renderHeader,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.equipmentParam))])]}}])})],1),t._v(" "),n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"pagination-container",attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible,"before-close":t.beforeClose,title:"批量转移设备",width:"450px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-dialog",{attrs:{visible:t.innerVisible,width:"360px",title:"提示","append-to-body":""},on:{"update:visible":function(e){t.innerVisible=e}}},[n("span",{staticStyle:{"font-size":"16px",color:"#ef6969"}},[t._v("请选择商家")])]),t._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("p",{staticStyle:{"font-size":"16px","line-height":"150%",padding:"6px 0"}},[t._v("已选择设备：")])]),t._v(" "),n("el-col",{attrs:{span:18}},[n("p",{staticStyle:{"font-size":"16px","line-height":"150%",padding:"6px 0"}},[t._v(t._s(t.willTranfers.length)+" 个")])])],1),t._v(" "),n("el-row",{staticStyle:{display:"flex","align-items":"center"}},[n("el-col",{attrs:{span:6}},[n("p",{staticStyle:{"font-size":"16px","line-height":"150%",padding:"6px 0"}},[t._v("转移给目标：")])]),t._v(" "),n("el-col",{attrs:{span:18}},[n("el-radio",{attrs:{label:"1"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("商家")]),t._v(" "),n("el-radio",{attrs:{label:"2"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[t._v("代理")])],1)],1),t._v(" "),n("el-row",{staticStyle:{"margin-top":"16px","align-items":"center"}},[n("el-col",{attrs:{span:6}}),t._v(" "),n("el-col",{attrs:{span:18}},[n("el-autocomplete",{staticClass:"width270",attrs:{"fetch-suggestions":t.querySearch,"popper-class":"my-autocomplete",placeholder:"请输入商家名或手机号"},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[n("div",{staticClass:"name"},[t._v(t._s(a.value))])]}}]),model:{value:t.selectAgent,callback:function(e){t.selectAgent=e},expression:"selectAgent"}})],1)],1),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.infoChecked,expression:"infoChecked"}],staticStyle:{"padding-top":"12px","font-size":"14px",color:"red"}},[t._v("未查询到相应的商家，请重新输入！")]),t._v(" "),n("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{disabled:!t.selectAgent,type:"primary"},on:{click:t.confirmTranfer}},[t._v("确定转移设备")])],1)],1),t._v(" "),n("el-dialog",{staticClass:"question-main-dialog",attrs:{visible:t.questionDialogVisible,width:"50%",title:"设备转移常见问题"},on:{"update:visible":function(e){t.questionDialogVisible=e}}},[n("div",{staticClass:"main question-main"},[n("div",{staticClass:"item"},[n("h2",[t._v("1. 什么是“待转移设备”？")]),t._v(" "),n("p",{staticClass:"info"},[t._v("“待转移设备”指由设备提供方，按设备编号批量导入的、且未注册绑定到商家账号的设备。如果购买了设备，而“待转移设备”列表为空，请及时联系你的设备提供方。")])]),t._v(" "),n("div",{staticClass:"item"},[n("h2",[t._v("2. 如何转移设备？")]),t._v(" "),n("p",{staticClass:"info"},[t._v(" 勾选设备后，点击“批量转移设备”按钮，可将设备批量转移到某个商家（或某个代理）账号下。")])]),t._v(" "),n("div",{staticClass:"item"},[n("h2",[t._v("3. 代理将设备批量转移给商家后，商家如何批量注册？")]),t._v(" "),n("p",{staticClass:"info"},[t._v("\n          （1）代理将设备批量转移给商家后，需告知商家登录PC端管理后台（网址：https://fac.leyaoyao.com/#/login ），\n          用商家账号、密码登录进去以后，点击“设备管理>未注册设备”，即可看到代理转移给商家的设备。\n          勾选未注册的设备，并点击“批量注册”，然后选择要投放的场地，即可批量注册成功。")]),t._v(" "),n("p",{staticClass:"info"},[t._v("\n          （2）批量注册成功后，商家再登录手机端管理后台，即可在相应场地查看到设备。商家无需再一个个扫码注册。\n        ")])]),t._v(" "),n("div",{staticClass:"item"},[n("h2",[t._v("4. 如果已转移的设备被商家解绑了，那设备会去往哪里？")]),t._v(" "),n("p",{staticClass:"info"},[t._v("如果已转移的设备被商家解绑了，则解绑的设备将会重新返回到代理的“待转移设备”列表中。")])])])]),t._v(" "),n("a",{ref:"downloadZip",staticStyle:{display:"none"},attrs:{id:"downLoad",href:t.loadUrl,download:t.downLoadFileName}}),t._v(" "),n("el-dialog",{attrs:{visible:t.equipmentParaDialog,"show-close":!1,"close-on-click-modal":!1,width:"500px",title:"设置设备参数"},on:{"update:visible":function(e){t.equipmentParaDialog=e}}},[n("set-equipment-paras-form",{attrs:{checkedrow:t.willTranfers},on:{cancel:function(e){t.equipmentParaDialog=!1},confirom:t.confirom}})],1)],1)},[],!1,null,"18011d94",null);y.options.__file="deviceTransfer.vue";e.default=y.exports},xALK:function(t,e,n){"use strict";var a=n("c0g1");n.n(a).a}}]);