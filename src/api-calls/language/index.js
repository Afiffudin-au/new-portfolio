import callAPI from '..'
import { api_config } from '../../config/api-config'

export const getLanguageAPI = async () => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/languages`
  const res = await callAPI({
    url,
    method: 'GET',
  })
  return res
}
