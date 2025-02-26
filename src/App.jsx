import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first to do !", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handlerAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveTodo(newTodoList)
  }

  function handlerCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveTodo(newTodoList)

  }

  function handlerDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex != index;
    });
    setTodos(newTodoList);
    handleSaveTodo(newTodoList)

  }

  function handleSaveTodo(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handlerDeleteTodo={handlerDeleteTodo}
        handlerCompleteTodo={handlerCompleteTodo}
      />
      <TodoInput handlerAddTodo={handlerAddTodo} />
    </>
  );
};

export default App;
