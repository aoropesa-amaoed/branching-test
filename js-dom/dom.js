// const indexHTML = {
//     html: {
//         head: {
//             title: 'JS DOM',
//         },
//         body: {
//             h1: {
//                 innerHTML: "Hello, DOM!"
//             },
//             p: {
//                 innerHTML: "This is a paragraph."
//             },
//             ul: {
//                 children: [
//                      ...
//                 ]
//             }
//         }
//     }
// }

console.log('----- accessing the DOM via querySelector -----')
console.log(document.querySelector('h1'))
console.log(document.querySelector('li'))

console.log('----- accessing the DOM via querySelectorAll -----')
console.log(document.querySelectorAll('li'))

console.log('----- modifying the DOM element -----')
const heading = document.querySelector('h1');
heading.innerText = "I am the new heading from JS File";


const body = document.querySelector('body');
body.style.backgroundColor = "teal";

console.log('----- creating a new DOM element -----')
const newLi = document.createElement('li');
newLi.innerText = "I am a new list item";

console.log('----- appending a new DOM element -----')
const ul = document.querySelector('ul');
ul.appendChild(newLi);