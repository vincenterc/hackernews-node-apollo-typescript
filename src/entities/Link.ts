import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
  AfterInsert
} from "typeorm";

import { User } from "./User";
import { Vote } from "./Vote";
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

  @OneToMany(type => Vote, vote => vote.link)
  votes: Vote[];

  @AfterInsert()
  newLink() {
    pubSub.publish(NEW_LINK, { newLink: this });
  }
}
