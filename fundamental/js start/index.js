// // let x =2;
// // if(x>=18){
// //     console.log("you are adult");
// // }
// // else{
// //     console.log("you are now a child")
// // };

// //  let y ="monday";
// // if(y=="sunday"){
// //     console.log("there is holiday")
// // }
// // else{
// //     console.log("there is a working day")
// // };

// // let z =1;
// // if(z>=0.9)
// //     {
// //     console.log("you are topper")
// // }else{
// //     console.log("you are not a topper")
// // };

// // let a= "html";
// // if(a=="js"){
// //   console.log("you know js")
// // }else{
// //     console.log("you don't know js")
// // }


// // let x= 16;
// // let marks =0.9;
// // if(x>=18){                    /////////////////// when the if statement is wrong then we direct jump to                                                  the else statement and whenif is ryt then we go into the if else/////
// //     if(marks==0.9){
// //         console.log("you are adult and topper both")
// //     }
// //     else{
// //         console.log("you are adult but not topper")
// //     }
// // } 
// // else{
// //     console.log("you are a child and not topper")
// // };


// /////else if

// let x= 90;
// let y = 29;
// if(x>y){
//     console.log(`x is greater than y by" ${x-y}`);
// }
// else if(x<y){
//     console.log(`x is smaller than y by" ${y-x}`);
// }
// else{
//     console.log("x and y are equal");
// };


// ////swtich statement

// let day ="friday";

// switch (day){
//     case "sunday":
//        console.log("there is a holiday");
//        break;
//     case "monday":
//     case "tuesday":
//         console.log("there is not a holiday");
//         break;
//     case "friday":
//     case "saturday":
//         console.log("there is a play day");
//         break;
//     case "wednesday":
//         console.log("there is a dance day");
//         break;
//     default:
//         console.log("you press wrong day");        
// }


// ////loops
 

// ///forloop

// // for(i= 1; i<=10; i++)
// //     {
// //     console.log(`2 * ${i} =${2*i}`);
//     // console.log("i");
//     // }
//  ////while

// //  let i =2;
// //  while(i<=10){
// //     console.log(i);
// //     i++;
// //  }


//  ////do while

//  let i=1;
//  do{
//     console.log(i);
//     i++;
   
//  } while (i<=10) ;


/////functon

function name(){
    console.log("neha");
}
name();    ////simple call function

// let fun =function(){
//     console.log("hello")
// }
// fun();


//immediately evoked function
 
(function(){
    console.log("hello");
})();

////arrow function

// let a =function(a,b){  
//     return a+b;
// }
// console.log(a(2,7));

//arrow

// let a =(a,b)=>{
//     return a+b;
// }
// console.log(a(2,7));    

let a =(a,b)=> console.log(a+b); ////simple way
a(2,4);