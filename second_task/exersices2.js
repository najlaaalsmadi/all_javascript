/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
function markprogram(mark){
    if(mark>=90 && mark<=100){
            return "A";
        }else if(mark>=80 && mark<=89){

        return "B";
    }else if(mark>=70 && mark<=79){
            return "C";
        }
    else if(mark>=60 && mark<=69){
                return "D"; }else if(mark>=50 && mark<=59){
                    return "E";
    }else{
                    return "F";
    }
}
var  mark= prompt("Please enter your value  mark", 50);
console.log("The student's mark with symbols is :"+markprogram(mark));