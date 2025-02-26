// tab
// import React from "react";

// const Tabs = (props) => {
//   const { todos, selectedTab, setSelectedTab } = props;
//   const tabs = ["All", "Open", "Completed"];
//   return (
//     <nav className="tab-container">
//       {tabs.map((tab, tabIndex) => {
//         const numOfTasks =
//           tab === "All"
//             ? todos.length
//             : tab === "Open"
//             ? todos.filter((val) => !val.complete).length
//             : todos.filter((val) => val.complete).length;
//         return (
//           <button
//           onClick={() => {
//             setSelectedTab(tab);
//           }}
//             key={tabIndex}
//             className={
//               "tab-button" + (tab === selectedTab ? 'tab-selected' : '')
//             }
//           >
//             <h4>
//               {tab} <span>({numOfTasks})</span>
//             </h4>
//           </button>
//         );
//       })}
//     </nav>
//   );
// };

// export default Tabs;

// todolist
// import React from "react";
// import TodoCard from "./TodoCard";

// const TodoList = (props) => {
//   const { todos, selectedTab } = props;

//   const filterTodosList =
//     selectedTab === "All"
//       ? todos
//       : selectedTab === "Completed"
//       ? todos.filter((val) => val.complete)
//       : todos.filter((val) => !val.complete);
//   return (
//     <>
//       {filterTodosList.map((todo, todoIndex) => {
//         return <TodoCard key={todoIndex} todo={todo} />;
//       })}
//     </>
//   );
// };

// export default TodoList;

// TodoCard
// import React from 'react'

// const TodoCard = (props) => {
// const {todo} = props;
//   return (
//     <div className='card todo-item'>
//       <p>{todo.input}</p>
//       <div className='todo-buttons'>
//         <button disabled={todo.complete}>
//           <h6>Done</h6>
//         </button>
//         <button>
//           <h6>Delete</h6>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default TodoCard

// header
// import React from 'react'

// const Header = (props) => {
//   const {todos} = props;
//   const todosLength = todos.length;
//   const todosPlural = todosLength != 1;
//   const isTodosPlural = todosPlural ? 'tasks' : 'task';

//   return (
//     <header>
//       <h1 className='text-gradient'>You have {todosLength} open {isTodosPlural}</h1>
//     </header>
//   )
// }

// export default Header

// todoinput
// import React, { useState } from "react";
// const TodoInput = (props) => {
//   const { handelAddTodo } = props;
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <div className="input-container">
//       <input
//         type="text"
//         value={inputValue}
//         placeholder="Add Tasks"
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />

//       <button
//         onClick={() => {
//           if (!inputValue) {
//             return;
//           }
//           handelAddTodo(inputValue);
//           setInputValue("");
//         }}
//       >
//         <i class="fa-solid fa-plus"></i>
//       </button>
//     </div>
//   );
// };

// export default TodoInput;

// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoCard from "./components/TodoCard";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first to do !", complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handelAddTodo(newTodo) {
    const newTodosList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodosList);
  }

  function handleEditTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex != index;
    });
    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        selectedTab={selectedTab}
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoInput handelAddTodo={handelAddTodo} />
    </>
  );
};

export default App;
