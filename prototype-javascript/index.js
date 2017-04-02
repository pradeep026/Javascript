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

//create an instance object for Employe Class
var employee = new Employe(1, 'John', 'Software Engineer');
console.log('Employe id :'+ employee.getEmpId());
console.log('Employe name :'+ employee.getEmpName());
console.log('Employe role :'+ employee.getEmpRole());
