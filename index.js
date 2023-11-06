let itemlist = document.querySelector('#items');
//parentNode------

//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemlist.parentNode.parentNode);
//console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement-----
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement);
// console.log(itemlist.parentElement.parentElement.parentElement);
//parentNode and parentElement are the same

//childNodes
//console.log(itemlist.childNodes); //its also count linebreak ans whitespace counting so this is useless

//this is useful------------>
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'yellow';

//console.log(itemlist.firstChild); ////its also count linebreak ans whitespace counting so this is useless

//this is useful------------>
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'hello'

// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'hello'

//console.log(itemlist.nextSibling); //this is useless

//console.log(itemlist.nextElementSibling);

// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'yellow';

//create Element------->

//create a div
let newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//add attribute
newDiv.setAttribute('title','HelloDiv');
//createTextNode
let newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);

//console.log(newDiv);

//let container = document.querySelector('header .container');
//let h1 = document.querySelector('header h1');
//container.insertBefore(newDiv,h1);

let container = document.querySelector('div #main');
let items = document.querySelector('div h2');
let mainitems = items.nextElementSibling.nextElementSibling;
container.insertBefore(newDiv,mainitems);