import request from '../utils/request.js'

export function getDreamListPublic() {
	return request({
		url: '/dream/publiclist',
		method: 'get'
	})
}