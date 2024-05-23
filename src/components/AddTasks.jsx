import React, { useState, useRef } from "react";
import DisplayTasks from "../components/DisplayTasks";
// import { preview } from "vite";

export default function AddTasks() {
  const [listTasksAdd, setListTaskAdd] = useState([]);
  const [inputTasks, setInputTasks] = useState("");

  // obtiene los datos del usuario
  const handleChange = (event) => {
    setInputTasks(event.target.value);
  };

  //guarda los datos del usuario
  const handleSubmit = () => {
    if (inputTasks.trim() != "") {
      const newTask = {
        id: Date.now(),
        text: inputTasks,
        completed: false,
      };
      setListTaskAdd((prevTask) => [...prevTask, newTask]);
    }
    setInputTasks("");
  };

  const handleDeleteTask = () => {
    const updateTasksFiltrer = listTasksAdd.filter(
      (task) => task.completed == false
    );
    setListTaskAdd(updateTasksFiltrer);
  };

  const handleTaskComplete = (id, completed) => {
    console.log(completed)
    const updateTasks = listTasksAdd.map((task) => {
      if (task.id === id) {
        // Actualizar el estado directamente aquí
        setListTaskAdd(prevTasks => {
          return prevTasks.map(prevTask => {
            if (prevTask.id === id) {
              return { ...prevTask, completed };
            }
            return prevTask;
          });
        });
        // Devolver la tarea actualizada
        return { ...task, completed };
      }
    });
    
    
  };

  return (
    <div className="w-full justify-center items-center px-16 ">
      <div className="">
        <input
          type="text"
          placeholder="Tarea nueva..."
          id=""
          value={inputTasks}
          className="m-6 p-3 rounded-lg w-full"
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-4 m-6">
          <button type="submit" className="bg-sky-600" onClick={handleSubmit}>
            Añadir tarea
          </button>
          <button className="bg-red-700" onClick={handleDeleteTask}>
            Borrar completados
          </button>
        </div>
      </div>

      <div className="rounded-xl p-4 m-10 bg-sky-800">
        {listTasksAdd.map((ObjectTask) => (
          <DisplayTasks
            onComplete={handleTaskComplete}
            key={ObjectTask.id}
            id={ObjectTask.id}
            task={ObjectTask.text}
          />
        ))}
      </div>
    </div>
  );
}
