import React, { useState } from "react";

const TodoInput = (props) => {
  const { handlerAddTodo } = props;
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Add Tasks !"
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handlerAddTodo(inputValue);
          setInputValue("")
        }}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
