import styles from './styles.module.css'
import logoImg from '../../../assets/logo.svg'
import effectLeft from '../../../assets/effect-left.png'
import effectRight from '../../../assets/effect-right.png'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={effectLeft} alt="" className={styles.effectLeft} />
      <img src={logoImg} alt="GitHub Blog" />
      <img src={effectRight} alt="" className={styles.effectRight} />
    </header>
  )
} 
