import IHttpService from '@/types/Server';
import fetch, { RequestInit, Response } from 'node-fetch';

export default class HttpService implements IHttpService {

    private readonly _defaultOptions: RequestInit = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
	};

    constructor() { }

    public async get(url: string, options?: RequestInit): Promise<Response> {
		let requestInit = this._createRequestInit('GET', null, options);
		return await fetch(url, requestInit);
    }
    
    private _createRequestInit(method: string, data?: any, options?: RequestInit): RequestInit {
		if (typeof options !== 'object' || options === null) options = {};
		return {
			...this._defaultOptions,
			method,
			body: data ? JSON.stringify(data) : undefined,
			...options
		};
	}

}