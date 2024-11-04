// //function
//   function my(){
//     console.log("my name is neha");
//     console.log("my name is neha");
//     console.log("my name is neha");
//     console.log("my name is neha");

//   }

//   my();



// //parameter and argumnet

// function add(x, y){ 
//     // console.log (1+(x+y)/2)
//     // s=x+y;
//     return x+y;
//  }
 
// //  let a=2;
// //  let b=3;
// //  let c=4;
//  let all=add(11, 3);
//  add(3,4);
//  add(4,2);
//  console.log(all);
// //  console.log("average plus one of a and b is", add(a, b));
// //  console.log("average plus one of b and c is", add(b, c));
// //  console.log("average plus one of a and c is", add(a, c));

 

// function sum2(x, y){
//   console.log(x+y);
// }
// sum2(4,5);
// //function decleration and expresion

// function sum(a, b){
//     return a+b;
// };
// console.log(sum(5, 10));

// // const calcAge2 = function (birthYear) {
// //     return 2024 - birthYear;
// //   };
// //   const age2 = calcAge2(2004);
// //   const age1 =calcAge2(2005)
// //   console.log( age1,age2);

// //   const age =function(birthYear){
// //     return 1+birthYear;
// //   };
// //   const age4 =age(2004)
// //   console.log(age4);

//   let sum1 = function(a, b){
//     return a+b;
//   }
//   let e =sum1(2, 0);
//   e= sum1(5, 7)
// console.log(e);

// //arrow function

// //  const sayHello =(hello, name)=>console.log (hello +" "+ name);
 
// //    sayHello( "hello", "Sneha");
// //    sayHello("hello", "Neha");

// const hello =(hello)=> console.log(hello);
// hello("hello");

// // function myfunction(){
// //   console.log("i am a student");
// // }
// // myfunction();

// const myfunction=()=> console.log("i am a student"+ " " +"firstname");
// myfunction();

// // Function Calling another Function
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 2));

// function multiply(x, y){
//      return x+y;
//   }


// function greet(name){
//     return`hello ${name}!`;
// }

// console.log(greet("Neha"));

// const cube =function(number){
//     return number*number*number;
//}
// console.log(cube(4));
// const cq= cube(2)
// console.log(cq);

// const add =(a, b)=> console.log(a+b);
// add(2, 10);

// function multiply(a,b){
//     return a*b;
//     console.log("ndfhfn");
// }
// console.log(multiply(4,5))

// function farewell(name){
//     return `Goodbye ${name}!`;
// }
// console.log(farewell("neha"));

// const farewell =(name)=> console.log("goodbye"+ " " +name);
// farewell("riya")

// const divide =(a,b)=> console.log(a/b);
// divide(2,4);
function maxOfTwo(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(maxOfTwo(2,2));

////array


// const classMarks =[92, 78, 56, 67, 89,]
// console.log(classMarks.length);
// classMarks[0]=90;
// classMarks[6]=88
// console.log(classMarks);
// console.log(classMarks[0]);
// console.log(classMarks[1]);
// console.log(classMarks[2]);
// console.log(classMarks[3]);
// console.log(classMarks[4]);
// console.log(classMarks[5]);
// console.log(classMarks[6]);

//push and pop
const classMark =[92, 78, 56, 67, 89]
const popped =classMark.pop();
console.log(classMark);
console.log(popped);

classMark.shift();
console.log(classMark);

//push

// classMark.push("Neha")
const newlength =classMark.push("Neha");
console.log(newlength)
console.log(classMark);

classMark.unshift("Sneha")
console.log(classMark);
console.log(classMark.indexOf("Neha"));
console.log(classMark.indexOf("neha"));

console.log(classMark.includes("Neha"));
console.log(classMark.includes("neha"));


////objects
//  const student ={
//     firstName: "Neha",
//     lastName: "Bishnoi",
//     age: 21,
//     location: "sirsa",
//  }
//  console.log(student);
//  console.log(student.firstName);
//  console.log(student["lastName"])

//  const nameKey = "Name";
//  console.log(student["first" + nameKey]);
//  console.log(student["last" + nameKey]);

//  student.job = "student";
//  student["instagram"] = "Nope";
//  console.log(student);
 
//  const InterestedIn = prompt(
//       "What do you want to know about Neha? choose between firstName, lastName, age, and job"
//     );
//     if (student[InterestedIn]) {
//       console.log(student[InterestedIn]);
//     } else {
//       console.log(
//         "Wrong request! Choose Between firstName, lastName, age, and job"
//       );
//     }


// const calcAge =function(birthYear){
//     return 2024 -birthYear
// }
// Challenge
// (Bhavya) has (3) friends, and his best friend is called (Micheal)

const Neha={
   firstName: "Neha",
    lastName: "Bishnoi",
     birthYear: 2004,
   job: "student",
   friends: ["Sneha", "Muskan", "Komal"],
   hasDriverLicense: true,
}
console.log(Neha.length);
//  calcAge: function(birthYear){
//    return 2024-birthYear;
//    },
// calcAge: function (birthYear) {
//     return 2024 - birthYear;
//   };

//   calcAge: function () {
//     console.log(this);
//     return 2024 - this.birthYear;
//   },

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   };



/////loop

// for (let i= 1; i <= 30; i++) {
//     console.log(`Lifting weight repitition ${i} 🏋️`);
//   }

  for(let i=0; i < Neha.length; i++){
    console.log(Neha[i], typeof Neha);
  }

  console.log("----only string----")
  for(let i=0; i < Neha.length; i++){
    if(typeof Neha[i] !== "string") continue;

        console.log(Neha[i]);
}

console.log("----break when number----")
for(let i=0; i < Neha.length; i++){
    if(typeof Neha[i] === "number") break;

        console.log(Neha[i], typeof Neha);
}

/////while loop

//for (let i= 1; i <= 30; i++) {
   //    console.log(`Lifting weight repitition ${i} 🏋️`);
     // }
    


let i= 1;
while (i <= 5) {
  console.log(`Lifting weight repitition ${i} 🏋️`);
  i++;
}


