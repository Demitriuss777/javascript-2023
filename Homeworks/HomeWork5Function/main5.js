//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let squareRentangel = ( a,b )=>a * b;
console.log(squareRentangel(10,10))
// 2- створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = (radius) => Math.PI * Math.pow(radius,2);
console.log(squareCircle(10))
// 3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let squareCylinder = (radius, height) => Math.PI * radius * (radius + height);
console.log(squareCylinder(10,20))

// 4- створити функцію яка приймає масив та виводить кожен його елемент
let arrs = (mas) => {
    for (const argument of mas) {
        console.log('item :', argument)
        
    }

};
console.log(arrs([11,22,33,44,55]))
// 5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let poragraf = (text) =>document.write( `<p>${text}</p>`);
console.log(poragraf('dfsfsdfdsf'))

// 6 - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let createLi=(text)=>{
    document.write(
        `<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`
    );
}
createLi('Htllo')
// 7- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createLiCicl=( text, namber)=>{
    document.write(`<ul>`)
    for (let i = 0; i < namber; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}
createLiCicl('defe',3)
// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let arrAllLi=(arr)=>{
    document.write(`<ul>`)
   for (const arrElement of arr) {
  document.write(` <li>${arrElement}</li>`)
   }
    document.write(`</ul>`)
}
arrAllLi([11,22,33,'dasda'])
// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrNameAgeId=(arr)=>{
    for (const item of arr) {
        document.write(`<div>'id'=${item.id}- 'name'- ${item.name} ---  ${item.age}</div>`)
    }

}
let users = [
    {id:1, name: 'vasya', age: 31, status: false},
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
arrNameAgeId(users)
// 10- створити функцію яка повертає найменьше число з масиву
let arrnamber=[11,22,33,44,55,66,2,4,6,-22]

let minNamber=(arr)=>{
    let min=arr[0]
    for (const i of arr) {
        if (min > i) {
            min=i
        }
    }
    return min
}
console.log(minNamber(arrnamber))

let minnARRR = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }

    }
    return min
};
console.log(minnARRR(arrnamber))

// 11- створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
 let sum=(arr)=>{
     let resalts = 0;
     for (const i of arr) {
         resalts = resalts + i;

     }
     return resalts
 }
let sumarr = [1, 2, 10];
console.log(sum(sumarr));
// 12- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення
// у відаовідних індексах Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arr, index1, index2)=>{
    const naber1 = arr[index1]
    const namber2 = arr[index2]
    arr[index1] = namber2;
    arr[index2] = naber1;
    return arr
}
let arrrswap=[11,22,33,44,55,66,]
console.log(swap(arrrswap,0,1))
//13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') 
// => 250
let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value;
        }
    }
}
let currencies =
    [{currency: 'USD', value: 40},
        {currency: 'EUR', value: 42}];
console.log(exchange(3700,currencies,'USD'))

