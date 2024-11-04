// /////////assignment------1////


// let johnMass =92;
// let johnHeight =1.95;
// let johnBMI =johnMass/johnHeight **2;
  

// let markMass=78;
// let markHeight =1.69;
// let markBMI =markMass/markHeight **2;

// let markHigherBMI =markBMI> johnBMI;
// console.log(markHigherBMI);

//  johnMass =85;
//  johnHeight =1.76;
//  johnBMI =johnMass/(johnHeight **2);
  

//  markMass=95;
//  markHeight =1.88;
//  markBMI =markMass/(markHeight **2);

//  markHigherBMI =markBMI> johnBMI;
//  console.log(markHigherBMI);
    

 
//  //////assignment-----2\\
 
//   markHigherBMI = markBMI<johnBMI
//  if (markHigherBMI) {
//     console.log("Mark's BMI is higher than John's!");
//  }
//  else {
//     console.log("John's BMI is higher than Mark's!");

//  }



//  ////assignment----3//
 
// let dolphinScore =96;
// dolphinScore=108;
// dolphinScore=89;
//  const averageDolphin= (96+108+89)/3;
//  console.log(averageDolphin);

// let koalasScore =88;
// koalasScore =91;
// koalasScore =110;
//  const averageKoalas= (88+91+110)/3;
//  console.log(averageKoalas);

//  const winner= averageDolphin>averageKoalas;
//  if (winner){
//  console.log("dolphin is winner");
//  }
//  else{
//     console.log("koalas is winner");
//  }

//  //assignment-----4//
 
//  let bill = 20000;
//     let x = 50 <= bill 
//     x= bill <= 300;

//  if(x){
//     console.log("tip is 15%");
//  }
// else{
//     console.log("tip is 20%");
// } 
 
// let billValue =275;
// let tipValue=billValue*15/100;
// // console.log(tipValue)
// let finalValue =(billValue+tipValue);
// console.log(finalValue);

// billValue=40;
// tipValue = billValue*20/100;
//  finalValue=(billValue+tipValue);
// console.log(finalValue);

// billValue= 430;
// tipValue =billValue*20/100;
// finalValue=(billValue+tipValue);
// console.log(finalValue);



/////function///

/////array assign1 part-2

console.log("----assign second--");


function caclAverage(s1, s2, s3){
    return (s1+s2+s3)/3
}
const avgKoalas = caclAverage(65, 54, 49);
const avgDolphin = caclAverage(44, 23, 71)

console.log(avgKoalas);
console.log(avgDolphin);
 
if(avgDolphin>avgKoalas){
    console.log("Dolphin wins the by score" + avgDolphin)
}
else{
    console.log("koalas wins the by score" +" " + avgKoalas)
}

function checkwinner(avgDolphin, avgKoala){
    return avgDolphin<avgKoala;
}
console.log(checkwinner(avgDolphin, avgKoalas))

// const caclAverage= (s1, s2, s3)=> console.log((s1+s2+s3)/3)
// caclAverage(44, 23, 71);



//2nd

function caclTip(bill){
    a= bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return a;
}
b =caclTip(100);
console.log(b);
  
const billValue =[125, 555, 44]
// const tips =[caclTip(billValue[0]), caclTip(billValue[1]), caclTip(billValue[2])];
// const total =[tips[0]+billValue[0], tips[1]+billValue[1], tips[2]+billValue[2]]
console.log(billValue);
// console.log(tips);
// console.log(total)

//3rd

const person ={
    fullName1: "Mark",
    markMass:78,
    markHeight:1.69,
    fullName2: "John",
    johnMass:92,
    johnHeight:1.95,
    markBMI:caclBMI,

}
console.log(person);

function caclBMI(a,b){
  return a/b**2;
}
console.log(caclBMI(person.markMass, person.markHeight), caclBMI(person.johnMass, person.johnHeight));


const bill =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
function caclTip(bill){
    a= bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return a;
}
for(let i=0; i <bill.length; i++){
  tip=(caclTip(bill[i]));
  total =(tip+bill[i]);
  console.log(tip,total);
}
let sum=0;
for(let i=0; i<bill.length; i++){
sum+=bill[i]
}
console.log(sum);
function average(a,b){
    return a/b;
}
console.log(average(sum, bill.length));
