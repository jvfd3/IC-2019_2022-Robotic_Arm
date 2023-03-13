#include "G:\Joao\UENF\2Periodo\pibic\IC_JV\Programas\TabLinha\TL.h"
#include <SoftwareSerial.h>
#include <Servo.h>

Servo myservo1;
Servo myservo2;
SoftwareSerial bluetooth(5, 3); // TX, RX do HC-05

int led1 = 9, led2 = 6, servo1=10, servo2=11, valorint, led, intensidade;
String valor;
char c;

void setup()
{
  Serial.begin(9600);
  bluetooth.begin(9600);
  
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  myservo1.attach(servo1);
  myservo2.attach(servo2);

  myservo1.write(90);
  myservo2.write(90);
  analogWrite(led1, 180);
  analogWrite(led2, 180);
  
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
          int a=map(intensidade,0,180,180,0);
          myservo1.write(a);
          delay(15);
          break;
        case 4:
          int b=map(intensidade,0,180,180,0);
          myservo2.write(b);
          delay(15);
          break;
      }
      linha();
    }
  }
}
