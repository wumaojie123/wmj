(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2b43"],{"3aUj":function(t,a,e){"use strict";e.r(a);var i=e("88Rz"),o=e.n(i),n={props:{data:{type:Array,default:function(){return[]}},timeType:{type:Number,default:1}},data:function(){return{localData:this.data,dateList:[],incomeList:[],orderList:[]}},watch:{data:function(t){this.localData=t;var a=[],e=[],i=[];this.localData.forEach(function(t){a.push(t.groupTypeName),e.push(t.equipmentCount),i.push(t.onlineIncomde)}),this.initData(a,e,i)}},methods:{initData:function(t,a,e){var i=o.a.init(document.querySelector(".echart5")),n={legend:{data:["投放设备数","营业额"],textStyle:{color:"#7ED1FD"},top:"1%"},barGap:"1%",grid:{left:"10%",right:"10%",bottom:"3%",containLabel:!0},xAxis:{type:"value",show:!1},yAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},nameTextStyle:{color:"#7ED1FD"},axisTick:{show:!1},axisLabel:{color:"#7ED1FD"},data:t},series:[{name:"投放设备数",type:"bar",itemStyle:{borderWidth:10,color:"#189ACA"},barMaxWidth:10,label:{normal:{show:!0,position:"right",formatter:"{c}"}},data:a},{name:"营业额",type:"bar",label:{normal:{show:!0,position:"right"}},itemStyle:{borderWidth:10,color:"#4060B9"},barMaxWidth:10,data:e}]};i.setOption(n)}}},r=(e("mezr"),e("ZrdR")),s=Object(r.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"tend-wrapper"},[a("div",{staticClass:"title"},[a("div",{staticClass:"left"},[a("span",{staticStyle:{color:"rgba(68,207,217,1)"}},[this._v("昨日投放地址类型与收益分析")])])]),this._v(" "),a("section",{staticClass:"echart5"})])}],!1,null,"477c21f7",null);s.options.__file="placeAndIncome.vue";a.default=s.exports},Rirw:function(t,a,e){},mezr:function(t,a,e){"use strict";var i=e("Rirw");e.n(i).a}}]);