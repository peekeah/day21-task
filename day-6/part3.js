Part 3: Find the culprits and nail them — debugging javascript

Q) Fix the code to get the largest of three.
aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);


Q) Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++) {
 sum += arr[i];
 }
 console.log(sum);
})(arr);


Q) Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
    for (var i = 0; i < arro.length; i++) {
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
        }
}
ano(arr);


Q) Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
var sum = (a, b) =>
 a + b;
sum = num.reduce(sum);
console.log(sum);


Q) Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);
})(arr, k);


Q) Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
    for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
   })(arr);


Q) print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})(arr);


Q) Fix the code to reverse.
(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")


Q) Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);

