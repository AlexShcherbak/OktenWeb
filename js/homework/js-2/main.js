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
// let res = '';
//
// for (let i = 0; i < array.length; i++) {
//     res += array[i];
// }
//
// console.log(res);
//
//
//--------20--------
//
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
//
// let array = ['a', 'b', 'c'];
// let string = '';
// let i = 0;
//
// while (i < array.length) {
//     string = string + array[i];
//     i++;
// }
//
// console.log(string);
//
//
//--------21--------
//
//
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово
//
//
// let array = ['a', 'b', 'c'];
// let str = ''
//
// for (const string of array) {
//     str = str + string;
// }
//
// console.log(str);
//
//
//--------22--------
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово
//
//
// let array = ['a', 'b', 'c'];
// let string = '';
//
// for (const arrayElement in array) {
//     string = string + array[arrayElement];
// }
// console.log(string);


//-----------------------------CLASS-----------------------------------
//
//
//--------1--------
// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
//
// let array = ['a', 'b', 'c'];
//
// for (let i = 1; i <= 3; i++) {
//     array.push(i);
// }
//
// console.log(array);

//--------2--------
// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
//
// let array = [1, 2, 3];
// let a = array.reverse();
// console.log(a);
//
//
//--------3--------
// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
//
// let array = [1, 2, 3];
// array.push(4, 5, 6);
// console.log(array);
//
//
//--------4--------
// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
//
// let array = [1, 2, 3];
// array.unshift(4, 5, 6);
// console.log(array);
//
//
//--------5--------
// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
//
// let arr = ['js', 'css', 'jq'];
// alert(arr.shift());
//
//
//--------6--------
// Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
//
// let arr = ['js', 'css', 'jq'];
// alert(arr.pop());
//
//
//--------7--------
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
//
// let arr = [1, 2, 3, 4, 5];
// let slice = arr.slice(3);
// console.log(slice);
//
//
//--------8--------
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
//
// let arr = [1, 2, 3, 4, 5];
// let slice = arr.slice(0, 2);
// console.log(slice);
//
//
//--------9--------
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
//
// let arr = [1, 2, 3, 4, 5];
// let splice = arr.splice(1,  2,);
// console.log(arr);
//
//
//--------10--------
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]
//
//
// let arr = [1, 2, 3, 4, 5];
// let splice = arr.splice(3,  0, 'a', 'b', 'c');
// console.log(arr);
//
//
//--------11--------
// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
//
//
// let arr = [1, 2, 3, 4, 5];
// let x = arr.splice(1,0,'a', 'b');
// let y = arr.splice(6, 0, 'c');
// let z = arr.splice(8, 0, 'e');
// console.log(arr);
//
//
//--------12--------
// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
//
// let arr = [1, 42, 213, -2, 89, 56, 62, 19, 93, -19, 100, -100];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }
//
//
//--------14--------
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//
//
// let arr = [1, 33, 12, 65, 72, 95, 38, 48, 9, 11];
// let emptyArr = [];
//
// for (const number of arr) {
//     emptyArr.push(number);
// }
//
// console.log(emptyArr);
//
//
//--------15--------
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// let arr = [1, 33, 12, 65, 72, 95, 38, 48, 9, 11];
// let emptyArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     emptyArr[i] = (arr[i]);
// }
//
// console.log(emptyArr);









//--------------------------------------------------------
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
//     5. перебрати циклом while та вивести  числа тільки парні  значення
//     6. перебрати циклом for та вивести  числа тільки парні  значення
//     7. замінити кожне число кратне 3 на слово "okten"
//     8. вивести масив в зворотньому порядку.
//     9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//     10. створити пустий масив та :
//          - заповнити його 50 парними числами за допомоги циклу.
//          - заповнити його 50 непарними числами за допомоги циклу.
//
//

let arr = [2,17,13,6,22,31,45,66,100,-18];

//-------------1-------------
// 1. перебрати його циклом while
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

//-------------2-------------
// 2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//-------------3-------------
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arr.length) {
//     if (i % 2) {
//         console.log(arr[i]);
//     }
//     i++
// }

//-------------4-------------
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//         if(i % 2) {
//             console.log(arr[i])
//         }
// }

//-------------5-------------
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
//     i++
// }

//-------------6-------------
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

//-------------7-------------
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);

//-------------8-------------
// 8. вивести масив в зворотньому порядку.
// let reverse = [];
// for (i = arr.length-1; i >= 0; i--) {    =========> потрібно переробити
//     reverse[i] = arr[i];
// }
// console.log(reverse);















