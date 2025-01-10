const countValue = document.querySelector('#counter');
// console.log(countValue);

const increment = () => {
    // let value = countValue.innerText; //it gives in numver form so
    let value = parseInt(countValue.innerText);
    value++;
    countValue.innerText = value;
};


const decrement = () => {
    let value = parseInt(countValue.innerText);
    value--;
    countValue.innerText = value;

}