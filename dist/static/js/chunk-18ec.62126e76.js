(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-18ec"],{CR7B:function(t,e,i){},OHDz:function(t,e,i){"use strict";i.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-wrap"},[e("h3",[this._v("如何重置授权有效期？")]),this._v(" "),e("div",[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:i("iCGW")}})]),this._v("如何重置授权有效期？点击底部【重置授权有效期】按钮，进入扫码授权页，用公众号管理员手机微信扫描二维码进入权限确认页面，若【素材管理】权限处于已勾选状态，则去掉勾选后点击授权；若【素材管理】权限处于非勾选状态，则勾选后点击授权；\n    ")])])}],s={props:{day:{type:[Number,String],default:""},eType:{type:String,default:""}},computed:{title:function(){return-1===this.day?"公众号失效时，【重置授权有效期】即可恢复公众号功能。":this.day>0?"您的公众号授权剩余有效期："+this.day+"天，到期前请【重置授权有效期】。":"您的公众号授权已过期，【重置授权有效期】即可恢复公众号功能"}},created:function(){},methods:{reAuthorize:function(){window.location.href="/agent/rest/officialAccounts/againAuthUrl?eType="+this.eType}}},a=(i("qu3V"),i("KHd+")),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"anthorize-wrap"},[i("div",{staticClass:"header"},[t._v(t._s(t.title))]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"footer",on:{click:t.reAuthorize}},[t._v("重置授权有效期")])])},n,!1,null,"e185e34e",null);r.options.__file="reAuthorize.vue";e.default=r.exports},iCGW:function(t,e,i){t.exports=i.p+"static/img/authorize-bg.1f67b98.png"},qu3V:function(t,e,i){"use strict";var n=i("CR7B");i.n(n).a}}]);