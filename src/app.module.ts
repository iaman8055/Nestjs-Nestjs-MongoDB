import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/User.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://iamanchauhan:9311489070@cluster0.lf7j9yz.mongodb.net/nestjs'),UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
