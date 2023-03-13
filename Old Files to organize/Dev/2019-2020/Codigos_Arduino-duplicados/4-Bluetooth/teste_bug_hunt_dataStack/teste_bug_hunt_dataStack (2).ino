#include "G:\Joao\UENF\2Periodo\pibic\IC_JV\Programas\TabLinha\TL.h"

int int1 = 10, int2 = 100;

void setup()
{
  Serial.begin(9600);
  Serial.setTimeout(1000);
}

String command;
void loop()
{
//    if (Serial.available() > 0)
    while (Serial.available() > 0)
    {
      int1 = Serial.parseInt();
      Serial.print(int1);          
      linha();
    }


}
