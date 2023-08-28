import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Input onAdd={addTodo} />
        <ul className="list-group">
          {todos.map((item, index) => {
            return (
              <Todo
                key={index}
                id={index}
                name="todo"
                value={item}
                onRemove={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
