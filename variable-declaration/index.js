// variable declaration and print its data type
// `typeof` is a Javascript keyword to get the data type of the variable
var a = "Foo"; // data type is `String`
console.debug('The data type of a is '+ typeof a); //'string'

var b = 1234; // data type is `Number`
console.debug('The data type of b is '+ typeof b); //'number'

var c = true; // data type is `Boolean`
console.debug('The data type of c is '+ typeof c);

// Function declaration
// `functionName` can be anything and it is a reference to the function
// `functionName` can contain [a-zA-Z], _ and [0-9]
// `functionName` can not start with a numeric value.
// N number of arguments can be passed into a function

/**
 * Javascript function declaration type 1
 * It uses below syntax to delcare a function
 * `function` is a javascript keyword
 *
 * @function { functionName1 }
 */
function functionName1(/*arg1, arg2...*/) {
  //body of the function
  console.log('foo | function delcare by syntactical statement');
}

/**
 * Javascript function declaration type 2
 * It uses below syntax to delcare a function
 * Above function is syntactically a statement.
 * function also be created by function expressions. These functions can be `anonymous`.
 *
 * @function { functionName2 }
 */
var functionName2 = function(/*arg1, arg2...*/){
  //body of the function
  console.log('foo | function delcare by expressions');
};

//Both the functions can be invoked in same way
functionName1();
functionName2();

//Function RETURN

/**
 * A function can return a value in any data type
 *
 * @function { fullName }
 * @return { String } - It returns concat of firstName and lastName
 */
function fullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

console.log('full name is ', fullName('Pradeep', 'Subramaniam'));
