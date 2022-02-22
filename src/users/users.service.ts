import { Injectable } from '@nestjs/common';
import { User } from './types/userTypes';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'mamoon',
      name: 'Moon',
      password: 'moon',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
