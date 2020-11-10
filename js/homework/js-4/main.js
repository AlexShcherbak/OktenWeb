``// ---------1---------
// Створити функцію, яка виводить масив
//
//
// let massive = [1, true, 'kek', 55, false, 13, true, 'lol', 'owu'];
//
// function enterArray(array) {
//     console.log(array);
// };
//
// enterArray(massive);
//
//
// ---------2---------
// створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
//
//
// function createArray (length, min, max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (max-min) + min
//         ));
//     }
//     return array;
// }
//
// const numArray = createArray(10,0,100);
// enterArray(numArray);
//
//
// ---------3---------
// створити функцію яка приймає три числа та виводить та повертає найменьше.
//
//
// function min(a, b, c) {
//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c){
//         return b;
//     } else {
//         return c;
//     }
// }
//
// let s = min(23, 34, 5);
// console.log(s);
//
//
// ---------4---------
// створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function max(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c){
//         return b;
//     } else {
//         return c;
//     }
// }
//
// let s = max(2, 5, 222);
// console.log(s);


// ---------5---------
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function returnAndPrint () {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const  argument of arguments) {
//         if(argument < min) {
//             min = argument;
//         } else if ( argument > max) {
//             max = argument;
//         }
//     }
//     console.log(max);
//     return(min);
// }
//
// const result = returnAndPrint(12, 42, 21, 422, 1,  123, 94, 35, 583, 9, 85);
// console.log(result);


// ---------6---------
// створити функцію яка виводить масив

// let array = [1, true, 2, 'hello', 'owu', false, 99];
//
// function printArray () {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement);
//     }
// };
//
// printArray(array);


// ---------7---------
// створити функцію яка повертає найбільше число з масиву


// const returnMaxNum = (array) => {
//     let max = array[0];
//     for (const max1 of array) {
//         if (max < max1) max = max1;
//     }
//     return max;
// }
//
// let s = returnMaxNum([1, 43, 52, 2, 12, 42])
// console.log(s);


// ---------8---------
// створити функцію яка повертає найменьше число з масиву

// const returnMinNum = (array) => {
//     let min = array[0];
//     for (const min1 of array) {
//         if (min > min1) min = min1;
//     }
//     return min;
// }
//
// let s = returnMinNum([5, 23, 2123, 53, 1, 3, 124, 4])
// console.log(s);


// ---------9---------
// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sum (array)  {
//     let x = 0;
//     for (const item of array) {
//         x = x + item;
//     }
//     return x;
// }
//
// let result = sum([1, 2, 3, 4, 5]);
// console.log(result);


// ---------10---------
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function sum (array)  {
//     let x = 0;
//     for (const item of array) {
//         x = x + item;
//     }
//     return x/array.length;
// }
//
// let result = sum([1, 2, 3, 4, 5]);
// console.log(result);


// ---------11---------
// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві











