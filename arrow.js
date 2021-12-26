// // console.log("Hey dear")

// a) To find odd numbers :
// let numbers = (1, 2, 4, 6, 7, 10, 25);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(oddNumbers);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const odd = nums=> nums % 2!== 0;
// console.log(nums.filter(odd));


// b) string to title case :

// function titleCase(str) {
//      return str
//         .split(' ')
//         .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ');
// }
// console.log(titleCase("he ammu love u dr")); // I'm A Little tea Pot


// console.log(titleCase("I'm a little tea pot")); // I'm A Little tea Pot


// c) sum of numbers:

// const nums = [20, 30, 40, 100, 200];
// const total = nums.reduce((sum, current) => sum + current, 0);
// console.log(total);


// d) To find prime number in array

// const nums = [11, 16, 23, 34, 45, 56, 09];
// const odd = nums=> nums % 2!== 0;

// console.log(nums.filter(odd));



    //   d)To find prime number in array
//  function checkPrime(number) {
//     if (number <= 1) {
// return false;
//     } 
//     else 
//    {
//       for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//         return false;
//          }
//       }
//        return true;
//      }
//   }





// e) to get palindrome of function:
// const getAllPalindromes = function (words) {
//     return words.filter(function (word) {
//        return word.split("").reverse().join("") === word;
//      });
//    };
   
//    console.log(getAllPalindromes(["hello", "noon"]));

