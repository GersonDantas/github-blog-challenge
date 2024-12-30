interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map(post => (
        <article key={post.number}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <time>{post.created_at}</time>
        </article>
      ))}
    </div>
  )
} 
