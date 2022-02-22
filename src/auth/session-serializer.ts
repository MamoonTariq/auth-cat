import { Injectable } from '@nestjs/common';
import { PassportSerializer, PassportStrategy } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error, user: string) => void) {
    done(null, payload);
  }
}
