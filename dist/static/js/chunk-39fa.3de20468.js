(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-39fa"],{"57kU":function(e,t,n){"use strict";n.r(t);var a=n("14Xm"),s=n.n(a),r=n("D3Ub"),o=n.n(r),i=n("B5LO"),l=n("omMh"),c={data:function(){return{baseInfo:{contractId:"",agentUserId:null,agentUserName:"",linkName:"",phone:"",address:"",BD:"",projects:[],account:"",password:"",acc:""},baseInfoRules:{contractId:[{required:!0,message:"请输入合同号",trigger:"blur"}],agentUserName:[{required:!0,message:"请输入代理商名称",trigger:"blur"}],linkName:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:i.b,trigger:"input"}],address:[{required:!0,message:"请输入联系地址",trigger:"blur"}],BD:[{required:!0,message:"请输入一位BD同事",trigger:"change"}],loginPhone:[{required:!0,message:"请输入正确的账号",trigger:"blur"},{validator:i.b,trigger:"input"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"请输入6-16位的数字或字母",trigger:"blur"}]},bdList:[],restaurants:"",checkBoxList:null,linkUserId:null,agentProject:[],showProjectTips:!1,allBusinProjects:[]}},computed:{projects:function(){var e=[];return this.allBusinProjects&&this.allBusinProjects.map(function(t){t.isChecked&&e.push(t.id)}),e}},created:function(){var e=this;return o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBDList();case 2:return t.next=4,e.getBusinProjects();case 4:case"end":return t.stop()}},t,e)}))()},methods:{checkChange:function(){this.$nextTick(function(){})},getBDList:function(){var e=this;l.a.getBDList().then(function(t){t&&t.data&&(e.bdList=t.data)},function(){e.bdList=[]})},getBusinProjects:function(e){var t=this;l.a.getBusinProjects().then(function(e){var n=e.data;n instanceof Array?(t.allBusinProjects=n.map(function(e,t){return{name:e.name,id:e.agentBusinessId,isChecked:!1}}),t.$nextTick(function(){this.$refs.baseInfoRef.resetFields()})):(t.checkBoxList=[],t.$nextTick(function(){this.$refs.baseInfoRef.resetFields()}))},function(){t.checkBoxList=[]})},accountOnBlur:function(){var e=this,t=this.baseInfo.loginPhone;return!(!t||""===t)&&(!(t.length<11)&&void l.a.getShanghuInfo(t).then(function(t){t&&t.data?(e.restaurants=(t.data.name||null)+"</br>",e.linkUserId=t.data.adUserId):(e.restaurants="该手机号码未注册!",e.linkUserId="")},function(){e.linkUserId="",e.baseInfo.account,e.restaurants=""}))},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},projectHandler:function(e,t){var n=[];return e&&e.length>0?(e.map(function(e){e.agentBusinessId===t&&n.push(e.name)}),n):[]},updataAgentInfo:function(e){var t=this;l.a.addAgentInfo(e).then(function(e){e&&(t.$message({message:"新增成功!",type:"success"}),setTimeout(function(){t.$router.push({path:"insideManage/agentRoleList"})},2e3))},function(){return!1})},handleAccountInfo:function(){var e=this;if(0===this.projects.length)return this.$message({message:"请至少选择一项经营项目!",type:"error"}),!1;this.$refs.baseInfoRef.validate(function(t){if(!t)return!1;var n=e.baseInfo,a=[];e.checkBoxList&&e.checkBoxList.length>1&&e.checkBoxList.map(function(e){e.isChecked&&a.push(e.id)});var s={loginPhone:n.loginPhone,code:"",contractId:n.contractId,agentUserName:n.agentUserName,linkName:n.linkName,phone:n.phone,address:n.address,bdId:n.BD,linkUserId:e.linkUserId,agentBusinessIds:e.projects,agentUserId:n.agentUserId};e.updataAgentInfo(s)})}}},u=(n("HCZp"),n("KHd+")),d=Object(u.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-area bd-manage"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"1",mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("基础信息")])],1),e._v(" "),n("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.baseInfo,rules:e.baseInfoRules,"label-width":"120px","label-position":"left"}},[n("el-form-item",{attrs:{label:"合同编号",prop:"contractId"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入合同编号",maxlength:"64"},model:{value:e.baseInfo.contractId,callback:function(t){e.$set(e.baseInfo,"contractId",t)},expression:"baseInfo.contractId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"代理商名称",prop:"agentUserName"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商名称",maxlength:"64"},model:{value:e.baseInfo.agentUserName,callback:function(t){e.$set(e.baseInfo,"agentUserName",t)},expression:"baseInfo.agentUserName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系人姓名",prop:"linkName"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系人姓名",maxlength:"32"},model:{value:e.baseInfo.linkName,callback:function(t){e.$set(e.baseInfo,"linkName",t)},expression:"baseInfo.linkName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号",type:"number",maxlength:"11"},model:{value:e.baseInfo.phone,callback:function(t){e.$set(e.baseInfo,"phone",t)},expression:"baseInfo.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系地址",prop:"address"}},[n("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入联系地址",maxlength:"256"},model:{value:e.baseInfo.address,callback:function(t){e.$set(e.baseInfo,"address",t)},expression:"baseInfo.address"}})],1),e._v(" "),e.bdList?n("el-form-item",{attrs:{label:"BD同事",prop:"BD"}},[n("el-select",{staticClass:"input-300",attrs:{placeholder:"选择一位BD同事",clearable:""},model:{value:e.baseInfo.BD,callback:function(t){e.$set(e.baseInfo,"BD",t)},expression:"baseInfo.BD"}},e._l(e.bdList,function(e){return n("el-option",{key:e.adUserId,staticStyle:{"text-align":"left"},attrs:{label:e.username,value:e.adUserId}})})),e._v(" "),n("span",{staticClass:"input-anno"},[e._v("选择一位BD同事作为跟进负责人")])],1):e._e(),e._v(" "),e.allBusinProjects&&e.allBusinProjects.length>0?n("el-form-item",{ref:"projectsRef",staticClass:"project-form",attrs:{label:"经营项目",prop:"project"}},[e._l(e.allBusinProjects,function(t,a){return[n("el-checkbox",{key:a,attrs:{checked:t.isChecked,label:t.name},model:{value:t.isChecked,callback:function(n){e.$set(t,"isChecked",n)},expression:"box.isChecked"}})]}),e._v(" "),n("br"),e._v(" "),n("span",{staticClass:"input-anno ",staticStyle:{position:"absolute",left:"0",bottom:"-100%",transition:"all 0.2s linear"}},[e._v("请选择至少一个经营项目.")])],2):e._e(),e._v(" "),n("br"),e._v(" "),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"1",mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("账号信息")])],1),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("el-form-item",{attrs:{label:"代理账号",prop:"phone"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号",type:"number",maxlength:"11"},model:{value:e.baseInfo.loginPhone,callback:function(t){e.$set(e.baseInfo,"loginPhone",t)},expression:"baseInfo.loginPhone"}}),e._v(" "),n("span",{staticClass:"input-anno"},[e._v("代理账号设置后，不可修改。")])],1),e._v(" "),n("br"),e._v(" "),n("p",{staticStyle:{margin:"10px","padding-bottom":"10px",color:"red"}},[e._v(e._s("注意：如果该账号未注册，则会直接开通注册，初始密码为16881688，请提醒及时修改密码。"))]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleAccountInfo}},[e._v("创建")])],1)],1)},[],!1,null,"04c318bf",null);d.options.__file="AddAgent.vue";t.default=d.exports},B5LO:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return r});var a=n("Yfch"),s=function(e,t,n){if(t&&!Object(a.b)(t))return n(new Error("请输入正确的11位手机号码"));n()},r=function(e,t,n){if(t&&!/^[A-Za-z0-9]{6,16}$/.test(t))return n(new Error("请输入6-16位的数字或字母"));n()}},HCZp:function(e,t,n){"use strict";var a=n("eqAK");n.n(a).a},eqAK:function(e,t,n){}}]);