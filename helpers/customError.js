export default class CustomError extends Error {
    constructor(errors) {
        super(errors);
        this.message = errors;
    }
}