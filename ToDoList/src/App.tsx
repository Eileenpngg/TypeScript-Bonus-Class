import "./App.css";
import { useState } from "react";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  return (
    <>
      <ToDoForm toDo={toDo} setToDo={setToDo} />
      <ToDoList />
    </>
  );
};

export default App;
