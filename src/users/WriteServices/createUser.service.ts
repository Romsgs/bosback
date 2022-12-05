import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repository/user.repository';
import * as argon from 'argon2';

@Injectable()
export class CreateUserService {
  constructor(@Inject(UserRepository) private repository: UserRepository) {}
  async execute(body: CreateUserDto) {
    try {
      console.log(body);
      const hashed = await argon.hash(body.password);
      body.password = hashed;
      return this.repository.create(body);
    } catch (error) {
      console.log(error);
    }
  }
}
