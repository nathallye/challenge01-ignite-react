import uuid from "react-uuid";

import { Form } from "../Form";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

import clipboard from "../../assets/clipboard.svg";

const tasks = [
  {
    id: uuid(),
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  },
  {
    id: uuid(),
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  }
];

export const TaskList = () => {
  return (
    <div className={styles.container}>
      <div>
        <Form />

        <div className={styles.tasks}>
          <header>
            <div className={styles.tasksCreated}>
              <span>Tarefas criadas</span>
              <span>0</span>
            </div>
            <div className={styles.tasksCompleted}>
              <span>Concuídas</span>
              <span>0</span>
            </div>
          </header>

          { false &&
            <div className={styles.content}>
              <img src={clipboard} alt="" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }

          {tasks.map((task) =>  {
            return (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
