console.log("Hello World");

const test = "Hello World";

let test2 = "Hello World";

var test3 = "Hello World";

let num = 5;
num = 15;
num = "Hello World";
let SomeBool = true;
let nullValue = null;
let someArray =[];
let someObject = {
    key:"value",
    key2:"value2",
};
console.log(someObject.key);

if (someObject.key === "value"){     //=== pour comparer une égaliter
    console.log("SomeBool is true")
}

const fruits = ["apple","banana","orange"];
fruits.push("grape");
console.log(fruits);

const yo = {
    firstname:"Yohann",
    lastname:"Mathieux",
    age:"19",
    isStudent: true,
    hobbies: ["drum","programming","gaming"],
};
console.log(yo.firstname); // Yohann
console.log(yo.hobbies[1]); // programming

// Destruction
//const {firstname, lastname, age } = yo
//console.log(firstname);
//console.log(lastname);
//console.log(age);

// Spread operator
const someVariable = [...fruits,"kiwi"];

console.log(someVariable); 

const newStudent = {...yo,age: 20,lastname: "Maqueu"};
console.log(yo)
console.log(newStudent)