import { IErrorResponse } from '@/types/Server';

export default class ErrorResponse implements IErrorResponse {
	constructor(httpStatusCode: number, message: string) {
		this.hasError = true;
		this.status = httpStatusCode;
		this.message = message;
	}

	hasError: boolean;
	message: string;
	status: number;
}