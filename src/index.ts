import 'reflect-metadata'
import 'dotenv/config';
import { dataSource } from './database';
import { app } from './app';

dataSource.initialize().then(() => {
  const serverPort = process.env.APP_PORT || 8000
  app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}!`);
  });
})
.catch(() => {
  console.log(`Fail to connect to the database server`)
})