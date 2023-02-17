import { useState } from "react";

import Header from "./components/Header";
import TaskList from "./components/TaskList";

import styles from "./App.module.css";

import "./global.css";

const App = () => {
  //const [count, setCount] = useState(0)

  return (

    <div>
      <Header />
      <TaskList />
      {/*
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      */}
    </div>
  )
}

export default App;
