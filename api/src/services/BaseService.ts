import { IBaseService, LogType } from '@/types/Server';

export default class BaseService implements IBaseService {

    constructor() { }

    log(type: LogType, message: string) {
        console.log(`${type}: ${message}`);
    }

}