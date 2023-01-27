// 1.map()

let array1=[20,30,8,7,35];
// let newarray1=[];
// for(let i=0;i<array1.length;i++){
//     newarray1[i]=array1[i]*array1[i];
// }

// function funcmap(num){
//     return num*num;
// }

// let addtwonum=(a,b)=>a+b;
// let num1=4;
// let num2=5;
// console.log(addtwonum(num1,num2))

// let funcmap=(num)=> num*num;
// let newarray1 = array1.map(funcmap);

let newarray1=array1.map((value,index)=>
{
    console.log(index);
    return value*value;
});
console.log(array1)
console.log(newarray1);



//2.foreach()
array1.forEach((Element,index)=>{
    Element*=Element;
    console.log(Element)
})
console.log(array1);


//3.filter()
let newarray2=array1.filter((Element)=>Element>=15
)
console.log(array1);
console.log(newarray2);


//4.find()
let newarray3=array1.find((value)=>{
    return value>20;
})
console.log(array1);
console.log(newarray3);

//5.sort()
let newarray4 = array1.sort((val1, val2)=>{
    val1=Number(val1);
    val2=Number(val2);
    return val1-val2;
});
console.log(newarray4);

//object destructuring

let obj1 = {
  name: "Lav",
  age: 21,
  city: "Ara",
  address: {
    vill: "Sikati",
    PO: "Bagwan",
    phone:{
        mob1:1201201201,
        mob2:1451451451
    }
  },
};
let mob1 = obj1.address.phone.mob1;
let{name:mname, age:mage}=obj1
console.log(mname,mage);


//object matching
let obj2 = {
  name: "Lav",
  age: 21,
  city: "Ara",
  address: {
    vill: "Sikati",
    PO: "Bagwan",
    phone: {
      mob1: 1201201201,
      mob2: 1451451451,
    },
  },
};
let obj3={
    name:"Lav"
}

function equaltwoobj(obj1,obj2){
    if(obj1===obj2){
        return true;
    }
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for(let keys of Object.keys(obj1)){
        if(typeof obj2[keys] === "undefined"){
            return false;
        }
        if(obj2[keys]!==obj1[keys]){
            return false;
        }
    }
    return true;
}

console.log(equaltwoobj(obj1,obj2));
console.log(equaltwoobj(obj2,obj3));


//map and set


let map=new Map();
map.set(1,"Lav");
map.set(2,"Kumar");
console.log(map);

let set=new Set();
set.add(10);
set.add(-2);
console.log(set);


// class

class Animal {
    noofleg;
    color;
    family;
    sound;
    constructor(noofleg,
    color,
    family,
    sound){
        this.noofleg=noofleg;
        this.color=color;
        this.family=family;
        this.sound=sound;
    }
    showani(){
        console.log(`this animal belongs to family ${this.family}`);
    }
}

let cow= new Animal(4,"White","don't know","idk");
console.log(cow);
cow.showani();