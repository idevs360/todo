import React, { useState } from "react";
import style from "../css/TodoInput.module.css";

function TodoInput(prop) {
  const [input, setInput] = useState('');
  return (
    <div className={style.mainContainer}>
      <input type="text" 
      placeholder="Enter your todo ..." 
      value={input || ""}
      onChange={e=>{setInput(e.target.value)}}   
      
      onKeyDown={e=>{
        if(e.key==='Enter'){
            prop.listItem(input)
            setInput('')
        }
      }}
      />
      <button
        onClick={()=>{
            prop.listItem(input)
            setInput('')
        }}
      >+</button>
    </div>
  );
}

export default TodoInput;
