// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

// let createH2 = document.createElement('h1');
// createH2.innerText = 'Hello World';
// document.body.appendChild(createH2);
// createH2.id = 'text';
//
// createH2.onclick = () => {
//     createH2.style.display = 'none';
// }


// Создайте кнопку, при клике на которую, она будет скрывать сама себя.?

// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'Оно тебе сожрет))0)0)0)'
// button.onclick = () => button.style.display = 'none';
// button.style.backgroundColor = 'red';
// button.style.padding = '10px';




// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let createForm = document.createElement('form')
//
// let createInput = document.createElement('input')
// createInput.setAttribute('type', 'value')
//
// let createSubmitInput = document.createElement('input')
// let submitInput = createSubmitInput.setAttribute('type', 'submit')
// createSubmitInput.value = 'Підтвердити'
//
// document.body.appendChild(createForm)
//
// createForm.appendChild(createInput)
// createForm.appendChild(createSubmitInput)
//
// createSubmitInput.onclick = () => {
//     if(createInput.value < 18) {
//         alert('Loser')
//     } else {
//         alert('Winner')
//     }
// }
// // ----------------------------------------------------------------------- автоматизувати--------------------


// Создайте меню, которое раскрывается/сворачивается при клике

// const btn = document.querySelector('#hideBtn');
// const subMenu = document.querySelector('#sub-menu');
//
// let status = false;
// btn.onclick = () => {
//     if(!status) {
//         subMenu.style.display = 'none';
//         status = true;
//     } else {
//         subMenu.style.display = 'block';
//         status = false;
//     }
// };



// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// let comments =  [
//     {
//         title: 'lorem',
//         body: 'lopem ipsum dolo sit ameti'
//     }
// ];
//
// let x = '';
//
// for (const comment in comments) {
//     x += comment;
// }
//
// console.log(x);
//
// let btn = document.createElement('button');
// btn.style.backgroundColor = '#FF7C57'
// btn.innerText = 'hide'
// document.body.appendChild(btn);
//
// let createDiv = document.createElement('div');
// document.body.appendChild(createDiv);
// createDiv.innerText = x.title;
//
// let div = document.createElement('div');
// div.innerText = 'lopem ipsum dolo sit ameti';
// createDiv.appendChild(div);
//
// let status = false;
//
// btn.onclick = () => {
//     if (!status) {
//         div.style.display = 'none';
//         status = true;
//     } else {
//         div.style.display = 'block';
//         status = false;
//     }
// }



// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

//
// const button = document.createElement('button');
// button.innerText = 'Check console';
// document.body.appendChild(button);
//
// let inputs = document.getElementsByTagName('input')
//
// let item = '';
//
// for (const input of inputs) {
//     item += input;
// }
//
// console.log(item);
//
//
// button.onclick = () => {
//     console.log(item.value);
// }



// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.


// function createTable(tr, td, element) {
//     const table = document.createElement('table');
//     document.body.appendChild(table);
//     for (let i = 0; i < tr; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < td; j++) {
//             const td = document.createElement('td');
//             td.innerHTML = i.toString() + j.toString();
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     element.appendChild(table);
// }
//
// let i = 0;
// createTable(5, 10, i++);


