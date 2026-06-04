import { Module } from '@nestjs/common';
import { GService } from './g/g.service';
import { ControllerService } from './controller/controller.service';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';

@Module({
  providers: [GService, ControllerService, ProdutosService],
  controllers: [ProdutosController]
})
export class ProdutosModule {}
