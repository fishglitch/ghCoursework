**For each prompt below:**

Read the prompt. Identify the expectations. Write specifications in pseudocode/plain English for all the tests that would be useful for that prompt. Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them. Try not to write extraneous tests!

**Unit Tests:**
A function called "multiplication" that returns the product of the two input numbers.

1. Create a class that has a constructor(data) that allows the user to input of any two numeric values in an array. Then, we create a function that returns the product of the two given numbers using the multiplier symbol *. We can consider keeping the product as a full unrounded value or rounded using the Math.round.

A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
...should result in [-1, 1, 3, 9, 15]
Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:

* What should happen with unexpected inputs?
* What kinds of unexpected inputs should we worry about?
* What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)

1. Create a class that has a constructor data that takes in two arrays of integers. Expect to return the arrays into one array in ascending order. Expect to filter out repeating values. Expect to reduce the array into only returning odd values by using the strictly true symbol that any number in the array divided by 2 has one remainder (um %2 ===1).
2. If there are any unexpected inputs, perhaps a non numerical value, ensure that the function only takes in numerical values that are rounded to the nearest whole number. Non-numerical inputs may be: letters, symbols, spaces. Create an alert perhaps to notify the user of the invalid input. Ensure that the instructions clearly state we ask for numerical inputs only.
3. If there are repeating numerical numbers, filter those out (see explanation above).


**Functional Tests:**
A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:

* What should happen if the cart is empty?
* What needs to be shown to the user at each step of check out?
* What behaviors of this feature does the prompt miss or gloss over?
Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!

1. Expect a prompt reminding the user that their cart is empty and cannot checkout an order unless the cart has at least one item. In the code, have a boolean determining if the cart has no or any value 1 or more.
2. Expect that the user is prompted to either check out as a guest or make an account when they click a "Checkout" button. Expect to provide this option to create an account or log-in on all the pages the user is browsing.
3. At each check out step, expect to create a sum of the quantity of each item in the cart with the corresponding unit price, the sum of items in the cart, and the total cost of all items in the cart. Expect that the shipping and tax will be calculated after the user clicks on a button to "Preview Order" (or something similar)