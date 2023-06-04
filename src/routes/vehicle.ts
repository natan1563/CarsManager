import VehicleController from '@modules/vehicle/controller/VehicleController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const routes = Router();
const vehicleController = new VehicleController();

routes.get('/', (req, res) => {
  res.json({
    ping: "pong"
  })
})
routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      placa: Joi.string().required(),
      chassi: Joi.string().required(),
      renavam: Joi.string().required(),
      modelo: Joi.string().required(),
      marca: Joi.string().required(),
      ano: Joi.required()
    }
  }),
  vehicleController.createVehicle
)

export default routes