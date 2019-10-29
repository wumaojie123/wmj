(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b127"],{IGA3:function(e,i,r){"use strict";var t=r("afS6");r.n(t).a},afS6:function(e,i,r){},bSnj:function(e,i,r){"use strict";r.d(i,"a",function(){return o}),r.d(i,"b",function(){return l}),r.d(i,"c",function(){return n});var t=r("t3Un");function o(e){return Object(t.a)({url:"/rest/factory/agentGroupServiceList",method:"get",params:e})}function l(e){return Object(t.a)({url:"/rest/factory/savaGroupService",method:"post",data:e})}function n(e){return Object(t.a)({url:"/rest/factory/updateGroupService",method:"post",data:e})}},iR9m:function(e,i,r){"use strict";r.r(i);var t=r("XJYT"),o=r("bSnj"),l=r("Yfch"),n=function(e,i,r){Object(l.c)(i)&&i<1e4&&i>0?r():r(new Error("价格必须为大于0的正数,价格需小于10000,最多保留2位小数"))},c=function(e,i,r){/^-?\d+\.?\d{0,3}$/.test(i)&&i<9.99&&i>0?r():r(new Error("电量必须为大于0的正数，电量需小于9.99，最多三位小数"))},s=function(e,i,r){Object(l.b)(i)&&i<=9999&&i>0?r():r(new Error("模拟投币数必须为大于0小于等于9999的正整数"))},u={props:{handleClose:{type:Function,default:function(){}},queryList:{type:Function,default:function(){}},visible:{type:Boolean,default:!1},actionRow:{type:Object,default:null},actionType:{type:String,default:""}},data:function(){return{ruleForm:{equipmentType:"CDZ",communication:1,billing:1,description:"",price:"",coins:"",serviceTime:"",electric:""},rules:{equipmentType:[{required:!0,message:"请选择设备类型",trigger:"blur"}],communication:[{required:!0,message:"请选择通信方式",trigger:"blur"}],billing:[{required:!0,message:"请选择计费方式",trigger:"blur"}],description:[{required:!0,message:"请输入套餐名称",trigger:"change"},{max:12,message:"套餐名称长度不能超过12",trigger:"change"}],price:[{required:!0,message:"请输入价格",trigger:"change"},{validator:n}],coins:[{required:!0,message:"请输入模拟投币数",trigger:"change"},{validator:s}],serviceTime:[],electric:[{required:!0,message:"请输入电量",trigger:"change"},{validator:c}]},loading_submit:!1,arrBilling:[{value:1,label:"按时长计费"},{value:2,label:"按电量计费"}]}},computed:{getTitle:function(){return"add"===this.actionType?"添加服务套餐":"编辑服务套餐"}},created:function(){},methods:{onClose:function(){this.$refs.ruleForm.resetFields(),this.ruleForm.coins="",this.ruleForm.serviceTime="",this.ruleForm.electric="",this.handleClose()},onOpen:function(){"edit"===this.actionType&&this.actionRow&&(this.ruleForm={equipmentType:this.actionRow.equipmentType,communication:this.actionRow.communication,billing:this.actionRow.billing,description:this.actionRow.description,price:this.actionRow.price,coins:null===this.actionRow.coins?"":this.actionRow.coins},2===this.actionRow.billing?this.ruleForm.electric=this.actionRow.electric:this.ruleForm.serviceTime=null===this.actionRow.serviceTime?"":this.actionRow.serviceTime)},onSubmit:function(){var e=this;if(2===e.ruleForm.billing){if(""===this.ruleForm.electric)return void Object(t.Message)({type:"warning",message:"请输入电量"});if(!(/^-?\d+\.?\d{0,3}$/.test(this.ruleForm.electric)&&this.ruleForm.electric<9.99&&this.ruleForm.electric>0))return void Object(t.Message)({message:"电量必须为大于0的正数，电量需小于9.99，最多三位小数",type:"warning"})}else{if(""===this.ruleForm.serviceTime)return void Object(t.Message)({message:"请输入时长",type:"warning"});if(!(Object(l.b)(e.ruleForm.serviceTime)&&e.ruleForm.serviceTime<=1440))return void Object(t.Message)({message:"服务时间必须为大于0的小于等于1440(24小时)正整数",type:"warning"})}e.$refs.ruleForm.validate(function(i){if(i){var r={equipmentType:e.ruleForm.equipmentType,communication:e.ruleForm.communication,billing:e.ruleForm.billing,description:e.ruleForm.description,price:Number(e.ruleForm.price),coins:Number(e.ruleForm.coins),serviceTime:Number(e.ruleForm.serviceTime)};2===e.ruleForm.communication&&(2!==e.ruleForm.billing?r.coins=Number(e.ruleForm.serviceTime):(r.electric=Number(e.ruleForm.electric),r.serviceTime=Math.round(100*r.electric),r.coins=Number(r.serviceTime))),1===e.ruleForm.communication&&""===e.ruleForm.serviceTime&&delete r.serviceTime,e.loading_submit=!0,"edit"===e.actionType?(r.agentGroupServiceId=e.actionRow.agentGroupServiceId,Object(o.c)(r).then(function(i){0===i.result&&0===i.data&&(Object(t.Message)({message:"编辑服务套餐成功！",type:"success"}),e.queryList(1),e.onClose())}).finally(function(){e.loading_submit=!1})):Object(o.b)(r).then(function(i){0===i.result&&0===i.data&&(Object(t.Message)({message:"添加服务套餐成功！",type:"success"}),e.queryList(1),e.onClose())}).finally(function(){e.loading_submit=!1})}})},changeCommunication:function(e){this.ruleForm.billing=1}}},a=(r("IGA3"),r("KHd+")),m=Object(a.a)(u,function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("el-dialog",{attrs:{title:e.getTitle,visible:e.visible,width:"500px"},on:{close:e.onClose,opened:e.onOpen}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"100px"}},[r("el-form-item",{attrs:{label:"设备类型",prop:"equipmentType"}},[r("el-select",{staticClass:"sel-item",attrs:{disabled:!0},model:{value:e.ruleForm.equipmentType,callback:function(i){e.$set(e.ruleForm,"equipmentType",i)},expression:"ruleForm.equipmentType"}},[r("el-option",{attrs:{label:"充电桩",value:"CDZ"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"通信方式",prop:"communication"}},[r("el-select",{staticClass:"sel-item",on:{change:e.changeCommunication},model:{value:e.ruleForm.communication,callback:function(i){e.$set(e.ruleForm,"communication",i)},expression:"ruleForm.communication"}},[r("el-option",{attrs:{value:1,label:"脉冲"}}),e._v(" "),r("el-option",{attrs:{value:2,label:"串口"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"计费方式",prop:"billing"}},[r("el-select",{staticClass:"sel-item",attrs:{disabled:2!==e.ruleForm.communication},model:{value:e.ruleForm.billing,callback:function(i){e.$set(e.ruleForm,"billing",i)},expression:"ruleForm.billing"}},e._l(e.arrBilling,function(e,i){return r("el-option",{key:i,attrs:{value:e.value,label:e.label}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"套餐名称",prop:"description"}},[r("el-input",{model:{value:e.ruleForm.description,callback:function(i){e.$set(e.ruleForm,"description",i)},expression:"ruleForm.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"价格(元)",prop:"price"}},[r("el-input",{model:{value:e.ruleForm.price,callback:function(i){e.$set(e.ruleForm,"price",i)},expression:"ruleForm.price"}})],1),e._v(" "),2==e.ruleForm.billing?r("el-form-item",{key:"2",attrs:{label:"电量(度)",prop:"electric"}},[r("el-input",{key:"input2",model:{value:e.ruleForm.electric,callback:function(i){e.$set(e.ruleForm,"electric",i)},expression:"ruleForm.electric"}})],1):e._e(),e._v(" "),2!==e.ruleForm.billing?r("el-form-item",{key:"1",attrs:{label:"时长(分钟)",prop:"serviceTime"}},[r("el-input",{key:"input1",model:{value:e.ruleForm.serviceTime,callback:function(i){e.$set(e.ruleForm,"serviceTime",i)},expression:"ruleForm.serviceTime"}})],1):e._e(),e._v(" "),2!==e.ruleForm.communication?r("el-form-item",{key:"coins",attrs:{label:"模拟投币数",prop:"coins"}},[r("el-input",{key:"input3",model:{value:e.ruleForm.coins,callback:function(i){e.$set(e.ruleForm,"coins",i)},expression:"ruleForm.coins"}})],1):e._e()],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.onClose}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{loading:e.loading_submit,type:"primary"},on:{click:e.onSubmit}},[e._v("保 存")])],1)],1)},[],!1,null,"6643a60e",null);m.options.__file="serviceSellDialog.vue";i.default=m.exports}}]);