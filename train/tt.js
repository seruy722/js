'use strict';

let data = [
    ['first', 1],
    ['second', 2],
    ['third', 3]
];



let obj = data.reduce((result, value) => {
    result[value[0]] = value[1];
    return result;
}, {});

console.log(obj);

let koll = [...document.querySelector('.nav').children].reduce((result, elem) => {
    result.push(elem.innerHTML);
    return result;
}, []);

let koll2 = [...document.querySelector('.nav').children].map(elem => elem.innerHTML);

console.log(koll2);

let dKol = [...document.querySelector('.nav').children];

let mass = ['JavaScript', 'React', 'Nodejs'];

for (let key of mass) {
    console.log(key);
}



let iterator = dKol[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let obj1 = {
    name: 'Serge',
    old: '28'
};

// for (let value of obj1) {
//     console.log(value);
// }


let nav = document.querySelector('.nav');
let button = document.querySelector('.btn2');

button.onclick = function() {
    nav.classList.toggle();
}