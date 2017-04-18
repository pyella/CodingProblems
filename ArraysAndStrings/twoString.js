

const twoStringsMaxCount = (str) => {
   let uniqueChars = {},
       max = 0;

   uniqueChars = str.split("").reduce( (acc, val, indx) => {
             acc[val] ? acc[val]++ : acc[val] = 0; return acc;
   }, {});

   let aUniqueChars = Object.keys(uniqueChars);

   for(let idx = 0; idx < aUniqueChars.length; idx++) {
       for (let j = idx+1; j < aUniqueChars.length; j++) {
           let twoChar = aUniqueChars[idx] + aUniqueChars[j];
           let twoCharStrLength = str.match(new RegExp(["["+twoString+"]"], "g")).reduce((acc, val, idx, arr) => 
            (idx > 0 && val === arr[idx-1]) ? undefined : acc + 1
           , 0) || 0;
           max = Math.max(max, twoCharStrLength);
       }
   }
   console.log(max);
};



twoStringsMaxCount("abcdabb");

