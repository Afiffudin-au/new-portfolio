import { api_config } from '../../config/api-config'
import callAPI from '..'

export const getProjectAPI = async () => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/projects`
  const res = await callAPI({
    url,
    method: 'GET',
  })
  return res
}
export const getProjectDetailAPI = async (id) => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/projects/${id}`
  const res = await callAPI({
    url,
    method: 'GET',
  })
  return res
}
