// // // // let Name = "Neha";
// // // // // console .log(Name);
// // // // if (Name === "Neha") alert("welcome");
 
// // // // let age ="20"
// // // // console.log(age);

// // // // //datatypes
// // // // let sneha =true;
// // // // console.log(sneha);
// // // // console.log(typeof sneha);

// // // // let x;
// // // // console.log("x");
// // // // console.log(typeof x);

// // // // const total = 1998 - 2005;
// // // // const year = 2024 - 2004;
// // // // console.log( total, year);
 
// // // // const ageYear = 198 + 20000;
// // // // console.log(ageYear); 
  
// // // // const multiple = 5000*290
// // // // console.log ( multiple);

// // // // const divide = 2790/3;
// // // // console.log( divide);

// // // // const remine =36%5;
// // // // console.log (remine);

// // // // //comparison operator
 
// // // // let z = 20;
// // // //  console.log(20 <=19);
// // // //  console.log(20>=21);
// // // //  console.log( 20>17);
// // // //  console.log(20<21);

// // // //operator precedence

// // // const x= 1;
// // // const y= 2;
// // // const z= 4;
// // // console.log(x-y);
// // // console.log (x+y/2);
// // // console.log(x+y-z*x+(x-z*y)/z);
// // // console.log(x-y*(x*z));
// // // console.log(z%y/y)

// // // //string and template literals

// // // const firstName = "Neha";
// // // const lastName ="Bishnoi";
// // // const job ="student";
// // // const age ="2004";
// // // const year ="2024";

// // //const newLine= `I'm ${firstName} ${lastName}, a ${year-age}year old ${job}. `;
// // // console.log(newLine);
 
// // // console.log(`string
// // //     and
// // //     operator`);

// // //if and else statement

// // // const age =15;

// // //  const newAge = age >= 18;
// // //  if(newAge){
// // //      console.log("able to vote.");
// // // }
// // // else{
// // //     console.log("not able to vote.");
// // // }

// // //  let firstName ="Neha";
// // //  console.log(typeof firstName);

// // //  let y = null;
// // //  console .log(typeof y);

// // //type conversion

// // // const firstName= "20";
// // // const age = 21;
// // // console.log(firstName+age);

// // // const inputYear = "1991";
// // // console.log(Number(inputYear), inputYear);
// // // console.log(typeof inputYear);
// // // console.log(Number(inputYear) + 18);
// // //    console.log(inputYear +18);
// // // console.log(Number("Neha"));

// // // console.log(String(23), 23);
  
// //  //type coercion

// //  // console.log("22"+"2");
// // // console.log("22"/2);
 
// // // logical operator

// // const  hasvote = true;
// // const haslicence = true;
 
// // console.log(hasvote && haslicence);
// // console.log(hasvote || haslicence);
// // console.log(!hasvote, !haslicence);

// // if(hasvote && haslicence){
// //    console.log("his age is +18");
// // }
// // else{
// //    console.log("age is smaller than 18");
// // }
// //  //ternary operator
// //  const age =18;
// //  age >=18
// //    ? console.log("able to vote")
// //    : console.log("not able to vote");
   
// // //switch case

const sunday ="1";

switch (sunday){
  case "1":
    console.log("sunday");
    break;
  case "wednesday":
  case "thrusday":
    console.log("Write Code Example");
    break;
  case "friday":
    console.log("Record Video");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}


// // // if(day=="monday")



// // ///////part1/////


// 'use strict';

// // console.log("hello");
// // console.log('hello');

// // var firstName = "Neha";
// // console.log(firstName);
// // firstName="sneha";
// // console.log(firstName);

// // let lastName = "Kaswan";
// // console.log(lastName);
// // lastName = "Dhingra";
// // console.log(lastName);


// // const fullName ="Nehakaswan";
// // // fullName ="snehaDhingra";//error we cannot use const value again
// // console.log(fullName);
  

// // // String indexing//

// // console.log(fullName.length);
// // console.log(fullName[0]);
// // console.log(fullName[10]);
// // console.log(fullName[9]);
// // console.log(fullName[fullName.length-2]);
// // console.log(fullName.length-2);

// // //string operation//

// // let name = "       s  n  e h a    ";
// // console.log(name);
// // console.log(name.length);
// // name = name.trim();   //remove right and left space only//
// // console.log(name.length);
// // console.log(name);
// // name =name.toUpperCase();
// // console.log(name);
// // console.log(name.toLowerCase());
// // let newName = name.slice(1);
// // console.log(newName);


// // /////typeof
// // // console.log(typeof fullName);
// // // console.log(typeof name);

// // ////number to string

// // let age = 20;
// // console.log(typeof age);
// // age =age+"";//change into string
// // console.log(typeof age);
// // age="20"//change into string
// // console.log(typeof age);

// // /////string to number//

// // let value = "computer";
// // console.log(typeof value);
// // value =+"computer";//change into number
// // console.log(typeof value);
 

// ////string concatenation 

// // let firstName ="neha";
// // let lastName ="kaswan";
// // let age="20";
// // let job ="student";
// // let fullstring = firstName+ "" +lastName;
// // console.log(fullstring);

// let num1= "20";
// let num2= "21";
// let fullNum = num1+num2;
// console.log(fullNum);

// let num3 ="21";
// let num4 =24;
// console.log(num3 + num4);    //if we add a number into string it convert the number into string 

// ////template string

// let firstName ="neha";
// let lastName ="kaswan";
// let age="20";
// let job ="student";

// // let fullstring = "my name is " + firstName + lastName + " " +"and my age is" + age +" "+ "i am a" + job;

// let fullstring = `my name is  ${firstName}  ${lastName} and my age is  ${age}  i am a  ${job}. `;
// console.log(fullstring);






