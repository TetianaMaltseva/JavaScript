// 1
let employee ={};
employee.name = 'Inav';
employee.position = 'office manager';
// console.log(employee);

employee.name = 'Petro';
console.log(employee);

delete employee.name;
// console.log(employee);

console.log('isFired' in employee);
employee.isFired = false;

let newKey = prompt('Введите название ключа:','key');
let newValue = prompt('Введите значениe','value');
employee[newKey] = newValue;
 console.log(employee);

// 2
function countProperties(obj){
    let count = 0;
    for(let key in obj){
        count++;
    }
    return count;
}
console.log(countProperties(employee));

// 3

function isEmpty(obj,keyCheck) {
    for(let key in obj){
        if(key === keyCheck){
            return true;
            }
        }
        return false;
}
console.log(isEmpty(employee,'isFired'));

// 4
let salaries1 = {
    John: 100,
    Ann: 160,
    Pete: 130
  }; 
  function getSum(obj){
    let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }
    return sum;
}
console.log(getSum(salaries1));

// 5

let salaries2 = {
    John: 100,
    Bill: false,
    Ann: 160,
    Lily: null,
    Pete: 13
  };
  console.log(salaries2);

  function multiplyNumeric(obj, factor){
    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= factor;
            }
        }
    }
multiplyNumeric(salaries2, 2);
console.log(salaries2);














