



import { Controller, Get, Body, Post} from '@nestjs/common';
import { ProdutosService } from './produtos.service';

type Produto = {
    id: number;
    nome:string
}




@Controller('produtos')
export class ProdutosController {

    constructor(private readonly produtoService: ProdutosService) {}

    @Get()
    listar(){
        return this.produtoService.listarProdutos()
    }


@Post()
cadastrar(@Body()produto:Produto){
    return this.produtoService.cadastrarProdutos(produto)
}




}
