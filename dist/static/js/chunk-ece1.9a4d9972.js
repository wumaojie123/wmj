(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ece1","ahm9"],{J1F3:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"c",function(){return l}),a.d(t,"a",function(){return r});var n=a("t3Un");function o(e){return Object(n.a)({url:"/rest/reportFroms/query",method:"post",data:e})}function l(e){return Object(n.a)({url:"/rest/benefit/group",method:"get",params:e})}function r(e){return Object(n.a)({url:"/rest/benefit/equipment",method:"get",params:e})}},JCw5:function(e,t,a){},OD2Y:function(e,t,a){"use strict";a.r(t);var n=a("7Qib"),o=a("J1F3"),l=a("k4fO"),r={components:{DialogExplain:a("ahm9").default},data:function(){return{dateRange:[],listLoading:!0,list:[],showCoinsFields:!1,showMaterialFields:!1,colums:[{key:"orderCount",label:"订单数量",sortable:!0},{key:"totalIncome",label:"收入总额(元)",sortable:!0},{key:"onlineIncome",label:"在线收入(元)",sortable:!0},{key:"cashIncome",label:"现金收入(元)",sortable:!0},{key:"adIncome",label:"广告收入(元)",sortable:!0}],pageInfo:{total:20,pageSize:10,currPage:1},options:l.a,agentUserName:"",query:{userName:"",groupName:""},dateActive:"day",dialogVisiable:!1}},beforeMount:function(){this.query.userName=this.$route.query.associateSellerPhone,this.agentUserName=this.$route.query.agentUserName,this.dateRange[0]=this.$route.query.begin,this.dateRange[1]=this.$route.query.end;var e=[],t=e[0],a=e[1],n=e[2];this.$route.query.begin&&this.$route.query.end&&(a=new Date(this.$route.query.begin.replace(/-/g,"/")),n=new Date(this.$route.query.end.replace(/-/g,"/")),1===(t=parseInt((n.getTime()-a.getTime())/864e5)+1)?this.dateActive="day":7===t?this.dateActive="week":30===t?this.dateActive="month":179===t&&(this.dateActive="year")),this.queryList()},methods:{renderGiftCost:function(e){var t=this;return[e("span",{},["出礼比例"]),e("i",{class:"el-icon-warning",style:"margin-left: 5px",on:{click:function(){t.dialogVisiable=!0}}})]},queryList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.listLoading=!0,this.pageInfo.currPage=t;var a=this.query;a.pageIndex=this.pageInfo.currPage,a.pageSize=this.pageInfo.pageSize,a.startDate=this.dateRange[0],a.endDate=this.dateRange[1],Object(o.c)(a).then(function(t){e.listLoading=!1,t.data?(e.list=t.data&&t.data.items||[],e.pageInfo.total=t.data.total||0,e.showCoinsFields=t.data.showCoinsFields,e.showMaterialFields=t.data.showMaterialFields):e.pageInfo.total=0})},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.queryList(this.pageInfo.currPage)},handleCurrentChange:function(e){this.queryList(e)},exportData:function(){var e="userName="+this.query.userName+"&startDate="+this.dateRange[0]+"&endDate="+this.dateRange[1]+"&groupName="+this.query.groupName;window.location=encodeURI("/agent/rest/export/benefit/group?"+e)},searchDate:function(e){this.dateActive=e,"day"===e?this.dateRange=[Object(n.e)(Date.now()-864e5,"{y}-{m}-{d}"),Object(n.e)(Date.now()-864e5,"{y}-{m}-{d}")]:"week"===e?this.dateRange=[Object(n.e)(Date.now()-6048e5,"{y}-{m}-{d}"),Object(n.e)(Date.now()-864e5,"{y}-{m}-{d}")]:"month"===e?this.dateRange=[Object(n.e)(Date.now()-2592e6,"{y}-{m}-{d}"),Object(n.e)(Date.now()-864e5,"{y}-{m}-{d}")]:"year"===e&&(this.dateRange=[Object(n.e)(Date.now()-154656e5,"{y}-{m}-{d}"),Object(n.e)(Date.now()-864e5,"{y}-{m}-{d}")]),this.queryList()},closeDialog:function(e){this.dialogVisiable=e}}},i=(a("WBvN"),a("ZrdR")),s=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-area"},[a("el-form",{attrs:{inline:!0,"label-width":"100px","label-position":"right"}},[a("el-form-item",{attrs:{label:"统计日期"}},[a("el-date-picker",{attrs:{clearable:!1,"picker-options":e.options,type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入场地名称",clearable:""},model:{value:e.query.groupName,callback:function(t){e.$set(e.query,"groupName",t)},expression:"query.groupName"}})],1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.queryList(1)}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.exportData}},[e._v("导出数据")])],1),e._v(" "),a("div",{staticClass:"btn-group"},[a("span",{staticClass:"date-btn",class:{active:"day"==e.dateActive},on:{click:function(t){e.searchDate("day")}}},[e._v("昨天")]),e._v(" "),a("span",{staticClass:"date-btn",class:{active:"week"==e.dateActive},on:{click:function(t){e.searchDate("week")}}},[e._v("近7天")]),e._v(" "),a("span",{staticClass:"date-btn",class:{active:"month"==e.dateActive},on:{click:function(t){e.searchDate("month")}}},[e._v("近30天")]),e._v(" "),a("span",{staticClass:"date-btn",class:{active:"year"==e.dateActive},on:{click:function(t){e.searchDate("year")}}},[e._v("半年")])]),e._v(" "),a("div",{staticClass:"lyy-table-header"},[a("span",{staticStyle:{margin:"0 20px"}},[e._v("商家名称："+e._s(e.agentUserName))]),e._v("|\n    "),a("span",{staticStyle:{margin:"0 20px"}},[e._v("商家账号："+e._s(e.query.userName))])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.list,"show-summary":"",border:""}},[a("el-table-column",{attrs:{prop:"associateSellerPhone",label:"场地名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{staticClass:"lyy-a-link",attrs:{to:{path:"/equipmentReport",query:{begin:e.dateRange[0],end:e.dateRange[1],userName:e.query.userName,groupId:t.row.groupId,groupName:t.row.groupName,name:e.agentUserName}}}},[e._v(e._s(t.row.groupName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单数量",align:"center",prop:"orderCount",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.orderCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收入总额(元)",align:"center",prop:"totalIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"在线收入(元)",align:"center",prop:"onlineIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.onlineIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"现金收入(元)",align:"center",prop:"cashIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.cashIncome))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"广告收入(元)",align:"center",prop:"adIncome",sortable:"true"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.adIncome))])]}}])}),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"线上投币(个)",align:"center",prop:"onlineCoinsCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.onlineCoinsCount))])]}}])}):e._e(),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"线下投币(个)",align:"center",prop:"offlineCoinsCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.offlineCoinsCount))])]}}])}):e._e(),e._v(" "),e.showCoinsFields?a("el-table-column",{attrs:{label:"合计投币(个)",align:"center",prop:"totalCoins"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalCoins))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{label:"礼品消耗(个)",align:"center",prop:"materialQuantity"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialQuantity))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{label:"出礼总成本",align:"center",prop:"materialCost"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialCost))])]}}])}):e._e(),e._v(" "),e.showMaterialFields?a("el-table-column",{attrs:{"render-header":e.renderGiftCost,align:"center",prop:"materialRate"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.materialRate))])]}}])}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"当前设备总量",align:"center",prop:"equipmentTotalCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentTotalCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昨日在线设备量",align:"center",prop:"equipmentOnlineCount"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.equipmentOnlineCount))])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,total:e.pageInfo.total,"current-page":e.pageInfo.currPage,background:"",layout:"total, prev, pager, next, sizes, jumper"},on:{"size-change":e.handleSizeChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("DialogExplain",{attrs:{visiable:e.dialogVisiable},on:{"close-dialog":e.closeDialog}})],1)},[],!1,null,null,null);s.options.__file="PlaceReport.vue";t.default=s.exports},WBvN:function(e,t,a){"use strict";var n=a("JCw5");a.n(n).a},ahm9:function(e,t,a){"use strict";a.r(t);var n={name:"DialogExplain",props:{visiable:{type:Boolean,default:!1}},data:function(){return{dialogTableData:[{name:"线上投币",explain:"手机上投的币，包括：顾客在线购买的游戏币，商家赠送的红包币、派币、充值抽奖币，广告主赠送的广告币等"},{name:"线下投币",explain:"顾客直接在机器上投的游戏币（包含当天或之前购买的）或者硬币"},{name:"出礼比例",explain:"机器投币的总数/出礼总数"},{name:"出礼数量(个)",explain:"被顾客获得的礼品总数"},{name:"礼品成本(元)",explain:"被顾客获得的礼品成本总数"}]}},methods:{closeDialog:function(){this.$emit("close-dialog",!1)}}},o=a("ZrdR"),l=Object(o.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.visiable,"show-close":!1,"close-on-click-modal":!1,width:"500px",title:"投币/出礼说明"},on:{"update:visible":function(t){e.visiable=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dialogTableData,border:""}},[a("el-table-column",{attrs:{label:"名称",align:"left",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"解释说明",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.explain))])]}}])})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.closeDialog}},[e._v("知道了")])],1)],1)},[],!1,null,null,null);l.options.__file="DialogExplain.vue";t.default=l.exports},k4fO:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={disabledDate:function(e){var t=Date.now(),a=e.getTime();return a<t-5184e6||a>t}}}}]);