import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

export const Form = () => {
  return (
    <form className={styles.taskForm}>
      <input
        name="task"
        placeholder="Adicione uma nova tarefa"
        type="text"
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16}/>
      </button>
  </form>
  )
}
