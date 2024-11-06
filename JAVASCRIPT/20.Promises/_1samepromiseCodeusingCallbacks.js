//1. Write a function to download data from a url
function fetchCustom(url, fn) {
    /**we are just mimicing the function not actually making a function to download it
     this function is going to download content from the url
    this downloading can take some time
    fn will say we will download the content from url,and then whatever will be result , we will pass to the callback*/
    console.log("starting downloading from", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);//Scope of fetchCustom so settimeout functions remembers the lexical scope
    }, 3000);
}

//2. Write a funciton to save that downloaded data ina  file and return the filename
function writeFile(data, fn) {
    console.log("Starting writing data", data);
    setTimeout(function process() {
        console.log("Writing completed");
        let filename = "output.text";
        fn(filename);
    }, 4000);
}

//3.Write a function to upload the file written in previous step to a new url;
function uploadFile(filename, newurl, fn) {
    console.log("Upload started");
    setTimeout(function process() {
        console.log("File", filename, "uploaded successfully on", newurl);
        let uploadresponse = "SUCCESS";
        fn(uploadresponse);
    }, 2000);
}

let reponse2 = fetchCustom("www.google.com", function downloadCallback(response) {
    console.log("Downloaded Data is ", response);
    writeFile(response, function writeCallback(filename) {
        console.log("New file written is", filename);
        uploadFile(filename, "www.drive.google.com", function uploadCallback(uploadresponse) {
            console.log("successfully uploaded", uploadresponse);
        })
    })
});