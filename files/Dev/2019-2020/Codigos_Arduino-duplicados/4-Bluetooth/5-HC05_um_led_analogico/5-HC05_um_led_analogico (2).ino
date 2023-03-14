#include <SoftwareSerial.h>
SoftwareSerial bluetooth(5, 6); // TX, RX do HC-05

const int  led = 3;
int    		 dimmer;
String 		 stringGeral;

void setup()
{
  pinMode(led, OUTPUT);
}

void loop()
{
  if (Serial.available())
	{
    stringGeral = String("");
    
    while (Serial.available())    
		{
      stringGeral = stringGeral + char(Serial.read());
      delay(1);
    }
    dimmer = stringGeral.toInt();
    if ( dimmer >= 0 && dimmer <= 255) {analogWrite(led, dimmer);}
  }
}
