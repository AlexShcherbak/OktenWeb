//----------------1----------------
// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let me = {
    firstName: 'Oleksandr',
    surname: 'Shcherbak',
    status: false
};

let notebook = {
    brand: 'Macbook',
    model: 'pro',
    screenSize: '15.6'
};

let cat = {
    nick: 'Nick',
    weight: 5,
    sound: 'Meow'
};

let dog = {
    name: 'Apple',
    color: 'gray',
    hasTail: true
};

let house = {
    rooms: 3,
    street: 'Vinnichenka 6',
    floors: '2'
};


//----------------2----------------
// создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект

let car = {
    brand: {
        name: 'Toyota',
        country: 'Japan'
    },
    moder: 'Prado',
    yearsOfManufacture: [1989, 1992, 1994, 1999, 2003],
}

let picture = {
    title: 'Za bygrom',
    author: {
        firstName: 'Stepan',
        surname: 'Napets'
    },
    country: 'Ireland',
    prizesPlace: [2, 4, 1, 10, 3]
};

let phone = {
    brand: 'Samsung',
    model: 'A70',
    madeIn: ['China', 'Japan', 'Australia'],
    processor: {
        usa: 'snapdragon',
        eu: 'exynos',
        china: 'mtk'
    }
};

let pencil = {
    color: ['blue', 'red', 'black'],
    size: 10,
    format: {
        x: 'y',
        z: 'c'
    }
};

let windows = {
    layers: [1, 2, 3, 4],
    forms: {
        square: [500, 500],
        rectangle: [1000, 500]
    }
};

//----------------3----------------
// При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const meKey in me) {
//     console.log(meKey);
// };
//
//
// console.log('-------------');
//
// for (const carKey in car) {
//     console.log(carKey);
// };


//----------------4----------------
// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(me));

// console.log('--------------')

// let keyCar = Object.keys(car);
// console.log(keyCar);


//----------------5----------------
// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)

// let array = [
//     {name: 'Mazda', model: 'RX', yearsOfManufacture: 1996, power: 170, color: 'red'},
//     {name: 'Honda', model: 'IR', yearsOfManufacture: 1982, power: 115, color: 'blue'},
//     {name: 'Volswagen', model: 'Passat', yearsOfManufacture: 2000, power: 130, color: 'white'},
//     {name: 'Nissan', model: 'GTR', yearsOfManufacture: 2015, power: 445, color: 'purple'},
//     {name: 'Huyndai', model: 'Gera', yearsOfManufacture: 2001, power: 128, color: 'gray'},
//     {name: 'lamborghini', model: 'Aventador', yearsOfManufacture: 2018, power: 755, color: 'black'},
//     {name: 'Porsche', model: 'Cayenne', yearsOfManufacture: 2019, power: 684, color: 'orange'},
//     {name: 'Porsche', model: 'Cayenne Remastered', yearsOfManufacture: 2020, power: 890, color: 'green'},
//     {name: 'Bugatti ', model: 'Veyron', yearsOfManufacture: 2020, power: 920, color: 'darkblue'},
//     {name: 'Toyota', model: 'Land Cruiser', yearsOfManufacture: 2016, power: 220, color: 'black'}
// ];


//----------------6----------------
// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)

// let cities = [
//     {name: 'Kyiv', population: 3100000, country: 'Ukraine', region: 'Kyiv'},
//     {name: 'Rivne', population: 241321, country: 'Ukraine', region: 'Rivne'},
//     {name: 'Lviv', population: 823953, country: 'Ukraine', region: 'Lviv'},
//     {name: 'Krakow', population: 1823953, country: 'Poland', region: 'Polish'},
//     {name: 'Odessa', population: 957154, country: 'Ukraine', region: 'Odessa'},
//     {name: 'Harkiv', population: 1127154, country: 'Ukraine', region: 'Harkiv'},
// ];


//----------------7----------------
// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars = [
//     {name: 'Mazda', model: 'RX', yearsOfManufacture: 1996, power: 170, color: 'red', driver: {firstName: 'Max', age: 32, sex: 'male', experience: '2 years'}},
//     {name: 'Honda', model: 'IR', yearsOfManufacture: 1982, power: 115, color: 'blue', driver: {firstName: 'Alex', age: 21, sex: 'male', experience: '1 years'} },
//     {name: 'Volswagen', model: 'Passat', yearsOfManufacture: 2000, power: 130, color: 'white', driver: {firstName: 'Katya', age: 25, sex: 'female', experience: '9 months'}},
//     {name: 'Nissan', model: 'GTR', yearsOfManufacture: 2015, power: 445, color: 'purple', driver: {firstName: 'Oleh', age: 30, sex: 'male', experience: '5 years'}},
//     {name: 'Huyndai', model: 'Gera', yearsOfManufacture: 2001, power: 128, color: 'gray', driver: {firstName: 'Dima', age: 42, sex: 'male', experience: '15 years'}},
//     {name: 'lamborghini', model: 'Aventador', yearsOfManufacture: 2018, power: 755, color: 'black', driver: {firstName: 'Ira', age: 23, sex: 'female', experience: '2 years'}},
// ];


//----------------8----------------
// проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
//
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// };
//
// console.log('------------------------------------------');
//
//
// let j = 0;
// while (j < cities.length) {
//     console.log(cities[j]);
//     j++;
// };
//
// console.log('------------------------------------------');
//
// let f = 0;
// while (f < cars.length) {
//     console.log(cars[f]);
//     f++;
// };



//----------------9----------------
// проитерировать каждый массив из задания 5,6,7 при помощи for

// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }
//
// console.log('--------------------------------------------');
//
// for (let i = 0; i < cities.length; i++) {
//     const citiesElement = cars[i];
//     console.log(citiesElement);
// }
//
// console.log('--------------------------------------------')
//
// for (let i = 0; i < cars.length; i++) {
//     const carElement = cars[i];
//     console.log(carElement);
// }


