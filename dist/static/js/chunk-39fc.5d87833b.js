(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-39fc"],{lSFS:function(e,t,n){"use strict";n.r(t);var a=n("xBhl"),r={data:function(){return{queryParams:{agentUserName:"",userName:""},list:[],colums:[{key:"agentUserName",label:"套餐名称"},{key:"userName",label:"价格(元)"},{key:"subordinateCount",label:"时长(分钟)"},{key:"linkName",label:"模拟投币数"}],pageInfo:{total:0,pageSize:10,currPage:1},angentInfo:[]}},created:function(){this.queryList()},methods:{resetQueryParams:function(){this.queryParams={agentUserName:"",userName:""}},queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.angentInfo=[],this.list=[],this.pageInfo.currPage=t;var n={pageSize:this.pageInfo.pageSize,pageIndex:this.pageInfo.currPage};for(var r in this.queryParams)this.queryParams[r]&&(n[r]=this.queryParams[r]);Object(a.g)(n).then(function(t){e.listLoading=!1,t.data?(e.list=t.data.items||[],e.pageInfo.total=t.data.total||0):e.pageInfo.total=0})},handleItem:function(e){this.angentInfo=e},getTemplateRow:function(e){this.check=e,this.angentInfo=[this.list[e]]},onDelBtnClick:function(){},handleAngent:function(e){1===this.angentInfo.length?this.$message({message:"只能编辑一条代理商信息",type:"error"}):this.angentInfo.length>1?this.$message({message:"只能编辑一条代理商信息",type:"error"}):this.$message({message:"请选中一条代理商信息！！",type:"error"})},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.total=0,this.queryList(1)},handleCurrentChange:function(e){this.queryList(e)},filerQueryList:function(){this.pageInfo.total=0,this.queryList(this.pageInfo.currPage)}}},i=n("KHd+"),s=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-area"},[n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.colums,function(e,t){return n("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})],2),e._v(" "),n("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},[],!1,null,null,null);s.options.__file="deviceService.vue";t.default=s.exports},xBhl:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"h",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return o}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return c});var a=n("t3Un");function r(e){return Object(a.a)({url:"/agentManage/sendCode",method:"get",params:e})}function i(e){return Object(a.a)({url:"/agentManage/updateAgent",method:"post",data:e})}function s(e){return Object(a.a)({url:"/agentManage/addAgent",method:"post",data:e})}function o(e){return Object(a.a)({url:"/agentManage/getAgent",method:"get",params:e})}function u(e){return Object(a.a)({url:"/agentManage/getMerchant",method:"get",params:e})}function g(e){return Object(a.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:e})}function l(){return Object(a.a)({url:"/agentManage/getIssend",method:"get"})}function c(e){return Object(a.a)({url:"/agentManage/deleteAgent",method:"post",data:e})}}}]);