import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])], // Asegura que User y UserRepository están registrados
  exports: [TypeOrmModule.forFeature([User, UserRepository])], // Exporta para que puedan ser usados en otros módulos
})
export class DomainModule {}
