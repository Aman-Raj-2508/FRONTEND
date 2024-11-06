//1. Write a function to download data from a url
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);

        /** Promise object will get ceated easily as there is no blocking
         * piece of code and initially it will be pending.
         * As fullfillement happens after a timer of 7 secs.
         */
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download Completed");
            resolve(data);
            resolve("Aman");/**These lines will not be executed*/
            resolve("123");/**As promise is fullfilled only once and we resolve only one*/
            /**This executes as resolve is like returning not exactly returning
            So if there is any line of code it will be executed but resolving works only once */
            console.log("hello");
        }, 5000);

        /**this callback is having a long synchronous
        piece of code,So JS will have to wait for promise object creation
        and just after for loop , we also resolve the promise so we get a resolved promsie.*/
        // for (let i = 0; i < 100000; i++) {
        //     resolve("Dummy data");

        // };
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

//here everything will work in a flow js will not wait to fetchdata to be resolved and move further
// let data = fetchData("www.datadrive.com");
// let filename = writeFile(data);
// let response = uploadData(filename, "www.drive.google.com");

// the above will not work in required fashion so we


// USE .THEN() function
// let downloadPromise = fetchData("www.datadrive.com");
// downloadPromise
//     .then(function processDownload(value) {
//         console.log("Download promise fullfilled");
//         console.log(value);//dummy data printed
//         let writePromise = writeFile(value);
//         writePromise
//             .then(function processWrite(value) {
//                 console.log("writing of file completed");
//                 console.log(value);
//                 let uploadPromise = uploadData(value, "www.drive.google.com");
//                 uploadPromise
//                     .then(function processUpload(value) {
//                         console.log(value);
//                     })
//             })
//     })
//The above code solves inversion of control but still gets promise hell

console.log("Start");

let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
    .then(function processDownload(value) {
        console.log("Downloading is done with the following value", value);
        return value;
    }) //once this function is completely excuted then it returns a fullfilled value
    .then(function processWrite(value) {//data from fetch data
        console.log("inside process writeFile")
        return writeFile(value);
    })//once this function is completely excuted then it returns a fullfilled value
    .then(function processUpload(value) {
        console.log("inside process writeFile")
        return uploadData(value, "www.drive.com");
    })

// console.log("Ended")
/** it will be printed before the execution of .then fucntions
because .then function registers functions in fullfillment arrays and move forward
doesnot wait so at line it will not wait .
similarly for line 75 and 79 AND
it will print ending */