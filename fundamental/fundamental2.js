//function
  function my(){
    console.log("my name is neha");
    console.log("my name is neha");
    console.log("my name is neha");
    console.log("my name is neha");

  }

  my();



//parameter and argumnet

function add(x, y){ 
    // console.log (1+(x+y)/2)
    // s=x+y;
    return x+y;
 }
 
//  let a=2;
//  let b=3;
//  let c=4;
 let all=add(11, 3);
 add(3,4);
 add(4,2);
 console.log(all);
//  console.log("average plus one of a and b is", add(a, b));
//  console.log("average plus one of b and c is", add(b, c));
//  console.log("average plus one of a and c is", add(a, c));

 

function sum2(x, y){
  console.log(x+y);
}
sum2(4,5);
//function decleration and expresion

function sum(a, b){
    return a+b;
};
console.log(sum(5, 10));

// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
//   };
//   const age2 = calcAge2(2004);
//   const age1 =calcAge2(2005)
//   console.log( age1,age2);

//   const age =function(birthYear){
//     return 1+birthYear;
//   };
//   const age4 =age(2004)
//   console.log(age4);

  let sum1 = function(a, b){
    return a+b;
  }
  let e =sum1(2, 0);
  e= sum1(5, 7)
console.log(e);

//arrow function

//  const sayHello =(hello, name)=>console.log (hello +" "+ name);
 
//    sayHello( "hello", "Sneha");
//    sayHello("hello", "Neha");

const hello =(hello)=> console.log(hello);
hello("hello");

// function myfunction(){
//   console.log("i am a student");
// }
// myfunction();

const myfunction=()=> console.log("i am a student"+ " " +"firstname");
myfunction();




   