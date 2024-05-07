import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';

@Module({
  controllers: [CustomerController],
  exports: [CustomerController],
})
export class InfrastructureModule {}
