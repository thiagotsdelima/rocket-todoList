import styles from './styles.module.css';
import { Trash, Check } from '@phosphor-icons/react';
import { Task } from '../../App'; 

interface Props {
  data: Task; 
  className?: string;
  taskCheck: ({ id, value }: { id: number; value: boolean }) => void;
  remove: (id: number) => void; 
}

export function ItemList({ data, remove, taskCheck, className }: Props) {

  function handleCheckedTasks() {
    taskCheck({ id: data.id, value: !data.isChecked }); 
  }

  function handleRemove() {
    remove(data.id);
  }

  const wrapperCheckbox = data.isChecked ? styles.checkboxChecked : styles.checkboxUnchecked;
  const wrapperParagraphChecked = data.isChecked ? styles.wrapperParagraphMarked : ''; 
  return (
    <div className={styles.container}>
    <div>
      <label htmlFor={`checkbox-${data.id}`}>
        <input 
          id={`checkbox-${data.id}`} 
          type="checkbox" 
          readOnly 
          checked={data.isChecked} 
          onClick={handleCheckedTasks} 
        />
        <span className={`${styles.checkbox} ${wrapperCheckbox}`}>
          {data.isChecked && <Check size={12} color="white" />} 
        </span>
      </label>
      </div>
        <p className={`${styles.paragraph} ${wrapperParagraphChecked}`}>{data.text}</p> 
        <button onClick={handleRemove}>
          <Trash size={16} color="#808080" />
        </button>
      </div>
  );
}
