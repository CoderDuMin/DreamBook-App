import request from '@/utils/request.js'

export function login(account,password) {
	return request({
		url: '/auth/login',
		method: 'post',
		data:{
			account,
			password
		}
	})
}

export function register(data) {
	return request({
		url: '/auth/register',
		method: 'post',
		data:data
	})
}