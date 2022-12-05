import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserByIdService } from './ReadServices/geteUserById.service';
import { CreateUserService } from './WriteServices/createUser.service';
import { DeleteUserService } from './WriteServices/deleteUser.service';
import { UpdateUserService } from './WriteServices/updateUser.service';

@Controller('user')
export class UsersController {
  constructor(
    @Inject(CreateUserService) private createUser: CreateUserService,
    @Inject(DeleteUserService) private deleteUser: DeleteUserService,
    @Inject(GetUserByIdService) private getUserById: GetUserByIdService,
    @Inject(UpdateUserService) private updateUserById: UpdateUserService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('Entrou no post');
    return this.createUser.execute(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getUserById.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserById.execute(updateUserDto, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUser.execute(id);
  }
}
