

//Using a new storage mechanism.
const rotateArray = (array) => {
    let newArray = [];
    for (let colIdx = 0; colIdx < array[0].length; colIdx++) {
        let colTransformed = [];
        for (let rowIdx = 0; rowIdx < array.length; rowIdx++) {
            colTransformed.unshift(array[rowIdx][colIdx]);
        }
        newArray.push(colTransformed);
    }
    return newArray;
};

console.log("--Rotation using newArray--");

console.log(rotateArray([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
console.log(rotateArray([ [ 1, 2, 3, 10 ], [ 4, 5, 6, 11 ], [ 7, 8, 9, 12 ], [ 13, 14, 15, 16 ] ]));

const rotateArrayInplace = (array, n) => {
   for(let layer = 0; layer < n/2; layer++) {
       let first = layer;
       let last = n - 1 - layer;
       for (let indx = first; indx < last; indx++) {
           let offSet = indx - first;
           let top = array[first] [indx];
           //Copy left to top
           array[first] [indx] = array[ last - offSet ] [first];
           //Copy bottom to left
           array[ last - offSet ] [first] = array [last] [ last - offSet ];
           //Copy right to bottom
           array [last] [ last - offSet ] = array [ indx ] [last];
           //copy top to right
           array [ indx ] [last] = top;
       }
   }
    return array;
};

console.log("--Rotation using array inplace--");

console.log(rotateArrayInplace([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ], 3));
console.log(rotateArrayInplace([ [ 1, 2, 3, 10 ], [ 4, 5, 6, 11 ], [ 7, 8, 9, 12 ], [ 13, 14, 15, 16 ] ], 4));



