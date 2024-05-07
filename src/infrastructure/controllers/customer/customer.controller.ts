import { Controller, Post, Body } from '@nestjs/common';

import { CreateUserDto } from '../../../domain/dto/user.dto';
import { CustomerService } from '../../../application/use-cases/customer/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.customerService.createUser(createUserDto);
  }
}
