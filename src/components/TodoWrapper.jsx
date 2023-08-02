import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      {
        id: Date.now(), // Assign a unique identifier (timestamp) as the id
        task: todo,
        completed: false,
        isEditing: false,
      },
      ...prevTodos,
    ]);
  };

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} task={todo} />
      ))}
    </div>
  );
}
