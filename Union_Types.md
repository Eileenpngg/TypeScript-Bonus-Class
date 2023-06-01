
### Union Types
**Union types** is a type that is useful when you are unsure of the data that is coming in, **instead of** using **any**, use union types.

Now lets say we want to create a variable score that stores a student's score if he passes and "fail" if he did not pass the test.

```typescript
let score: number | string;
score= 80
score=“fail”
```
This allows the variable score to be either a type of number or string instead just one single type!

What if we want to assign a name to either User or Admin with specific details? We can learnt earlier that we can create a type aliase! 
```typescript
type User{
	name: String
	Id: number
}

type Admin{
	username: String
	Id: number
}


Let eileen = User | Admin = {name:”hitesh, id334}
eileen= {username: ‘hc’, id: 334}
```
This would assign the variable "Jenny" to either a User or Admin.

We can also restrict the variables to specific values 

```typescript

let admin = “Benson” | “Jessica” | “Charlie”

admin = “Benson” //wouldnt cause an error

admin = “Rachel”
```
Assigning admin to Rachel would cause the following error because during initalisation, we did not include Rachel as one of the admin

![Screenshot 2023-05-31 at 7 10 23 PM](https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/12729fbb-af32-4618-9909-f4c2c482f8c2)

---

<details>
<summary> :pencil2: a) Try creating a function getUserName that accepts a username of either a string or a number</summary>
<br>
```typescript
function getUserName(username: number | string){
	return username
}

getUserName(3)
getUserName("Jackson") 
```
This way, either a value of type number and string can be passed in as a parameter into the function as oppose to a single type of value previously
</details>

---
---

<details>
<summary> :pencil2: a) In the getUserName function try to apply a string method to it, do you think its possible --- </summary>
<br>
No, you will get an error because there is a potential the value might be a number.
```typescript
function getUserName(username: number | string){
	const newUserName= username.toLowerCase() 
	return newUserName
}
getUserName(3)
getUserName("Jackson")
```
	
To get around it you can include an if else statement 
	
```typescript
function getUserName(username: number | string){
	if(typeof userName === "string"){
	const newUserName= username.toLowerCase() 
	return newUserName
	} else{
	return userName
	}
}
getUserName(3)
getUserName("Jackson")
```	
</details>

---

### Arrays Union type 

So previously we learned that we can type the values in an array like this: 
```typescript
const data1: number[ ] = [1,2,3]
const data2: string [ ] =  [“1”,”2”,”3”]
```

But what if we want **both numbers and string in an array**? A common mistake is writing it like this:

![Screenshot 2023-05-31 at 7 02 07 PM](https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/23b6014e-4420-4106-8f46-8df35d600c23)

The example above would cause an error because you are typing "data3" as a type of **string or an array of numbers**. In this case, ["1","2"] is an array of strings which fit netiher of the type, thus it will return an error.

Instead the correct way to indicate you want an array of numbers and strings is like this: 

```typescript
const data 3:  string(string| number)[ ] =[“1”, 2]
OR 
const data3: string[] | number[] = ["1", "2"] 
```
Both ways indicates that "data3" can be a type of array of string or an array of numbers!
