import HttpResponseCode from '@/classes/HttpResponseCode';
import { IBaseController, LogType } from '@/types/Server';
import { build_500_response } from '@/utils/server';
import { Response } from 'express';

export default class BaseController implements IBaseController {

    constructor() { }

    log(type: LogType, message: string) {
        console.log(`${type}: ${message}`);
    }

    protected sendError(error: Error | string, response: Response) {
		if(typeof error === 'string') {
			error = new Error(error);
		}
		this.log('error', error.stack);
		response.status(HttpResponseCode.SERVER_ERROR)
			.send(build_500_response(error));
	}

}