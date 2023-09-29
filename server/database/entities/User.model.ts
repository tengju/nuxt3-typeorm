import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity
} from "typeorm";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column() 
  username!: string;
  @Column() 
  password!: string;

  comparePassword(passToCompare: string) {
    return this.password == passToCompare;
  }
}

