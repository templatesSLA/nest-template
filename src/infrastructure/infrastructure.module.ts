import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { CustomerService } from '../application/use-cases/customer/customer.service';
import { ApplicationModule } from '../application/application.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../domain/repositories/user.repository';

@Module({
  imports: [ApplicationModule, TypeOrmModule.forFeature([UserRepository])],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class InfrastructureModule {}
