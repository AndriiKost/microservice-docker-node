import HttpService from '@/services/HttpService';
import { ICar, ICarService } from '@/types/Car';
import IHttpService from '@/types/Server';

const SERVICE_URL = process.env.SERVICE_URL;

export default class CarService implements ICarService {

    private readonly _httpService: IHttpService;

    constructor(
        httpService: IHttpService = new HttpService()
    ) {
        this._httpService = httpService;
    }

    async getAll(): Promise<ICar[]> {
        return await this._httpService.get(SERVICE_URL + '/car');
    }

    async getOne(id: string): Promise<ICar> {
        return await this._httpService.get(SERVICE_URL + '/car/'+id);
    }

}