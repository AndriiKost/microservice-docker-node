import { Request } from 'express';
import { Response } from 'node-fetch';
import { IUser } from './User';

export interface IBaseController {
    
}

export type LogType = 'error' | 'info' | 'warning';

export interface IErrorResponse {
	hasError: boolean;
	status: number;
	message: string;
}


export interface IAuthorizedRequest extends Request {
	user: IUser;
}

export interface IAuthorizedGetRequest extends IAuthorizedRequest {
	params: {
		id: string;
	};
}

export interface IBaseService {
	log(type: LogType, message: string): void;
}

export default interface IHttpService {
	get(url: string): Promise<Response>;
}
