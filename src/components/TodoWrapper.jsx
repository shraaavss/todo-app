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

    const toggleComplt = id => {
        setTodos(todos.map(todo =>
            todo.id === id ?
                { ...todo, completed: !todo.completed } : todo))
    }

    const delTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo key={todo.id} task={todo} 
                toggleComplt={toggleComplt} 
                delTodo={delTodo}/>
            ))}
        </div>
    );
}
