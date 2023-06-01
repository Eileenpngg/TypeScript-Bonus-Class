### Tuples (optional?)
A tuple is a specialised array given by typescript and is usually used when we want to have a **fix number of elements in a array** or in a **specific order**!

Remember previously we were able to use union types to declare an array of numbers and strings
```typescript
const user: (string | number)[ ] = [1, “hc”]
```
What if we want the types to be in a specific order in the array? 

```typescript
let user: [string | number, boolean ] = 
user= [ “hc”, 123, true ]
user = [123, true, “hc” ] // not following the order indicated in the typing so will return an error
```
We can also make use of type to do the same thing!
```typescript
type User = [number, string]
const newUser: User = [112, “example@google.com”]
newUser[1]= 1 //this WILL return an error
newUser[1]= “string” //this WONT return an error
```

HOWEVER, do take note that you can still use type specific methods by accessing the array, thus need to be aware and you might want to consider to set the array to readonly. For example, this would still work:
```typescript 
  type User = [number, string]
  const newUser: User = [112, "example@google.com"]
  newUser[1].toLowerCase()
```

### Enums
Restrict choices e.g e commerce store 

Difference between bputting a const before enum and no const (shorter line of code)
enum SeatChoice{
	AISLE = “aisle”
	MIDDLE= 3,
	WINDOW,  (value will, be 4 because increment in number would show a error if previou value is a a string and current value is empty)
	FOURTH
}

Const hcSeat = SeatChoice.AISLE

React typescript vs react the biggest difference
You type your props + declare an interface for all your props
Interface AppProps{
hello: String
}

!!!! note cant use interfaces for non-object types

usually we would just use type until there is a need for interfaces 
