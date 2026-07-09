class ErrorHandler extends Error{
    constructor(message, stausCode) {
        super(message);
        this.statusCode = stausCode;
        Error.captureStackTrace(this.constructor)
    }
}

export default ErrorHandler;
