(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-158b"],{"3rxP":function(t,e,a){t.exports=a.p+"static/img/toBheader.0177471.png"},"7jAm":function(t,e,a){"use strict";a.r(e);var n=a("14Xm"),r=a.n(n),s=a("D3Ub"),i=a.n(s),o=a("mt21"),l=a("xBhl"),c=a("kbZS"),u=a("9x5b"),p={data:function(){return{baseInfo:{title:"",agentUserId:"",isdel:"N",wechatImg:"",telephone:"",bannerImg:"",adBrandConfigId:"",defaultHeadImg:""},baseInfoRules:{},imageUrl:"",defaultHeadImgUrl:"",bannerUrl:"",wechartUrl:"",uploadUrl:c.a,preUrl:"http://lyy-public.oss-cn-shenzhen.aliyuncs.com/",linkInfo:"",btn:""}},created:function(){this.getAngentInfo()},mounted:function(){},methods:{handleClipboard:function(){Object(u.a)(this.linkInfo,event)},getAngentInfo:function(){var t=this;return i()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.c)();case 2:0===(a=e.sent).result&&a.data&&a.data.agentUserId&&(t.linkInfo="https://b.leyaoyao.com/group/index.html?ag="+a.data.agentUserId,t.getAdConfig(a.data.agentUserId));case 4:case"end":return e.stop()}},e,t)}))()},getAdConfig:function(t){var e=this;return i()(r.a.mark(function a(){var n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(o.c)({agentUserId:t});case 2:0===(n=a.sent).result&&(n.data?(e.baseInfo=n.data,e.baseInfo.bannerImg&&(e.bannerUrl=""+e.preUrl+e.baseInfo.bannerImg),e.baseInfo.wechatImg&&(e.wechartUrl=""+e.preUrl+e.baseInfo.wechatImg),e.baseInfo.defaultHeadImg&&(e.defaultHeadImgUrl=""+e.preUrl+e.baseInfo.defaultHeadImg)):e.baseInfo={title:"",agentUserId:t,isdel:"N",wechatImg:"",telephone:"",bannerImg:"",adBrandConfigId:"",defaultHeadImg:""});case 4:case"end":return a.stop()}},a,e)}))()},handleAvatarSuccess:function(t,e){this.baseInfo.bannerImg=t.para,this.bannerUrl=""+this.preUrl+t.para},handleWechartSuccess:function(t,e){this.baseInfo.wechatImg=t.para,this.wechartUrl=""+this.preUrl+t.para},handleDefaultHeadImgSuccess:function(t,e){this.baseInfo.defaultHeadImg=t.para,this.defaultHeadImgUrl=""+this.preUrl+t.para},beforeAvatarUpload:function(t){var e=t.size/1024/1024<.5,a="image/jpeg"===t.type||"image/png"===t.type||"image/jpg"===t.type;return a||this.$message.error("文件格式为jpeg，png，jpg"),e||this.$message.error("文件大小不能超过500K!"),a&&e},handleBaseInfo:function(){var t=this;this.$refs.baseInfoRef.validate(function(e){if(!e)return!1;t.handleAngentInfo()})},handleAngentInfo:function(){var t=this,e=this.baseInfo;e.title||e.wechatImg||e.telephone||e.bannerImg||e.defaultHeadImg?Object(o.a)(e).then(function(e){0===e.result?(t.$message({message:e.data||"运营商后台信息配置成功",type:"success"}),t.getAdConfig(t.baseInfo.agentUserId)):t.$message({message:"配置信息失败",type:"error"})}):this.$message({message:"配置信息不能全部为空",type:"error"})},handleRemove:function(t){"bannerUrl"===t?(this.bannerUrl="",this.baseInfo.bannerImg=""):"wechatImg"===t?(this.baseInfo.wechatImg="",this.wechartUrl=""):"defaultHeadImgUrl"===t&&(this.baseInfo.defaultHeadImg="",this.defaultHeadImgUrl="")}}},d=(a("aoSI"),a("KHd+")),f=Object(d.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-area"},[n("div",{staticStyle:{"border-bottom":"1px solid #f0f0f0"}},[n("h1",{staticStyle:{"font-size":"16px","font-weight":"700"}},[t._v("运营商后台定制链接")]),t._v(" "),n("el-form",{staticStyle:{"margin-top":"20px"},attrs:{"label-position":"right"}},[n("el-form-item",[n("el-input",{staticClass:"input-600",attrs:{placeholder:"链接地址",type:"text",readonly:"",maxlength:"10",clearable:""},model:{value:t.linkInfo,callback:function(e){t.linkInfo=e},expression:"linkInfo"}}),t._v(" "),n("el-button",{staticClass:"copy-link",attrs:{type:"primary"},on:{click:function(e){t.handleClipboard(e)}}},[t._v("复制链接")]),t._v(" "),n("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0","line-height":"1.2","margin-top":"10px"}},[t._v("1.通过定制链接进入管理后台可实现以下配置的功能。")]),t._v(" "),n("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0","line-height":"1.4"}},[t._v("2.可将链接插入公众号菜单或发送给运营商。")])],1)],1)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"20px","border-bottom":"1px solid #f0f0f0"}},[n("h1",{staticStyle:{"font-size":"16px","font-weight":"700"}},[t._v("品牌信息配置")]),t._v(" "),n("el-form",{ref:"baseInfoRef",staticStyle:{"margin-top":"20px"},attrs:{model:t.baseInfo,rules:t.baseInfoRules,"label-width":"145px","label-position":"left"}},[n("el-form-item",{attrs:{label:"运营商后台标题"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入运营商后台标题",type:"text",maxlength:"10",clearable:""},model:{value:t.baseInfo.title,callback:function(e){t.$set(t.baseInfo,"title",e)},expression:"baseInfo.title"}}),t._v(" "),n("span",{staticClass:"input-anno"},[t._v("运营商管理后台页面顶部标题，最多可输入10个文字\n          "),n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("img",{staticClass:"popver-img",staticStyle:{width:"255px",height:"290px"},attrs:{src:a("w4u3")}}),t._v(" "),n("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"运营商后台logo"}},[t.bannerUrl?t._e():n("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,action:t.uploadUrl}},[n("i",{staticClass:"el-icon-plus avatar-uploader-icon banner-width-height",staticStyle:{"line-height":"98px"}})]),t._v(" "),t.bannerUrl?n("div",{staticClass:"uploader-wrap banner-width-height"},[n("img",{staticClass:"avatar banner-width-height",attrs:{src:t.bannerUrl}}),t._v(" "),n("div",{staticClass:"uploader-wrap-avatar banner-width-height",on:{click:function(e){t.handleRemove("bannerUrl")}}},[n("i",{staticClass:"el-icon-delete el-icon"})])]):t._e(),t._v(" "),n("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0"}},[t._v("1.运营商后台登陆页logo，\n          "),n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("img",{staticClass:"popver-img",attrs:{src:a("T/0B")}}),t._v(" "),n("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1),t._v(" "),n("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0"}},[t._v("2.建议尺寸：148*195px，文件大小不超过500k，建议格式：png格式，透明底")])],1),t._v(" "),n("el-form-item",{attrs:{label:"运营商后台客服电话"}},[n("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入运营商后台客服电话",type:"text",maxlength:"20",clearable:""},model:{value:t.baseInfo.telephone,callback:function(e){t.$set(t.baseInfo,"telephone",e)},expression:"baseInfo.telephone"}}),t._v(" "),n("span",{staticClass:"input-anno"},[n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("img",{staticClass:"popver-img",staticStyle:{width:"255px",height:"309px"},attrs:{src:a("k0dd")}}),t._v(" "),n("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"运营商后台客服微信"}},[t.wechartUrl?t._e():n("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleWechartSuccess,"before-upload":t.beforeAvatarUpload,action:t.uploadUrl}},[n("i",{staticClass:"el-icon-plus avatar-uploader-icon wechart-width-height",staticStyle:{"line-height":"130px"}})]),t._v(" "),t.wechartUrl?n("div",{staticClass:"uploader-wrap wechart-width-height"},[n("img",{staticClass:"avatar wechart-width-height",attrs:{src:t.wechartUrl}}),t._v(" "),n("div",{staticClass:"uploader-wrap-avatar wechart-width-height",on:{click:function(e){t.handleRemove("wechatImg")}}},[n("i",{staticClass:"el-icon-delete el-icon"})])]):t._e(),t._v(" "),n("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0"}},[t._v("请上传客服公众号或个人微信二维码\n          "),n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("img",{staticClass:"popver-img",staticStyle:{width:"255px",height:"309px"},attrs:{src:a("pZYu")}}),t._v(" "),n("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"运营商默认头像"}},[t.defaultHeadImgUrl?t._e():n("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleDefaultHeadImgSuccess,"before-upload":t.beforeAvatarUpload,action:t.uploadUrl}},[n("i",{staticClass:"el-icon-plus avatar-uploader-icon wechart-width-height",staticStyle:{"line-height":"130px"}})]),t._v(" "),t.defaultHeadImgUrl?n("div",{staticClass:"uploader-wrap wechart-width-height"},[n("img",{staticClass:"avatar wechart-width-height",attrs:{src:t.defaultHeadImgUrl}}),t._v(" "),n("div",{staticClass:"uploader-wrap-avatar wechart-width-height",on:{click:function(e){t.handleRemove("defaultHeadImgUrl")}}},[n("i",{staticClass:"el-icon-delete el-icon"})])]):t._e(),t._v(" "),n("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0"}},[t._v("1.商户在管理后台的默认头像，请上传公司品牌logo，\n          "),n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("img",{staticClass:"popver-img",staticStyle:{width:"255px",height:"309px"},attrs:{src:a("3rxP")}}),t._v(" "),n("span",{staticStyle:{color:"#409EFF"},attrs:{slot:"reference"},slot:"reference"},[t._v("查看示例>")])])],1),t._v(" "),n("p",{staticClass:"input-anno",staticStyle:{"margin-left":"0"}},[t._v("2.建议尺寸：200*200cm，文件大小不超过500k。")])],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.handleBaseInfo}},[t._v("保存")])],1)],1)],1),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"20px"}},[e("h1",{staticStyle:{"font-size":"28px","font-weight":"700"}},[this._v("功能配置")]),this._v(" "),e("div",{staticStyle:{height:"160px","line-height":"160px","text-align":"center","font-weight":"700","font-size":"30px"}},[this._v("功能开发中，敬请期待！")])])}],!1,null,null,null);f.options.__file="ToBBrand.vue";e.default=f.exports},"9x5b":function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("Kw5r"),r=a("sxGJ"),s=a.n(r);function i(t,e){var a=new s.a(e.target,{text:function(){return t}});a.on("success",function(){n.default.prototype.$message({message:"复制链接成功",type:"success",duration:1500}),a.off("error"),a.off("success"),a.destroy()}),a.on("error",function(){n.default.prototype.$message({message:"Copy failed",type:"error"}),a.off("error"),a.off("success"),a.destroy()}),a.onClick(e)}},"T/0B":function(t,e,a){t.exports=a.p+"static/img/logo.8b6e892.png"},aoSI:function(t,e,a){"use strict";var n=a("xTMW");a.n(n).a},k0dd:function(t,e,a){t.exports=a.p+"static/img/phone.ba6d674.png"},kbZS:function(t,e,a){"use strict";e.a="/agent/rest/file/upload"},mt21:function(t,e,a){"use strict";a.d(e,"d",function(){return r}),a.d(e,"c",function(){return s}),a.d(e,"b",function(){return i}),a.d(e,"a",function(){return o});var n=a("t3Un");function r(t){return Object(n.a)({url:"/rest/adConsumersConfig/getAdConsumersConfig",method:"get",params:t})}function s(t){return Object(n.a)({url:"/rest/adBrandConfig/getAdBrandConfig",method:"get",params:t})}function i(t){return Object(n.a)({url:"/rest/adConsumersConfig/editAdConsumersConfig",method:"post",data:t})}function o(t){return Object(n.a)({url:"/rest/adBrandConfig/editAdBrandConfig",method:"post",data:t})}},pZYu:function(t,e,a){t.exports=a.p+"static/img/qrcode.cae50bf.png"},w4u3:function(t,e,a){t.exports=a.p+"static/img/b-title.1e5844e.png"},xBhl:function(t,e,a){"use strict";a.d(e,"d",function(){return r}),a.d(e,"h",function(){return s}),a.d(e,"a",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"f",function(){return l}),a.d(e,"g",function(){return c}),a.d(e,"e",function(){return u}),a.d(e,"b",function(){return p});var n=a("t3Un");function r(t){return Object(n.a)({url:"/agentManage/sendCode",method:"get",params:t})}function s(t){return Object(n.a)({url:"/agentManage/updateAgent",method:"post",data:t})}function i(t){return Object(n.a)({url:"/agentManage/addAgent",method:"post",data:t})}function o(t){return Object(n.a)({url:"/agentManage/getAgent",method:"get",params:t})}function l(t){return Object(n.a)({url:"/agentManage/getMerchant",method:"get",params:t})}function c(t){return Object(n.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:t})}function u(){return Object(n.a)({url:"/agentManage/getIssend",method:"get"})}function p(t){return Object(n.a)({url:"/agentManage/deleteAgent",method:"post",data:t})}},xTMW:function(t,e,a){}}]);