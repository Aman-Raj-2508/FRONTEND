let str = "javascript";
let frequencymap = {};//empty frequency map
for (i = 0; i <= str.length - 1; i++) {
    if (frequencymap[str[i]]) {
        frequencymap[str[i]] += 1;
    } else {
        frequencymap[str[i]] = 1;
    }
}
console.log(frequencymap);