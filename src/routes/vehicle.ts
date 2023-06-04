import VehicleController from '@modules/vehicle/controller/VehicleController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const routes = Router();
const vehicleController = new VehicleController();

routes.get('/', vehicleController.listVehicles)

routes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    }
  }),
  vehicleController.findVehicle
)

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      placa: Joi.string().required(),
      chassi: Joi.string().required(),
      renavam: Joi.string().required(),
      modelo: Joi.string().required(),
      marca: Joi.string().required(),
      ano: Joi.number().required()
    }
  }),
  vehicleController.createVehicle
)

routes.put(
  '/:id', 
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    },
    [Segments.BODY]: {
      placa: Joi.string().required(),
      chassi: Joi.string().required(),
      renavam: Joi.string().required(),
      modelo: Joi.string().required(),
      marca: Joi.string().required(),
      ano: Joi.number().required()
    }
  }),
  vehicleController.updateVehicle
)

export default routes