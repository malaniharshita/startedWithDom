//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);

let headerTitle = document.getElementById('main-header');
headerTitle.style.borderBottom = 'solid 3px #000';

let items = document.getElementsByClassName('list-group-item');
//console.log(items[1]);
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green';