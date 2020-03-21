/* 用户页面及信息的混入 */
import { AdminUserLogin} from '@/common/config.js'
export default {
	data:function(){
		return {
			// #ifdef MP
			is_mp:true,
			// #endif				
		}
	},
	computed:{
		no_status(){
			return this.is_mp?1:0//是否在服务端保存session no_status=1则是不保存 除h5和APP一般不保存
		},
	},	
	methods:{
		//登录用户,此功能仅登用注册用户，相关方法可以自已封装
		_adminUserLogin(data){
			const self=this
			uni.request({
				url:AdminUserLogin+"?no_status="+self.no_status,
				method:"POST",
				header:{
					"content-type":"application/x-www-form-urlencoded", 
					"X-Requested-With":"XMLHttpRequest",
				},
				data
			}).then((data)=>{
				let [code,login]=data
				if(!code && login.data && !login.data.code){
					self.saveUserInfo(login.data)
				}
			});
		},
		// 保存用户信息到VUEX，并做本地化保存
		saveUserInfo(data){
			let {id,nickname,figureurl,token}=data
			this.$store.commit('setChatUserInfo',{id,nickname,figureurl})
			this.$store.commit('setToken',token)
			uni.setStorage({
				key:'chat_user_info',
				data,
				complete:function(){
					uni.reLaunch({url:'/pages/user/index'});//跳转到用户页面
				}
			});
		},
		//用户需要用户鉴权时的一些访问封装
		authUserRequest(url,data={}){
			return new Promise((resolve, reject)=>{
				let token=this.$store.state.chat.token;
				let chat_user_id=this.$store.state.chat.user_info.id;
				if(token && chat_user_id ){
					uni.request({
					    url,
							method:'POST',
					    data: {token,chat_user_id,...data},
					    header: {'content-type': 'application/x-www-form-urlencoded'},
					    success:function (res){
								if(res.data){
									resolve(res.data)
								}
							},
							fail:function(e){
								reject(e)
							}
					});
				}
			})
		}
	}
}