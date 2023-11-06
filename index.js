let item = document.querySelector('.list-group');
//item.children[1].style.color = 'blue'
//item.children[3].style.color = 'blue'
//item.firstElementChild.style.color = 'blue';
//item.lastElementChild.style.color = 'blue';
//item.firstElementChild.nextElementSibling.style.color = 'blue';

//item.children[1].style.backgroundColor = 'green';

//we can hide the elements using the style.display
//item.children[2].style.display = 'none';

//item = document.querySelectorAll('.list-group-item');
//item[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}