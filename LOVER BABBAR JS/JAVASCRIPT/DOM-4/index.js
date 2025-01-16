// let meraPromise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside Promise1");
//     }, 5000);
//     // resolve(2233);
//     reject(new Error('Bhaisahab Error aaaya hai'));
// });

//Whena promise is successfully fullfilled
// meraPromise1.then((value) => {
//     console.log(value);
// });

//When there is error
// meraPromise1.catch((error) => {
//     console.log("Received an error");
// });

//Another way to write same thing
// meraPromise1.then((value) => { console.log(value) }, (error) => { console.log("Received an error") });


// let meraPromise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("I am inside Promise2");
//     }, 3000);
//     // resolve(2233);
//     // reject(new Error('Bhaisahab Error aaaya hai'));
// });

//----------------------------------.then() Chaining-------------------------
// let waada1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     }, 2000);
//     resolve(true);
// })

// let output = waada1.then(() => {
//     let waada2 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         }, 3000);
//         resolve("waada2 resolved");
//     });
//     return waada2;
// })
// output.then((value) => console.log(value));

//----------------------------------Async-Await------------------------------
// let func1 = asy nc function abcd() {
//     return 7;
// }
// console.log(func1());

// async function utility() {

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi me bahut thandi hai");
//         }, 3000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hyderabad is Hot");
//         }, 5000);
//     });

//     let dM = delhiMausam;
//     let hM = hydMausam;

//     return [dM, hM];

// }

//----------------------------------FETCH API------------------------------

async function utility(params) {

    //This is get or retrieving something using api
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1'); //Jab tk call puri n ho jaye wait kro yaha pe, uske baad jo bhi value hai usko content pe store kr do
    let output = await content.json();//Jab tk json format me convert n ho, tb tk wait kro yaha.
    console.log(output);
}

utility();

async function helper(params) {
    //This is post call using options parameter in fetch api
    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await content.json();
    return response;

}

async function utility1(params) {
    let output = await helper();
    console.log(output);
}

utility1();


