let fruits = ["Apple", "Banana"];
fruits.push("Orange");

console.log(fruits);  

let fruits1= ["Apple", "Banana", "Orange"];
let lastFruit = fruits1.pop();

console.log(lastFruit); 
console.log(fruits1);  



let fruits2 = ["Apple", "Banana", "Orange"];
let firstFruit = fruits2.shift();

console.log(firstFruit);  
console.log(fruits2);      
let fruits3 = ["Banana", "Orange"];
fruits3.unshift("Apple");

console.log(fruits3); 

let fruits4 = ["Apple", "Banana", "Orange"];
let index = fruits4.indexOf("Banana");

console.log(index);  
let fruits5 = ["Apple", "Banana", "Orange"];
console.log(fruits5); 

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person); 

const keys = Object.keys(person);
console.log(keys); 
const values = Object.values(person);
console.log(values); 

const entries = Object.entries(person);
console.log(entries); 

const person1= {
    name: "Alice",
    age: 25
};

Object.freeze(person1);
person1.age = 30;  
console.log(person1.age); 

const person2 = {
    name: "Alice",
    age: 25
};

Object.seal(person2);
person2.age = 30;  
person2.city = "New York";  

console.log(person2);  


const person12333 = {
    firstName: "Najlaa",
    lastName: "Al-smadi",
    id: 1998,
    age1:25,
    
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    greet: function() {
        return `Hello, my name is ${this.fullName()}.`;
    },
    haveBirthday: function() {
        return this.age1 += 1;
       
        
    },
    displayInfo: function() {
        return ` ID: ${this.id},Name: ${person12333.fullName()}, Age: ${this.haveBirthday()}`;
    }

  };
  console.log(person12333.fullName());  
  console.log(person12333.haveBirthday());  
  console.log(person12333.displayInfo()); 


  person12333.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  person12333.namenew = function() {
    return (this.firstName + " " + this.lastName).length;
  };
  console.log(person12333.name());  
  console.log(person12333.namenew());  

  
