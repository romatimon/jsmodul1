"use strict";
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false    
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// if (4 == 9) {
//     console.log("Ok!");
// } else {
//     console.log("eror");
// }

// const num = 50;

// if (num < 49) {
//     console.log("eror");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("OK!");
// }


// (num === 50) ? console.log("OK!") : console.log("eror");


// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 540:
//         console.log("В точку!");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break;
// }


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log("Я сыт!");
// }


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sdadsads');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("Все сыты!");
// } else {
//     console.log("Мы уходим");
// }


// const hamburger = 0;
// const fries = null;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log("Все довольны!");
// } else {
//     console.log("Мы уходим");
// }

// console.log(hamburger || cola || fries);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);