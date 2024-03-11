// console.log("Hello World");

// const test = "Hello World";

// let test2 = "Hello World";

// var test3 = "Hello World";

// let num = 5;
// num = 15;
// num = "Hello World";
// let SomeBool = true;
// let nullValue = null;
// let someArray =[];
// let someObject = {
//     key:"value",
//     key2:"value2",
// };
// console.log(someObject.key);

// if (someObject.key === "value"){     //=== pour comparer une égaliter
//     console.log("SomeBool is true")
// }

// const fruits = ["apple","banana","orange"];
// fruits.push("grape");
// console.log(fruits);

// const yo = {
//     firstname:"Yohann",
//     lastname:"Mathieux",
//     age:"19",
//     isStudent: true,
//     hobbies: ["drum","programming","gaming"],
// };
// console.log(yo.firstname); // Yohann
// console.log(yo.hobbies[1]); // programming

// // Destruction
// //const {firstname, lastname, age } = yo
// //console.log(firstname);
// //console.log(lastname);
// //console.log(age);

// // Spread operator
// const someVariable = [...fruits,"kiwi"];

// console.log(someVariable); 

// const newStudent = {...yo,age: 20,lastname: "Maqueu"};
// console.log(yo)
// console.log(newStudent)

// import exemple from "./src/utils/math.js"

// const divide = () => "Fake";
// const a = 45;
// const b = 42;
 
// console.log(divide(a, b));

import {add,getMaxValue,deleteVowels,sortSentence,convertNumber,sortDescending,upVowels} from "../exercice/fonction.js";

console.log(add(2,3));


const t =[5,80,4,6];
const maxValue = getMaxValue(t)
console.log("Max value :", maxValue)

const str = "Salut la mif"
const deletedVowels = deleteVowels(str)
console.log("Votre phrase sans voyelles :", deletedVowels)

const alp = ["g","e","y","s","h","a"];
const sortedSentence = sortSentence(alp)
console.log("Voici vos caractères trier par ordre aplabétique :", sortedSentence)

const num = 10
const convertedNumber = convertNumber(num)
console.log(convertedNumber)

const des = [12,2,54,85,9,74]
const sortedDescending = sortDescending(des)
console.log(sortedDescending)


const up = "Salut la mif"
const uppVowels = upVowels(up)
console.log("Votre phrase sans voyelles :", uppVowels)
