import request from '@/utils/request'

export function getStationList(data) {
  return request({
    url: '/olm-biz/station/brief/list',
    method: 'get',
    params: data
  })
}
