import VehicleController from '../modules/vehicle/controller/VehicleController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const routes = Router();
const vehicleController = new VehicleController();
const vehicleValidate = {
  placa: Joi.string().required().max(8),
  chassi: Joi.string().required().max(17),
  renavam: Joi.string().required().max(11),
  modelo: Joi.string().required().max(40),
  marca: Joi.string().required().max(40),
  ano: Joi.number().required().min(1886).max(Number(new Date().getFullYear()) + 1)
};

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
    [Segments.BODY]: vehicleValidate
  }),
  vehicleController.createVehicle
)

routes.put(
  '/:id', 
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    },
    [Segments.BODY]: vehicleValidate
  }),
  vehicleController.updateVehicle
)

routes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required()
    },
  }),
  vehicleController.removeVehicle
)

export default routes