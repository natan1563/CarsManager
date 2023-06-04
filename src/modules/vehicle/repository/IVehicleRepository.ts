import { VehicleInterface } from "@models/VehicleInterface";

export interface IVehicleRepository {
  create(data: VehicleInterface): Promise<VehicleInterface>;
}