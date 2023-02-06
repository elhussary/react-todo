import styles from "./todoitems.module.scss";
import trash from "@/assets/trash.svg";
import edit from "@/assets/edit.svg";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { TodoContainer } from "../TodoContainer";

export const Todoitems: React.FC = () => {
  const { todos, setTodos } = useContext(AppContext);

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todos) => todos.id !== id));

    if (todos.length == 1) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  };

  const toggleCompleted = (id: string) => {
    const Todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(Todos);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <section key={todo.id} className={`${styles.todo}`}>
            <div>
              <ul className={`${styles.todo} ${styles.list}`}>
                <li>
                  <label htmlFor={todo.id} className={`${todo.completed ? "completed" : ""}`}>
                    <input type="checkbox" checked={todo.completed} id={todo.id} onChange={() => toggleCompleted(todo.id)} />
                    {todo.title}
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <ul className={`${styles.todo} ${styles.list}`}>
                <li>
                  <button>
                    <img src={edit} alt="edit todo" width={16} height={16} />
                  </button>
                </li>

                <li>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <img src={trash} alt="remove todo" width={16} height={16} />
                  </button>
                </li>
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
};
