import { useState, useEffect } from 'react'
import { User } from '../../domain/models/user'
import { Post } from '../../domain/models/post'
import { LoadUserProfile } from '../../domain/usecases/load-user-profile'
import { LoadBlogPosts } from '../../domain/usecases/load-blog-posts'

export function useGithubBlog(
  loadUserProfile: LoadUserProfile,
  loadBlogPosts: LoadBlogPosts
) {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const userData = await loadUserProfile.load('your-username')
        const postsData = await loadBlogPosts.loadAll()
        setUser(userData)
        setPosts(postsData)
      } catch (err) {
        setError('Erro ao carregar dados')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { user, posts, loading, error }
} 
