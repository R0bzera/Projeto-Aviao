import inquirer from "inquirer";
import { inquirerMenu } from "./menu.js";
import { aviao } from "./aviao.js";


export const funcoes = {

    embarque: async function (){
        if (aviao.voando) {
            mensagemDeErro("Não foi possivel embarcar pois, o avião está voando");
            return;
          }
          if (aviao.passageiros.length === aviao.limite) {
            mensagemDeErro("Não foi possivel embarcar pois, o aviao ja está cheio");
            return;
          }
          const pessoa = await inquirer.prompt([
            {
              type: "string",
              name: "nome do passageiro",
            },
            {
              type: "string",
              name: "Cpf do passageiro",
            },
          ]);
      
          let presente = false;
      
          aviao.passageiros.forEach((passageiro) => {
            
            const cpf = passageiro["Cpf do passageiro"];
            if (cpf === pessoa["Cpf do passageiro"]) {
              presente = true;
              return;
            }
          });
          if (presente) {
            mensagemDeErro(
              "Não foi possivel embarcar pois, o cpf ja está cadastrado"
            );
            return;
          }
          //  if (aviao.passageiros.map(passageiro => passageiro['Cpf do passageiro']).includes(pessoa['Cpf do passageiro'])){
          //   console.log('Não foi possivel embarcar pois, o cpf ja está cadastrado')
          //   inquirerMenu()
          //   return;
          //  }
      
          console.log(
            aviao.passageiros
              .map((passageiro) => passageiro["Cpf do passageiro"])
              .includes(pessoa["Cpf do passageiro"])
          );
      
          aviao.passageiros.push(pessoa);
      
          console.log(`numero de passageiros embarcados ${aviao.passageiros.length}`);
          inquirerMenu();
    },

    desembarque: async function (){
        if (aviao.voando) {
            mensagemDeErro("nao foi possivel desembarcar pois o aviao está voando");
            return;
          }
          aviao.passageiros.forEach((pessoa) => {
            console.log(
              `o passageiro ${pessoa["nome do passageiro"]} foi desembarcado`
            );
            //aviao.passageiros.pop()
          });
      
          console.log(
            `todos os ${aviao.passageiros.length} passageiros foram desembarcados`
          );
          aviao.passageiros = [];  
    },

    voar: function (){
        if (!aviao.voando) {
            console.log("o aviao esta voando");
            aviao.voando = true;
            inquirerMenu();
          }  
    },

    speed: function (){
       if(!aviao.voando){
        console.log ("o aviao está estacionado");
        inquirerMenu();

       }else{
        
        while (aviao.velocidade < 1000){
          aviao.velocidade += 100;
          console.log(aviao.velocidade)
        } 
       }
       if(aviao.velocidade >= 1000){
        console.log("vc atingiu a velocidade maxima")
        inquirerMenu();
       }
    },
    

    pousar: function (){
        if (!aviao.voando) {
            inquirerMenu();
            return;
          } else {
            aviao.voando = false;
            console.log("o avião está pousando");
            inquirerMenu();
          } 
    },

    
};

function mensagemDeErro(mensagem) {
  console.log(mensagem);
  inquirerMenu();
}