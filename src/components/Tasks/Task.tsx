import { useState } from "react";
import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  description: string;
  done: boolean;
  onTaskDone: (id: string, done: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export const Task = ({ id, description, done, onTaskDone, onDeleteTask }: TaskProps) => {

  const [taskDone, setTaskDone] = useState(done);

  const taskDoneHandler = () => {
    onTaskDone(id, !taskDone);
    setTaskDone(!taskDone);
  } 

  const deleteTaskHandler = () => {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={taskDoneHandler}
        checked={taskDone}
      />

      <span className={taskDone ? styles.checked : ""}>{description}</span>

      <button onClick={deleteTaskHandler} title="Deletar tarefa">
        <Trash size={20}/>
      </button>
    </div>
  )
}
