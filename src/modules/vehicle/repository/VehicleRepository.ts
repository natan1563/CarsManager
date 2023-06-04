import Vehicle from "../models/Vehicle";
import { IVehicleRepository } from "./IVehicleRepository";
import { Repository } from "typeorm";
import { dataSource } from "@src/database";
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

  public async list(): Promise<Vehicle[]> {
    return await this.ormRepository.find();
  }

  public async findById(id: number): Promise<Vehicle | null> {
    return await this.ormRepository.findOne({
      where: { id }
    });
  }

  public async save(vehicle: VehicleInterface): Promise<Vehicle> {
    return await this.ormRepository.save(vehicle);
  }

  public async findByPlate(plate: string): Promise<Vehicle | null> {
    return await this.ormRepository.findOne({
      where: { placa: plate }
    })
  }

  public async findByChassi(chassi: string): Promise<Vehicle | null> {
    return await this.ormRepository.findOne({
      where: { chassi }
    })
  }
  
  public async findByReindeer(reindeer: string): Promise<Vehicle | null> {
    return await this.ormRepository.findOne({
      where: { renavam: reindeer }
    })
  }

  public async remove(vehicle: VehicleInterface): Promise<Vehicle> {
    return await this.ormRepository.remove(vehicle as Vehicle)
  }
}