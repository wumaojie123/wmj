(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0320"],{Wg3D:function(t,e,i){"use strict";var n=i("di6C");i.n(n).a},di6C:function(t,e,i){},xdSL:function(t,e,i){"use strict";i.r(e);var n={name:"Preview",props:{menu:{type:Array,default:function(){return[]}},value:{type:Boolean,default:!1}},data:function(){return{localValue:this.value}},computed:{localMeau:function(){var t=[];return this.menu.forEach(function(e){var i=[];e.sub_button.length>0?(e.sub_button.map(function(t){i.push(t.name)}),i.push(e.name),t.push(i.reverse())):(i.push(e.name),t.push(i))}),t}},watch:{value:function(t){this.localValue=t},localValue:function(t){this.$emit("input",t)}}},a=(i("Wg3D"),i("KHd+")),u=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.localValue,title:"公众号菜单预览",width:"45%"},on:{"update:visible":function(e){t.localValue=e}}},[i("div",{staticClass:"preview-wrap"},[i("div",{staticClass:"preview-footer"},[i("div",{staticStyle:{width:"45px","text-align":"center",border:"1px solid #f0f0f0"}},[i("i",{staticClass:"el-icon-copy-document",staticStyle:{"font-size":"26px",height:"48px","line-height":"48px"}})]),t._v(" "),t._l(t.localMeau,function(e,n){return i("div",{key:n,staticClass:"footer-item"},t._l(e,function(e,n){return i("span",{key:n,staticClass:"item-item"},[t._v(t._s(e))])}))})],2)])])},[],!1,null,"34a31512",null);u.options.__file="preview.vue";e.default=u.exports}}]);