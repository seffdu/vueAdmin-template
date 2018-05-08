import request from '@/utils/request'

export function getList() {
  return request({
    url: '/api/infoSet',
    // url: '/user/info',
    method: 'get'
  })
}
