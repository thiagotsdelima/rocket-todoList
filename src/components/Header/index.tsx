import styles from './styles.module.css';
import logoImage from '../../assets/Logo.png';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={logoImage} alt="Ignite logo" />
    </header>
  )
}