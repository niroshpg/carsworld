import {Request, Response} from 'express';
import {CarService} from './car.service';

export class CarController {
    public static getCars(req: Request, res: Response) {
        const cars = CarService.getAll();
        res.send(cars);
    }

    public static getByMakeName(req: Request, res: Response) {
      const cars = CarService.getByMakeName(req.params.makeName)
      res.send(cars);
    }
}
