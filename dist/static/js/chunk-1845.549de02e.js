(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1845"],{"/WPO":function(e,t,a){"use strict";var l=a("LtCi");a.n(l).a},LtCi:function(e,t,a){},T67A:function(e,t,a){"use strict";a.r(t);var l=a("t3Un");var n=a("ZySA"),i=a("4HVd"),o=a.n(i),s=[{key:0,display_name:"冻结"},{key:1,display_name:"激活"}],r={name:"DeviceList",directives:{waves:n.a},data:function(){return{tableKey:0,showQR:!1,list:null,minHeightTable:550,total:null,listLoading:!0,isOnline:[{label:"在线",value:!0},{label:"离线",value:!1}],equipmentTypeName:[{label:"按摩椅",value:"按摩椅"},{label:"洗衣机",value:"洗衣机"},{label:"娃娃机",value:"娃娃机"},{label:"兑币机",value:"兑币机"},{label:"充电桩",value:"充电桩"}],form:{equipmentId:"",deviceName:"",groupNumber:"",groupName:"",agentUserName:"",equipmentTypeName:"",isOnline:""},listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},calendarTypeOptions:s,checked:!1,checkedRow:null,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList();var e=document.body.clientHeight||document.documentElement.clientHeight;this.minHeightTable=e-393},methods:{createQRCode:function(){var e=document.getElementById("canvas");o.a.toCanvas(e,"https://www.baidu.com/",{width:200,height:200})},handleCreateQRCode:function(){this.showQR=!this.showQR,this.createQRCode()},getTemplateRow:function(e,t){this.checked=!0,this.checkedRow=t},getList:function(){var e,t=this;this.listLoading=!0,this.form.pageSize=this.listQuery.limit,this.form.pageIndex=this.listQuery.page,(e=this.form,Object(l.a)({url:"/equipment/getEquipmentList",method:"get",params:e})).then(function(e){t.list=e.data.items,t.total=e.data.total,t.checkedRow=null,t.checked=!1,setTimeout(function(){t.listLoading=!1},1500)})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleBtn:function(e){"find"===e?this.getList():"clear"===e&&this.$refs.form.resetFields()}}},c=(a("/WPO"),a("ZrdR")),u=Object(c.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticClass:"agent-list-container"},[a("el-form",{ref:"form",staticClass:"deviceForm",attrs:{model:e.form,rules:e.rules,"label-width":"90px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"设备编号",prop:"equipmentId"}},[a("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.form.equipmentId,callback:function(t){e.$set(e.form,"equipmentId",t)},expression:"form.equipmentId"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"机台号",prop:"groupNumber"}},[a("el-input",{attrs:{placeholder:"请输入机台号"},model:{value:e.form.groupNumber,callback:function(t){e.$set(e.form,"groupNumber",t)},expression:"form.groupNumber"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"场地名称",prop:"groupName"}},[a("el-input",{attrs:{placeholder:"请输入场地名称"},model:{value:e.form.groupName,callback:function(t){e.$set(e.form,"groupName",t)},expression:"form.groupName"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"代理商名称",prop:"agentUserName"}},[a("el-input",{attrs:{placeholder:"请输入代理商名称"},model:{value:e.form.agentUserName,callback:function(t){e.$set(e.form,"agentUserName",t)},expression:"form.agentUserName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"设备类型",prop:"equipmentTypeName"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.equipmentTypeName,callback:function(t){e.$set(e.form,"equipmentTypeName",t)},expression:"form.equipmentTypeName"}},e._l(e.equipmentTypeName,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"在线状态",prop:"isOnline"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.isOnline,callback:function(t){e.$set(e.form,"isOnline",t)},expression:"form.isOnline"}},e._l(e.isOnline,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"filter-container"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.handleBtn("find")}}},[e._v("查询")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-delete"},on:{click:function(t){e.handleBtn("clear")}}},[e._v("清空查询")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-view"},on:{click:function(t){e.handleCreateQRCode()}}},[e._v("查看二维码")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.list,height:e.minHeightTable,border:"",stripe:"",fit:"","highlight-current-row":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{staticClass:"radio",attrs:{label:t.row.id},nativeOn:{change:function(a){e.getTemplateRow(t.$index,t.row)}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(" ")])]}}])},[a("el-table-column",{attrs:{label:"设备编号",align:"center",prop:"equipmentId"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备机台号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.groupNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentTypeName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"代理商名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.agentUserName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"区域",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.districtName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"在线状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.online?"在线":"离线"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"固件版本",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.firmwareVersion))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"场地名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.groupName))])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showQR,expression:"showQR"}],staticClass:"mask-box",on:{click:function(t){t.stopPropagation(),e.showQR=!e.showQR}}},[a("div",{staticClass:"wrapper",on:{click:function(e){e.stopPropagation()}}},[a("div",{staticClass:"close",on:{click:function(t){t.stopPropagation(),e.showQR=!e.showQR}}},[e._v("X")]),e._v(" "),a("h2",[e._v("请用微信或支付宝扫描二维码")]),e._v(" "),a("canvas",{attrs:{id:"canvas"}}),e._v(" "),a("p",[e._v("6061509002863744")]),e._v(" "),a("p",[e._v("13号机（万达2楼）")]),e._v(" "),a("p",[e._v("按摩椅")])])])],1)},[],!1,null,"0a613dde",null);u.options.__file="DeviceList.vue";t.default=u.exports},ZySA:function(e,t,a){"use strict";var l=a("6ZY3"),n=a.n(l),i=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var l=n()({},t.value),i=n()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},l),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var s=o.getBoundingClientRect(),r=o.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":((r=document.createElement("span")).className="waves-ripple",r.style.height=r.style.width=Math.max(s.width,s.height)+"px",o.appendChild(r)),i.type){case"center":r.style.top=s.height/2-r.offsetHeight/2+"px",r.style.left=s.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-s.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-s.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=i.color,r.className="waves-ripple z-active",!1}},!1)}}),o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;t.a=i},jUE0:function(e,t,a){}}]);