// this is a comment
/** this is a multi-line comment
 * 1)Declare a string variable and assign to the value:
 * "You have received this message because you have been chosen to open an important vault."" 
 * 2) Declare and assign 3 variables, one to each number in the provided combo.
 * 3) code1 uses +
 * 4) code2 uses -
 * 5) code3 uses *
 * 6) Display the string and the codes to the user in an alert on the html page.
 * */


/* Use const to declare the userMessage. 
From SheCodes: const is a keyword used to declare a variable that cannot be reassigned a new value. 
It is similar to let, but the value of a const variable cannot be changed once it has been declared. */

const userMessage = "You have received this message because you have been chosen to open an important vault."

/*Use let to declare 3 var with arithmetic operations that each equal to the secret combination key*/

let code1 = 1 + 9
let code2 = 10 * 4
let code3 = 40 - 1

/* alert creates a pop up dialogue box that shows the userMessage and the secret key combination. */
alert(userMessage + "\n" + code1 + " " + code2 + " " + code3 + " ")

