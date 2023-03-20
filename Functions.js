function usergender (){
    let gender =prompt("what is your Gender male/female ?");
    while (gender !== "male" && gender !== "female"){
        gender =prompt("what is your Gender male/female ?")
       }
    
    let drinkType =prompt("do you want hot or cold drink?");
    let drinkName =prompt("what is your drink name?");
    
    alert("Your drink is being prepared")
    
    answers.push(username , gender , drinkType , drinkName)
    for (let i = 0; i < answers.length; i++){
        console.log(answers[i])
    }
}
call usergender()