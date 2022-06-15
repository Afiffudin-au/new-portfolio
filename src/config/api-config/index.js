export const api_config = {
  //For basic auth using .env file
  USERNAME: process.env.REACT_APP_USERNAME,
  PASSWORD: process.env.REACT_APP_PASSWORD,

  //Personal portfolio
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_VERSION: process.env.REACT_APP_API_VERSION,

  //GITHUB
  GITHUB_API_KEY: process.env.REACT_APP_GITHUB_AUTH,
  GITHUB_ACCEPT: process.env.REACT_APP_GITHUB_ACCEPT,
}

export const headers_auth_personal_portfolio = {
  Authorization: `Basic ${btoa(
    `${api_config.USERNAME}:${api_config.PASSWORD}`
  )}`,
}
export const header_auth_github = {
  Authorization: `Basic ${api_config.GITHUB_API_KEY}`,
  Accept: api_config.GITHUB_ACCEPT,
}
