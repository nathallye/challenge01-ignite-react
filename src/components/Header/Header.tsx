import styles from "./Header.module.css";

import rocket from "../../assets/rocket.svg";
import todoLogo from "../../assets/todo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Logotipo da Rocketseat" />
      <img src={todoLogo} alt="Logotipo do ToDo List"/>
    </header>
  )
}

export default Header;
