import React from 'react'

const Header = (props) => {
  const {todos} = props;
  const todosLength = todos.length;
  const todosPlural = todosLength != 1;
  const isTodosPlural = todosPlural ? "Tasks" : 'Task'
  return (
    <header>
      <h1 className='text-gradient'>You have {todosLength} open {isTodosPlural}</h1>
    </header>
  )
}

export default Header