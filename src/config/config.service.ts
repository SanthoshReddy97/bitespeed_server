import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class ConfigService {
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    } as TypeOrmModuleOptions;
  }
}

const configService = new ConfigService();

export { configService };
