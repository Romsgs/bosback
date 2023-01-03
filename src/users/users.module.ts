import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { GetUserByIdService } from './ReadServices/geteUserById.service';
import { UpdateUserService } from './WriteServices/updateUser.service';
import { CreateUserService } from './WriteServices/createUser.service';
import { DeleteUserService } from './WriteServices/deleteUser.service';
import { UserRepository } from './repository/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    GetUserByIdService,
    UpdateUserService,
    CreateUserService,
    DeleteUserService,
    UserRepository,
    PrismaService,
    UsersService,
  ],
})
export class UsersModule {}
