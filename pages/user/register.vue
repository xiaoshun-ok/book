<template>
	<view class="regBg">
		<view class="regBox" >
			<form    @submit="formSubmit">
			<view class="input-flex">
				<view class="input-flex-label">用户名</view>
				<input class="input-flex-text" name="username"  type="text"   placeholder="请填用户名" @blur="checkUserName">
			</view>	
			
			<view class="input-flex">
				<view class="input-flex-label">昵称</view>
				 <input class="input-flex-text" name="nickname" type="text" placeholder="请填写昵称" @blur="checkNickName">
			</view>
			
			<view class="input-flex">
				<view class="input-flex-label">邮箱</view>
				 <input class="input-flex-text" name="email" type="text" placeholder="找回密码工具" @blur="checkEmail">
			</view>
			
			<view class="input-flex">
				<view class="input-flex-label">密码</view>
				<input class="input-flex-text" name="password" type="text" password=true  placeholder="请填写密码" @blur="checkPassWord" @confirm='checkPassWord'>
			</view>
			
			<button  :disabled='check' type="primary" form-type="submit" class="btn-row-submit btn-success">立即注册</button>
		   
			</form>
		</view>
		<uni-popup ref="popup" :show="showPopup"  type='bottom'>{{popupMessage}}</uni-popup>
	</view>
</template>

<script>	
	import uniPopup from "@/components/uni-popup/uni-popup.vue" 	
	import {CheckUserName,AdminUserRegister,AdminUserLogin} from '@/common/config.js'
	import user from '@/common/mixins/user.js'
	export default{
		components:{uniPopup},
		mixins:[user],
		data(){
			return {
				check_username:true,//检测用户名
				check_nickname:true,//检测昵称
				check_password:true,//检测密码
				check_email:true,//检测邮箱
				showPopup:false,//是否弹出
				popupMessage:'',//消息提示
			};
		},
		computed:{
			check(){
				return this.check_username||this.check_password||this.check_email||this.check_nickname
			}
		},
		onLoad(option){
			
		},
		methods:{
			checkUserName(e){
				let username=e.detail.value.replace(/(^\s*)|(\s*$)/g, ""),self =this
				self.check_username=true
				if(!(/^[a-zA-Z0-9_-]{4,20}$/).test( username )){
					self.info('请输入4-20位由字母、数字组成的用户名')
					return;
				}
				uni.request({
					url:CheckUserName,
					data:{username},
					success:function(response){
						if(response.data.username){
							//self.info('用户名可以使用，请尽快注册')
							self.check_username=false
						}else{
							self.info('用户名已被占用')
						}
					},
					fail:function(e){
						self.info('网络错误')
					}
				})
			},
			
			checkNickName(e){
				let nickname=e.detail.value.replace(/(^\s*)|(\s*$)/g, "")
				this.check_nickname=true
				if((/^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,20}$/).test( nickname )){
					this.check_nickname=false
				}else{
					this.info('昵称不能太长')
				}
			},
			
			checkPassWord(e){
				let password=e.detail.value.replace(/(^\s*)|(\s*$)/g, "")
				this.check_password=true
				if((/^[A-Za-z0-9_\-\!\@\#\$\%\^\&\*\(\)\:\"\|\'\<\>\?\;\'\,\.\\\/]{5,16}$/).test( password )){
					this.check_password=false
				}else{
					this.info('密码由5-16位组成')
				}
			},
			
			checkEmail(e){
				let email=e.detail.value.replace(/(^\s*)|(\s*$)/g, "")
				this.check_email=true
				if((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test(email)){
					this.check_email=false
				}else{
					this.info('邮箱格式不正确')
				}
			},
			
			formSubmit(e){
				let self=this,{username,password,email,nickname}=e.detail.value;
				username=username.replace(/(^\s*)|(\s*$)/g, "")
				password=password.replace(/(^\s*)|(\s*$)/g, "")
				email=email.replace(/(^\s*)|(\s*$)/g, "")
				nickname=nickname.replace(/(^\s*)|(\s*$)/g, "")
				uni.request({
					url:AdminUserRegister,
					method:"POST",
					header:{
						"content-type":"application/x-www-form-urlencoded",
						"X-Requested-With":"XMLHttpRequest"
					},
					data:{username,password,email,nickname},
					success:function(response){
						let data=response.data;
						if(response.data.code==0 && response.data.user_info.id ){
							self._adminUserLogin({username,password})
						}
						
					}
				})
				
			},
			
			info(text){
				this.popupMessage=text
				this.showPopup=true
				setTimeout(()=>this.showPopup=false,1000)
			}
		},
	}
</script>

<style>
	.yzmDisable{
		background-color: #eee;
		color: #999;
	}
	.regBox{
		position: absolute;
		top: 50%;
		left: 30upx;
		right: 30upx;
		margin-top: -390upx;
		padding:30upx 20upx;
		background-color: #fff; 
		border-radius: 20upx;
	}
	.regBg{
		background: linear-gradient( #29cee8,#619ad6);
		position: absolute;
		top: 0upx;
		bottom: 0upx;
		left: 0upx;
		right: 0upx;
	}
</style>
