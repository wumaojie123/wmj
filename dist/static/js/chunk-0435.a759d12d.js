(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0435"],{"1GZB":function(t,e,n){"use strict";var a=n("m6j0");n.n(a).a},m6j0:function(t,e,n){},xdSL:function(t,e,n){"use strict";n.r(e);var a={name:"Preview",props:{menu:{type:Array,default:function(){return[]}},value:{type:Boolean,default:!1}},data:function(){return{localValue:this.value}},computed:{localMeau:function(){var t=[];return this.menu.forEach(function(e){var n=[];e.sub_button.length>0?(e.sub_button.map(function(t){n.push(t.name)}),n.push(e.name),t.push(n.reverse())):(n.push(e.name),t.push(n))}),t}},watch:{value:function(t){this.localValue=t},localValue:function(t){this.$emit("input",t)}}},i=(n("1GZB"),n("ZrdR")),u=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.localValue,title:"公众号菜单预览",width:"35%"},on:{"update:visible":function(e){t.localValue=e}}},[n("div",{staticClass:"preview-wrap"},[n("div",{staticClass:"preview-footer"},[n("div",{staticStyle:{width:"45px","text-align":"center",border:"1px solid #f0f0f0"}},[n("i",{staticClass:"el-icon-copy-document",staticStyle:{"font-size":"26px",height:"50px","line-height":"50px"}})]),t._v(" "),t._l(t.localMeau,function(e,a){return n("div",{key:a,staticClass:"footer-item"},t._l(e,function(e,a){return n("span",{key:a,staticClass:"item-item"},[t._v(t._s(e))])}))})],2)])])},[],!1,null,"afa4af10",null);u.options.__file="preview.vue";e.default=u.exports}}]);