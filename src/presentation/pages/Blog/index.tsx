import { makeLoadUserProfile } from '../../../main/factories/load-user-profile'
import { useGithubBlog } from '../../hooks/useGithubBlog'
import { Profile } from '../../components/Profile'
import { PostList } from '../../components/PostList'
import { SearchForm } from '../../components/SearchForm'
import styles from './styles.module.css'
import { makeLoadBlogPosts } from '../../../main/factories/load-blog-posts'

export function Blog() {
  const { user, posts, loading, error } = useGithubBlog(
    makeLoadUserProfile(),
    makeLoadBlogPosts()
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.container}>
      {user && <Profile user={user} />}
      <SearchForm />
      <PostList posts={posts} />
    </div>
  )
} 
