// 1- Знайти та вивести довижину настипних стрінгових значень
let arr1 =['hello world ', 'lorem ipsum', 'javascript is cool']
arr1.map((item)=>console.log(item.length))
//2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'\
let one='hello world'
console.log(one.toUpperCase());
arr1.map((item) => console.log(item.toUpperCase()));
//3 - Перевести до нижнього регістру настипні стрінгові значення
let arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
arr2.map((item)=>console.log(item.toLowerCase()
))
console.log(arr2)
// 4- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let trim = str.trim();
console.log(trim);
console.log(str);
//
// 5- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToarray=(item) =>{
    return item.split(' ')
}
let arr3 = stringToarray(str1)
console.log(arr3);
//
// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.
let nambers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let string=nambers.map((item) => item.toString());
console.log(string)

//7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого
// до меньшого, або
// навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sort = nums.sort((a, b) => a - b);
console.log(sort)
let sort1 = nums.sort((a, b) => b - a);
console.log(sort1)

let sotsNums=(arr, order)=>{
    switch (order) {
        case 'asc':
            return arr.sort((a, b) => a - b);
        case 'dis':
            return arr.sort((a, b) => b - a);
    }
}
console.log(sotsNums(nums, 'asc'));
console.log(sotsNums(nums, 'dis'));


// ==========================
// 8- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let monthDuration = coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration);
console.log(monthDuration)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtrs5 = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
console.log(filtrs5);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapId = coursesAndDurationArray.map((item, index) =>{
    item.id = index+1
    return item
})
console.log(mapId)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

// let carsSuits = ['spade', 'diamond', 'clubs', 'heart'];
// let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
//
// let desk = (carsSuits, values) => {
//     let arr6 = [];
//     for (const carsSuit of carsSuits) {
//         for (const value of values) {
//             arr6.push(
//                 {carsSuit: carsSuit, value: value}
//             )
//
//         }
//     }
//     arr6.map((item) =>
//         (item.carsSuit === 'diamond' || item.carsSuit === 'heart') ? item.color = 'red' : item.color = 'black')
//     return arr6
// }
// let cardDesk =(desk(carsSuits,values));
// console.log(cardDesk)
const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]

// - знайти піковий туз
let aceSpade = cards.find((item) =>
        item.cardSuit === 'spade' && item.value === 'ace'
);
console.log(aceSpade)

// - всі шістки
let value6 = cards.filter((item) =>
    item.value ==='6'
);
console.log(value6);

// - всі червоні карти
let redCards = cards.filter((item) =>
    item.color === 'red'
);
console.log(redCards)
// - всі буби
let cardDiamand=cards.filter((item)=>
item.cardSuit==='diamonds')
console.log(cardDiamand)

// - всі трефи від 9 та більше
console.log(cards.filter((card) => card.cardSuit === 'clubs'
    && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)));

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const resultt = cards.reduce((acc, cur) => {
    acc[cur.cardSuit].push(cur);
    return acc;
}, {
    spade:[], diamonds:[], heart:[], clubs:[]
});
console.log(resultt);
//aбо
const result = cards.reduce((acc, cur) => {
    if (!acc[cur.cardSuit]) {
        acc[cur.cardSuit] = [];
    }
    acc[cur.cardSuit].push(cur);
    return acc;
}, {});
console.log(result);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let filtrSass = coursesArray.filter((item) => item.modules.includes('sass'));
console.log(filtrSass)
// --написати пошук всіх об'єктів, в який в modules є docker
let filtrDocker = coursesArray.filter((item) => item.modules.includes('docker'));
console.log(filtrDocker)