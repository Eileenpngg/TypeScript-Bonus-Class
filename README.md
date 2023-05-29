# TypeScript-Bonus-Class

![](https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif)
## What is typescript? 
Typescript is a "superset" of Javascript , and is **NOT** a standalone programming language. Everything you can do in Javascript can be done in Typescript but allows you to write your code with more precision through **static checking**. 
Typescript is all about typesafety!

> Static checking is when your code syntax is constantly being analyzed by the IDE instead of only upon running and compilation, thus identifiying **POTENTIAL** errors without needing to run the programme

### Benefits of typescript 
- Produces lesser error with runtime, due to precision
- Useful for bigger applications, easier to catch bugs 
- Bring scalability
- Makes code easier to maintain

### How does Typescript work

<img width="958" alt="Screenshot 2023-05-29 at 10 46 43 AM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/6759e3ab-0029-4399-81e8-403833041e85">

Typescript is compiled and is "converted" into Javascript creating a corresponding Javascript file.
> Typescript is a developmental tool, code still runs on Javascript!

## Installing Typescript
- Ensure node is installed -> node - -version
- On your terminal, npm install -g typescript (-g ensures the typescript is installed globally so we can use it anywhere)
- If windows/ linux, sometimes might need to add sudo in front
- Npx tsc

## Basics of Typescript 

### Variables 
Now lets assign the value Johnson to a name variable, since Johnson is a string, we should type the variable as a string
```typescript
//let variableName: type = value 
let name: string = "Johnson" 
```
> All types in Typescript is lowercase

---

<details>
<summary> What happens when you try to assign a number to the variable? </summary>
<br>
<img width="504" alt="Screenshot 2023-05-29 at 1 18 26 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/1468a657-b945-43ee-b378-c1d0c8925ab1">
  
It will cause the error above because the variable is of type string and is expecting a string as a value instead of a number

</details>

---

However in Typescript, most of the time you dont need to indicate the type to a variable as typescript is able to type it itself so its redundant and usually not a good practice.

<img width="218" alt="Screenshot 2023-05-29 at 1 27 55 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/71976c46-1bd2-45b4-b968-9a0e15bafbf3">




If you are not assigning a value to a variable and have a idea of what the type should be, you should be typing it else it will be automatically be assigned to any

### Functions 




