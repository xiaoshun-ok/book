(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{3380:function(e,n,t){"use strict";t.r(n);var i=t("48ce"),u=t("8161");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);var r,c=t("f0c5"),a=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=a.exports},"48ce":function(e,n,t){"use strict";var i={"fa-icon":()=>t.e("components/fa-icon/fa-icon").then(t.bind(null,"e0bc")),"uni-popup":()=>t.e("components/uni-popup/uni-popup").then(t.bind(null,"f4a9"))},u=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return u}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return i})},8161:function(e,n,t){"use strict";t.r(n);var i=t("dec7"),u=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);n["default"]=u.a},b140:function(e,n,t){"use strict";(function(e){t("dbd4"),t("921b");i(t("66fd"));var n=i(t("3380"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},dec7:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("b7c4"),u=o(t("133e"));function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"f4a9"))},c={components:{uniPopup:r},mixins:[u.default],data:function(){return{showPopup:!1,popupMessage:"",retryCount:0}},onShow:function(){},methods:{goHome:function(){e.redirectTo({url:"/pages/index/index"})},wxLogin:function(e){var n=this;if(!e.detail.userInfo||!e.detail.encryptedData)return this.showPopup=!0,this.popupMessage="末授权登录",void setTimeout(function(){return n.showPopup=!1},2e3);this.retryCount=0,this.jwtWeixin(e.detail)},jwtWeixin:function(n){var t=this;e.login({provider:"weixin"}).then(function(e){return new Promise(function(n,t){!e[0]&&e[1].code&&n(e[1].code)})}).then(function(t){return new Promise(function(i,u){n?i({code:t,detail:n}):e.getUserInfo({provider:"weixin",success:function(e){return i({code:t,detail:e})}})})}).then(function(n){return new Promise(function(u,o){e.request({url:i.MpWeiXinAuth,method:"POST",data:{code:n.code,iv:n.detail.iv,encrypted_data:n.detail.encryptedData},success:function(e){e.data.id?t.saveUserInfo(e.data):o()}})})}).catch(function(){t.retryCount++,t.retryCount<3?setTimeout(function(){return t.jwtWeixin()},1e3):(t.popupMessage="网络连接错误，请重试",setTimeout(function(){return t.showPopup=!1},1e3),t.showPopup=!0)})},formSubmit:function(e){var n=e.detail.value;this._adminUserLogin(n)},test:function(){e.setStorage({key:"chat_user_info",data:{nickname:"dfsd",figureurl:"https://qq.wyx2013.cn/static/index/img/headdefault.png",code:0,id:"18",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Njg1MTM3MjQsIm5iZiI6MTU2ODUxMzcyNCwiZXhwIjoxNTY5MTE4NTI0LCJkYXRhIjp7ImFkbWluX3VzZXJfaWQiOiIxMSJ9fQ.vOhjEoR7OvKm34ywGszOgxUNa08lye75AVUhOh63jdM",exp:1569118524},success:function(){e.redirectTo({url:"/pages/index/index"})}})}}};n.default=c}).call(this,t("6e42")["default"])}},[["b140","common/runtime","common/vendor"]]]);