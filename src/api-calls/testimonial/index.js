import { api_config } from '../../config/api-config'
import callAPI from '..'

export const getTestimonialAPI = async () => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/testimonials`
  const res = await callAPI({
    url,
    method: 'GET',
  })
  return res
}
