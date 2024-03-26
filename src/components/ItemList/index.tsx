import styles from './styles.module.css';
import { Trash, Check } from '@phosphor-icons/react';
import { task } from '../../App'; 

interface Props {
  data: task; 
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

  const wrapperCheckbox = data.isChecked ? styles.checkboxMarked : styles.checkboxDesabilitado; 
  const wrapperParagraphChecked = data.isChecked ? styles.wrapperParagraphMarked : ''; 
  return (
    <ul className={`${styles.container} ${className || ''}`}>
      <li>
        <label htmlFor={`checkbox-${data.id}`} onClick={handleCheckedTasks}>
          <input id={`checkbox-${data.id}`} readOnly type="checkbox" checked={data.isChecked} /> 
          <span className={`${styles.checkbox} ${wrapperCheckbox}`}>
            {data.isChecked && <Check size={12} />} 
          </span>
        </label>
        <p className={`${styles.paragraph} ${wrapperParagraphChecked}`}>{data.text}</p> 
        <button onClick={handleRemove}>
          <Trash size={16} color="#808080" />
        </button>
      </li>
    </ul>
  );
}
