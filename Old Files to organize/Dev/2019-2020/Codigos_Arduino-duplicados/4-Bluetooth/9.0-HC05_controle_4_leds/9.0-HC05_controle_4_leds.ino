#include "F:\Joao\UENF\2Periodo\pibic\IC_JV\Programas\TabLinha\TL.h"

int led1 = 11, led2 = 10, led3 = 9, led4 = 6;
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
    char c;
    c = Serial.read();

    if (c != 10)
    {
      valor += c;
    }
    else
    {
      int valorint = valor.toInt();
      int led = (valorint / 1000);
      int intensidade = (valorint - 1000 * led);
      valor = "";

      Serial.print("Led");
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
          analogWrite(led3, intensidade);
          break;
        case 4:
          analogWrite(led4, intensidade);
          break;
          
      }
      linha();
    }
  }
}
