
export type VehicleType = 'car' | 'motorbike' | 'van' | 'bicycle';

export interface Driver {
  id: string;
  name: string;
  vehicleType: VehicleType;
  location: { lat: number; lng: number };
  estimatedPrice: number;
  etaMinutes: number;
}
