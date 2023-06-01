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
Enums which most of you should be familiar with now, helps restrict choices. 

For example we have a range of products in our e-commerce store under the category, daily essentials. We can create a enum of daily essentials with the different products and assign a value to it.

```typescript 
enum dailyEssentials{
	TOOTHBRUSH, 
	TOOTHPASTE, 
	SHAMPOO, 
	SOAP,
}
```
If we hover over the first product (TOOTHBRUSH) you can see by default, the product is assigned a value 0, and the subsequent product 1, 2 and 3. 

![Screenshot 2023-06-01 at 4 52 18 PM](https://github.com/Eileenpngg/TypeScript-Bonus-Class/assets/77367030/e3e007ee-4300-4cb3-b84b-1a7e41bf4bee)

But what if we want each product to each have their indiviual prices? We can assign a value to the products like this!

```typescript 
enum dailyEssentials{
	TOOTHBRUSH = 2, 
	TOOTHPASTE = 5, 
	SHAMPOO 11, 
	SOAP = 6,
}

const cost = dailyEssential.SOAP // cost = 6

>Note that if you dont declare a value for any of the enum, by default, it will be an increment of the previous enum value. e.g if toothpaste = 5 , by default shampoo=6 unless specified
```
