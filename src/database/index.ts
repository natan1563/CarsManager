import 'dotenv/config';

import Vehicle from '../modules/vehicle/models/Vehicle'
import { DataSource } from 'typeorm'
import { Vehicle1685841078590 } from './migrations/1685841078590-Vehicle'

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env

export const dataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST || 'localhost',
  port: Number(DB_PORT) || 3306,
  username: DB_USER || 'root',
  password: DB_PASS || 'root',
  database: DB_NAME,
  entities: [Vehicle],
  migrations: {
    Vehicle1685841078590
  }
})