

//1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a, b) {
    return a * b;
}

console.log(squareRectangle(10, 20));
//2 - створити функцію яка обчислює та повертає площу кола з радіусом r


function squareCircle(radius){

    /*let resCircle = radius * radius * Math.PI;
    return resCircle;*/
    return Math.PI *Math.pow(radius,2)
}

console.log(squareCircle(20));
//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder(radius, height) {
    let resCylinder = 2 * Math.PI * radius*(radius + height);
    return resCylinder;

}

console.log(squareCylinder(10, 40));

//4  створити функцію яка приймає масив та виводить кожен його елемент
function anyArr(arr){
    for (const item of arr) {
        console.log(item)

    }
}
anyArr([12,2443,556,799,'edfgh'])

//5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text){
    document.write(`<p>${text}</p>`);


}
createP('hello!! How are you')

//6  - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
function createUlWith3Li(text) {
  /*  document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)*/
    document.write(`<ul>
          <li>${text}</li>
          <li>${text}</li>
          <li>${text}</li>

</ul>`)
}
createUlWith3Li('Hello')
// 7- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlwithLiAndTwoArgument(text, namberLi){

        document.write(`<ul>`)
    for (let i = 0; i < namberLi; i++) {
        document.write(`<li>${text}</li>`)

    }

   document.write(`</ul>`)

}
createUlwithLiAndTwoArgument('dddfed',7)

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
function arrLi( anyArr){
    document.write(`<ul>`)
    for (let item of anyArr) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`)
}
arrLi(['fdfs',233,'fdsfsdf'])

//9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function forIdNameAge(arr) {

    for (const item of arr) {
        document.write(`<div>${item.id} -${item.name} - ${item.age} </div>`)
    }

}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
(forIdNameAge(users))
//- створити функцію яка повертає найменьше число з масиву

let namddd = [10, 22, 344, 55, 6, 7, 8, 555, 999];

function minOfNamber(arr){
    let min = arr[0]
    for (const i of arr) {
        if (min>i) {
            min=i
        }

    }



return min




}

console.log(minOfNamber(namddd))
//- створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let resalt =0
    for (const item of arr) {
        resalt= resalt+item


    }



    return resalt
}

console.log(sum(namddd))

// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

/*
function swap(arr ) {

    const index1 = arr[0];
    const index2 = arr[1];

    arr[0] = index2;
    arr[1]=index1

    return arr
}
*/

function swap(arr,index1,index2){
    const namb1 = arr[index1];
    const namb2 = arr[index2];
    arr[index1] = namb2;
    arr[index2] = namb1;
    return arr

}

let aaass = [11, 22, 33, 44, 55];
console.log(swap(aaass,2,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250/!**!/*/
function exchange(sumUAH,currencyValues,exchangeCurrency){

}