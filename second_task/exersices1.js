/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
const num1=20;
const num2=30;
if(num1>num2)
    console.log(`${num1}Greater than ${num2}`);

else
    console.log(`${num2} Greater than  ${num1}`);
  /*  2. Write a JavaScript conditional statement to find the sign
    of product of three numbers. Display an alert box with the 
    specified sign. Go to the editor 
   Sample numbers : 3, -7, 2 
   Output : The sign is -,
   */
  const array1=[3,-7,2];
  for(let i=0;i<=2;i++){
    if(array1[i]>0){
    window.alert(`${array1[i]} The sign is +`)
    }
    if(array1[i]<0){
        window.alert(`${array1[i]}  The sign is -`)
    }
  }

  var userInput = prompt("Please enter your value", 5);
    if(userInput >0){
    window.alert(`${userInput} The sign is +`)
    }
    if(userInput<0){
        window.alert(`${userInput}  The sign is -`)
    }
  
 /* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] < array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [0,-1,4];
  bubbleSort(numbers);
  console.log(numbers);

  /*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
array5=[ -5, -2, -6, 0, -1 ];
var num=array5[0];
for(let key1=0;key1<=array5.length;key1++){
if(array5[key1]>num){
num=array5[key1];
}
}
window.alert(`The biggest value is :${num}`);
 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

 var x = prompt("Please enter your value", 5);
 var y= prompt("Please enter your value", 5);
 if(x>y){
    console.log("Hello World");
 }
 else{
    window.alert("Goodbye");

 }


