import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import "./cssFiles/TodoWrapper.css";

export default function TodoWrapper() {
    // Load todos from local storage on initial mount
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    // Save todos to local storage whenever the todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (task) => {
        setTodos((prevTodos) => [
            {
                id: Date.now(), // Assign a unique identifier (timestamp) as the id
                task,
                completed: false,
                isEditing: false,
            },
            ...prevTodos,
        ]);
    };

    const toggleComplt = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const delTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const delAll = () => {
        setTodos([])
    }

    return (
        <div className="todo-wrapper">
            <h1>Let's Get Things Done!</h1>

            <TodoForm addTodo={addTodo} />

            <button className="delAll" onClick={delAll}>Delete All</button>


            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        toggleComplt={toggleComplt}
                        delTodo={delTodo}
                        editTodo={editTodo}
                    />
                )
            )}
        </div>
    );
}

