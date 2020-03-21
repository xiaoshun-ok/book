<template>
	<view>
		<view class="content" @touchstart="hideDrawer">
			<scroll-view class="msg-list" scroll-y="true" :scroll-with-animation="scrollAnimation" :scroll-top="scrollTop" :scroll-into-view="scrollToView" @scrolltoupper="loadHistory" upper-threshold="50">
				<!-- 加载历史数据waitingUI   -->
				<view class="loading">
					<view class="spinner">
						<view class="rect1"></view>
						<view class="rect2"></view>
						<view class="rect3"></view>
						<view class="rect4"></view>
						<view class="rect5"></view>
					</view>
				</view>
				
				<view class="row" v-for="(row,index) in privateMassagerList" :key="index" :id='"message"+index'>
					<view class="my" v-if="row.send_id===user_info.id">
						<view class="left">
							<chat-message :row="row"></chat-message>
						</view>
						<view class="right">
							<image :src="user_info.figureurl" class="figureurl" ></image>			
						</view>
					</view>
					
					<view v-else class="other">
						<view class="left">
							<image :src="receive_user_info.figureurl" class="figureurl"></image>
						</view>
						<view  class="right">
							<view class="username">
								<view class="name">{{receive_user_info.nickname}}</view> <view class="time">{{row.time}}</view>
							</view>
							<chat-message :row="row"></chat-message>
						</view>
					</view>
					
				</view>
			</scroll-view>
		</view>
		
		<!-- 输入框 -->
		<view class="input-box" :class="popupLayerClass">
			<!-- H5下不能录音，输入栏布局改动一下 -->
			<!-- #ifndef H5 || MP-ALIPAY -->
			<view class="voice" @tap="switchVoice">
				<!-- <view class="icon" :class="isVoice?'jianpan':'yuyin'" ></view> -->
				<fa-icon :type='isVoice?"tasks":"microphone"' size="24"></fa-icon>
			</view>
			<!-- #endif -->
			<!-- #ifdef H5 || MP-ALIPAY -->
			<view class="more" @tap="showMore">
				<fa-icon type='plus' size="24"></fa-icon>
			</view>
			<!-- #endif -->
			<view class="textbox">
				<!-- 语音按键 -->
				<view 
				class="voice-mode" 
				:class="[isVoice?'':'hidden',recording?'recording':'']"
				@touchstart="voiceBegin" 
				@touchmove.stop.prevent="voiceIng" 
				@touchend="voiceEnd" 
				@touchcancel="voiceCancel"
					>{{voiceTis}}</view>
				
				<view class="text-mode"  :class="isVoice?'hidden':''">
					<view class="box">
						<textarea auto-height="true" :value="textMsg"  :cursor="cursor"  @blur='textareaBlurEvent' />
					</view>
					<view class="em" @tap="chooseEmoji">
						<fa-icon type='smile-o ' size="28"></fa-icon>
					</view>
				</view>
				
			</view>
			<!-- #ifndef H5 -->
			<view class="more" @tap="showMore">
				<view class="icon add"></view>
			</view>
			<!-- #endif -->
			<view class="send" :class="isVoice?'hidden':''" @tap="sendText">
				<view class="btn">发送</view>
			</view>
		</view>
		
		<!-- 弹出层UI -->
		<!-- 录音UI效果 -->
		<view class="record" :class="recording?'':'hidden'">
			<view class="ing" :class="willStop?'hidden':''"><view class="icon luyin2" ></view></view>
			<view class="cancel" :class="willStop?'':'hidden'"><view class="icon chehui" ></view></view>
			<view class="tis" :class="willStop?'change':''">
				<view style="text-align: center;">
					<view>
						{{recordTis}}
					</view>
					<view>
						已录音{{recordLength}}秒
					</view>
				</view>
			</view>
			<view class="tis" :class="willStop?'change':''"></view>
		</view>
		<!-- 录音UI效果  end-->
		
		<!-- 抽屉栏  @touchmove.stop.prevent="discard" -->
		<view class="popup-layer" :class="popupLayerClass" >
			<!-- 表情 -->
			<swiper class="emoji-swiper" :class="{hidden:hideEmoji}" indicator-dots="true" duration="150">
				<swiper-item v-for="(page,pid) in emojiList" :key="pid">
					<view v-for="(em,eid) in page" :key="eid" @tap="addEmoji(em)">
						<image mode="widthFix" :src="'https://qq.wyx2013.cn/upload/emoji/'+em.url"></image>
					</view>
				</swiper-item>
			</swiper> 
			<!-- 更多功能 相册-拍照-红包 -->
			<view class="more-layer"  :class="{hidden:hideMore}">
				<view class="list">
					<view class="box" @tap="chooseImage"><fa-icon type="picture-o" size="32"></fa-icon></view>
					<view class="box" @tap="camera"><fa-icon type="mobile" size="36"></fa-icon></view>
					<view class="box" @tap="handRedEnvelopes"><fa-icon type="send" size="32"></fa-icon></view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="popup" :show="showPopup"  type='bottom'>{{popupMessage}}</uni-popup>
		
	</view>
</template>

