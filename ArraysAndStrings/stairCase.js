

const generateStairCase = (size) => {
   let mutArr = new Array(size).fill(" ");
   let idx = 0;
   while ( idx < size) {
       console.log(mutArr.fill("#", size - 1 - idx).join(""));
       idx++;
   }
};
//Generating length 5 stair case
console.log("---Generating length 5 stair case---");
generateStairCase(5);
//Generating length 10 stair case.
console.log("---Generating length 10 stair case---");
generateStairCase(10);
