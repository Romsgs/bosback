import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PocoesModule } from './pocoes/pocoes.module';
import { PotionsModule } from './potions/potions.module';
import { SpellsModule } from './spells/spells.module';
import { UsersModule } from './users/users.module';
import { RitualsModule } from './rituals/rituals.module';
import { JournalModule } from './journal/journal.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    // AuthModule,
    // PocoesModule,
    // PotionsModule,
    // SpellsModule,
    UsersModule,
    // RitualsModule,
    // JournalModule,
    PrismaModule.forRoot({ isGlobal: true }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
