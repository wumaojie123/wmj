(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-35e3"],{OtHR:function(t,s,a){},PlBk:function(t,s,a){"use strict";var i=a("OtHR");a.n(i).a},WiDU:function(t,s,a){"use strict";a.r(s);var i=[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"title"},[s("img",{staticClass:"icon-title",attrs:{src:a("wM9E")}}),this._v(" "),s("span",[this._v("设备监控")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"total"},[s("span",{staticStyle:{margin:"0 5px"}},[this._v("设备总数")])])}],n={name:"Equipment",props:{data:{type:Object,default:function(){}}},computed:{totalStr:function(){var t=this.data.totalQuipmentCount.toString().split(""),s=t.length;if(t.length<5){for(var a=5-s,i=[],n=0;n<a;n++)i.push(0);t=i.concat(t)}return t}}},e=(a("PlBk"),a("KHd+")),A=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"equipment-wrap"},[a("div",{staticClass:"equipment-area"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("section",{staticClass:"num"},[a("div",{staticClass:"num-wrap"},t._l(t.totalStr,function(s,i){return a("span",{key:i,staticClass:"num-item"},[t._v(t._s(s))])})),t._v(" "),a("div",{staticClass:"num-status"},[a("div",{staticClass:"status-item"},[a("div",{staticClass:"item-title"},[t._v("在线设备数")]),t._v(" "),a("div",{staticClass:"staus-num"},[a("span",[t._v(t._s(t.data.onlineCount))])])]),t._v(" "),a("div",{staticClass:"status-item"},[a("div",{staticClass:"item-title"},[t._v("离线设备数")]),t._v(" "),a("div",{staticClass:"staus-num"},[a("span",[t._v(t._s(t.data.offlineCount))])])])])])])])},i,!1,null,"1d17ad0f",null);A.options.__file="equipment.vue";s.default=A.exports},wM9E:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0BAMAAAA3VgbYAAAALVBMVEVHcEwAtP8AtP8Asv8AtP8AtP8AtP8AtP8AtP8Atf8Atf8As/8AtP8AtP8AtP9x+CvUAAAADnRSTlMA6WQM2Kb7KcFWkBSEOtOdh0EAAAELSURBVDjLY2AYQmDjOyAQxip1DyT1FquUHkjqEVapdSCpN1il4kBST7FK+YGknqCLNi5nYCgFybx7BmRViSJkmN69a9qT9w4id1rj3bsJcCnDd2hAGNVtyADuTvY8dKlnBVApjncYUg1QqXkYUu9eQqXkoHyZ23sPQplPkP0KDAgDBgbmOAj7BVTKFMJdAGKzQtjBMCeqIcxgBhuRBPcXux/CZlDUPClAhBTIjckQ5j4k98GUOkCYjGjxiUcKt4EYzrjAgOL4FGyOx+NlLAH1BHfwPiQcKZhR+a6BcALATDaviElsGElUARFSgaCEDZZ7Fg5M2BLEZQdCmegcqtuIzLB4srkh7sJhkAIAn7CjvJZ6olgAAAAASUVORK5CYII="}}]);