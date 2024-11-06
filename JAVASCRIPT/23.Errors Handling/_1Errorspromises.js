function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);

        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download Completed");
            reject(data);
        }, 5000);
    });
}

let x = fetchData("www.google.com");
x.then(function success(value) {
    console.log("value is ", value);
}, function err(err) {
    console.log("error is", err);
})