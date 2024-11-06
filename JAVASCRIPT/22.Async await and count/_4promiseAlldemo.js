//1. Write a function to download data from a url
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);

        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download Completed");
            resolve(data);
        }, 7000);
    });
}

//2. Write a function to save that downloaded data ina  file and return the filename

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing", data, "in a file");
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully")
            resolve(filename);
        }, 3000);
    });
}

//3.Write a function to upload the file written in previous step to a new url;
function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("upload started on url", url, "filename is", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    });
}

let downloadPromise = fetchData("www.drive1.google.com");
let writePromise = writeFile("Dummy data");
let uploadPromise = uploadData("text.txt", "drive.google.com");
console.log("Start");
Promise.all([downloadPromise, writePromise, uploadPromise]).then(function process(value) {
    console.log(value);
})

