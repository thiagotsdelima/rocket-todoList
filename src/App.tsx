import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { TaskList } from './components/TaskList'; 
import { ItemList } from './components/ItemList';

import './global.css';
import styles from './App.module.css';
import { HeaderList } from './components/HeaderList';

export interface Task {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [checkedTasksCounter, setCheckedTasksCounter] = useState(0);

  useEffect(() => {
    const count = tasks.reduce((total, task) => task.isChecked ? total + 1 : total, 0);
    setCheckedTasksCounter(count);
    console.log("Atualizando tarefas concluídas:", count, "de", tasks.length);
  }, [tasks]);

  function handleAddTask() {
    if (!inputValue.trim()) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(), 
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => {
      const newState = [...state, newTask];
      console.log("Adicionando tarefa, novo estado:", newState);
      return newState;
    });
    setInputValue('');
  }

  function handleRemove(id: number) {
    if (!window.confirm('Deseja realmente remover esta tarefa?')) {
      return;
    }

    const filteredTasks = tasks.filter((task) => task.id !== id);
    console.log(`Removendo tarefa ${id}, novo estado:`, filteredTasks);
    setTasks(filteredTasks);
  }

  function handleTaskCheck(id: number, value: boolean) {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? { ...task, isChecked: value } : task
    );

    console.log(`Alterando status da tarefa ${id} para ${value ? 'concluída' : 'não concluída'}, novo estado:`, updatedTasks);
    setTasks(updatedTasks);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <aside>
          <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          <Button onClick={handleAddTask}>Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" /></Button>
        </aside>
        <main>
        <HeaderList tasksCounter={tasks.length} checkedTasks={checkedTasksCounter} />
        <div className={`${styles.taskListContainer} ${tasks.length > 0 ? styles.taskListContainerWithMargin : ''}`}>
            {tasks.length > 0 ? (
              tasks.map(task => (
                <ItemList
                  key={task.id}
                  data={task}
                  removeTask={() => handleRemove(task.id)}
                  toggleTaskStatus={value => handleTaskCheck(task.id, value)}
                />
              ))
            ) : (
              <TaskList />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}