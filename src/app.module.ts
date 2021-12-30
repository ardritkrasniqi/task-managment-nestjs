/*
 * @Author: Ardrit Krasniqi 
 * @Date: 2021-10-16 23:44:21 
 * @Last Modified by: Ardrit Krasniqi ©
 * @Last Modified time: 2021-12-30 15:31:45
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TasksModule,
    //TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UsersModule,
    DatabaseModule
  ]
})
export class AppModule {}
