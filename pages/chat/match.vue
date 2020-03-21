<template>
	<view style="margin-bottom: 118upx;">
		<view v-for="item in userList" :key="item.id" class="flexlist-item">
			<img :src="item.figureurl" class="flexlist-img" />
			<view class="flex-1">
				<view class="cl1 mgb-5 mgt-5">{{item.nickname}} {{privateMassagerTips[item.id]?"有消息":''}}</view>
				<view class="cl2">用户没有备注签名</view>
			</view>
			<view class="flex-jc-center" v-if="item.isSelf">
				<!-- <view class="btn-small">自己</view> -->
			</view>
			<view class="flex-jc-center" v-else>
				<view   @tap="goChat(item)"  class="btn-small mgr-10"  >对话</view>
				<view  @tap="addFriends(item)">
					<fa-icon    type="user-plus " size="24" color="#28a745" > </fa-icon>加好友
				</view>
			</view>
		</view>
		
		<view class="pull-down-button">
			<button type="primary"  @tap="getUserList">刷新用户</button>
		</view>
		<bottom-nav  :list='bottomNavList' @on-click='changeNav'></bottom-nav>
	</view>
</template>

<script>
	import BottomNav from '@/common/mixins/bottom-nav.js'
	import ChatSend from '@/common/mixins/chat/chat_send.js'
	import ChatInit from  '@/common/mixins/chat/chat_init.js'
	export default {
		components:{},
		mixins:[BottomNav,ChatInit,ChatSend],
		data() {
			return {}
		},
		onShow(){},
		onPullDownRefresh(){
			this.getUserList()
			setTimeout(function () {
            uni.stopPullDownRefresh();
			}, 1000);
		},
		computed:{
			userList(){
				let arr=Object.values(this.$store.state.chat.userListObject)
				arr.map(item=>{
					item.isSelf = item.id===this.user_info.id
					return item
				})
				return Object.values(this.$store.state.chat.userListObject)
			},
			privateMassagerTips(){
				return this.$store.state.chat.privateMassagerTips
			}
		},
		methods: {
			pageInit(){
				this.getUserList()//监听房间上线，拉取用户列表
			},
			//取得用户信息列表
			getUserList(){
				let tpl={
					action:'getUserList',
					data:{}
				};
				this.sendSocketMessage(tpl)
			},
			//添加好友
			addFriends(item){
				let tpl={
					action:"requestRelation",
					data:{
						send_id:this.user_info.id,
						receive_id:item.id,
						time:(new Date() ).getTime(),
					}
				};
				this.sendSocketMessage(tpl)
			},
		}
	}
</script>

<style >
	.page{
	    /*距离顶部范围应该在118-122范围内*/
	    padding-bottom: 118upx;
	}
	.pull-down-button{
		padding: 20rpx 120rpx;
	}
	.flexlist-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    background-color: #fff;
}
.flexlist-img {
    width: 50px;
    height: 50px;
    margin-right: 11px;
}
.flex-1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.mgb-5 {
    margin-bottom: 5px;
}
.mgt-5 {
    margin-top: 5px;
}
.flex-jc-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
		display: flex;
		align-items: center;
}
.btn-mini {
    padding: 4px 4px;
    font-size: 13px;
    background-color: #007AFF;
    color: #fff;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    align-items:center ;
    cursor: pointer;
    line-height: 1.5;
		/* max-height: 25px; */
    text-align: center;
    border-radius: 5px;
}
</style>
