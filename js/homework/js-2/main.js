//--------1--------
//
//
// --створити масив та вивести його в консоль
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//
// let a = [1, 2, 3, 4, 5];
// let b = ['hello', 'owu', 'world', 'js', 'study'];
// let c = [1, 2, 3, 4, 5, 'hello', 'owu', 'world', 'js', 'study', true, false, true, false, false];
//
// console.log(a);
// console.log(b);
// console.log(c);
//
// let s = [];
// s[1] = 'owu';
// s[0] = 1;
// s[2] = true;
// console.log(s);
//
//
//--------2--------
//
//
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
//
// for (let i = 0; i <= 10; i++) {
//     document.write('<div>' + 'text' + '</div>');
// }
//
//
//--------3--------
//
//
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
//
// for (let i = 0; i <= 10; i++) {
//     document.write('<div>' + 'index - ' + i + '</div>');
// }
//
//
//--------4--------
//
//
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
//
// let i = 0;
// while (i <= 20) {
//     document.write('<div>' + '<h1>' + text + '</h1>' + '</div>');
//     document.write(`<div> <h1> index: ${i} </h1> </div>`);
//     i++;
// }
//
//
//--------5--------
//
//
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
//
// let i = 0;
// while (i <= 20) {
//     document.write(`<div> <h1> index: ${i} </h1> </div>`);
//     i++;
// };
//
//
//--------6--------
//
//
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
//
// let arr = [1, 5, 12, 42, 33, 654, 323, 13, 96, 10];
//
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
//
//--------7--------
//
//
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
//
// let string = ['hello', 'js', 'html', 'css', 'frameworks', 'owu', 'okten', 'web', 'developer', 'education'];
//
// for (i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }
//
//
//--------8--------
//
//
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
//
// let arr = [1, true, 'string', false, 22, 'kek', 9, true, 'lol', 13];
//
// console.log(arr);
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
//
//--------9--------
//
//
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
//
// let arr = [213, 'lorem', true, 2, 'ipsum', false, 94, 'owu', true, false, '36'];
//
// for (i = 0; i < arr.length; i++) {
//
//     if (typeof arr[i] === 'boolean') {
//         console.log(arr[i])
//     } else {
//
//     }
// }
//
//
//--------10--------
//
//
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
//
// let arr = [213, 'lorem', true, 2, 'ipsum', false, 94, 'owu', true, false, '36'];
//
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     } else {
//
//     }
// }
//
//
//--------11--------
//
//
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
//
// let arr = [213, 'lorem', true, 2, 'ipsum', false, 94, 'owu', true, false, '36'];
//
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i]);
//     } else {
//
//     }
// };
//
//
//--------12--------
//
//
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
//
// let emptyArr = [];
//
// emptyArr[0] = 1;
// emptyArr[1] = 'lorem';
// emptyArr[2] = 'ipsum';
// emptyArr[3] = true;
// emptyArr[4] = undefined;
// emptyArr[5] = false;
// emptyArr[6] = NaN;
// emptyArr[7] = 43;
// emptyArr[8] = true;
// emptyArr[9] = 22;
//
// for (let i = 0; i < emptyArr.length; i++) {
//     console.log(emptyArr[i]);
// }
//
//
//--------13--------
//
//
// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
//
// for (let i = 0; i < 10; i++ ) {
//     console.log('index ' + i);
//     document.write('index ' + i + '<br>');
// }
//
//
//--------14--------
//
//
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
//
// for (let i = 0; i < 200; i = i + 2) {
//     console.log('index ' + i);
//     document.write('index ' + i + '<br>');
// }
//
//
//--------15--------
//
//
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
//
// for (let i = 2; i <= 200; i++) {
//     if (i % 2 == 0) {
//         document.write('index: ' + i + '<br>');
//         console.log('index: ' + i);
//     }
// }
//
//
//--------16--------
//
//
// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
// for (let i = 2; i <= 200; i++) {
//     if (i % 2 != 0) {
//         document.write('index: ' + i + '<br>');
//         console.log('index: ' + i);
//     }
// }
//
//
//--------17--------
//
//
// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
//
// const count = 60;
// let sec = 0;
// let min = 0;
//
// for (let i = 0; i < count && min !==2; i++) {
//     console.log('min ->', min++);
//
//     for (let j = 0; j < count; j++) {
//         console.log('sec ->', sec++);
//     }
//     sec = 0;
// }
//
//
//--------18--------
//
//
// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
//
// const count = 60;
// let sec = 0;
// let min = 0;
// let hour = 0;
//
// for (let i = 0; i < count && hour !==2; i++) {
//     console.log('hour ->', hour++);
//
//     for (let i = 0; i < count; i++) {
//         console.log('min ->', min++);
//
//         for (let j = 0; j < count; j++) {
//             console.log('sec ->', sec++);
//         }
//         sec = 0;
//     }
//     min = 0;
// }
//
//
//--------19--------
//
//
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
//
// let array = ['a', 'b', 'c'];
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array);
// }






//-----------------------------CLASS-----------------------------------









































