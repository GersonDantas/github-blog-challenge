import { Post } from '../models/post'

export interface LoadBlogPosts {
  loadAll: () => Promise<Post[]>
  loadByNumber: (number: number) => Promise<Post>
} 
