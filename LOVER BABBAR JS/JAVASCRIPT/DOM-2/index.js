// <----------------------------- ADD EVENTLISTENER ---------------------------->

//1. Way First
// document.addEventListener('click', function () {
//     console.log("I have click on the document");
// });

//2. Way Second
function run(event) {
    console.log("I have clicked on the document");
    console.log(event);
}

document.addEventListener('click', run);


// <----------------------------- REMOVE EVENTLISTENER ---------------------------->
document.removeEventListener('click', run);

// <----------------------------- EVENT OBJECT ---------------------------->
const content = document.querySelector('#wrapper');

content.addEventListener('click', function (event) { //we can pass aman also instead of event
    console.log(event);
});

// <----------------------------- PREVENT DEFAULT ---------------------------->
let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
})

// <----------------------------- AVOID TOO MANY EVENTS---------------------------->
let myDiv = document.createElement('div');

function para(event) {
    console.log('I have clicked');
}


function paraStatus(event) {
    console.log(event.target.textContent); //To target individual paras
}

myDiv.addEventListener('click', paraStatus);

for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    // Here a new funciton is created everytime taking more memory
    // newElement.addEventListener('click', function (event) {
    //     console.log('I have clicked');
    // }); 

    // we make a funciton outside this
    // newElement.addEventListener('click', para);

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);