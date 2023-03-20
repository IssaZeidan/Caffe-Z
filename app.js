// let name =prompt("what is your name ? ");
// let gender =prompt("what is your Gender male/female ?");
// if(gender=="male"){
//      alert(`welcome Mr. ${name}!`);
//     }
// else if(gender=="female"){
//      alert( `welcome Ms. ${name}!`);
// }
// else{
//     alert( `welcome ${name}!`);
// }
// console.log(name + drinkName)
alert ("welcome to cafe z")
let answers = [];
let username = prompt("enter your name");
let gender = "";

// while (gender !== "male" && gender !== "female"){
//     gender =prompt("what is your Gender male/female ?")
//    }

// let drinkType =prompt("do you want hot or cold drink?");
// let drinkName =prompt("what is your drink name?");

// alert("Your drink is being prepared")

// answers.push(username , gender , drinkType , drinkName)
// for (let i = 0; i < answers.length; i++){
//     console.log(answers[i])
// }
alert ("welcome to cafe z")
let name =prompt("what is your name ?");
let answers= [];
let gender = userGender();
function userGender(){
    let gender =prompt("what is your Gender male/female ?");
    while (gender != "male" && gender != "female"){
        gender =prompt("what is your Gender male/female again ?")
       }
       if(gender=="male"){
        alert(`welcome Mr. ${name}!`);
       }
   else if(gender=="female"){
        alert( `welcome Ms. ${name}!`);
   }

let drinkType =prompt("do you want hot or cold drink?");
let drinkName =prompt("what is your drink name?");

alert("Your drink is being prepared")

answers.push(username , gender , drinkType , drinkName)
for (let i = 0; i < answers.length; i++){
    console.log(answers[i])
}