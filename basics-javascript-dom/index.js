/**
 * It creates a HTML element and append as a child element to the html body.
 *
 * @method { appendChildElement }
 * @param { null }
 */
function appendChildElement() {
  //createElement creates a html element
  var el = document.createElement('DIV');
  el.id = 'foo-1';
  el.innerHTML = '<h3>A new DIV tag is added into page</h3>';
  //appendChild it injects the el to the html page
  document.body.appendChild(el);
}

/**
 * It gets the current title of the html page and alerts it in popup
 *
 * @method { getPageTitle }
 * @param { null }
 */
function getPageTitle() {
  var title = document.title;
  alert(title);
}

/**
 * It sets the new title to the html page
 *
 * @method { changePageTitle }
 * @param { null }
 */
function changePageTitle() {
  var title = "Introduction to Javascript and DOM " + new Date();
  document.title = title;
  getPageTitle();
}

/**
 * Examples for DOM properties 'getElementById', 'getElementsByTagName', 'getElementsByClassName'
 * @return {[type]} [description]
 */
function foo() {
  //'content' is an id of html element
  var el = document.getElementById('content');
  console.debug('html element which has id `content` ', el);

  //'p' is tag html name. It returns all the p tag elements in an array
  var el = document.getElementsByTagName('p');
  console.debug('html p tag elements are ', el, 'length : ', el.length);

  //'title' is css class name, it filters the html elements which has same class name.
  //returns an array of html elements
  var el = document.getElementsByClassName('title');
  console.debug('html p tag elements are ', el, 'length : ', el.length);
}

foo();
//var myButton =  document.getElementById('')
