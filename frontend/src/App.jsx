import { useState, useEffect } from 'react'
import * as API from './services/todos'
import { TodoList } from './components/TodoList'
import './App.css'
import TodoForm from './components/TodoForm'

function App() {

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}
export default App
