## Typescript With React 

<img width="937" alt="Screenshot 2023-06-05 at 2 56 54 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/4f6a9bed-55b5-41e3-ac0e-ec1df3c70525">

To demonstrate the difference between using Javascript and Typescript in React, we would be creating a To-Do List. 


------INSERT IMAGE OF TO DO LIST----------


1) First lets create the components and UI for the To-Do list. We would need 3 components: 
- A ToDo component
- A ToDoList component
- A ToDoForm component

  a) Create a vite project 

  In your tsconfig make the following changes 
  -  change `"moduleResolution": "bundler"` to `"moduleResolution": "node"`
  -  change `"resolveJsonModule"` to `"allowJs": true`
  -  add `"allowSyntheticDefaultImports": true`

  b) Now we can start to create our `ToDoForm` component. In Typescript, we need should always specify the return type whenever possible, hence for our component we would import `React` and be using using `React:FC` as our return type as shown below.
  > Note that if you are using the keyword `function` instead of arrow function, you should be specifiying `JSX.Element` as your return type instead

  ```javascript
  const ToDoForm: React.FC=()=> {
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
  ```

  c) We are going to do the same for the `SingleToDo` component
  ```javascript
  const SingleToDo: React.FC = () => {
    return (
      <>
        <form id="toDo">
          <p>Hellooooo</p>
          <div>
            <button className="toDoButton">❌</button>
            <button className="toDoButton">✔️</button>
          </div>
        </form>
      </>
    );
  };
  export default SingleToDo;

  ```

  d) Create `ToDoList` component and add ToDo as a child
  ```javascript
  import SingleToDo from "./SingleToDo";
  function ToDoList() {
    return (
      <>
        <SingleToDo />
      </>
    );
  }
  export default ToDoList;

  ```

  e) Now lets add the `ToDoForm` and `ToDoList` under our `App.tsx` like this:
  ``` typescript 
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
  ```

2) Now, we want to capture the value when a user types in a To-Do. 

  a) To do that, first we need to create a `toDo` state in the `App.tsx` with a `" "` as the inital state and specify the type of our `toDo` by setting the `toDo` state to have a type of `string`

  ```typescript 
  import "./App.css";
  import { useState } from "react";

  import ToDoForm from "./components/ToDoForm";
  import ToDoList from "./components/ToDoList";

  const App: React.FC = () => {
    const [toDo, setToDo] = useState<string>("");

    return (
      <>
        <ToDoForm />
        <ToDoList />
      </>
    );
  };

export default App;
```
  
  b) Next, we will pass down the `toDo` and `setToDo` as props to `ToDoForm`

  ```typescript 
  import "./App.css";
  import { useState } from "react";

  import ToDoForm from "./components/ToDoForm";
  import ToDoList from "./components/ToDoList";

  const App: React.FC = () => {
    const [toDo, setToDo] = useState<string>("");
    return (
      <>
        <ToDoForm toDo={toDo} setToDo={setToDo}/>
        <ToDoList />
      </>
    );
  };

export default App;
```
  You will then see this error when passing it down as props, this means that the prop does not exist on `toDoForm`

  ![Screenshot 2023-06-08 at 12 42 07 AM](https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/56edd106-b258-45cd-9a93-6d1b14378b52)

  Now once youve added the props in `toDoForm` you would need to create an interface called `toDoProps` which contains `toDo` and `setToDo`.

  We know that `toDo` has a type of string, but what about `setToDo`?

  To find the type for `setToDo`, we can simply hover over it and we would see it has a type of `React.Dispatch<React.SetStateAction<string>>`!

  [Uploading Screenshot 2023-06-08 at 1.51.16 PM.png…]()

  Now we can add the interface as a type to the `toDoForm` component like this:
  ``` typescript
  interface toDoProps{
    toDo: string, 
    setToDo: React.Dispatch<React.SetStateAction<string>>
  }
  const ToDoForm: React.FC<toDoProps>=({toDo, setToDo})=> {
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
```

  c) Add a onChange which setToDo to the value typed in and set the 

3) Next, when a user clicks "Add To Do" we want to add the To-Do to the list of To-Dos

  a) We would need to create a `toDoList` and `setToDoList` as our state in our `App.tsx` with a type of array of ToDo
  
  Since our `toDoList` has a type of array of `toDos`, we can create a `model.ts` file that stores an interface of `ToDo`
  ```typescript 
  export interface ToDo{
    id: number;
    task: string; 
    completed: boolean;
  }
  ```
  Next, we can create the `toDoList` with an initial state of `[]` and type it as an array of ToDo by importing the interface `ToDo`
  ```typescript 
  import "./App.css";
  import { useState } from "react";

  import ToDoForm from "./components/ToDoForm";
  import ToDoList from "./components/ToDoList";
  
  import {ToDo} from "./model";
  
  const App: React.FC = () => {
    const [toDo, setToDo] = useState<string>("");
    const [toDoList, setToDoList]= useState<ToDo[]>([])
    return (
      <>
        <ToDoForm toDo={toDo} setToDo={setToDo}/>
        <ToDoList />
      </>
    );
  };

export default App;
```

  c) Now we would need a something to add the ToDo to the ToDoList, we can create a `handleAdd` function that accepts a `e` with a type of `React.FormEvent` in our `App.tsx`, it should check if there is anything in `toDo` and add it to `toDoList` before      setting `toDo` back to `""`.
     We then pass it down as props to our `ToDoForm`.
  ```typescript
  import "./App.css";
  import { useState } from "react";

  import ToDoForm from "./components/ToDoForm";
  import ToDoList from "./components/ToDoList";

  import { ToDo } from "./model";

  const App: React.FC = () => {
    const [toDo, setToDo] = useState<string>("");
    const [toDoList, setToDoList]= useState<ToDo[]>([])

    const handleAdd=(e: React.FormEvent)=>{
      e.preventDefault()
      if (toDo) {
      setToDoList([...toDoList,{ id: Date.now(), task: toDo, completed: false }]);
      setToDo("");
    }
    }
    return (
      <>
        <ToDoForm toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
        <ToDoList />
      </>
    );
  };

  export default App;
  ```
  
  d) In our `ToDoForm`, we need to accept the `handleAdd` as a prop and add it to our interface of `toDoProps`, then call the `handleAdd` `onSubmit` in the form

  ```typescript
  interface toDoProps {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }
  
  const ToDoForm: React.FC<toDoProps> = ({ toDo, setToDo, handleAdd }) => {
    return (
      <>
        <form className="toDoInput" onSubmit={handleAdd}>
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
        </form>
      </>
    );
  };

  export default ToDoForm;
  ```
  
  e) Now lets console.log `toDoList` and you can see that everytime you submit a To-Do, it will be added in to the `toDoList`
  
