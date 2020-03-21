/* 聊天室对话的混入，主要是一些初始化的方法及公用方法 */

import {SocketModul} from '@/common/config.js'
export default {
	data(){
		return{
			isReady:false,//页面就续
		}
	},
	computed:{
		isSocketOpen(){
			return this.$store.state.chat.isSocketOpen
		},
		ischatOnline(){
			return this.$store.state.chat.isOnline
		},
		user_info(){
			return this.$store.state.chat.user_info
		},
		token(){
			return this.$store.state.chat.token
		}
	},
	onLoad() {
		if(this.isSocketOpen && !this.ischatOnline){
			this.init()
		}
		if(this.isSocketOpen && this.ischatOnline && this.pageInit){
			this.pageInit()
		}
		this.isReady=true
	},
	watch:{
		'isSocketOpen':function(value){
			if(value){
				if (this.isSocketOpen && !this.ischatOnline){
					this.init()
				}
			}
		},
		'ischatOnline':function(value){
			if(value){
				if(this.pageInit && this.isReady){
					this.pageInit()//这里主要是断网后重连的方法
				}
			}
		}
	},
	methods:{
		init(){
			this.initUserInfo().then(()=>{
				if(!this.ischatOnline){
					this.loginChat()
				}
			})
		},
		//初始化用户信息
		initUserInfo(){
			let self=this
			return new Promise((resolve, reject)=>{
				if(self.user_info.id){
					resolve()
				}else{
					uni.getStorage({
						key:'chat_user_info',
						success:function(response){
							if (response.data.id && response.data.token ) {
								let {id,nickname,figureurl,token}=response.data
								self.$store.commit('setChatUserInfo',{id,nickname,figureurl})
								self.$store.commit('setToken',token)
								resolve()
							}
						},
						fail:function(){
							uni.reLaunch({url:'/pages/login/index'});//跳转到用户页面
						}
					})
				}
			})			
		},
		//登录聊天
		loginChat(){
			let self=this
			uni.getStorage({
				key:'chat_user_info',
				success:function(response){
					let {token,exp}=response.data,date=new Date()
					if(date.getTime()>exp*1000){
						//做续期处理 待完成
					}
					let tpl={
						module:SocketModul ,
						action:'onOpen',
						data:{user_info:self.user_info,token,exp}
					};
					uni.sendSocketMessage({
						data: JSON.stringify(tpl),
						fail:function(){
							self.$store.commit('changeSocket',false)
							return false;
						}
					});
				},fail:function(){
					uni.reLaunch({url:'/pages/login/index'})
				}
			});	
		},
		//发送消息
		sendSocketMessage(str){
			let module= SocketModul ,self=this
			return new Promise((resolve, reject)=>{
				if(!str || !self.isSocketOpen){
					return false;
				}else{
					if(typeof str !== 'string'){
						let {action,data}=str
						let tpl={module,action,data};
						str=JSON.stringify(tpl)
					}
					uni.sendSocketMessage({
						data: str,
						success:function(response){resolve()},
						fail:function(){
							self.$store.commit('changeSocket',false)
							return false;
						}
					});
				}
			})
		},
	}
}