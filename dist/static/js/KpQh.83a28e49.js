(window.webpackJsonp=window.webpackJsonp||[]).push([["KpQh"],{KpQh:function(e,t,n){"use strict";n.r(t);var l={props:{cell:{type:Object,default:function(){return{name:[],prop:[],list:[],style:[]}}},handler:{type:Object,default:function(){return{isShow:!1,text:"",list:[]}}},pagination:{type:Object,default:function(){return{totalCount:0,pageIndex:0,pageSizes:[],pageSize:10,sizeChangeHd:"",currentChangeHd:""}}},summary:{type:Object,default:function(){return{showFlag:!1,total:0}}}},methods:{curHandler:function(e,t){return this.handler.list[e.row.curIndex][t]},handleCurrentChange:function(e){this.$emit(this.pagination.currentChangeHd,e)},handleSizeChange:function(e){this.$emit(this.pagination.sizeChangeHd,e)},handleClick:function(e){this.$emit(this.handler.list[e.curIndex].fn,e)}}},a=n("KHd+"),i=Object(a.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-main",[n("el-table",{attrs:{data:e.cell.list,border:""}},[e._l(e.cell.name,function(t,l){return[!e.cell.style||0==e.cell.style.length||l>e.cell.style.length?n("el-table-column",{key:l,attrs:{label:t,prop:e.cell.prop[l],align:"center"}}):e.cell.style&&e.cell.style.length>0&&l<=e.cell.style.length-1?n("el-table-column",{key:l,attrs:{width:e.cell.style[l].width,label:t,prop:e.cell.prop[l],align:"center"}}):e._e()]}),e._v(" "),e.handler.isShow?n("el-table-column",{attrs:{label:e.handler.text,fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.curHandler(t,"isShow")?n("el-button",{attrs:{type:e.curHandler(t,"type"),size:e.curHandler(t,"size")},on:{click:function(n){e.handleClick(t.row)}}},[e._v(e._s(e.curHandler(t,"name")))]):e._e()]}}])}):e._e()],2),e._v(" "),e.summary.showFlag?[n("div",{staticStyle:{"background-color":"pink",padding:"10px"}},[n("span",[e._v("合计投币金额:")]),e._v(" "),n("span",[e._v(e._s(e.summary.total)+" 元")])])]:e._e()],2),e._v(" "),n("el-footer",[n("el-pagination",{attrs:{"current-page":e.pagination.pageIndex,"page-sizes":e.pagination.pageSizes,"page-size":e.pagination.pageSize,total:e.pagination.totalCount,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},[],!1,null,null,null);i.options.__file="orderList.vue";t.default=i.exports}}]);