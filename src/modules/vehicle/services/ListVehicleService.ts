import { inject, injectable } from "tsyringe";
import { IVehicleRepository } from "../repository/IVehicleRepository";
import { VehicleInterface } from "../models/VehicleInterface";

@injectable()
export default class ListVehicleService {
  constructor(
    @inject('VehicleRepository')
    private vehicleRepository: IVehicleRepository
  ) {}

  public async execute(): Promise<VehicleInterface[]> {
    const vehicles = await this.vehicleRepository.list()

    return vehicles;
  }
}