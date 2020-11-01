//---------1---------
//Присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write


// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let one = 1;
// let ten = 10;
// let num = -999;
// let number = 123;
// let pi = 3.14;
// let two = 2.7;
// let six = 16;
// let is = true;
// let has = false;
//
// console.log(hello);
// console.log(one);
// console.log(pi);
// console.log(is);
// console.log(has);
// // etc.

//
// alert(hello);
// alert(one);
// alert(pi);
// alert(is);
// alert(has);
// etc.
//
// document.write(hello);
// document.write(one);
// document.write(pi);
// document.write(is);
// document.write(has);
// // etc.
//
//
// //---------2---------
// Переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
//
//
// hello = 'hey';
// one = 11;
// pi = 3.1415;
// is = false;
// has = true;
//
// console.log(hello);
// console.log(one);
// console.log(pi);
// console.log(is);
// console.log(has);
//
// alert(hello);
// alert(one);
// alert(pi);
// alert(is);
// alert(has);
//
// document.write(hello, '</br>');
// document.write(one, '</br>');
// document.write(pi, '</br>');
// document.write(is, '</br>');
// document.write(has, '</br>');
//
//
// //---------3---------
// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
//
// const six = 6;
// const three = 3;
// const twenty = 20;
//
// const day = 'Monday';
// const month = 'October';
// const season = 'Autumn';
//
// console.log(six);
// console.log(three);
// console.log(twenty);
//
// console.log(day);
// console.log(month);
// console.log(season);
//
// alert(six);
// alert(three);
// alert(twenty);
//
// alert(day);
// alert(month);
// alert(season);
//
// document.write(six, '<br>');
// document.write(three, '<br>' );
// document.write(twenty, '<br>');
//
// document.write(day, '<br>');
// document.write(month, '<br>');
// document.write(season, '<br>');
//
//
// //---------4---------
// При помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
//
//
// let surname = prompt('Прізвище');
// let name = prompt('Імя');
// let patronymic = prompt('Імя по батькові');
// //
// console.log(surname + " " + name + " " + patronymic);
// console.log(`${surname} ${name} ${patronymic}`);
// alert(surname + " " + name + " " + patronymic);
// alert(`${surname} ${name} ${patronymic}`);
// document.write(surname + " " + name + " " + patronymic);
// document.write(`${surname} ${name} ${patronymic}`);
//
//
//---------5---------
//Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
//
//
// let person = `${surname} ${name} ${patronymic}`;
// console.log(person);
//
//
//---------6---------
// Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
//
//
// let family = {
//     father: {
//         name: prompt('Імя'),
//         surname: prompt('Прізвище'),
//         patronymic: prompt('Імя по батькові'),
//     },
//     mother: {
//         name: prompt('Імя'),
//         surname: prompt('Прізвище'),
//         patronymic: prompt('Імя по батькові'),
//     },
//     son: {
//         name: prompt('Імя'),
//         surname: prompt('Прізвище'),
//         patronymic: prompt('Імя по батькові'),
//     }
// };
//
// console.log(family);
//
//
//---------7---------
//При помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
//
//
// let firstNumber = +prompt();
// let secondNumber = +prompt();
// let thirdNumber = +prompt();
//
// console.log(firstNumber);
// console.log(secondNumber);
// console.log(thirdNumber);
//
//
//---------8---------
//При помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
//
//
// let firstNumber = parseInt(prompt());
// let secondNumber = parseInt(prompt());
// let thirdNumber = parseInt(prompt());
// let fourthNumber = parseInt(prompt());
//
// console.log(firstNumber);
// console.log(secondNumber);
// console.log(thirdNumber);
// console.log(fourthNumber);
//
// let result = `${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber}`;
// let result2 = firstNumber + secondNumber + thirdNumber + fourthNumber;
// console.log(result);
// console.log(result2);
//
//
//---------9---------
// При помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
//
//
// let firstNumber = parseFloat(prompt());
// let secondNumber = parseFloat(prompt());
// let thirdNumber = parseFloat(prompt());
// let fourthNumber = parseFloat(prompt());
//
// let result = `${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber}`;
// let result2 = firstNumber + secondNumber + thirdNumber + fourthNumber;
//
// console.log(result);
// console.log(result2);
//
//
//---------10---------
//При помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
//
//
// let firstNumber = Math.round(parseFloat(prompt()));
// let secondNumber = Math.round(parseFloat(prompt()));
// let thirdNumber = Math.round(parseFloat(prompt()));
//
// let result = `${firstNumber} ${secondNumber} ${thirdNumber}`;
// let result2 = firstNumber + secondNumber + thirdNumber;
//
// console.log(result);
// console.log(result2);
//
// console.log(firstNumber);
// document.write(secondNumber);
// alert(thirdNumber);
//
//
//---------11---------
// При помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
//
//
// let num = +prompt();
// let pow = +prompt();
// let result = Math.pow(num, pow);
//
// console.log(result);
//
//
//---------12---------
// При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
//
//
// let a = 100;
// let b = 100;
// let c = true;
// let d = undefined;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
//
//
//---------13---------
// Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат
//
//
// let num1 = 5 < 6;     // true
// let num2 = 5 > 6;     // false
// let num3 = 5 >= 6;    // false
// let num4 = 5 === 6;   // false
// let num5 = 10 == 10;  // true
// let num6 = 10 >= 10;  // true
// let num7 = 10 !== 10; // false
// let num8 = 10 < 10;   // false
// let num9 = 10 > 10;   // false
//
//
//---------Доп---------
// Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
//
//
// console.log(132 > 100 && 45 < 12 ); ---------------------------------// false
// console.log(34 > 33 && 23 < 90 ); -----------------------------------// true
// console.log(99 > 100 && 45 > 12 ); ----------------------------------// false
// console.log(132 > 100 || 45 < 12 ); ---------------------------------// true (виконується одна умова)
// console.log(111 > 11 || 45 < 111 ); ---------------------------------// true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); -----// true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); ------// true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); ---// false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); ------// true
// console.log(!!'-1'); ------------------------------------------------// true
// console.log(!!-1); --------------------------------------------------// true
// console.log(!!'0'); -------------------------------------------------// true
// console.log(!!'null'); ----------------------------------------------// true
// console.log(!!'undefined'); -----------------------------------------// true
// console.log(!!(3/'owu')); -------------------------------------------// false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); ----------------------// true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); -// false





// ---------------------------- CLASS ----------------------------------------
//
//
//---------1---------
//Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//
//
// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);
//
//
//---------2---------
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//
//
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
//
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
//
//
//---------3---------
// Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//
//
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' + '3';
// let a10 = 75 + 'кг';
//
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
//
//
//---------4---------
// Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
//
//
// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s);
//
//
//---------5---------
// Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
//
//
// let heightC = 10;
// let dC = 4;
// let pow = Math.pow(dC, 2);
// let pi = 3.1415;
// let v = pi * dC / 4 * heightC;
// console.log(v);
//
//
//---------6---------
// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
//
