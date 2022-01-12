// Condition 

let x = 10;
let y= 20;
//  if(x==10 || y==10){
//      console.log("x and y is equel to 10");
//  }
//   else{
//      console.log(" x is not equle to 10 ");
//  }

console.log(x === 10 ? "True" : "False");


// Switch Case

const rahul = "CSS";

switch(rahul){
    case "HTML":
    console.log("I am HTMl developer");
    break;
    case "CSS":
    console.log("I am CSS developer");
    break
    default:
    console.log("I am Javascript developer ");
    break


}


// Function in JavaScripts

function ShowText(text,text1){
    console.log("I am Rahul Kumar");
    console.log(text);
    console.log(text1);

}
console.log(ShowText());
console.log(ShowText("Good Morning || Good Night"));


// Constructor Object

function Mobile(brand,price,launchdate){
    this.brand=brand;
    this.price=price;
    this.launchdate=launchdate;


}

const s2 =new Mobile("Samsung" ,"$264","10/02/2019");
console.log(s2);
