(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3cd3","chunk-582d"],{B5LO:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return i});var s=r("Yfch"),o=function(e,t,r){if(!t||t&&!Object(s.b)(t))return r(new Error("请输入正确的11位手机号码"));r()},i=function(e,t,r){if(t&&!/^[A-Za-z0-9]{6,16}$/.test(t))return r(new Error("请输入6-16位的数字或字母"));r()}},FH45:function(e,t,r){"use strict";r.r(t);var s={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")}}},o=(r("xEe5"),r("KHd+")),i=Object(o.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"social-signup-container"},[r("div",{staticClass:"sign-btn",on:{click:function(t){e.wechatHandleClick("wechat")}}},[r("span",{staticClass:"wx-svg-container"},[r("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v(" 微信\n  ")]),e._v(" "),r("div",{staticClass:"sign-btn",on:{click:function(t){e.tencentHandleClick("tencent")}}},[r("span",{staticClass:"qq-svg-container"},[r("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v(" QQ\n  ")])])},[],!1,null,"8b4f3dea",null);i.options.__file="socialsignin.vue";t.default=i.exports},PDX0:function(e,t){(function(t){e.exports=t}).call(this,{})},c11S:function(e,t,r){"use strict";var s=r("pkIQ");r.n(s).a},gjeX:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__("PDX0"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e){return function(t){return new Md5(!0).update(t)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Md5},e.update=function(t){return e.create().update(t)};for(var t=0;t<OUTPUT_TYPES.length;++t){var r=OUTPUT_TYPES[t];e[r]=createOutputMethod(r)}return e},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if("string"==typeof e)return crypto.createHash("md5").update(e,"utf8").digest("hex");if(null===e||void 0===e)throw ERROR;return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash("md5").update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod};function Md5(e){if(e)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw ERROR;if(null===e)throw ERROR;if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw ERROR;t=!0}for(var s,o,i=0,a=e.length,n=this.blocks,c=this.buffer8;i<a;){if(this.hashed&&(this.hashed=!1,n[0]=n[16],n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),t)if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)c[o++]=e[i];else for(o=this.start;i<a&&o<64;++i)n[o>>2]|=e[i]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)(s=e.charCodeAt(i))<128?c[o++]=s:s<2048?(c[o++]=192|s>>6,c[o++]=128|63&s):s<55296||s>=57344?(c[o++]=224|s>>12,c[o++]=128|s>>6&63,c[o++]=128|63&s):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++i)),c[o++]=240|s>>18,c[o++]=128|s>>12&63,c[o++]=128|s>>6&63,c[o++]=128|63&s);else for(o=this.start;i<a&&o<64;++i)(s=e.charCodeAt(i))<128?n[o>>2]|=s<<SHIFT[3&o++]:s<2048?(n[o>>2]|=(192|s>>6)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):s<55296||s>=57344?(n[o>>2]|=(224|s>>12)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++i)),n[o>>2]|=(240|s>>18)<<SHIFT[3&o++],n[o>>2]|=(128|s>>12&63)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=EXTRA[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var e,t,r,s,o,i,a=this.blocks;this.first?t=((t=((e=((e=a[0]-680876937)<<7|e>>>25)-271733879<<0)^(r=((r=(-271733879^(s=((s=(-1732584194^2004318071&e)+a[1]-117830708)<<12|s>>>20)+e<<0)&(-271733879^e))+a[2]-1126478375)<<17|r>>>15)+s<<0)&(s^e))+a[3]-1316259209)<<22|t>>>10)+r<<0:(e=this.h0,t=this.h1,r=this.h2,t=((t+=((e=((e+=((s=this.h3)^t&(r^s))+a[0]-680876936)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+a[1]-389564586)<<12|s>>>20)+e<<0)&(e^t))+a[2]+606105819)<<17|r>>>15)+s<<0)&(s^e))+a[3]-1044525330)<<22|t>>>10)+r<<0),t=((t+=((e=((e+=(s^t&(r^s))+a[4]-176418897)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+a[5]+1200080426)<<12|s>>>20)+e<<0)&(e^t))+a[6]-1473231341)<<17|r>>>15)+s<<0)&(s^e))+a[7]-45705983)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(s^t&(r^s))+a[8]+1770035416)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+a[9]-1958414417)<<12|s>>>20)+e<<0)&(e^t))+a[10]-42063)<<17|r>>>15)+s<<0)&(s^e))+a[11]-1990404162)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(s^t&(r^s))+a[12]+1804603682)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+a[13]-40341101)<<12|s>>>20)+e<<0)&(e^t))+a[14]-1502002290)<<17|r>>>15)+s<<0)&(s^e))+a[15]+1236535329)<<22|t>>>10)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+a[1]-165796510)<<5|e>>>27)+t<<0)^t))+a[6]-1069501632)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+a[11]+643717713)<<14|r>>>18)+s<<0)^s))+a[0]-373897302)<<20|t>>>12)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+a[5]-701558691)<<5|e>>>27)+t<<0)^t))+a[10]+38016083)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+a[15]-660478335)<<14|r>>>18)+s<<0)^s))+a[4]-405537848)<<20|t>>>12)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+a[9]+568446438)<<5|e>>>27)+t<<0)^t))+a[14]-1019803690)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+a[3]-187363961)<<14|r>>>18)+s<<0)^s))+a[8]+1163531501)<<20|t>>>12)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+a[13]-1444681467)<<5|e>>>27)+t<<0)^t))+a[2]-51403784)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+a[7]+1735328473)<<14|r>>>18)+s<<0)^s))+a[12]-1926607734)<<20|t>>>12)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+a[5]-378558)<<4|e>>>28)+t<<0))+a[8]-2022574463)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[11]+1839030562)<<16|r>>>16)+s<<0))+a[14]-35309556)<<23|t>>>9)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+a[1]-1530992060)<<4|e>>>28)+t<<0))+a[4]+1272893353)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[7]-155497632)<<16|r>>>16)+s<<0))+a[10]-1094730640)<<23|t>>>9)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+a[13]+681279174)<<4|e>>>28)+t<<0))+a[0]-358537222)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[3]-722521979)<<16|r>>>16)+s<<0))+a[6]+76029189)<<23|t>>>9)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+a[9]-640364487)<<4|e>>>28)+t<<0))+a[12]-421815835)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[15]+530742520)<<16|r>>>16)+s<<0))+a[2]-995338651)<<23|t>>>9)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+a[0]-198630844)<<6|e>>>26)+t<<0)|~r))+a[7]+1126891415)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+a[14]-1416354905)<<15|r>>>17)+s<<0)|~e))+a[5]-57434055)<<21|t>>>11)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+a[12]+1700485571)<<6|e>>>26)+t<<0)|~r))+a[3]-1894986606)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+a[10]-1051523)<<15|r>>>17)+s<<0)|~e))+a[1]-2054922799)<<21|t>>>11)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+a[8]+1873313359)<<6|e>>>26)+t<<0)|~r))+a[15]-30611744)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+a[6]-1560198380)<<15|r>>>17)+s<<0)|~e))+a[13]+1309151649)<<21|t>>>11)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+a[4]-145523070)<<6|e>>>26)+t<<0)|~r))+a[11]-1120210379)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+a[2]+718787259)<<15|r>>>17)+s<<0)|~e))+a[9]-343485551)<<21|t>>>11)+r<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=r-1732584194<<0,this.h3=s+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+r<<0,this.h3=this.h3+s<<0)},Md5.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,s=this.h3;return HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,s=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var e,t,r,s="",o=this.array(),i=0;i<15;)e=o[i++],t=o[i++],r=o[i++],s+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[63&(e<<4|t>>>4)]+BASE64_ENCODE_CHAR[63&(t<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return e=o[i],s+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[e<<4&63]+"=="};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("8oxB"),__webpack_require__("yLpj"))},khzN:function(e,t,r){},ntYl:function(e,t,r){"use strict";r.r(t);var s=r("ETGp"),o=r("oYx3"),i=r("etyb"),a=r("fSHs"),n=r("t3Un");var c=r("FH45"),l=r("gjeX"),d=r.n(l),u=r("XJYT"),f=(r("B5LO"),r("Yfch")),h={name:"Login",components:{LangSelect:s.a,SocialSign:c.default},data:function(){var e=function(e,t,r){/^1[345789]\d{9}$/.test(t)?r():""===t.trim()?r(new Error("请输入手机号")):r(new Error("请输入正确的手机号"))},t=function(e,t,r){""===t.trim()?r(new Error("请输入密码")):/^[0-9a-zA-Z_]{5,15}$/.test(t)?r():r(new Error("请输入6-16位数字、字母或下划线，不能以数字开头"))};return{loginForm:{username:"",password:"",verifyCode:""},validateCodeUrl:"agent/rest/verifycode?"+(new Date).getTime(),loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}],verifyCode:[{required:!0,trigger:"blur",validator:function(e,t,r){""===t.trim()?r(new Error("请输入验证码")):r()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0,timerId:null,type:"1",vis_reset:!1,code_time:null,reset_rules:{phone:[{required:!0,trigger:"change",validator:e}],code:[{required:!0,message:"请输入验证码",trigger:"change"}]},reset:{phone:"",code:""},password_rules:{password:[{required:!0,trigger:"change",validator:t}],confirm_password:[{required:!0,trigger:"change",validator:t}]},password:{password:"",confirm_password:""},loading_code:!1,loading_verifyCode:!1,vis_confirmPassword:!1,loading_savePassword:!1}},computed:{canGetCode:function(){return!(Object(f.b)(this.reset.phone)&&!this.code_time&&!this.loading_code)},canChangePassword:function(){return!(Object(f.b)(this.reset.phone)&&""!==this.reset.code)},canSave:function(){return""===this.password.password||""===this.password.confirm_password}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){},mounted:function(){var e=this;this.timerId=setInterval(function(){e.refreshCode()},6e4)},destroyed:function(){},methods:{savePassword:function(e){var t=this;this.password.password===this.password.confirm_password?t.$refs.passwordForm.validate(function(e){e&&(t.loading_savePassword=!0,t.$store.dispatch("savePassword",{phoneNumber:t.reset.phone,verifyCode:t.reset.code,newPassword:t.password.password}).then(function(e){0==e.result&&(Object(u.Message)({message:"修改密码成功！",type:"success"}),t.vis_reset=!1)}).finally(function(){t.loading_savePassword=!1}))}):Object(u.Message)({message:"两次密码不一致",type:"error"})},verifyCode:function(e){var t=this;t.loading_verifyCode=!0,t.$refs.ruleForm.validate(function(e){e&&t.$store.dispatch("postVerifyCode",{phoneNumber:t.reset.phone,verifyCode:t.reset.code}).then(function(e){0==e.result&&(t.vis_confirmPassword=!0)}).finally(function(){t.loading_verifyCode=!1})})},getCode:function(){var e=this,t=this;t.code_time||(this.loading_code=!0,t.$store.dispatch("getVerifyCode",{phoneNumber:t.reset.phone}).then(function(e){if(0==e.result){t.code_time=60;var r=setInterval(function(){t.code_time<=0?(t.code_time=0,clearInterval(r)):t.code_time--},1e3)}}).finally(function(){e.loading_code=!1}))},hideReset:function(){this.vis_confirmPassword=!1,this.$refs.ruleForm.resetFields(),this.$refs.passwordForm.resetFields()},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var e=this,t=this;this.$refs.loginForm.validate(function(r){if(!r)return!1;e.loading=!0,e.$store.dispatch("LoginByUsername",{username:e.loginForm.username,password:d()(e.loginForm.password),verifyCode:e.loginForm.verifyCode}).then(function(r){e.loading=!1,clearInterval(t.timerId),Object(a.c)("username",e.loginForm.username);var s={};0===r.result&&("dlpt"===e.type?(s.value="dlpt",Object(n.a)({url:"/authority/userMapRoles",method:"get"}).then(function(t){if(0===t.result){var r=["MC_AGENT_AGENT_FIRST","MC_AGENT_AGENT_FIRST_DEFAULT"];(t.data||[]).some(function(e){return r.indexOf(e.value)>-1||e.name.indexOf("Role_Agent_First")>-1})?(Object(a.c)("addRoute",[]),o.b.addRoutes(Object(i.a)(JSON.parse(Object(a.b)("addRoute")))),e.$router.push({path:"/data"})):e.$message({message:"暂无权限",type:"error"})}})):function(e){return Object(n.a)({url:"/authority/getCatalogAndMenu",method:"get",params:e})}(s).then(function(t){Object(a.c)("addRoute",t.data),o.b.addRoutes(Object(i.a)(JSON.parse(Object(a.b)("addRoute")))),e.$router.push({path:e.redirect||"/"})}))},function(t){e.loading=!1})})},refreshCode:function(){this.validateCodeUrl="/agent/rest/verifycode?"+(new Date).getTime()}}},p=(r("c11S"),r("p17r"),r("KHd+")),_=Object(p.a)(h,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"login-container"},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("div",{staticClass:"flex-wrapper"},[r("h3",{staticClass:"title",class:{select:"1"===e.type},on:{click:function(t){e.type="1"}}},[e._v(e._s("生产商管理平台"))]),e._v(" "),r("h3",{staticClass:"title",class:{select:"dlpt"===e.type},on:{click:function(t){e.type="dlpt"}}},[e._v(e._s("运维管理平台"))])]),e._v(" "),r("lang-select",{staticClass:"set-language"})],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{prop:"username"}},[r("span",{staticClass:"svg-container svg-container_login"},[r("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),r("el-input",{attrs:{placeholder:"用户名",name:"username",type:"text","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),r("el-input",{attrs:{type:e.passwordType,placeholder:"密码",name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"verifyCode"}},[r("el-input",{attrs:{placeholder:"验证码",name:"code",type:"text"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.verifyCode,callback:function(t){e.$set(e.loginForm,"verifyCode",t)},expression:"loginForm.verifyCode"}})],1),e._v(" "),r("el-form-item",{staticClass:"identifybox-wrap"},[r("div",{staticClass:"identifybox"},[r("div",{on:{click:e.refreshCode}},[r("img",{staticStyle:{width:"150px",height:"40px"},attrs:{src:e.validateCodeUrl,alt:""}})]),e._v(" "),r("el-button",{staticClass:"textbtn",attrs:{type:"text"},on:{click:e.refreshCode}},[e._v("看不清，换一张")])],1)]),e._v(" "),r("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v(e._s(e.$t("login.logIn")))]),e._v(" "),r("a",{staticClass:"reset-btn",on:{click:function(t){e.vis_reset=!0}}},[e._v("忘记密码？")])],1)],1),e._v(" "),r("el-dialog",{attrs:{"close-on-click-modal":!1,visible:e.vis_reset,width:"500px",title:"重设密码"},on:{"update:visible":function(t){e.vis_reset=t},close:e.hideReset}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.vis_confirmPassword,expression:"!vis_confirmPassword"}]},[r("el-form",{ref:"ruleForm",attrs:{"label-position":"left",model:e.reset,rules:e.reset_rules}},[r("el-form-item",{attrs:{"label-width":"100px",prop:"phone",label:"手机号码"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.reset.phone,callback:function(t){e.$set(e.reset,"phone","string"==typeof t?t.trim():t)},expression:"reset.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"100px",prop:"code",label:"短信验证码"}},[r("el-input",{staticClass:"reset-codeInput",attrs:{autocomplete:"off"},model:{value:e.reset.code,callback:function(t){e.$set(e.reset,"code","string"==typeof t?t.trim():t)},expression:"reset.code"}}),e._v(" "),r("el-button",{attrs:{disabled:e.canGetCode,loading:e.loading_code,type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.code_time?e.code_time+"s":"获取短信验证码"))])],1)],1),e._v(" "),r("div",{staticClass:"reset-footer"},[r("el-button",{staticClass:"reset-footer-btn",attrs:{disabled:e.canChangePassword,loading:e.loading_verifyCode,type:"primary"},on:{click:e.verifyCode}},[e._v("下一步")])],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.vis_confirmPassword,expression:"vis_confirmPassword"}]},[r("el-form",{ref:"passwordForm",attrs:{"label-position":"left",model:e.password,rules:e.password_rules}},[r("el-form-item",{attrs:{"label-width":"100px",prop:"password",label:"新密码"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.password.password,callback:function(t){e.$set(e.password,"password","string"==typeof t?t.trim():t)},expression:"password.password"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"100px",prop:"confirm_password",label:"确认密码"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.password.confirm_password,callback:function(t){e.$set(e.password,"confirm_password","string"==typeof t?t.trim():t)},expression:"password.confirm_password"}})],1)],1),e._v(" "),r("div",{staticClass:"reset-footer"},[r("el-button",{staticClass:"reset-footer-btn",attrs:{disabled:e.canSave,loading:e.loading_savePassword,type:"primary"},on:{click:e.savePassword}},[e._v("保存")])],1)],1)])],1)},[],!1,null,"a2dd99b2",null);_.options.__file="index.vue";t.default=_.exports},p17r:function(e,t,r){"use strict";var s=r("khzN");r.n(s).a},pkIQ:function(e,t,r){},xEe5:function(e,t,r){"use strict";var s=r("zD3i");r.n(s).a},zD3i:function(e,t,r){}}]);