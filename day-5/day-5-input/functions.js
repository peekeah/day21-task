// // 1.Write a function called “addFive”. Given a number, “addFive” returns 5 added to that number.
// var num=10;
// function addFive(num) {
//     return num+5;
// }
// var result = addFive(num);
// console.log(result);

// // 2. Write a function called “getOpposite”. Given a number, return its opposite
// function getOpposite(num) {
//     let temp="";
//     if(typeof num=="number") {
//         return -num;
//     }
//     else {
//         return -1;
//     }
// }
// console.log(getOpposite("5a"));

// // 3.Fill in your code that takes an number minutes and converts it to seconds.
// function toSeconds(min) {
//     return min*60;
// }
// console.log(toSeconds(5));

// // 4.Create a function that takes a string and returns it as an integer.
// function toInteger(str) {
//     return parseInt(str);
// }
// console.log(toInteger("5"));

// // 5. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//  let nextNum=(myint) => myint+1;
//  console.log(nextNum(10));

// // 6. Create a function that takes an array and returns the first element.
// let getFirstElement=(arr) => arr[0];
// console.log(getFirstElement([-20,12,-15]));

// // 7. Find the Perimeter of a Rectangle. Create a function that takes height and width and finds the perimeter of a rectangle.
// let findPerimeter=function (num1, num2) {
//     return 2*(num1+num2);
// }
// console.log(findPerimeter(6, 7));

// // 8. Less Than 100?. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// function lessThan100(num1, num2) {
//     let sum= num1+num2;
//     if(sum<100) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(lessThan100(10,50));
// console.log(lessThan100(100,50));

// // 9. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// let remainder=(num1, num2) => 
// {
//     let remainder=num1%num2;
//     return remainder; 
// }
// console.log(remainder(-9, 45));
// console.log(remainder(5, 5));

// // 10.  Old macdonald had a farm:
// let CountAnimals=(tur, horse, pigs)=> {
//     let count= tur*2+horse*4+pigs*4;
//     return count;
// }
// console.log(CountAnimals(1,2,3));

// // 11. Frames Per Second(unsolved)
// // Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// function frames(num1, num2){
//     return num1*num2*60;
// } 
// var fps = frames(1, 2);
// console.log(fps);


// // 12.Check if an Integer is Divisible By Five
// // Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// function divisibleByFive(num1)
// {
//     if(num1%5===0)
//     {
//         return true;
//     }
//     else 
//     {
//         return false;
//     }
// }
//  var divisible = divisibleByFive(5);
//  console.log(divisible);

// 13. Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// let isEven = (num) => {
//     if(typeof num ==="number") {
//         if(num%2===0){
//             return true;
//         }
//         else {
//             return false; 
//         }
//     }
//     else{
//         return -1;
//     }
// }
// console.log(isEven(12));
// console.log(isEven(0));
// console.log(isEven(11));
// console.log(isEven("11h"));


// 14. Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// function areBothOdd(num1, num2) {
//     if(num1%2===1 && num2%2===1) {
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }
// var bothOdd=areBothOdd(1, 3);
// var bothOdd=areBothOdd(1, 4);
// var bothOdd=areBothOdd(2, 3);
// var bothOdd=areBothOdd(0, 0);

// // 15. Write a function called “getFullName”.
// // Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
// function getFullName(firstName,lastName){
// 	let fName = (firstName)?firstName:"";
//     let lName = (lastName)?lastName:"";
//     if((typeof lName !== "undefined") && lName.length!==0)
//     {
//         return '"'+fName+' '+lName+'"';
//     }
//     else {
//         return '"'+fName+lName+'"';
//     }
// }
// console.log(getFullName("GUVI","GEEK"));
// console.log(getFullName("GUVI", ));
// console.log(getFullName("", ""))


// // 16. Write a function called “getLengthOfWord”.
// // Given a word, “getLengthOfWord” returns the length of the given word.

// let getLengthOfWord = (str) => {
//     if(typeof str=== "string")
//     {
//         return str.length;
//     }
//     else{
//         return -1;
//     }
// }
// console.log(getLengthOfWord("GUVI"));
// console.log(getLengthOfWord());
// console.log(getLengthOfWord(9));

// // 17. Write a function called “isSameLength”.
// // Given two words, “isSameLength” returns whether the given words have the same length.

// let isSameLength=(str1,str2) => {
//     if(str1.length == str2.length) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isSameLength("GUVI","GEEK"));

// // 18. Create a function to calculate the distance between two points defined by their x, y coordinates

// let getDistance=(x1, y1, x2, y2) => {
//     let distance= Math.sqrt((x2-x1) **2 +(y2-y1) ** 2);
//     return distance;
// }
// console.log(getDistance(-1,0,2,7));

// // 19. Write a function called “getNthElement”.
// // Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

