import { VehicleInterface } from "../models/VehicleInterface";

export interface IVehicleRepository {
  create(data: VehicleInterface): Promise<VehicleInterface>;
  list(): Promise<VehicleInterface[]>;
  findById(id: number): Promise<VehicleInterface | null>;
  save(vehicle: VehicleInterface): Promise<VehicleInterface>;
  findByPlate(plate: string): Promise<VehicleInterface | null>
  findByChassi(chassi: string): Promise<VehicleInterface | null>
  findByReindeer(reindeer: string): Promise<VehicleInterface | null>
}