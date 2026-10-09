type TodoItemProps = {
  id: number;
  text: string;
  onDeleteTodo: (id: number) => void;
};

function TodoItem({ id, text, onDeleteTodo }: TodoItemProps) {
  return (
    <li>
      {text}
      <button onClick={() => onDeleteTodo(id)} type="button">
        Видалити
      </button>
    </li>
  );
}
export default TodoItem;
