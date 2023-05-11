import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

const App = () => {
  return (
    <div className="App">
      <h1 className="header">
      App
      </h1>
      <AddTodo/>
      <TodoList/>
      </div>
  )
}

export default App