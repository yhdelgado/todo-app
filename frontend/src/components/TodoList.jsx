import React, { useState, useEffect } from 'react'
import { TodoItem } from './TodoItem'
import * as API from '../services/todos'

export function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getAllTodos()
    }, [])

    function deleteTodo(id) {

    }
    function getAllTodos() {
        API.getAllTodos().then(setTodos)
    }

    return (
        <>
            <section>
                {
                    todos.map((todo) => (
                        < TodoItem key={todo.id}{...todo} />
                    ))
                }
            </section>
        </>
    );
}