<script>
	import chatMessage from '@/components/chat-message/chat-message.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue" 
	import ChatSend from '@/common/mixins/chat/chat_send.js'
	import ChatInit from  '@/common/mixins/chat/chat_init.js'
	import ChatVoice from '@/common/mixins/chat/chat_voice.js'
	import { EmojiList,EmojiAll } from '@/common/emoji.js'  
	export default {
		components:{
			chatMessage,uniPopup,
		},
		mixins:[ChatInit,ChatSend,ChatVoice],
		data() {
			return {
				// 滚动
				scrollAnimation:false,//滑动动画开关
				scrollTop:0,//竖向滚动条位置
				scrollToView:'',//滚动到元素位置
				
				// 表情包 自己上传图床，我的图床不定期会删除，100K/秒的最大速度，请放过。。。。。
				emojiList:EmojiList,
				
				//弹出抽屉
				popupLayerClass:'',//打开抽屉的类
				hideMore:true,//隐藏更多控制
				hideEmoji:true,//隐藏表情
				
				//弹框数据
				showPopup:false,//是否弹出
				popupMessage:'',//消息提示
				
				// 聊天输入框相关
				textMsg:'',//输入文本
				cursor:0,//输入框中光标位置
				
				/* 以下是聊天对象 */
				receive_id:0,//私聊对象
			}
		},
		
		computed:{
			//对话用户信息
			receive_user_info(){
				return this.$store.state.chat.private_user_info
			},
			//私聊列表
			privateMassagerList(){
				if(!this.receive_id) return []
				let key='chat_new_'+this.receive_id
				let list=this.$store.state.chat.privateMassagerObject[key]||[]
				return  list.map(item=>{
					let time= item.time
					if(typeof time ==='string'||!item ){
						return item
					}
					let date=new Date(time)
					item.time=(date.getMonth()+1)+"月"+  date.getDate()+"日"+date.getHours()+":"+date.getMinutes()
					return item
				}) 
			}
		},
		watch:{
			'privateMassagerList':function(){
				let that=this
				this.$nextTick(function(){
					that.scrollToView="message"+(that.privateMassagerList.length-1)
				})
			},
		},
		onUnload(){},
		onShow(){
			this.initOnShow()
		},
		onBackPress(){
			this.$store.commit('cancelMassagerTips',this.receive_id)
		},
		methods: {
			initOnShow(){
				if(this.receive_id===0){
					this.receive_id=this.$store.state.chat.private_id
				}
				if(!this.receive_id){
					uni.reLaunch({url:"/pages/chat/contact"});
					return;
				}
				if(this.receive_user_info.nickname){
					uni.setNavigationBarTitle({
					    title: "与"+this.receive_user_info.nickname+"的对话"
					});
				}
				this.$store.commit('cancelMassagerTips',this.receive_id)
				this.getPrivateChat()
			},
			// 打开抽屉
			openDrawer(){
				this.popupLayerClass = 'showLayer';
				this.hideMore=true
			},
			// 隐藏抽屉
			hideDrawer(){
				this.popupLayerClass = '';
				setTimeout(()=>{
					this.hideMore = true;
					this.hideEmoji = true;
				},150);
			},
			//  触发滑动到顶部(加载历史信息记录)
			loadHistory(){},
			//  切换语音/文字输入
			switchVoice(){
				this.isVoice=!this.isVoice;
			},
			// 输入框边界上显示更多
			showMore(){ 
				this.hideMore=false
				this.popupLayerClass = 'showLayer';
			 },
			//输入框失去焦点
			textareaBlurEvent(event){
				this.textMsg =event.detail.value
				this.cursor= event.detail.cursor||0;
			},
			//选择图片
			chooseImage(){
				this.sendImage('album')//见chat_send.js
			},
			// 拍照
			camera(){
				this.sendImage('camera')//见chat_send.js
			},
			// 红包
			handRedEnvelopes(){
				this.hideDrawer()
				console.log('handRedEnvelopes')
			},
			// 选择表情
			chooseEmoji(){
				this.hideMore = true;
				if(this.hideEmoji){
					this.hideEmoji = false;
					this.popupLayerClass = 'showLayer';
				}else{
					this.hideDrawer();
				}
			},
			//添加表情
			addEmoji(em){
				let cursor =this.cursor,text=this.textMsg,start,end
				if(cursor === 0){
					this.textMsg = em.alt +text;
					return;
				}
				start=text.substring(0,cursor)
				end=text.substr(cursor)
				this.textMsg=start+em.alt+end;
			},
			
			//  发送信息
			sendText(){
				this.hideDrawer()
				if(this.textMsg==='')return
				let text=this.textMsg
				setTimeout(() => { this.textMsg = '' }, 0)
				text = this.replaceEmoji(text);
				let tpl={
					action:"sendToUid",
					data:{
						send_id:this.user_info.id,
						receive_id:this.receive_id,
						message_type:'text',
						message:text,
						time:(new Date() ).getTime()
					},
				};
				/* if(this.user_info.id != this.receive_id){
					this.$store.commit('receiveChatPrivate',tpl.data)
				} */
				this.sendSocketMessage(tpl)
			},
			//替换表情符号为图片 微信开发者工具会出现所有表情在最前面的情况
			replaceEmoji(str){
				let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g,(item)=>{					
					for (let i=0;i<EmojiAll.length;i++) {
						let EM = EmojiAll[i];
						if(EM.alt==item){
							// 一定要修改为你自己的图床。
							let onlinePath = 'https://qq.wyx2013.cn/upload/emoji/'
							let imgstr = '<img src="'+onlinePath+EM.url+'">';
							return imgstr;
						}
					}
				});
				return '<div class="talk-emoji" >'+replacedStr+'</div>';
			},
			// 侧边栏
			floatTouchClick(e){console.log(e)},
			//取得聊天记录
			getPrivateChat(){
				let tpl={
					action:"getPrivateChat",
					data:{
						send_id:this.user_info.id,
						receive_id:this.receive_id,
					}
				};
				this.sendSocketMessage(tpl)
			},
		}
	}
</script>

<style lang="scss">
	.page{
	    /*距离顶部范围应该在118-122范围内*/
	    padding-bottom: 118upx;
	}
	
</style>
