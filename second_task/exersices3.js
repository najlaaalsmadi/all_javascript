// 1. Write a JS code to print numbers from 1 to 10
var Array=[];
for(i=1;i<=10;i++){
    Array.push(i);

}
console.log(Array);

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/

var arr = [13,23,12,45,22,48,66,100];
var evenarray=[];
var oddarray=[];
for(i=0;i<=arr.length;i++)
    {
        if(arr[i]%2==0){
            evenarray.push(arr[i]);
        }
        else{
            oddarray.push(arr[i]);

        }
    }
    console.log("even array:"+evenarray);
    console.log("odd array:"+oddarray);

  /*  3. Write a JS code to print a pattern using for loop

    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5 
    1 2 3 4 5 6 
    1 2 3 4 5 6 7 
    1 2 3 4 5 6 7 8 
 
 */
    
for(i=1;i<=8;i++){
    document.write("<br>");
    for(j=1;j<=i;j++){
        document.write(j);
     

    }
}

 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let x = "don’t know why";
let y=x.length;

console.log(x);
console.log(y);
for(i=0;i<=y;i++){
    if(x[i]=="y"){
        console.log(x[i]+":yes");

    }
    else{
        console.log(x[i]+":no");


        

    }
}