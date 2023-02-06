import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { Todoitems } from "./todoitems/Todoitems";

export const TodoContainer: React.FC = () => {
  const { todos } = useContext(AppContext);
  const completedTodosNumbers = todos.filter((todo) => todo.completed === true).length;

  return (
    <article className={`container`} style={{ transform: "translateY(-3rem)" }}>
      <div className="actions">
        <p>
          Created tasks <span>{todos.length}</span>
        </p>

        <p>
          Completed
          <span>
            {completedTodosNumbers} of {todos.length}
          </span>
        </p>
      </div>

      {todos.length == 0 ? <p style={{ padding: "0 1rem", color: "gray" }}>Your Todo List is empty!</p> : <Todoitems />}
    </article>
  );
};
