let num1=10;
let num2=7;
// let promise=new Promise((fulfil,notfulfil) =>{
//     let sum=num1+num2;
//     if(sum >20){
//         fulfil();
//     }
//     else{
//         notfulfil();
//     }
// })

// promise.then(()=>{
//     console.log("Promise was Fulfilled")
// }).catch(()=>{
//     console.log("Promise was not Fulfilled");
// })


// function addtwonum(num1,num2){
//     let sum=0;
//     setTimeout(()=>{
//         console.log(num1+num2);
//         sum=num1+num2;
//     },3500);
//     console.log("Inside function addtwonum");
//     return sum;
// }
// console.log(addtwonum(10,8));

function addtwonum(num1,num2){
    return new Promise((fulfil,notfulfil)=>{
        setTimeout(()=>{
            console.log("Inside setTimeout");
            fulfil(num1+num2);
        },3500);
        // notfulfil(new Error("An error occured"));
    });
}
addtwonum(9,8).then(()=>{
    console.log("Promise was fulfilled");
}).catch(()=>{
    console.log("Promise was not fulfilled");
})