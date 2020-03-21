<script>
	import Chat from '@/common/mixins/app_init_chat.js'
	import ChatRecord from '@/common/mixins/chat/chat_record.js'
	export default {
		mixins:[Chat,ChatRecord],
		onLaunch: function() {
			// console.log('App Launch')
			 // #ifdef APP-PLUS  
			 setTimeout(function(){
				 var info = plus.push.getClientInfo();
				 console.log( JSON.stringify( info ) );
				 uni.showModal({
				 	content: info,
				 	showCancel: false
				 });
				 },2000);
				const _self = this;  
				const _handlePush = function(message) {  
					// TODO  
				};  
				plus.push.addEventListener('click', _handlePush);  
				plus.push.addEventListener('receive', _handlePush);  
				// #endif  
		},
		onShow: function() {
			//console.log('App show')
			// #ifdef APP-PLUS
			let info= plus.push.getClientInfo().clientid
			console.log('onShow',JSON.stringify(info))
			// #endif
		},
		onHide: function() {
			//console.log('App Hide')
		},
		
	}
</script>


<style lang="scss">
	@import "@/static/css/base.scss"; 
	@import "@/static/css/style.scss";
	// @import 'common/common.css';
	
	page,
	view {
		display: flex;
	}
	
	page {
		display: flex;
		min-height: 100%;
		background-color: #EFEFEF;
	}
	
	template {
		display: flex;
		flex: 1;
	}
</style>
