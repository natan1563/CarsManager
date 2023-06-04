import './container'
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import routes from './routes/vehicle';
import cors from 'cors'
import { errors } from 'celebrate'
import Exception from './exceptions/Exception';

export const app = express();

app.use(cors())
app.use(express.json());

app.use('/vehicle', routes)
app.use(errors())

app.use((error: Exception, _: Request, res: Response, next: NextFunction) => {
  return res
    .status(error.statusCode)
    .json({
      status: 'error',
      message: error.message
    });
});