/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
var preson={

    number_of_children:prompt("Please enter your value  number of children",3) //3 ,
    ,partner_name:prompt("Please enter your value  partner name","Alice")//"Alice",
    ,job_title:  prompt("Please enter your value  job title","software engineer")//"software engineer",
    ,geographic_location: prompt("Please enter your value  geographic location","Jordan")//"Jordan",
    ,tellFortune:function(){
        var result="You will be a   " +this.job_title + " in  " + this.geographic_location + " and married to   " +this.partner_name+ "   with  " +this.number_of_children +"   kids  ";
       return result;
    }
  
};
console.log(preson.tellFortune());

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age_namber){
var NN=age_namber*7;
console.log(`Your doggie is ${NN}  years old in dog years!`);
}
age_namber=prompt("Please enter your value  number your puppy's age",1);
calculateDogAge(age_namber);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age,amount_per_day){
    const maxAge=100;
    const amount_per_year=amount_per_day*365;//1095
    const yearsRem=maxAge-age;//70
    const amountNeeds=amount_per_year*yearsRem;//76,650
    console.log("You will need "  +amountNeeds+  "  cups of tea to last you until the ripe old age of    "+maxAge);

}
age=prompt("Please enter your value  number age",30);
amount_per_day=prompt("Please enter your value  number amount per day",3);

