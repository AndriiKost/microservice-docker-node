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
        const result = await this._httpService.get(SERVICE_URL + '/car');
        return await result.json() as ICar[];
    }

    async getOne(id: string): Promise<ICar> {
        const result = await this._httpService.get(SERVICE_URL + '/car/'+id);
        return await result.json() as ICar;
    }

}