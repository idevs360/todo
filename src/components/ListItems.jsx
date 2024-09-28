import React from "react";
import style from "../css/ListItems.module.css";

export default function ListItems(prop) {
  return (
    <div>
      <ul>
        <li>
          {prop.itemName}
          <i
            className="fa-solid fa-trash-can"
            onClick={() => {
              prop.deleteTodo(prop.index);
            }}
          ></i>
        </li>
      </ul>
    </div>
  );
}
