<template>
	<view class="bottom-nav" :style="[setColorStyle]">
		<view  
			class ='bottom-nav-box' 
			:class="[(select === index)? 'bottom-nav-active':'']" 
		  @tap="clickNav(index)" 
			v-for="(nav,index) in list" :key="index">
			<view class="bottom-nav-box-icon" style="position: relative;">
			  <fa-icon v-if="nav.icon && !nav.src" :type="nav.icon" size="24" :color="(select === index)?activeFontColor:''" ></fa-icon>
				<view v-show='nav.tips' class="ivu-badge-dot"></view> 
			</view>
			<image v-if="nav.src && !nav.icon" class="bottom-nav-box-img" :src="select == index ? nav.srcSelect:nav.src" mode="aspectFit"></image>
			<text class="bottom-nav-box-text">{{nav.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:'bottom-nav',
		data() {
			return {
				// 选中项
				select: 0
			};
		},
		
		props:{
			/**
			 * 底部导航栏选中项
			 */
			current: {
			  type: Number,
			  default: 0
			},
			/**
			 * 底部导航栏项列表
			 */
			list: {
			  type: Array,
			  default: () => {
			    return [{
			        "pagePath": "/pages/tabbar/home/home",
			        "text": "首页",
			        "icon": "home",
							
			      },
			      {
			        "pagePath": "/pages/tabbar/my/my",
			        "text": "我的",
			        "icon": "home"
			      },
						{
						  "pagePath": "/pages/tabbar/my/my",
						  "text": "他的",
						  "icon": "home"
						}
			    ];
			  }
			},
			/**
			 * 文字颜色
			 */
			fontColor: {
			  type: String,
			  default: ''
			},
			/**
			 * 底部上边线颜色
			 */
			borderColor: {
			  type: String,
			  default: ''
			},
			/**
			 * 背景颜色
			 */
			backgroundColor: {
			  type: String,
			  default: '#619ad6'
			},
			/**
			 * 激活文字颜色
			 */
			activeFontColor: {
			  type: String,
			  default: '#1f1cd6'
			},
		},
		created() {
			this.select=this.$store.state.app.bottomNavCurrent
		},
		computed: {
		  /**
		   * 底部导航栏颜色样式
		   */
		  setColorStyle() {
		    let colorStyle = {};
		    // 文字颜色
		    if (this.fontColor) {
		      colorStyle.color = this.fontColor;
		    }
		    // 上边线颜色
		    if (this.borderColor) {
		      colorStyle.borderTop=`1px ${this.borderColor} solid;`;
		    }
		    // 背景颜色
		    if (this.backgroundColor) {
		      colorStyle.background =this.backgroundColor;
		    }
		    return colorStyle;
		  },
		  /**
		   * 激活文字样式
		   */
		  setActiveFontColorStyle() {
		    let activeFontColorStyle = '';
		    if (this.activeFontColor) {
		      activeFontColorStyle += `color:${this.activeFontColor};`;
		    }
		    return activeFontColorStyle;
		  }
		},
		
		methods:{
			clickNav(index){
				this.select = index;
				this.$store.commit('setBottomNavCurrent',index)
				this.$emit("on-click", {
				  "item": this.list[index],
				  "select": index
				});
			}
		}
	}
</script>

<style lang="css">
	.bottom-nav{
		position: fixed;
		width: 100%;
		min-height: 102rpx;
		max-height: 122rpx;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10rpx;
		z-index: 1000;
		margin-bottom: -3upx;
		display: flex;
	}
	.bottom-nav-box {
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-around;
	  align-items: center;
	  font-size: 28upx;
	  line-height: 1.5;
	  text-align: center;
	  text-overflow: ellipsis;
	  overflow: hidden;
	  user-select: none;
	  opacity: 0.7;
	  min-width: 64upx;
	  height: 100%;
	  background: transparent;
	  
	}
	.bottom-nav-box-text {
	  margin-top: 8upx;
	  display: block;	  
	}
	.bottom-nav-active{
		color: #007BFF;
	}
	.ivu-badge-dot {
	    position: absolute;
	    -webkit-transform: translateX(-50%);
	    transform: translateX(-50%);
	    -webkit-transform-origin: 0 center;
	    transform-origin: 0 center;
	    top: 2px;
	    right: -5px;
	    height: 6px;
	    width: 6px;
	    border-radius: 100%;
	    background: #ed4014;
	    z-index: 10;
	    box-shadow: 0 0 0 1px #fff;
	}
</style>
