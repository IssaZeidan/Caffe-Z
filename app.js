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
// alert ("welcome to cafe z")
// let answers = [];
// let username = prompt("enter your name");
// let gender = "";

// while (gender !== "male" && gender !== "female"){
//     gender =prompt("what is your Gender male/female ?")
//    }

// let drinkType =prompt("do you want hot or cold drink?");
// let drinkName =prompt("what is your drink name?");

// alert("Your drink is being prepared")

// alert("Your drink is being prepared")

// answers.push(name , gender , drinkType , drinkName)
// for (let i = 0; i < answers.length; i++){
//     console.log(answers[i])
// }
// alert ("welcome to cafe z")
// let answers = [];
// let name = prompt("enter your name");
// let gender = userGender();
// function userGender(){
//     let gender =prompt("what is your Gender male/female ?");
//     while (gender !== "male" && gender !== "female"){
//         gender =prompt("what is your Gender male/female ?")
//        }
//        if(gender=="male"){
//              alert(`welcome Mr. ${name}!`);
//             }
//         else if(gender=="female"){
//              alert( `welcome Ms. ${name}!`);
//         }
//     let drinkType =prompt("do you want hot or cold drink?");
//     let drinkName =prompt("what is your drink name?");

//     alert("Your drink is being prepared")

// <<<<<<< Updated upstream
//     answers.push(name , gender , drinkType , drinkName)
//     for (let i = 0; i < answers.length; i++){
//         console.log(answers[i])
//     }
// }
// =======
// //     answers.push(name , gender , drinkType , drinkName)
// //     for (let i = 0; i < answers.length; i++){
// //         console.log(answers[i])
// //     }
// // }
// let username= prompt("Enter your name");
// let userGender= prompt("What is your gender male / female?");
// let age= prompt ("Enter your age");
// let drinkType= prompt("Do you want hot or cold drink?");
// let drinkName= prompt("Enter your drink name");

// let main= document.getElementById("main");

// let mainDiv= document.createElement("div");

// let paragraph= document.createElement("P");
// paragraph.textContent = username;
// mainDiv.appendChild(paragraph);

// let unOrderList= document.createElement("ul");
// let list1= document.createElement("li");
// list1.textContent=`gender: ${userGender}`;
// let list2= document.createElement("li");
// list2.textContent=`age: ${age}`;
// let list3= document.createElement("li");
// list3.textContent=`drink: ${drinkType} ${drinkName}`;

// unOrderList.appendChild(list1);
// unOrderList.appendChild(list2);
// unOrderList.appendChild(list3);

// mainDiv.appendChild(unOrderList);
// main.appendChild(mainDiv);
// >>>>>>> Stashed changes

const For = document.getElementById("Form");
For.addEventListener("submit",function(event){
    event.preventDefault();


    const name = event.target.name.value;
    const userAge = event.target.age.value;
    const userGender = event.target.gender.value;
    if(userGender=="male"){
                     alert(`welcome Mr. ${name}!`);
                    }
                else if(gender=="female"){
                     alert( `welcome Ms. ${name}!`);
                }
    const drinkName = event.target.drink.value;

    const drinkType= event.target.type.checked ? event.target.type.value :"";

    const drinkType1= event.target.type1.checked ? event.target.type1.value :"";
    console.log(name , userAge , userGender , drinkType , drinkType1 , drinkName);
    let paragraph=  document.createElement("p");
    paragraph.textContent = name;
    Form.appendChild(paragraph);

    let paragraph1= document.createElement("p1");
    paragraph1.textContent = userAge;
    Form.appendChild(paragraph1);

    let paragraph2= document.createElement("p2");
    paragraph2.textContent = userGender;
    Form.appendChild(paragraph2);

    let paragraph3= document.createElement("p3");
    paragraph3.textContent = drinkType;
    Form.appendChild(paragraph3);

    let paragraph4= document.createElement("p4");
    paragraph4.textContent = drinkType1;
    Form.appendChild(paragraph4);

    let paragraph5= document.createElement("p5");
    paragraph5.textContent = drinkName;
    Form.appendChild(paragraph5);
For.reset();
    })




