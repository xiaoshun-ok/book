<template>
	<view>
		<view class="con">
			<view class="con_list" v-for="(item,index) in itemlist">
				<view class="con_head">
					<view class="con_head_1">
						<img class="con_head_img" :src="'https://img.soulapp.cn/heads/'+item.avatarName+'.png'"/>
						<!-- {{item.avatarName}} -->
					</view>
					<view class="con_head_user">
						<view class="con_head_user_name">
							<text class="con_head_user_title">{{item.signature}}</text>
							<view class="con_head_user_sex"><text class="iconfont icon-woman"></text> <text>{{item.comeFrom}}</text></view>
						</view>
						<view class="con_head_user_name">
							<text class="con_head_user_time">{{item.createTime}}</text>
						</view>
					</view>
					<view class="con_head_3" @click="popup_click(item)"><text class="iconfont icon-sanjiaojiantoutriangular"></text> </view>
					<view class="clear"></view>
				</view>
				<view class="con_content">
					<view  v-for="test2 in item.attachments">
						<view v-if="test2.type=='IMAGE'">
							<image mode="widthFix"  :src="test2.domain+test2.relativePath"></image>
						</view>
						<view v-else>
							<video :src="test2.domain+test2.relativePath"></video>
						</view>
					</view>
					
					
					<!-- <view class="con_content_1"><text>{{test2.id}}</text></view> -->
					<view class="con_content_2">{{item.content}}</view>
				</view>
				<view>
					<text>{{item.position}}</text>
				</view>
				<view>
					<text v-for="tag in item.tags " @click="tags(tag.tagIdEcpt)" >#{{tag.name}}</text>
				</view>
				<view class="con_address">
					<text class="iconfont icon-weizhi"></text> 
					<text class="con_address_2">小世界</text>
					<text class="con_address_3"> </text>
					<text class="con_address_4">5787次浏览</text>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import '@/common/con_list.css';
	export default {
		data() {
			return {
				itemlist:[],
			}
		},
		onLoad(options) {
			// console.log(options.tagkey)
			this.list(options.detailkey)
		},
		methods: {
			list(detailkey){
				let self=this
				uni.request({
					url: 'https://api-h5.soulapp.cn/html/v3/post/detail?postIdEcpt='+detailkey,
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
		}
	}
</script>

<style>

</style>
