
// // // console.log("ammu")
// // // 1. print odd one.

// // let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

// (function oddnumbers(n) {
   
//    console.log(oddnumbers % 2 !== 0);
// }) ();


// // let odds = arr.filter(n => n%2)

// // console.log(odds)
//  (function (n){
// console.log(n%2);


//  }) (2,3,4,5,6,7,8,9,10,11,12)

// // b. Convert all the strings to title caps in a string array

// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
//  console.log(titleCase("welcome to my world"));



//  f.  Return median of two sorted arrays of same size

// function sumOfSortedArray(Ar1:[Int], Ar2:[Int],N:Int)->Int{
//     var newArray = [Int]()
//     newArray.append(contentsOf : Ar1)
//     newArray.append(contentsOf: Ar2)
//     newArray = newArray.sorted()
//     //this is how we can get middle index by total of both array divided by 2 and need to minus 1 because array always start with 0 not 1.
//     let middleElementIndex = ((N+N)/2) - 1
//     let sum = newArray[middleElementIndex] + newArray[middleElementIndex + 1]
//     print(sum)
//     return sum
// }



//  g. Remove duplicates from an array



// let array = (1, 2, 3, 1, 3, 5, 5);

// function removeDuplicates(array) {
//     array.splice(0, array.length, ...(new Set(array)))
 
// console.log("array");
// };

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let dupChars = chars.filter((c, index) => {
//     return chars.indexOf(c) !== index;
// });

// console.log(dupChars);





  // 1)Print odd numbers in an array

  IIFE :       
               (function(array){
               for(var i = 0 ; i< array.length ; i++){
                          if(array[i]%2!=0){
                             console.log(array[i])
                          } 
                     }
               })([1,2,3,4,5])
               
  Arrow Function:   
                   oddNumbers = (array) => {
                     for(var i = 0 ; i< array.length ; i++){
                          if(array[i]%2!=0){
                             console.log(array[i])
                          } 
                     }
                          }
                          


 //  2)Convert all the strings to title caps in a string array
     
  
 IIFE : 
                  (function (str) {
                      str = str.toLowerCase().split(' ');
                      for (var i = 0; i < str.length; i++) {
                        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                      } 
                      return str.join(' ');
                    })("WELCOME TO MY WORLD");
   
 Arrow Function : 
                   titleCase = (str) => {
                      str = str.toLowerCase().split(' ');
                      for (var i = 0; i < str.length; i++) {
                        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                      } 
                      return str.join(' ');
                    }            
  
  
//  3)Sum of all numbers in an array 
  
  IIFE :       
              (function(array){
               var sum = 0;
                    for(var i = 0 ; i< array.length ; i++){
                       sum = sum + array[i];
                     }
                     return sum;
               })([1,2,3,4])
  
Arrow:      
   sum = (array)=>{
               var sum = 0;
                    for(var i = 0 ; i< array.length ; i++){
                       sum = sum + array[i];
                     }
                     return sum;
                     }
 
 
// 4)Return all the prime numbers in an array

     IIFE:
                     (function(numArray){
                        numArray = numArray.filter((number) => {
                          for (var i = 2; i <= Math.sqrt(number); i++) {
                            if (number % i === 0) return false;
                          }
                          return true;
                        });
                        console.log(numArray);
                    })([1,2,3,4])
      
      
 Arrow Function :
      
          primeNumber = (numArray) => {
                        numArray = numArray.filter((number) => {
                          for (var i = 2; i <= Math.sqrt(number); i++) {
                            if (number % i === 0) return false;
                          }
                          return true;
                        });
                        console.log(numArray);
                    }
                    
  5)  Return all the palindromes in an array
      
      IIFE : 
  
                (function (arr, n)
          {
              // Traversing each element of the array
              // and check if it is palindrome or not
              for (let i = 0; i < n; i++)
              {
                  let ans = isPalindrome(arr[i]);
                  if (ans == false)
                      return false;
              }
              return true;
          })([1,2,3] , 3)
  
  Arrow : 
        Palindrome = (arr, n) =>
      {
          // Traversing each element of the array
          // and check if it is palindrome or not
          for (let i = 0; i < n; i++)
          {
              let ans = isPalindrome(arr[i]);
              if (ans == false)
                  return false;
          }
          return true;
      }
  
  // 6.Remove duplicates from an Array

  IIFE :               
        (function(array){
        let dup = [...new Set(array)];
         console.log(dup);
        })([1,1,2,3,4])
                         
  
  // 7.Rotate an array by K times
  
   IIFE :   
          (function(array , k){
              k = k % a.length;
               if(k < 0){
              k += a.length;
               }
              reverse(a, 0, a.length - k - 1);
              reverse(a, a.length - k, a.length - 1);
              reverse(a, 0, a.length - 1);
                }) ([1,2,3,4] , 2)
