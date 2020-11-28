// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let header = document.getElementById('main_header');
// header.style.color = 'blue';

// -- робить шириниу елементу ul 400 пікселів
// let ul = document.getElementsByTagName('ul');
// for (let i = 0; i < ul.length; i++) {
//     ul[i].style.width = '400px';
// }

// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (let i = 0; i < linkList.length; i++) {
//     linkList[i].style.width = '50%'
// }

// // -- отримує текст який зберігається в елементі з класом listElement2
// let listElement = document.querySelector('.listElement2').textContent;
// console.log(listElement);

// -- отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.querySelectorAll('li');
// for (let i = 0; i < li.length; i++) {
//    li[i].style.backgroundColor = '#4f4f4f';
//    console.log(li[i]);
// }

// -- отримує всі елементи 'a' та додає їм клас anchor
// let a = document.querySelectorAll('a');
// for (let i = 0; i < a.length; i++) {
//     a[i].classList.add('anchor') ;
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const href = document.querySelectorAll('a');
// for (let i = 0; i < href.length; i++) {
//     if(href[i].textContent === 'link3') {
//         href[i].style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const tagA = document.querySelectorAll('a');
// for (let i = 0; i < tagA.length; i++) {
//     const xxx = tagA[i].textContent;
//     tagA[i].classList.add('element_' + xxx);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < subHeader.length; i++) {
//     const subHeaderElement = subHeader[i];
//     subHeaderElement.style.backgroundColor = prompt();
//     if (subHeaderElement.textContent === 'content 2 segment') { // -- отримує всі елементи 'sub-header' )
//         subHeaderElement.style.color = prompt();                //та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.
//     }                                                           // Колір отримати з prompt()
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// document.querySelector('.content_1').innerHTML = prompt();

// -- отримати елементи p та змінити їм padding на довільне значення
let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '50px';
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text = document.getElementsByClassName('text2');
for (let i = 0; i < text.length; i++) {
    text[i].textContent = prompt();
}