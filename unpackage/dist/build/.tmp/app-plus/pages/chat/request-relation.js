(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/request-relation"],{"620c":function(e,t,n){"use strict";n.r(t);var i=n("af48"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},af48:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("5ce8"),a={data:function(){return{}},computed:{requestRelationList:function(){return this.$store.state.chat.requestRelationList},requestRelationUserInfo:function(){return this.$store.state.chat.requestRelationUserInfo},user_info:function(){return this.$store.state.chat.user_info},hasList:function(){return!this.requestRelationList.length}},onShow:function(){if(this.$store.state.chat.isOnline){if(0===this.requestRelationList.length){var t=getCurrentPages();t.length>1&&this.user_info.id?e.navigateBack():e.reLaunch({url:"/pages/index/index"})}this.getRequestRelationUserInfo()}else e.reLaunch({url:"/pages/index/index"})},methods:{handleRelation:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"agree";t=1*t.replace(/_chat_new_/,"");var s=this,o={module:i.SocketModul,action:"manageRelation",data:{send_id:this.user_info.id,receive_id:t,handle:a}};e.sendSocketMessage({data:JSON.stringify(o),success:function(){s.$store.commit("removeRequestRelationList",n)},fail:function(){s.$store.commit("changeSocket",!1)}})},getRequestRelationUserInfo:function(){var t=this.requestRelationList.map(function(e){return e.send_id}),n=this,a={module:i.SocketModul,action:"getUserList",data:{type:"receiveRequestRelationUserInfo",list:t}};e.sendSocketMessage({data:JSON.stringify(a),success:function(e){},fail:function(){n.$store.commit("changeSocket",!1)}})}}};t.default=a}).call(this,n("6e42")["default"])},c705:function(e,t,n){"use strict";n.r(t);var i=n("fc25"),a=n("620c");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);var o,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=u.exports},d62d:function(e,t,n){"use strict";(function(e){n("68e3"),n("921b");i(n("66fd"));var t=i(n("c705"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fc25:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i})}},[["d62d","common/runtime","common/vendor"]]]);