(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-749b"],{hTS4:function(e,t,a){"use strict";a.r(t);var n=a("Yfch"),r=a("xBhl"),s={data:function(){return{queryParams:{agentUserName:"",userName:"",linkName:"",phone:""},list:[{name:"name1",info:"guanlian",total:5,inline:1}],colums:[{key:"agentUserName",label:"代理商名称"},{key:"userName",label:"账号"},{key:"subordinateCount",label:"下一级代理数量"},{key:"linkName",label:"联系人"},{key:"phone",label:"手机号码"},{key:"createDate",label:"创建日期"}],pageInfo:{total:0,pageSize:10,currPage:1},angentInfo:[]}},created:function(){this.queryList()},methods:{resetQueryParams:function(){this.queryParams={agentUserName:"",userName:"",linkName:"",phone:""}},queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.angentInfo=[],this.list=[],this.pageInfo.currPage=t;var a={pageSize:this.pageInfo.pageSize,pageIndex:this.pageInfo.currPage};for(var n in this.queryParams)this.queryParams[n]&&(a[n]=this.queryParams[n]);Object(r.a)(a).then(function(t){e.listLoading=!1,t.data?(e.list=t.data.items||[],e.pageInfo.total=t.data.total||0):e.pageInfo.total=0})},handleItem:function(e){this.angentInfo=e},handleAngent:function(e){1===this.angentInfo.length?"edit"===e?this.$router.push({path:"/edit",query:{ID:this.angentInfo[0].agentUserId,action:"edit"}}):"del"===e&&this.$confirm("是否删除该代理商信息",{callback:function(e){}}):this.angentInfo.length>1?this.$message({message:"只能编辑一条代理商信息",type:"error"}):this.$message({message:"请选中一条代理商信息！！",type:"error"})},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.total=0,this.queryList(1)},handleCurrentChange:function(e){this.queryList(e)},filerQueryList:function(){this.pageInfo.total=0,this.queryParams.phone&&!Object(n.b)(this.queryParams.phone)||this.queryParams.userName&&!Object(n.b)(this.queryParams.userName)?this.$message({message:"请正确输入11位手机号码",type:"error"}):this.queryList(this.pageInfo.currPage)}}},i=a("KHd+"),l=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-area"},[a("el-form",{staticStyle:{"margin-bottom":"20px"},attrs:{inline:!0,"label-width":"90px","label-position":"right"}},[a("el-form-item",{attrs:{label:"代理商名称"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商名称",maxlength:"64",clearable:""},model:{value:e.queryParams.agentUserName,callback:function(t){e.$set(e.queryParams,"agentUserName",t)},expression:"queryParams.agentUserName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理商账号"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入代理商账号,账号为手机号",maxlength:"11",clearable:""},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),e._v(" "),a("p"),e._v(" "),a("el-form-item",{attrs:{label:"联系人"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入联系人",maxlength:"32",clearable:""},model:{value:e.queryParams.linkName,callback:function(t){e.$set(e.queryParams,"linkName",t)},expression:"queryParams.linkName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码"}},[a("el-input",{staticClass:"input-300",attrs:{placeholder:"请输入手机号码",maxlength:"11",clearable:""},model:{value:e.queryParams.phone,callback:function(t){e.$set(e.queryParams,"phone",t)},expression:"queryParams.phone"}})],1),e._v(" "),a("p"),e._v(" "),a("div",{staticClass:"flex-layout"},[a("div",{staticClass:"flex-item"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.filerQueryList}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.resetQueryParams}},[e._v("清空查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAngent("edit")}}},[e._v("编辑代理商")])],1),e._v(" "),a("router-link",{attrs:{to:{path:"/add"}}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[e._v("新增代理商")])],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,height:400,border:"","highlight-current-row":""},on:{"selection-change":e.handleItem}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.colums,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})],2),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},[],!1,null,null,null);l.options.__file="AgentsList.vue";t.default=l.exports},xBhl:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"e",function(){return i}),a.d(t,"b",function(){return l}),a.d(t,"d",function(){return o});var n=a("t3Un");function r(e){return Object(n.a)({url:"/agentManage/queryAgents",method:"get",params:e})}function s(e){return Object(n.a)({url:"/agentManage/sendCode",method:"get",params:e})}function i(e){return Object(n.a)({url:"/agentManage/addOrUpdateAgent",method:"post",data:e})}function l(e){return Object(n.a)({url:"/agentManage/getAgent",method:"get",params:e})}function o(e){return Object(n.a)({url:"/agentManage/getMerchant",method:"get",params:e})}}}]);