import styles from './styles.module.css'

import { Trash, Check } from '@phosphor-icons/react'


interface PostProps {
  className?: string;
  content: string;
}

export function itemList(props: PostProps) {
  return (
    <label htmlFor="checkbox" onClick={handleTaskToggle}>
    <input readOnly type="checkbox" checked={data.isChecked} />
    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
      {data.isChecked && <Check size={12} />}
    </span>
    <ul className={styles.conteiner}>
      <li>
        <p className={props.className}>{props.content}</p>
      </li>
    </ul>
    <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
    </button>
  );
}
