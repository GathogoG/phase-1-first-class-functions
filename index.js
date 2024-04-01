// Function receivesAFunction takes a callback function as an argument and calls it
function receivesAFunction(callback) {
  // Call the callback function
  callback();
}

// Function returnsANamedFunction returns the named function
function returnsANamedFunction() {
  // Define a function that was named
  function namedFunction() {
      console.log("This is a named function!");
  }
  // Return the named function
  return namedFunction;
}

// Function returnsAnAnonymousFunction returns an anonymous function
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function() {
      console.log("This is an anonymous function!");
  };
}

// Example usage:

// Define a callback function
function myCallbackFunction() {
  console.log("Callback function called!");
}

// Call receivesAFunction and pass myCallbackFunction as an argument
receivesAFunction(myCallbackFunction);

// Call returnsANamedFunction to get the named function
const myNamedFunction = returnsANamedFunction();
// Now you can use myNamedFunction as a regular function
myNamedFunction(); // This will log "This is a named function!"

// Call returnsAnAnonymousFunction to get the anonymous function
const myAnonymousFunction = returnsAnAnonymousFunction();
// Now you can use myAnonymousFunction as a regular function
myAnonymousFunction(); 
