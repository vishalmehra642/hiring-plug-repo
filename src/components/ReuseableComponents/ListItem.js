import React from "react";

function ListItem({selected , id , iconClass , links , setSelected}) {
  return (
    <li
      className={`py-3 pl-2 cursor-pointer ${
        selected === id ? "bg-blue-100" : ""
      }`}
      key={id}
      onClick={() => setSelected(id)}
    >
      <i
        className={`${iconClass ? iconClass.toString() : ""} text-xl mr-3`}
      ></i>
      {links}
    </li>
  );
}

export default ListItem;
