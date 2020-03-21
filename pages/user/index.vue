<template>
	<view>
		<view v-if="user_info.id">
			<view class="flex pd-10 pdl-5 mgb-5 bg-white flex-ai-center">
				<image  class="wh-60 mgr-5 bd-radius-50" :src="user_info.figureurl" />
				<view class="flex-1">
					<view class="f16 cl1 mgb-5">{{user_info.nickname}}</view>
					<view class="flex flex-ai-center cl2">聊天ID: {{user_info.id}}</view>
				</view>
			</view>
			<view class="main-body">
				<view class="row-box mgb-5">
					<navigator url="/pages/index/index" class="row-item">
						<view class="flex-1">我的帖子</view>
					</navigator>
				 

					<navigator url="/pages/index/index" class="row-item">
						<view class="flex-1">我的评论</view>
					</navigator>
				 
				</view>
				<view class="row-box">
					<navigator url="/pages/user/info" class="row-item">
						<view class="flex-1">账号编辑</view>
					</navigator>
					<navigator url="/pages/index/index" class="row-item">
						<view class="flex-1">密码修改</view>
					</navigator>
				</view>
				
				<view class="row-box">
					<navigator url="/pages/chat/record" class="row-item">
						<view class="flex-1">聊天记录 </view>
					</navigator>
				
				</view>
				
				 <view class="btn-row-submit bg-danger" @click="loginOut()">注销</view>
			</view>
		</view>
		
		
		<view v-else class="loginBg pd-10">
			<view class="flex flex-center mgb-10 cl2">您还未登录,请先登录</view>
			<view class="flex flex-center">
				<navigator class="btn-small" url="/pages/login/index">前往登录</navigator>
			</view>
		</view>
	 
		<bottom-nav  :list='bottomNavList' @on-click='changeNav'></bottom-nav>
	</view>
</template>

<script>
	import bottomNav from '@/common/mixins/bottom-nav.js'
	import  {SocketModul} from '../../common/config.js'
	export default {
		components:{
		},
		mixins:[bottomNav],		 
		data() {
			return {
			}
		},
		computed:{
			user_info(){
				return this.$store.state.chat.user_info
			}
		},
		onReady(){
			uni.setNavigationBarTitle({
				title:"个人中心"
			})
		},
		onLoad() {
			this.initUserInfo()
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			initUserInfo(){
				try {
					const value = uni.getStorageSync('chat_user_info');
					if (value.id) {
						let {id,nickname,figureurl}=value
						this.$store.commit('setChatUserInfo',{id,nickname,figureurl})
						return;
					}
				} catch (e) { }
				uni.reLaunch({url:'/pages/login/index'});//跳转到用户页面
			},
			loginOut(){
				this.$store.commit('setChatUserInfo',{})
				uni.removeStorage({key:'chat_user_info'})
				let tpl={
					module:SocketModul,
					action:'loginOut',
					data:{user_info:this.user_info}
				} ,self=this
				uni.sendSocketMessage({
					data: JSON.stringify(tpl),
					fail:function(){
						self.$store.commit('changeSocket',false)
					},
					complete:function(){
						uni.reLaunch({url:'/pages/login/index'});
					}
				});
			} 
		}
	} 
</script>

<style>
	/* base */
	/* .flex{
	 	display: flex!important;
	 	flex-direction: row!important;
	 }
	 .flex-col{
		display: flex!important;
		flex-direction: column!important;
	 }
	 .flex-1{
	 	flex: 1;
	 }
	.flex-wrap{
		flex-wrap: wrap;
	} */
	 /***定义了 flex 容器中 flex 成员项在纵轴方向上如何排列以处理空白部分***/
	 /* .flex-ai-stretch{ align-items: stretch;}
	 .flex-ai-start{ align-items: flex-start;}
	 .flex-ai-end{ align-items: flex-end;}
	 .flex-ai-center{ align-items: center;} */
	 /***定义了 flex 容器中 flex 成员项在主轴方向上如何排列以处理空白部分***/
	 /* .flex-jc-start{justify-content: flex-start;}
	 .flex-jc-end{justify-content: flex-end;}
	 .flex-jc-center{justify-content: center;}
	 .flex-jc-bettwen{justify-content: space-between;}
	 .flex-center{text-align: center;justify-content:center;align-items: center;} */
</style>
