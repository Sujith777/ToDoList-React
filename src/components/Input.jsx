import React, { useState } from "react";

function Input(props) {
  const [todo, setTodo] = useState("");
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleClick = (event) => {
    props.onAdd(todo);
    setTodo("");
    event.preventDefault();
  };
  return (
    <form className="create-todo row d-flex align-items-center justify-content-center">
      <input
        className="col-auto"
        type="text"
        placeholder="Add a ToDo"
        name="todo"
        value={todo}
        onChange={handleChange}
      />
      <button
        className="btn btn-outline-primary col-auto"
        type="submit"
        onClick={handleClick}
      >
        <span>ADD</span>
      </button>
    </form>
  );
}

export default Input;
