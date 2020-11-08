//--------------------1--------------------
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {
//     nick: 'dogger',
//     color: 'gray',
//     noise: '20db',
//     size: 'middle',
//     language: 'hav'
// };
//
// let human = {
//     name: 'Alex',
//     age: 19,
//     height: 180,
//     width: 63,
//     car: false
// };
//
// let car = {
//     name: 'Mazda',
//     model: 'RX7',
//     color: 'red',
//     mules: 85000,
//     door: 4
// };
//
// let flat = {
//     rooms: 2,
//     windows: 3,
//     refrigerator: true,
//     cat: false,
//     square: 43
// };
//
// let book = {
//     name: 'Bla-bla-bla',
//     pages: 249,
//     font: 'stupid',
//     author: 'Explorer S. C.',
//     country: 'Spain'
// };


//--------------------2--------------------
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
//     - 3 5 людей
//     - з 5 автомобілів

// let arr = ['buldog', 'pes', 'sobaken', 'haski', 'dog', 'human', 'person', 'Dr.Dre', 'Eminem', 'Serhiy', 'Mazda', 'Honda',
//  'Suzuki', 'Toyota', 'Porsche'];
//
// console.log(arr);
//
// //-------------or----------------
// let dog = ['buldog', 'pes', 'sobaken', 'haski', 'dog'];
// let human = ['human', 'person', 'Dr.Dre', 'Eminem', 'Serhiy'];
// let car = ['Mazda', 'Honda', 'Suzuki', 'Toyota', 'Porsche'];
//
// let array = [dog, human, car];
// console.log(array);


//--------------------3--------------------
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//      - будинок
//      - водій
//      - іграшку
//      - стіл
//      - сумка

// let house = {
//     rooms: {
//         kitchen: 1,
//         bathrooms: 2,
//         bedrooms: 3,
//         hall: 2
//     },
//     refrigerator: true,
//     pool: false,
//     description: ['big', 'comfortable', 'warm'],
//     street: 'Nevidkruta, 1'
// }
//
// let driver = {
//     car: 'Porsche',
//     moder: 'Cayenne',
//     name: {
//         firstname: 'Tolya',
//         surname: 'Bestdriver'
//     },
//     work: ['Taxi', 'Backend developer', 'teacher'],
//     experience: '3 years'
// }

//------------і так далі---------------


//--------------------4--------------------
// Дан масив:

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//      - статус Андрія
//      - статус Максима
//      - ім'я передостаннього об'єкту
//      - ім'я третього об'єкта
//      - вік Олега
//      - вік Олі
//      - вік + ім'я 5го об'єкта
//      - вік + сатус Анни

// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[9].age);
// console.log(users[4].age + ' ' + users[4].name);
// console.log(users[5].age + ' ' + users[5].status);




//-----------------------------------TEMPLATE 1-------------------------------------
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

//Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//--------------------1--------------------

// - отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content.textContent);

//отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.textContent);

//замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Lorem ipsum';

//замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Lorem Ipsum has been the industry\'s' +
    ' standard dummy text ever since the 1500s';

//змініть кожному елементу колір фону на червоний
content.style.backgroundColor = '#ff0000';

//змініть кожному елементу колір тексту на синій
rules.style.backgroundColor = 'blue';

// отримати весь список класів елемента з id=rules і вивести їх в console.log
let idRules = document.getElementById('rules');
console.log(idRules.classList);

//отримати всі елементи з класом fc_rules
let classRules = document.getElementsByClassName('fc_rules');
for (let i = 0; i < classRules.length; i++) {
    let rulesElement = classRules[i];
    rulesElement.style.color = '#e370ff'         //поміняти колір тексту у всіх елементів fc_rules на червоний
    console.log(rulesElement);
}
//--------------or---------------
// отримати всі елементи з класом fc_rules
console.log(classRules);














