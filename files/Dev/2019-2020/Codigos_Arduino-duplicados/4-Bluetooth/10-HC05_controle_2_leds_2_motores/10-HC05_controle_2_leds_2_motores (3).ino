#include "F:\Joao\UENF\2Periodo\pibic\IC_JV\Programas\TabLinha\TL.h"
#include <SoftwareSerial.h>
SoftwareSerial bluetooth(3, 5); // TX, RX do HC-05

int led1 = 11, led2 = 10, motor1 = 9, motor2 = 6, valorint, led, intensidade;
char c;
      
/*

      int led = (valor.substring(0, 1)).toInt();
      int intensidade = (valor.substring(1, 4)).toInt();
      valor = "";

*/
void setup()
{
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
}

String valor;
void loop()
{
  if (Serial.available() > 0)
  {
    c = Serial.read();

    if (c != 10)
    {
      valor += c;
    }
    else
    {
      valorint = valor.toInt();
      led = (valorint / 1000);
      intensidade = (valorint - 1000 * led);
      valor = "";
      
/*

      int led = (valor.substring(0, 1)).toInt();
      int intensidade = (valor.substring(1, 4)).toInt();
      valor = "";

*/

      Serial.print("Led: ");
      Serial.print(led);
      Serial.print(", intensidade: ");
      Serial.print(intensidade);

      switch (led)
      {
        case 1:
          analogWrite(led1, intensidade);
          break;
        case 2:
          analogWrite(led2, intensidade);
          break;
        case 3:
          analogWrite(motor1, intensidade);
          break;
        case 4:
          analogWrite(motor2, intensidade);
          break;
          
      }
      linha();
    }
  }
}
