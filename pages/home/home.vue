<template>
	<view class='home-container'>
		<NavBar >
			<template #center>
				<h3>首页</h3>
			</template>
			<template #right style="text-align: right;">
				<view >
					<uni-icons type="search" size="22"></uni-icons>
				</view>
			</template>
		</NavBar>
		这里是首页
		<button @click="query">点击查询</button>
	</view>
</template>

<script>
	import NavBar from '@/components/NavBar.vue'
	import { getDreamListPublic } from '@/api/dream.js'
	export default {
		components:{
			NavBar
		},
		data() {
			return {
				
			};
		},
		methods:{
			query(){
				getDreamListPublic().then(res=>{
					console.log('查询梦境',res)
				}).catch(err=>{
					console.log('查询梦境失败',err)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.home-container{
	height: 100%;
	z-index: 2;
	// &::before{
	// 	content:'';
	// 	width: 100%;
	// 	height:200upx;
	// 	position: fixed;
	// 	top:0;
	// 	left:0;
	// 	border-radius:0 0 25% 25%;
	// 	background-color: #2AC8DD;
	// 	z-index: 1;
	// }
}
</style>
