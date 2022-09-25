<template>
	<view class="navbar-container">
		<view class="left">
			<slot name="left"></slot>
		</view>
		<view class='center'>
			<slot name="center"></slot>
		</view>
		<view class='right'>
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"NavBar",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.navbar-container{
	width: 100%;
	height: 80upx;
	display:flex;
	align-items: center;
	z-index: 10;
	.left,.right{
		flex: 1;
		display: flex;
	}
	.center{
		flex: 2;
		justify-content: center;
		text-align: center;
	}
}
</style>