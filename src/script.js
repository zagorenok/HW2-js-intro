console.log('#5');
const num1 = 5;
const num2 = 8;
console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 * num2);
console.log(num1 / num2);

console.log('#6');
for (let i = 1; i < 6; i++ ) {
  console.log(i);
}

console.log('#7');
for (let i = 5; i >= 1; i-- ) {
  console.log(i);
}

console.log('#8');
let condition;
function getMarkInfo(condition) {
  if (condition === 10) {
    console.log('У вас максимальный балл');
  } else if (condition < 10) {
    console.log('У вас средний балл');
  }
 }
 getMarkInfo(10)
 getMarkInfo(1)
 
console.log('#9');
let position;

function getDayInfo(position) {

  switch (position) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
      console.log('Monday');
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
    default: console.log('Wrong data');
  }
}

getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('#10');
const arr = ['a', 'b', 'c'];
arr[3] = 1;
arr[4] = 2;
arr[5] = 3;
console.log(arr);

console.log('#11');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

console.log('#12');

function countNumber(number) {
  for (let n = 1; n <= number; n++) {
    console.log((n*(n+1))/2);
  }
}
countNumber(5)
 