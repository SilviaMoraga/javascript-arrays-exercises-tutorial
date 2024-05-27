let arr = [45,67,87,23,5,32,60];

let flippedArray = []
for(let i = arr.length - 1; i >= 0; i--) {
    let item = arr[i];
    flippedArray.push(item);
}

console.log(flippedArray)
