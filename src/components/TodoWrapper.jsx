import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

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

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ?
            { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, task, isEditing: !todo.isEditing} : todo))
    }


    return (
        <div className="todo-wrapper">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (

                    <Todo key={todo.id} task={todo}
                        toggleComplt={toggleComplt}
                        delTodo={delTodo}
                        editTodo={editTodo} />
                )
            ))}
        </div>
    );
}
