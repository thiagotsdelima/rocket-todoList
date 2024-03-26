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
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasks} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
)
}