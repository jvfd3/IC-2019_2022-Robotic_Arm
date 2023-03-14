#include <SoftwareSerial.h>
 
SoftwareSerial bluetooth(10, 11); // RX, TX do Arduino
String command = "";
char b1;
   
void setup () {  
  Serial.begin(9600);
  bluetooth.begin(9600);
  //Printa uma frase no monitor serial para saber que está tudo pronto
  Serial.println("Digite algo para enviar por bluetooth:");
}  
   
void loop () {
  if (bluetooth.available()>0) {  // Lê os dados do bluetooth se existirem dados para leitura
    b1 = bluetooth.read();        //Variável para armazenar o dado atual
    command += b1;                //Variável para armazenar todos os dados
    if (b1 == '\n'){              //Se o dado atual for um pulador de linha (\n)
      Serial.print(command);      //Printa o comando
      command = "";               //Limpa o comando para futuras leituras
    }
  }
}
