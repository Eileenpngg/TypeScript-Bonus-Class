import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
const App: React.FC = () =>{
  return (
    <>
      <ToDoForm />
      <ToDoList />
    </>
  );
}

export default App;
