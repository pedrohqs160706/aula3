/***************************************************************************
* Objetivo: Entrada de odis números e realizar a soma entre eles 
* Data: 09/08/2023
* Autor: Marcel
* Versão: 1.2.0
 ***************************************************************************/

//import da biblioteca readline
const { NOTFOUND } = require('dns');
var readline = require('readline');


//cria um objeto de entrada de dados para interagir com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite seu nome: ', function(nomeUsuario){
    var nome = nomeUsuario;

     //entrada de dados para receber o nome do curso
     entradaDados.question('Digite o nome do curo: ', function(cursoUsuario){

    //entrada de dados para receber o nome da disciplina
    entradaDados.question('Digite o nome da disciplina: ', function(disciplinaUsuario){    

        //entrada de dados para receber a nota
    entradaDados.question('Digite a nota do primeiro bimestre: ', function(nota1Usuario){

          //recebe a nota1
    let valor2 = nota1Usuario

         //entrada de dados para receber a nota
   letradaDados.question('Digite a nota do segundo bimestre: ', function(nota2Usuario){

          //recebe a nota2
    let valor2 = nota2Usuario

         //entrada de dados para receber a nota
    entradaDados.question('Digite a nota do terceiro bimestre: ', function(nota3Usuario){

          //recebe a nota3
    let valor2 = nota3Usuario

         //entrada de dados para receber a nota
    entradaDados.question('Digite a nota do quarto bimestre: ', function(nota4Usuario){

          //recebe a nota4
     let valor2 = nota4Usuario
    

          //validação de entrada das notas em branco
     if(nota1Usuario == '' || nota2Usuario == '' || nota3Usuario == ''  || nota4Usuario == ''){
        console.log('ERRO: todas as notas devem ser preenchidas!')
        entradaDados.close();
     }

     var resultado = (Number(nota1Usuario) + Number(nota2Usuario) + Number(nota3Usuario) + Number(nota4Usuario))/4;

     console.log('Sua média final é: ' + resultado);

                            })
                        })
                    })
                })
            })
        })
    })


    /**
     * var - permite criar uma variável no espaço global, que fica ativo em toda parte do projeto
     
    * let - permite criar uma variável no escopo local do códigio, que fica ativa apenas dentro daquele bloco de programação
    
    * const - permite  criar um espaço em memória para um conteúdo que não será alterado, podendo ser no escopo local ou global
     

    operadores de comperação:

    == verifica a igualdade
    <  verifica o menor valor
    >  verifica o maior valor
    <= verifica o valor menor ou igual
    >= verifica o valor maior ou igual
    != verifica a diferença
    === verifica a igualdade entre dois conteúdos e o seu tipo de dados

    operadores lógicos

    ou    or   ||

    */


