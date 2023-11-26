let arr;
arr = [11, 22, 'fadfdf', true, [1, 34, 44, 55]];
console.log(arr);
console.log(arr[3]);
/// длтнна масива
console.log(arr.length);
//масива к масиву
console.log(arr[4][1])

let userOne = {
    age: 31,
    name: 'vasya',
    status: true,
    skilss: [
        {plang: 'html', exp: 1},

        {plang: 'css', exp: 2},
        {plang: 'js', exp: 1}
    ],
}
console.log(userOne.skilss);
// добовлення в масив
userOne.wife = {
    name: 'Inna',
    age: 36,


};
console.log(userOne)
//ДОДОВАННЯ В МАСИВ ОБЄКТІВ
userOne.skilss[3]={
    plang: 'java',
    exp: 1,

}
console.log(userOne.skilss)