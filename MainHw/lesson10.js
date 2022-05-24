// Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const someEl = document.createElement('div');
// someEl.setAttribute('id', 'text');
// someEl.innerHTML = `some cool text`;
// document.body.append(someEl);
//
// // document.onclick = function (){ // видалення через ЛКМ
// //    someEl.remove();
// //      //someEl.innerHTML = ``;
// // }
//
// // як зробити так, щоб при другому натисненні об'єкт появлявся, і так нескінченно


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

// const form = document.createElement('form');
// form.innerHTML = `age`;
// const input = document.createElement('input');
// input.setAttribute('type', 'number');
// const button = document.createElement('button');
//
// form.append(input,button);
// document.body.append(form);
//
//
// form.onsubmit = function (e) {
//    if(input.value < 18){
//        alert('Too young');
//    }else {
//        alert('OK');
//    }
// }


// Створення в JS
//
//
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// const form = document.createElement('form');
// form.setAttribute('name', 'f1');
//
// const input1 = document.createElement('input');
// input1.setAttribute('name', 'first');
//
// const input2 = document.createElement('input');
// input2.setAttribute('name', 'second');
//
// form.append(input1, input2);
//
// const form1 = document.createElement('form');
// form1.setAttribute('name', 'f2');
//
// const input3 = document.createElement('input');
// input3.setAttribute('name', 'third');
//
// const input4 = document.createElement('input');
// input4.setAttribute('name', 'fourth');
//
// form1.append(input3,input4);
//
// const button = document.createElement('button');
//
// document.body.append(form,form1,button);
//
// form.onsubmit = function (e){
//     e.preventDefault();
// }
// form1.onsubmit = function (e){
//     e.preventDefault();
// }
//
//
// button.onclick = function () {
//     console.log(form.first.value, form.second.value)
//     console.log(form1.third.value, form1.fourth.value)
// }


// Створення в HTML документі
//
// const form = document.forms.first;
// const form1 = document.forms.second;
// const button = document.querySelector('button');
//
// form.onsubmit = function (e) {
//     e.preventDefault()
// }
//
// form1.onsubmit = function (e) {
//     e.preventDefault()
// }
//
// button.onclick = function () {
//     console.log(form.info1.value, form.info2.value);
//     console.log(form1.inf3.value, form1.inf4.value);
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



const f1 = document.forms.form1;


// Створення списку
//
// f1.onsubmit = function (e){
//     e.preventDefault();
//     const amountRow = f1.amountRow.value;
//     const amountAnother = f1.amountAnother.value;
//     const content = f1.content.value;
//     console.log(amountRow,amountAnother,content);
//
//     for (let i = 0; i < amountRow; i++) {
//         const ul = document.createElement('ul');
//         for (let j = 0; j < amountAnother ; j++) {
//             const li = document.createElement('li');
//             li.innerHTML = content;
//             ul.append(li);
//         }
//
//         document.body.append(ul);
//     }
//
// }

//створення дів
//
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     const amountRow = f1.amountRow.value;
//     let amountAnother = f1.amountAnother.value;
//     const content = f1.content.value;
//     console.log(amountRow, amountAnother, content);
//
//
//     for (let i = 0; i < amountRow; i++) {
//         const div = document.createElement('div');
//         div.style.display = 'flex';
//         div.style.flexDirection = 'row';
//         div.style.height = '100px';
//         div.style.justifyContent = 'space-evenly';
//         div.style.margin = '10px';
//         div.style.flexWrap = 'wrap';
//         if (amountAnother > 11) {
//             alert('too many. Max number = 11')
//             amountAnother = 11;
//         }
//         for (let j = 0; j < amountAnother; j++) {
//             const div2 = document.createElement('div');
//             div2.style.width = '100px';
//             div2.style.height = '100%';
//             div2.innerHTML = content;
//             div2.style.background = '#3bcef1';
//             div2.style.margin = '10px';
//             div2.style.display = 'flex';
//             div2.style.justifyContent = 'center';
//             div2.style.alignItems = 'center';
//
//
//             div.append(div2);
//         }
//         document.body.append(div);
//
//     }
// }







