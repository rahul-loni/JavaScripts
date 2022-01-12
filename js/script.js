// Arrays

let framwork =["Angular","React","Vue"];
let database = new Array("DB2" , "SQL" , "MangoDB");


// Accessing 

console.log(framwork);
console.log(framwork[0]);
console.log(framwork[2]);

database[0]="Oracle"
console.log(database);

//Arrays Methods

console.log(framwork.length);
console.log(framwork.sort());
console.log(database.sort());

console.log(database.pop());

console.log(database);
database.shift();
console.log(database);
database.push("casandra");
console.log(database);

console.log(typeof framwork);
console.log(Array.isArray (framwork));
console.log(framwork instanceof Array);


//Objects in JavaScripts

let employee ={
    id:101,
    firstName:"Rahul",
    lastName:"Kumar",
    age:26,
    doj:"20/20/2019",
    address:{
        city:"Barh",
        dis:"Patna",
        country:"India",

    },
    skills:
        ["HTML","CSS","JavaScripts"],

        fullName: function(){
            return `${this.firstName}${this.lastName}`;
        }
};
console.log(this);
//Accessing Objects properties

console.log(employee);
console.log(employee.address);
console.log(employee.address.country);
console.log(employee.skills);
console.log(employee.fullName());
