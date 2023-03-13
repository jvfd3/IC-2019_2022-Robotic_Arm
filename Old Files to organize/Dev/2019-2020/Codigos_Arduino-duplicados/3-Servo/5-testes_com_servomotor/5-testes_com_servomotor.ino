#include <Servo.h>
Servo servo1;
int pinX1 = A1;
int X1;

void setup()
{
  servo1.attach(9);
}

void loop()
{
  X1 = analogRead(pinX1);
  X1 = map(X1, 0, 1023, 0, 180);
  servo1.write(X1);
  delay(15);
}
