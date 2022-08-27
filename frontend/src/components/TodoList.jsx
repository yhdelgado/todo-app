import React, { useState, useEffect } from 'react'
import { TodoItem } from './TodoItem'
import * as API from '../services/todos'

export function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getAllTodos()
    }, [deleteTodo])

    function getAllTodos() {
        API.getAllTodos().then(setTodos)
    }

    function deleteTodo(todoId) {
        API.deleteTodo(todoId)
    }

    return (
        <>
            <section>
                {
                    todos.map((todo) => (
                        < TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                    ))
                }
            </section>
        </>
    );
}