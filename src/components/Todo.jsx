import React, { useState } from "react";

function Todo(props) {
  const [isChecked, setChecked] = useState(false);
  const toggleCheck = () => {
    setChecked(!isChecked);
    props.onRemove(props.id);
  };
  return (
    <li className="list-group-item list-group-item-light todo-item">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        onChange={toggleCheck}
      />
      <label className="form-check-label" for={props.value}>
        {props.value}
      </label>
    </li>
  );
}

export default Todo;
