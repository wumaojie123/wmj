(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-48c0"],{RKjj:function(e,t,a){"use strict";var i=a("b7en");a.n(i).a},b7en:function(e,t,a){},bnPD:function(e,t,a){"use strict";a.r(t);var i=a("jzU3"),l={name:"SingleBluetoothDeviceImport",data:function(){return{file:null,agentnick:"",infoChecked:!1,form:{agent:"",salt:"",communicationType:""},rules:{salt:[{required:!0,message:"请输入长度为16位的生产商标识",trigger:"blur"},{min:16,max:16,message:"长度为16个字符",trigger:"blur"},{validator:function(e,t,a){/[\u4e00-\u9fa5]/.test(t)?a(new Error("生产商标识不能有中文")):a()},trigger:"blur"}],communicationType:[{required:!0,message:"请选择设备通信方式",trigger:"blur"}]},isCanClickTag:!0,agentUsers:[],colums:[{key:"failIndex",label:"序号"},{key:"value",label:"设备编号"},{key:"failNote",label:"导入失败原因"}],merchantList:{MC:"脉冲",CK:"串口"},failList:[],dialogVisible:!1,failtTest:""}},computed:{url:function(){return"/agent/lyyEquipmentBluetooth/import?agentUserId="+this.form.agent+"&salt="+this.form.salt+"&communicationType="+this.form.communicationType}},methods:{onUploadSuccess:function(e){0===e.result?e.data.fail?(this.failtTest=e.description,this.failList=e.data.fail,this.dialogVisible=!0):this.$message({message:"上传成功",type:"success"}):this.$message.error(e.description)},submitUpload:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.file?e.$refs.upload.submit():e.$message.error("请选择上传文件！")})},onBeforeUpload:function(e){var t=e.name.split(".");return"xls"===t[1]||"xlsx"===t[1]?e:(this.$message.error("上传文件只能是 xls/xlsx 格式!"),!1)},onChange:function(e){this.file=e},removeFile:function(){this.file=null},handleSelect:function(e){this.form.agent=e.agentId},querySearch:function(e,t){var a=this,l=/^(.+)\((.+)\)$/.exec(e);l&&(e=l[1]&&l[1].trim()),Object(i.a)({agentQuery:e}).then(function(e){if(0===e.result&&e.data&&0!==e.data.length){var i=[];e.data.forEach(function(e){i.push({value:e.agentusername+" ("+e.phone+")",agentId:e.agentuserid})}),a.agentUsers=i,a.infoChecked=!1,t(i)}else a.infoChecked=!0,t([])}),this.form.agent=""}}},n=(a("RKjj"),a("KHd+")),s=Object(n.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",[e._v("导入单蓝牙设备")]),e._v(" "),a("el-form",{ref:"form",staticClass:"deviceForm",staticStyle:{padding:"16px 0",width:"400px"},attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"代理商",prop:"agent"}},[a("el-autocomplete",{staticStyle:{width:"250px"},attrs:{"fetch-suggestions":e.querySearch,"popper-class":"my-autocomplete",placeholder:"非必选"},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[a("div",{staticClass:"name"},[e._v(e._s(i.value))])]}}]),model:{value:e.agentnick,callback:function(t){e.agentnick=t},expression:"agentnick"}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.infoChecked,expression:"infoChecked"}],staticStyle:{"font-size":"14px",color:"red"}},[e._v("未查询到相应的商家，请重新输入！")])],1),e._v(" "),a("el-form-item",{attrs:{label:"生产商标识",prop:"salt"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",maxlength:"16",placeholder:"请输入长度为16位的生产商标识"},model:{value:e.form.salt,callback:function(t){e.$set(e.form,"salt",t)},expression:"form.salt"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备通信方式",prop:"communicationType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.communicationType,callback:function(t){e.$set(e.form,"communicationType",t)},expression:"form.communicationType"}},e._l(e.merchantList,function(t,i){return a("el-option",{key:i,attrs:{label:t,value:i}},[e._v(e._s(t))])}))],1)],1)],1),e._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-success":e.onUploadSuccess,"before-upload":e.onBeforeUpload,"on-change":e.onChange,"on-remove":e.removeFile,"auto-upload":!1,limit:1,action:e.url,accept:"application/vnd.ms-excel,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"success"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),a("div",{staticStyle:{padding:"8px"}}),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitUpload}},[e._v("确定上传")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,title:"导入结果",width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v(e._s(e.failtTest))]),e._v(" "),e.failList.length>0?a("p",{staticClass:"fail-reason"},[e._v("失败原因")]):e._e(),e._v(" "),e.failList.length>0?a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.failList,height:400,border:"","highlight-current-row":""}},e._l(e.colums,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})):e._e()],1)],1)},[],!1,null,null,null);s.options.__file="singleBluetoothDeviceImport.vue";t.default=s.exports},jzU3:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var i=a("t3Un");function l(e){return Object(i.a)({url:"/rest/equipment/childAgents/query",method:"get",params:e})}}}]);