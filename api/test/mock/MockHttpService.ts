import IHttpService from '@/types/Server';
import { Response } from 'node-fetch';

export class MockHttpService implements IHttpService {
	getCount: number = 0;
	getUrl: string = '';

	constructor() { }

	async get(url: string): Promise<Response> {
		this.getCount += 1;
		this.getUrl = url;
		return new Promise((resolve, reject) => {});
	}

}
