// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

//
//
// function Tag (nametag, description, attribute) {
//     this.nameag = nametag || 'empty';
//     this.description = description || 'empty';
//     this.attribute = attribute || [];
// };
//
// let title = '<h1>';
// let descrp = 'Lorem bla-bla-bla';
// let attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'accesskey1', actionOfAttr: 'области с помощью комбинации клавиш'},
//     {titleOfAttr: 'accesskey2', actionOfAttr: 'помощью комбинации клавиш'},
// ];
//
// let x = new Tag (title, descrp, attrs);
// console.log(x);


// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     brand: 'Mazda',
//     model: 'RX7',
//     data: 2013,
//     maxSpeed: 280,
//     engineCapacity: 1.4,
//     driver: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info: function () {
//         // console.log(car);
//         console.log(`
//             brand: ${this.brand},
//             model: ${this.model},
//             data: ${this.data},
//             maxSpeed: ${this.maxSpeed},
//             engineCapacity: ${this.engineCapacity}
//         `)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue) {
//         this.data = newValue;
//     }
// };
//
// let drivers = {name: 'Sasha Loser', age: 19};
//
// car.changeYear(2021);
// car.increaseMaxSpeed(35);
// car.info();
// car.driver();

























