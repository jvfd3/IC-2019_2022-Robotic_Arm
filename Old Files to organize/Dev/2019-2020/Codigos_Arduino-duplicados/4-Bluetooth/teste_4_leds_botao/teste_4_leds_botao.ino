#include "../../0.0-TabLinha/TL.h"

int bt = 12321;
void setup()
{
  Serial.begin(9600);
}

int pin, led, bright;

void loop()
{
  if (Serial.available() > 0)
  {
    bt = Serial.parseInt();           Serial.print(bt); tab();

    bright = bt % 1000;
    led = (bt - bright) / 1000;

    
    Serial.print("Led: ");
    Serial.print(led);
    Serial.print("; Intensidade: ");
    Serial.print(bright);
    Serial.print(".");

    switch(led)
    {
      case 1: pin=5; break;
      case 2: pin=6; break;
      case 3: pin=10; break;
      case 4: pin=11; break;
    }
    analogWrite(pin, bright);

    linha();
  }

}
