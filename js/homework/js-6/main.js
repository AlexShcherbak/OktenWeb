// - создать массив с 20 числами.
// let numbers = [1, 2, 43, 54, 12, 33, 55, 122, 42, 554, 123, 55, 95, 70, 833, 633, 6321, 252, 16, 20];

// -- при помощи метода sort и колбека  отсортировать массив.
// let sortNumber = numbers.sort();
// console.log(sortNumber);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// numbers.sort(function (a, b) {
//     return a-b; // return b-a
// })
// console.log(numbers);

// -- при помощи filter получить числа кратные 3
// let filter = numbers.filter(function (number) {
//     return number % 3 === 0;
// })
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let filter = numbers.filter(function (number) {
//     return number % 10 === 0;
// })
//
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// numbers.forEach(number => console.log(number));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = numbers.map(function (value) {
// return value*3
// });
//--------------or--------------
// let map = numbers.map(value => value*3);
// console.log(map);


// - создать массив со словами на 15-20 элементов.
// let array = ['one', 'two', 'lorem', 'owu', 'blueface', 'math', 'physics', 'english', 'problems', 'trouble'];

// -- отсортировать его по алфавиту в восходящем порядке.
// const sortArray = array.sort((a, b) => {
//     if(a < b) {
//         return -1;
//     } if (a > b) {
//         return 1
//     }
//     return 0;
// });
// console.log(sortArray);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// const sortArray = array.sort((a, b) => {
//     if(a < b) {
//         return 1;
//     } if (a > b) {
//         return -1;
//     }
//     return 0;
// });
// console.log(sortArray);

// -- отфильтровать слова длиной менее 4х символов
// let filter = array.filter((value) => value.length <= 4);
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = array.map((value) => {
//     value += '!';
//     return value;
// });
// console.log(map);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let ageUp = users.sort((a, b) => {
//     if (a.age > b.age) {
//         return -1;
//     }
// })
// console.log(ageUp);
//
// let ageDown = users.sort((a, b) => {
//     if(b.age > a.age) {
//         return -1;
//     }
// })
// console.log(ageDown);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortOfSymbol = users.sort((a,b) => {
//     if (a.name.length > b.name.length) {
//         return -1;
//     }
// })
// console.log(sortOfSymbol);

// let sortOfSymbolDown = users.sort((a, b) => {
//     if (b.name.length > a.name.length) {
//         return -1;
//     }
// })
// console.log(sortOfSymbolDown);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let userAddId = users.map(value => {
//     return value + document.
// })




// - відсортувати його за індентифікатором
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком



