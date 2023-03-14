#include <Servo.h>

Servo myservo;  // cria o objeto servo
int pos = 0;    // a variavel que representa a posicao do servo

void setup() {
  myservo.attach(9);  
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // de 0 a 180 graus
    myservo.write(pos);              // "escrevendo" para o motor a posicao atual
    delay(15);                       // espereando 15ms
  }
  for (pos = 180; pos >= 0; pos -= 1) { // de 180 até 0 graus degrees
    myservo.write(pos);             
    delay(15);                       
  }
}
