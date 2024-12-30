import { useState, useEffect } from 'react'
import { LoadUserProfile } from '../../domain/protocols/load-user-profile'
import { LoadBlogPosts } from '../../domain/protocols/load-blog-posts'
import { User } from '../../domain/models/user'
import { Post } from '../../domain/models/post'

export function useGithubBlog(
  loadUserProfile: LoadUserProfile,
  loadBlogPosts: LoadBlogPosts
) {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const [userData, postsData] = await Promise.all([
          loadUserProfile.load(),
          loadBlogPosts.loadAll()
        ])
        setUser(userData)
        setPosts(postsData)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [loadUserProfile, loadBlogPosts])

  return { user, posts, loading, error }
} 
