// twelve servo objects can be created on most boards
//pwm:3,5,6,9,10,11
#include <Servo.h>
Servo s1,s2,s3,s4,s5,s6;
//Servo myservo;
int pos = 0;

void setup() {
//  myservo.attach(pin_number);
  s1.attach(1);
  s2.attach(2);
  s3.attach(3);
  s4.attach(4);
  s5.attach(5);
  s6.attach(6);
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    s1.write(pos);
    s2.write(pos);
    s3.write(pos);
    s4.write(pos);
//    s5.write(pos);
//    s6.write(pos);
    delay(200);
  }
    delay(1000);
  
  for (pos = 180; pos >= 0; pos -= 1) {
    s1.write(pos);
    s2.write(pos);
    s3.write(pos);
    s4.write(pos);
//    s5.write(pos);
//    s6.write(pos);
    delay(200);
  }
    delay(2000);
}
