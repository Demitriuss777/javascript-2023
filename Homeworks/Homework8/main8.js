// 1- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.email = phone;
}
//2  створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
users.push(
    new User(1, 'Ivan', 'Ivanov', 'goo@agmail.com', '0731234567'),
    new User(2, 'Nina', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(3, 'Ina', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(4, 'Dima', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(5, 'Katya', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(6, 'Vika', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(7, 'Ira', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(8, 'Lina', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(9, 'Sveta', 'Soloma', 'nisol@gmail.com', '0937654321'),
    new User(10, 'Nika', 'Soloma', 'nisol@gmail.com', '0937654321')

);
console.log(users)

//
// 3- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let userPar = users.filter((item) => item.id % 2 === 0);
console.log(userPar)
//
// 4- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort((a, b) => b.id - a.id);
console.log(sort)
//
//5 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [
    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
    new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
    new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
    new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear']),
    new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
    new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
    new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
]
console.log(clients);



//6 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по
// зростанню. (sort)
let sotrtsOrder = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sotrtsOrder);

//
// 7- Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer,year,maxSpeader, voleumEnje){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeader = maxSpeader;
    this.voleumEnje = voleumEnje;
   this.drive= function (){
       console.log( `їдемо зі швидкістю ${this.maxSpeader} на годину`)}
    this.info = function (){
        console.log('model :', this.model);
        console.log('producer: ', this.producer);
        console.log('yaer: ', this.year);
        console.log('maxSpeader: ', this.maxSpeader);
        console.log('voleumEnje: ', this.voleumEnje)
        console.log('dreiver: ', this.driver)

    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeader = newSpeed
    };
   this.changeYear=function (newValue){
       this.year = newValue;
   }
   this.addDriver= function (driver){
       this.driver = driver;
   }

}


let carB = new Car('BMW', 'Bavaria', 2020, 280, 4);
carB.drive()
carB.info();
carB.increaseMaxSpeed(400);
carB.drive()
carB.changeYear(1960);

carB.addDriver({
    name: 'Max',
    year: 2000
});
carB.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log('------------ INFO CLASS ------------')
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('volume : ', this.volume);
        // console.log(`driver : ${this.driver?.name} | ${this.driver?.age}`);
        console.log('driver : ', this.driver);
        console.log('------------ INFO CLASS ------------')
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Car2.drive()
const car2 = new Car2('X6', 'BMW', 2010, 200, 2);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(15);
// car2.info();
// car2.changeYear(1999);
// car2.info();
// car2.addDriver({name: 'Max', age: 20, exp: 2});
// car2.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та в
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human {
    constructor(name, age, footSize) {
        super(name, age)
        this.footSize = footSize;
    }
}

const popelArr = [
    new Cinderella('Alina', 22, 36),
    new Cinderella('Tamara', 17, 45),
    new Cinderella('Anna', 17, 37),
    new Cinderella('Inna', 30, 38),
    new Cinderella('Rita', 30, 39),
    new Cinderella('Olga', 17, 39),
    new Cinderella('Irina', 18, 34),
    new Cinderella('Oksana', 25, 35),
    new Cinderella('Tanya', 29, 40),
    new Cinderella('Sabrina', 57, 46),
];

class Prince extends Human {
    constructor(name, age, bootSize) {
        super(name, age)
        this.bootSize = bootSize;
    }

    findCinderella1(arr) {
        if (!this.bootSize) throw new Error('нема)')
        for (const cinderella of arr) {
            if (cinderella.footSize === this.bootSize) {
                return cinderella;
            }
        }
    }

    findCinderella2(arr) {
        if (!this.bootSize) throw new Error('нема)')
        return arr.find((cinderella) => cinderella.footSize === this.bootSize);
    }
}

const prince1 = new Prince('Sergey', 18);

try {
    const cinderella1 = prince1.findCinderella1(popelArr);
    console.log('cinderella1: ', cinderella1);
} catch (e) {
    console.error(e.message);
}

const prince2 = new Prince('Sergey', 18, 46);

try {
    const cinderella2 = prince2.findCinderella2(popelArr);
    console.log('cinderella2: ', cinderella2);
} catch (e) {
    console.error(e.message);
}