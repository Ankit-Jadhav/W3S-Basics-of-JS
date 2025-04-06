//1. Difference between var, let and const
console.log("JavaScript : var, let and const");

//Example 1: Using `var`
//Funtion declaration
function testVar() {
    var x = 10;  //Declare and initialize x to 10
    console.log("x = ", x);
    if(true) { // Start of a block (if condition is always true)
var x = 20; //Redeclaring and reassigning x in the same function scope.
console.log("Inside if block, x =", x);// Prints: Inside if block, x = 20
    }
console.log("Outside if block, x= ", x);  // Prints: Outside if block, x = 20 (due to function-scoped variable)
}
//Call to function
//testVar();

// Example 2: Using `let` for block-scoping
//Funtion declaration
function testLet() {
    let y = 10; // Declare and initialize y to 10
    console.log("y = ", y);
    if (true) {// Start of a block (if condition is always true)
        let y = 20; // Declare a new y inside the block, creating a block-scoped variable
        console.log ("Inside if block, y = ", y); // Prints: Inside if block, y = 20
    }
    console.log("Outside if block, y=", y); // Prints: Outside if block, y = 10 (block-scoped variable)
}
//Call the function
//testLet();  



// Example 3: Using `const` for constant values
function testConst() {
    const z = 30;
    console.log ("z = ", z); //30
     // Uncommenting the next line will throw an error because re-assignment is not allowed
  // z = 40; // Error: Assignment to constant variable.
  
  // const z = 50; // Error: Cannot redeclare block-scoped variable 'z'

}
//testConst();

// Example 4: Mutability of Objects with `const`
const person = { name : "Ankit", age : 25};
console.log("person : " , person );
// You can modify the properties of the object
person.age = 26; // This is allowed
console.log("Modified person : " , person);   //{ name : "Ankit", age : 25};
// But you cannot reassign the object itself
//person = { name: "Bob", age: 30 }; // Error: Assignment to constant variable.

//way 2
// function human() {
//     const person = { name : "Ankit", age : 25};
// console.log("person : " , person );
// // You can modify the properties of the object
// person.age = 26; // This is allowed
// console.log("Modified person : " , person);
// // But you cannot reassign the object itself
//  person = { name: "Bob", age : 30}; // Error: Assignment to constant variable.
// }
// human();

// Example 5: Hoisting with `var
function testVarHoisting()



