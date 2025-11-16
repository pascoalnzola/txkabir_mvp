
import { Driver } from '../domain/Driver';

export interface DriverRepository {
  findAvailableNear(lat: number, lng: number, radiusMeters?: number): Promise<Driver[]>;
}
