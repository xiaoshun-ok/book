/* 聊天室对话的混入，主要是一些初始化的方法及公用方法 */

import {SocketModul,UploadFile} from '@/common/config.js'
export default {
	data(){
		return{
			//弹框数据
			showPopup:false,//是否弹出
			popupMessage:'',//消息提示
		}
	},
	methods:{
		//进入一对一聊天
		goChat(item){
			this.$store.commit('changPrivateiUser',item)
			uni.navigateTo({
			    url: '/pages/chat/chat?id='+item.id
			});
		},
		//上传文件
		uploadFile(tempFilePath,data=null,tyep='img'){
			let token=this.token,chat_user_id=this.user_info.id;
			return new Promise((resolve, reject)=>{
				uni.uploadFile({
					url: UploadFile+"?type="+tyep, 
					filePath: tempFilePath,
					name: 'file',
					formData: {token,chat_user_id,...data},
					success: function(response) {
						let res=response.data,obj=data?{...data}:{}
						if (typeof res ==='string' ){
							res =JSON.parse(res)
						}
						if(res.url){
							obj.url=res.url
							resolve(obj)
						}else{
							reject({message:'上传失败',data:response})
						}
					},
					fail:function(err){
						reject({message:err.errMsg})
					}
				});
			})
		},
		// 发送图片信息
		sendImage(type){
			this.hideDrawer();
			this.getImage(type).then(data=>{
				this.uploadFile(data.path,data).then(response=>{
					let {url,width,height}=response
					if(url){
						let tpl={
							action:"sendToUid",
							data:{
								send_id:this.user_info.id,
								receive_id:this.receive_id,
								message_type:'img',
								url,width,height,
								time:(new Date() ).getTime()
							}
						};
						this.sendSocketMessage(tpl)
					}
				}).catch(err=>{
					this.popup(err)
				})
			}).catch(err=>{
				this.popup(err)
			});
		},
		//  取得图片信息
		getImage(type){
			return new Promise((resolve, reject)=>{
				uni.chooseImage({
					sourceType:[type],
					count:1,
					success:function (res){
						let tempFile=res.tempFiles[0]
						if(tempFile.size > 1024*100){
							reject({message:'图片不能大于100K'})
						}
						uni.getImageInfo({
							src: tempFile.path,
							success: function (image){
								let {width,height,path}=image
								resolve({width,height,path,size:tempFile.size})
							}
						});
					}
				});
			})
		},
		// 错误信息
		popup(err){
			// #ifndef APP-PLUS
			this.popupMessage=err.message||'末知错误'
			// #endif
			// #ifdef APP-PLUS
			this.popupMessage=JSON.stringify(err)
			// #endif
			this.showPopup=true
			setTimeout(()=>this.showPopup=false,5000)
		},
	}
}