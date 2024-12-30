import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader'
import styles from './styles.module.css'
import { PostContent } from './components/PostContent';

export function Post() {
  const { number } = useParams()

  return (
    <main className={styles.container}>
      <PostHeader />
      <PostContent />
    </main>
  )
} 
