#include "../../0.0-TabLinha/TL.h"
void AnaliseComando(String com)
{
  String parte1;
  int parte2;

  parte1 = com.substring(0, com.indexOf(" "));
  parte2 = (com.substring(com.indexOf(" ") + 1)).toInt();

  if (parte1.equalsIgnoreCase("a"))
  {
    int pin = 10;
    digitalWrite(pin, parte2);
    Serial.print("Acendendo pino 10");    tab();
    Serial.print(parte2);

  }
  else if (parte1.equalsIgnoreCase("d"))
  {
    int pin = 11;
    digitalWrite(pin, parte2);
    Serial.print("Acendendo pino 11");    tab();
    Serial.print(parte2);
  }
  else
  {
    //    Serial.print("Não encontrado");
  };
}

void setup()
{
  Serial.begin(9600);

}



void loop()
{
  String string1 = "";
  if (Serial.available() > 0)
  {
    while (Serial.available() > 0)
    {
      string1 += char(Serial.read());
      delay(250);
    }
    Serial.print(string1);
    linha(); linha();

    AnaliseComando(string1);

    linha(); linha();
    string1 = "";
  }


}
