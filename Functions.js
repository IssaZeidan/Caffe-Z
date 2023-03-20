alert ("welcome to cafe z")
let answers = [];
let name = prompt("enter your name");
let gender = userGender();
function userGender(){
    let gender =prompt("what is your Gender male/female ?");
    while (gender !== "male" && gender !== "female"){
        gender =prompt("what is your Gender male/female ?")
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
    
    answers.push(name , gender , drinkType , drinkName)
    for (let i = 0; i < answers.length; i++){
        console.log(answers[i])
    }
}