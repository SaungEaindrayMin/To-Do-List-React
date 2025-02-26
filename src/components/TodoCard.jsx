import React from "react";

const TodoCard = (props) => {
  const { todo, handlerDeleteTodo, todoList, handlerCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
        onClick={() => {
          handlerCompleteTodo(todoList)
        }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handlerDeleteTodo(todoList);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;