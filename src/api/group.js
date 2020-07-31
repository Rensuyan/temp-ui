import request from '@/utils/request'

export function getGroupList(data) {
  return request({
    url: '/olm-biz/group/page',
    method: 'get',
    params: data
  })
}
