import ErrorResponse from '@/classes/ErrorResponse';
import HttpResponseCode from '@/classes/HttpResponseCode';

export function onError(error: NodeJS.ErrnoException, port: string | number | false) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
		break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
		break;
	default:
		throw error;
	}
}

export function build_500_response(serverError: Error | string) {
	if(typeof serverError === 'string') {
		serverError = new Error(serverError);
	}
	const nodeEnvironment = process.env.NODE_ENV || '';

	if(['test', 'development', 'local'].includes(nodeEnvironment)) {
		return new ErrorResponse(HttpResponseCode.SERVER_ERROR, serverError.message);
	}
	let errorName = serverError.name ? serverError.name : 'Unspecified error';
	let error = _getStandardizedServerError(errorName);
	const messageDetail =
		`A server error occurred while processing the request: ${error}`;
	return new ErrorResponse(HttpResponseCode.SERVER_ERROR, messageDetail);
}

export function _getStandardizedServerError(errorName: string): string {
	if (errorName === 'SequelizeDatabaseError'){
		return 'Server could not parse the provided query';
	}
	return 'Unspecified server error';
}