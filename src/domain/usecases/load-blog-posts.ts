import { Post } from '../models/post'

export interface LoadBlogPosts {
  loadAll: (query?: string) => Promise<Post[]>
  loadByNumber: (number: number) => Promise<Post>
} 
