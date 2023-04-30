// var
//let
// let num1;
// num1 = 100500;
// let str1 = 'hello okten';
// console.log(str1);
// str1 = 'okten is cool';
// console.log(str1);
// console.log(num1);
// // const
//
// const PI = 3.14;
// // PI = "123621634";
//
// // number
// // string
// // boolean
// // > < >= <=  === !== == !=
// let bool1 = 5 !== 6;
// console.log(bool1);
//
// bool1 = 'asd' == 'asd';
// console.log(bool1);
//
// let bool2 = 5 === '5';
// console.log(bool2);


let user1 = {
    name: 'serj',
    age: 35,
    status: true,
    wife: {
        name: 'olena',
        age: 30,
        isBeautiful: true
    },
    skills: [
        {title: 'java', exp: 10},
        {title: 'js', exp: 8},
        {title: 'php', exp: 6},
        {title: 'react', exp: 6}
    ]
}
console.log(user1.name)
console.log(user1.wife.name)

let age = user1.age;

let skills = [
    {title: 'java', exp: 10},
    {title: 'js', exp: 8},
    {title: 'php', exp: 6},
    {title: 'react', exp: 6}
];

console.log(skills);
console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);
console.log(skills[200]);


console.log(user1.skills);
console.log(user1.skills[0]);
console.log(user1.skills[1].exp);









