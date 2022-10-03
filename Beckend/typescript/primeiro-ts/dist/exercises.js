"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = exports.square = exports.triangle = exports.sumArr = exports.sum = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `Olá ${name}, voce tem ${age} anos`;
}
exports.personAge = personAge;
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
function sumArr(numbers) {
    return numbers.reduce(sum, 0);
}
exports.sumArr = sumArr;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
