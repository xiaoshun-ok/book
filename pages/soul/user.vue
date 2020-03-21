<template>
	<view>
		<view >
			<text>{{itemlist.signature}}</text>
			<image :src="'https://img.soulapp.cn/'+itemlist.userBackgroundUrl"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemlist:[],
			};
		},
		onLoad(options) {
			// console.log(options.tagkey)
			this.list(options.userkey)
		},
		methods:{
			list(userkey){
				let self=this
				uni.request({
					url: 'https://api-h5.soulapp.cn/html/v2/user/info?userIdEcpt='+userkey,
					header: {     
					      'X-Requested-With': 'XMLHttpRequest',
					      'Content-Type': 'application/x-www-form-urlencoded'
					     },
					// method:'POST',
					
					success: function(res) {
						console.log(res.data.data)  
						self.itemlist=res.data.data;
					}
				});
			},
			tags(tagkey){
				uni.navigateTo({
					url: '/pages/soul/tags?tagkey='+tagkey,
				})
			},
		}
	}
</script>

<style lang="less">

</style>
