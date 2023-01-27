const name=[];
name.push("Lav");
console.log(name);


// const name="abc"   // this line will give error because we can redeclare same variable with const keyword and can't change reference



let myName="john";
console.log(myName);
myName=5;
console.log(myName);


// let myName="abc"   // this line will give error because we can redeclare same variable with const keyword but can change refernce


var myname = "main";
console.log(myname);
myname = "book";
console.log(myname);


// string interpolation
let fname="Lav";
let lname="Kumar";
console.log(fname +" "+lname);
// let fullname = fname + " " + lname;
// console.log(fullname)
let fullname=`${fname} ${lname}`;
console.log(fullname);

//Default paramater

function addTwonum(num1,num2){
    return num1+num2;
}
console.log(addTwonum(1,8));

// let addTwoNum = (num1, num2) => num1 + num2;
let addTwoNum=(num1,num2=5) =>{
    console.log(num1);
    console.log(num2);
    return num1+num2;
}
console.log(addTwoNum(1,19));

// spread operator for array
let array1=[10,20,45,7];
console.log(array1);
console.log(...array1);
let newarray1=[89,...array1,35,2];
console.log(newarray1);
console.log(...newarray1);
//rest operator for array

let testfun=(...args)=>{
    console.log(args);
}
testfun(10, 8, 6, 7, 42, 89);

// spread operator for objects
let obj1={
    name:"Lav",
    age:21,
    city:"Ara",
    address:{
        vill:"Sikati",
        PO :"Bagwan"
    }
};
let obj2={...obj1,pin:802203,name:"Guddu"}
obj2.address.vill="Garhani"
console.log(obj2);
console.log(obj1);
let obj3=JSON.parse(JSON.stringify(obj1));
obj3.address.vill="New York";
console.log(obj3);
console.log(obj1);