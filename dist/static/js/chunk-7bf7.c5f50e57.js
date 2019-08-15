(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7bf7","chunk-a35a"],{HcOS:function(e,t,i){},Rm7g:function(e,t,i){"use strict";var n=i("HcOS");i.n(n).a},bSnj:function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return o}),i.d(t,"c",function(){return l});var n=i("t3Un");function r(e){return Object(n.a)({url:"/rest/factory/agentGroupServiceList",method:"get",params:e})}function o(e){return Object(n.a)({url:"/rest/factory/savaGroupService",method:"post",data:e})}function l(e){return Object(n.a)({url:"/rest/factory/updateGroupService",method:"post",data:e})}},"bXK+":function(e,t,i){},iR9m:function(e,t,i){"use strict";i.r(t);var n=i("XJYT"),r=i("bSnj"),o=i("Yfch"),l=function(e,t,i){Object(o.c)(t)&&t<1e4&&t>0?i():i(new Error("价格必须为大于0的正数,价格需小于10000,最多保留2位小数"))},a=function(e,t,i){Object(o.b)(t)&&t<=1440?i():i(new Error("服务时间必须为大于0的小于等于1440(24小时)正整数"))},c=function(e,t,i){""===t||Object(o.b)(t)&&t<=1440?i():i(new Error("服务时间必须为大于0的小于等于1440(24小时)正整数"))},s=function(e,t,i){Object(o.b)(t)?i():i(new Error("模拟投币数必须为大于0的整数"))},u={props:{handleClose:{type:Function,default:function(){}},queryList:{type:Function,default:function(){}},visible:{type:Boolean,default:!1},actionRow:{type:Object,default:null},actionType:{type:String,default:""}},data:function(){return{ruleForm:{equipmentType:"CDZ",communication:1,billing:1,description:"",price:"",coins:"",serviceTime:""},rules:{equipmentType:[{required:!0,message:"请选择设备类型",trigger:"blur"}],communication:[{required:!0,message:"请选择通信方式",trigger:"blur"}],billing:[{required:!0,message:"请选择计费方式",trigger:"blur"}],description:[{required:!0,message:"请输入套餐名称",trigger:"change"},{max:12,message:"套餐名称长度不能超过10",trigger:"change"}],price:[{required:!0,message:"请输入价格",trigger:"change"},{validator:l}],coins:[{required:!0,message:"请输入模拟投币数",trigger:"change"},{validator:s}],serviceTime:[{required:!1,message:"请输入时长",trigger:"change"},{validator:c}]},loading_submit:!1}},computed:{getTitle:function(){return"add"===this.actionType?"添加服务套餐":"编辑服务套餐"}},created:function(){},methods:{onClose:function(){this.$refs.ruleForm.resetFields(),this.handleClose()},onOpen:function(){"edit"===this.actionType&&this.actionRow&&(this.ruleForm={equipmentType:this.actionRow.equipmentType,communication:this.actionRow.communication,billing:this.actionRow.billing,description:this.actionRow.description,price:this.actionRow.price,coins:this.actionRow.coins,serviceTime:this.actionRow.serviceTime})},onSubmit:function(){var e=this;e.$refs.ruleForm.validate(function(t){if(t){var i={equipmentType:e.ruleForm.equipmentType,communication:e.ruleForm.communication,billing:e.ruleForm.billing,description:e.ruleForm.description,price:Number(e.ruleForm.price),coins:Number(e.ruleForm.coins),serviceTime:Number(e.ruleForm.serviceTime)};2===e.ruleForm.communication&&delete i.coins,1===e.ruleForm.communication&&""===e.ruleForm.serviceTime&&delete i.serviceTime,e.loading_submit=!0,"edit"===e.actionType?(i.agentGroupServiceId=e.actionRow.agentGroupServiceId,Object(r.c)(i).then(function(t){0===t.result&&0===t.data&&(Object(n.Message)({message:"编辑服务套餐成功！",type:"success"}),e.queryList(1),e.onClose())}).finally(function(){e.loading_submit=!1})):Object(r.b)(i).then(function(t){0===t.result&&0===t.data&&(Object(n.Message)({message:"添加服务套餐成功！",type:"success"}),e.queryList(1),e.onClose())}).finally(function(){e.loading_submit=!1})}})},changeCommunication:function(e){1===e?(this.rules.serviceTime[0].required=!1,this.rules.serviceTime[1].validator=c):(this.rules.serviceTime[0].required=!0,this.rules.serviceTime[1].validator=a)}}},m=(i("Rm7g"),i("KHd+")),d=Object(m.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:e.getTitle,visible:e.visible,width:"500px"},on:{close:e.onClose,opened:e.onOpen}},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"设备类型",prop:"equipmentType"}},[i("el-select",{staticClass:"sel-item",attrs:{disabled:!0},model:{value:e.ruleForm.equipmentType,callback:function(t){e.$set(e.ruleForm,"equipmentType",t)},expression:"ruleForm.equipmentType"}},[i("el-option",{attrs:{label:"充电桩",value:"CDZ"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"通信方式",prop:"communication"}},[i("el-select",{staticClass:"sel-item",on:{change:e.changeCommunication},model:{value:e.ruleForm.communication,callback:function(t){e.$set(e.ruleForm,"communication",t)},expression:"ruleForm.communication"}},[i("el-option",{attrs:{value:1,label:"脉冲"}}),e._v(" "),i("el-option",{attrs:{value:2,label:"串口"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"计费方式",prop:"billing"}},[i("el-select",{staticClass:"sel-item",attrs:{disabled:!0},model:{value:e.ruleForm.billing,callback:function(t){e.$set(e.ruleForm,"billing",t)},expression:"ruleForm.billing"}},[i("el-option",{attrs:{value:1,label:"按时长计费"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"套餐名称",prop:"description"}},[i("el-input",{model:{value:e.ruleForm.description,callback:function(t){e.$set(e.ruleForm,"description",t)},expression:"ruleForm.description"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"价格",prop:"price"}},[i("el-input",{model:{value:e.ruleForm.price,callback:function(t){e.$set(e.ruleForm,"price",t)},expression:"ruleForm.price"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"时长(分钟)",prop:"serviceTime"}},[i("el-input",{model:{value:e.ruleForm.serviceTime,callback:function(t){e.$set(e.ruleForm,"serviceTime",t)},expression:"ruleForm.serviceTime"}})],1),e._v(" "),2!==e.ruleForm.communication?i("el-form-item",{attrs:{label:"模拟投币数",prop:"coins"}},[i("el-input",{model:{value:e.ruleForm.coins,callback:function(t){e.$set(e.ruleForm,"coins",t)},expression:"ruleForm.coins"}})],1):e._e()],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.onClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{loading:e.loading_submit,type:"primary"},on:{click:e.onSubmit}},[e._v("保 存")])],1)],1)},[],!1,null,"cce33e4a",null);d.options.__file="serviceSellDialog.vue";t.default=d.exports},mCN7:function(e,t,i){"use strict";var n=i("bXK+");i.n(n).a},szQx:function(e,t,i){"use strict";i.r(t);var n=i("bSnj"),r=i("7Qib"),o=i("XJYT"),l={XYJ:"洗衣机",CDZ:"充电桩",AMY:"按摩椅",ZLJ:"足疗机",AMD:"按摩垫"},a=["无","脉冲","串口"],c=["无","按时长计费"],s={components:{editDialog:i("iR9m").default},data:function(){return{listLoading:!0,list:[],colums:[{key:"equipmentType",label:"设备类型",render:function(e){return l[e]}},{key:"communication",label:"通信方式",render:function(e){return a[e]}},{key:"billing",label:"计费方式",render:function(e){return c[e]}},{key:"description",label:"套餐名称"},{key:"price",label:"价格",render:function(e){return e+"元"}},{key:"serviceTime",label:"时长",render:function(e){return e+"分钟"}},{key:"coins",label:"模拟投币数",render:function(e){return e?e+"币":"-"}},{key:"updated",label:"最新编辑时间",render:function(e){return Object(r.h)(e)}}],pageInfo:{total:0,pageSize:10,currPage:1},actionType:"",actionRow:null,vis_edit:!1}},created:function(){this.queryList()},methods:{handleDelete:function(e){var t=this;t.$confirm("确定要删除该服务套餐吗？","删除服务套餐",{confirmButtonText:"保存",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then(function(){t.listLoading=!0,Object(n.c)({agentGroupServiceId:e.agentGroupServiceId,deleted:1}).then(function(e){0===e.result&&(Object(o.Message)({message:"删除成功！",type:"success"}),t.queryList())}).finally(function(){t.listLoading=!1})}).catch(function(){})},handleEdit:function(e,t){this.actionType=e,this.actionRow=t,this.vis_edit=!0},handleClose:function(){this.vis_edit=!1},queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.listLoading=!0,this.pageInfo.currPage=t;var i={pageSize:this.pageInfo.pageSize,pageIndex:t};Object(n.a)(i).then(function(t){t.data?(e.list=t.data.items||[],e.pageInfo.total=t.data.total||0):e.pageInfo.total=0}).finally(function(){e.listLoading=!1})},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.total=0,this.queryList(1)},handleCurrentChange:function(e){this.queryList(e)},filterQueryList:function(){this.pageInfo.total=0,this.queryList(this.pageInfo.currPage)}}},u=(i("mCN7"),i("KHd+")),m=Object(u.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content-area"},[i("el-button",{staticClass:"creat-btn",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(){return e.handleEdit("add")}}},[e._v("添加服务套餐")]),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,height:550,border:"","highlight-current-row":""}},[e._l(e.colums,function(t,n){return i("el-table-column",{key:n,attrs:{prop:t.key,label:t.label,width:t.width,sortable:t.sortable,align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[e._v("\n        "+e._s(t.render?t.render(i.row[t.key]):i.row[t.key])+"\n      ")]}}])})}),e._v(" "),i("el-table-column",{attrs:{width:"150px",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini"},on:{click:function(){return e.handleEdit("edit",t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],2),e._v(" "),i("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),i("edit-dialog",{attrs:{"query-list":e.queryList,visible:e.vis_edit,"handle-close":e.handleClose,"action-row":e.actionRow,"action-type":e.actionType}})],1)},[],!1,null,"0f0da95f",null);m.options.__file="serviceSell.vue";t.default=m.exports}}]);