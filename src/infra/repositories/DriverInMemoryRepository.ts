
import { DriverRepository } from '../../core/ports/DriverRepository';
import { Driver } from '../../core/domain/Driver';
import { randomUUID } from "crypto";

const sampleDrivers: Driver[] = [
  {
    id: randomUUID(),
    name: "João Silva",
    vehicleType: "car",
    location: { lat: -8.839, lng: 13.289 },
    estimatedPrice: 5.2,
    etaMinutes: 4,
  },
  {
    id: randomUUID(),
    name: "Maria Costa",
    vehicleType: "motorbike",
    location: { lat: -8.838, lng: 13.29 },
    estimatedPrice: 3.1,
    etaMinutes: 2,
  },
  {
    id: randomUUID(),
    name: "Pedro Gomes",
    vehicleType: "van",
    location: { lat: -8.84, lng: 13.288 },
    estimatedPrice: 8.5,
    etaMinutes: 6,
  },
];

export class DriverInMemoryRepository implements DriverRepository {
  async findAvailableNear(lat: number, lng: number, radiusMeters = 5000): Promise<Driver[]> {
    // For the MVP we ignore real geo calculations and return all drivers.
    return sampleDrivers;
  }
}
