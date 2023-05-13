/* Problem 1: You are receiving values from an AXIOS request, said api returns 2 
 arrays with the following values [1,4,5,8,10,30] and ["January", "February", "March", "April", "May" ,"June"] 
 the goal is to build a JSON Array to be used in the front, The return output should be similar to 
 [ {"January":1, "February":4}..... ] Note: The function should only have one for loop. */

 let numbers = [1,4,5,8,10,30]
let months = ["January", "February", "March", "April", "May" ,"June"]

function merge(name, num) {
    let arr = {};
    for (let i = 0; i < name.length; i++) {
        arr[name[i]] = num[i];
    }
    return arr;
}

let x = merge(months, numbers)
let result = JSON.stringify(x)

console.log(result) 

//-------------------------------------------------------------------------------
/* problem 2: Write a function that allows only the following options.
-The first letter must be capitalized
-must have at least 4 numbers
-must have some special character "(-@/*"
-key length must be at least 10 characters */


document.getElementById('submit').addEventListener('click', function() {

    let password = document.getElementById('password').value;

    let firstUppercase = /^[A-Z]/.test(password);
    let hasNumbers = /(.*\d){4}/.test(password);
    let hasCharacter = /[(-@/*]+/.test(password);
    let longEnough = password.length >= 10;



    if (firstUppercase && hasCharacter && hasNumbers && longEnough) {
        alert ('good password')
    } else {
        alert ('thats a terrible password! you need capital first letter, 4 numbers, 1 special character, 10 character length')
    }
})

//----------------------------------------------------------------------------
/* problem 4 Create a function that 
when passing the number of the month of the year returns the name of the month and vice versa */


/* 5) create a function that receives the text and converts it to base64 and another that decodes said text */