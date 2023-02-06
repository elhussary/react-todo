import { createContext } from "react";

export interface ITodos {
  id: string;
  title: string;
  completed: boolean;
}

type Todos = {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
};

export const AppContext = createContext({} as Todos);
