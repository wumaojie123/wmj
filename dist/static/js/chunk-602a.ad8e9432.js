(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-602a"],{"0IYX":function(e,t,n){"use strict";var a=n("cvZA");n.n(a).a},SGCt:function(e,t,n){"use strict";n.r(t);var a=n("omMh"),o={name:"BdeditView",data:function(){return{BDInfo:{name:"",phone:"",agentUserId:""},BDInfoRules:{name:[{required:!0,message:"请输入BD姓名",trigger:"blur"}]}}},created:function(){this.$route.query.id&&this.getBdInfo(this.$route.query.id,this.$route.query.phone)},methods:{submit:function(){var e=this;this.$refs.InsideManageEditBdRef.validate(function(t){if(!t)return!1;e.editBD({agentUserId:e.BDInfo.agentUserId,phone:e.BDInfo.phone,bdName:e.BDInfo.name})})},getBdInfo:function(e,t){var n=this;a.a.getAgentInfo(e).then(function(e){n.BDInfo.name=e.data.agentUserName||"",n.BDInfo.phone=e.data.phone||"未录入手机号",n.BDInfo.agentUserId=e.data.agentUserId||""},function(e){})},editBD:function(e){var t=this;a.a.updateBD(e).then(function(e){t.$message({message:"修改成功!",type:"success"}),setTimeout(function(){t.$router.push({path:"insideManage/bdRoleManage"})},500)},function(e){})}}},i=(n("0IYX"),n("ZrdR")),s=Object(i.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-area bd-manage"},[n("el-form",{ref:"InsideManageEditBdRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.BDInfo,rules:e.BDInfoRules,"label-width":"120px","label-position":"left"}},[n("el-form-item",{attrs:{label:"BD姓名",prop:"name"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入BD姓名",maxlength:"11"},model:{value:e.BDInfo.name,callback:function(t){e.$set(e.BDInfo,"name",t)},expression:"BDInfo.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号码"}},[n("div",[e._v(e._s(e.BDInfo.phone)),n("span",{staticClass:"input-anno"},[e._v("如需更改账号或密码，请联系系统管理员")])])]),e._v(" "),n("br"),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("保存")])],1)],1)},[],!1,null,null,null);s.options.__file="EditBd.vue";t.default=s.exports},cvZA:function(e,t,n){}}]);