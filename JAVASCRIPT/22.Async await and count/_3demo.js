//1. Write a function to download data from a url
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);

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


// async function processing() {
//     let downloadedData = await fetchData("www.google.com");
//     let file = await writeFile(downloadedData);
//     let uploadResponse1 = await uploadData(file, "www.drive.google.com");
//     let downloadedData1 = await fetchData("www.google.com");
//     let file1 = await writeFile(downloadedData);
//     let uploadResponse2 = await uploadData(file, "www.onedrive.com");
//     let downloadedData2 = await fetchData("www.google.com");
//     let file3 = await writeFile(downloadedData);
//     let uploadResponse3 = await uploadData(file, "www.metabase.com");
//     return uploadResponse1 + uploadResponse2 + uploadResponse3;
// }
/** Above is asyn await hell so we wrappped the code in different processes */
async function process1() {
    let downloadedData = await fetchData("www.google.com");
    let file = await writeFile(downloadedData);
    let uploadResponse1 = await uploadData(file, "www.drive.google.com");
    return uploadResponse1;
}

async function process2() {
    let downloadedData1 = await fetchData("www.google.com");
    let file1 = await writeFile(downloadedData1);
    let uploadResponse2 = await uploadData(file1, "www.onedrive.com");
    return uploadResponse2;
}

async function process3() {
    let downloadedData2 = await fetchData("www.google.com");
    let file3 = await writeFile(downloadedData2);
    let uploadResponse3 = await uploadData(file3, "www.metabase.com");
    return uploadResponse3;
}
console.log("Start");
Promise.all([process1(), process2(), process3()]).then(function process(value) {
    console.log(value);
})