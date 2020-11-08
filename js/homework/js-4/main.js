// ---------1---------
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
// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
//
// function createArray (length, min, max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * max));
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
// let array = [];
// function createArray (length, min, max) {
//     // let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * max));
//     }
//     return array;
//
// }
//
// function arrToFind (minNum) {
//     let a = array.;
//     for (let i = 0; i < minNum.length; i++) {
//         if (array[i] < a) {
//             minNum = a;
//         }
//     }
//     return a;
// }
//
//
//
// const threeNumber = createArray(3, 0, 100);
// console.log(threeNumber);
//
// const smallest =  arrToFind(array);
// console.log(smallest)
// function returnMin (a, b, c) {
//     let min;
//     let max;
//
//     if(a <= b && a <= c) min = a;
//     if(b <= a && b <= c) min = b;
//     if(c <= a && c <= b) min = c;
//
//     console.log(min);
//     return min;
//
// }
//
// returnMin(44, 23, 35);
//
//
// ---------5---------
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
//
// function createArray () {
//    let min = arguments[0];
//    let max = arguments[0];
//
//    for(const value of arguments) {
//        if(min > value) {
//            min = value;
//        }
//
//        if(max < value) {
//            max = value;
//        }
//    }
//
//    return(min);
//
// }
//
// console.log(createArray(9, 1, 12, 123, 23, 123));
//
//
// ---------6---------
// створити функцію яка виводить масив
//
//
// function f(arr){
//     console.log(arr);
//     return arr;
// }
//
// const array = f([1,2 ,3 ,4 ,5]);
//
//
// ---------7---------
// створити функцію яка повертає найбільше число з масиву
//
//
// function createArray () {
//    let min = arguments[0];
//    let max = arguments[0];
//
//    for(const value of arguments) {
//        if(min > value) {
//            min = value;
//        }
//
//        if(max < value) {
//            max = value;
//        }
//    }
//
//     console.log(max)
// }


// ---------9---------
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
//
// function avarage(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum/array.length;
// }
//
// const x = avarage([2, 2, 3, 4, 512, 2]);
// console.log(x);
//
//
// ---------10---------
// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
//
// const people = [
//     first = {
//         name: 'Ivan',
//         age: 22
//     },
//
//     second = {
//         name: 'Alex',
//         age: 43
//     },
//
//     third = {
//         name: 'Andriy',
//         age: 20
//
//     },
//
//     fourth = {
//         name: 'Andriy',
//         age: 20
//
//     }
// ]
//
// const getArrLength = (arr) => arr.length;
// console.log(getArrLength(people));
//
//
// ---------11---------
// Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
//




























