## Classes

![](https://media.giphy.com/media/KGwJdEIR9VUkqcHhT7/giphy.gif)

As with most typescript syntax, the syntax for classes in Typescript is similar to Javascript.

Lets start by creating a class `User` in javascript

```javascript
class User{
	constructor(email, name){
	this.email=email;
	this.name= name
}
}
```
Now lets try to add typescript in
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

Next, we can initialize the class using the `this` keyword or by initializing it to the property directly

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

Now lets create a new instance of a User John
```typescript
const John= new User(“john@gmail.com”, “”john”)
```
We can change the phone number of john by overwriting the default number like this
`john.phone=”01234567"`

But what if we dont want the phone number to be overwritten? We can add a `readonly` property to the `phone`!

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

Now if i try to overwrite the phone, it will return an error and prevent the phone number from being overwritten

-------------INSERT ERROR-------------

If we want to control whether people can access the information, we can declare the `email` and `name` as `public` OR `private`.
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

Now we want to be able to control the access to properties and manipulate it whenever they want so we can use **getters and setters** to set conditions before akkiwung . Lets create a point system for our user. 

```typescript
class User{
    point=10
    constructor(public email: string, public name: string){
  }
  }
```

Now lets create a getter that returns the email of a user

```typescript
get userEmail: string{
return email: ${this.email]
}
```
We will also setter to increment the points by 10 every time a user makes a purchase above $20.

```typescript
set points(spending){
	if(spending > 20)
	this.point +=10
} 
```
Now you can only increment the points if thes spending is more than $20.

> Note that we dont have any return type for our setters, this is because typescript **doesnt allow any return value** if you are using a setter

### Protected 

Lets mark the User class as private and create a subUser that extends our User class which has a methods that adds 100 points to User points property

```typescript
private class User{
    point=10
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

-------------INSERT ERROR-------------

We can mark the class as protected to make the property accessible to its own class and its childs 

```typescript
protected class User{
    point=10
    constructor(public email: string, public name: string){
  }
  }
  
class SubUser extends User{
	updatePoints(){
	this.points +=100 
}
}
```
This would allow subUser to update the points.

### Interfaces in classes
Interfaces is especially useful in classes. Here we can create a class of Dog that implements an interface of Animal

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
