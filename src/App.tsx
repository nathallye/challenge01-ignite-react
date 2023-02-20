import { useState } from "react";

import { Header } from "./components/Header";
import { TaskList } from "./components/Tasks";

import styles from "./App.module.css";

import "./global.css";

export const App = () => {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
};