<img width="1224" alt="Screenshot 2023-06-10 at 7 35 40 AM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/3589e3bf-90d0-4a5d-8de0-0ffa528d933d">

4) Now we need to display the list of To-Dos 

a) Pass `toDoList` down as props from `App` to `ToDoList`
```typescript
<ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
```

b) Accept the `toDoList` and `setToDoList` as props and create an interface type for the props. 

c) Map the `toDoList` and set the `key` as `toDo.id` and pass it down as props to `SingleToDo` along with `toDoList` and `setToDoList`
```typescript 
import SingleToDo from "./SingleToDo";
import { ToDo } from "../model";

interface toDoListProps {
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
```

d) In SingleToDo, accept the props and create a type interface for the props. Add `toDo.task` into the div and it should display on the page!
```typescript
import { ToDo } from "../model";
type singleToDoProps = {
  toDo: ToDo;
  toDoList: ToDo[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
};
const SingleToDo: React.FC<singleToDoProps> = ({toDo, toDoList, setToDoList}) => {
  return (
    <>
      <div id="toDo">
        <p>{toDo.task}</p>
        <div>
          <button className="toDoButton">❌</button>
          <button className="toDoButton">✔️</button>
        </div>
      </div>
    </>
  );
};
export default SingleToDo;
```
<img width="1156" alt="Screenshot 2023-06-11 at 2 31 20 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/91e34f3a-52d2-452c-a14c-c7c4ed992958">

### Deleting the ToDos

a) Create a `handleDelete` function in `SingleToDo.tsx` that accepts a id as a parameter and filters the toDolist and return toDos that doesnt match the id
```typescript
const handleDelete = (id: number) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };
```

b) Add a onClick event that fires off the `handleDelete` and passes `toDo.id` as a parameter.

```typescript
return (
    <>
      <div id="toDo">
        <p>{toDo.task}</p>
        <div>
          <button className="toDoButton" onClick={() => handleDelete(toDo.id)}>
            ❌
          </button>
          <button className="toDoButton">✔️</button>
        </div>
      </div>
    </>
  );
```

### Mark ToDo as Done

a) Create a `handleDone` function in `SingleToDo.tsx` that accepts an id as a parameter and maps the toDoList, if the toDo matches the id, it changes the value of `toDo.completed`

```typescript 
  const handleDone = (id: number) => {
    setToDoList(
      toDoList.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };
```

b) Add a `onClick` event that fires off the `handleDone` and passes `toDo.id` as a parameter.
```typescript 
 return (
    <>
      <div id="toDo">
        {toDo.completed ? <s>{toDo.task}</s> : <p>{toDo.task}</p>}

        <div>
          <button className="toDoButton" onClick={() => handleDelete(toDo.id)}>
            ❌
          </button>
          <button className="toDoButton" onClick={() => handleDone(toDo.id)}>
            ✔️
          </button>
          <button className="toDoButton" onClick={() => }>✏️</button>
        </div>
      </div>
    </>
  );
```

### Edit ToDo 
a) Create a state `editing` and `setEditing` with a type of boolean and a inital value of false
```typescript 
const [editing, setEditing] = useState<boolean>(false)
```

b) Create a state `editToDo` and `setEditToDo` with a type of string and a inital value of `toDo.task`
```typescript 
  const [editToDo, setEditToDo] = useState<String>(toDo.task)
```

c) Add a `onClick` event that checks only if the toDo is **NOT** completed and `editing` is true
```typescript
    onClick={() => {
      if (!editing && toDo.completed) {
        setEditing(true);
      }
    }}
```

d) Show the input box instead of the task only when `editing` is true. The inout box should have a value of `editToDo` and an onChange that `setEditToDo` 
```typescript
return (
    <>
      <form id="toDo">
        {toDo.completed ? <s>{toDo.task}</s> : <p>{toDo.task}</p>}

        <div>
          <input
            value={editToDo}
            onChange={(e) => setEditToDo(e.target.value)}
          />
          <button className="toDoButton" onClick={() => handleDelete(toDo.id)}>
            ❌
          </button>
          <button className="toDoButton" onClick={() => handleDone(toDo.id)}>
            ✔️
          </button>
          <button
            className="toDoButton"
            onClick={() => {
              if (!editing && toDo.completed) {
                setEditing(true);
              }
            }}
          >
            ✏️
          </button>
        </div>
      </form>
    </>
```

e) To allow the user press enter to edit To-do after they finish editing, on the `form` we will add a `handleEdit` function that accepts an `event` and `toDo.id` as parameter
```typescript 
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

```

So if you can see, when we use Typescript in React, there isnt much difference between that using Javascript in React.  

Hooray! Now you have createda a ToDoList app using React!

![](https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif)




