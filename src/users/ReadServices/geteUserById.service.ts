import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class GetUserByIdService {
  constructor(@Inject(UserRepository) private repository: UserRepository) {}
  execute(id: string) {
    try {
      return this.repository.getById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
