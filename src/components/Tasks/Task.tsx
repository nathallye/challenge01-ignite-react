import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  description: string;
}

export const Task = ({ id, description }: TaskProps) => {
  return (
    <div className={styles.task}>
      <input
        className={styles.checkbox}
        type="checkbox"
      />
      <span>{description}</span>
      <Trash size={20}/>
    </div>
  )
}
