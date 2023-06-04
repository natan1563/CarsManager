import 'dotenv/config';
import express from 'express';
import { dataSource } from './database';

const app = express(); 

dataSource.initialize().then(() => {
  const serverPort = process.env.APP_PORT || 8000
  app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}!`);
  });
})
.catch(() => {
  console.log(`Fail to connect to the database server`)
})