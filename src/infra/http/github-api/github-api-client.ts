import { HttpClient } from '../protocols/http-client'
import { User } from '../../../domain/models/user'
import { LoadUserProfile } from '../../../domain/protocols/load-user-profile'
import { LoadBlogPosts } from '../../../domain/protocols/load-blog-posts'
import { Post } from '../../../domain/models/post'

export class GithubApiClient implements LoadUserProfile, LoadBlogPosts {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly username: string = 'your-default-username'
  ) {}

  async getUser(username: string): Promise<User> {
    return this.httpClient.get<User>(`users/${username}`)
  }

  async load(): Promise<User> {
    return this.getUser(this.username)
  }

  async loadAll(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(`repos/${this.username}/blog/issues`)
  }

  async loadByNumber(number: number): Promise<Post> {
    return this.httpClient.get<Post>(`repos/${this.username}/blog/issues/${number}`)
  }
} 
