import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity('vehicles')
export default class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  placa: string;

  @Index({ unique: true })
  @Column()
  chassi: string;

  @Index({ unique: true })
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