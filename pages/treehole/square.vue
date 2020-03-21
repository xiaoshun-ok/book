<template>
	<view id="con_list">
		<view class="con">
			<view class="con_list" v-for="(item,index) in opuslist">
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
					<view class="con_content_2">{{item.title}}</view>
				</view>
				<view class="con_address">
					<text class="iconfont icon-weizhi"></text> 
					<text class="con_address_2">小世界</text>
					<text class="con_address_3"> </text>
					<text class="con_address_4">5787次浏览</text>
				</view>
				<view class="con_function">
				<!-- 	<view class="con_function_view" @click="yongbao(item,index)" v-bind:class="{con_color:item.yongbao.state==1}">
						<text class="iconfont icon-baozhen-hui"></text> 
						<text>{{item.yongbao.num}}</text>
					</view> -->
					<!-- <view class="con_function_view" v-bind:class="{con_color:item.huifu.state==1}">
						<text class="iconfont icon-icon_sms"></text> 
						<text>{{item.huifu.num}}回复</text>
					</view> -->
					<!-- <view class="con_function_view" @click="shoucang(item,index)" v-bind:class="{con_color:item.shoucang.state==1}">
						<text class="iconfont icon-guanzhu"></text> 
						<text>{{item.shoucang.num}}</text>
					</view> -->
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
				opuslist:[],
				popup:1,//前景功能1隐藏2不隐藏
				screen:1,//1是隐藏2是不隐藏
				sex:0,//0不限1男2女
				num:[
					{
						id:1,
						yongbao:{
							state:1,
							num:34
						},
						huifu:{
							state:2,
							num:22
						},
						shoucang:{
							state:2,
							num:22
						}
					},
					{
						id:2,
						yongbao:{
							state:1,
							num:34
						},
						huifu:{
							state:2,
							num:22
						},
						shoucang:{
							state:2,
							num:22
						}
					}
				]
			 }
		},
		onLoad() {
		
			
			this.opuslistFunc();
			
		},
		methods:{
			opuslistFunc() {
				var _self = this;
				// 用uniapp的request发起请求
				uni.request({
					url: 'http://39.101.185.133/api/UserOpus/opuslist',//接口地址
					datatype:'json',
					header: {					
						'X-Requested-With': 'XMLHttpRequest',
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					// headers: {'X-Requested-With': 'XMLHttpRequest'},
					success: (res) => {
						
						
						 this.opuslist=res.data;
						  console.log(this.opuslist)
					
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

<style lang="less">
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_702773_g9f89om4v3j.ttf') format('truetype');
	}
	
	.index {
		flex: 1;
	    width: 750upx;
	    /* min-height: 100vh; */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.row {
		flex-direction: row;
	}
	
	.column {
		flex-direction: column;
	}
	
	.card {
		position: relative;
		width: 710upx;
		margin: 20upx 20upx 20upx 20upx;
		border-radius: 10upx;
		overflow: hidden;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	
	.card-img {
		width: 710upx;
		height: 1065upx;
	}
	
	.card-num {
		color: #FFFFFF;
		font-size: 13px;
		text-align: center;
	}
	
	.card-num-view {
		background-color: #FF80AB;
	    line-height: 1;
	    display: inline-block;
		padding: 3px 6px;
	    color: #FFFFFF;
	    font-size: 12px;
	    text-align: center;
		justify-content: center;
	    align-items: center;
		border-radius: 15px;
		position: absolute;
		top: 20upx;
		right: 20upx;
	}
	
	.card-bottm {
		justify-content: center;
		align-items: center;
	}
	
	.card-share-view {
		justify-content: center;
		align-items: center;
		padding: 14upx 0;
		color: #FF80AB;
		margin: 20upx 20upx 20upx;
		font-size: 30upx;
		font-family: texticons;
	}
	
	.card-share-view:before {
		content: '\e62d';
	}
	
	.car-title-view {
		flex: 1;
		padding: 14upx 0upx 14upx 20upx;
	}
	
	.card-title {
		flex: 1;
		font-size: 30upx;
		text-align: left;
		color: #555555;
		text-overflow: ellipsis;
		lines: 2;
		display: -webkit-box;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	
	
	
	
	
	
	
	
	/*双列表*/
	
	.card-list2 {
		width: 345upx;
		margin: 20upx 0 20upx 20upx;
	}
	
	.card-list2-img {
		width: 345upx;
		height: 517upx;
	}
	
	.card-list2-num-view {
		transform: scale(0.8);
	    transform-origin: right;
	}
	
	.card-list2-num {
		font-size: 22upx;
	}
	
	.card-list2-title {
		font-size: 26upx;
	}
	
	
	.loadMore {
		font-size: 30upx;
		color: #555;
		margin-bottom: 20upx;
	}
	
	
	
	
	
	
	/* 分类页面 */
	
	.tags {
		background: #fff;
		flex: 1;
		width: 710upx;
		margin: 20upx;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: flex-start;
	}
	
	view.tag,.tag {
		display: block;
		width: 177.5upx;
		height: 180upx;
		padding: 24upx;
	    line-height: 1;
		box-sizing: border-box;
		text-align: center;
	}
	
	.tag-img {
		border-radius: 60upx;
		width: 120upx;
		height: 120upx;
	}
	
	.tag-text {
		font-size: 28upx;
		color: #555555;
	}
	
	
	
	
	
	/* 个人中心 */
	
	.center {
		flex-direction: column;
	    min-height: 100vh;
	}
	
	.logo {
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #FF80AB;
		flex-direction: row;
		align-items: center;
	}
	
	.logo-hover {
		opacity: 0.8;
	}
	
	.logo-img {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}
	
	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}
	
	.uer-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #FFFFFF;
	}
	
	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}
	
	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}
	
	.center-list {
		background-color: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}
	
	.center-list-item {
		height: 90upx;
		width: 750upx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0upx 20upx;
	}
	
	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}
	
	.list-icon {
		width: 40upx;
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #FF80AB;
		text-align: center;
		font-family: texticons;
		margin-right: 20upx;
	}
	
	.list-text {
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		flex: 1;
		text-align: left;
	}
	
	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
	
	
	
	
	/* 登录 */
	
	.loginView {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 750upx;
	    min-height: 100vh;
		padding-top: 30upx;
	}
	
	.input-view {
		border-bottom-style: solid;
		border-bottom-width: 1upx;
		border-bottom-color: #ddd;
		background-color: #fff;
		flex-direction: row;
		width: 750upx;
		padding: 20upx 20upx;
		box-sizing: border-box;
	}
	
	.label-view {
		width: 100upx;
		height: 60upx;
		align-items: center;
		margin-right: 30upx;
	}
	
	.label {
		flex: 1;
		line-height: 60upx;
		font-size: 38upx;
		color: #555;
		text-align: left;
	}
	
	.input {
		flex: 1;
		height: 60upx;
		font-size: 38upx;
		align-items: center;
	}
	
	.button-view {
		width: 750upx;
		margin-top: 50upx;
		padding: 0 20upx;
		box-sizing: border-box;
		flex-direction: column;
	}
	
	button {
		width: 710upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 38upx;
	}
	
	button.login {
		background-color: #FF80AB;
		color: #fff;
	}
	
	button.register {
		margin-top: 30upx;
		color: #FF80AB;
		background-color: #fff;
		border-color: #FF80AB;
		border-width: 2upx;
	}
	
	.register.hover,
	.login.hover {
		opacity: 0.6;
	}
	
	
	
	/* 详情页面 */
	
	.detail-btn-view {
		width: 750upx;
		position: fixed;
		bottom: 75upx;
		font-size: 28upx;
		justify-content: space-between;
	}
	
	.detail-btn-view view {
		opacity: 0.75;
		height: 80upx;
		border-radius: 80upx;
		width: 80upx;
		justify-content: center;
		align-items: center;
		line-height: 80upx;
		margin: 0 30upx;
		font-family: texticons;
		background: #eee;
		color: #555;
	}
	.detail-btn-view view text{
		margin-left: 10upx;
	}
	.detail-btn-view .download:before { 
		content: '\e617';
	}
	.detail-btn-view .collect:before { 
		content: '\e68d';
	}
	.detail-btn-view .setting {
		flex: 1;
	}
	

</style>
