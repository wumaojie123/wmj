(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-69ea"],{B5LO:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return s});var a=n("Yfch"),r=function(e,t,n){if(t&&!Object(a.b)(t))return n(new Error("请输入正确的11位手机号码"));n()},s=function(e,t,n){if(t&&!/^[A-Za-z0-9]{6,16}$/.test(t))return n(new Error("请输入6-16位的数字或字母"));n()}},QsWH:function(e,t,n){"use strict";n.r(t);var a=n("B5LO"),r=n("xBhl"),s={data:function(){return{linkName:"",baseInfo:{agentUserName:"",linkName:"",phone:"",address:"",loginPhone:"",linkUserId:"",type:2},baseInfoRules:{agentUserName:[{required:!0,message:"请输入代理商名称",trigger:"blur"}],linkName:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:a.b,trigger:"blur"}],address:[{required:!0,message:"请输入联系地址",trigger:"change"}]}}},created:function(){var e=this.$route.query.ID;e&&this.getAngentDetail(e)},methods:{handleBaseInfo:function(){var e=this;this.baseInfo.linkUserId?this.$refs.baseInfoRef.validate(function(t){if(!t)return!1;e.handleAngentInfo()}):this.$message({message:"请先获取关联商家相关信息",type:"error"})},getAngentDetail:function(e){var t=this;Object(r.b)({agentUserId:e}).then(function(e){if(0===e.result){var n=e.data;for(var a in t.baseInfo)n[a]&&(t.baseInfo[a]=n[a]||"");t.getMerchant()}else t.$message({message:"获取代理商数据失败，请稍后再试",type:"error"})})},handleAngentInfo:function(){var e=this,t=this.baseInfo;t.agentUserId=this.$route.query.ID,Object(r.e)(t).then(function(t){0===t.result?(e.$message({message:"修改代理商信息成功",type:"success"}),e.$router.go(-1)):e.$message({message:"修改代理商信息失败",type:"error"})})},getMerchant:function(){var e=this;Object(r.d)({phone:this.baseInfo.loginPhone}).then(function(t){0===t.result&&t.data?(e.baseInfo.linkUserId=t.data.adUserId,e.linkName=t.data.name):e.$message({message:"数据查询失败，请稍后再试",type:"error"})})}}},o=n("KHd+"),l=Object(o.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-area"},[n("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.baseInfo,rules:e.baseInfoRules,"label-width":"120px","label-position":"right"}},[n("el-form-item",{attrs:{label:"代理账号"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商账号",maxlength:"11",disabled:""},model:{value:e.baseInfo.loginPhone,callback:function(t){e.$set(e.baseInfo,"loginPhone",t)},expression:"baseInfo.loginPhone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"代理商名称"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商名称",type:"text",maxlength:"64",clearable:""},model:{value:e.baseInfo.agentUserName,callback:function(t){e.$set(e.baseInfo,"agentUserName",t)},expression:"baseInfo.agentUserName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系人姓名"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系人姓名",type:"text",maxlength:"32",clearable:""},model:{value:e.baseInfo.linkName,callback:function(t){e.$set(e.baseInfo,"linkName",t)},expression:"baseInfo.linkName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系电话"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号",type:"tel",maxlength:"11",clearable:""},model:{value:e.baseInfo.phone,callback:function(t){e.$set(e.baseInfo,"phone",t)},expression:"baseInfo.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系地址"}},[n("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入联系地址",type:"text",maxlength:"256",clearable:""},model:{value:e.baseInfo.address,callback:function(t){e.$set(e.baseInfo,"address",t)},expression:"baseInfo.address"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{disabled:""===e.baseInfo.linkUserId,type:"primary"},on:{click:e.handleBaseInfo}},[e._v("保存")])],1)],1)],1)},[],!1,null,null,null);l.options.__file="EditAgent.vue";t.default=l.exports},xBhl:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return i});var a=n("t3Un");function r(e){return Object(a.a)({url:"/agentManage/queryAgents",method:"get",params:e})}function s(e){return Object(a.a)({url:"/agentManage/sendCode",method:"get",params:e})}function o(e){return Object(a.a)({url:"/agentManage/addOrUpdateAgent",method:"post",data:e})}function l(e){return Object(a.a)({url:"/agentManage/getAgent",method:"get",params:e})}function i(e){return Object(a.a)({url:"/agentManage/getMerchant",method:"get",params:e})}}}]);