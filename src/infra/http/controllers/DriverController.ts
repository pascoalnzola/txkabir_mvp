
import { Request, Response } from 'express';
import { ListAvailableDriversUseCase } from '../../../core/usecases/ListAvailableDriversUseCase';

export class DriverController {
  constructor(private listUseCase: ListAvailableDriversUseCase) {}

  async list(req: Request, res: Response) {
    const lat = req.query.lat ? parseFloat(String(req.query.lat)) : undefined;
    const lng = req.query.lng ? parseFloat(String(req.query.lng)) : undefined;
    if (lat === undefined || lng === undefined) {
      return res.status(400).json({ message: 'lat and lng query params required' });
    }
    try {
      const drivers = await this.listUseCase.execute(lat, lng);
      return res.json(drivers);
    } catch (err: any) {
      return res.status(500).json({ message: err.message || 'Internal error' });
    }
  }
}
