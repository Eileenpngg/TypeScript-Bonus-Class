import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <>
      <ToDoForm />
      <ToDoList />
    </>
  );
}

export default App;
