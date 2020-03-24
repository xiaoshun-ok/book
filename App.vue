<script>
	import Chat from '@/common/mixins/app_init_chat.js'
	import ChatRecord from '@/common/mixins/chat/chat_record.js'
	export default {
		mixins:[Chat,ChatRecord],
		onLaunch: function() {
			// console.log('App Launch')
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
</style>
