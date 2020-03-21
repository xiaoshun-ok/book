import { mapMutations } from 'vuex'
import { SocketUrl,SocketModul } from '@/common/config.js'
let intervalId=null
// #ifdef  H5
import Idb from './index_db.js'
// #endif
export default {
	computed:{
		isSocketOpen(){
			return this.$store.state.chat.isSocketOpen
		},
	},
	watch:{
	},
	onShow: function() {
		let self=this
		if(!self.isSocketOpen){
			self.wssInit()
		}
		intervalId=setInterval(()=>{
			if(self.isSocketOpen){
				uni.sendSocketMessage({
					data:'',
					fail:function(){
						self.$store.commit('changeSocket',false)
						self.wssInit()
					}
				})
			}else{
				self.wssInit()
			}
		},25000)//50秒发送一次心跳
	},
	onHide: function() {
		clearInterval(intervalId)
		// #ifdef APP-PLUS
		uni.closeSocket()
		// #endif
	},
	methods:{
		...mapMutations([
			'receiveChatOnOpen',//登录广播
			'receiveChatUserList',//取得用户列表
			'receiveChatPrivate',//接收私聊
			'receiveChatPrivateList',//刷新用户对话消息
			'receiveChatOnLine',//用户上线
			'receiveChatOffLine',//当前设备用户不在线
			'receiveRequestRelation',//添加好友请求
			'receiveRequestRelationList',//取得所有添加好友的请求
			'receiveRequestRelationUserInfo',//需要添加好友请求的用户信息
			'receiveManageRelation',//好友请求处理回调
			'receiveGetRelation'//取得好友列表
		]),
		receiveLogOut(data){//用户离线
			//console.log(data)
		},
		receiveErrorMessage(data){//错误信息
			// #ifdef  H5
			delete (data.type)
			Idb.then(db=>{
				db.insert('err',data)
			})
			// #endif
		},
		wssInit(){
			let module=SocketModul,url=SocketUrl;//操作类名
			//创建一个 WebSocket 连接。
			uni.connectSocket({url});
			//监听WebSocket连接打开事件。
			uni.onSocketOpen( (res)=> {
				this.$store.commit('changeSocket',true)
			  console.log('WebSocket连接已打开！');
			});
			//监听WebSocket接受到服务器的消息事件。
			uni.onSocketMessage((resopnse)=> {
				if(typeof resopnse.data =='string' &&  resopnse.data.substring(0,1)=='{' )
				{
					let obj=JSON.parse(resopnse.data);
					console.log('聊天室收到消息《《《《',obj)
					if(obj.type){
						let fn=obj.type;
						//console.log(fn)
						this[fn](obj);
					}
				}
			});
			uni.onSocketError((res)=>{
				this.$store.commit('changeSocket',false)
			  console.log('WebSocket连接错误！')
			});
			uni.onSocketClose((res)=>{
				this.$store.commit('changeSocket',false)
			  console.log('WebSocket 已关闭！');
			});
		},
	}
}