import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }
  create({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    const user = this.userRepo.create({ email, password, firstName, lastName });

    return this.userRepo.save(user);
  }
  find(email: string) {
    return this.userRepo.find({ where: { email: email } });
  }

  async update(id: number, attr: Partial<User>) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user?.id) {
      throw new Error(`no user found with id${id}`);
    }
    Object.assign(user, attr);
    return this.userRepo.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new Error(`no user found with id ${id}`);
    }
    return this.userRepo.remove(user);
  }
}
