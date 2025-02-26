# Secure the Vault 🔐

## Table of Contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Pseudocode](#pseudocode)
- [Review Notes](#review-notes)
- [Criteria Checklist](#criteria-checklist)

## Overview
JavaScript creates so much more functionality for a site and automates processes. You are building a vault that requires three mathematical calculations to generate the three codes in a combination. Use the JavaScript console or the script block within an HTML page to create three variables. Each variable will be the result of a specific calculation (three in total). The combination of the lock is **10 - 40 - 39**. You must use three different arithmetic operators to generate each individual number and then display the combination on the HTML page or in an alert popup.

Remember to use the [MDN documentation](https://developer.mozilla.org/) if you need help with keywords, methods, or something else. An internet search for "mdn <thing you are trying to do>" usually works great for getting you to the correct MDN page you want.

## Requirements
1. Before anything else, write the pseudocode of your steps and how you will solve this exercise.
2. Create a string for the user saying: 
   > "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
3. Assign three variables. Each variable contains the corresponding result of a calculation using a unique arithmetic operator ( + - * / ). Each must equal one of the three codes in the combination.
4. Add comments throughout the code to explain each step in the process.
5. Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.

> **Note**: It is important that you submit something before the next class session. Even if you are not done, submit your proof of progress before the next class begins.

## Pseudocode
```plaintext
1. Create a variable 'message' that holds the user message string.
2. Create a variable 'code1' and assign it a calculation that equals 10 using an arithmetic operator.
3. Create a variable 'code2' and assign it a calculation that equals 40 using a different arithmetic operator.
4. Create a variable 'code3' and assign it a calculation that equals 39 using yet another arithmetic operator.
5. Use alert() to display the message and the three codes.