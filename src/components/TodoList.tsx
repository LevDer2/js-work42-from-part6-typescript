import TodoItem from "./TodoItem";
import type { Todo } from "../App";

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
};

function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}
export default TodoList;
