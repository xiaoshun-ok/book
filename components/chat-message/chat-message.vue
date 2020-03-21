<template>
	<view class="bubble" :style="{ float:isSelf  }">
		<!-- <block v-if="row.message_type==='system'" >
			<view  class="text">
				{{row.msg.content.text}}
			</view>
		</block> -->
		<block v-if="row.message_type==='text'">
			<rich-text :nodes="messageText"></rich-text>
		</block>
		<block v-else-if="row.message_type==='voice'">
			<!-- #ifdef MP-ALIPAY -->
			<view>支付宝小程序暂不支持语音</view>
			<!-- #endif -->
			<!-- #ifndef MP-ALIPAY -->
			<view class="voice-message" @tap='playAudio(row)'>
				<view class="voice-message-percent">
					<progress :percent="percent"  stroke-width="10" />
				</view>
				<view class="voice-message-text">
					{{voiceLength}}
				</view>
				<view class="voice-message-icon" >
					<fa-icon type = 'caret-square-o-right' size="22" ></fa-icon>
				</view>				
			</view>
			<!-- #endif -->
			
		</block>
		<block v-else-if="row.message_type==='img'">
			<view class="img">
				<image :src="imgUrl"  mode='aspectFit' :style="{width:imgWidth+'px',height:imgHeight+'px'}"  class='voice-message-img'></image>
			</view>
		</block>
		<block v-else-if="row.message_type==='text1'">
		</block>
		
	</view>
</template>

<script>
	import HTMLParser from './html-parser.js'
	export default {
		data(){
			return {
				record_length:0.0001,//音频总长
				record:0,//播放秒数
				imgUrl:'../../static/logo.png',
				imgWidth:200,
				imgHeight:200,
			}
		},
		props:{
			row:{
				type:Object,
				default:()=>{}
			}
		},
		created() {
			if(this.row.message_type==='img'){
				this.imgInit()
			}
		},
		computed:{
			user_info(){//用户信息
				return this.$store.state.chat.user_info
			},
			isSelf(){
				return this.user_info.id==this.row.send_id?'right':'left'
			},
			messageText(){//将文本信息转成数组
				let array=[]
				if(this.row.message_type==='text' && typeof this.row.message==='string' ){
					array=HTMLParser(this.row.message)
				}
				return array
			},
			percent(){//播放进度
				return this.record/this.record_length*100
			},
			recordCeil(){//播放秒数
				return Math.ceil(this.record)
			},
			voiceLength(){//显示的时长
				return this.record<0.1?this.row.record_length:this.recordCeil
			},
			isAudioPlay(){//是否在播放中
				return this.$store.state.chat.isAudioPlay
			}
		},
		methods:{
			//播放声音
			playAudio(row){
				if(this.isAudioPlay){
					return;
				}
				this.$store.commit('audioPlay',true)
				let {record_length ,url}=row,self=this
				this.record_length=record_length
				const audio = uni.createInnerAudioContext();
				audio.autoplay=true
				audio.src =url
				audio.onTimeUpdate(()=>{
					self.record=audio.currentTime
					if(audio.duration<60){
						self.record_length=audio.duration
					}
				})
				audio.onEnded((res) => {
					audio.destroy()
					this.record_length=0.01
					this.record=0.01
					this.$store.commit('audioPlay',false)
				});				
			},
			//初始华图片
			imgInit(){
				let {width,height,url}=this.row,self=this
				if(!url){
					return 
				}
				this.imgUrl=url
				if(!width  || !height){
					uni.getImageInfo({
						src:url,
						success:function({width,height}){
							self.setImgSize(width,height)
						}
					})
				}else{
					self.setImgSize(width,height)
				}
			},
			//设置图片宽高
			setImgSize(width=200,height=200){
				if(width>200){
					this.imgWidth=200
					this.imgHeight=height/width*200
				}else{
					this.imgWidth=width
					this.imgHeight=height
				}
			}
		}
	}
</script>

<style>
</style>
