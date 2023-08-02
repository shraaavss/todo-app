import React from "react";
import "./cssFiles/Todo.css";

export default function Todo({ task }) {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>

      <div>
        <span className="material-symbols-outlined">edit_note</span>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
}
