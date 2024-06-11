// تخزين قيمة في localStorage  
// localStorage.setItem('name', 'Najlaa');//Save Data
// localStorage.setItem('name', 'doha');//Update Data

// // استرجاع القيمة من localStorage
// let name = localStorage.getItem('name');//Read Data:


// console.log(name); 
// localStorage.setItem('age1',JSON.stringify(25))
// localStorage.setItem('array',JSON.stringify([1,2,3]));
// localStorage.user=JSON.stringify({
//     name:"najlaa",
//     age:26,
// });

// console.log(typeof localStorage.getItem('user'));
// //console.log(JSON.parse(localStorage.getItem('user')));

// localStorage.removeItem('user');//Delete Data

//Clear All Data:
//localStorage.clear();

// let text = document.getElementById('text');
// let paragraph = document.getElementById("paragraph");

// // Check if there's any previously stored text in localStorage
// if(localStorage.getItem('text')){
//     paragraph.innerHTML = localStorage.getItem('text');
// }

// // Event listener for keyup event on the text input
// text.addEventListener('keyup', function(){
//     localStorage.setItem('text', text.value);
//     paragraph.innerHTML = text.value; // Update the paragraph text in real-time
// });

// let text = document.getElementById('text');
// let paragraph = document.getElementById("paragraph");


// if(sessionStorage.getItem('text')){
//     paragraph.innerHTML = sessionStorage.getItem('text');
// }

// text.addEventListener('keyup', function(){
//     sessionStorage.setItem('text', text.value);
//     paragraph.innerHTML = text.value; 
// });
// if(localStorage.length>0){
//     document.body.style.backgroundColor=localStorage.getItem('color');

// }
// function setColor(color){
//     localStorage.setItem('color',color);
//     document.body.style.backgroundColor=color;
// }


// تخزين قيمة في  
// sessionStorage.setItem('name', 'Najlaa');//Save Data
//sessionStorage.setItem('name', 'doha');//Update Data

// // استرجاع القيمة من sessionStorage
// let name = sessionStorage.getItem('name');//Read Data:


// console.log(name); 
// sessionStorage.setItem('age1',JSON.stringify(25))
// sessionStorage.setItem('array',JSON.stringify([1,2,3]));
// sessionStorage.user=JSON.stringify({
//     name:"najlaa",
//     age:26,
// });

// console.log(typeof sessionStorage.getItem('user'));
// //console.log(JSON.parse(sessionStorage.getItem('user')));

// sessionStorage.removeItem('user');//Delete Data

//Clear All Data:
//sessionStorage.clear();
//code in html
// let text = document.getElementById('text');
// let paragraph = document.getElementById("paragraph");

// // Check if there's any previously stored text in localStorage
// if(sessionStorage.getItem('text')){
//     paragraph.innerHTML = sessionStorage.getItem('text');
// }

// // Event listener for keyup event on the text input
// text.addEventListener('keyup', function(){
//     sessionStorage.setItem('text', text.value);
//     paragraph.innerHTML = text.value; // Update the paragraph text in real-time
// });

// let text = document.getElementById('text');
// let paragraph = document.getElementById("paragraph");


// if(sessionStorage.getItem('text')){
//     paragraph.innerHTML = sessionStorage.getItem('text');
// }

// text.addEventListener('keyup', function(){
//     sessionStorage.setItem('text', text.value);
//     paragraph.innerHTML = text.value; 
// });
if(localStorage.length>0){
    document.body.style.backgroundColor=sessionStorage.getItem('color');

}
function setColor(color){
    sessionStorage.setItem('color',color);
    document.body.style.backgroundColor=color;
}



