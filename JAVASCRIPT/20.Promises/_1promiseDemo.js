//How can we write a function to download some data from a url,and not use callbacks
//instead use promises
function fetch(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from", url);
        setTimeout(function process() {
            let data = "Dummy data";
            console.log("Completed fetching the data");
            //somehow we need to return the data ? for that
            resolve(data);//return some data on success  
        }, 4000);
    });
}

fetch("www.google.com");