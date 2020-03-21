import Vue from 'vue'
export default {
	
	/* 属性值 */
  state: {
		//是否在wss服务中注册
		isOnline:false,
		//wss连接是否打开
		isSocketOpen:false,
		//上线后拉取了哪些信息
		alreadyPulledObject:null,
		//是否在播放音频
		isAudioPlay:false,
		//用户Token
		token:null,
		// 用户信息
		user_info:{},
		// 所有用户列表
		userListObject:{},
		//私聊对象ID
		private_id:0,
		//私聊对象用户信息
		private_user_info:null,
		//私聊消息列表
		privateMassagerObject:{},
		//私聊消息提示列表
		privateMassagerTips:{},
		//好友列表
		relationList:[],
		//好友请求列表
		requestRelationList:[],
		//好友请求列表的用户信息
		requestRelationUserInfo:{},
		//群聊房间列表
		groupRoomList:[],
		//群聊消息列表
		//groupMassageList:{},
  },
	
	/* 
		计算属性 
		定义 doneTodos:(state, getters,rootState)=>{}
		使用 store.getters.doneTodosCount
	*/
  getters: {
  },
	/* 
		计算方法
		定义 increment :function(state,data){}
		使用 store.commit('increment', data) or  store.commit({type:'increment',...data})
	 */
  mutations: {
		//设置用户信息
		setChatUserInfo(state,data){
			state.user_info=data
		},
		//设置token
		setToken(state,data){
			state.token=data
		},
		//设置wss打开状态
		changeSocket(state,data){
			if(!data){
				state.isOnline=false
			}
			state.isSocketOpen=data
		},
		//设置播放状态
		audioPlay(state,data){
			state.isAudioPlay=data
		},
		//设置已拉取信息
		setAlreadyPulled(state,data=null){
			if(data){
				
			}else{
				state.alreadyPulledObject={
					getChatRooms:false,
					
				}
			}
		},
		// 设置私聊ID
		changPrivateiUser(state,data){
			state.private_id=data.id
			state.private_user_info=data
		},
		//取消新消息提醒
		cancelMassagerTips(state,id){
			Vue.set(state.privateMassagerTips,id,false)
		},
		//刷新用户所在群列表
		setGroupRoomList(state,data){
			state.groupRoomList=data
		},
		//添加单个房间
		setGroupRoom(state,data){
			state.groupRoomList.push(data)
		},
		/* 以下是聊天室操作 */
		//用户上线
		receiveChatOnLine(state){
			state.isOnline=true
		},
		//用户下线
		receiveChatOffLine(state){
			state.isOnline=false
		},
		
		// 当有用户登录广播时记录
		receiveChatOnOpen(state,data){
			let {user_info}=data;
			if(user_info){
				let {id}=user_info
				if(id ){
					let key='_chat_new_'+id
					Vue.set(state.userListObject,key,user_info)
				}
			}
		},
		// 拉取用户列表
		receiveChatUserList(state,data){
			state.userListObject=data.user_list||{}
		},
		//记录单条聊天记录
		receiveChatPrivate(state,data){
			let r_id
			if(data.send_id==state.user_info.id){
				r_id='chat_new_'+data.receive_id
			}else{
				r_id='chat_new_'+data.send_id
			}
			if(state.privateMassagerObject[r_id]){
				state.privateMassagerObject[r_id].push(data)
			}else{
				let arr=[]
				arr.push(data)
				Vue.set(state.privateMassagerObject,r_id,arr)
			}
			if(data.send_id !== state.user_info.id){
				Vue.set(state.privateMassagerTips,data.send_id,true)
			}
		},
		
		// 更新两个人的私聊信息
		receiveChatPrivateList(state,data){
			let r_id='chat_new_'+data.receive_id
			data=data.list.map(item=>{
				if(typeof item =='string'){
					return JSON.parse(item)
				}else{
					return item
				}
			})
			Vue.set(state.privateMassagerObject,r_id,data)
		},
		//添加好友请求
		receiveRequestRelation(state,data){
			let {send_id,message}=data
			send_id='chat_new_'+send_id
			let index=state.requestRelationList.findIndex(item=> item.send_id===send_id)
			if(index>-1){
				state.requestRelationList.splice(index,1,{send_id,message})
			}else{
				state.requestRelationList.push({send_id,message})
			}
		},
		//刷新好友请求
		receiveRequestRelationList(state,data){
			let arr=[]
			for (let key in data.list) {
				arr.push({send_id:key,message:data.list[key]})
			}
			state.requestRelationList=arr
		},
		// 请求处理后将该列表移除
		removeRequestRelationList(state,index){
			state.requestRelationList.splice(index,1)
		},
		// 请求好友的用户信息
		receiveRequestRelationUserInfo(state,data){
			state.requestRelationUserInfo=data.user_list||{}
		},
		//好友请求处理回调
		receiveManageRelation(state,data){
			if(data.handle!=='agree')return;
			let user_info=state.user_info.id==data.send_id?data.receive_user_info:data.send_user_info;
			if(typeof user_info==='string'){
				user_info=JSON.parse(user_info)
			}
			state.relationList.push(user_info)
		},
		receiveGetRelation(state,data){
			state.relationList=data.user_list||[]
		},
	},
	/* 
		导步计算方法
		定义 incrementAsync  :function ({ commit, state,dispatch,rootState  },data){commit('increment',data)}
		使用 store.dispatch('incrementAsync', data) or  store.commit({type:'incrementAsync',...data})
	 */
  actions: {
		
  }
}