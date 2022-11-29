import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;

  @AfterInsert()
  loginInser() {
    console.log(`adding ..... user with id:${this.id}`);
  }
  @AfterUpdate()
  logUpdates() {
    console.log(`updating ..... user with id:${this.id}`);
  }

  @AfterRemove()
  logDelete() {
    console.log(`Removing ..... user with id:${this.id}`);
  }
}
