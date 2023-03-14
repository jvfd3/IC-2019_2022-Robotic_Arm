#include <Servo.h>

Servo myservo1;
Servo myservo2;

void setup() {
  myservo1.attach(6);
  myservo2.attach(9);
}

void servoSweep (int start, int end, int delay) {
  for (pos = start; pos <= end; pos += pace)  {
    myservo1.write(pos);
    myservo2.write(180-pos);
    delay(delay);
  }
}

void loop() {
  int delay=15;
  int pace = 1;
  servoSweep (0 , 180, pace, delay);
  servoSweep (180 , 0, pace, delay);
}
