import React from 'react'
import TodoWrapper from './components/TodoWrapper';
import './app.css';
import TodoWrapperLocalStorage from './components/TodoWrapperLocalStorage';

function App() {
  return (
    <div className={"app"}>
      {/* <TodoWrapper /> */}
      <TodoWrapperLocalStorage />
    </div>
  )
}

export default App
