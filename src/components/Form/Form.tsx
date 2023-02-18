import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

interface FormProps {
  onCreateNewTask: (descriptionNewTask: string) => void;
}

export const Form = ({ onCreateNewTask }: FormProps) => {

  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    setNewTaskDescription("");

    onCreateNewTask(newTaskDescription);
  }

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskDescription(event.target.value);
  }

  const isTaskDescriptionEmpty = newTaskDescription.length === 0;

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        name="task"
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={newTaskDescription}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit" disabled={isTaskDescriptionEmpty}>
        Criar <PlusCircle size={16}/>
      </button>
    </form>
  )
}
