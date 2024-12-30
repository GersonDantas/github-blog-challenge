import { GithubApiClient } from '../github-api-client'
import { HttpClient } from '../../protocols/http-client'
import { mockUser } from '../../../__mocks__/mock-github'

describe('GithubApiClient', () => {
  let sut: GithubApiClient
  let httpClientSpy: jest.Mocked<HttpClient>

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn()
    }
    sut = new GithubApiClient(httpClientSpy)
  })

  describe('getUser', () => {
    it('should call HttpClient with correct URL', async () => {
      await sut.getUser('any-username')
      expect(httpClientSpy.get).toHaveBeenCalledWith('users/any-username')
    })

    it('should return User data on success', async () => {
      httpClientSpy.get.mockResolvedValueOnce(mockUser)
      const user = await sut.getUser('any-username')
      expect(user).toEqual(mockUser)
    })
  })
}) 
