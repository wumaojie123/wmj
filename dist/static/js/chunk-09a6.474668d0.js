(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-09a6"],{"8YNn":function(e,t,a){"use strict";a.r(t);var n=a("xBhl"),r={data:function(){return{list:[],colums:[{key:"agentUserName",label:"设备类型"},{key:"userName",label:"通信方式"},{key:"subordinateCount",label:"注册设备总数(台)"},{key:"subordinateCount",label:"注册成功设备(台)"},{key:"subordinateCount",label:"注册失败设备(台)"},{key:"subordinateCount",label:"绑定商家"},{key:"subordinateCount",label:"操作时间"},{key:"subordinateCount",label:"操作人"}],pageInfo:{total:0,pageSize:10,currPage:1},list2:[],colums2:[{key:"agentUserName",label:"设备类型"},{key:"userName",label:"设备编号"},{key:"subordinateCount",label:"注册状态"},{key:"subordinateCount",label:"原因"}],pageInfo2:{total:0,pageSize:10,currPage:1},angentInfo:[],dialogFormVisible:!1}},created:function(){this.queryList()},methods:{queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.angentInfo=[],this.list=[],this.pageInfo.currPage=t;var a={pageSize:this.pageInfo.pageSize,pageIndex:this.pageInfo.currPage};Object(n.g)(a).then(function(t){e.listLoading=!1,t.data?(e.list=t.data.items||[],e.pageInfo.total=t.data.total||0):e.pageInfo.total=0})},handleItem:function(e){},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.total=0,this.queryList(1)},handleCurrentChange:function(e){this.queryList(e)},filerQueryList:function(){this.pageInfo.total=0,this.queryList(this.pageInfo.currPage)}}},o=a("KHd+"),i=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-area"},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,border:"","highlight-current-row":""}},[e._l(e.colums,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"155",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.handleItem(t.$index)}}},[e._v("查看注册详情")])]}}])})],2),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"设备注册详情"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list2,border:"","highlight-current-row":""}},e._l(e.colums2,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("关闭")])],1)],1)],1)},[],!1,null,null,null);i.options.__file="registerRecord.vue";t.default=i.exports},xBhl:function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"h",function(){return o}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return l}),a.d(t,"f",function(){return u}),a.d(t,"g",function(){return s}),a.d(t,"e",function(){return g}),a.d(t,"b",function(){return c});var n=a("t3Un");function r(e){return Object(n.a)({url:"/agentManage/sendCode",method:"get",params:e})}function o(e){return Object(n.a)({url:"/agentManage/updateAgent",method:"post",data:e})}function i(e){return Object(n.a)({url:"/agentManage/addAgent",method:"post",data:e})}function l(e){return Object(n.a)({url:"/agentManage/getAgent",method:"get",params:e})}function u(e){return Object(n.a)({url:"/agentManage/getMerchant",method:"get",params:e})}function s(e){return Object(n.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:e})}function g(){return Object(n.a)({url:"/agentManage/getIssend",method:"get"})}function c(e){return Object(n.a)({url:"/agentManage/deleteAgent",method:"post",data:e})}}}]);