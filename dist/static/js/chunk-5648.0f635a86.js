(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5648"],{B5LO:function(t,r,e){"use strict";e.d(r,"b",function(){return i}),e.d(r,"a",function(){return s});var o=e("Yfch"),i=function(t,r,e){if(!r||r&&!Object(o.b)(r))return e(new Error("请输入正确的11位手机号码"));e()},s=function(t,r,e){if(r&&!/^[A-Za-z0-9]{6,16}$/.test(r))return e(new Error("请输入6-16位的数字或字母"));e()}},JRBE:function(t,r,e){"use strict";e.r(r);var o=e("B5LO"),i=e("t3Un");var s=e("fSHs"),n=e("gjeX"),f=e.n(n),a=function(t,r,e,i){r.trim()?Object(o.a)(t,r,e):e(new Error(i))},h={name:"ModifyPassword",data:function(){var t=this;return{form:{originPwd:"",newPwd:"",verifyPwd:""},rules:{originPwd:{required:!0,validator:function(t,r,e){a(t,r,e,"原始密码不能为空")},trigger:"blur"},newPwd:{required:!0,validator:function(r,e,o){t.form.newPwd===t.form.originPwd?o(new Error("新旧密码不能相同")):a(r,e,o,"新密码为空")},trigger:"blur"},verifyPwd:{required:!0,validator:function(r,e,o){t.form.newPwd!==e?o(new Error("两次输入不一致")):o()},trigger:"blur"}}}},methods:{submit:function(){var t=this;this.$refs.form.validate(function(r){if(!r)return!1;var e,o;t.form.newPwd=f()(t.form.newPwd),t.form.originPwd=f()(t.form.originPwd),t.form.verifyPwd=f()(t.form.verifyPwd),(e=t.form,o="originPwd="+e.originPwd+"&newPwd="+e.newPwd+"&verifyPwd="+e.verifyPwd,Object(i.a)({url:"/agentManage/updatePassword",method:"post",data:o})).then(function(r){t.$store.dispatch("LogOut").then(function(){Object(s.a)("addRoute"),location.reload()})})})}}},u=(e("YT+0"),e("KHd+")),_=Object(u.a)(h,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("el-main",[e("el-form",{ref:"form",staticClass:"modify",attrs:{model:t.form,rules:t.rules,"label-width":"90px"}},[e("el-form-item",{attrs:{label:"旧密码",prop:"originPwd"}},[e("el-input",{attrs:{type:"password",placeholder:"原始密码"},model:{value:t.form.originPwd,callback:function(r){t.$set(t.form,"originPwd",r)},expression:"form.originPwd"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"新密码",prop:"newPwd"}},[e("el-input",{attrs:{type:"password",placeholder:"新密码"},model:{value:t.form.newPwd,callback:function(r){t.$set(t.form,"newPwd",r)},expression:"form.newPwd"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"确认密码",prop:"verifyPwd"}},[e("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.form.verifyPwd,callback:function(r){t.$set(t.form,"verifyPwd",r)},expression:"form.verifyPwd"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确定")])],1)],1)],1)},[],!1,null,"e67c3278",null);_.options.__file="ModifyPassword.vue";r.default=_.exports},PDX0:function(t,r){(function(r){t.exports=r}).call(this,{})},"YT+0":function(t,r,e){"use strict";var o=e("mFjQ");e.n(o).a},gjeX:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
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
!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__("PDX0"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(r){return new Md5(!0).update(r)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(r){return t.create().update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var e=OUTPUT_TYPES[r];t[e]=createOutputMethod(e)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"==typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var r=new ArrayBuffer(68);this.buffer8=new Uint8Array(r),this.blocks=new Uint32Array(r)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var r,e=typeof t;if("string"!==e){if("object"!==e)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw ERROR;r=!0}for(var o,i,s=0,n=t.length,f=this.blocks,a=this.buffer8;s<n;){if(this.hashed&&(this.hashed=!1,f[0]=f[16],f[16]=f[1]=f[2]=f[3]=f[4]=f[5]=f[6]=f[7]=f[8]=f[9]=f[10]=f[11]=f[12]=f[13]=f[14]=f[15]=0),r)if(ARRAY_BUFFER)for(i=this.start;s<n&&i<64;++s)a[i++]=t[s];else for(i=this.start;s<n&&i<64;++s)f[i>>2]|=t[s]<<SHIFT[3&i++];else if(ARRAY_BUFFER)for(i=this.start;s<n&&i<64;++s)(o=t.charCodeAt(s))<128?a[i++]=o:o<2048?(a[i++]=192|o>>6,a[i++]=128|63&o):o<55296||o>=57344?(a[i++]=224|o>>12,a[i++]=128|o>>6&63,a[i++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),a[i++]=240|o>>18,a[i++]=128|o>>12&63,a[i++]=128|o>>6&63,a[i++]=128|63&o);else for(i=this.start;s<n&&i<64;++s)(o=t.charCodeAt(s))<128?f[i>>2]|=o<<SHIFT[3&i++]:o<2048?(f[i>>2]|=(192|o>>6)<<SHIFT[3&i++],f[i>>2]|=(128|63&o)<<SHIFT[3&i++]):o<55296||o>=57344?(f[i>>2]|=(224|o>>12)<<SHIFT[3&i++],f[i>>2]|=(128|o>>6&63)<<SHIFT[3&i++],f[i>>2]|=(128|63&o)<<SHIFT[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),f[i>>2]|=(240|o>>18)<<SHIFT[3&i++],f[i>>2]|=(128|o>>12&63)<<SHIFT[3&i++],f[i>>2]|=(128|o>>6&63)<<SHIFT[3&i++],f[i>>2]|=(128|63&o)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex;t[r>>2]|=EXTRA[3&r],r>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,r,e,o,i,s,n=this.blocks;this.first?r=((r=((t=((t=n[0]-680876937)<<7|t>>>25)-271733879<<0)^(e=((e=(-271733879^(o=((o=(-1732584194^2004318071&t)+n[1]-117830708)<<12|o>>>20)+t<<0)&(-271733879^t))+n[2]-1126478375)<<17|e>>>15)+o<<0)&(o^t))+n[3]-1316259209)<<22|r>>>10)+e<<0:(t=this.h0,r=this.h1,e=this.h2,r=((r+=((t=((t+=((o=this.h3)^r&(e^o))+n[0]-680876936)<<7|t>>>25)+r<<0)^(e=((e+=(r^(o=((o+=(e^t&(r^e))+n[1]-389564586)<<12|o>>>20)+t<<0)&(t^r))+n[2]+606105819)<<17|e>>>15)+o<<0)&(o^t))+n[3]-1044525330)<<22|r>>>10)+e<<0),r=((r+=((t=((t+=(o^r&(e^o))+n[4]-176418897)<<7|t>>>25)+r<<0)^(e=((e+=(r^(o=((o+=(e^t&(r^e))+n[5]+1200080426)<<12|o>>>20)+t<<0)&(t^r))+n[6]-1473231341)<<17|e>>>15)+o<<0)&(o^t))+n[7]-45705983)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(o^r&(e^o))+n[8]+1770035416)<<7|t>>>25)+r<<0)^(e=((e+=(r^(o=((o+=(e^t&(r^e))+n[9]-1958414417)<<12|o>>>20)+t<<0)&(t^r))+n[10]-42063)<<17|e>>>15)+o<<0)&(o^t))+n[11]-1990404162)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(o^r&(e^o))+n[12]+1804603682)<<7|t>>>25)+r<<0)^(e=((e+=(r^(o=((o+=(e^t&(r^e))+n[13]-40341101)<<12|o>>>20)+t<<0)&(t^r))+n[14]-1502002290)<<17|e>>>15)+o<<0)&(o^t))+n[15]+1236535329)<<22|r>>>10)+e<<0,r=((r+=((o=((o+=(r^e&((t=((t+=(e^o&(r^e))+n[1]-165796510)<<5|t>>>27)+r<<0)^r))+n[6]-1069501632)<<9|o>>>23)+t<<0)^t&((e=((e+=(t^r&(o^t))+n[11]+643717713)<<14|e>>>18)+o<<0)^o))+n[0]-373897302)<<20|r>>>12)+e<<0,r=((r+=((o=((o+=(r^e&((t=((t+=(e^o&(r^e))+n[5]-701558691)<<5|t>>>27)+r<<0)^r))+n[10]+38016083)<<9|o>>>23)+t<<0)^t&((e=((e+=(t^r&(o^t))+n[15]-660478335)<<14|e>>>18)+o<<0)^o))+n[4]-405537848)<<20|r>>>12)+e<<0,r=((r+=((o=((o+=(r^e&((t=((t+=(e^o&(r^e))+n[9]+568446438)<<5|t>>>27)+r<<0)^r))+n[14]-1019803690)<<9|o>>>23)+t<<0)^t&((e=((e+=(t^r&(o^t))+n[3]-187363961)<<14|e>>>18)+o<<0)^o))+n[8]+1163531501)<<20|r>>>12)+e<<0,r=((r+=((o=((o+=(r^e&((t=((t+=(e^o&(r^e))+n[13]-1444681467)<<5|t>>>27)+r<<0)^r))+n[2]-51403784)<<9|o>>>23)+t<<0)^t&((e=((e+=(t^r&(o^t))+n[7]+1735328473)<<14|e>>>18)+o<<0)^o))+n[12]-1926607734)<<20|r>>>12)+e<<0,r=((r+=((s=(o=((o+=((i=r^e)^(t=((t+=(i^o)+n[5]-378558)<<4|t>>>28)+r<<0))+n[8]-2022574463)<<11|o>>>21)+t<<0)^t)^(e=((e+=(s^r)+n[11]+1839030562)<<16|e>>>16)+o<<0))+n[14]-35309556)<<23|r>>>9)+e<<0,r=((r+=((s=(o=((o+=((i=r^e)^(t=((t+=(i^o)+n[1]-1530992060)<<4|t>>>28)+r<<0))+n[4]+1272893353)<<11|o>>>21)+t<<0)^t)^(e=((e+=(s^r)+n[7]-155497632)<<16|e>>>16)+o<<0))+n[10]-1094730640)<<23|r>>>9)+e<<0,r=((r+=((s=(o=((o+=((i=r^e)^(t=((t+=(i^o)+n[13]+681279174)<<4|t>>>28)+r<<0))+n[0]-358537222)<<11|o>>>21)+t<<0)^t)^(e=((e+=(s^r)+n[3]-722521979)<<16|e>>>16)+o<<0))+n[6]+76029189)<<23|r>>>9)+e<<0,r=((r+=((s=(o=((o+=((i=r^e)^(t=((t+=(i^o)+n[9]-640364487)<<4|t>>>28)+r<<0))+n[12]-421815835)<<11|o>>>21)+t<<0)^t)^(e=((e+=(s^r)+n[15]+530742520)<<16|e>>>16)+o<<0))+n[2]-995338651)<<23|r>>>9)+e<<0,r=((r+=((o=((o+=(r^((t=((t+=(e^(r|~o))+n[0]-198630844)<<6|t>>>26)+r<<0)|~e))+n[7]+1126891415)<<10|o>>>22)+t<<0)^((e=((e+=(t^(o|~r))+n[14]-1416354905)<<15|e>>>17)+o<<0)|~t))+n[5]-57434055)<<21|r>>>11)+e<<0,r=((r+=((o=((o+=(r^((t=((t+=(e^(r|~o))+n[12]+1700485571)<<6|t>>>26)+r<<0)|~e))+n[3]-1894986606)<<10|o>>>22)+t<<0)^((e=((e+=(t^(o|~r))+n[10]-1051523)<<15|e>>>17)+o<<0)|~t))+n[1]-2054922799)<<21|r>>>11)+e<<0,r=((r+=((o=((o+=(r^((t=((t+=(e^(r|~o))+n[8]+1873313359)<<6|t>>>26)+r<<0)|~e))+n[15]-30611744)<<10|o>>>22)+t<<0)^((e=((e+=(t^(o|~r))+n[6]-1560198380)<<15|e>>>17)+o<<0)|~t))+n[13]+1309151649)<<21|r>>>11)+e<<0,r=((r+=((o=((o+=(r^((t=((t+=(e^(r|~o))+n[4]-145523070)<<6|t>>>26)+r<<0)|~e))+n[11]-1120210379)<<10|o>>>22)+t<<0)^((e=((e+=(t^(o|~r))+n[2]+718787259)<<15|e>>>17)+o<<0)|~t))+n[9]-343485551)<<21|r>>>11)+e<<0,this.first?(this.h0=t+1732584193<<0,this.h1=r-271733879<<0,this.h2=e-1732584194<<0,this.h3=o+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+r<<0,this.h2=this.h2+e<<0,this.h3=this.h3+o<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,o=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,o=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),r=new Uint32Array(t);return r[0]=this.h0,r[1]=this.h1,r[2]=this.h2,r[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,r,e,o="",i=this.array(),s=0;s<15;)t=i[s++],r=i[s++],e=i[s++],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|r>>>4)]+BASE64_ENCODE_CHAR[63&(r<<2|e>>>6)]+BASE64_ENCODE_CHAR[63&e];return t=i[s],o+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"=="};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("8oxB"),__webpack_require__("yLpj"))},mFjQ:function(t,r,e){}}]);