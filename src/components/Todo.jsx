import React from "react";
import "./cssFiles/Todo.css";

export default function Todo({ task, toggleComplt, delTodo, editTodo }) {

  return (
    <div className="Todo">
      <p onClick={() => toggleComplt(task.id)}
      className={`${task.completed ? "completed" : ""}`}>{task.task}</p>

      <div>
        <span onClick={() => editTodo(task.id)}
        className="material-symbols-outlined">edit_note</span>
        
        <span onClick={() => delTodo(task.id)}
        className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
}
