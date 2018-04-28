import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/infoSet',
    method: 'get',
    params
  })
}
