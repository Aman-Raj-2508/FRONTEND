//<-----------------------------adding 100 para------------------------------>
// const t1 = performance.now();
// for (let i = 0; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("This took " + (t2 - t1) + " ms "); //100 reflow,100 repaint


//<-----------------------------optimising a bit---------------------------->
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for (let i = 0; i <= 100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("This took " + (t4 - t3) + " ms ");


//<------------------------------BEST PRACTICE------------------------------>
// let fragment = document.createDocumentFragment(); //Using document fragments
// for (let i = 0; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); //1 reflow , 1  repaint


//<------------------------------Seeing Js is Single threaded------------------------------>
function addPara() {
    let para = document.createElement('p');
    para.textContent = 'Js is single';
    document.body.appendChild(para);
}

function appendNewMessage() {
    let para = document.createElement('p');
    para.textContent = 'Kya haal chaal';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();
