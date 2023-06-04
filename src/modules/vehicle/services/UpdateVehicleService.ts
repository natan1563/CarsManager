import { inject, injectable } from "tsyringe";
import { IVehicleRepository } from "../repository/IVehicleRepository";
import { VehicleInterface } from "../models/VehicleInterface";
import NotFoundException from "@src/exceptions/NotFoundException";
import BadRequestException from "@src/exceptions/BadRequestException";

@injectable()
export default class UpdateVehicleService {
  constructor(
    @inject('VehicleRepository')
    private vehicleRepository: IVehicleRepository
  ) {}

  public async execute(
    id: number,
    {
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano
    }: VehicleInterface
  ): Promise<VehicleInterface | null>{
    const vehicle = await this.vehicleRepository.findById(id)

    if (!vehicle) {
      throw new NotFoundException('Could not found the vehicle')
    }

    const vehicleByPlate = await this.vehicleRepository.findByPlate(placa)
    if (vehicleByPlate && vehicle.id !== vehicleByPlate.id) {
      throw new BadRequestException('Vehicle plate already registered');
    }

    const vehicleByChassi = await this.vehicleRepository.findByChassi(chassi)
    if (vehicleByChassi && vehicle.id !== vehicleByChassi.id) {
      throw new BadRequestException('Vehicle chassi already registered');
    }

    const vehicleByReindeer = await this.vehicleRepository.findByReindeer(renavam)
    if (vehicleByReindeer && vehicle.id !== vehicleByReindeer.id) {
      throw new BadRequestException('Vehicle reindeer already registered');
    }

    vehicle.placa = placa;
    vehicle.chassi = chassi;
    vehicle.renavam = renavam;
    vehicle.modelo = modelo;
    vehicle.marca = marca;
    vehicle.ano = ano;

    return await this.vehicleRepository.save(vehicle);
  }
}