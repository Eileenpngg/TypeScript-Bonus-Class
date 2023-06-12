## Classes

![](https://media.giphy.com/media/KGwJdEIR9VUkqcHhT7/giphy.gif)

As with most typescript syntax, the syntax for classes in Typescript is similar to Javascript.

a) Lets start by creating a class `User` in javascript

```javascript
class User{
	constructor(email, name){
	this.email=email;
	this.name= name
}
}
```
<br/>

b) Now lets try to add typescript in
```typescript 
class User{
	email:: string
	name: string
	constructor(email: string, name: string){
	this.email=email;
	this.name= name
}
}
```
If you notice, the `email` and `name` are class properties that we did not need to declare in Javascript. However in Typescript, it is necessary to declare it so we can type check the class properties.

<br>

c) Next, we can initialize the class using the `this` keyword or by initializing it to the property directly

```typescript 
class User{
	email:: string
	name: string
  	phone: number=12345 //initalized it like this      
	constructor(email: string, name: string){
	this.email=email; // or like this
	this.name= name
}
}
```
<br>

d) Now lets create a new instance of a User John
```typescript
const John= new User(“john@gmail.com”, “”john”)
```
We can change the phone number of john by overwriting the default number like this
`john.phone=”01234567"`

But what if we dont want the phone number to be overwritten? 

<br>

e) We can add a `readonly` property to the `phone`!

```typescript 
class User{
	email: string
	name: string
  readonly phone: number =1234 
	constructor(email: string, name: string){
	this.email=email; 
	this.name= name
}
}
```

Now if i try to overwrite the phone, it will return an error and prevent `phone` from being overwritten

<img width="594" alt="Screenshot 2023-06-05 at 1 53 50 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/e08fc7aa-4af9-404f-8502-d521d26e61db">

f) If we want to control whether people can access the information, we can declare the `email` and `name` as `public` OR `private`.

```typescript 
class User{
    email: string
    name: string
    phone: number
    constructor(email: string, name: string, phone: number){
    this.email=email;
    this.name= name
    this.phone= phone
  }
  }
```
If we are using the `public` and `private` keyword, we can actually shorten the code to this!

```typescript 
class User{
    constructor(public email: string, public name: string){
  }
  }
```

In typescript, we can actually make the code shorter by using the shorthand syntax by Typescript called **parameter properties**! By using the `public` or `private` keyword in the constructor parameters, Typescript is able to **automatically generate the class properties** (e.g this.email) and assign the parameter values (e.g email) to them. This eliminates the need to explicitly declare the properties at the class level and assign them in the constructor body.

### Getter and Setters

Now we want to be able to control the access to properties so we can use **getters and setters** to set conditions before allowing access the properties. 

a) Lets create a point system for our user. 
```typescript
class User{
    points=10
    constructor(public email: string, public name: string){
  }
  }
```
<br>

b) Now lets create a getter that returns the email of a user

```typescript
get userEmail: string{
return email: ${this.email}
}
```
We will also create a setter `set points` to increment the points by 10 every time a user makes a purchase above $20.

```typescript
set points(spending){
	if(spending > 20)
	this.points +=10
} 
```
Now you can only increment the points if thes spending is more than $20.

> Note that we dont have any return type for our setters, this is because typescript **doesnt allow any return value** if you are using a setter

### Protected 

a) Lets mark points in `User` class as `private` and create a `subUser` that **extends** our `User` class and has a method that adds 100 points to `User` `points` property

```typescript
private class User{
    points=10
    constructor(public email: string, public name: string){
  }
  }
  
class SubUser extends User{
	updatePoints(){
	this.points +=100 
}
}
```
However this will return an error as private only allows access to its property and methods in its own class

<img width="684" alt="Screenshot 2023-06-05 at 1 15 13 PM" src="https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/e87c7518-ce4f-4d6f-be25-60cb79326dc3">

<br>

b) We can mark the class as `protected` instead to make the property accessible to its **own class and its childrens** 

```typescript
protected class User{
    points=10
    constructor(public email: string, public name: string){
  }
  }
  
class SubUser extends User{
	updatePoints(){
	this.points +=100 
}
}
```
This would allow `subUser` to update the points.

### Interfaces in classes
Interfaces is especially useful in classes. Here we can create a class of `Dog` that implements an interface of `Animal`

```typescript
Interface Animal{
name: string;
makeSound: void();
}

class Dog implements Animal{
	constructor(public name: string){
}
	makeSound(): void{
console.log(“woof”)
}
}
```

This helps bring consistency to the entire class and classes that share the same interfaces
