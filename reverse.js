const numbers = [ 1,2,3,4,5,6,7,8,9]
// console.log(numbers.reverse());


// without reverse method by for loop
let rev_numbers = [];
// for (let i = 0; i < numbers.length ; i++){
//     const num = numbers[i]
//     rev_numbers.unshift(num)
// }
// console.log(rev_numbers)

// by for of
// for ( let num of numbers){
//     rev_numbers.unshift(num)
// }
// console.log(rev_numbers)

// with while loop

for ( let i = numbers.length-1 ; i >=0 ; i--){
    let num = numbers[i]
    rev_numbers.push(num)
}

console.log(rev_numbers)