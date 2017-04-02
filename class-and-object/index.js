/**
 * In javascript everything is an object. It is an object oriented scripting language
 * Objects can be initialized using new Object() or Object.create() or literal notation as like JSON (using curly braces {})
 *
 */

// Method 1 new `ClassName`()
/**
 * Person is a javascript function
 *
 * @class { Person }
 * @param {`String`} - `name` of the person
 * @param {`Number`} - `age` of the person
 * @param {`String`} - `sex` of the person
 * @param {`String`} - `weight` of the person
 * @return { null }
 */
function Person(name, age, sex, weight){
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.weight = weight + 'kg';
}

//person is an instance object for Person class
var person = new Person('Pradeep', 26, 'Male', '60');
console.log('name : '+person.name); //'Pradeep'
console.log('age : '+person.age); //26
console.log('sex : '+person.sex); //'Male'
console.log('weight : '+person.weight); //'60kg'

//Method 2 literal notation (curly braces {})
/**
 * literal method uses curly braces to create an object.
 * Object can be initialized with zero and more pairs of key value
 * It uses key, value pair
 *
 * @type {Object}
 */
var _person = {}
_person.name = 'Pradeep';
_person.age = 26;
_person.sex = 'Male';
_person.weight = '60kg';
console.log('name : '+_person.name); //'Pradeep'
console.log('age : '+_person.age); //26
console.log('sex : '+_person.sex); //'Male'
console.log('weight : '+_person.weight); //'60kg'

//Another way for above literal notation
//It uses key, value pair
var name = 'Pradeep', age = 26, sex = 'Male', weight = '60kg';
var o = {
  name:name,
  age:age,
  sex:sex,
  weight:weight
};

console.log('name : '+o.name); //'Pradeep'
console.log('age : '+o.age); //26
console.log('sex : '+o.sex); //'Male'
console.log('weight : '+o.weight); //60kg

//New notation in ECMAScript 2015 (ES6) standard
//In this method ES6 will consider `key` as given variable name
//In below example the ES6 will consider key as `name` for name
var name = 'Pradeep', age = 26, sex = 'Male', weight = '60kg';
var _o = {
  name,
  age,
  sex,
  weight
};

console.log('name : '+_o.name); //'Pradeep'
console.log('age : '+_o.age); //26
console.log('sex : '+_o.sex); //'Male'
console.log('weight : '+_o.weight); //60kg

// Example to use of : Object.keys
//It returns an array
//syntax: Object.keys(objectName);
console.log('Keys in `_o` object : ', Object.keys(_o));

// Example to use of : hasOwnProperty
// It helps to find the property of an object is user defined
var obj = {
  x: 'foo'
};
console.log('`x` is an own property of `obj` : ',obj.hasOwnProperty('x')); //true
