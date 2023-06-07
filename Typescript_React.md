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

Now we can start to create our `ToDoForm` component. 

```javascript
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
```

Create `ToDo` component
```javascript
function ToDo() {
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
}
export default ToDo;
```

Create `ToDoList` component and add ToDo as a child
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

Lets create a ToDo 
---INSERT CODE FOR TODO----

ToDoList
---INSERT CODE FOR TODOLIST----

React component Syntax 
                     
In React where we use Javascript, you can recall a functional componenent looks like this: 

```typescript
const App =(props)=>{
const count =1
return(
<>
</>
)
}
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

