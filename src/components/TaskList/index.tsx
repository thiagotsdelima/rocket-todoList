import styles from './styles.module.css';
import imageIcon from '../../assets/Clipboard.svg';

export function TaskList() {
  return (
    <div className={styles.container}>
      <img src={imageIcon} alt="ícon" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
