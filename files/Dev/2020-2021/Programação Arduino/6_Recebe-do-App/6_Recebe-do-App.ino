#include <SoftwareSerial.h>
SoftwareSerial mySerial(5, 6); // (TX, RX) - HC05 (TX SENDS, ONLY TX IS NEEDED TO SEND DATA FROM HC05
void setup() {  int baudrate=9600;  Serial.begin(baudrate);  mySerial.begin(baudrate);}
void tab() {  Serial.print("\t");}  void line() {  Serial.print("\n");}

String valor="";
char c;
byte b;
int lum, led, l1=0, l2=0, l3=0, l4=0;

void loop()
{
  if (false){
    Serial.print("waiting...\n");
//    delay(1000);
    if(mySerial.available()){
        Serial.print("received!\n"); 
        delay(10000);
    }
  }
  else{
    if (mySerial.available() > 0)
    {
      
      b = mySerial.read();
      if (b != 10)    {valor += b;Serial.print(b);tab();/*Serial.print(valor);*/line();}
//      c = mySerial.read();
//      if (c != 10)    {valor += c;Serial.print(c);tab();/*Serial.print(valor);line();*/}
      else
      {
        Serial.print(valor);tab();
        led=valor.substring(0, 1).toInt();
        lum=valor.substring(1, 4).toInt();
        
        switch(led){
          case 1: l1=lum; break;
          case 2: l2=lum; break;
          case 3: l3=lum; break;
          case 4: l4=lum; break;
        }
        
        Serial.print("led1");
        tab();
        Serial.print(l1);     tab();
        Serial.print("led2"); tab();
        Serial.print(l2);     tab();
        Serial.print("led3"); tab();
        Serial.print(l3);     tab();
        Serial.print("led4"); tab();
        Serial.print(l4);     tab();
  
        line();
        valor = "";
      }
    }
  }
}
