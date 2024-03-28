import styles from './styles.module.css';

interface Props {
  tasksCounter: number
  checkedTasks: number
}


export function HeaderList({tasksCounter, checkedTasks }: Props) {

  return (
    <header className={styles.container}>
        <aside>
          <p>Tarefas criadas</p>
          <span>{tasksCounter}</span>
        </aside>
        <aside>
          <p className={styles.wrapperButton}>Concluídas</p>
          <span>
            {tasksCounter === 0
              ? "0"
              : `${checkedTasks || 0} de ${tasksCounter}`}
          </span>
        </aside>
      </header>
  );
}
