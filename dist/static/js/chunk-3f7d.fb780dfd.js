(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3f7d","jujd"],{Awg0:function(e,t,s){"use strict";var i=s("lgVH");s.n(i).a},jujd:function(e,t,s){"use strict";s.r(t);var i={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("ChangeRoles",e).then(function(){t.$emit("change")})}}}},n=s("KHd+"),a=Object(n.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(e._s(e.$t("permission.roles"))+"： "+e._s(e.roles))]),e._v("\n  "+e._s(e.$t("permission.switchRoles"))+"：\n  "),s("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[s("el-radio-button",{attrs:{label:"editor"}}),e._v(" "),s("el-radio-button",{attrs:{label:"admin"}})],1)],1)},[],!1,null,null,null);a.options.__file="SwitchRoles.vue";t.default=a.exports},lgVH:function(e,t,s){},qZ8X:function(e,t,s){"use strict";s.r(t);var i=s("Q2AE"),n={inserted:function(e,t,s){var n=t.value,a=i.a.getters&&i.a.getters.roles;if(!(n&&n instanceof Array&&n.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=n;a.some(function(e){return r.includes(e)})||e.parentNode&&e.parentNode.removeChild(e)}},a=function(e){e.directive("permission",n)};window.Vue&&(window.permission=n,Vue.use(a)),n.install=a;var r=n;var o={name:"DirectivePermission",components:{SwitchRoles:s("jujd").default},directives:{permission:r},data:function(){return{key:1}},methods:{checkPermission:function(e){if(e&&e instanceof Array&&e.length>0){var t=e;return!!(i.a.getters&&i.a.getters.roles).some(function(e){return t.includes(e)})}return!1},handleRolesChange:function(){this.key++}}},l=(s("Awg0"),s("KHd+")),c=Object(l.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("switch-roles",{on:{change:e.handleRolesChange}}),e._v(" "),s("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[s("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n      Only\n      "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see this\n    ")],1),e._v(" "),s("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n      Only\n      "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1),e._v(" "),s("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-alert"},[e._v("\n      Both\n      "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and\n      "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1)]),e._v(" "),s("div",{key:"checkPermission"+e.key,staticStyle:{"margin-top":"30px"}},[e._m(0),e._v(" "),s("el-tabs",{staticStyle:{width:"500px"},attrs:{type:"border-card"}},[e.checkPermission(["admin"])?s("el-tab-pane",{attrs:{label:"Admin"}},[e._v("Admin can see this")]):e._e(),e._v(" "),e.checkPermission(["editor"])?s("el-tab-pane",{attrs:{label:"Editor"}},[e._v("Editor can see this")]):e._e(),e._v(" "),e.checkPermission(["admin","editor"])?s("el-tab-pane",{attrs:{label:"Admin-OR-Editor"}},[e._v("Both admin or editor can see this")]):e._e()],1)],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("code",[this._v("In some cases it is not suitable to use v-permission, such as element Tab component  which can only be achieved by manually setting the v-if.\n      "),t("br"),this._v(" e.g.\n    ")])}],!1,null,"51bfed15",null);c.options.__file="directive.vue";t.default=c.exports}}]);