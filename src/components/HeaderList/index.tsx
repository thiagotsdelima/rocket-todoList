import styles from './styles.module.css';

interface Props {
  tasksCounter: number
  checkedTasks: number
}


export function HeaderList({tasksCounter, checkedTasks }: Props) {

  const asideStyle = {
    minWidth: tasksCounter > 0 ? '180px' : '150px',
  };

  return (
    <header className={styles.container}>
        <aside style={asideStyle}>
          <p>Tarefas criadas</p>
          <span>{tasksCounter}</span>
        </aside>
        <aside style={asideStyle}>
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

