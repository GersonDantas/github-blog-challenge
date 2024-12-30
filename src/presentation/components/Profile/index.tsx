import { User } from '../../../domain/models/user'
import styles from './styles.module.css'

interface ProfileProps {
  user: User
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className={styles.profileContainer}>
      <img src={user.avatar_url} alt={user.name} />
      <div className={styles.profileInfo}>
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
        <div className={styles.profileStats}>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <span>{user.company}</span>
          <span>{user.followers} seguidores</span>
        </div>
      </div>
    </div>
  )
} 
