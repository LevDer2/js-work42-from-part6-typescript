import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

export type Todo = {
  id: number;
  text: string;
};

function App() {
  const [todos, setTodos] = useState <Todo[]>([
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Створити Todo App" },
    { id: 3, text: "Познайомитися з TypeScript" },
  ]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <h1>Todo</h1>
      <Form onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
}
export default App;
