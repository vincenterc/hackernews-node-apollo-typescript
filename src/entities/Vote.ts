import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { Link } from "./Link";
import { User } from "./User";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Link, link => link.votes)
  link: Link;

  @ManyToOne(type => User, user => user.votes)
  user: User;
}
