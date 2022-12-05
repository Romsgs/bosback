import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UpdateUserService {
  constructor(@Inject(UserRepository) private repository: UserRepository) {}
  execute(body: UpdateUserDto, id: string) {
    try {
      return this.repository.update(body, id);
    } catch (error) {
      console.log(error);
    }
  }
}
