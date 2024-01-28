var names = ['rahim', 'karim' , 'balam', 'kalam'];
var numbers = [1,5,7,8,3,4,6,9];

var num1= 50;
var bookName = 'Memsaheb';
var isStudent = true;

// var arrayOrNot = Array.isArray(names);
// var arrayOrNot = Array.isArray(numbers);
// var arrayOrNot = Array.isArray(num1);
// var arrayOrNot = Array.isArray(bookName);
var arrayOrNot = Array.isArray(isStudent);

if(arrayOrNot === true){
    console.log('it is an array');
}
else{
    console.log('it is not an array');
}