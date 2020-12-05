import CarController from '@/controllers/CarController';
import { IAuthorizedGetRequest } from '@/types/Server';
import express, { Request, Response } from 'express';

const router = express.Router();
const controller = new CarController();

router.get('/', (req: Request, res: Response) => 
    controller.getAll(req, res)
);

router.get('/:id', (req: IAuthorizedGetRequest, res: Response) => 
    controller.getOne(req, res)
);

module.exports = router;
