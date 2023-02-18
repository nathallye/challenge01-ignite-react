import { ChangeEvent, FormEvent } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

interface FormProps {
  onCreateNewTask: (event: FormEvent) => void;
  onNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({ onCreateNewTask, onNewTaskChange }: FormProps) => {
  return (
    <form onSubmit={onCreateNewTask} className={styles.taskForm}>
      <input
        name="task"
        placeholder="Adicione uma nova tarefa"
        type="text"
        onChange={onNewTaskChange}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16}/>
      </button>
  </form>
  )
}
