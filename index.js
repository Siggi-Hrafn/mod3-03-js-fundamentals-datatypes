//###### Variable declaration ########
var myName = "Name: Siggi Hrafn" + " (by var declaration)";
let myJob = "Occupation: I´m a teacher" + " (by get declaration)";
const myPet = "My cat is named Dita von Teese" + " (by const declaration)";
//###### Variable declaration ########

//######## Assignment operators #########

let x = 5;
const y = 10;

const addition = x+y;
const additionTwo = x+=y;
const multiplication = x*y;
const multiplicationTwo = x*=y;


console.log("Hello world!");
console.log(myName);
console.log(myJob);
console.log(myPet);
console.log("Adding two numbers " + x + " and " + y + " => " + addition);
console.log("Addition two, same result => " + additionTwo)
console.log(x);
console.log("Multiplying two numbers " + x + " and " + y + " => " + multiplication);

console.log("Adding 100 to x value as is 150 => " + (x+=100));
console.log("Value of x as is 250 now divided by 10 => " + (x/=y));
console.log("Value of x as is 25 now, subtract 10 => " + (x-=y));
console.log("Value of x is now: " + x);
console.log("Modulus value of x as is 15 now, division remainder of y 10 => " + (x%=y));
console.log("Value of x is now: " + x);
console.log("Value of x as is 5 now, exponential operator ** 3 => 5*5*5 => " + (x**=3));
console.log("Value of x is now: " + x);

let z = x++;
console.log("++ Value of x is now: " + x);
let q = x--;
console.log("-- Value of x is now: " + x);



