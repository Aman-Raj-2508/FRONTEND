let x;

// x = document.getElementById('text');
// console.log(x);

// Returns or stoes the array of classes if there are multiple elemets by same className
// x = document.getElementsByClassName('items');
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);

//Does not store all the elements instead it searches and returns the first element that matches

// x = document.querySelector('.items'); //returns the first list with item class
// console.log(x);

// x = document.querySelectorAll('.items'); //returns all the element that matches the query
// console.log(x);
// console.log(x[1]);

// x = document.createElement('li');
// x.className = 'items';
// x.innerText = 'Item 5';

// let ul = document.getElementById('list');
// ul.append(x);
// console.log(ul);

var items = document.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // console.log(item);

    let link = item.querySelector('a');
    link.setAttribute('href', 'www.googke.com/search?q=' + link.innerText);
    console.log(link);
}

console.log(items);

