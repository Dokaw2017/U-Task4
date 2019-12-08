'use strict';
const berry = document.getElementById('berry');
console.log(berry.outerHTML);
console.log('I found the berry: ', berry.innerHTML);
berry.style.backgroundColor = 'red';

const orange = document.querySelector('[data-foodtype="squishy"]');
console.log(orange.outerHTML);
console.log('I found the fruit: ', orange.textContent);
orange.style.backgroundColor = 'orange';

const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
console.log('Using the for loop here: ' );
for (var i = 0; i<liCollection.length; i++){
    console.log( liCollection[i].innerHTML );    
    liCollection[i].innerHTML == 'Pear'? liCollection[i].style.backgroundColor = 'green': false;
    liCollection[i].style.width = '100px';
    liCollection[i].style.listStyleType = 'none';    
}    


const liCollection2 = document.querySelectorAll('li');
console.log(liCollection2);
console.log('Using the forEach here: ');
liCollection2.forEach(li => {
    li.style.border = '1px solid black'
    console.log(li.textContent);
});