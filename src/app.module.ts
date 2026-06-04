import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { GService } from './controller/g/g.service';
import { ControllerService } from './controller/controller.service';

@Module({
  imports: [ProdutosModule],
  controllers: [AppController],
  providers: [AppService, GService, ControllerService],
})
export class AppModule {}
