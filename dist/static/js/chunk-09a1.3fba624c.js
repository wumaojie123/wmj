(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-09a1"],{"8YNn":function(e,t,a){"use strict";a.r(t);var n=a("cLjf"),i=a.n(n),r=a("hDQ3"),l=a.n(r),o=a("qpgI"),s=a("mG/D"),u={data:function(){return{list:[],colums:[{key:"equipmentType",label:"设备类型"},{key:"communicationText",label:"通信方式"},{key:"equipmentCount",label:"注册设备总数(台)"},{key:"waitingCount",label:"待注册设备数(台)"},{key:"registeredCount",label:"注册成功设备(台)"},{key:"unregisteredCount",label:"注册失败设备(台)"},{key:"distributor",label:"绑定商家"},{key:"created",label:"操作时间"},{key:"createdby",label:"操作人"}],pageInfo:{total:0,pageSize:10,currPage:1},list2:[],colums2:[{key:"equipmentType",label:"设备类型"},{key:"value",label:"设备编号"},{key:"statusText",label:"注册状态"},{key:"reasonText",label:"原因"}],pageInfo2:{total:0,pageSize:10,currPage:1},dialogFormVisible:!1,selectItem:{}}},created:function(){this.queryList()},methods:{queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return l()(i.a.mark(function a(){var n,r,l;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.list=[],e.pageInfo.currPage=t,n={pageSize:e.pageInfo.pageSize,pageIndex:e.pageInfo.currPage},a.next=5,Object(o.p)(n);case 5:0===(r=a.sent).result&&(e.listLoading=!1,r.data?(l=(l=r.data.items||[]).map(function(e){return e.communicationText=s.a[e.communication],e}),e.list=l,e.pageInfo.total=r.data.total||0):e.pageInfo.total=0);case 7:case"end":return a.stop()}},a,e)}))()},queryDetailList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return l()(i.a.mark(function a(){var n,r,l;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.list2=[],e.pageInfo2.currPage=t,n={pageSize:e.pageInfo2.pageSize,pageIndex:e.pageInfo2.currPage,agentEquipmentRegisteredLogId:e.selectItem.agentEquipmentRegisteredLogId},a.next=5,Object(o.n)(n);case 5:0===(r=a.sent).result&&(e.listLoading=!1,r.data?(l=(l=r.data.items||[]).map(function(t){t.equipmentType=e.selectItem.equipmentType;t.statusText={1:"待注册",0:"注册成功",2:"注册失败"}[t.status];return t.reasonText={0:"未找到设备",1:"已绑定",2:"切换计费模式失败"}[t.reason],t}),e.list2=l,e.pageInfo2.total=r.data.total||0):e.pageInfo2.total=0);case 7:case"end":return a.stop()}},a,e)}))()},handleItem:function(e){this.selectItem=this.list[e],this.queryDetailList(1),this.dialogFormVisible=!0},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.total=0,this.queryList(1)},handleCurrentChange:function(e){this.queryList(e)},handleSizeChange2:function(e){this.pageInfo2.pageSize=e,this.pageInfo2.total=0,this.queryDetailList(1)},handleCurrentChange2:function(e){this.queryDetailList(e)}}},c=a("ZrdR"),g=Object(c.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-area"},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px","min-height":"600px"},attrs:{data:e.list,border:"","highlight-current-row":""}},[e._l(e.colums,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"155",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.handleItem(t.$index)}}},[e._v("查看注册详情")])]}}])})],2),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"设备注册详情"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list2,border:"","highlight-current-row":"",height:"450"}},e._l(e.colums2,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo2.pageSize,total:e.pageInfo2.total,"current-page":e.pageInfo2.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange2,"current-change":e.handleCurrentChange2}}),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("关闭")])],1)],1)],1)},[],!1,null,null,null);g.options.__file="registerRecord.vue";t.default=g.exports},"mG/D":function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return r});var n=[{value:"CDZ",label:"充电桩"}],i={CDZ:"充电桩"},r={0:"无",1:"脉冲",2:"串口"}}}]);