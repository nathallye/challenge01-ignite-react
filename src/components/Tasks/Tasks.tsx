import Form from "../Form";

import styles from "./Tasks.module.css";

import clipboard from "../../assets/clipboard.svg";

export const Tasks = () => {
  return (
    <div className={styles.container}>
      <div>
        <Form />

        <div className={styles.tasks}>
          <header className={styles.infos}>
            <div className={styles.tasksCreated}>
              <span>Tarefas criadas</span>
              <span>0</span>
            </div>
            <div className={styles.tasksCompleted}>
              <span>Concuídas</span>
              <span>0</span>
            </div>
          </header>

          <div className={styles.content}>
            <img src={clipboard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
