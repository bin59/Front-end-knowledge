import api from './api.js'
import http from './http.js'
export function viewApi(data) {
  return http({
    methods: 'GET',
    params: data,
    url: api.view,
    responseType: 'blob',
  })
}
