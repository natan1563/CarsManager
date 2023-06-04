import { container } from "tsyringe";
import CreateVehicleService from "../services/CreateVehicleService";
import { Request, Response } from "express";

export default class VehicleController {
  public async createVehicle(request: Request, response: Response): Promise<Response> {
    const { placa, chassi, renavam, modelo, marca, ano } = request.body
    const createVehicleService = container.resolve(CreateVehicleService);
    
    const createdVehicle = await createVehicleService.execute({
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano
    })

    return response.status(201).json(createdVehicle)
  }
}