

function mergeSort(arr){
   var len = arr.length;
   if(len < 2)
      return arr;
   var mid = Math.floor( len / 2),
       left = arr.slice( 0, mid),
       right = arr.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(left), mergeSort(right));
}
     
function merge(leftHalf, rightHalf) {
    let mergedArray = [],
        iLeftLen = leftHalf.length,
        iRightLen = rightHalf.length,
        leftIdx = 0,
        rightIdx = 0;

    while ( leftIdx < iLeftLen && rightIdx < iRightLen) {
        if (leftHalf[leftIdx] < rightHalf[rightIdx]) {
            mergedArray.push(leftHalf[leftIdx]);
            leftIdx++;
        }
        else {
            mergedArray.push(rightHalf[leftIdx]);
            rightIdx++;
        }
    }

    return mergedArray.concat(leftHalf.slice(leftIdx)).concat(rightHalf.slice(rightIdx));
}


//Test
console.log(mergeSort([ 66,9, 88, 4,1,6,9,0 ]));
