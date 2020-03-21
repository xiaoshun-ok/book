import Vue from 'vue'
export default {
	
	/* 属性值 */
  state: {
		//导航栏
		bottomNavList:[
			{
				"pagePath": "/pages/index/index",
				"text": "首页", 
				"icon": "home",
				"name": "index"
			},
			
			{
				"pagePath": "/pages/chat/match",
				"text": "大厅", 
				"icon": "id-card-o",
				"name": "match"
			},
			{
				"pagePath": "/pages/chat/contact",
				"text": "好友", 
				"icon": "eercast",
				"name": "contact"
			},
			{
				"pagePath": "/pages/user/index",
				"text": "我的", 
				"icon": "user-circle",
				"name": "user"
			}
		],
		bottomNavCurrent:0,
		//聊天记录
		chatRecord:[]
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
		setBottomNavCurrent(state,data){
			state.bottomNavCurrent=data
		},
		setChatRecord(state,data){
			state.chatRecord=data
		}
  },
	/* 
		导步计算方法
		定义 incrementAsync  :function ({ commit, state,dispatch,rootState  },data){commit('increment',data)}
		使用 store.dispatch('incrementAsync', data) or  store.commit({type:'incrementAsync',...data})
	 */
  actions: {
		
  }
}