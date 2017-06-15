'use strict';

function sum(a, b) {
    let name;
    console.log(this);
    console.log(a + b);
}
let g = sum.bind('Contecst');
// let g = sum.bind('Context');

g(5, 9);

let user = {
    name: 'Vasja',
    sayHi() {
        console.log(`Privet ${this.name}`);
    }
}

setTimeout(user.sayHi.bind(user), 3000);
// setTimeout(user.sayHi, 2000);

function multiply(a, b) {
    console.log(a * b);
}

let result = multiply.bind(null, 2);
result(5);