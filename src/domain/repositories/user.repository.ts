import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export class UserRepository extends Repository<User> {
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany();
  }

  createUser(user: User) {
    return this.save(user);
  }
}
