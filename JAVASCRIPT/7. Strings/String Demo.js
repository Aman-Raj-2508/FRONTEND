let str = "microsoft";
console.log(str[2]);//prints c
console.log(str[9])//prints undefined
console.log(str.length);
console.log(str.length - 1);

for (let i = 0; i <= str.length - 1; i++) {
    console.log(i, str[i]);
}