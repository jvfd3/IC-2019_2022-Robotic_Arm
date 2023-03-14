#include "F:\Joao\UENF\2Periodo\pibic\IC_JV\Programas\TabLinha\TL.h"
#include <SoftwareSerial.h>

SoftwareSerial bluetooth(3, 5); // RX, TX do Arduino

int led1 = 11, led2 = 10, led3 = 9, led4 = 6, valorint, led, intensidade;
String valor;
char c;

void setup()
{
  Serial.begin(9600);
  bluetooth.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
}

void loop()
{
  if (bluetooth.available() > 0)
  {
    c = bluetooth.read();
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

      Serial.print("Led: ");            Serial.print(led);              tab();
      Serial.print("intensidade: ");    Serial.print(intensidade);

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
