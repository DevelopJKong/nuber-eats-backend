import { CONFIG_OPTIONS } from './jwt.constants';
import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt.interface';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {}
  hello() {
    console.log('hello');
  }
}
