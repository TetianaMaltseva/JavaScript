// 1 
let x = '234';
let x1 = Boolean(x);
console.log(x1, typeof x1);

let x2 = 23
let x3 = Boolean(x);
console.log(x3, typeof x3);

 let x4 = Number(x);
 console.log(x4, typeof x4);

 let x5 = 0
 let x6 = Boolean(x5);
 console.log(x6, typeof x6);

 let x7 = undefined;
 let x8 = Boolean(x7);
 console.log(x8, typeof x8);

//  2

let user = {
    fullname: {
        name:'Oleg',
        surname:'Gores'
    },
    contact: {
        email:'gores@gmail.com',
        phone:'+380956774356',
        address:{
            city:'Berlin',
            country:'Germany',
            postcode: 12345
        }
    },
    job:'System analyse',
    age: 24
}
console.log(user.job, user.contact.address.city, user['contact']['address']['postcode']);

//  3
let list = [1, 2, 3, 4 ,
    ['6','7','8','9',
        [true, false,false,true]
    ,'10']
]
console.log(list[4][0], list[4][4][0],list[4][4][1]);// 6, true,false

// 4
for(let i = 2; i <= 20; i += 2) {
     console.log(i);// 2,4,6....20
}

// 5
let like = [['peach','apple','strawberry'],
            ['red','blue','violet'],
            ['24']
           ]
console.log(like, typeof(like));

// 6
const number1 = Number(prompt('Please enter the number 1')); 
const number2 = Number(prompt('Please enter the number 2'));

if(number1 > number2){
    console.log('Larger number1: ' + `${number1}`);
}else if(number2 > number1){
    console.log('Larger number2: ' + `${number2}`);
}else{
    console.log('Your numbers are the same!')
}

// 7
for(let i = 1; i <= 15; i += 2) {
    console.log(i);// 1,3,5....15
}

//  8
let arr = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for(let i = 1; i <= arr.length-1; i += 2) {
    console.log(arr[i]);// 5, 'hello', null, 54
}

// 9
let arr1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for(let i = 0; i <= arr1.length-1; i += 2) {
    console.log(arr[i]);// 1,true,false,'iiii', null
}

// 10
let arr2 = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let sum = 0;

for(let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
}
console.log(sum);// 922

// 11
let arr3 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let mult = 1;

for(let i = 0; i < arr3.length; i++) {
    mult *= arr3[i];
}
console.log(mult); //10080


