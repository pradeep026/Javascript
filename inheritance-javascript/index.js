/**
 * Prototype helps to define properties and methods to a javascript class
 *
 */

/**
 * Employe class
 * properties in Employe class | name, id, role
 *
 * @class {Employe}
 * @param {Number} - id of an Employe
 * @param {String} - name of an Employe
 * @param {String} - role of an Employe
 */
function Employe(id, name, role) {
  this.id = id;
  this.name = name;
  this.role = role;
  console.log('constructor invoked from ', arguments.callee.caller);
}

/**
 * Set employe bonusAmount
 *
 * @method { setBonus }
 * @param  {Number} bonusAmount
 */
Employe.prototype.setBonus = function(bonusAmount){
  this.bonus = bonusAmount;
}

/**
 * It returns the name of an employe
 *
 * @method { getEmpName }
 * @return {String}
 */
Employe.prototype.getEmpName = function(name){
  // Here `this` context referes the Employe class
  return this.name;
};

/**
 * It returns the id of an employe
 *
 * @method { getEmpId }
 * @return {Number}
 */
Employe.prototype.getEmpId = function(id){
  return this.id;
};

/**
 * It returns the role of an employe
 *
 * @method { getEmpRole }
 * @return {String}
 */
Employe.prototype.getEmpRole = function(){
  return this.role;
};

/**
 * Manager sub class
 *
 * @param {Number} - id of an Employe
 * @param {String} - name of an Employe
 * @param {String} - role of an Employe
 */
function Manager(id, name, role){
  // Call the Employe Class constructor
  Employe.call(id, name, role);
  this.x = 10;
}

//Use Object.create() method to inherit the Employee(Parent Class)
//If we use new Employe() here for inheritance, the constructor will be invoked
//Manager.prototype = new Employe(); // not prefered way
Manager.prototype = Object.create(Employe.prototype);
console.log(Manager.prototype.constructor); // Now the Manager class constructor pointing to Employee Class.
//So set the Manager class constructor to the class
Manager.prototype.constructor = Manager;

//create an instance object for Employe Class
var manager = new Manager(1, 'John', 'Software Engineer');
//console.log('Employe id :'+ employee.getEmpId());
//console.log('Employe name :'+ employee.getEmpName());
//console.log('Employe role :'+ employee.getEmpRole());
