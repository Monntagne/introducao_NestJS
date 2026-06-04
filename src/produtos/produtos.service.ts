//importa o modulo decorator Injectable do node Injectable do nest.js


import { Injectable } from '@nestjs/common';


//Definindo o tipo de produto 
//Então todo produto deverá possuir um id e um nome
type Produto = {
    id: number;
    nome: string;
} 


//Informa que esta classe é um service 
//Service: Armazena as reguas de negócio da aplicação 
@Injectable()
export class ProdutosService {
 private produtos: Produto[] = [
    {id: 1, nome:"Notebook"},
    {id: 2, nome:"mouse"}

 ]

 listarProdutos(){
    return this.produtos
 }

 cadastrarProdutos(produto:Produto){
    this.produtos.push(produto);
    return{
        mensagem: "Produto cadastrado",
        poduto: produto
    }
 }
}
