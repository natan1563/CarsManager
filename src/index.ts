import 'reflect-metadata'
import 'dotenv/config';
import './container'

import express from 'express';
import routes from './routes/vehicle';
import cors from 'cors'
import { errors } from 'celebrate'
import { dataSource } from './database';

const app = express();

app.use(cors())
app.use(express.json());

app.use('/vehicle', routes)
app.use(errors())

dataSource.initialize().then(() => {
  const serverPort = process.env.APP_PORT || 8000
  app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}!`);
  });
})
.catch(() => {
  console.log(`Fail to connect to the database server`)
})