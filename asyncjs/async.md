# Asynchronous Javascript

Asynchronous means your program does not need to wait for a specific task that takes a long time, it simply starts executing the function, then moves on to the next function while the first one finishes

-   You can send request/start a lengthy fucntion and forget about it
-   Then you receive the response/the function once its finished
-   Your program does not need to wait response in the mean time

This is useful with API, and other processes that could hold up or "block" the execution of your programs main thread

# How Async Javascript work

Javascript like many programming languages implements a stack where function calls are stored

Since JS is single threaded function calls are added to the stack one at a time, and as one is executed the next one is added to the stack

This basic call stack is how synchronous javascript works

## Javascript Event Loop

When there is a call to an async function such as setTimeout, setInterval, AJAX requests, fetch requests, javascript can allow the browser thread/web api to handle these specific function calls, while cna move on

Once the web api is done processing the function, it will return the callback or response to the queue where it will wait for the call stack to be empty, then the event loop will return the response/callback function to the call stack

![Event Loop](gif14.1.gif)

## Basic steps of the Event Loop in JS

1. Async call gets added to the call stack
2. JS decides to hand it off to the web api where it get processes
3. Other functions can be added and executed on the call stack while the web api works
4. Once the web api has a reponse for us it gets added to the queue
5. The event loop checks the queue when the call stack is empty to see if something needs to be added from the queue
6. Our response/callback is added to the call stack and processed as normal

https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

If javascript is returning from the async function call before it has a response, how does JS handle this?

With Promises

# Promises

Javascript uses promises for async operations, they are placeholders for a future value. Many async function return promises implicity.

-   Simply a "promise" that a function will return what you are expecting
-   Promise are objects, you can create them the new keyword
-   Promies take a callback function called the executer which automatically run when the object is created
-   The executor also takes two callback functions
    -   resolve(value) returns the result of the job once it as succesfully finished
    -   reject(error) is called if there is an error while processing the job

Promises have a property .status which gives information about the state of the object

-   pending
-   fulfilled
-   rejected

The promise object connects the executor, and any consuming function which will receive the result or an error from the promise

You would use the .then .catch and .finally methods on the promise object to consume the results or errors of the promise object

# Fetch

Fetch is a more modern and versatile way of making AJAX requests. The fetch api is provided by the window object, and provides the .fetch() method.

-   .fetch() is used to send requests and returns a promise that is retrieved from the reponse
-   If the request is a success the promise will be resolved, your be returned the object in the response body
-   If the requests fails, or returns an HTTP-status od 404 or 500 the promise will be rejected

There are various methods you can use to access the response body of a successful request

-   response.text() - read the reponse and return text
-   response.json() - parse the reponse as json
-   reponse.formData() - returns the response as formdata object
-   reponse.blob() - return the reponse as Blob (binary data with typ)
-   reponse.arratBuffer() - return the response as ArrayBuffer (low level representation of binary data)

# Async / Await

Javascript introduced a nicer way to implmenent async function in es2017/es8 using the async and await keywords

The async keyword denotes that a function will operate asynchronously via the event loop

-   Any function with the async keyword will implicitly retunr a promise object
-   You can use any of the consumer function on the return of an async function, however, there are nicer ways to handle these with await

The await keyword only works inside of an async function

-   await tells javascript to wait for the promise to be resolved before moving on
-   You can use wait when calling any function that returns a promise, but it must be inside of an async function
-   It allows you to gather data, or wait for something while also not blocking the main thread

You no longer need to chain consumer functions together, making your code easier to read
