'use strict'

function isEnoughCapacity(products, containerSize) {

    let totalProducts = 0
     
    for (const product in products) {
        totalProducts += products[product]
  }
        if (totalProducts <= containerSize) {
            return true
  } 
  
return false
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false




//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера
//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"
// const userRule = prompt("Введіть логін");


//     //  switch userPassword {
//     // case "Я головний":
//     //     console.log("Добрий день!");
//     //     break;
//     // default:
//     //     console.log("Невірний пароль!");   

// const userRule = prompt("Введіть логін");


// switch (userRule) {
//     case "Адмін":
//         console.log(prompt("Введіть пароль") === "Я головний" ? console.log("Добрий день!") : console.log("Невірний пароль!"));
//         break;
//     case "":
//         console.log("Скасовано");
//         break;
//     default:
//         console.log("Я вас не знаю");

// }


// console.log(userRule)
