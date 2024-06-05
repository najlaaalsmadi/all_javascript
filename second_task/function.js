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
string1=prompt("plase enter you String1","tree");
string2=prompt("plase enter you String2","car");

console.log(sameLength(string1,string2));


