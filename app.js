let name =prompt("what is your name ? ");
let gender =prompt("what is your Gender male/female ?");
if(gender=="male"){
     alert(`welcome Mr. ${name}!`);
    }
else if(gender=="female"){
     alert( `welcome Ms. ${name}!`);
}
else{
    alert( `welcome ${name}!`);
}
let drinkType =prompt("do you want hot or cold drink?");
let drinkName =prompt("what is your drink name?");
alert("your drink is getting prepared ");

console.log(name + drinkName)