import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany
} from "typeorm";

import { Link } from "./Link";
import { Vote } from "./Vote";

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(type => Link, link => link.postedBy)
  links: Link[];

  @OneToMany(type => Vote, vote => vote.user)
  votes: Vote[];
}
