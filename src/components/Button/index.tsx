import styles from './styles.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: Props) {
return (
  <button className={`${styles.container} ${styles.button}`} {...rest}>
      {children}
    </button>
)
}