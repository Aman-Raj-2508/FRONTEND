function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);

        setTimeout(function processDownloading() {
            let data = "Dummy data";
            // let data = undefined;
            console.log("Download Completed");
            if (typeof data == "undefined") {
                reject(data);
            } else {
                resolve(data);
            }
        }, 5000);
    });
}

let x = fetchData("www.google.com");
x.then(function sucess(value) {
    console.log("value is ", value);
    return 10;
})
    .then(function success1(value) {
        console.log("value again is", value);
        throw { error: "new error" } //to manually throw an error within .then();
    })
    .catch(function errorHandle(err) {
        console.log("error is", err);
    })
    .finally(() => { //alwasy gets executed
        console.log("experiment completed");
    })