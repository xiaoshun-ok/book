<template>
	<view class="content">
		<view id="home">
		  <view class="home_head">
		  	<view class="home_head_row">
			    	<view v-for="(item,index) in head" v-on:click="menu(index)">
			    		<text v-bind:class="{text_selection:index==current}">{{item.name}}</text>
			    	</view>
			    </view>
		  </view>
			<view></view>
			
		</view>
		<view id="con_list">
			<view class="con">
				<view class="con_list" v-for="(item,index) in itemlist">
					<view class="con_head">
						<view class="con_head_1" @click="user(item.authorIdEcpt)">
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
					<view class="con_content" @click="detail(item.postIdEcpt)">
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
					<!-- <view class="con_function">
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
					</view> -->
				</view>
				<view class="loading">{{loadingText}}</view>
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
		<bottom-nav  :list='bottomNavList' @on-click='changeNav'></bottom-nav>
	</view>
</template>

<script>
	import bottomNav from '@/common/mixins/bottom-nav.js'
	import conList from '@/pages/con_list/con_list'; 
	import '@/common/con_list.css';
	var _self, page = 1, timer = null;
	export default {
		mixins:[bottomNav],
		components: {
			conList
		},
		data() {
			return {
				title: 'Hello',
				current:0,//隐藏和显示0印象2不隐藏
				head: [
				  	{
				  		name:"推荐",
				  	},{
				  		name:"最新",
				  	},{
				  		name:"最热",
				  	}
				  ],
				  popup:1,//前景功能1隐藏2不隐藏
				  screen:1,//1是隐藏2是不隐藏
				  sex:0,//0不限1男2女
				  itemlist:[],
				  loadingText:'加载中...'
			}
		},
		onLoad() {
			this.initUserInfo()
			// this.list()
			_self = this;
			this.getnewsList();
		},
		onPullDownRefresh:function(){
		  this.getnewsList();
		 },
		 onReachBottom:function(){
		  if(timer != null){
		   clearTimeout(timer);
		  }
		  timer = setTimeout(function(){
		   _self.getmorenews();
		  }, 1000);
		 },
		
		methods: {
			menu:function(index){
				this.current=index;
			},
			getmorenews : function(){
			   if(_self.loadingText != '' && _self.loadingText != '加载更多'){
			    return false;
			   }
			   _self.loadingText = '加载中...';
			   uni.showNavigationBarLoading();
			   uni.request({
			    url: 'https://api-h5.soulapp.cn/html/v2/post/hot?pageIndex='+page,
			    method: 'GET',
			    success: function(res){
			     _self.loadingText = '';
				 var data=res.data.data.posts;
				 console.log(data)
			     if(data == ''){
			      uni.hideNavigationBarLoading();
			      _self.loadingText = '已加载全部';
			      return false;
			     }
			     page++;
			     console.log(res);
				  
			     _self.itemlist = _self.itemlist.concat(data);
			     _self.loadingText = '加载更多';
			     uni.hideNavigationBarLoading();
			    }
			   });
			  },
			  getnewsList : function(){
			     page = 1;
			     uni.showNavigationBarLoading();
			     uni.request({
			      url: 'https://api-h5.soulapp.cn/html/v2/post/hot?pageIndex=1',
			      method: 'GET',
			      success: function(res){
			       page++;
				   var data=res.data.data.posts;
			       _self.itemlist = data;
			       uni.hideNavigationBarLoading();
			       uni.stopPullDownRefresh();
			       _self.loadingText = '加载更多';
			      }
			     });
			    },
			// list(){
			// 	let self=this
			// 	uni.request({
			// 		url: 'https://api-h5.soulapp.cn/html/v2/post/hot?pageIndex=1',
			// 		header: {     
			// 		      'X-Requested-With': 'XMLHttpRequest',
			// 		      'Content-Type': 'application/x-www-form-urlencoded'
			// 		     },
			// 		// method:'POST',
					
			// 		success: function(res) {
			// 			console.log(res.data.data.posts)  
			// 			self.itemlist=res.data.data.posts;
			// 		}
			// 	});
			// },
			initUserInfo(){
				try {
					const value = uni.getStorageSync('chat_user_info');
					if (value.id) {
						let {id,nickname,figureurl}=value
						this.$store.commit('setChatUserInfo',{id,nickname,figureurl})
					}
				} catch (e) {}
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
			},
			tags(tagkey){
				uni.navigateTo({
					url: '/pages/soul/tags?tagkey='+tagkey,
				})
			},
			user(userkey){
				uni.navigateTo({
					url: '/pages/soul/user?userkey='+userkey,
				})
			},
			detail(detailkey){
				uni.navigateTo({
					url: '/pages/soul/detail?detailkey='+detailkey,
				})
			},
			
		}
	}
</script>

<style>
	/* @import './common/common.css'; */
	.loading{text-align:center; line-height:80px;}
	.con_content_2{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		overflow: hidden;
	}
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
	.page{
	    /*距离顶部范围应该在118-122范围内*/
	    padding-bottom: 118upx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	body{width:750upx;}
	#home{width:750upx;}
	#home>view:nth-child(2){height: 80upx;width:750upx;;}
	#home .home_head{width:750upx;height:80upx;background-color: #aedcae;position: fixed;z-index: 1;;}
	#home .home_head_row{width: 750upx;height:80upx;padding: 0upx;margin: 0upx;align-items: center;justify-content: center;
		    line-height: 80upx;font-size: 20upx; background-color: #aedcae;color: #fff;}
	#home .home_head_row view{width: 33.33333%; margin: 0upx;padding: 0upx;float: left;font-family: unset;font-size:28upx;align-items: center;justify-content: center;}
	#home .home_head_row text{display: inline-block;padding:0 10upx;margin: 0 auto;}
	#home .text_selection{border-bottom: 4upx solid #6c946d;}
</style>
