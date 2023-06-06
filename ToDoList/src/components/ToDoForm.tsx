function ToDoForm() {
  return (
    <>
      <div id="toDoForm">
        <label htmlFor="todoinput">Create a ToDo 📝</label>
        <input placeholder="e.g Sweep the floor" id="todoinput" size={40} />
        <button id="addToDo">Add To Do</button>
      </div>
    </>
  );
}
export default ToDoForm;
