import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/olm-biz/station/all',
    method: 'get',
    params: { token }
  })
}

export function logout() { 
  return request({
			method: "delete",
			url: "/auth/token/logout",
	})
}

export function loginByUsername(username, password, code, randomStr) {
  const grant_type = 'password'
  const scope = 'server'
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: { username, password, randomStr, code, grant_type, scope }
  })
}

export function getAllStationList(data) {
  return request({
    url: '/olm-biz/station/all',
    method: 'get',
    data
  })
}
