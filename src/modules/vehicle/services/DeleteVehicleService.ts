import { inject, injectable } from "tsyringe";
import { IVehicleRepository } from "../repository/IVehicleRepository";
import { VehicleInterface } from "../models/VehicleInterface";
import NotFoundException from "src/exceptions/NotFoundException";

@injectable()
export default class DeleteVehicleService {
  constructor(
    @inject('VehicleRepository')
    private vehicleRepository: IVehicleRepository
  ) {}

  public async execute(id: number): Promise<VehicleInterface | null>{
    const vehicle = await this.vehicleRepository.findById(id)

    if (!vehicle) {
      throw new NotFoundException('Could not found vehicle')
    }
    
    return await this.vehicleRepository.remove(vehicle);
  }
}