#include <SoftwareSerial.h>

SoftwareSerial bluetooth(5, 6); // TX, RX do HC-05

void tab() {Serial.print("\t");}
void linha() {Serial.print("\n");}

void setup(){Serial.begin(9600);}


String valor, parte1, parte2;
char c;

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
      parte1 = valor.substring(0, 1);
      parte2 = valor.substring(1, 4);
      
      Serial.print(parte1); tab();
      Serial.print(parte2); tab();
      valor = "";
      linha();
    }
  }
}
