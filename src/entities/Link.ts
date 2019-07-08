import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  AfterInsert
} from "typeorm";

import { User } from "./User";
import { pubSub, NEW_LINK } from "../resolvers/Subscription";

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

  @ManyToOne(type => User, user => user.links)
  postedBy: User;

  @AfterInsert()
  newLink() {
    pubSub.publish(NEW_LINK, { newLink: this });
  }
}
