<template>
	<view class="loginBg">
		<view class="h30"></view>
		<view class="flex-center ">
			<view @click="goHome()" class="flex-center">
				<image src="/static/logo.png" class="wh-60" style='margin: 0 auto;'></image>
			</view>
		</view>
		<view autocomplete="off" class="loginBox"  id="login-form" >
			<form @submit="formSubmit" >
				<view class="flexIcon flex">
					<view class=" flexIcon-icon"><fa-icon type='user' size='18' color="#FFFFFF"></fa-icon></view>
					<input type="text"  placeholder-class="cl-white" class="flexIcon-text"  name="username" placeholder="请输帐号" />
				</view>
				<view class="flexIcon flex"> 
					<view class="flexIcon-icon"><fa-icon type='briefcase' size='18' color="#FFFFFF"></fa-icon></view>
					<input type="password" placeholder-class="cl-white" class="flexIcon-text"  name="password" placeholder="请输入登录密码" />
				</view>
				<button type="primary" formType="submit"  class="btn-row-submit" >登陆</button>
			</form>
			
			<view class="flex mgb-20">
					<navigator class="cl-white pointer flex-1" url="/pages/user/register" >注册</navigator>
					<navigator class="cl-white pointer" url="/pages/login/findpwd" >忘记密码</navigator>
			</view>
			
			<!-- #ifdef MP-WEIXIN -->
			<view class="otherBox mgb-20">
				<view class="otherBox-line"></view>
				<view class="otherBox-text">其它方式登录</view>
			</view>
			<view class="flex flex-center mgb-20">
				<button type="primary" open-type="getUserInfo" @getuserinfo="wxLogin" class="icon-weixin">
					<fa-icon type="weixin" size="24" color="#FFFFFF"></fa-icon> 
					微信授权登录
				</button>
			</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<view class="flex flex-center mgb-20">
				<button @tap="test" class="icon-weixin">
					<fa-icon type="weixin" size="24" color="#FFFFFF"></fa-icon> 
					H5使用测试号登录
				</button>
			</view>
			<!-- #endif -->
    </view>
		
		<uni-popup ref="popup" :show="showPopup" type="center">{{popupMessage}}</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue" 
	import {MpWeiXinAuth, AdminUserLogin} from '@/common/config.js'
	import user from '@/common/mixins/user.js'
	export default {
		components: {uniPopup},
		mixins:[user],
		data:function(){
			return {
				showPopup:false,//是否弹出
				popupMessage:'',//消息提示
				retryCount:0,//重试次数
			}
		},
		onShow(){
			let self=this
			// #ifdef MP
			// uni.checkSession().then(()=>{
			// 	self.jwtWeixin()
			// })
			// #endif
		},
		methods:{
			goHome(){
				uni.redirectTo({url:'/pages/index/index'})
			},
			
			wxLogin(e) {
				if(!e.detail.userInfo || !e.detail.encryptedData){
					this.showPopup=true
					this.popupMessage='末授权登录'
					setTimeout(()=>this.showPopup=false , 2000)
					return
				}
				this.retryCount=0
				this.jwtWeixin(e.detail)
			},
			
			jwtWeixin(detail){
				let self=this
				uni.login({
					provider: 'weixin'
				}).then(login_responser=>{
					return new Promise((resolve, reject)=>{
						if(!login_responser[0] && login_responser[1].code ){
							resolve(login_responser[1].code)
						}
					});					
				}).then(code=>{
					return new Promise((resolve, reject)=>{
						if(detail){
							resolve({code,detail})
						}else{
							uni.getUserInfo({
								provider: 'weixin',
								success: (infoRes)=>resolve({code,detail:infoRes})
							});
						}
					});
				}).then(data=>{
					return new Promise((resolve, reject)=>{
						uni.request({
							url: MpWeiXinAuth,
							method:'POST',
							data: {
									code: data.code,
									iv:data.detail.iv,
									encrypted_data:data.detail.encryptedData
							},
							success: function(res) {
								if(!res.data.id){
									reject()
								}else{
									self.saveUserInfo(res.data)
								}
							}
						});		
					})
				}).catch(()=>{
					self.retryCount++
					if(self.retryCount<3){
						setTimeout(()=>self.jwtWeixin(),1000)
					}else{
						self.popupMessage='网络连接错误，请重试'
						setTimeout(()=>self.showPopup=false , 1000)
						self.showPopup=true
					}
				});
			},
			
			formSubmit(e){
				let data=e.detail.value
				this._adminUserLogin(data)
			},
			
			test(){
				uni.setStorage({
					key:'chat_user_info',
					data:{"nickname":"dfsd","figureurl":"https://qq.wyx2013.cn/static/index/img/headdefault.png","code":0,"id":"18","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Njg1MTM3MjQsIm5iZiI6MTU2ODUxMzcyNCwiZXhwIjoxNTY5MTE4NTI0LCJkYXRhIjp7ImFkbWluX3VzZXJfaWQiOiIxMSJ9fQ.vOhjEoR7OvKm34ywGszOgxUNa08lye75AVUhOh63jdM","exp":1569118524},
					success:function(){
						uni.redirectTo({url:'/pages/index/index'})
					}
				})
			},
		}
	}
</script>
	
<style>




</style>
