(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8fa8"],{CDJb:function(e,t,n){"use strict";var s=n("o80j");n.n(s).a},ctKq:function(e,t,n){"use strict";n.r(t);var s=n("omMh"),a={props:{visiable:{type:Boolean,default:!1},projects:{type:Array,default:function(){(void 0).projects}}},data:function(){return{newAgentName:null}},methods:{toggleModal:function(e){var t=this,n=this.newAgentName;this.newAgentName&&(n=this.newAgentName.replace(/\s*/g,""));var a={status:!1,newAgentName:n,response:""};if("open"===e){var o=!1;if(!n||""===n)return void this.$message({message:"请输入要添加的项目名称",type:"warning"});if(n&&n.length>15)return void this.$message({message:"项目名称不能超过15个字",type:"warning"});if(this.projects.forEach(function(e){e.name===n&&(t.$message({message:"该项目已存在",type:"warning"}),o=!0)}),o)return;var i={agentBusinessId:"",name:n};s.a.saveAgentBusiness(i).then(function(e){e&&0===e.result?(a.response=e,t.newAgentName=null):t.$message.error("增加经营项目失败"),t.$emit("toggle-dialog",a)})}else this.newAgentName=null,this.$emit("toggle-dialog",a)}}},o=(n("CDJb"),n("ZrdR")),i=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.visiable,"show-close":!1,"close-on-click-modal":!1,width:"500px",title:"添加经营项目"},on:{"update:visible":function(t){e.visiable=t}}},[n("el-input",{staticClass:"project-input",attrs:{placeholder:"请输入经营项目名称 (不超过15个字）"},model:{value:e.newAgentName,callback:function(t){e.newAgentName=t},expression:"newAgentName"}}),e._v(" "),n("p",{staticClass:"project-node"},[e._v("温馨提醒：添加后将作为公共选项，且不可删除，请认真填写。")]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.toggleModal("open")}}},[e._v("确定")]),e._v(" "),n("el-button",{on:{click:function(t){e.toggleModal("close")}}},[e._v("取消")])],1)],1)},[],!1,null,"cde05f66",null);i.options.__file="DialogAgent.vue";t.default=i.exports},o80j:function(e,t,n){}}]);