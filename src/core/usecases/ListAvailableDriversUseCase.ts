
import { DriverRepository } from '../ports/DriverRepository';
import { Driver } from '../domain/Driver';

export class ListAvailableDriversUseCase {
  constructor(private driverRepo: DriverRepository) {}

  async execute(lat: number, lng: number): Promise<Driver[]> {
    // Domain-level simple validation
    if (typeof lat !== 'number' || typeof lng !== 'number') {
      throw new Error('Invalid coordinates');
    }
    const drivers = await this.driverRepo.findAvailableNear(lat, lng);
    // Business rule: sort by ETA ascending
    return drivers.sort((a, b) => a.etaMinutes - b.etaMinutes);
  }
}
