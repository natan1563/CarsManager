import { inject, injectable } from "tsyringe";
import { IVehicleRepository } from "../repository/IVehicleRepository";
import { VehicleInterface } from "../models/VehicleInterface";

@injectable()
export default class CreateVehicleService {
  constructor(
    @inject('VehicleRepository')
    private vehicleRepository: IVehicleRepository
  ) {}

  public async execute(vehicle: VehicleInterface): Promise<VehicleInterface> {
    const customer = await this.vehicleRepository.create(vehicle)

    return customer;
  }
}