/**Ececutes the function again and again at an interval of 3sec */
setInterval(function () {
    console.log("task done again");
}, 3000);


let id = setInterval(function () {
    console.log("task done again");
}, 3000);

setTimeout(function () {
    clearInterval(id);
}, 13000)
