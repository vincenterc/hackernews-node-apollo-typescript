import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column
} from "typeorm";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  description: string;

  @Column()
  url: string;
}
