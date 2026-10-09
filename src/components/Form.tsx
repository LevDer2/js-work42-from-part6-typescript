import { useState, type SubmitEvent, type ChangeEvent } from "react";

type FormProps = {
    onAddTodo: (text: string) => void
}

function Form({ onAddTodo }: FormProps) {
  const [task, setTask] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() === "") {
      return;
    }
    onAddTodo(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Введіть задачу"
      />
      <button type="submit">Додати</button>
    </form>
  );
}
export default Form;
