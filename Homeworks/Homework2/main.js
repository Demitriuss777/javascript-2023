/*


Логічні розгалуження:
- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.

- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
* */
//* task1
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

/*let arr=[10,24,4567,'string','vasya', 'name',true, false, 3343,'Inna']
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
console.log(arr[10])
let books;
books = [
    oneBooks = {
        title: 'Harry Poter ONE',
        pageCount: 401,
        genre: 'fantasy',

    },
    TwoBooks = {
        title: 'Harry Poter TWO',
        pageCount: 501,
        genre: 'fantasy',

    },
    ThreeBooks = {
        title: 'Harry Poter three',
        pageCount: 701,
        genre: 'fantasy',

    },

];

console.log(books)

oneBooks.authors = {
    name: 'rooling',
    age: 44,

};
TwoBooks.authors =
    {
        name: 'rooling',
        age: 44,

    };
 ThreeBooks.authors =
     {
         name: 'rooling',
         age: 44,

     };
console.log(oneBooks)*/
 // - Створити масив з 10 об'єктами які описують сутніть "користувач".
// // Поля: name, username,password. Вивести в консоль пароль кожного користувача
/*
let users = [
    user1 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 139304021
    },
    user2 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13930455
    },
    user3 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13930402551
    },
    user4 = {

        name: 'vasya',
        username: 'Ivanov',
        password: 104021
    },
    user5 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1386621
    },
    user6 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1393
    },
    user7 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1677021
    },
    user8 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13954
    },
    user9 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13930455
    },
    user10 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1393346
    }
];
console.log('password: ' + users[0].password)
console.log('password: ' + users[1].password)
console.log('password: ' + users[2].password)
console.log('password: ' + users[3].password)
console.log('password: ' + users[4].password)
console.log('password: ' + users[5].password)
console.log('password: ' + users[6].password)
console.log('password: ' + users[7].password)
console.log('password: ' + users[8].password)
console.log('password: ' + users[9].password)
*/

//  2 Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
/*let x = 10;
if (x!==0){
    console.log('Вірно')
}
else {
    console.log('Не вірно')
}*/

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код,який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).



/*
let time =prompt('яка рівна числу від 0 до 59')
if (time <=15) {
    console.log('перша частина години')

} else if (time <=30) {
    console.log('друга частина години')

}
else if (time <=45) {
    console.log('трейтя частина години')

}
else if (time <=59) {
    console.log('четверта частина години')

}
else {
    console.log('помилка')
}
*/
// другий спосіб строгий з &&
/*
let time =prompt('яка рівна числу від 0 до 59')
if (time >0 && time <=15) {
    console.log('перша частина години')

} else if (time >=16 && time <=30) {
    console.log('друга частина години')

}
else if (time>= 31 && time <=45) {
    console.log('трейтя частина години')

}
else if ( time>=46 && time <=60) {
    console.log('четверта частина години')

}
else {
    console.log('помилка')
}
*/


//// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

/*let day = +prompt('визначення декади');
if (day >= 1 && day <= 10) {
    console.log('перша декада')
}
else if (day >= 11 && day <= 20) {
    console.log('друга декада')
}
else if (day >= 21 && day <= 31) {
    console.log('трейтя декада');
} else {
    console.log('помилка')
}*/
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день,
// назву дня англійською).

/*let week = +prompt('день тижня')
switch (week) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:

        console.log('Thursday');
        break;
    case 5:

        console.log('Friday');
        break;
    case 6:

        console.log('Saturday');
        break;
    case 7:

        console.log('Sunday');
        break;
    default:
        console.log('помилка')
}*/
// // - Користувач вводить або має два числа.
// // Потрібно знайти та вивести максимальне число з тих двох .
// // Також потрібно врахувати коли введені рівні числа.
/*
let nambe1 = prompt('введіть перше число');
let nambe2 = prompt('ввудіть друге число');
if (nambe1 === nambe2) {
    console.log('рівні')
}
else if (nambe1 < nambe2) {
    console.log('max: ',nambe2)
}
else  {
    console.log('max: ', `nambe1)
}*/

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

/*let x=null
x = x || 'default';
console.log(x)*/
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.



// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]

if (coursesAndDurationArray[0].monthDuration>5) {
    console.log('JavaScript Complex: ','супер')

}
if (coursesAndDurationArray[1].monthDuration>5) {
    console.log('Java Complex: ','супер')
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('Python Complex: ','супер')

}
if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('QA Complex: ','супер')

}
if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('FullStack: ','супер')

}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Frontend: ', 'супер');

} else {
    console.log('менше 4 місяців')
}
