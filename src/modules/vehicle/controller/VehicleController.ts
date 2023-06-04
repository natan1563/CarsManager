import { container } from "tsyringe";
import { Request, Response } from "express";
import CreateVehicleService from "../services/CreateVehicleService";
import ListVehicleService from "../services/ListVehicleService";
import FindVehicleService from "../services/FindVehicleService";
import UpdateVehicleService from "../services/UpdateVehicleService";

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

  public async listVehicles(_: Request, response: Response): Promise<Response> {
    const listVehicleService = container.resolve(ListVehicleService);
    
    return response.json(await listVehicleService.execute());
  }

  public async findVehicle(request: Request, response: Response): Promise<Response> {
    const findVehicleService = container.resolve(FindVehicleService);
    const vehicle = await findVehicleService.execute(Number(request.params.id))

    return response.json(vehicle)
  }

  public async updateVehicle(request: Request, response: Response): Promise<Response> {
    const updateVehicleService = container.resolve(UpdateVehicleService)
    const updatedVehicle = await updateVehicleService.execute(Number(request.params.id), request.body);

    return response.json(updatedVehicle);
  }
}