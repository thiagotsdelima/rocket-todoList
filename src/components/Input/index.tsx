import styles from './input.module.css'


export function Input({...rest }: React.InputHTMLAttributes<HTMLInputElement>) {

  return (
    <input
      className={styles.container} 
      placeholder="Adicione uma nova tarefa"
      {...rest} 
    />
  );
}