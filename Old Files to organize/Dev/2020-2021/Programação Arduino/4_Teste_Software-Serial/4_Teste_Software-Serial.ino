/*
  Software serial multple serial test

 Receives from the hardware serial, sends to software serial.
 Receives from software serial, sends to hardware serial.

 The circuit:
 * RX is digital pin 10 (connect to TX of other device)
 * TX is digital pin 11 (connect to RX of other device)
 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void tab() {  Serial.print("\t");}
void linha() {  Serial.print("\n");}

void setup() {
  int baudrate=9600;
  Serial.begin(baudrate);
  mySerial.begin(baudrate);
}

void loop() { // run over and over
  
  if (mySerial.available()) {
    Serial.print(mySerial.read());
    linha();
  }
}
