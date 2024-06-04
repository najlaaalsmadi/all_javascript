/*1-

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x=250;
const zakat=2.5;
var zaketvalue=(x*zakat)/100;
console.log(x);
console.log(zaketvalue);
console.log(`value zakat for ${x} is: ${zaketvalue}`);

//////////////////////////////////
/*
Array Tasks : 
1-array
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
 const num1=[ 1,7 ,9 ,45];//قمت بتعريف array +وضع فواصل بين القيمه 7 و9 و 9 و45 وازاله اخر فاصله لانه لايوجد بعدها قيمه

 const num2=["Str","alex","moh","the","fox" ,"over","lazy","dog"];// قمت بتعريف ال array + وضعت فواصل بين Str و alex وبين "moh"و 'the' 
//وبين 'fox'و  'over'و'lazy' ازاله اخر فاصله
//
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]
console.log("Banana index "+fruits[1]);
console.log("Tomato index "+fruits[0]);
for (const index in fruits) {
    console.log("The index fruits:"+index +"  "+"The fruits:"+fruits[index]);
    }

    /*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const food=["Mansaf","Kofta","Tabbouleh"];
const sport=["Football","Basketball","Karate"];
const Movie=["The Message ","Conan movie and Conan series"]
    
/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
const arrayNum=[1,4,5];
const firstOfArray_arrayNum=arrayNum[0];
console.log("Variable the first element="+firstOfArray_arrayNum);
const index=arrayNum.indexOf(1);
if(index!==-1){
    console.log("number index found in array "+index+"=>"+"item array:"+arrayNum[index]);
}
else{
    console.log("number not found in array "+index);

}

const arrayLatter=["t","u","g","x"];
const firstOfArray_arrayLatter=arrayLatter[0];
console.log("Variable the first element="+firstOfArray_arrayLatter);
const index2=arrayLatter.indexOf("t");
if(index2!==-1){
    console.log("number index found in array: "+index2+" =>"+"item array:"+arrayLatter[index2]);
}
else{
    console.log("numberindex  not found in array "+index2+" =>"+arrayLatter[index2]);

}


/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
*/
const arrayNumlast=[1,4,5];
const lastOfArray_arrayNum_last=arrayNumlast[arrayNumlast.length-1];
console.log("Variable the last element="+lastOfArray_arrayNum_last);
const indexlast=arrayNumlast.indexOf(5);
if(indexlast!==-1){
    console.log("number index found in array "+indexlast+"=>"+"item array:"+arrayNumlast[indexlast]);
}
else{
    console.log("number not found in array "+indexlast);

}

/*
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
const arrayLatterlast=["t","u","g","x"];
const firstOfArray_arrayLatter_last=arrayLatterlast[arrayLatterlast.length-1];
console.log("Variable the first element="+firstOfArray_arrayLatter_last);
const index3=arrayLatterlast.indexOf("x");
if(index3!==-1){
    console.log("number index found in array: "+index3+" =>"+"item array:"+arrayLatterlast[index3]);
}
else{
    console.log("numberindex  not found in array "+index3+" =>"+arrayLatter_last[index3]);

}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.shift();
array.shift();
array.shift();
console.log(array.join(', '));
array.unshift(1,3,4,6,8)
console.log(array.join(', '));
array.push(10);
console.log(array.join(', '));
// const citrus = array.slice(3);

// array.pop();


/*for (const index in citrus) {
    console.log("The index array:"+index +"  "+"The array:"+citrus[index]);
    }
    citrus.push(1);
    citrus.push(3);
    citrus.push(4);
    citrus.push(6);
    citrus.push(8);
    citrus.push(10);
    for (const index in citrus) {
   
        console.log("The index array:"+index +"  "+"The array:"+citrus[index]);
        }
        
        citrus.toReversed();
        console.log(citrus.join(', '));
      
*/


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5]
array2.push(12);
console.log(array2.join(', '));
array2.unshift(12);
console.log(array2.join(', '));
array2.shift();
console.log(array2.join(', '));
array2.pop();
console.log(array2.join(', '));






/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr1);
arr1.sort();
//console.log(arr1.join(', '));

const a=Date();
console.log(typeof a);
const d=new Date();
console.log(typeof d);




const num9="10";
const num8=10;
const num3=num9+num8;
console.log(num3);