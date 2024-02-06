import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
      <h1>Welcome to home component</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
