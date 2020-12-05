import CarService from '@/services/CarService';
import { ICarService } from '@/types/Car';
import { IAuthorizedGetRequest } from '@/types/Server';
import { Request, Response } from 'express';
import BaseController from './BaseController';

export default class CarController extends BaseController {

    private readonly _carService: ICarService;

    constructor(carService: ICarService = new CarService()) {
        super();
        this._carService = carService;
    }
    
    async getAll(req: Request, res: Response) {
        try {
            const serviceResult = await this._carService.getAll();
            res.json(serviceResult);
        } catch(e) {
            this.sendError(e, res);
        }
    }

    async getOne(req: IAuthorizedGetRequest, res: Response) {
        try {
            const id = req.params.id;
            const car = await this._carService.getOne(id);
            res.json(car);
        } catch(e) {
            this.sendError(e, res);
        }
    }

}