(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-155b"],{"2x4m":function(t,e,i){},"7nR4":function(t,e,i){"use strict";i.r(e);var n=i("P2sY"),a=i.n(n),s=i("14Xm"),l=i.n(s),r=i("D3Ub"),o=i.n(r),c=i("omMh"),u=i("ZySA"),d=i("7Qib"),p={name:"AgentsList",directives:{waves:u.a},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{contractId:"",agentUserName:"",phone:"",bdId:""},bdList:null,checked:!1,checkedRow:null,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){var t=this;return o()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBDList();case 2:t.getList();case 3:case"end":return e.stop()}},e,t)}))()},methods:{getTemplateRow:function(t,e){this.checkedRow=e},getBDList:function(){var t=this;c.a.getBDList().then(function(e){t.bdList=e.data},function(){t.bdList=[]})},getList:function(){var t=this;this.listLoading=!0,c.a.getAgentList(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.checkedRow=null,t.checked=!1,setTimeout(function(){t.listLoading=!1},1500)},function(e){t.list=[],t.total=null,t.checkedRow=null,t.checked=!1,setTimeout(function(){t.listLoading=!1},1500)})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleUpdate:function(t){var e=this;this.temp=a()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleEdit:function(t){var e=this;if("add"===t)this.$router.push({name:"createOneAgent",query:{plan:"private"}});else{if(!e.checkedRow&&(e.$notify({title:"提示",message:"操作失败,请选中某一条数据进行操作",type:"error",duration:2e3}),1))return!1;var i=this.checkedRow.agentUserId;"edit"===t?this.$router.push({name:"oneAgentEdit",query:{id:i}}):"showSubAgentList"===t?this.$router.push({name:"subAgent",query:{id:i}}):"delete"===t&&this.getList()}},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(d.d)(e[t]):e[t]})})}}},h=(i("PDWK"),i("KHd+")),m=Object(h.a)(p,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agent-list-container bd-manage"},[i("div",{staticClass:"filter-container"},[i("div",{staticClass:"item"},[i("span",{staticClass:"label"},[t._v("合同编号 ")]),t._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"300px","margin-right":"20px"},attrs:{placeholder:"请输入合同编号"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.contractId,callback:function(e){t.$set(t.listQuery,"contractId",e)},expression:"listQuery.contractId"}})],1),t._v(" "),i("div",{staticClass:"item"},[i("span",{staticClass:"label"},[t._v("代理商名称")]),t._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"300px","margin-right":"20px"},attrs:{placeholder:"请输入代理商名称"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.agentUserName,callback:function(e){t.$set(t.listQuery,"agentUserName",e)},expression:"listQuery.agentUserName"}})],1),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"item"},[i("span",{staticClass:"label"},[t._v("商家手机")]),t._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"300px","margin-right":"20px"},attrs:{placeholder:"请输入商家手机"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.phone,callback:function(e){t.$set(t.listQuery,"phone",e)},expression:"listQuery.phone"}})],1),t._v(" "),i("div",{staticClass:"item"},[i("span",{staticClass:"label"},[t._v("  BD同事     ")]),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"300px","margin-right":"20px","vertical-align":"baseline"},attrs:{placeholder:"请选择BD同事",clearable:""},model:{value:t.listQuery.bdId,callback:function(e){t.$set(t.listQuery,"bdId",e)},expression:"listQuery.bdId"}},t._l(t.bdList,function(t){return i("el-option",{key:t.adUserId,attrs:{label:t.username,value:t.adUserId}})}))],1),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s("查找"))]),t._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.handleEdit("edit")}}},[t._v(t._s("编辑"))]),t._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-view"},on:{click:function(e){t.handleEdit("showSubAgentList")}}},[t._v(t._s("查看下级代理"))]),t._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.handleEdit("add")}}},[t._v(t._s("新增代理商"))])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",stripe:"",fit:"",height:"550","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"操作",fixed:"",align:"center",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-radio",{staticClass:"radio",attrs:{label:e.row.agentUserId},nativeOn:{change:function(i){t.getTemplateRow(e.$index,e.row)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(" ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"合同编号",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.adOrgId||""))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"代理商名称",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.agentUserName||""))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"账号",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.userName||""))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"经营项目",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.bunissesNames||"未知"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"自营设备数量",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.ownEquipmentCount||0))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"下级代理数量",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.subordinateCount||0))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"代理设备数量",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.equipmentCount||0))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"BD同事",width:"80px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.bdName||""))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"创建日期",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.createDate))])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{"current-page":t.listQuery.page,"page-sizes":[25],"page-size":t.listQuery.limit,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"2e07d569",null);m.options.__file="AgentsList.vue";e.default=m.exports},PDWK:function(t,e,i){"use strict";var n=i("2x4m");i.n(n).a},ZySA:function(t,e,i){"use strict";var n=i("P2sY"),a=i.n(n),s=(i("jUE0"),{bind:function(t,e){t.addEventListener("click",function(i){var n=a()({},e.value),s=a()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),l=s.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var r=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",l.appendChild(o)),s.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(i.pageY-r.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(i.pageX-r.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=s.color,o.className="waves-ripple z-active",!1}},!1)}}),l=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(l)),s.install=l;e.a=s},jUE0:function(t,e,i){}}]);