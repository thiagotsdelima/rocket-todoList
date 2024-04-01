import styles from './styles.module.css';
import { Trash, Check } from '@phosphor-icons/react';
import { Task } from '../../App';

interface Props {
  data: Task;
  className?: string;
  taskCheck: ({ id, value }: { id: number; value: boolean }) => void;
  remove: (id: number) => void;
}

export function ItemList({ data, remove, taskCheck }: Props) {
  
  function handleCheckedTasks() {
    if (typeof taskCheck === "function") {
      taskCheck({ id: data.id, value: !data.isChecked });
    } else {
      console.error("taskCheck is not a function");
    }
  }
  

  function handleRemove() {
    remove(data.id);
  }
  

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor={`checkbox-${data.id}`} onClick={handleCheckedTasks}>
          <input 
            id={`checkbox-${data.id}`} 
            type="checkbox" 
            checked={data.isChecked} 
            readOnly
          />
          <span 
            className={`${styles.checkbox} ${data.isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}`}>
            {data.isChecked && <Check size={12} color="white" />}
          </span>
        </label>
      </div>
      <p className={`${styles.paragraph} ${data.isChecked ? styles.paragraphChecked : ''}`}>{data.text}</p>
      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
