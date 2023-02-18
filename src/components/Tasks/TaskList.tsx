import { ChangeEvent, FormEvent, useState } from "react";
import uuid from "react-uuid";

import { Form } from "../Form";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

import clipboard from "../../assets/clipboard.svg";

export const TaskList = () => {

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false
    },
    {
      id: uuid(),
      description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: true
    }
  ]);

  const handleCreateNewTask = (descriptionNewTask: string) => {
    setTasks([...tasks, {
      id: uuid(),
      description: descriptionNewTask,
      done: false
    }])
  }

  const deleteTask = (idTaskToDelete: string) => {
    const tasksDeletingOne = tasks.filter((task) => {
      return task.id !== idTaskToDelete;
    })

    setTasks(tasksDeletingOne);
  }

  return (
    <div className={styles.container}>
      <div>
        <Form
          onCreateNewTask={handleCreateNewTask}
        />

        <div className={styles.tasks}>
          <header>
            <div className={styles.tasksCreated}>
              <span>Tarefas criadas</span>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.tasksCompleted}>
              <span>Concuídas</span>
              <span>0</span>
            </div>
          </header>

          {tasks.length === 0 &&
            <div className={styles.content}>
              <img src={clipboard} alt="" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }

          {tasks.length !== 0 &&
            tasks.map((task) =>  {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  onDeleteTask={deleteTask}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
