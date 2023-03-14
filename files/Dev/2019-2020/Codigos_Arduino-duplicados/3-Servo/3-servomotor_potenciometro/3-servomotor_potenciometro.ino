#include <Servo.h>
Servo servo1;
const int Pot = A0
int = ValPot;

void setup()
{
  servo1.attach(3);
}

void loop()
{
  ValPot = analogRead(Pot);
  ValPot = map(ValPot, 0, 1023, 0, 180);
  servo1.write(ValPot);
  delay(15);
}
