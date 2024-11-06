function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Going to start the download");
        setTimeout(function process() {
            let data = "Dummy data downloaded";
            console.log("Download completed");
            resolve(data);
            resolve(1234567);
        }, 10000);
        console.log("Timer to mimic download started");
    });
}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
var x = fetchData("www.google.com");
console.log("new promise object created successfully, but downloading still going on");
console.log(x);