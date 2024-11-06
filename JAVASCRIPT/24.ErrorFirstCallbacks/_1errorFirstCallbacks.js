//1. Write a function to download data from a url
function fetchData(url, fn) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading() {
        console.log("Download Completed");
        let response = "Dummy data";
        // fn(undefined, response);//no error
        // fn(new Error("something"), response)// using new Error for errors
        fn({ error: "Some error" }, + response)//passing objects as error
    }, 3000);
}

fetchData("www.google.com", function (err, response) {
    if (err) {
        console.log("error is", err);
        return;
    }
    console.log("response is", response);
})