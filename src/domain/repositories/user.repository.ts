import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';

export class UserRepository extends Repository<User> {
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany();
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    console.log({ userData });
    const user = this.create(userData); // crea una instancia de la entidad User
    return this.save(user); // guarda la instancia en la base de datos
  }
}
