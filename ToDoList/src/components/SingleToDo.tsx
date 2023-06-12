import React, { useState } from "react";
import { ToDo } from "../model";

type singleToDoProps = {
  toDo: ToDo;
  toDoList: ToDo[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleToDo: React.FC<singleToDoProps> = ({
  toDo,
  toDoList,
  setToDoList,
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.task);

  const handleDelete = (id: number) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };

  const handleDone = (id: number) => {
    setToDoList(
      toDoList.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  const handleEdit=(e: React.FormEvent, id:number)=>{
    e.preventDefault();
    setToDoList(toDoList.map((toDo)=> toDo.id===id? {...toDo, task: editToDo}: toDo))
    setEditing(false)
  }

  return (
    <>
      <form id="toDo" onSubmit={(e)=>handleEdit(e, toDo.id)}>
        {editing ? (
          <input
            value={editToDo}
            onChange={(e) => setEditToDo(e.target.value)}
          />
        ) : toDo.completed ? (
          <s>{toDo.task}</s>
        ) : (
          <p>{toDo.task}</p>
        )}

        <div>
          <button
            className="toDoButton"
            onClick={() => handleDelete(toDo.id)}
            type="button"
          >
            ❌
          </button>
          <button
            className="toDoButton"
            onClick={() => handleDone(toDo.id)}
            type="button"
          >
            ✔️
          </button>
          <button
            className="toDoButton"
            onClick={() => {
              if (!editing && !toDo.completed) {
                setEditing(true);
              }
            }}
            type="button"
          >
            ✏️
          </button>
        </div>
      </form>
    </>
  );
};
export default SingleToDo;
