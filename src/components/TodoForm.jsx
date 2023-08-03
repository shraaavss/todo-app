import React, { useState } from "react";
import "./cssFiles/TodoForm.css";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim the input value to remove leading/trailing spaces
    const trimmedValue = value.trim();

    // Check if the input is not empty
    if (trimmedValue !== "") {
      addTodo(trimmedValue);
    }

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Enter your task!"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
