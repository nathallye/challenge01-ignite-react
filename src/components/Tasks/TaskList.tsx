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
      description: "Terminar desafio Ignite.",
      done: false,
    },
    {
      id: uuid(),
      description: "Limpar caxinha da coco.",
      done: true,
    },
  ]);

  const createNewTaskHandler = (descriptionNewTask: string) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        description: descriptionNewTask,
        done: false,
      },
    ]);
  };

  const taskDoneHandler = (id: string, done: boolean) => {
    const updatedTasks = [...tasks];

    const taskIndex = tasks.findIndex((task) => {
      return task.id === id;
    });

    const task = updatedTasks[taskIndex];
    task.done = done;

    setTasks(updatedTasks);
  };

  const deleteTaskHandler = (idTaskToDelete: string) => {
    const tasksDeletingOne = tasks.filter((task) => {
      return task.id !== idTaskToDelete;
    });

    setTasks(tasksDeletingOne);
  };

  const completedTasks = tasks.filter((task) => {
    return task.done;
  });

  return (
    <div className={styles.container}>
      <div>
        <Form onCreateNewTask={createNewTaskHandler} />

        <div className={styles.tasks}>
          <header>
            <div className={styles.tasksCreated}>
              <span>Tarefas criadas</span>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.tasksCompleted}>
              <span>Concuídas</span>
              <span>
                {completedTasks.length} de {tasks.length}
              </span>
            </div>
          </header>

          {tasks.length === 0 && (
            <div className={styles.content}>
              <img src={clipboard} alt="" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}

          {tasks.length !== 0 &&
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  onDeleteTask={deleteTaskHandler}
                  done={task.done}
                  onTaskDone={taskDoneHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
