/**The code defines a class called `ErrorHandler` that extends the `Error` class.
It takes a `message` and `statusCode` parameter in its constructor.
The `message` parameter sets the error message, and the `statusCode`
parameter represents the associated HTTP status code. 
The class is exported as the default export of the module. **/

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;
