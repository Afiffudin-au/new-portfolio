import axios from 'axios'
import { headers_auth_personal_portfolio } from '../config/api-config'
const callAPI = async ({ url, method, data }) => {
  const res = await axios({
    method: method,
    url: url,
    data: data,
    headers: headers_auth_personal_portfolio,
  }).catch((err) => err.response)
  if (res.status === 404) {
    return {
      error: true,
      message: `${res.status} ${res.statusText}`,
      data: null,
    }
  }
  if (res.status > 300) {
    return {
      error: true,
      message: res.data.message,
      data: null,
    }
  }
  const successRes = {
    error: false,
    message: res.data.message || 'Success',
    data: res.data,
  }
  return successRes
}
export default callAPI
