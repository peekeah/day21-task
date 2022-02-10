// Anonymous Function Task
// a.Print odd numbers in an array
// var printOddNumber= function(arr) {
//     var temp="";
//     for(key of arr) {
//         if(key%2===1) {
//             temp=temp+" "+key;
//         }
//     }
//     temp=temp.trim();
//     return temp;
// }
// console.log(printOddNumber([2,5,66,33,32,12,55,11]));

// b. Convert all the strings to title caps in a string array
// let toUppercase= function (str) {
//     var upper= str.toUpperCase();
//     return upper;
// }
// console.log(toUppercase("LuciFer"));

// c. Sum of all numbers in an array
// let sumOfArray= function(arr) {
//     var sum=0;
//     for(key of arr)
//     {
//         sum=sum+key;
//     }
//     return sum;
// }
// console.log(sumOfArray([6,24,7,2,4,12,10]));

// d. Return all the prime numbers in an array
// let isPrime= function(arr) {
//     let temp="";
//     for(key of arr) {
//         let count=0;
//         for(let i=1;i<=key;i++) {
//             if(key%i===0)
//             {
//                 count++;
//             }
//         }
//         if(count===2)
//             {
//                 temp=temp+" "+key;
//             }
//     }
//     temp=temp.trim();
//     return temp;
// }
// console.log(isPrime([5,6,7,3,10,6,24,30]));

// e. Return all the palindromes in an array
// let returnPalindromes= function(str) {
//     let arr=str.split("");
//     let palindromes="";
//     for(let i=0;i<arr.length-1;i++) {
//         let temp=[];
//         temp.push(arr[i]);
//         for(let j=i+1; j<arr.length;j++)
//         {
//             temp.push(arr[j]);
//             let temp_2=[...temp];
//             let temp_str=temp.join("");
//             let temp_rev_str=temp_2.reverse().join("");
//             if(temp_str===temp_rev_str)
//             {
//                 palindromes=palindromes+" "+temp_str;
//             }
//         }
//     }
//     palindromes=palindromes.trim();
//     return palindromes;
// }
// console.log(returnPalindromes("ababcaba"));
// console.log(returnPalindromes("abcbabcb"));

// f. Return median of two sorted arrays of same size
// let findMedian= function(arr1, arr2) {
//     arr1.sort();
//     arr2.sort();
//     let arr=[...arr1, ...arr2];
//     arr.sort((a,b) => a - b);
//     let len=arr.length/2;
//     let median=(arr[len-1]+arr[len])/2;
//     return median;
// }
// console.log(findMedian([2,26,46,48],[11,25,35,46]));

// g. Remove duplicates from an array
// let removeDuplicates= function(arr) {
//     let unique=[...new Set(arr)];
//     return unique;
// }
// console.log(removeDuplicates([4,3,5,6,5,6,7,3]));

// h. Rotate an array by k times
// let rotateArray= function(arr, k) {
//     // console.log(arr);
//     for(i=0;i<k;i++)
//     {
//         let temp=arr.shift();
//         arr.push(temp);
//     }
//     return arr;
// }
// console.log(rotateArray([2,4,6,4,3],2));

