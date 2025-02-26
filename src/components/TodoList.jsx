import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos, selectedTab } = props;
  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter(val => val.complete)
      : todos.filter(val => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoList) => {
        return (
          <TodoCard key={todoList} todo={todo} todoList={todos.findIndex(val => val.input == todo.input)} {...props} />
        );
      })}
    </>
  );
};

export default TodoList;
