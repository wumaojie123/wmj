(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-19e8","chunk-2479"],{"7/oS":function(e,a,t){},"9AY5":function(e,a,t){"use strict";t.r(a);var r={props:{cell:{type:Object,default:function(){return{prop:[],name:[],obj:{}}}}}},s=(t("Mlg6"),t("KHd+")),n=Object(s.a)(r,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-container",[t("el-main",[e._l(e.cell.prop,function(a,r){return[t("el-row",{key:r,staticClass:"border-set"},[t("el-col",{staticClass:"right-border-set",attrs:{span:12}},[t("div",[e._v(e._s(e.cell.name[r]))])]),e._v(" "),t("el-col",{attrs:{span:12}},[t("div",[e._v(e._s(e.cell.obj[a]))])])],1)]})],2)],1)},[],!1,null,"1de7ce8c",null);n.options.__file="orderDetail.vue";a.default=n.exports},Mlg6:function(e,a,t){"use strict";var r=t("7/oS");t.n(r).a},SfeO:function(e,a,t){"use strict";var r=t("fCpl");t.n(r).a},fCpl:function(e,a,t){},ylBi:function(e,a,t){"use strict";t.r(a);var r=t("14Xm"),s=t.n(r),n=t("D3Ub"),i=t.n(n),c=t("KpQh"),o=t("9AY5"),l=t("gO3j"),d={components:{"order-list":c.default,"order-detail":o.default},data:function(){return{commProps:{cell:{name:["交易单号","商户单号","交易设备","交易场地","商户账号","用户ID","订单金额(元)","平台广告补贴(元)","商家活动","银行卡实收金额(元)","交易状态","退款金额(元)","创建时间"],prop:["wechatTrxid","swiftpassTrxid","device","name","merchant","user","originalFee","platformFee","activity","totalFee","statusName","refundFee","created"],list:[]},handler:{isShow:!0,text:"操作",list:[]},pagination:{totalCount:0,pageIndex:1,pageSizes:[10,20,50],pageSize:10,sizeChangeHd:"size-change",currentChangeHd:"current-change"}},merchantList:[],searchParam:{adOrgId:"",deviceNo:"",userId:"",tradeId:"",date:""},commDetail:{prop:["device","groupName","communicateTypeName","packageName1","stateName","startTime","endTime","actualTime","actualDurings","refundMoney"],name:["交易设备","交易场地","通信方式","充电套餐","工作状态","开始充电时间","结束充电时间","实际充电时长(分)","套餐实际充电总时长(分)","剩余时长退款（退至充电账户余额)(元)"],obj:{}},option:{disabledDate:function(e){var a=Date.now(),t=e.getTime();return t<a-2592e6||t>a}},detailVisible:!1}},mounted:function(){var e=this;return i()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.merchantList=[],a.next=3,Object(l.a)();case 3:e.merchantList=a.sent;case 5:case"end":return a.stop()}},a,e)}))()},methods:{sizeChangeHd:function(e){this.commProps.pagination.pageSize=e,this.queryPayOrderList()},currentChangeHd:function(e){this.commProps.pagination.pageIndex=e,this.queryPayOrderList()},showDetail:function(e){this.getOrderDetail(e.outTradeNo,e.payType)},getOrderDetail:function(e,a){var t=this;return i()(s.a.mark(function a(){var r,n,i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(l.d)({outTradeNo:e});case 2:if(0!==(r=a.sent).result){a.next=15;break}if(null!==(n=r.data)){a.next=7;break}return a.abrupt("return");case 7:i=n.groupNumber,n.device=i?i+"号机-充电桩"+n.deviceNo:"-充电桩"+n.deviceNo,"CK"===n.communicateType?(n.device+="-"+n.passageWay+"号插座",n.communicateTypeName="串口"):n.communicateTypeName="脉冲",n.packageName1=n.packageName,n.continuousPackageNames&&n.continuousPackageNames.length>0&&(n.packageName1+="(续充"+n.continuousPackageNames.join(",")+")"),n.stateName=Object(l.b)(n.state),t.commDetail.obj=n,t.detailVisible=!0;case 15:case"end":return a.stop()}},a,t)}))()},closeDetailBox:function(){this.detailVisible=!1},queryPayOrderList:function(){if(""===this.searchParam.adOrgId&&""===this.searchParam.deviceNo&&""===this.searchParam.userId&&""===this.searchParam.tradeId)return this.$message({message:"请输入商户账号、设备编号、用户ID或交易单号进行查询",type:"error"}),!1;this.getList()},getList:function(){var e=this;return i()(s.a.mark(function a(){var t,r,n,i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return(t=e.searchParam).pageIndex=e.commProps.pagination.pageIndex,t.pageSize=e.commProps.pagination.pageSize,t.date&&(t.date=e.searchParam.date+" 00:00:00"),a.next=6,Object(l.c)(t,"pay");case 6:0===(r=a.sent).result&&(n=0,e.commProps.cell.list=[],e.commProps.handler.list=[],i=r.data,e.commProps.pagination.totalCount=i.total,(i.items||[]).forEach(function(a){a.device=a.equipmentTypeName+a.value,a.merchant=a.merchantName+a.merchantAccount,a.username?a.user=a.lyyUserId+"-"+a.username:a.user=""+a.lyyUserId,a.couponFe&&(a.activity="现金券金额"+a.couponFe+"元,"),a.discountFee&&(a.activity+="随机立减金额"+a.discountFee+"元");var t=!1;"SUCCESS"===a.status?a.refundFee?(a.statusName="退款成功("+a.description+")","手动退款"===a.description&&(t=!0)):(t=!0,a.statusName="交易成功"):a.refundFee&&(a.statusName="退款失败");var r=!1;"CDZ"===a.equipmentType&&t&&"2"===a.payType&&(r=!0),e.commProps.handler.list.push({isShow:r,name:"查看订单详情",type:"text",size:"small",fn:"show-detail"}),a.curIndex=n,e.commProps.cell.list.push(a),n++}));case 9:case"end":return a.stop()}},a,e)}))()},download:function(){var e="";if(""===this.searchParam.adOrgId&&""===this.searchParam.deviceNo&&""===this.searchParam.userId&&""===this.searchParam.tradeId)return this.$message({message:"请输入商户账号、设备编号、用户ID或交易单号进行导出",type:"error"}),!1;e+="&adOrgId="+this.searchParam.adOrgId+"&deviceNo="+this.searchParam.deviceNo+"&userId="+this.searchParam.userId+"&tradeId="+this.searchParam.tradeId,this.searchParam.date&&(e+="&date="+this.searchParam.date+" 00:00:00"),location.href=encodeURI("/agent/export/paymentOrders?1=1"+e)}}},u=(t("SfeO"),t("KHd+")),m=Object(u.a)(d,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-container",[t("el-header",{staticStyle:{"margin-top":"10px"}},[e._v("\n    商户账号\n    "),t("el-select",{attrs:{filterable:"",placeholder:"请选择",clearable:""},model:{value:e.searchParam.adOrgId,callback:function(a){e.$set(e.searchParam,"adOrgId",a)},expression:"searchParam.adOrgId"}},e._l(e.merchantList,function(e){return t("el-option",{key:e.adOrgId,staticStyle:{width:"150px"},attrs:{label:e.label,value:e.adOrgId}})})),e._v("设备编号\n    "),t("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入设备编号"},model:{value:e.searchParam.deviceNo,callback:function(a){e.$set(e.searchParam,"deviceNo",a)},expression:"searchParam.deviceNo"}}),e._v("用户ID\n    "),t("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入用户ID"},model:{value:e.searchParam.userId,callback:function(a){e.$set(e.searchParam,"userId",a)},expression:"searchParam.userId"}}),e._v("交易单号\n    "),t("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入交易单号"},model:{value:e.searchParam.tradeId,callback:function(a){e.$set(e.searchParam,"tradeId",a)},expression:"searchParam.tradeId"}}),e._v("时间\n    "),t("el-date-picker",{staticStyle:{width:"150px"},attrs:{"picker-options":e.option,type:"date",placeholder:"请选择","value-format":"yyyy-MM-dd"},model:{value:e.searchParam.date,callback:function(a){e.$set(e.searchParam,"date",a)},expression:"searchParam.date"}}),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.queryPayOrderList}},[e._v("查询")]),e._v(" "),t("el-button",{attrs:{type:"success"},on:{click:e.download}},[e._v("导出")])],1),e._v(" "),t("order-list",{attrs:{cell:e.commProps.cell,pagination:e.commProps.pagination,handler:e.commProps.handler},on:{"current-change":e.currentChangeHd,"size-change":e.sizeChangeHd,"show-detail":e.showDetail}}),e._v(" "),t("el-dialog",{attrs:{visible:e.detailVisible,title:"订单详情"},on:{"update:visible":function(a){e.detailVisible=a}}},[t("order-detail",{attrs:{cell:e.commDetail}}),e._v(" "),t("div",{staticClass:"btn-wrap"},[t("el-button",{attrs:{type:"primary"},on:{click:e.closeDetailBox}},[e._v("好的")])],1)],1)],1)},[],!1,null,"46138f1d",null);m.options.__file="payOrderList.vue";a.default=m.exports}}]);