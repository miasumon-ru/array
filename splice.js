var names = ['rahim', 'karim' , 'balam', 'kalam'];
var numbers = [1,5,7,8,3,4,6,9];


// concat method combines two or more arrays
var combinationOfTwoArray =  names.concat(numbers);

// console.log(combinationOfTwoArray);

var modifiedArrayWithSlice = combinationOfTwoArray.splice(0,5);

console.log(modifiedArrayWithSlice);
console.log(combinationOfTwoArray);