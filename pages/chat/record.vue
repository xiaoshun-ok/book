<template>
	<view>
		<!-- #ifndef H5  -->
		不支持聊天记录功能
		<!-- #endif -->
		<!-- #ifdef H5  -->
		本页面主要是测试所用
		<view v-for="(item,index) in recordArray" :key='index'>
			{{item.send_id}} 发送给 {{item.receive_id}},消息内容是 {{item.message}}
		</view>
		
		<!-- #endif -->
	</view>
</template>

<script>
	// #ifdef H5 
	import Idb from '@/common/mixins/index_db.js'
	// #endif
	export default {
		// #ifndef H5 
		// #endif
		// #ifdef H5 
		data() {
			return {
				recordArray:[]
			}
		},
		// onLoad(){
		// 	console.log('onLoad')
		// },
		// onShow(){
		// 	console.log('onShow')
		// },
		// onReady(){
		// 	console.log('onReady')
		// },
		// onPageScroll(){
		// 	console.log('onPageScroll')
		// },
		// beforeCreate(){
		// 	console.log('beforeCreate')
		// },
		// created(){
		// 	console.log('created')
		// },
		// beforeMount(){
		// 	console.log('beforeMount')
		// },
		// mounted(){
		// 	console.log('mounted')
		// },
		
		created() {
			this.init()
		},
		methods: {
			init(){
				console.log(webkitIndexedDB)
				/* Idb.then(db=>{
					db.query('record').then(res=>{
						res.forEach(item=>{
							let arr=item.record
							this.recordArray.push(...arr)
						})
					})
				}) */
			}
		}
		// #endif
		
	}
</script>

<style>

</style>
