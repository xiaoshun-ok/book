(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-register"],{"234e":function(t,e,n){"use strict";var a={"uni-popup":n("ed41").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"regBg"},[n("v-uni-view",{staticClass:"regBox"},[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-flex"},[n("v-uni-view",{staticClass:"input-flex-label"},[t._v("用户名")]),n("v-uni-input",{staticClass:"input-flex-text",attrs:{name:"username",type:"text",placeholder:"请填用户名"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkUserName.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"input-flex"},[n("v-uni-view",{staticClass:"input-flex-label"},[t._v("昵称")]),n("v-uni-input",{staticClass:"input-flex-text",attrs:{name:"nickname",type:"text",placeholder:"请填写昵称"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkNickName.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"input-flex"},[n("v-uni-view",{staticClass:"input-flex-label"},[t._v("邮箱")]),n("v-uni-input",{staticClass:"input-flex-text",attrs:{name:"email",type:"text",placeholder:"找回密码工具"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkEmail.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"input-flex"},[n("v-uni-view",{staticClass:"input-flex-label"},[t._v("密码")]),n("v-uni-input",{staticClass:"input-flex-text",attrs:{name:"password",type:"text",password:"true",placeholder:"请填写密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkPassWord.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.checkPassWord.apply(void 0,arguments)}}})],1),n("v-uni-button",{staticClass:"btn-row-submit btn-success",attrs:{disabled:t.check,type:"primary","form-type":"submit"}},[t._v("立即注册")])],1)],1),n("uni-popup",{ref:"popup",attrs:{show:t.showPopup,type:"bottom"}},[t._v(t._s(t.popupMessage))])],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},"26ed":function(t,e,n){var a=n("df0b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2bf45ca4",a,!0,{sourceMap:!1,shadowMode:!1})},"33c7":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("cebc")),o=a(n("795b")),u=a(n("768b")),s=n("5ce8"),r={data:function(){return{}},computed:{no_status:function(){return this.is_mp?1:0}},methods:{_adminUserLogin:function(t){var e=this;uni.request({url:s.AdminUserLogin+"?no_status="+e.no_status,method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"},data:t}).then(function(t){var n=(0,u.default)(t,2),a=n[0],i=n[1];a||!i.data||i.data.code||e.saveUserInfo(i.data)})},saveUserInfo:function(t){var e=t.id,n=t.nickname,a=t.figureurl,i=t.token;this.$store.commit("setChatUserInfo",{id:e,nickname:n,figureurl:a}),this.$store.commit("setToken",i),uni.setStorage({key:"chat_user_info",data:t,complete:function(){uni.reLaunch({url:"/pages/user/index"})}})},authUserRequest:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new o.default(function(a,o){var u=e.$store.state.chat.token,s=e.$store.state.chat.user_info.id;u&&s&&uni.request({url:t,method:"POST",data:(0,i.default)({token:u,chat_user_id:s},n),header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){t.data&&a(t.data)},fail:function(t){o(t)}})})}}};e.default=r},3433:function(t,e,n){"use strict";var a=n("fcfc"),i=n.n(a);i.a},"40aa":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup"},[n("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}}),n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(!0)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},4390:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup[data-v-2285b1e8]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;overflow:hidden}.uni-popup__mask[data-v-2285b1e8]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-2285b1e8]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-top[data-v-2285b1e8], .uni-popup__mask.uni-bottom[data-v-2285b1e8], .uni-popup__mask.uni-center[data-v-2285b1e8]{opacity:1}.uni-popup__wrapper[data-v-2285b1e8]{position:absolute;z-index:999;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-2285b1e8]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-2285b1e8]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-2285b1e8]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-2285b1e8]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-2285b1e8]{position:relative;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-2285b1e8]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-2285b1e8]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-2285b1e8], .uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-2285b1e8]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-top[data-v-2285b1e8], .uni-popup__wrapper.uni-bottom[data-v-2285b1e8]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-2285b1e8]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""])},"72b7":function(t,e,n){"use strict";n.r(e);var a=n("8d39"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"768b":function(t,e,n){"use strict";n.r(e);var a=n("a745"),i=n.n(a);function o(t){if(i()(t))return t}var u=n("5d73"),s=n.n(u);function r(t,e){var n=[],a=!0,i=!1,o=void 0;try{for(var u,r=s()(t);!(a=(u=r.next()).done);a=!0)if(n.push(u.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return n}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(t,e){return o(t)||r(t,e)||c()}n.d(e,"default",function(){return p})},"83aa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1}},watch:{show:function(t){t?this.open():this.close()}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.ani="uni-"+t.type},30)})},close:function(t){var e=this;!this.maskClick&&t||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick(function(){setTimeout(function(){e.showPopup=!1},300)}))}}};e.default=a},"8d39":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481");var i=a(n("ed41")),o=n("5ce8"),u=a(n("33c7")),s={components:{uniPopup:i.default},mixins:[u.default],data:function(){return{check_username:!0,check_nickname:!0,check_password:!0,check_email:!0,showPopup:!1,popupMessage:""}},computed:{check:function(){return this.check_username||this.check_password||this.check_email||this.check_nickname}},onLoad:function(t){},methods:{checkUserName:function(t){var e=t.detail.value.replace(/(^\s*)|(\s*$)/g,""),n=this;n.check_username=!0,/^[a-zA-Z0-9_-]{4,20}$/.test(e)?uni.request({url:o.CheckUserName,data:{username:e},success:function(t){t.data.username?n.check_username=!1:n.info("用户名已被占用")},fail:function(t){n.info("网络错误")}}):n.info("请输入4-20位由字母、数字组成的用户名")},checkNickName:function(t){var e=t.detail.value.replace(/(^\s*)|(\s*$)/g,"");this.check_nickname=!0,/^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,20}$/.test(e)?this.check_nickname=!1:this.info("昵称不能太长")},checkPassWord:function(t){var e=t.detail.value.replace(/(^\s*)|(\s*$)/g,"");this.check_password=!0,/^[A-Za-z0-9_\-\!\@\#\$\%\^\&\*\(\)\:\"\|\'\<\>\?\;\'\,\.\\\/]{5,16}$/.test(e)?this.check_password=!1:this.info("密码由5-16位组成")},checkEmail:function(t){var e=t.detail.value.replace(/(^\s*)|(\s*$)/g,"");this.check_email=!0,/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(e)?this.check_email=!1:this.info("邮箱格式不正确")},formSubmit:function(t){var e=this,n=t.detail.value,a=n.username,i=n.password,u=n.email,s=n.nickname;a=a.replace(/(^\s*)|(\s*$)/g,""),i=i.replace(/(^\s*)|(\s*$)/g,""),u=u.replace(/(^\s*)|(\s*$)/g,""),s=s.replace(/(^\s*)|(\s*$)/g,""),uni.request({url:o.AdminUserRegister,method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"},data:{username:a,password:i,email:u,nickname:s},success:function(t){t.data;0==t.data.code&&t.data.user_info.id&&e._adminUserLogin({username:a,password:i})}})},info:function(t){var e=this;this.popupMessage=t,this.showPopup=!0,setTimeout(function(){return e.showPopup=!1},1e3)}}};e.default=s},aeff:function(t,e,n){"use strict";n.r(e);var a=n("234e"),i=n("72b7");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("e565");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"01c51484",null,!1,a["a"],u);e["default"]=r.exports},d340:function(t,e,n){"use strict";n.r(e);var a=n("83aa"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},df0b:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".yzmDisable[data-v-01c51484]{background-color:#eee;color:#999}.regBox[data-v-01c51484]{position:absolute;top:50%;left:%?30?%;right:%?30?%;margin-top:%?-390?%;padding:%?30?% %?20?%;background-color:#fff;border-radius:%?20?%}.regBg[data-v-01c51484]{background:-webkit-linear-gradient(#29cee8,#619ad6);background:linear-gradient(#29cee8,#619ad6);position:absolute;top:%?0?%;bottom:%?0?%;left:%?0?%;right:%?0?%}",""])},e565:function(t,e,n){"use strict";var a=n("26ed"),i=n.n(a);i.a},ed41:function(t,e,n){"use strict";n.r(e);var a=n("40aa"),i=n("d340");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("3433");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2285b1e8",null,!1,a["a"],u);e["default"]=r.exports},fcfc:function(t,e,n){var a=n("4390");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("cad14306",a,!0,{sourceMap:!1,shadowMode:!1})}}]);