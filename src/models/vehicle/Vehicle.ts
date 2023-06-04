import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity('vehicle')
export default class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placa: string;

  @Column()
  chassi: string;

  @Column()
  renavam: string;

  @Column()
  modelo: string;

  @Column()
  marca: string;

  @Column()
  ano: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}