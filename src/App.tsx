import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

import styles from "./App.module.css";

import "./global.css";

const App = () => {
  //const [count, setCount] = useState(0)

  return (

    <div>
      <Header />
      <Tasks />
      {/*
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      */}
    </div>
  )
}

export default App;
