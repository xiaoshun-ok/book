<template>
	<view id="con_list">
		<view class="con">
			<view class="con_list" v-for="(item,index) in itemlist">
				{item.id}
				<view class="con_head">
					<view class="con_head_1">
						<img class="con_head_img" src="https://upload.mrlou.com/upload/2019-05-28/4570cf241c74c14f4b2cb69465d140b0.jpg_100-100"/>
					</view>
					<view class="con_head_user">
						<view class="con_head_user_name">
							<text class="con_head_user_title">是爱说大话</text>
							<view class="con_head_user_sex"><text class="iconfont icon-woman"></text> <text>24岁</text></view>
						</view>
						<view class="con_head_user_name">
							<text class="con_head_user_time">32分钟之前</text>
						</view>
					</view>
					<view class="con_head_3" @click="popup_click(item)"><text class="iconfont icon-sanjiaojiantoutriangular"></text> </view>
					<view class="clear"></view>
				</view>
				<view class="con_content">
					<view class="con_content_1"><text>{{item.title}}</text></view>
					<view class="con_content_2">{{item.keyword}}</view>
				</view>
				<view class="con_address">
					<text class="iconfont icon-weizhi"></text> 
					<text class="con_address_2">小世界</text>
					<text class="con_address_3"> </text>
					<text class="con_address_4">5787次浏览</text>
				</view>
				<view class="con_function">
					<view class="con_function_view" @click="yongbao(item,index)" v-bind:class="{con_color:item.yongbao.state==1}">
						<text class="iconfont icon-baozhen-hui"></text> 
						<text>23</text>
					</view>
					<view class="con_function_view" v-bind:class="{con_color:item.huifu.state==1}">
						<text class="iconfont icon-icon_sms"></text> 
						<text>23回复</text>
					</view>
					<view class="con_function_view" @click="shoucang(item,index)" v-bind:class="{con_color:item.shoucang.state==1}">
						<text class="iconfont icon-guanzhu"></text> 
						<text>23</text>
					</view>
				</view>
			</view>
		</view>
		<view class="mask" v-bind:class="{none_class:1==popup}">
		</view>
		<view class="mask" v-bind:class="{none_class:1==screen}">
		</view>
		<view class="popup" v-bind:class="{none_class:1==popup}">
			<view class="popup_icon">
				<view>
					<view>
						<text class="iconfont icon-jubao"></text>
						<text>举报</text>
					</view>
				</view>
				<view>
					<view>
		    			<text class="iconfont icon-fenxiang"></text>
		    			<text>分享</text>
					</view>
				</view>
				<view>
					<view>
						<text class="iconfont icon-fenxiang"></text>
						<text>分享</text>
					</view>
				</view>
				
				<view>
					<view>
						<text class="iconfont icon-fenxiang"></text>
						<text>分享</text>
					</view>
				</view>
				<view>
					<view>
						<text class="iconfont icon-fenxiang"></text>
						<text>分享</text>
					</view>
				</view>
				
				<view>
					<view>
						<text class="iconfont icon-fenxiang"></text>
						<text>分享</text>
					</view>
				</view>
				
				<view>
					<view>
						<text class="iconfont icon-fenxiang"></text>
						<text>分享</text>
					</view>
				</view>
			</view>
			<view class="popup_cancel" @click="popup_click(1)">
				取消
			</view>
		</view>
		<view class="popup" v-bind:class="{none_class:1==screen}">
			<view class="popup_icon">
				<view>
					<view v-bind:class="{unlimited:sex==0}" @click="sex_click(0)" >
						<text class="iconfont icon-buxian"></text>
						<text>不限</text>
					</view>
				</view>
				<view>
					<view v-bind:class="{man:sex==1}" @click="sex_click(1)" >
						<text class="iconfont icon-man"></text>
						<text>男生</text>
					</view>
				</view>
				<view>
					<view v-bind:class="{woman:sex==2}" @click="sex_click(2)">
		    			<text class="iconfont icon-woman"></text>
		    			<text>女生</text>
					</view>
				</view>
			</view>
			<view class="popup_cancel" @click="screen_click()">
				取消
			</view>
		</view>
	</view>
</template>
<script>
	import '@/common/con_list.css';;
	export default {
		name: 'con_list',
		data () {
			 return {
				popup:1,//前景功能1隐藏2不隐藏
				screen:1,//1是隐藏2是不隐藏
				sex:0,//0不限1男2女
				itemlist:[],
			 }
		},
		onLoad() {
			
			this.list()
		},
		methods:{
			list(){
				uni.request({
					url: 'http://39.101.185.133/api/useropus/opuslist',
					header: {     
					      'X-Requested-With': 'XMLHttpRequest',
					      'Content-Type': 'application/x-www-form-urlencoded'
					     },
					// method:'POST',
					
					success: function(res) {
						
						this.itemlist=res.data.data.data;
						console.log(this.itemlist)
					}
				});
			},
			yongbao:function(item,index){
				//判断是取消拥抱还是添加拥抱
				if(item.yongbao.state==1){
					this.num[index]['yongbao']['state']=2;
					this.num[index]['yongbao']['num'] = this.num[index]['yongbao']['num']-1;
				}else{
					this.num[index]['yongbao']['state']=1;
					this.num[index]['yongbao']['num'] = this.num[index]['yongbao']['num']+1;
				}
			},
			shoucang:function(item,index){
				//判断是取消拥抱还是添加拥抱
				if(item.shoucang.state==1){
					this.num[index]['shoucang']['state']=2;
					this.num[index]['shoucang']['num'] = this.num[index]['shoucang']['num']-1;
				}else{
					this.num[index]['shoucang']['state']=1;
					this.num[index]['shoucang']['num'] = this.num[index]['shoucang']['num']+1;
				}
			},
			popup_click:function(item){
				if(this.popup==1){
					this.popup=2;
				}else{
					this.popup=1;
				}
			},
			screen_click:function(){
				if(this.screen==1){
					this.screen=2;
				}else{
					this.screen=1;
				}
			},
			sex_click:function(sex){
				this.sex=sex;
				if(this.screen==1){
					this.screen=2;
				}else{
					this.screen=1;
				}
			}
		}
	}
</script>
