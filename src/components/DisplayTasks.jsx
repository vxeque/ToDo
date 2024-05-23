import React from "react";
import { useState } from "react";   

export default function DisplayTasks({id,  task, onComplete}) {
  const [compled, setCompled] = useState(false);
  const completTasks = () => {
    setCompled(!compled);
    onComplete(id, !compled);

  };

  return (
    <div
      className="p-3 rounded-xl m-3 bg-sky-400 cursor-pointer"
      onClick={completTasks}
    >
      <h3 className={compled ? "line-through" : ""}>{task}</h3>
    </div>
  );
}
