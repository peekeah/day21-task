Part 1: Find the culprits and nail them — debugging javascript

Q) Find the culprit
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I’m JavaScript!'); //here it is ' instead of "
 </script>
 Whats the error in this ?
</body>
</html>

Q) Find the culprit and invoke the alert
<!DOCTYPE html>
<html>
<body>
 <script src=”scripts.js”></script> //here is scripts.js instead of script.js
</body>
</html>

Q) Explain the below how it works
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working
Answer: 1) if semicolon is missing still code will work in javascript,
        2)  (i)  in alert(`Wor
        ld`) 
        template literal is used hence it will run in javascript
            (ii)    in alert(3 +
            1
            + 2);
            all the values are saperated by + hence it will work

Q) Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek";
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"

Q) Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname;
alert( 'hello ${name}' );

Q) Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));


Q) Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));

Q) If you run the below scritpt you will get “Code is Blasted”
Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

answer: "2" > "12"
        here the datatpye of 2 and 12 is string, while comparing as string 12 will be lesser than 2,
        hence code will return Diffused


Q) How to get the success in console.
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
explanation: we have to pass empty string, just have to click on ok without typing anything

Q) How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log(value);
}


Q) Fix the code to welcome the boss
// You cant change the value of the msg
let message;
if (null || 2 || undefined)
{
 message = "welcome boss";
}
else
{
 message = "Go away";
}
  console.log(message);




 Q) Change the code to print
3
2
1

let i = 3;
while (i) {
  console.log( i-- );
}



Q) Change the code to print 1 to 10 in 4 lines
let num = 1
while(num<=10) {
    console.log(num++);
}


Q) Change the code to print even numbers
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

Q) Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

Q) Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 1) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}



Q) Whats the msg printed and why? Guess you answer before running it.
var lemein ="0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

answer: it will print hi
        since lemein has datatype as string it will go to if condition,
        and lemeout has data as number 0 it will go to else condition but since there is
        no else part it will skip if part, so over all result will bw hi