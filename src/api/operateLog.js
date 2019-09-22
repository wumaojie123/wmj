import request from '@/utils/request'

// 查询代理商和商家列表
export function getDeviceList() {
  return request({
    url: '/rest/analysis/agentAndMerchant',
    method: 'get'
  })
}
export function getAuthUrl(param) {
  return request({
    url: '/rest/officialAccounts/getAuthUrl',
    method: 'get',
    params: param
  })
}
export function getAllResult() {
  return request({
    url: '/rest/charging/wechatThirdConfig/getAllResult',
    method: 'get'
  })
}
export function queryAgentOperateLog(param) {
  return request({
    url: '/rest/operatelog/queryAgentOperateLog',
    method: 'get',
    params: param
  })
}
export function updateConfig(data) {
  return request({
    url: '/rest/charging/wechatThirdConfig/updateConfig',
    method: 'post',
    data
  })
}
export function authTypes() {
  return request({
    url: '/rest/charging/wechatThirdConfig/authTypes',
    method: 'get'
  })
}

/**
* modify by lss 20190911
* 解绑公众号
*/
export function deleteAuthorization(params) {
  return request({
    url: '/rest/factory/deleteAuthorization',
    method: 'get',
    params
  })
}