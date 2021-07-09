import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import RouterController from "./routes/routes";

@Module({
  imports: [],
  controllers: [AppController, RouterController],
  providers: [AppService],
})
export class AppModule {}
