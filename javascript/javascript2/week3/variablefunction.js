

//7 opgave 1
console.log("loaded");
const functionArray = [
    () => {
        console.log("The first function");
    } ,
    () => {
        console.log("The second function") ;
    } ,
    () => {
        console.log("The third function");
    }

] ;
 for (const func of functionArray){
     func();

 }
     
// opgave 2
const constFunc = () => {
    console.log("const function");
 
} ;

NormalFunc = () => {
    console.log("normal function");
} ;

constFunc () ;
NormalFunc() ;

const objFunc = {
    key: () => {
        console.log("key of the object") ;
    }
} ;
objFunc.key() ;
