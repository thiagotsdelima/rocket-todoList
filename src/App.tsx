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

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  function handleRemoveTask(id: number) {
    if (!window.confirm('Deseja realmente remover esta tarefa?')) {
      return;
    }

    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }
  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    console.log(`Toggling task ${id} to ${value}`);
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: value } : task
    );
  
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
                  remove={handleRemoveTask} 
                  taskCheck={handleToggleTask} 
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
