(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b0a0"],{"1FWb":function(e,n,t){"use strict";var a=t("gSzn");t.n(a).a},Df2f:function(e,n,t){"use strict";t.r(n);var a=t("c1P4"),s={data:function(){return{baseInfo:{loginPhone:"",linkName:"",agentUserName:"",adOrgId:""},baseInfoRules:{loginPhone:[{required:!0,message:"请输入商家账号",trigger:"blur"}]}}},created:function(){var e=JSON.parse(decodeURIComponent(this.$route.params.info));this.baseInfo.loginPhone=e.userName,this.baseInfo.linkName=e.linkName,this.baseInfo.agentUserName=e.merchantName,this.baseInfo.adOrgId=e.adOrgId},methods:{handleBaseInfo:function(){var e=this;this.$refs.baseInfoRef.validate(function(n){if(!n)return!1;e.handleAngentInfo()})},handleAngentInfo:function(){var e=this,n=this.baseInfo;Object(a.d)(n).then(function(n){0===n.result?(e.$message({message:"编辑商家信息成功",type:"success"}),e.$router.go(-1)):e.$message({message:"编辑商家信息失败",type:"error"})})}}},o=(t("1FWb"),t("ZrdR")),r=Object(o.a)(s,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content-area"},[t("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.baseInfo,rules:e.baseInfoRules,"label-width":"120px","label-position":"right"}},[t("el-form-item",{attrs:{label:"商家账号",prop:"loginPhone"}},[t("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入商家账号",type:"text",maxlength:"11",disabled:""},model:{value:e.baseInfo.loginPhone,callback:function(n){e.$set(e.baseInfo,"loginPhone",n)},expression:"baseInfo.loginPhone"}}),e._v(" "),t("span",{staticClass:"input-anno"},[e._v("账号暂不支持修改")])],1),e._v(" "),t("el-form-item",{attrs:{label:"商家名称"}},[t("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入商家名称",type:"tel",maxlength:"16",clearable:""},model:{value:e.baseInfo.agentUserName,callback:function(n){e.$set(e.baseInfo,"agentUserName",n)},expression:"baseInfo.agentUserName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系人姓名"}},[t("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系人姓名",type:"text",maxlength:"16",clearable:""},model:{value:e.baseInfo.linkName,callback:function(n){e.$set(e.baseInfo,"linkName",n)},expression:"baseInfo.linkName"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleAngentInfo}},[e._v("保存")])],1)],1)],1)},[],!1,null,null,null);r.options.__file="EditBusiness.vue";n.default=r.exports},c1P4:function(e,n,t){"use strict";t.d(n,"c",function(){return s}),t.d(n,"b",function(){return o}),t.d(n,"d",function(){return r}),t.d(n,"a",function(){return l});var a=t("t3Un");function s(e){return Object(a.a)({url:"/merchant/manage/query",method:"post",data:e})}function o(e){return Object(a.a)({url:"/merchant/childMerchants/query",method:"get",params:e})}function r(e){return Object(a.a)({url:"/agentManage/updateMerchant",method:"post",data:e})}function l(e){return Object(a.a)({url:"/agentManage/addMerchant",method:"post",data:e})}},gSzn:function(e,n,t){}}]);