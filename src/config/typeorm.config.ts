import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'shema',
  password: 'kn88chr4',
  database: 'memories',
  entities: [__dirname, './../**/*.entity.ts'],
  synchronize: true,
};
