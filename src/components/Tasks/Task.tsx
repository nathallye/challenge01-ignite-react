import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  description: string;
  onDeleteTask: (id: string) => void;
}

export const Task = ({ id, description, onDeleteTask }: TaskProps) => {

  const handleDeleteTask = () => {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
        />
        <span>{description}</span>
      </div>

      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={20}/>
      </button>
    </div>
  )
}