// let getNthElement = (arr, num) => {
//     if(arr.length===0)
//     {
//         return undefined;
//     }
//     else
//     {
//         return arr[num];
//     }
    
// }
// console.log(getNthElement([1,3,5],2));


// // 20. Write a function called “getLastElement”.
// // Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

// let getLastElement = (array) => {
//     if(array.length===0) {
//         return -1;   
//     }
//     else {
//         let lastElement=array.pop();
//         return lastElement;
//     }
// }
// console.log(getLastElement([4,8,3,2]));

// // 21. Write a function called “getProperty”.
// // Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
// // (Unsolved)
// var obj = { mykey: "value"};
// function getProperty(obj, key) {
//     if(Object.keys(obj).includes(key))
//     {
//         return obj[key];
//     }
//     else {
//         return "NA";
//     }
// }
// console.log(getProperty(obj,'mykey'));
// console.log(getProperty(obj,'dummykey'));


// // 22. Write a function called “addProperty”.
// // Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
// var obj={};
// function addProperty(obj, key) {
//     obj[key]="true";
//     return obj;
// }
// console.log(addProperty(obj, "mykey"));

// // 23. Write a function called “removeProperty”.
// // Given an object and a key, “removeProperty” removes the given key from the given object.
// let obj={name: "pranay"};
// function removeProperty(obj, key) {
//     delete obj[key];
//     return obj[key];
// }
// console.log(removeProperty(obj, "name"));


// // 24. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// var arr=[-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar2 = function countPositivesSumNegatives(arr) {
//     let positives_count=0;
//     let negatives_sum=0;
//     for(key of arr) {
//         if(key>0) {
//             positives_count++;
//         }
//         else {
//             negatives_sum=negatives_sum+key;
//         }
//     }
//     arr.unshift(negatives_sum);
//     arr.unshift(positives_count);
//     return arr;
// }
// console.log(ar2(arr));

// // 25. Create a function that receives an array of numbers and returns an array containing only the positive numbers

// function getPositives(ar) {
//     let ar2=[];
//     for(key of ar) {
//         if(key>0){
//             ar2.push(key);
//         }
//     }    
//     return ar2;
// }
// let ar=[-5, 10, -3, -12, -9, 5, 90, 0, 1];
// console.log(getPositives(ar));


// // 26. Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// function powersOfTwo(n) {
//     let arr=[];
//     for(i=0;i<=n;i++){
//         arr.push(Math.pow(2, i));
//     }
//     let res=arr.join(",");
//     return res;
// }
// console.log(powersOfTwo(0));
// console.log(powersOfTwo(1));
// console.log(powersOfTwo(2));


// // 27. Find the maximum number in an array of numbers
// function findMax (ar) {
//     ar.sort((a, b) => a-b);
//     return ar.pop();    
// }
// var ar=[-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// console.log("Max: ", max);

// // 28. Print the first 100 prime numbers
// // let 100Primes=printPrimes(100);
// function printPrimes(nPrimes) {
//     var n=0;
//     var i=2;
//     while(n < nPrimes) {
//         if (isPrime(i))
//         {
//             console.log(n, " ->", i);
//             n++;
//         }
//         i++;
//     }
// }
// function isPrime(n) {
//     let count=0;   
//     for(i=1;i<=n;i++) {
//         if(n%i===0) {
//         count++;
//         }
//     }
//     if(count==2)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(printPrimes(100));

// //29. Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
// function getPrimes(nPrimes, startAt) {
//     let arr=[];
//     let n=0;
//     let i=2;
//     let len=nPrimes+startAt;
//     while(n<len) {
//         if(isPrime(i)) {
//             if(n>=startAt){
//                 arr.push(i);
//             }
//             n++;
//         }
//         i++;
//     }
//     return arr;
// }
// function isPrime(n) {
//     let count=0;   
//     for(i=1;i<=n;i++) {
//         if(n%i===0) {
//         count++;
//         }
//     }
//     if(count==2)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(getPrimes(10,100));

// // 30. Reverse a string
// var s = reverseString("JavaScript");
// console.log(s);
// function reverseString(s) {
//     return s.split("").reverse().join("");
// }

// // 31. Create a function that will merge two arrays and return the result as a new array
// var ar1=[1, 2, 3];
// var ar2=[4, 5, 6];
// var ar = mergeArrays(ar1, ar2);
// console.log(ar);
// function mergeArrays(ar1, ar2) {
//     var result=ar1.concat(ar2);
//     return result;
// }

// // 32. Calculate the sum of numbers received in a comma delimited string
// console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9,10.9"));
// function sumCSV(s) {
//     let arr=s.split(",");
//     let sum=0;
//     for(key of arr)
//     {
//         sum=sum+parseInt(key);
//     }
//     return sum;
// }