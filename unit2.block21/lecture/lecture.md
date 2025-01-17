API

asynchronous data

event loops
Js is single threaded it can't multitask. 
event loop executes the code and coordinates when each operation is allowed to happen
when the user clicks refresh, go get the data. when the data comes back, show the data.

console.log("one");
setTimeout(()=>
    console.log("two"), 10);
console.log("three");

1,3,2

handling asynchronous code
call backs and promises

this is a call back
console.log("one");
setTimeout(()=>
    console.log("two"), 10);
console.log("three");

1,3,2

when it timesout, console.log

the problem with callbacks are nested callbacks.. WHEN WILL I RUN??

the challenge of handling different callbacks and when they will be executed

Promises
instead of nested logic. 

A promise is an object with a value and status repping the eventual result of an asynchronous operation

Pending - the value is undefined
fulfilled - the value is defined
rejected - there was an error with the operation

Async / await
the await is only used inside the async function

promises are easier to read and chain

Feature : Callbacks / Promises
Code readability: callback hell / easier to read, chaining
debugging : harder to trace errors


Application Programming Interface
allows our webpage to interact with the data somewhere
client - rest API - database
client: html/js on the front end

API & database are the backend code
API allows a client to interact with a service

REST - represetational state transfer
each end point is going to identify an action and a resource
an architectural style that describes how an API should work
created as a guideline to manage communication on a complex network (aka theitnernet)

CRUD - create read update delete
For our UIs to be fully functional, they should be able to interact with API