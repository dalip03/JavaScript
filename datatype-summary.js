// Primitive 
// refrence type   these are call by value they dont give you the actual data location they return a copy of that 
// and all the changes make by you done in that copy . not in actual memory 

//undefined : memory is defined but value in not defined what value is come in that 
//BigInt  : big values and syntefic value 
//7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt 


 const score =100 

 const id = Symbol('12')
 const ID =Symbol('12')
 console.log(id === ID);  // false 

 const bigNumber = 34565434323n // use bigInt use n in last
 //so js is dynamic typed
// ...............................

// no-primitive (Reference) // refrence add or allocate in memory directly
// Array  , Objects , functions 

const heros = ["Shaktiman" , "naagraj" , "doga"];

//objects
let myObj = {
     name:"Dalip",
     age : 23
}

//functions 

const myFunction = function()
{
 console.log("Hello !!");
}

// ++++++++++++++++++++++++++++++++++++++

// stack (Primitive )
// Heap  (Non-primitive)

let myName = "Dalip"

let User1 = {
     Id:12,
     Upi : 1234567,
}