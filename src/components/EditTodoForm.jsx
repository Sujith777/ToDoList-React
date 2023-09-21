/* eslint-disable react/prop-types */
import { useState } from "react";

const EditTodoForm = ({ task, editTodo }) => {
  const [input, setInput] = useState(task.task);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(input, task.id);
    setInput("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-input"
        value={input}
        className="todo-input"
        placeholder="Update task"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
