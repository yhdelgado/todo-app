import React from 'react'
import { useState } from 'react'
import { createTodo } from '../services/todos'

function TodoForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const todo = {
            "title": title,
            "description": description,
        }
        createTodo(todo);
        setTitle("")
        setDescription("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Título de la tarea'
                onChange={(e) => setTitle(e.target.value)} value={title} />
            <input type="textarea" placeholder='Descripción de la tarea' onChange={(e) => setDescription(e.target.value)} value={description} />
            <button>Guardar</button>
        </form>
    )
}

export default TodoForm