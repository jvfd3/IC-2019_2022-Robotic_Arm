#include <SoftwareSerial.h>
SoftwareSerial mySerial(5, 6); // (TX, RX) - HC05 (TX SENDS, ONLY TX IS NEEDED TO SEND DATA FROM HC05
void setup() {  int baudrate=9600;  Serial.begin(baudrate);  mySerial.begin(baudrate);}
void tab() {  Serial.print("\t");}  void line() {  Serial.print("\n");}

String valor;
char c;
byte b;
int count;

void loop()
{
  if (mySerial.available())
  {
    while (mySerial.available())
    {
      
      b = mySerial.read();
        valor+="/";
        valor += b;     
      Serial.print(b); tab();
//      if (b != 10)    {}
//  //      c = mySerial.read();
//  //      if (c != 10)    {valor += c;Serial.print(c);tab();Serial.print(valor);line();}
//  //        Serial.print(valor);tab();
//    }
      Serial.print(valor);tab();
    line();
    valor = "";
  }
}
