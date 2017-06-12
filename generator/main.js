'use strict';

// function* generator() {
//     console.log('Start');
//     yield 10 + 5;
//     console.log('Finish');
// }


// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());

// function generate() {
//     let current = 1;
//     return {
//         [Symbol.iterator]() {
//             return {
//                 next() {
//                     let result = { value: undefined, done: true };
//                     if (current < 4) {
//                         result.value = current;
//                         result.done = false;
//                         current++;
//                     } else {
//                         result.value = undefined;
//                         result.done = true;
//                     }
//                     return result;
//                 }
//             };
//         }
//     };
// }

// let iterator = generate()[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

for (let num of range(1, 10)) {
    console.log(num);
}

let numbers = {
    * range(start, end) {
        let current = start;
        while (current <= end) {
            yield current++;
        }
    }
};

for (let num of numbers.range(5, 15)) {
    console.log(num);
}

function* generateArray() {
    yield*[1, 2, 3];
}

function* generate() {
    yield 42;
    yield* generateArray();
    yield 43;

}

let iteration = generate();

console.log(iteration.next());
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);