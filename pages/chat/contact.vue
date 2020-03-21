<template>
	<view>
		<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
		<swiper style="min-height: 80vh;" :current="currentTab" @change="swiperTab">
			<swiper-item >
				<scroll-view style="height: 100%;" scroll-y="true" scroll-with-animation>
					<view class="flexlist-item mgt-5" v-if="requestRelationList.length!==0">
						<fa-icon type="user-plus" size="30"  color="green" class="flexlist-img  flex flex-jc-center flex-ai-center" ></fa-icon>
						<view class="flex-1 flex  flex-ai-center">
							<view class="cl1 f22">新用户申请</view>
						</view>
						<view class="flex-jc-center flex-ai-center" style="display: flex;"  >
							<view class="btn-small mgr-10"> 
								<navigator url="/pages/chat/request-relation" open-type="navigate">查看</navigator>
							</view>
						</view>
					</view>
					
					<view v-for="item in relationList" :key="item.id" class="flexlist-item">
						<img :src="item.figureurl" class="flexlist-img" />
						<view class="flex-1">
							<view class="cl1 mgb-5 mgt-5">{{item.nickname}} </view>
							<view class="cl2">用户没有备注签名</view>
						</view>
						<view class="flex-jc-center flex-ai-center" style="display: flex;"  >
							<view   @tap="goChat(item)"  class="btn-small mgr-10"  >对话</view>
						</view>
						<view class="contact-dot-box"><view v-if='privateMassagerTips[item.id]' class="contact-dot"></view> </view>
					</view>					
				</scroll-view>
			</swiper-item>
			
			<swiper-item >
				<scroll-view style="height: 100%;" scroll-y="true" scroll-with-animation>
					
					<view class="flexlist-item mgt-5" >
						<fa-icon type="users" size="30"  color="green" class="flexlist-img  flex flex-jc-center flex-ai-center" ></fa-icon>
						<view class="flex-1 flex  flex-ai-center">
							<view class="cl1 f22">群聊天</view>
						</view>
						<view class="flex-jc-center flex-ai-center" style="display: flex;"  >
							<view class="btn-small mgr-10" @tap="generalGroup"> 
								进入总群
							</view>
							<view class="btn-small mgr-10" @tap="buildChatRoom">
								新建
							</view>
						</view>
					</view>
					
					<view v-for="item in groupRoomList" :key="item.id" class="flexlist-item">
						<fa-icon type="users" size="30"  color="green" class="flexlist-img  flex flex-jc-center flex-ai-center" ></fa-icon>
						<view class="flex-1">
							<view class="cl1 mgb-5 mgt-5">{{item.title}} </view>		
							<view class="cl2">{{item.notice}}</view>
						</view>
						<view class="flex-jc-center flex-ai-center" style="display: flex;"  >
							<view  @tap="goGroupRoo(item)"  class="btn-small mgr-10"  > 进群</view>
						</view>
						<view class="contact-dot-box"><view v-if='privateMassagerTips[item.id]' class="contact-dot"></view> </view>
					</view>		
				</scroll-view>
			</swiper-item>
		</swiper>		
		<bottom-nav  :list='bottomNavList' @on-click='changeNav'></bottom-nav>
	</view>
</template>

<script>
	import BottomNav from '@/common/mixins/bottom-nav.js'
	import ChatSend from '@/common/mixins/chat/chat_send.js'
	import ChatInit from  '@/common/mixins/chat/chat_init.js'
	import User from '@/common/mixins/user.js'
	import {SocketModul,BuildChatRoom as BuildRoom ,GetChatRooms} from '@/common/config.js'
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue"
	import navTab from '@/components/nav-tab/nav-tab.vue'
	export default {
		mixins:[BottomNav,ChatInit,ChatSend,User],
		components: {uniSwipeAction,navTab},
		data() {
			return {
				options: [{
							text: '取消',
							style: {
									backgroundColor: '#007aff'
							}
					}, {
							text: '确认',
							style: {
									backgroundColor: '#dd524d'
							}
				}],
				tabTitle:['好友','群组'],
				currentTab:0,
				toView:'',//回到顶部id
				newRoomName:'测试房间',//新建房间名
			}
		},
		computed:{
			//好友请求列表
			requestRelationList(){
				let arr=[]
				for (let key in this.$store.state.chat.requestRelationList) {
					arr.push(this.$store.state.chat.requestRelationList[key])
				}
				return arr
			},
			// 好友列表
			relationList(){
				return this.$store.state.chat.relationList
			},
			//好友消息列表
			privateMassagerTips(){
				return this.$store.state.chat.privateMassagerTips
			},
			//用户所在群列表
			groupRoomList(){
				return this.$store.state.chat.groupRoomList
			}
			
		},
		methods: {
			pageInit(){
				this.getRelation()
				this.getRequestRelationList()
				this.getChatRooms()
			},
			
			// 进入群聊天
			goGroupRoo(item){
				console.log(item)
			},
			//取得好友申请列表
			getRequestRelationList(){
				let module= SocketModul ,action='getRequestRelation',send_id=this.user_info.id
				let tpl={module,action,data:{send_id}}
				this.sendSocketMessage(tpl)
			},
			//取得好友列表
			getRelation(){
				let module= SocketModul ,action='getRelation',send_id=this.user_info.id
				let tpl={module,action,data:{send_id}}
				this.sendSocketMessage(tpl).then(()=>{})
			},
			//切换tab
			changeTab(index){
				this.currentTab=index
			},
			// swiper 滑动
			swiperTab(e) {
				var index = e.detail.current //获取索引
				if(this.tabTitle.length<=5){
					this.$refs.navTab.navClick(index)
				}else{
					this.$refs.navTab.longClick(index)
				}
			},
			//新建群聊房间
			buildChatRoom(){
				let title=this.newRoomName
				this.authUserRequest(BuildRoom,{title}).then(response=>{
					let {id,chat_user_id}=response
					if(id &&chat_user_id){
						this.$store.commit('setGroupRoom',response)
					}
				}).catch(e=>{})
			},
			//进入总群聊天
			generalGroup(){
				uni.navigateTo({
					url: '/pages/chat/group-chat'
				});
			},
			getChatRooms(){
				this.authUserRequest(GetChatRooms).then(response=>{
					let {chat_group_room}=response
					if(Array.isArray(chat_group_room)){
						this.$store.commit('setGroupRoomList',chat_group_room)
					}
				}).catch()
			}
		}
	}
</script>

<style>
	.page{
	    /*距离顶部范围应该在118-122范围内*/
	    padding-bottom: 118upx;
	}
	 .pBox{
	 	position: fixed;
	 	top: 90px;
	 	right: 0px;
	 	background-color: #fff;
	 	padding: 5px;
	 }
	 /* #ifdef H5 */
	 .pBox{
	 	top:120px
	 }
	 /* #endif */
	 .pBox-item{
	  
	 	text-align: center;
	 	width: 18px;
	 	height: 18px;
	 	line-height: 18px;
	 	font-size: 12px;
	 	
	 }
	 .pBox-active{
	 	background-color: #eee;
	 	border-radius: 20px;
	 }
	.contact-dot {
		position: relative;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		-webkit-transform-origin: 0 center;
		transform-origin: 0 center;
		top: 8px;
		right: 12px;
		height: 12px;
		width: 12px;
		border-radius: 100%;
		background: #ed4014;
		box-shadow: 0 0 0 1px #fff;
		display: inline-block;
	}
	.contact-dot-box{
		width: 0;
		height: 0;
		
	}
</style>
