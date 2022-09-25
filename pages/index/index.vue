<template>
	<view class="container">
		<view class="status_bar">
            <!-- 这里是状态栏 -->
        </view>
		<Home v-show="currentTab===1"></Home>
		<Saw v-show="currentTab===3"></Saw>
		<Profile v-show="currentTab === 4"></Profile>
		<TabBar @tabChange="handleTabChange" />
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar.vue'
	import Home from '../home/home.vue'
	import Profile from '../profile/profile.vue'
	import Saw from '../saw/saw.vue'
	export default {
		components:{
			TabBar,
			Home,
			Profile,
			Saw
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				currentTab:1
			}
		},
		onLoad(){
			
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			handleTabChange(num){
				this.currentTab = num
			}
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;
		// padding: 20px;
		font-size: 14px;
		line-height: 24px;
		height: calc(100vh - 150upx);
		.status_bar {
		        height: var(--status-bar-height);
		        width: 100%;
		    }
	}
</style>
