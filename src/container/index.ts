import VehicleRepository from '@modules/vehicle/repository/VehicleRepository';
import { IVehicleRepository } from '@modules/vehicle/repository/IVehicleRepository';
import { container } from 'tsyringe';

container.registerSingleton<IVehicleRepository>(
  'VehicleRepository',
  VehicleRepository
)