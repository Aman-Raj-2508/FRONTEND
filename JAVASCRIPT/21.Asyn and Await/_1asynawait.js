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
        }, 5000);
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

async function processing() {
    let downloadedData = await fetchData("www.google.com");
    console.log("Downloading await completed");

    let file = await writeFile(downloadedData);
    console.log("Writing await completed");

    let uploadResponse = await uploadData(file, "www.drive.google.com")
    console.log("Uploading await completed");

    console.log("Completed process with response", uploadResponse);

    return true;
}

processing();

//run on browser also