//----------------10----------------
// проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const arrayElement of array) {
//     console.log(arrayElement);
// };
//
// console.log('-------------------------------------------------');
//
// for (const citiesElement of cities) {
//     console.log(citiesElement);
// };
//
// console.log('-------------------------------------------------');
//
// for (const carsElement of cars) {
//     console.log(carsElement);
// };


//----------------11----------------
// взять объекты из задания 1 и превратить каждый в json.

// let copyMe = JSON.stringify(me);
// let copyNotebook = JSON.stringify(notebook);
// let copyCat = JSON.stringify(cat);
// let copyDog = JSON.stringify(dog);
// let copyHouse = JSON.stringify(house);


//----------------12----------------
// взять json из задания 11 и превратить их обратно в объекты.

// let removeCopyMe = JSON.parse(copyMe);
// let removeCopeNotebook = JSON.parse(copyNotebook);
// let removeCopeCat = JSON.parse(copyCat);
// let removeCopeDog = JSON.parse(copyDog);
// let removeCopeHouse = JSON.parse(copyHouse);


//----------------13----------------
// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// массив із завдання 5
// let array = [
//     {name: 'Mazda', model: 'RX', yearsOfManufacture: 1996, power: 170, color: 'red'},
//     {name: 'Honda', model: 'IR', yearsOfManufacture: 1982, power: 115, color: 'blue'},
//     {name: 'Volswagen', model: 'Passat', yearsOfManufacture: 2000, power: 130, color: 'white'},
//     {name: 'Nissan', model: 'GTR', yearsOfManufacture: 2015, power: 445, color: 'purple'},
//     {name: 'Huyndai', model: 'Gera', yearsOfManufacture: 2001, power: 128, color: 'gray'},
//     {name: 'lamborghini', model: 'Aventador', yearsOfManufacture: 2018, power: 755, color: 'black'},
//     {name: 'Porsche', model: 'Cayenne', yearsOfManufacture: 2019, power: 684, color: 'orange'},
//     {name: 'Porsche', model: 'Cayenne Remastered', yearsOfManufacture: 2020, power: 890, color: 'green'},
//     {name: 'Bugatti ', model: 'Veyron', yearsOfManufacture: 2020, power: 920, color: 'darkblue'},
//     {name: 'Toyota', model: 'Land Cruiser', yearsOfManufacture: 2016, power: 220, color: 'black'}
// ];
//
// for (const arrayElement of array) {
//     let copyArray = JSON.stringify(arrayElement);
//     console.log(copyArray);
// }


//----------------14----------------
// взять массив из задания 6,в цикле перебрать его объекты превратив их в json


// массив із завдання 6
// let cities = [
//     {name: 'Kyiv', population: 3100000, country: 'Ukraine', region: 'Kyiv'},
//     {name: 'Rivne', population: 241321, country: 'Ukraine', region: 'Rivne'},
//     {name: 'Lviv', population: 823953, country: 'Ukraine', region: 'Lviv'},
//     {name: 'Krakow', population: 1823953, country: 'Poland', region: 'Polish'},
//     {name: 'Odessa', population: 957154, country: 'Ukraine', region: 'Odessa'},
//     {name: 'Harkiv', population: 1127154, country: 'Ukraine', region: 'Harkiv'},
// ];
//
// for (const citiesElement of cities) {
//     let copyCities = JSON.stringify(citiesElement);
//     console.log(copyCities);
// }


//----------------15----------------
// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// массив із завдання 7
// let cars = [
//     {name: 'Mazda', model: 'RX', yearsOfManufacture: 1996, power: 170, color: 'red', driver: {firstName: 'Max', age: 32, sex: 'male', experience: '2 years'}},
//     {name: 'Honda', model: 'IR', yearsOfManufacture: 1982, power: 115, color: 'blue', driver: {firstName: 'Alex', age: 21, sex: 'male', experience: '1 years'}},
//     {name: 'Volswagen', model: 'Passat', yearsOfManufacture: 2000, power: 130, color: 'white', driver: {firstName: 'Katya', age: 25, sex: 'female', experience: '9 months'}},
//     {name: 'Nissan', model: 'GTR', yearsOfManufacture: 2015, power: 445, color: 'purple', driver: {firstName: 'Oleh', age: 30, sex: 'male', experience: '5 years'}},
//     {name: 'Huyndai', model: 'Gera', yearsOfManufacture: 2001, power: 128, color: 'gray', driver: {firstName: 'Dima', age: 42, sex: 'male', experience: '15 years'}},
//     {name: 'lamborghini', model: 'Aventador', yearsOfManufacture: 2018, power: 755, color: 'black', driver: {firstName: 'Ira', age: 23, sex: 'female', experience: '2 years'}},
// ];
//
// let emptyArray = [];
//
// for (let i = 0; i < cars.length; i++) {
//     const carElement = JSON.stringify(cars[i]);
//     emptyArray.push(carElement);
// }
//
//
// console.log(emptyArray);


//----------------16----------------
// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
// ];
//
// for (const userElements of users) {
//     console.log(userElements);
//     for (const userSkills of userElements.skills) {
//         console.log('skill: ' + userSkills);
//     }
// };


//----------------17----------------
// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив

//
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
// ];

// let emptyArray = [];
//
// for (const userElements of users) {
//     for (const userSkills of userElements.skills) {
//         emptyArray.push(userSkills);
//     }
// };
//
// console.log(emptyArray);


//----------------18----------------
// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
// ];

// for (const user of users) {
//     for (const userArray in user) {
//         console.log(userArray);
//     }
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     console.log(user);
// }




















