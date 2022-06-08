// 1-exercise

// const userValue = Number(prompt("Raqam kiriting"));

// const calcValueList = [2, 7]

// const sumInput = calcValue => {

//   calcValueList.push(calcValue);

//   if (isNaN(calcValue) && (calcValue == " ") && (calcValue == "")) {
//     console.log("Brat raqam kiriting");
//   } else {
//     const initialValue = 0;
//     const sumWithInitial = calcValueList.reduce(
//       (previousValue, calcValue) => previousValue + calcValue,
//       initialValue);
//     console.log(sumWithInitial);
//   }
// }

// console.log(sumInput(userValue));


// 2-Exercise

// const musicalDirection = ['Jazz', 'Blues'];

// musicalDirection.push('Rock-n-rol')

// console.log(musicalDirection);

// console.log(musicalDirection.shift());

// musicalDirection.unshift('Rap', 'Reggae')

// console.log(musicalDirection);



// EXERCISE 3


// let salaries = {
//   "Akmal": 1200,
//   "Salim": 5200,
//   "Karima": 1800
// }

// const objectArray = Object.values(salaries);

// const sumSalaries = obj => {

//   const initialValue = 0;

//   const sumObject = obj.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   );



//   console.log(sumObject);
// }

// sumSalaries(objectArray)

// EXERCISE 4

const arr = [1, 2, 3, 4, 5]

const twoDivisionTrue = [];

const twoDivisionFalse = [];

for (item in arr) {
  const twoDivision = item % 2

  if (twoDivision == 1) {
    twoDivisionFalse.push(item)
  } else if (twoDivision == 0) {
    twoDivisionTrue.push(item)
  }
}

console.log(twoDivisionTrue, twoDivisionFalse);

const initialValue = 0;
const sumTruDivision = twoDivisionTrue.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumTruDivision);


const sumFalseDivision = twoDivisionFalse.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumFalseDivision);