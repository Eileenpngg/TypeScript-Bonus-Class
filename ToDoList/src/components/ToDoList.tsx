import SingleToDo from "./SingleToDo";
import { ToDo } from "../model";

type toDoListProps= {
  toDoList: ToDo[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
const ToDoList: React.FC<toDoListProps> = ({toDoList, setToDoList}) => {
  return (
    <>
    {toDoList.map((toDo)=>(<SingleToDo toDo={toDo} key={toDo.id} toDoList={toDoList} setToDoList={setToDoList}/>))
    }
    </>
  );
};
export default ToDoList;
