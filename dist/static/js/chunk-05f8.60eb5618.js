(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-05f8","chunk-99e5"],{"/5xJ":function(e,t,a){"use strict";var n=a("WMxJ");a.n(n).a},B5LO:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return o});var n=a("Yfch"),s=function(e,t,a){if(!t||t&&!Object(n.b)(t))return a(new Error("请输入正确的11位手机号码"));a()},o=function(e,t,a){if(t&&!/^[A-Za-z0-9]{6,16}$/.test(t))return a(new Error("请输入6-16位的数字或字母"));a()}},CDJb:function(e,t,a){"use strict";var n=a("o80j");a.n(n).a},WMxJ:function(e,t,a){},ctKq:function(e,t,a){"use strict";a.r(t);var n=a("omMh"),s={props:{visiable:{type:Boolean,default:!1},projects:{type:Array,default:function(){(void 0).projects}}},data:function(){return{newAgentName:null}},methods:{toggleModal:function(e){var t=this,a=this.newAgentName;this.newAgentName&&(a=this.newAgentName.replace(/\s*/g,""));var s={status:!1,newAgentName:a,response:""};if("open"===e){var o=!1;if(!a||""===a)return void this.$message({message:"请输入要添加的项目名称",type:"warning"});if(a&&a.length>15)return void this.$message({message:"项目名称不能超过15个字",type:"warning"});if(this.projects.forEach(function(e){e.name===a&&(t.$message({message:"该项目已存在",type:"warning"}),o=!0)}),o)return;var i={agentBusinessId:"",name:a};n.a.saveAgentBusiness(i).then(function(e){e&&0===e.result?(s.response=e,t.newAgentName=null):t.$message.error("增加经营项目失败"),t.$emit("toggle-dialog",s)})}else this.newAgentName=null,this.$emit("toggle-dialog",s)}}},o=(a("CDJb"),a("ZrdR")),i=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visiable,"show-close":!1,"close-on-click-modal":!1,width:"500px",title:"添加经营项目"},on:{"update:visible":function(t){e.visiable=t}}},[a("el-input",{staticClass:"project-input",attrs:{placeholder:"请输入经营项目名称 (不超过15个字）"},model:{value:e.newAgentName,callback:function(t){e.newAgentName=t},expression:"newAgentName"}}),e._v(" "),a("p",{staticClass:"project-node"},[e._v("温馨提醒：添加后将作为公共选项，且不可删除，请认真填写。")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.toggleModal("open")}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.toggleModal("close")}}},[e._v("取消")])],1)],1)},[],!1,null,"cde05f66",null);i.options.__file="DialogAgent.vue";t.default=i.exports},nuLI:function(e,t,a){"use strict";a.r(t);var n=a("cLjf"),s=a.n(n),o=a("hDQ3"),i=a.n(o),r=a("B5LO"),l=a("omMh"),c={components:{DialogAgent:a("ctKq").default},data:function(){return{baseInfo:{num:"",agentUserName:"",linkName:"",phone:"",address:"",BD:"",agentUserId:"",codeValidate:"1",dataMonitor:"0",loginPhone:"",password:"",account:"",acc:""},baseInfoRules:{num:[{required:!0,message:"请输入代理商名称",trigger:"blur"}],agentUserName:[{required:!0,message:"请输入代理商名称",trigger:"blur"}],linkName:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:r.b,trigger:"blur"}],address:[{required:!0,message:"请输入联系地址",trigger:"blur"}],BD:[{required:!0,message:"请输入一位BD同事",trigger:"change"}],project:[{required:!1,type:"array",message:"请输入至少一个经营项目",trigger:"change"}],loginPhone:[{required:!0,message:"请输入登录账号",trigger:"blur"},{validator:r.b,trigger:"blur"}],codeValidate:[{required:!0}],dataMonitor:[{required:!0}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"请输入6-16位的数字或字母",trigger:"blur"}],acc:[{required:!1,message:"请输入手机号码",trigger:"blur"},{validator:r.b,trigger:"blur"}]},bdList:[],restaurants:"",checkBoxList:null,agentProject:[],allBusinProjects:[],dialogVisiable:!1}},computed:{checkedProjects:function(){var e=this,t=[];return this.baseInfo.projects.map(function(a){e.checkBoxList.map(function(e){a===e.name&&t.push(e.id)})}),t}},created:function(){var e=this;return i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.query.id){t.next=5;break}return t.next=3,e.getBDList();case 3:return t.next=5,e.getBusinProjects();case 5:case"end":return t.stop()}},t,e)}))()},mounted:function(){},methods:{checkChange:function(){this.$nextTick(function(){this.$refs.baseInfoRef.clearValidate(["preject"])})},getBDList:function(){var e=this;l.a.getBDList().then(function(t){t&&t.data&&(e.bdList=t.data)},function(){e.bdList=[]})},getBusinProjects:function(e){var t=this;l.a.getBusinProjects().then(function(e){var a=e.data;a instanceof Array?(t.allBusinProjects=a.map(function(e,t){return{name:e.name,id:e.agentBusinessId,isChecked:!1}}),t.$nextTick(function(){this.$refs.baseInfoRef.resetFields()})):(t.checkBoxList=[],t.$nextTick(function(){this.$refs.baseInfoRef.resetFields()})),t.getAgentInfo(t.$route.query.id)},function(){t.checkBoxList=[],t.getAgentInfo(t.$route.query.id)})},accountOnBlur:function(){},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getAgentInfo:function(e){var t=this;this.baseInfo.agentUserId=e,l.a.getAgentInfo(e).then(function(e){var a=e&&e.data;if(a){t.baseInfo={num:a.contractId,agentUserName:a.agentUserName,linkName:a.linkName,phone:a.phone,address:a.address,BD:a.bdId,agentUserId:a.agentUserId,loginPhone:a.loginPhone,password:"",acc:a.phone,codeValidate:""+a.issend,dataMonitor:""+a.associatedType},t.agentProject=a.agentBusiness;var n=[];t.allBusinProjects&&t.allBusinProjects.length>0&&t.allBusinProjects.map(function(e){t.agentProject&&t.agentProject.map(function(t){t.agentBusinessId===e.id&&(e.isChecked=!0)}),n.push(e)}),t.checkBoxList=n}},function(){})},projectHandler:function(e,t){var a=[];return e&&e.length>0?(e.map(function(e){e.agentBusinessId===t&&a.push(e.name)}),a):[]},updataAgentInfo:function(e){var t=this;l.a.updateAgent(e).then(function(e){e&&(t.$message({message:"修改成功!",type:"success"}),setTimeout(function(){t.tips="",t.$router.push({path:"insideManage/agentRoleList"})},500))},function(){})},handleAccountInfo:function(){var e=this;this.$refs.baseInfoRef.validate(function(t){if(!t)return!1;var a=e.baseInfo,n=[];if(e.checkBoxList&&e.checkBoxList.length>1&&e.checkBoxList.map(function(e){e.isChecked&&n.push(e.id)}),0===n.length)return e.$message({message:"请至少选择一项经营项目!",type:"error"}),!1;var s={contractId:a.num,agentUserName:a.agentUserName,linkName:a.linkName,phone:a.phone,address:a.address,agentUserId:a.agentUserId,bdId:a.BD,agentBusinessIds:n,loginPhone:a.loginPhone,associatedType:Number(a.dataMonitor),issend:Number(a.codeValidate)};e.updataAgentInfo(s)})},toggleDialog:function(e){this.dialogVisiable=e.status;var t=e.response;if(t){var a={id:t.data,isChecked:!1,name:e.newAgentName};this.allBusinProjects.push(a),this.$message({message:"添加成功",type:"success"})}}}},u=(a("/5xJ"),a("ZrdR")),d=Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-area bd-manage"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"1",mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"}},[e._v("基础信息")])],1),e._v(" "),a("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.baseInfo,rules:e.baseInfo&&e.baseInfoRules,"label-width":"120px","label-position":"left"}},[a("el-form-item",{attrs:{label:"合同编号",prop:"num"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入合同编号",maxlength:"64"},model:{value:e.baseInfo.num,callback:function(t){e.$set(e.baseInfo,"num",t)},expression:"baseInfo.num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理商名称",prop:"agentUserName"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商名称",maxlength:"16"},model:{value:e.baseInfo.agentUserName,callback:function(t){e.$set(e.baseInfo,"agentUserName",t)},expression:"baseInfo.agentUserName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人姓名",prop:"linkName"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系人姓名",maxlength:"16"},model:{value:e.baseInfo.linkName,callback:function(t){e.$set(e.baseInfo,"linkName",t)},expression:"baseInfo.linkName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号",type:"number",maxlength:"11"},model:{value:e.baseInfo.phone,callback:function(t){e.$set(e.baseInfo,"phone",t)},expression:"baseInfo.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系地址",prop:"address"}},[a("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入联系地址",maxlength:"40"},model:{value:e.baseInfo.address,callback:function(t){e.$set(e.baseInfo,"address",t)},expression:"baseInfo.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"BD同事",prop:"BD"}},[a("el-select",{staticClass:"input-300",attrs:{placeholder:"选择一位BD同事",clearable:""},model:{value:e.baseInfo.BD,callback:function(t){e.$set(e.baseInfo,"BD",t)},expression:"baseInfo.BD"}},e._l(e.bdList,function(e){return a("el-option",{key:e.id,staticStyle:{"text-align":"left"},attrs:{label:e.username,value:e.adUserId}})})),e._v(" "),a("span",{staticClass:"input-anno"},[e._v("选择一位BD同事作为跟进负责人")])],1),e._v(" "),e.checkBoxList&&e.checkBoxList.length>0?a("el-form-item",{ref:"projectsRef",attrs:{label:"经营项目",prop:"project"}},[e._l(e.checkBoxList,function(t,n){return[a("el-checkbox",{key:n,attrs:{checked:t.isChecked,label:t.name},model:{value:t.isChecked,callback:function(a){e.$set(t,"isChecked",a)},expression:"box.isChecked"}})]}),e._v(" "),a("span",{staticClass:"add-project",on:{click:function(t){e.dialogVisiable=!0}}},[e._v("+添加经营项目")])],2):e._e(),e._v(" "),a("br"),e._v(" "),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"1",mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"}},[e._v("账号信息")])],1),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"代理账号",prop:"account"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:e.baseInfo.loginPhone,disabled:!0,type:"number"},model:{value:e.baseInfo.loginPhone,callback:function(t){e.$set(e.baseInfo,"loginPhone",t)},expression:"baseInfo.loginPhone"}}),e._v(" "),a("span",{staticClass:"input-anno"},[e._v("账号暂不支持修改。")])],1),e._v(" "),a("el-form-item",{staticClass:"mb5",attrs:{label:"验证设置",prop:"codeValidate"}},[a("el-radio-group",{model:{value:e.baseInfo.codeValidate,callback:function(t){e.$set(e.baseInfo,"codeValidate",t)},expression:"baseInfo.codeValidate"}},[a("el-radio",{attrs:{label:"1"}},[e._v("需要短信验证码")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("不需要短信验证码")])],1)],1),e._v(" "),a("div",{staticClass:"hint-info-panel"},[a("div",{staticClass:"fl"},[e._v("说明：")]),e._v(" "),a("div",{staticClass:"ovh"},[a("p",[e._v("（1）“验证设置” 的短信验证码，是指该一级代理在创建 下级代理、下级商家 的时候，是否需要短信验证码。")]),e._v(" "),a("p",[e._v("（2）如果勾选了 “不需要短信验证码”，则该一级代理在创建 下级代理、下级商家 的时候，就不需要输入短信验证码。")]),e._v(" "),a("p",[e._v("（3）为保证用户的信息安全，如非特殊情况，请不要轻易勾选 “不需要短信验证码”。")])])]),e._v(" "),a("el-form-item",{staticClass:"mb5 mt10",attrs:{label:"数据监控",prop:"dataMonitor"}},[a("el-radio-group",{model:{value:e.baseInfo.dataMonitor,callback:function(t){e.$set(e.baseInfo,"dataMonitor",t)},expression:"baseInfo.dataMonitor"}},[a("el-radio",{attrs:{label:"0"}},[e._v("手动关联")]),e._v(" "),a("el-radio",{attrs:{label:"1"}},[e._v("自动关联")])],1)],1),e._v(" "),a("div",{staticClass:"hint-info-panel"},[a("div",{staticClass:"fl"},[e._v("说明：")]),e._v(" "),a("div",{staticClass:"ovh"},[a("p",[e._v("（1）若勾选了 “手动关联” ，则BD将设备导入给该一级代理后，该一级代理必须在代理后台创建（或绑定）下级商家 ，才能看到的设备的经营数据。")]),e._v(" "),a("p",[e._v("（2）若勾选了“自动关联”，则该一级代理无需在代理后台手动创建（或绑定）下级商家，只要BD将设备导入给该一级代理，系统就会自动关联并显示下级商家和经营数据。")]),e._v(" "),a("p",[e._v("（3）为保证用户的信息安全，如非特殊情况，请不要轻易勾选 “自动关联”。")])])]),e._v(" "),a("br"),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleAccountInfo}},[e._v("保存")])],1),e._v(" "),a("DialogAgent",{attrs:{visiable:e.dialogVisiable,projects:e.allBusinProjects},on:{"toggle-dialog":e.toggleDialog}})],1)},[],!1,null,"32ef4c58",null);d.options.__file="EditAgent.vue";t.default=d.exports},o80j:function(e,t,a){}}]);