(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d5d4"],{B5LO:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return r});var a=t("Yfch"),o=function(e,n,t){if(!n||n&&!Object(a.b)(n))return t(new Error("请输入正确的11位手机号码"));t()},r=function(e,n,t){if(n&&!/^[A-Za-z0-9]{6,16}$/.test(n))return t(new Error("请输入6-16位的数字或字母"));t()}},R3lB:function(e,n,t){"use strict";var a=t("pAKB");t.n(a).a},nsxO:function(e,n,t){"use strict";t.r(n);var a=t("B5LO"),o=t("omMh"),r={data:function(){return{BDInfo:{name:"",phone:""},BDInfoRules:{name:[{required:!0,message:"请输入BD姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:a.b,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs.BDInfoRef.validate(function(n){if(!n)return!1;e.creatBd({bdName:e.BDInfo.name,loginPhone:e.BDInfo.phone,type:0})})},creatBd:function(e){var n=this;o.a.addBDInfo(e).then(function(e){n.$message({message:"新增成功!",type:"success"}),setTimeout(function(){n.$router.push({path:"insideManage/bdRoleManage"})},1500)},function(e){})}}},i=(t("R3lB"),t("ZrdR")),s=Object(i.a)(r,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content-area bd-manage"},[t("el-form",{ref:"BDInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.BDInfo,rules:e.BDInfoRules,"label-width":"120px","label-position":"left"}},[t("el-form-item",{attrs:{label:"BD姓名",prop:"name"}},[t("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入BD姓名",maxlength:"11"},model:{value:e.BDInfo.name,callback:function(n){e.$set(e.BDInfo,"name",n)},expression:"BDInfo.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[t("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号码",maxlength:"11"},model:{value:e.BDInfo.phone,callback:function(n){e.$set(e.BDInfo,"phone",n)},expression:"BDInfo.phone"}}),e._v(" "),t("span",{staticClass:"input-anno"},[e._v("请输入11位的手机号码")])],1),e._v(" "),t("br"),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),e.submit(n)}}},[e._v("保存")])],1)],1)},[],!1,null,null,null);s.options.__file="AddBd.vue";n.default=s.exports},pAKB:function(e,n,t){}}]);