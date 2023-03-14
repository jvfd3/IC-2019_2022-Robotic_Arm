#include "F:\Joao\UENF\2Periodo\pibic\IC_JV\Programas\TabLinha\TL.h"
#define led 6 //LED conectado no pino 3

#include <SoftwareSerial.h>
 
SoftwareSerial bluetooth(3, 5); // RX, TX do Arduino
String command = "";
char b1;
   
void setup()  
{  
  pinMode(led, OUTPUT);
 
  Serial.begin(9600);  
  bluetooth.begin(9600);  
}  
   
void loop()  
{  
  // Lê os dados do bluetooth
  if (bluetooth.available()>0) { // Se existem dados para leitura
   
    b1 = bluetooth.read(); //Variável para armazenar o dado atual
    command += b1; //Variável para armazenar todos os dados
   
    if (b1 == '\n'){ //Se o dado atual for um pulador de linha (\n)
      Serial.print(command); //Printa o comando
     
      command.trim(); //Remove o \n para comparar o texto

      if (command == "LIGAR"){
        digitalWrite(led, HIGH);
      }else if(command == "DESLIGAR"){
        digitalWrite(led, LOW);
      }
     
      command = ""; //Limpa o comando para futuras leituras
    }
  }
}
