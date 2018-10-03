//# Addition Checkpoint
//Create a function that takes two numbers.

function add2 ( num1, num2 ){
    return num1 + num2;
}

console.log('Addition: ',add2(5, 6));
/*

Create a function that takes two numbers.

If the first number is bigger than the second number, 
return "The first number was bigger!". If the second number is 
bigger than the first number, return "The second number was bigger!". 
If the numbers are the same, return "The numbers are the same!".
*/

function checkBigger( num1, num2 ){
    let results = '';
    if ( num1 > num2 ) {
        results = 'The first number was bigger!'; 
    } else if ( num1 < num2 ) {
        results = 'The second number was bigger!';
    } else {
        results = 'The numbers are the same!';
    }
    return results;
}

console.log( 'Which is bigger 5,6?', checkBigger(5,6));
console.log( 'Which is bigger 8,7?', checkBigger(8,7));
console.log( 'Which is bigger 7,7?', checkBigger(7,7));

//Create a function that takes in an array. Add up the first and last values in the array.
function addFirstLast( array ){
    return parseFloat(array[0]) + parseFloat(array[array.length - 1]);
}

console.log ('Add first and last item: array regular', addFirstLast([6, 7, 8, 9, 10, 11, 12]));
console.log ('Add first and last item: array with one value', addFirstLast([1]));
console.log ('Add first and last item: array with string in one', addFirstLast(['b', 7]));
console.log ('Add first and last item: pass in two numbers', addFirstLast(5,6));
console.log ('Add first and last item: array with 2 string numbers', addFirstLast(['7.5', 7]));

//Create a function that takes two parameters. The first parameter is an array, the second parameter will be a number.
//Your function should return a string that combines all of the values starting at the index of the number passed in 
//through the end of the array.

function stringArrays(array, numIn) {
    let returnString = '';
    for (let i = numIn; i<array.length;i++) {
        returnString += array[i] + ' ';
    }
    return returnString;
}

console.log(stringArrays(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3));
console.log(stringArrays(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 1));

//Create a function that takes in an array of arrays. Add up all of the numbers in all of the arrays and return the value.

function addArrayNumbers( arrayIn ) {
    let returnValue = 0;
    for (array of arrayIn) {
        for (num of array){
            returnValue += num;
       }
    }
    return returnValue;
}

console.log(addArrayNumbers([ [1, 2], [3, 4, 5] ]));
console.log(addArrayNumbers([ [1, 2], [3, 4, 5], [6] ]));

/* Create a function that takes in an array of employee objects. Each employee object will come 
in with a property called yearsOfExperience. Your function should return the total 
years of experience for all of the employees.
*/
function totalYearsExperience( array ){
    let numTotal = 0;
    for (employee of array) {
        numTotal += employee.yearsOfExperience;
    }
    return numTotal;
}

console.log(totalYearsExperience([
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Jane", yearsOfExperience: 2 }
]));