//calculateSupply(30,3);
calculateSupply(age,amount_per_day);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
var preson1={
firstname:prompt("Please enter your firstName","Najlaa"),
lastname:prompt("Please enter your lastName","Al-Smadi"),
 greet:function(firstname,lastname){
return "Hello  "+this.firstname +"  "+this.lastname;
}

}
console.log(preson1.greet());

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(cat) {
    return 2 * cat;
  }
  cat=prompt("Please enter your number",2);
  console.log(double(cat));//يتم استخدام متغير وهو cat وهو غير معرف مسبقا وايضا حاطين متغير اخر ايضا مش معرف مسبقا وتم ازالته
 
  
  function double1(num=7) {
    return 2 * 7;
  }
  console.log(double1(7));
   //خطا لانه تم وضع متغير او قيمه متغير لحالها وهذا خطا Unexpected number

   function double2(num='7') {
    //return 2 * 'x';هنا اذا بقيت على حالها رح يعطي NaN 
    return 2*num;
  }
  console.log(double2(7));

  /*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x){
    return 2 * x ;
  }
  function double2 (x){
return 2 * x;
}
function  double3(x) {
    return 2 * x;
}
  
  
  
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function calculate_the_cube(cube){
    return cube*cube*cube;
}
cube=prompt("Please enter your cube",4);
console.log(calculate_the_cube(cube));

/*Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(number1,number2){
  result=number1*number2;
return result;
}
let number1=prompt("Please enter your number one",5);
let number2=prompt("Please enter your number two",4);
console.log(`resultmultiply(${number1},${number2})=`+  multiply(number1,number2));
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(number_age)
{
  if(number_age <= 20){
    let resultAge;
    resultAge="yes you can";
    return resultAge;
  }
  else{
    let resultAge;
    resultAge="please come back after X years to get one";
    return resultAge;
  }
}
let number_age=prompt("plase enter you number age",20);
console.log(canIGetADrivingLicense(number_age));


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(string1,string2){
  length1=string1.length;
  length2=string2.length;
  if(length1==length2){
    return True;

  }
  else{
    return false;
  }
}
let string1=prompt("plase enter you String1","tree");
let string2=prompt("plase enter you String2","car");

console.log(sameLength(string1,string2));


/*11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(number_1,number_2){
  if(number_1>number_2){
    return number_1;
  }
  else if(number_1<number_2){
    return number_2;
  }

}
 let number_1=prompt("Please enter number1",5);
 let number_2=prompt("Please enter number2",6);
 console.log( `The largerNubmer(${number_1},${number_2})=`+largerNubmer(number_1,number_2));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

 function smallerNubmer(number_s1,number_s2,number_s3){
  let x;
         if((number_s1<number_s2)&&(number_s1<number_s3)){
           x=number_s1;
         }
         else   if((number_s2<number_s1)&&(number_s2<number_s3)){
          x=number_s2;
        }
        else   if((number_s3<number_s1)&&(number_s3<number_s2)){
          x=number_s3;
        }
        return x;
        
 }
 let number_s1=prompt("Please enter number1",8);
 let number_s2=prompt("Please enter number2",6);
 let number_s3=prompt("Please enter number3",7);

 console.log( `The smallerNubmer(${number_s1},${number_s2},${number_s3})=`+smallerNubmer(number_s1,number_s2,number_s3));
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/


 function shorterString(string_1,string_2,string_3,string_4,string_5){
   let a=  string_1.length;
   let b=  string_2.length;
   let c=  string_3.length;
   let d=  string_4.length;
   let e=  string_5.length;

   if(a<b&&a<c&&a<d&&a<e){
   let  x=string_1;
   }
   else if(b<a&&b<c&&b<d&&b<e){
    x=string_2;
    }
    else if(c<a&&c<b&&c<d&&c<e){
      x=string_3;
      }
      else if(d<a&&d<b&&d<c&&d<e){
        x=string_4;
        }
        else if(e<a&&e<b&&e<c&&e<d){
          x=string_5;
          }
          return x;
 }
 /*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
 function longerString(string1, string2, string3, string4, string5) {
  let a = string1.length;
  let b = string2.length;
  let c = string3.length;
  let d = string4.length;
  let e = string5.length;
  let longest;

  if (a > b && a > c && a > d && a > e) {
    longest = string1;
  } else if (b > a && b > c && b > d && b > e) {
    longest = string2;
  } else if (c > a && c > b && c > d && c > e) {
    longest = string3;
  } else if (d > a && d > b && d > c && d > e) {
    longest = string4;
  } else {
    longest = string5;
  }

  return longest;
}
 let string_1=prompt("Please enter string1","air");
 let string_2=prompt("Please enter string2","school");
 let string_3=prompt("Please enter string3","car");
 let string_4=prompt("Please enter string4","by");
 let string_5=prompt("Please enter string5","github");

 console.log(shorterString(string_1,string_2,string_3,string_4,string_5));
 console.log(longerString(string_1,string_2,string_3,string_4,string_5)); // ستطبع "openai" لأنها الأطول

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
 function isEven(num_even){
  if(num_even%2==0){
    console.log(`is Even ${num_even} =`+true);
  }
  else{
    console.log(`is not Even ${num_even} =`+false);

  }
 }
 let num_even=prompt("Please enter number",2);
 isEven(num_even);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

 function isOdd(num_odd){
  if(num_odd%2!=0){
    console.log(`is odd ${num_odd} =`+true);
  }
  else{
    console.log(`is not odd ${num_odd} =`+false);

  }
 }
 let num_odd=prompt("Please enter number",3);
 isOdd(num_odd);
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
 function positive(num_positive){
  if(num_positive>0)
    {
      console.log(`is positive ${num_positive}`);

    }else{
      console.log(`is not positive ${num_positive}`);

    }
 }
 let num_positive=prompt("Please enter number",3);
 positive(num_positive);
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
 function fullName(firstName,lastName){
  console.log("Full Name:"+firstName+" "+lastName)
 }
 let firstName1=prompt("Please enter firstName","Najlaa");
 let lastName1=prompt("Please enter lastName","AL-Smadi");
 fullName(firstName1,lastName1);
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(g1,g2,g3,g4,g5){
  return ((g1+g2+g3+g4+g5)/5);
 }
 let g1=parseInt(prompt("Please enter Number one",1));
 let g2=parseInt(prompt("Please enter Number Two",2));
 let g3=parseInt(prompt("Please enter Number tree",3));
 let g4=parseInt(prompt("Please enter Number four",4));
 let g5=parseInt(prompt("Please enter Number five",5));

 console.log("The average="+average(g1,g2,g3,g4,g5));
 /*20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacr7h using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random();
}
console.log(randomNumber());






/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

 function randomBetweenNumbers(rnum1,rnum2){
  return Math.random()*(rnum2-rnum1)+rnum1;
 }
 let rnum1=parseInt(prompt("Please enter Number Min",1));
 let rnum2=parseInt(prompt("Please enter Number Max",8));

 console.log(randomBetweenNumbers(rnum1,rnum2));
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
 function scoreInUniversty(score){
  if(score>=95||score<=100){
    console.log(`scoreInUniversty${score}=>`+"A");
  }else if(score>=85||score<=94){
    console.log(`scoreInUniversty=${score}=>`+"B");
  }else if(score>=70||score<=84){
    console.log(`scoreInUniversty=${score}=>`+"C");
  }else if(score>=50||score<=69){
    console.log(`scoreInUniversty=${score}=>`+"D");
  }else if(score>=0||score<=49){
    console.log(`scoreInUniversty=${score}=>`+"F");
  }
 }

 let score=prompt("Please enter score In Universty",96);
 scoreInUniversty(score);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let counternum=0;
function counter(){

  counternum+=1;
  return counternum;
}
console.log(counter());
console.log(counter());
console.log(counter());

function restcounter(){
  console.log(counternum+"and the counter reset now");
  counternum-=1;

}
restcounter();
restcounter();
restcounter();












