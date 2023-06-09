import "./App.css";
import React, { useState } from "react";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

import { ToDo } from "./model";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      setToDoList([
        ...toDoList,
        { id: Date.now(), task: toDo, completed: false },
      ]);
      setToDo("");
    }
  };
  console.log(toDoList);
  return (
    <>
      <ToDoForm toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList />
    </>
  );
};

export default App;
