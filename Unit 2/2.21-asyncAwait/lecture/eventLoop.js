// demo of eventLoop
 
console.log("one");
setTimeout(()=>
    console.log("two", 10)
);
console.log("three");

/*
Console output:

Live reload enabled.
eventLoop.js:1 one
eventLoop.js:5 three
eventLoop.js:3 two 10
*/

// async with callbacks

console.log("Getting Configuration")
fs.readFile('/config.json', 'utf8', (err, data)=> {
    console.log("got configuration:", data)
});
console.log("moving on..")

/* reading a file does not happen instantly, so output:
Getting Configuration
moving on..
got configuration

even if we don't have a timeout, it will take longer than instantaneous
any kind of delay will not be instant

nested callBacks are challenging, so we execute promises
instead of executing and calling back, we will return an object
status is either pending, fulfilled, or rejected

async function declaration denotes that the function returns a promise

await is only used inside an async function
*/ 

// ultra nested callBack function AKA CHAINING

/*
const carmelizeOnions = () =>{
    getOnions("pantry", (onions) =>{
        chopOnions(onions, (choppedOnions) => {
            if (choppedOnions){
                console.log("Carmelizing onions!");
            }
        })

    })
}

// async/await promises function

const carmelizeOnions = async () => {
    const onions = await getOnions("pantry");
    const choppedOnions = await chopOnions(onions);
    if (choppedOnions) {
        console.log("carmelizing onions!")
    }
}
    */

/*
"I will have onions once I get onions from the pantry (await),
I will have chopped onions as we wait for them to be chopped (await)"

more succinct and easier to read

*/

// try/catch

/*
try {
    tryStatements //try
} catch (exceptionVar) {
    catchStatements // try again
} finally {
    finallyStatements // 
}

const carmelizeOnions = async()=>{
    try{
        const onions = await getOnions("pantry");
        const choppedOnions = await chopOnions(onions);
        if (choppedOnions){
            console.log("carmelizing onions!");
        }
        else {
            throw new Error("kitchen is burning!");
        }
    } catch (error){
        console.error(error.message);
    }
};
*/ 

/* === APIs ===
code we don't own, someone else has written it
and we are interacting with it 
to implement certain functionality on our website

our webpage interacts with data in a database
API and database are backend
client <--> representational state transfer API <--> database
--> get/post/put/delete
<-- json/xml

CRUD Action
Get         -- Post     -- Put      -- Delete
Retrieve    -- Create   -- Update   -- Delete

*/

/* == FETCHING DATA
*/

// sending a request to a REST API endpoint
// fetch function returns a promise that is 
// fulfilled once the API's response is available
async function getUser(id) {
    try {
        const response = await
            fetch(`https://api.com/users/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}