// Arrow Function Task
// a.Print odd numbers in an array
// var printOddNumber=(arr) => {
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
// let toUppercase= (str) => {
//     var upper= str.toUpperCase();
//     return upper;
// }
// console.log(toUppercase("pranay"));

// c. Sum of all numbers in an array
// let sumOfArray=(arr) => {
//     var sum=0;
//     for(key of arr)
//     {
//         sum=sum+key;
//     }
//     return sum;
// }
// console.log(sumOfArray([24,2,4,66,30,12,5,11]));

// d. Return all the prime numbers in an array
// let isPrime= (arr) => {
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
// console.log(isPrime([1,2,3,4,5,6,7,8,9,10]));


// e. Return all the palindromes in an array
// let returnPalindromes= (str) => {
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
// console.log(returnPalindromes("bacaaba"));
// console.log(returnPalindromes("abaab"));

