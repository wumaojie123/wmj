(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6737","ahm9"],{"0VFk":function(e,t,a){},"D+xE":function(e,t,a){"use strict";var n=a("0VFk");a.n(n).a},J1F3:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return r});var n=a("t3Un");function l(e){return Object(n.a)({url:"/rest/reportFroms/query",method:"post",data:e})}function o(e){return Object(n.a)({url:"/rest/benefit/group",method:"get",params:e})}function r(e){return Object(n.a)({url:"/rest/benefit/equipment",method:"get",params:e})}},ahm9:function(e,t,a){"use strict";a.r(t);var n={name:"DialogExplain",props:{visiable:{type:Boolean,default:!1}},data:function(){return{dialogTableData:[{name:"线上投币",explain:"手机上投的币，包括：顾客在线购买的游戏币，商家赠送的红包币、派币、充值抽奖币，广告主赠送的广告币等"},{name:"线下投币",explain:"顾客直接在机器上投的游戏币（包含当天或之前购买的）或者硬币"},{name:"出礼比例",explain:"机器投币的总数/出礼总数"},{name:"出礼数量(个)",explain:"被顾客获得的礼品总数"},{name:"礼品成本(元)",explain:"被顾客获得的礼品成本总数"}]}},methods:{closeDialog:function(){this.$emit("close-dialog",!1)}}},l=a("KHd+"),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visiable,"show-close":!1,"close-on-click-modal":!1,width:"500px",title:"投币/出礼说明"},on:{"update:visible":function(t){e.visiable=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dialogTableData,border:""}},[a("el-table-column",{attrs:{label:"名称",align:"left",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"解释说明",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.explain))])]}}])})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.closeDialog}},[e._v("知道了")])],1)],1)},[],!1,null,null,null);o.options.__file="DialogExplain.vue";t.default=o.exports},xBhl:function(e,t,a){"use strict";a.d(t,"d",function(){return l}),a.d(t,"h",function(){return o}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"f",function(){return i}),a.d(t,"g",function(){return c}),a.d(t,"e",function(){return u}),a.d(t,"b",function(){return d});var n=a("t3Un");function l(e){return Object(n.a)({url:"/agentManage/sendCode",method:"get",params:e})}function o(e){return Object(n.a)({url:"/agentManage/updateAgent",method:"post",data:e})}function r(e){return Object(n.a)({url:"/agentManage/addAgent",method:"post",data:e})}function s(e){return Object(n.a)({url:"/agentManage/getAgent",method:"get",params:e})}function i(e){return Object(n.a)({url:"/agentManage/getMerchant",method:"get",params:e})}function c(e){return Object(n.a)({url:"/agentManage/secondAgents/querySecondAgents",method:"get",params:e})}function u(){return Object(n.a)({url:"/agentManage/getIssend",method:"get"})}function d(e){return Object(n.a)({url:"/agentManage/deleteAgent",method:"post",data:e})}},yb5i:function(e,t,a){"use strict";a.r(t);var n=a("7Qib"),l=a("J1F3"),o=a("xBhl"),r=a("ahm9"),s=Date.now(),i={disabledDate:function(e){var t=e.getTime();return t<s-15552e6||t>s}},c={components:{DialogExplain:r.default},data:function(){return{roletype:"商家",queryParams:{agentUserName:"",businessName:"",associateSellerPhone:"",associateSellerName:""},dateRange:[],listLoading:!0,list:[],agentList:[],showCoinsFields:!1,showMaterialFields:!1,colums:[{key:"businessName",label:"商户品牌名称",width:250},{key:"agentUserName",label:"商家名称",width:250},{key:"orderCount",label:"订单数量",sortable:!0},{key:"totalIncome",label:"收入总额(元)",sortable:!0},{key:"onlineIncome",label:"在线收入(元)",sortable:!0},{key:"cashIncome",label:"现金收入(元)",sortable:!0},{key:"adIncome",label:"广告收入(元)",sortable:!0}],colums2:[{key:"agentUserName",label:"代理名称",width:250},{key:"orderCount",label:"订单数量",sortable:!0},{key:"totalIncome",label:"收入总额(元)",sortable:!0},{key:"onlineIncome",label:"在线收入(元)",sortable:!0},{key:"cashIncome",label:"现金收入(元)",sortable:!0},{key:"adIncome",label:"广告收入(元)",sortable:!0}],pageInfo:{total:20,pageSize:10,currPage:1},options:i,active:"merchant",type:"",dateActive:"day",dialogVisiable:!1}},beforeMount:function(){this.dateRange[0]=Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}"),this.dateRange[1]=Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}"),this.queryAgentType(),this.queryList()},methods:{renderGiftCost:function(e){var t=this;return[e("span",{},["出礼比例"]),e("i",{class:"el-icon-warning",style:"margin-left: 5px",on:{click:function(){t.dialogVisiable=!0}}})]},queryAgentType:function(){var e=this;Object(o.c)().then(function(t){e.type=t.data.type})},handlerTabClick:function(e){this.roletype=e.label,this.list=[],this.agentList=[],this.pageInfo={total:20,pageSize:10,currPage:1},this.resetQueryParams(),this.queryList()},resetQueryParams:function(){this.queryParams={agentUserName:"",businessName:"",associateSellerPhone:"",associateSellerName:""},this.dateRange=[],this.dateRange[0]=Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}"),this.dateRange[1]=Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}")},handleQueryParams:function(){this.queryList(this.pageInfo.currPage)},queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.listLoading=!0,this.pageInfo.currPage=t;var a=this.queryParams;a.pageIndex=this.pageInfo.currPage,a.pageSize=this.pageInfo.pageSize,a.startDate=this.dateRange[0],a.endDate=this.dateRange[1],a.roleStr=this.active,"agent"===this.active?this.list=[]:"merchant"===this.active&&(this.agentList=[]),Object(l.b)(a).then(function(t){if(e.listLoading=!1,t.data){var a=t.data&&t.data.items||[];"merchant"===e.active?e.list=a:"agent"===e.active&&(e.agentList=a),e.pageInfo.total=t.data.total||0,e.showCoinsFields=t.data.showCoinsFields,e.showMaterialFields=t.data.showMaterialFields}else e.pageInfo.total=0})},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.queryList(this.pageInfo.currPage)},handleCurrentChange:function(e){this.queryList(e)},exportData:function(){var e="商家"===this.roletype?this.queryParams.associateSellerPhone:this.queryParams.agentUserName;location.href=encodeURI("/agent/rest/export/reportFroms?startDate="+this.dateRange[0]+"&endDate="+this.dateRange[1]+"&roleStr="+this.active+"&associateSellerName="+e)},searchDate:function(e){this.dateActive=e,"day"===e?this.dateRange=[Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}"),Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}")]:"week"===e?this.dateRange=[Object(n.i)(Date.now()-6048e5,"{y}-{m}-{d}"),Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}")]:"month"===e?this.dateRange=[Object(n.i)(Date.now()-2592e6,"{y}-{m}-{d}"),Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}")]:"year"===e&&(this.dateRange=[Object(n.i)(Date.now()-154656e5,"{y}-{m}-{d}"),Object(n.i)(Date.now()-864e5,"{y}-{m}-{d}")]),this.queryList()},closeDialog:function(e){this.dialogVisiable=e}}},u=(a("D+xE"),a("KHd+")),d=Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-area"},[a("el-form",{attrs:{inline:!0,"label-width":"100px","label-position":"right"}},[a("el-form-item",{attrs:{label:"统计日期"}},[a("el-date-picker",{attrs:{clearable:!1,"picker-options":e.options,"unlink-panels":!0,type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.roletype+"账号"}},[a("el-input",{attrs:{placeholder:"请输入"+e.roletype+"账号",clearable:""},model:{value:e.queryParams.associateSellerPhone,callback:function(t){e.$set(e.queryParams,"associateSellerPhone",t)},expression:"queryParams.associateSellerPhone"}})],1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleQueryParams}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.exportData}},[e._v("导出数据")])],1),e._v(" "),a("div",{staticClass:"btn-group"},[a("span",{staticClass:"date-btn",class:{active:"day"==e.dateActive},on:{click:function(t){e.searchDate("day")}}},[e._v("昨天")]),e._v(" "),a("span",{staticClass:"date-btn",class:{active:"week"==e.dateActive},on:{click:function(t){e.searchDate("week")}}},[e._v("近7天")]),e._v(" "),a("span",{staticClass:"date-btn",class:{active:"month"==e.dateActive},on:{click:function(t){e.searchDate("month")}}},[e._v("近30天")]),e._v(" "),a("span",{staticClass:"date-btn",class:{active:"year"==e.dateActive},on:{click:function(t){e.searchDate("year")}}},[e._v("半年")])]),e._v(" "),a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handlerTabClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("el-tab-pane",{attrs:{label:"商家",name:"merchant"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,"show-summary":"",border:""}},[a("el-table-column",{attrs:{prop:"associateSellerPhone",label:"账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{staticClass:"lyy-a-link",attrs:{to:{path:"/placeReport",query:{agentUserName:t.row.agentUserName,associateSellerPhone:t.row.associateSellerPhone,begin:e.dateRange[0],end:e.dateRange[1]}}}},[e._v(e._s(t.row.associateSellerPhone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商户品牌名称",align:"center",prop:"businessName",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.businessName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商家名称",align:"center",prop:"agentUserName",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.agentUserName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单数量",align:"center",prop:"orderCount",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.orderCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收入总额(元)",align:"center",prop:"totalIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"在线收入(元)",align:"center",prop:"onlineIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.onlineIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"现金收入(元)",align:"center",prop:"cashIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.cashIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"广告收入(元)",align:"center",prop:"adIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.adIncome))])]}}])}),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"线上投币(个)",align:"center",prop:"onlineCoinsCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.onlineCoinsCount))])]}}])}):e._e(),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"线下投币(个)",align:"center",prop:"offlineCoinsCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.offlineCoinsCount))])]}}])}):e._e(),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"合计投币(个)",align:"center",prop:"totalCoins"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalCoins))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{label:"礼品消耗(个)",align:"center",prop:"materialQuantity"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialQuantity))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{label:"出礼总成本(元)",align:"center",prop:"materialCost"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialCost))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{"render-header":e.renderGiftCost,align:"center",prop:"materialRate"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialRate))])]}}])}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"当前设备总量",align:"center",prop:"equipmentTotalCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentTotalCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昨日在线设备量",align:"center",prop:"equipmentOnlineCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentOnlineCount))])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),2!==e.type?a("el-tab-pane",{attrs:{label:"代理",name:"agent"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.agentList,"show-summary":"",border:""}},[a("el-table-column",{attrs:{prop:"associateSellerPhone",label:"账号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"代理名称",align:"center",prop:"agentUserName",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.agentUserName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单数量",align:"center",prop:"orderCount",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.orderCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收入总额(元)",align:"center",prop:"totalIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"在线收入(元)",align:"center",prop:"onlineIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.onlineIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"现金收入(元)",align:"center",prop:"cashIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.cashIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"广告收入(元)",align:"center",prop:"adIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.adIncome))])]}}])}),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"线上投币(个)",align:"center",prop:"onlineCoinsCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.onlineCoinsCount))])]}}])}):e._e(),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"线下投币(个)",align:"center",prop:"offlineCoinsCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.offlineCoinsCount))])]}}])}):e._e(),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"合计投币(个)",align:"center",prop:"totalCoins"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalCoins))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{label:"礼品消耗(个)",align:"center",prop:"materialQuantity"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialQuantity))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{label:"出礼总成本",align:"center",prop:"materialCost"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialCost))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{"render-header":e.renderGiftCost,align:"center",prop:"materialRate"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialRate))])]}}])}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"当前设备总量",align:"center",prop:"equipmentTotalCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentTotalCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昨日在线设备量",align:"center",prop:"equipmentOnlineCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentOnlineCount))])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange,"current-change":e.handleCurrentChange}})],1):e._e()],1),e._v(" "),a("DialogExplain",{attrs:{visiable:e.dialogVisiable},on:{"close-dialog":e.closeDialog}})],1)},[],!1,null,null,null);d.options.__file="ManagerReport.vue";t.default=d.exports}}]);