import { Module } from '@nestjs/common';
import { CustomerService } from './use-cases/customer/customer.service';

@Module({
  providers: [CustomerService],
})
export class ApplicationModule {}
