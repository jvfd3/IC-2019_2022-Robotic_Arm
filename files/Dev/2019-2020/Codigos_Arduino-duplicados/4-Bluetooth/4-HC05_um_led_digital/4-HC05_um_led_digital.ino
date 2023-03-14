#include <SoftwareSerial.h>
SoftwareSerial bluetooth(5, 6); // TX, RX do HC-05

const int led = 9;
char data;

void setup()
{
  pinMode(led, OUTPUT);
}

void loop(){
  if (Serial.available() > 0)
	{
    data = Serial.read(); // Le o valor recebido via Bluetooth

    switch (data)
		{
      case 'a': digitalWrite(led, HIGH); break; // Caso envie o valor a, liga led.
      case 'b': digitalWrite(led, LOW);  break; // Caso envie o valor b, desliga led.
      default : break;
    }
  }
  delay(40);
}
