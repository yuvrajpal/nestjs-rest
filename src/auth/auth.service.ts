import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  signin() {
    return "hello";
  }

  signup() {
    return {msg:  "I have singned up"};
  }
}
