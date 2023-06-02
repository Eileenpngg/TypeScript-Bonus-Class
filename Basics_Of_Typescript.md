# TypeScript-Bonus-Class

![](https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif)
## What is typescript? 
Typescript is a "superset" of Javascript , and is **NOT** a standalone programming language. Everything you can do in Javascript can be done in Typescript but Typescript allows you to write your code with more precision through **static checking**. 
													**_Typescript is all about typesafety!_**

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
- Ensure node is installed by typing `node - -version`
- On your terminal, `npm install -g typescript` (-g ensures the typescript is installed globally so we can use it anywhere)
- If you are using windows/ linux, you might need to add sudo in front if the above code doesn't work
- run `npx tsc` on your terminal to start running typescript

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
<summary> 💡 What happens when you try to assign a number to the variable? </summary>
<br>
<img width="504" alt="Screenshot 2023-05-29 at 1 18 26 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/1468a657-b945-43ee-b378-c1d0c8925ab1">
  
It will cause the error above because the variable is of type string and is **expecting a string** as a value instead of a number

</details>

---

However in Typescript, most of the time you **ODNT NEED** to indicate the type to a variable as typescript is able to type it itself so its redundant and isn't usually not a good practice.

<img width="218" alt="Screenshot 2023-05-29 at 1 27 55 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/71976c46-1bd2-45b4-b968-9a0e15bafbf3">

>If you are not assigning a value to a variable and have a idea of what the type should be, you should be typing it else it will be automatically be assigned to any (e.g `let name;`)

### Objects 
Remember how we can type a variable string and number? We can do the same for an object too:

```typescript
Const user: object{
	name: “Bella”;
	age: 5;
}
```

However, for objects, its **not very useful to type it as an object only** as there a specific types of key value pairs we want in the object. 

We can create something called an **Type Aliase**.

Now lets create a Type Aliase for "Person" and apply the type to an object

```typescript
type Person{
  readonly _id: String,
  name: String,
  age: number,
  email?: string
}

const user: Person ={
	_id: "1",
	name: String;
	age: 12;
}
```

> Note that there "email" is missing from the object "user", however there isnt any error. The question mark after the email in the interface makes email optional, so even though its not declared in the variable user, it did not cause any error
> The keyword readonly before the "_id" makes it such that it can not be manipulated in the future


### Arrays
For arrays, a common mistake would be to just type your array like this: 
```typescript
const SuperHeroes: [] = []
```
However, this will result in an error when we try to push something into the array

<img width="839" alt="Screenshot 2023-05-30 at 2 45 22 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/99862434-8844-49a0-b7b5-e02ce4dad6b8">


Also remember in Typescript we should always restrict the type whenever possible! In this case, let's try to re-create the superHeroes array with the values of type string!

```typescript
const superHeroes: string [] = []
//OR
const superHeroes : Array<string> = []

SuperHeroes.push(“Spiderman”)
```

Now lets give it a try! 
---
<details>
<summary> :pencil2: Try to create an array of numbers only</summary>
<br>
  
```typescript
Const allNumbers : number[ ] = [ 255, 255, 255 ]
```
</details>

---

---
<details>
<summary> :pencil2: Try to create an array with an array of numbers only (hint: its a 2D array)</summary>
<br>
  
```typescript
Const allNumbers : number[ ] [ ] = [ 
	[255, 255, 255]
	[111, 111, 111]
]
```
</details>

---

---

<details>
<summary> :pencil2: Try to create an array of object that has a type of "user" (hint: create a type aliase) </summary>
<br>
  
```typescript
type User{
  name: string, 
  isActive: boolean
 }
  
const allUsers: User[]= []
  
allUser.push({name: “”, isActive: true })
```
</details>

## Functions 

In typescript, we can type the parameters being passed into the function like this: 
```typescript
function add(a: number, b: number) {
    return a + b;
}
```

We can now ensure that only two values of the type number can be put passed into the function, but we can futher leverage on the benefits of typescript by **specifying the return type** next to the parethesis like this:

```typescript
function add(a: number, b: number):number {
    return a + b;
}
```

This ensures that **only** a value of the type **number** can be returned. 

---

<details>
<summary> 💡 What happens when you try to apply a string method (e.g `toLowerCase`) to a value of type number? </summary>
<br>
<img width="540" alt="Screenshot 2023-05-30 at 1 31 41 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/6a988de2-2f4b-4c25-8c3d-f64080708846">
  
`toLowerCase` is a string method and cannot be applied to a value of type number, so this causes an error

</details>

---

What if we want to return a object with **specific key and value types**? We can add the return type as an **object** like this:

```typescript
function createNewUser():{name: String, isPaid: Boolean}{
  const user= {name: "Mary", isPaid: true}
  return user
}
```

Now if i try to return a object with a key that **doesnt exist** on the return type, i will get an error. We can also use Interfaces and Type aliases, we will touch on what is a type aliase and the difference between the two.

<img width="1280" alt="Screenshot 2023-05-30 at 2 01 36 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/5adb5b7e-eaf9-4ecc-ae6c-0277b75b33c6">

<details>
<summary> :bulb: What is the difference between the type **void** and **never**? </summary>
<br>
**void** can be `null` or `undefined`, **never** is used when something is **never going to occur**. For example, you write a function that will **not return to its end point** or **always throws an exception**.
  
```typescript
function fail (msg:string):never{
  Throw new Error(msg)
}
```
</details>

---

  
  
  
  
 






