<template>
	<view>
		<block v-for="(item,index) in requestRelationList" :key='index'>
			<view class="flexlist-item mgt-5">
				<image :src="requestRelationUserInfo[item.send_id]?requestRelationUserInfo[item.send_id].figureurl :''" class="flexlist-img  flex flex-jc-center flex-ai-center" ></image>
				<view class="flex-1 ">
					<view class="cl1 f18 mgt-10">{{requestRelationUserInfo[item.send_id]?requestRelationUserInfo[item.send_id].nickname:''}}</view>
					<view class="cl2 ">{{item.message}}</view>
				</view>
				<view class="flex-jc-center flex-ai-center " style="display: flex;" >
					<view class="btn-small  bg-success" @tap="handleRelation(item.send_id,index,'agree')"> 
						同意
					</view>
					<view class="btn-small mgl-10 bg-danger" @tap="handleRelation(item.send_id,index,'refuse')">
						拒绝
					</view>
				</view>
			</view>
		</block>
		<block v-if="hasList">
			<view >
				无新用户申请,反回没有事件
			</view>
			<button type="primary" v-if="hasList">点击返回</button>
		</block>
	</view>
</template>

<script>
	import {SocketModul} from '@/common/config.js'
	export default {
		data() {
			return {
			}
		},
		computed:{
			requestRelationList(){
				return this.$store.state.chat.requestRelationList
			},
			requestRelationUserInfo(){
				return this.$store.state.chat.requestRelationUserInfo
			},
			user_info(){
				return this.$store.state.chat.user_info
			},
			hasList(){
				return !this.requestRelationList.length
			}
		},
		onShow() {
			if(!this.$store.state.chat.isOnline){
				uni.reLaunch({url:'/pages/index/index'})
				return;
			}
			if(this.requestRelationList.length === 0  ){
				let page=getCurrentPages()
				if(page.length>1 && this.user_info.id ){
					uni.navigateBack()
				}else{
					uni.reLaunch({url:'/pages/index/index'})
				}
			}
			this.getRequestRelationUserInfo()
		},
		methods: {
			//处理添加好友
			handleRelation(id,index,handle='agree'){
				 id=id.replace(/_chat_new_/,"")*1
				let self=this, tpl={
					module:SocketModul,
					action:'manageRelation',
					data:{send_id:this.user_info.id,receive_id:id,handle}
				};
				uni.sendSocketMessage({
					data: JSON.stringify(tpl),
					success:function(){
						self.$store.commit('removeRequestRelationList',index)
					},
					fail:function(){
						self.$store.commit('changeSocket',false)
					}
				})
			},
			//取得请求列表用户信息
			getRequestRelationUserInfo(){
				let list=this.requestRelationList.map(item=>{
					return item.send_id
				}),self=this
				let tpl={
					module:SocketModul,
					action:'getUserList',
					data:{type:'receiveRequestRelationUserInfo',list}
				};
				uni.sendSocketMessage({
					data: JSON.stringify(tpl),
					success:function(response){},
					fail:function(){
						self.$store.commit('changeSocket',false)
					}
				});
			}
		}
	}
</script>

<style>

</style>
