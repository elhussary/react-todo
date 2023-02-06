import reactLogo from "@/assets/react.svg";
import todoLogo from "@/assets/logo.svg";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" width={40} height={5} />
      </a>

      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" width={40} height={5} />
      </a>

      <a href="https://www.figma.com/file/TPpfCmc2zp61ww6SWGnOgd/ToDo-Tutorial?node-id=12%3A106" target="_blank">
        <img src={todoLogo} className="logo" alt="Todo logo" width={100} height={5} />
      </a>
    </nav>
  );
};
