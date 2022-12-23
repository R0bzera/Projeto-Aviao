import inquirer from "inquirer";
import { funcoes } from "./funcoes.js";

export async function inquirerMenu() {
    console.log("====================");
    console.log("Selecione uma opção");
    console.log("====================\n");
  
     const perguntas = [
      {
        type: "list",
        name: "opcoes",
        choices: [
          {
            value: "1",
            name: "embarcar pessoa",
          },
  
          {
            value: "2",
            name: "desembarcar pessoa",
          },
  
          {
            value: "3",
            name: "voar",
          },

          {
            value: "4",
            name: "velocidade",
          },
  
          {
            value: "5",
            name: "pousar",
          },
  
          {
            value: "6",
            name: "sair",
          },
        ],
      },
    ];
     const opt = await inquirer.prompt(perguntas);
  
    console.log(opt);
    
  switch(opt.opcoes){
    case '1': 
      funcoes.embarque();
      break;
    case '2':
      funcoes.desembarque();
      break;
    case '3':
      funcoes.voar();
      break;
    case '4':
      funcoes.speed();
      break;
    case '5':
      funcoes.pousar();
    case '6':
    default: console.log ("vc saiu")
    
  }}
