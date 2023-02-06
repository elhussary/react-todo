import { Navbar } from "@/components/layouts/navbar/Navbar";
import { Form } from "@/components/ui/todo/form/Form";
import { TodoContainer } from "@/components/ui/todo/TodoContainer";
import { AppContext, ITodos } from "@/context/AppContext";
import { useEffect, useMemo, useRef, useState } from "react";

class Todo implements ITodos {
  constructor(public id: string, public title: string, public completed: boolean) {}

  static set saveTodos(todo: ITodos[]) {
    localStorage.setItem("todos", JSON.stringify(todo));
  }

  static get getTodos() {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  }
}
const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const providerValue = useMemo(() => ({ todos, setTodos }), [todos, setTodos]);

  // Load & Save Todos to localStorage
  useEffect(() => {
    if (!Todo.getTodos) {
      Todo.saveTodos = [];
    } else {
      setTodos(Todo.getTodos);
    }
  }, []);
  useEffect(() => {
    if (todos.length > 0) {
      Todo.saveTodos = todos;
    }
  }, [todos]);

  // Create a new Todo
  const CreateTodo = (event: React.FormEvent) => {
    event.preventDefault();
    inputRef.current?.value ? setTodos([...todos, new Todo(Date.now().toString(), inputRef.current.value, false)]) : alert("Todo can't be empty");
    inputRef.current!.value = "";
  };

  return (
    <AppContext.Provider value={providerValue}>
      <Navbar />
      <Form inputRef={inputRef} CreateTodo={CreateTodo} />
      <TodoContainer />
    </AppContext.Provider>
  );
};
export default App;
