<template>
<!-- 	<view class="login-panel">
		<h3>登录</h3>
		<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
			<uni-forms-item label="账号" required>
				<uni-easyinput v-model="baseFormData.account" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item label="密码" required>
				<uni-easyinput type="password" v-model="baseFormData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="onSubmit">登录</button>
	</view> -->
	<view class="form-structor">
		<view :class="{'signup':true,'slide-up':isLogin}">
			<h2 class="form-title" id="signup" @click="isLogin = false"><span>去</span>登 录</h2>
			<view class="form-holder">
				
				<uni-easyinput v-model="loginFormData.account"  class="input" placeholder="请输入账号" />
				<uni-easyinput v-model="loginFormData.password" type="password" class="input" placeholder="请输入密码" />
			</view>
			<button class="submit-btn" @click="onLoginSubmit">登 录</button>
		</view>
		<view :class="{'login':true,'slide-up':!isLogin}">
			<view class="mask-pd"></view>
			<view class="center">
				<h2 class="form-title" id="login" @click="isLogin = true"><span>去</span>注 册 </h2>
				<view class="form-holder">
					<uni-easyinput v-model="registerForm.account" class="input" placeholder="请输入账号" />
					<uni-easyinput v-model="registerForm.nickname" class="input" placeholder="请输入昵称" />
					<uni-easyinput v-model="registerForm.password" type="password" class="input" placeholder="请输入密码" />
				</view>
				<button class="submit-btn" @click="onRegisterSubmit">注 册</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {login,register} from '@/api/user.js'
	export default{
		data(){
			return {
				loginFormData:{},
				registerForm:{},
				isLogin:false,
			}
		},
		methods:{
			onLoginSubmit(){
				login(this.loginFormData.account,this.loginFormData.password).then(res=>{
					if(res?.code == 200){
						this.$msg('登录成功')
						console.log('登录成功',res)
						uni.setStorageSync('token','Bearer ' + res.token)
						uni.setStorageSync('userInfo',res.data)
						uni.$emit('hasLogin',{msg:'登录了'})
						uni.redirectTo({
							url:'/pages/index/index'
						})
					}else{
						this.$msg('登录失败')
					}
					
				})
			},
			onRegisterSubmit(){
				console.log('注册',this.registerForm)
				register({...this.registerForm,gender:1}).then(res=>{
					if(res?.code == 200 ){
						this.$msg('注册成功,现在可以登录啦')
						this.isLogin = false
					}else{
						this.$msg('注册失败')
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
	@import url("https://fonts.googleapis.com/css?family=Fira+Sans");
	::v-deep .uni-easyinput__content{
		border:none !important ;
	}
	page {
		position: relative;
		min-height: 100vh;
		background-color: #E1E8EE;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Fira Sans", Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.form-structor {
		background-color: #222;
		border-radius: 15px;
		height: 100vh;
		width: 100vw;
		position: relative;
		overflow: hidden;
		
		&::after {
			content: '';
			opacity: .8;
			position: absolute;
			top: 0;right:0;bottom:0;left:0;
			background-repeat: no-repeat;
			background-position: left bottom;
			background-size: 100vw;
			// background-image: url('https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100');
			background-image: url('https://pic1.zhimg.com/v2-b9639829bdfd2363afa08bd741f8b4ce_r.jpg?source=1940ef5c');
		}
		
		.signup {
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			width: 65%;
			z-index: 5;
			-webkit-transition: all .3s ease;
			
			
			&.slide-up {
				top: 5%;
				-webkit-transform: translate(-50%, 0%);
				-webkit-transition: all .3s ease;
			}
			
			&.slide-up .form-holder,
			&.slide-up .submit-btn {
				opacity: 0;
				visibility: hidden;
			}
			
			&.slide-up .form-title {
				font-size: 1em;
				cursor: pointer;
			}
			
			&.slide-up .form-title span {
				margin-right: 5px;
				opacity: 1;
				visibility: visible;
				-webkit-transition: all .3s ease;
			}
			
			.form-title {
				color: #fff;
				font-size: 1.7em;
				text-align: center;
				
				span {
					color: rgba(0,0,0,0.4);
					opacity: 0;
					visibility: hidden;
					-webkit-transition: all .3s ease;
				}
			}
			
			.form-holder {
				border-radius: 15px;
				background-color: #fff;
				overflow: hidden;
				margin-top: 50px;
				opacity: 1;
				visibility: visible;
				-webkit-transition: all .3s ease;
				
				.input {
					border: 0;
					outline: none;
					box-shadow: none;
					display: block;
					height: 30px;
					line-height: 30px;
					padding: 8px 0px;
					border-bottom: 1px solid #eee;
					width: 100%;
					font-size: 12px;
					
					&:last-child {
						border-bottom: 0;
					}
					&::-webkit-input-placeholder {
						color: rgba(0,0,0,0.4);
					}
				}
			}
			
			.submit-btn {
				background-color: rgba(0,0,0,0.4);
				color: rgba(256,256,256,0.7);
				border:0;
				border-radius: 15px;
				display: block;
				margin: 15px auto; 
				padding: 15px 45px;
				width: 100%;
				font-size: 13px;
				font-weight: bold;
				cursor: pointer;
				opacity: 1;
				visibility: visible;
				-webkit-transition: all .3s ease;
				
				&:hover {
					transition: all .3s ease;
					background-color: rgba(0,0,0,0.8);
				}
			}
		}
		
		.login {
			position: absolute;
			top: 20%;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #fff;
			z-index: 5;
			-webkit-transition: all .3s ease;
			
			// &::before {
			// 	content: '';
			// 	position: absolute;
			// 	left: 50%;
			// 	top: -20px;
			// 	-webkit-transform: translate(-50%, 0);
			// 	background-color: rgba(255,255,255,1);
			// 	// background-image: url('https://pic1.zhimg.com/80/v2-365ae70fe6bebd930b3a250e1b52141a_720w.jpg?source=1940ef5c');
			// 	width: 200%;
			// 	height: 250px;
			// 	border-radius: 50%;
			// 	z-index: 4;
			// 	-webkit-transition: all .3s ease;
			// }
			.mask-pd {
				content: '';
				position: absolute;
				left: 50%;
				top: -20px;
				-webkit-transform: translate(-50%, 0);
				background-color: #fff;
				width: 200%;
				height: 250px;
				border-radius: 50%;
				z-index: 4;
				-webkit-transition: all .3s ease;
			}
			
			.center {
				position: absolute;
				top: calc(50% - 10%);
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				width: 65%;
				z-index: 5;
				-webkit-transition: all .3s ease;
				
				.form-title {
					color: #000;
					font-size: 1.7em;
					text-align: center;
	
					span {
						color: rgba(0,0,0,0.4);
						opacity: 0;
				    visibility: hidden;
					  -webkit-transition: all .3s ease;
					}
				}
	
				.form-holder {
					border-radius: 15px;
					background-color: #fff;
					border: 1px solid #eee;
					overflow: hidden;
					margin-top: 50px;
					opacity: 1;
					visibility: visible;
					-webkit-transition: all .3s ease;
	
					.input {
						border: 0;
						outline: none;
						box-shadow: none;
						display: block;
						height: 30px;
						line-height: 30px;
						padding: 8px 0px;
						border-bottom: 1px solid #eee;
						width: 100%;
						font-size: 12px;
	
						&:last-child {
							border-bottom: 0;
						}
						&::-webkit-input-placeholder {
							color: rgba(0,0,0,0.4);
						}
					}
				}
	
				.submit-btn {
					background-color: #6B92A4;
					color: rgba(256,256,256,0.7);
					border:0;
					border-radius: 15px;
					display: block;
					margin: 15px auto; 
					padding: 15px 45px;
					width: 100%;
					font-size: 13px;
					font-weight: bold;
					cursor: pointer;
					opacity: 1;
					visibility: visible;
					-webkit-transition: all .3s ease;
	
					&:hover {
						transition: all .3s ease;
						background-color: rgba(0,0,0,0.8);
					}
				}
			}
			
			&.slide-up {
				top: 90%;
				background-color: rgba(255,255,255,.7);
				-webkit-transition: all .3s ease;
			}
			
			&.slide-up .center {
				top: 10%;
				-webkit-transform: translate(-50%, 0%);
				-webkit-transition: all .3s ease;
			}
			
			&.slide-up .form-holder,
			&.slide-up .submit-btn {
				opacity: 0;
				visibility: hidden;
				-webkit-transition: all .3s ease;
			}
			
			&.slide-up .form-title {
				font-size: 1em;
				margin: 0;
				padding: 0;
				cursor: pointer;
				-webkit-transition: all .3s ease;
			}
			
			&.slide-up .form-title span {
				margin-right: 5px;
				opacity: 1;
				visibility: visible;
				-webkit-transition: all .3s ease;
			}
		}
	}
</style>