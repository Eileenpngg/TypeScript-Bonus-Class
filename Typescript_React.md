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

  c) We are going to do the same for the `ToDo` component
  ```javascript
  const ToDo: React.FC = () => {
    return (
      <>
        <div id="toDo">
          <p>Hellooooo</p>
          <div>
            <button className="toDoButton">❌</button>
            <button className="toDoButton">✔️</button>
          </div>
        </div>
      </>
    );
  };
  export default ToDo;

  ```

  d) Create `ToDoList` component and add ToDo as a child
  ```javascript
  import ToDo from "./ToDo";
  function ToDoList() {
    return (
      <>
        <ToDo />
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

  a) We would need to create a `toDoList` and `setToDoList` as our state in our `App.tsx` with an initial state of `[]` and type of array of ToDo
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
  b) Since our `toDoList` has a type of array of `toDos`, we can create a `model.ts` file that stores an interface of `ToDo`
  ```typescript 
  export interface ToDo{
    id: number;
    task: string; 
    completed: boolean;
  }
  ```
  c) Now we would need a something to add the ToDo to the ToDoList, we can create a `handleAdd` function in our `App.tsx`
  ```typescript
  handleAdd=()=>{}
  
  
  ```
  









When we use Typescript using React, there isnt much difference between that using Javascript in React. 

In React Typescript the biggest difference between normal React, you would be required **type your props** and **declare an Interface for all your props**

```typescript
const App: React.FC<App Props>=(props)=>{
const count =1
return(
<>
</>)
}
```

Interface AppProps{ hello: String }

### Hooks  
  
> Note: When importing components always remember to mention the **file extension**

Demo what happens when you try to add another prop -> it will show an error that there isnt this prop in your interface
Can explain how interface lets people know what props are coming in 
Import browserRouter from react dom under main and wrap app 

