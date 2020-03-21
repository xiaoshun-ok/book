<template>
	<view>
		<form @submit="submit">
			<view class="input-flex">
				<view class="input-flex-label">昵称</view>
				<input class="input-flex-text" name="nickname" :value="user_info.nickname" >
			</view>
			<view class="input-flex">
				<view style="text-align: center;">点击修改头像</view>
			</view>
			<view class=" flex flex-jc-center flex-ai-center  mgt-10">
				<cropper selWidth="500rpx" selHeight="500rpx" @upload="myUpload" :avatarSrc="figureurl" avatarStyle="width:50vw;height:50vw;"></cropper>
			</view>
			<button form-type="submit" class="btn-row-submit">提交</button>
		</form>
	</view>
</template>

<script>
	import cropper from "@/components/cropper/cropper.vue";
	import ChatSend from '@/common/mixins/chat/chat_send.js'
	import ChatInit from  '@/common/mixins/chat/chat_init.js'
	import {updataUserInfo} from '@/common/config.js'
	export default{
		components: {
		  cropper
		},
		mixins:[ChatInit,ChatSend],
		data(){
			return {
				figureurl:'',
				isChange:false
			}
		},
		watch:{
			"user_info.id":function(value){
				this.figureurl=this.user_info.figureurl
			}
		},
		created() {
			this.figureurl=this.user_info.figureurl
		},
		methods:{
			getPage(){
				
			},
			myUpload(rsp){
				console.log(rsp)
				this.isChange=true
				this.figureurl=rsp.path
			},
			submit(e){
				if(!this.isChange){return;}
				let self=this,
					token=this.token,
					chat_user_id=this.user_info.id;
				this.uploadFile(this.figureurl,{ext:1}).then(response=>{
					this.figureurl=response.url
					this.isChange=false
					uni.request({
						url:updataUserInfo,
						method:'POST',
						header:{"content-type":"application/x-www-form-urlencoded"},
						data:{
							...e.detail.value,
							token,
							chat_user_id,
							figureurl:this.figureurl
						},
						success:function(res){
							let {id,figureurl,nickname}=res.data
							self.$store.commit('setChatUserInfo',{id,figureurl,nickname})
							uni.getStorage({
								key:'chat_user_info',
								success:function(e){
									Object.assign(e.data,{figureurl,nickname})
									uni.setStorage({
										key:'chat_user_info',
										data:e.data
									})
								}
							})
						}
					})
				})
				/* let self=this,url=''
				uni.request({
					url,
					header:{
						"content-type":"application/x-www-form-urlencoded"
					},
					data:e.detail.value,
					success:function(res){						
					}
				}) */
			}
		},
	}
</script>

<style>
</style>
