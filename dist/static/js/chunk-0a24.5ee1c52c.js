(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0a24"],{"/xLD":function(e,t,n){"use strict";var a=n("HKsQ");n.n(a).a},AVzk:function(e,t,n){"use strict";n.r(t);var a=n("B5LO"),s=n("xBhl"),r=n("Yfch"),o={data:function(){return{type:"new",description:null,linkName:"",baseInfo:{agentUserName:"",linkName:"",phone:"",address:"",code:"",loginPhone:"",type:2,linkUserId:""},baseInfoRules:{agentUserName:[{required:!0,message:"请输入代理商名称",trigger:"blur"}],linkName:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:a.b,trigger:"blur"}],address:[{required:!0,message:"请输入联系地址",trigger:"blur"}],loginPhone:[{required:!0,message:"请输入代理商账号",trigger:"blur"}],code:[{required:!0,message:"请输入4位手机验证码",trigger:"blur"}]}}},methods:{handleBaseInfo:function(){var e=this;this.$refs.baseInfoRef.validate(function(t){if(!t)return!1;e.handleAngentInfo()})},handleAngentInfo:function(){var e=this,t=this.baseInfo;Object(s.e)(t).then(function(t){0===t.result?(e.$message({message:"新增代理信息成功",type:"success"}),e.$router.go(-1)):e.$message({message:"新增代理信息失败",type:"error"})})},changLoginPhone:function(){this.linkName="",this.baseInfo.linkUserId=""},handelBlur:function(){var e=this;this.baseInfo.linkUserId="",Object(r.b)(this.baseInfo.loginPhone)?Object(s.d)({phone:this.baseInfo.loginPhone}).then(function(t){0===t.result&&t.data&&t.data.adUserId?(e.baseInfo.linkUserId=t.data.adUserId,e.linkName=""+t.data.name,e.description=null):0!==t.result||t.data?-1===t.result&&(e.linkName="",e.baseInfo.linkUserId=""):e.description=t.description}):this.$message({message:"请输入正确的代理账号(11手机号)",type:"error"})},getCode:function(){var e=this;Object(r.b)(this.baseInfo.loginPhone)?Object(s.c)({phone:this.baseInfo.loginPhone}).then(function(t){0===t.result?e.$message({message:"手机短信验证码已经发送成功",type:"success"}):e.$message({message:"手机短信验证码已经发送失败",type:"error"})}):this.$message({message:"请输入正确的代理账号(11手机号)",type:"error"})}}},l=(n("/xLD"),n("KHd+")),i=Object(l.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-area"},[n("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.baseInfo,rules:e.baseInfoRules,"label-width":"120px","label-position":"right"}},[n("el-form-item",{attrs:{label:"代理账号",prop:"loginPhone"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商账号",maxlength:"11",clearable:""},on:{blur:e.handelBlur,change:e.changLoginPhone},model:{value:e.baseInfo.loginPhone,callback:function(t){e.$set(e.baseInfo,"loginPhone",t)},expression:"baseInfo.loginPhone"}}),e._v(" "),n("span",{staticClass:"input-anno"},[e._v("账号设置后，不可修改")])],1),e._v(" "),n("el-form-item",{attrs:{label:"账号状态"}},[n("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.description,expression:"!description"}],staticClass:"input-300",attrs:{placeholder:"系统自动识别",maxlength:"32",disabled:""},model:{value:e.linkName,callback:function(t){e.linkName=t},expression:"linkName"}}),e._v(" "),"edit"===e.type?n("span",{staticClass:"input-anno"},[e._v("如需更改，请输入新的手机号码重新进行绑定验证")]):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"短信验证码",prop:"code"}},[n("el-input",{staticStyle:{width:"150px","margin-right":"32px"},attrs:{placeholder:"请输入验证码",maxlength:"4",clearable:""},model:{value:e.baseInfo.code,callback:function(t){e.$set(e.baseInfo,"code",t)},expression:"baseInfo.code"}}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.getCode}},[e._v("获取验证码")]),e._v(" "),n("span",{staticClass:"input-anno"},[e._v("请及时让代理告知短信验证码")])],1),e._v(" "),n("el-form-item",{attrs:{label:"代理名称"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商名称",type:"text",maxlength:"64",clearable:""},model:{value:e.baseInfo.agentUserName,callback:function(t){e.$set(e.baseInfo,"agentUserName",t)},expression:"baseInfo.agentUserName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系人姓名"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系人姓名",type:"text",maxlength:"32",clearable:""},model:{value:e.baseInfo.linkName,callback:function(t){e.$set(e.baseInfo,"linkName",t)},expression:"baseInfo.linkName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系电话"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号",type:"tel",maxlength:"11",clearable:""},model:{value:e.baseInfo.phone,callback:function(t){e.$set(e.baseInfo,"phone",t)},expression:"baseInfo.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系地址"}},[n("el-input",{staticStyle:{width:"600px"},attrs:{placeholder:"请输入联系地址",type:"text",maxlength:"256",clearable:""},model:{value:e.baseInfo.address,callback:function(t){e.$set(e.baseInfo,"address",t)},expression:"baseInfo.address"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.handleBaseInfo}},[e._v("创建/绑定")])],1),e._v(" "),n("div",{staticStyle:{"font-size":"14px","padding-left":"120px",color:"#b1a8a8"}},[n("p",[e._v("如果该账号之前已注册，将会直接关联绑定，原账号密码不变；")]),e._v(" "),n("p",[e._v("如果该账号未注册，则会直接开通注册，初始密码为16881688，请提醒及时修改密码")])])],1)],1)},[],!1,null,null,null);i.options.__file="NewAgent.vue";t.default=i.exports},B5LO:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return r});var a=n("Yfch"),s=function(e,t,n){if(t&&!Object(a.b)(t))return n(new Error("请输入正确的11位手机号码"));n()},r=function(e,t,n){if(t&&!/^[A-Za-z0-9]{6,16}$/.test(t))return n(new Error("请输入6-16位的数字或字母"));n()}},HKsQ:function(e,t,n){},xBhl:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return i});var a=n("t3Un");function s(e){return Object(a.a)({url:"/agentManage/queryAgents",method:"get",params:e})}function r(e){return Object(a.a)({url:"/agentManage/sendCode",method:"get",params:e})}function o(e){return Object(a.a)({url:"/agentManage/addOrUpdateAgent",method:"post",data:e})}function l(e){return Object(a.a)({url:"/agentManage/getAgent",method:"get",params:e})}function i(e){return Object(a.a)({url:"/agentManage/getMerchant",method:"get",params:e})}}}]);