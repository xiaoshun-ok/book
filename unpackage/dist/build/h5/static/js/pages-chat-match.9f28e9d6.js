(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-match"],{"050a":function(t,e,i){"use strict";var n={"fa-icon":i("e0bc").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"margin-bottom":"118upx"}},[t._l(t.userList,function(e){return i("v-uni-view",{key:e.id,staticClass:"flexlist-item"},[i("img",{staticClass:"flexlist-img",attrs:{src:e.figureurl}}),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"cl1 mgb-5 mgt-5"},[t._v(t._s(e.nickname)+" "+t._s(t.privateMassagerTips[e.id]?"有消息":""))]),i("v-uni-view",{staticClass:"cl2"},[t._v("用户没有备注签名")])],1),e.isSelf?i("v-uni-view",{staticClass:"flex-jc-center"}):i("v-uni-view",{staticClass:"flex-jc-center"},[i("v-uni-view",{staticClass:"btn-small mgr-10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goChat(e)}}},[t._v("对话")]),i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addFriends(e)}}},[i("fa-icon",{attrs:{type:"user-plus ",size:"24",color:"#28a745"}}),t._v("加好友")],1)],1)],1)}),i("v-uni-view",{staticClass:"pull-down-button"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getUserList.apply(void 0,arguments)}}},[t._v("刷新用户")])],1),i("bottom-nav",{attrs:{list:t.bottomNavList},on:{"on-click":function(e){arguments[0]=e=t.$handleEvent(e),t.changeNav.apply(void 0,arguments)}}})],2)},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})},"1ce8":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f499")),s=n(i("795b")),o=i("b7c4"),c={data:function(){return{isReady:!1}},computed:{isSocketOpen:function(){return this.$store.state.chat.isSocketOpen},ischatOnline:function(){return this.$store.state.chat.isOnline},user_info:function(){return this.$store.state.chat.user_info},token:function(){return this.$store.state.chat.token}},onLoad:function(){this.isSocketOpen&&!this.ischatOnline&&this.init(),this.isSocketOpen&&this.ischatOnline&&this.pageInit&&this.pageInit(),this.isReady=!0},watch:{isSocketOpen:function(t){t&&this.isSocketOpen&&!this.ischatOnline&&this.init()},ischatOnline:function(t){t&&this.pageInit&&this.isReady&&this.pageInit()}},methods:{init:function(){var t=this;this.initUserInfo().then(function(){t.ischatOnline||t.loginChat()})},initUserInfo:function(){var t=this;return new s.default(function(e,i){t.user_info.id?e():uni.getStorage({key:"chat_user_info",success:function(i){if(i.data.id&&i.data.token){var n=i.data,a=n.id,s=n.nickname,o=n.figureurl,c=n.token;t.$store.commit("setChatUserInfo",{id:a,nickname:s,figureurl:o}),t.$store.commit("setToken",c),e()}},fail:function(){uni.reLaunch({url:"/pages/login/index"})}})})},loginChat:function(){var t=this;uni.getStorage({key:"chat_user_info",success:function(e){var i=e.data,n=i.token,s=i.exp,c=new Date;c.getTime();var r={module:o.SocketModul,action:"onOpen",data:{user_info:t.user_info,token:n,exp:s}};uni.sendSocketMessage({data:(0,a.default)(r),fail:function(){return t.$store.commit("changeSocket",!1),!1}})},fail:function(){uni.reLaunch({url:"/pages/login/index"})}})},sendSocketMessage:function(t){var e=o.SocketModul,i=this;return new s.default(function(n,s){if(!t||!i.isSocketOpen)return!1;if("string"!==typeof t){var o=t,c=o.action,r=o.data,u={module:e,action:c,data:r};t=(0,a.default)(u)}uni.sendSocketMessage({data:t,success:function(t){n()},fail:function(){return i.$store.commit("changeSocket",!1),!1}})})}}};e.default=c},"43c9":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cebc")),s=n(i("795b")),o=i("b7c4"),c={data:function(){return{showPopup:!1,popupMessage:""}},methods:{goChat:function(t){this.$store.commit("changPrivateiUser",t),uni.navigateTo({url:"/pages/chat/chat?id="+t.id})},uploadFile:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"img",n=this.token,c=this.user_info.id;return new s.default(function(s,r){uni.uploadFile({url:o.UploadFile+"?type="+i,filePath:t,name:"file",formData:(0,a.default)({token:n,chat_user_id:c},e),success:function(t){var i=t.data,n=e?(0,a.default)({},e):{};"string"===typeof i&&(i=JSON.parse(i)),i.url?(n.url=i.url,s(n)):r({message:"上传失败",data:t})},fail:function(t){r({message:t.errMsg})}})})},sendImage:function(t){var e=this;this.hideDrawer(),this.getImage(t).then(function(t){e.uploadFile(t.path,t).then(function(t){var i=t.url,n=t.width,a=t.height;if(i){var s={action:"sendToUid",data:{send_id:e.user_info.id,receive_id:e.receive_id,message_type:"img",url:i,width:n,height:a,time:(new Date).getTime()}};e.sendSocketMessage(s)}}).catch(function(t){e.popup(t)})}).catch(function(t){e.popup(t)})},getImage:function(t){return new s.default(function(e,i){uni.chooseImage({sourceType:[t],count:1,success:function(t){var n=t.tempFiles[0];n.size>102400&&i({message:"图片不能大于100K"}),uni.getImageInfo({src:n.path,success:function(t){var i=t.width,a=t.height,s=t.path;e({width:i,height:a,path:s,size:n.size})}})}})})},popup:function(t){var e=this;this.popupMessage=t.message||"末知错误",this.showPopup=!0,setTimeout(function(){return e.showPopup=!1},5e3)}}};e.default=c},"633d":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("db0c")),s=n(i("c8a5")),o=n(i("43c9")),c=n(i("1ce8")),r={components:{},mixins:[s.default,c.default,o.default],data:function(){return{}},onShow:function(){},onPullDownRefresh:function(){this.getUserList(),setTimeout(function(){uni.stopPullDownRefresh()},1e3)},computed:{userList:function(){var t=this,e=(0,a.default)(this.$store.state.chat.userListObject);return e.map(function(e){return e.isSelf=e.id===t.user_info.id,e}),(0,a.default)(this.$store.state.chat.userListObject)},privateMassagerTips:function(){return this.$store.state.chat.privateMassagerTips}},methods:{pageInit:function(){this.getUserList()},getUserList:function(){var t={action:"getUserList",data:{}};this.sendSocketMessage(t)},addFriends:function(t){var e={action:"requestRelation",data:{send_id:this.user_info.id,receive_id:t.id,time:(new Date).getTime()}};this.sendSocketMessage(e)}}};e.default=r},a939:function(t,e,i){"use strict";i.r(e);var n=i("633d"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},b905:function(t,e,i){var n=i("e1ff");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("54e4fe58",n,!0,{sourceMap:!1,shadowMode:!1})},becb:function(t,e,i){"use strict";var n=i("b905"),a=i.n(n);a.a},c78f:function(t,e,i){"use strict";i.r(e);var n=i("050a"),a=i("a939");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("becb");var o,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"a6486d4c",null,!1,n["a"],o);e["default"]=r.exports},c8a5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={computed:{bottomNavList:function(){return this.$store.state.app.bottomNavList}},methods:{changeNav:function(t){var e=t.item,i=e.pagePath||"/pages/index/index";uni.redirectTo({url:i})}}};e.default=n},e1ff:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page[data-v-a6486d4c]{\n\t    /*距离顶部范围应该在118-122范围内*/padding-bottom:%?118?%}.pull-down-button[data-v-a6486d4c]{padding:%?20?% %?120?%}.flexlist-item[data-v-a6486d4c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:5px;padding-bottom:5px;border-bottom:1px solid #eee;padding-left:5px;padding-right:5px;padding-top:5px;background-color:#fff}.flexlist-img[data-v-a6486d4c]{width:50px;height:50px;margin-right:11px}.flex-1[data-v-a6486d4c]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.mgb-5[data-v-a6486d4c]{margin-bottom:5px}.mgt-5[data-v-a6486d4c]{margin-top:5px}.flex-jc-center[data-v-a6486d4c]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btn-mini[data-v-a6486d4c]{padding:4px 4px;font-size:13px;background-color:#007aff;color:#fff;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;-webkit-box-align:center ;-webkit-align-items:center ;align-items:center ;cursor:pointer;line-height:1.5;\n\t\t/* max-height: 25px; */text-align:center;border-radius:5px}",""])}}]);