// let isUserPremium=false;
// let isUserVIP=true;

// if(isUserPremium){
//     console.log("Enjoy premium");
// }else if(isUserVIP){
//     console.log("Enjoy VIP");
// }else{
//     console.log("Please purchase");
// }


let isuserPrime = true;
let isuserDiscovery = false;
let isuserAccorn = false;

if (isuserPrime) {
    if (isuserDiscovery) {
        if (isuserAccorn) {
            console.log("Enjoy all the content");
        }
        else {
            console.log("Enjoy both prime and discovery");
        }
    } else if (isuserAccorn) {
        console.log("Enjoy both accorn and prime");
    } else {
        console.log("Enjoy Prime");
    }
} else {
    console.log("Buy")
}