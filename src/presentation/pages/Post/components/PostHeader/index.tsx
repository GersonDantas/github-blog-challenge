import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment, faChevronLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

export function PostHeader() {
  return (
    <div className={styles.postHeader}>
      <header>
        <Link to="/" className={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <a href="#" target="_blank" rel="noopener noreferrer">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>JavaScript data types and data structures</h1>
      
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </li>
      </ul>
    </div>
  )
} 
