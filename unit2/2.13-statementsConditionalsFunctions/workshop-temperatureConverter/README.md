# Block 13 - Temperature Conversion App

## Table of Contents
- [Overview](#overview)
- [Instructions](#instructions)
- [Project Requirements](#project-requirements)
- [Submission](#submission)
- [Rubric](#rubric)

---

## Overview
In this workshop, you will create an application to convert Fahrenheit to Celsius. This app will utilize the same concepts from your guided practice, which you can use as a reference. The application will prompt the user to enter a temperature in Fahrenheit, convert it to Celsius, and provide feedback on whether the temperature feels hot or cold.

The goal is to implement the functionality of a simple app that asks the user for a number and then calculates temperature conversions based on the input.

---

## Instructions
1. **Fork and clone the starter repository**.
2. **Open the project** in VS Code.
3. **Live serve `index.html`**. You should be greeted with a prompt.
4. **Complete the functions described in `index.js`**.

---

## Project Requirements
Complete the following three functions:

1. **convertToCelsius()**: 
   - Define this function to take a Fahrenheit temperature, convert it to Celsius, and return the value. 
   - To convert from Fahrenheit to Celsius, subtract 32 from the Fahrenheit value and multiply by \( \frac{5}{9} \).

2. **createMessage()**: 
   - This function should take the Fahrenheit temperature and the Celsius equivalent as arguments and determine how it feels based on certain temperature ranges.
   - It should return a message telling the user the conversion from Fahrenheit to Celsius and how that feels. 

3. **rand()**: 
   - Define this function to take a limit and return a random number between 0 and that number.

---

## Submission
Please submit a GitHub link to your forked repository (forked repositories are visible to staff even when set to "private").

---

## Rubric

### Temperature Converter
| Criteria | Ratings | Points |
|----------|---------|--------|
| **Link JavaScript File**: The submission has an HTML page that contains a script tag in the HEAD of the document, linking the JavaScript file. | 1 to >0.0 pts | Observed / Not Observed |
| **Function Definitions**: The code contains 3 functions (`rand`, `convertToCelsius`, and `createMessage`), all defined with correct syntax. | 1 to >0.0 pts | Observed / Not Observed |
| **createMessage**: The `createMessage` function uses `if` and `else if` statements and returns a message using template literals. | 1 to >0.0 pts | Observed / Not Observed |
| **rand**: The `rand` function utilizes `Math.round()` and `Math.random()` methods. | 1 to >0.0 pts | Observed / Not Observed |
| **Prompt and Functionality**: When the program is run, the user is prompted to enter input in the browser, and messages are logged to the console. | 1 to >0.0 pts | Observed / Not Observed |

**Total Points:** 5