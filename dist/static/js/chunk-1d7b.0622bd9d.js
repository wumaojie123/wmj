(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d7b"],{ACzA:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n});var i=a("t3Un");function l(){return Object(i.a)({url:"/equipment/getEquipmentTypes",method:"get"})}function n(){return Object(i.a)({url:"/rest/equipment/equipmentType/querySHL",method:"get"})}},"Dz/4":function(e,t,a){"use strict";a.r(t);var i=a("ACzA"),l=a("jzU3"),n={name:"DevicesImport",data:function(){return{fileList:[],file:null,agentnick:"",infoChecked:!1,throttle:!1,form:{equipmentTypes:"",agent:""},equipmentTypesArr:[],agentUsers:[],message:"请导入含设备编号的txt文档（注意：可以将Excel的数据直接复制到txt文档中，每一行代表一个设备编号）。不支持导入以下设备：出厂未通电的设备，已被导入的设备，老号段的设备。",colums:[{key:"failIndex",label:"序号"},{key:"value",label:"设备编号"},{key:"failNote",label:"导入失败原因"}],failList:[],dialogVisible:!1,failtTest:""}},computed:{disabled:function(){return!this.form.equipmentTypes||!this.form.agent},uploadPar:function(){return{agentUserId:this.form.agent,equipmentType:this.form.equipmentTypes}}},created:function(){var e=this;Object(i.b)().then(function(t){0===t.result&&t.data&&t.data.length&&t.data.forEach(function(t){e.equipmentTypesArr.push({value:t.code,label:t.name})})})},methods:{submitUpload:function(){this.throttle||(this.throttle=!0,this.file?this.form.agent&&!this.infoChecked?this.$refs.upload.submit():this.$message.error("请选择代理商！"):this.$message.error("请选择上传文件！"))},removeFile:function(){this.file=null},onChange:function(e){this.file=e},handleSelect:function(e){this.form.agent=e.agentId},querySearch:function(e,t){var a=this,i=/^(.+)\((.+)\)$/.exec(e);i&&(e=i[1]&&i[1].trim()),Object(l.a)({agentQuery:e}).then(function(e){if(0===e.result&&e.data&&0!==e.data.length){var i=[];e.data.forEach(function(e){i.push({value:e.agentusername+" ("+e.phone+")",agentId:e.agentuserid})}),a.agentUsers=i,a.infoChecked=!1,t(i)}else a.infoChecked=!0,t([])}),this.form.agent=""},handleSuccess:function(e){0===e.result&&(this.failtTest=e.description,this.failList=e.data.fail,this.dialogVisible=!0,this.throttle=!1)},handleExceed:function(){this.$message.warning("当前限制选择 1 个文件，一次只能上传一个文件")},handleError:function(){this.throttle=!1,this.$message.error("导入失败！")}}},s=(a("SmMr"),a("KHd+")),r=Object(s.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("el-alert",{staticClass:"info",attrs:{title:e.message,closable:!1,type:"warning"}}),e._v(" "),a("el-form",{ref:"form",staticClass:"deviceForm",staticStyle:{padding:"16px 0",width:"400px"},attrs:{model:e.form,"label-width":"90px"}},[a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"设备类型",prop:"equipmentTypes"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.equipmentTypes,callback:function(t){e.$set(e.form,"equipmentTypes",t)},expression:"form.equipmentTypes"}},e._l(e.equipmentTypesArr,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"代理商",prop:"agent"}},[a("el-autocomplete",{staticClass:"width200",attrs:{"fetch-suggestions":e.querySearch,"popper-class":"my-autocomplete",placeholder:"请输入内容"},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[a("div",{staticClass:"name"},[e._v(e._s(i.value))])]}}]),model:{value:e.agentnick,callback:function(t){e.agentnick=t},expression:"agentnick"}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.infoChecked,expression:"infoChecked"}],staticStyle:{"font-size":"14px",color:"red"}},[e._v("未查询到相应的商家，请重新输入！")])],1)],1)],1),e._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-success":e.handleSuccess,"on-error":e.handleError,"file-list":e.fileList,"on-change":e.onChange,"on-remove":e.removeFile,"auto-upload":!1,data:e.uploadPar,disabled:e.disabled,"on-exceed":e.handleExceed,limit:1,accept:".txt",action:"/agent/rest/file/batch/import"}},[a("el-row",{attrs:{slot:"trigger"},slot:"trigger"},[a("el-col",[a("el-button",{attrs:{disabled:e.disabled||e.throttle,size:"small",type:"primary"}},[e._v("选择txt文件")])],1),e._v(" "),a("el-col",[a("ul",{staticClass:"el-upload-list el-upload-list--text"})])],1),e._v(" "),a("div",{staticStyle:{padding:"8px"}}),e._v(" "),a("el-button",{attrs:{disabled:e.disabled||e.throttle,size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("确定上传")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,title:"导入结果",width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v(e._s(e.failtTest))]),e._v(" "),e.failList.length>0?a("p",{staticClass:"fail-reason"},[e._v("失败原因")]):e._e(),e._v(" "),e.failList.length>0?a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.failList,height:400,border:"","highlight-current-row":""}},e._l(e.colums,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.key,label:e.label,width:e.width,sortable:e.sortable,align:"center"}})})):e._e()],1)],1)},[],!1,null,null,null);r.options.__file="deviceImport.vue";t.default=r.exports},SmMr:function(e,t,a){"use strict";var i=a("vaBS");a.n(i).a},jzU3:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var i=a("t3Un");function l(e){return Object(i.a)({url:"/rest/equipment/childAgents/query",method:"get",params:e})}},vaBS:function(e,t,a){}}]);