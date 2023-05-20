/**
 * Wraps an asynchronous function with error handling middleware.
 *
 * @param {Function} passedFunction - The asynchronous function to be wrapped
 * @returns {Function} - Middleware function with error handling
 */
export const catchAsyncError = (passedFunction) => (req, res, next) => {
  // Resolves the passed function and catches any errors that occur
  Promise.resolve(passedFunction(req, res, next)).catch(next);
};

/** This code snippet provides a utility function called `catchAsyncError` that is used to wrap asynchronous functions with error handling middleware. Here's a breakdown of the documentation:

* @param {Function} passedFunction`: This parameter represents the asynchronous function that needs to be wrapped with error handling middleware. It should be a function that accepts `req`, `res`, and `next` as parameters (typical for Express middleware functions).

* @returns {Function}`: The `catchAsyncError` function returns a new middleware function that incorporates error handling. This function also takes `req`, `res`, and `next` as parameters, matching the signature of Express middleware.

* Resolves the passed function and catches any errors that occur`: This comment explains the functionality of the `catchAsyncError` function. It resolves the `passedFunction` asynchronously using `Promise.resolve()`, and if any errors occur during the execution of the function, they are caught and passed to the `next` middleware function (Express error handling middleware).

By using the `catchAsyncError` utility function, you can wrap any asynchronous function in Express middleware and handle any potential errors that may occur during its execution. It helps to avoid repetitive error handling code and promotes cleaner and more maintainable code. **/
