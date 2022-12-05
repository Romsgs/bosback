import { Injectable, Inject } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(Dto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: Dto.name,
        email: Dto.email,
        password: Dto.password,
      },
    });
  }

  async getById(id: string) {
    return await this.prisma.user.findFirst({ where: { id } });
  }

  async update(data: Partial<User> | object, id: string): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: data,
    });
  }

  async delete(id: string): Promise<boolean> {
    const deletedUser = await this.prisma.user.delete({ where: { id } });
    return deletedUser ? true : false;
  }
}
