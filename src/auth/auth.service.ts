import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const paylod = { name: user.username, sub: 123 };
    return {
      access_token: this.jwtService.sign(paylod),
    };
  }
}
