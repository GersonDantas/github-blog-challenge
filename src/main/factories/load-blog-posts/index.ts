import { GithubApiClient } from '../../../infra/http/github-api/github-api-client'
import { AxiosHttpClient } from '../../../infra/http/axios-http-client'

export const makeLoadBlogPosts = () => {
  const httpClient = new AxiosHttpClient()
  return new GithubApiClient(httpClient)
} 
