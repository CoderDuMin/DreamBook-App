<template>
	<view>
		我的信息<i class="v5-icon fa fa-user"></i>
		<uni-section title="基础卡片" type="line" v-if="userInfo">
					<uni-card :is-shadow="false">
						<view class="uni-body">用户昵称:{{userInfo.nickname}}</view>
						<view>用户账号:{{userInfo.account}}</view>
						<view>性别:{{['女','男','未知'][userInfo.gender]}}</view>
					</uni-card>
					<button @click="loggout">注销</button>
				</uni-section>
		<button type="primary" v-if="!userInfo" @click="toLogin">去登录</button>
	</view>
</template>

<script>
	import TabBar from '@/components/TabBar.vue'
	export default {
		components:{
			TabBar
		},
		data() {
			return {
				userInfo:{}
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')||null
			uni.$on('hasLogin',(msg)=>{
				debugger
				this.userInfo = uni.getStorageSync('userInfo')
			})
		},
		onUnload() {
			uni.$off('hasLogin')
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			loggout(){
				uni.removeStorageSync('token')
				uni.removeStorageSync('userInfo')
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style>

</style>
