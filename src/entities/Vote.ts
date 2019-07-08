import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  AfterInsert
} from "typeorm";

import { Link } from "./Link";
import { User } from "./User";
import { pubSub, NEW_VOTE } from "../resolvers/Subscription";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Link, link => link.votes)
  link: Link;

  @ManyToOne(type => User, user => user.votes)
  user: User;

  @AfterInsert()
  newLink() {
    pubSub.publish(NEW_VOTE, { newVote: this });
  }
}
