import callAPI from '..'
import { api_config } from '../../config/api-config'

export const getTopicAPI = async () => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/topics`
  const res = await callAPI({
    url,
    method: 'GET',
  })
  return res
}
