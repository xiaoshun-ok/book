/* 聊天室语音的混入，聊天室中语音聊天的方法 */

export default {
	data(){
		return{
			//录音相关参数
			//H5 和支付宝不能录音
			// #ifndef H5 || MP-ALIPAY
			RECORDER:uni.getRecorderManager(),
			// #endif
			isVoice:false,//是否是使录音功能
			voiceTis:'按住 说话',//录音框提示文本
			recordTis:"手指上滑 取消发送",//取消框提示文本
			recording:false,//正在录音
			willStop:false,//停止录音
			initPoint:{identifier:0,Y:0},
			recordTimer:null,//录音记时器ID setInterval 返回的ID
			recordLength:0,//录音时长
			//录音相关参数 end
		}
	},
	onLoad(e){
		// #ifndef H5 || MP-ALIPAY
		//录音开始事件
		this.RECORDER.onStart((e)=>{
			this.recordBegin(e);
		})
		//录音结束事件
		this.RECORDER.onStop((e)=>{
			this.recordEnd(e);
		})
		// #endif
	},
	methods:{
		// #ifndef H5 || MP-ALIPAY
		// 开始录间
		voiceBegin(e){
			if(e.touches.length>1){
				return ;
			}
			this.initPoint.Y = e.touches[0].clientY;
			this.initPoint.identifier = e.touches[0].identifier;
			this.RECORDER.start({format:"mp3"});//录音开始,
		},
		// 录音中(判断是否触发上滑取消发送)
		voiceIng(e){
			if(!this.recording){
				return;
			}
			let touche = e.touches[0];
			//上滑一个导航栏的高度触发上滑取消发送
			if(this.initPoint.Y - touche.clientY>=uni.upx2px(100)){
				this.willStop = true;
				this.recordTis = '松开手指 取消发送'
			}else{
				this.willStop = false;
				this.recordTis = '手指上滑 取消发送'
			}
		},
		//停止录音
		voiceEnd(e){
			if(!this.recording){
				return;
			}
			this.recording = false;
			this.voiceTis='按住 说话';
			this.recordTis = '手指上滑 取消发送'
			this.RECORDER.stop();//录音结束
		},
		// 取消录音
		voiceCancel(e){
			this.recording = false;
			this.voiceTis='按住 说话';
			this.recordTis = '手指上滑 取消发送'
			this.willStop = true;//不发送录音
			this.RECORDER.stop();//录音结束
		},
		//录音开始UI效果
		recordBegin(e){
			this.recording = true;
			this.voiceTis='松开 结束';
			this.recordLength = 1;
			this.recordTimer = setInterval(()=>{
				if(this.recordLength>60){
					this.recording = false;
					this.voiceTis='最大录音60秒';
				}
				this.recordLength++;
			},1000)
		},
		//录音结束(回调文件)
		recordEnd(e){
			clearInterval(this.recordTimer);
			if(!this.willStop){
				this.sendVoice(e.tempFilePath,{record_length:this.recordLength});
			}else{
				console.log('取消发送录音');
			}
			this.willStop = false;
		},
		//发送录音
		sendVoice(msg,data){
			this.uploadFile(msg,data,'mp3').then(data=>{
				let {record_length ,url}=data
				if(record_length && url){
					let tpl={
						action:"sendToUid",
						data:{
							send_id:this.user_info.id,
							receive_id:this.receive_id,
							message_type:'voice',
							url,
							record_length,
							time:(new Date() ).getTime()
						}
					};
					// if(this.user_info.id != this.receive_id){
					// 	this.$store.commit('receiveChatPrivate',tpl.data)
					// }
					this.sendSocketMessage(tpl)
				}
			}).catch(err=>{
				this.popupMessage=err.message||'末知错误'
				this.showPopup=true
				setTimeout(()=>this.showPopup=false,1000)
			})
		}
		// #endif
	}
}