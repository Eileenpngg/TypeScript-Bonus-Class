interface toDoProps {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}
const ToDoForm: React.FC<toDoProps> = ({ toDo, setToDo }) => {
  return (
    <>
      <div id="toDoForm">
        <label htmlFor="todoinput">Create a ToDo 📝</label>
        <input
          placeholder="e.g Sweep the floor"
          id="todoinput"
          size={40}
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button id="addToDo">Add To Do</button>
      </div>
    </>
  );
};

export default ToDoForm;
