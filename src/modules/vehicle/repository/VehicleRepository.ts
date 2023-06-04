import Vehicle from "../models/Vehicle";
import { IVehicleRepository } from "./IVehicleRepository";
import { Repository } from "typeorm";
import { dataSource } from "src/database";
import { VehicleInterface } from "../models/VehicleInterface";

export default class VehicleRepository implements IVehicleRepository {
  private ormRepository: Repository<Vehicle>

  constructor() {
    this.ormRepository = dataSource.getRepository(Vehicle);
  }

  public async create(vehicle: VehicleInterface): Promise<VehicleInterface> {
    const customer = this.ormRepository.create(vehicle);

    return await this.ormRepository.save(customer);
  }
}