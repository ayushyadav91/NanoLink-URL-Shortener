export class ApiResponse {
    constructor(data, statusCode, success=true) {
        this.data = data;
        this.statusCode = statusCode;
        this.success = success;
    }
}