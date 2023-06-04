import { inject, injectable } from "tsyringe";
import { IVehicleRepository } from "../repository/IVehicleRepository";
import { VehicleInterface } from "../models/VehicleInterface";
import BadRequestException from "@src/exceptions/BadRequestException";

@injectable()
export default class CreateVehicleService {
  constructor(
    @inject('VehicleRepository')
    private vehicleRepository: IVehicleRepository
  ) {}

  public async execute(vehicle: VehicleInterface): Promise<VehicleInterface> {
    switch (true) {
      case await this.vehiclePlateExists(vehicle.placa):
        throw new BadRequestException('Vehicle plate already registered')

      case await this.vehicleChassiExists(vehicle.chassi):
        throw new BadRequestException('Vehicle chassi already registered')

      case await this.vehicleReindeerExists(vehicle.renavam):
        throw new BadRequestException('Vehicle reindeer already registered')
    }

    const currentVehicle = await this.vehicleRepository.create(vehicle)

    return currentVehicle;
  }

  private async vehiclePlateExists(plate: string): Promise<boolean> {
    return !!(await this.vehicleRepository.findByPlate(plate))
  }

  private async vehicleChassiExists(chassi: string): Promise<boolean> {
    return !!(await this.vehicleRepository.findByChassi(chassi))
  } 

  private async vehicleReindeerExists(renavam: string): Promise<boolean> {
    return !!(await this.vehicleRepository.findByReindeer(renavam))
  } 
}