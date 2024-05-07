import { Module } from '@nestjs/common';
import { CustomerService } from './use-cases/customer/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../domain/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class ApplicationModule {}
