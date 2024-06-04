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
  
  
  
