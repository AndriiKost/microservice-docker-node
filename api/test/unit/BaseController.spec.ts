import HttpResponseCode from '@/classes/HttpResponseCode';
import BaseController from "@/controllers/BaseController";

describe('BaseController', () => {

    it('on sendError sets a status of 500', () => {
		let sut = new BaseController();
		const res = mockResponse();
		sut.sendError(new Error('foo'), res);
		expect(res.status).toHaveBeenCalledWith(HttpResponseCode.SERVER_ERROR);
	});

	it('on sendError sends a 500 response with the provided error', () => {
		let sut = new BaseController();
		const res = mockResponse();
		sut.sendError(new Error('foo-bar'), res);
		expect(res.send).toHaveBeenCalledWith(
			{
				'hasError': true,
				'message': 'foo-bar',
				'status': 500
			}
		);
	});

});

const mockResponse = () => {
	const res = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	res.send = jest.fn().mockReturnValue(res);
	return res;
};