 
  

#include <SoftwareSerial.h>
SoftwareSerial mySerial(D3, D2); // (TX, RX) - HC-05
void setup() {  int baudrate=9600;  Serial.begin(baudrate);  mySerial.begin(baudrate); 
  pinMode(LED_BUILTIN, OUTPUT); digitalWrite(LED_BUILTIN, HIGH );}
void tab() {  Serial.print("\t");}  void linha() {  Serial.print("\n");}

String valor;
char c;
int lum, led, l1=0, l2=0, l3=0, l4=0;
byte b;

void loop()
{
  if (false){
    Serial.print("waiting...\n");
    delay(1000);
    if(mySerial.available()){
      Serial.print("received!\n");
      while (true){
        c = mySerial.read();
        if (c != 10)    {valor += c;}
        else{
          Serial.print(valor);tab(); break;
        }
      }
    }
  }
  else{
//    Serial.print(".\n");
    if (mySerial.available() > 0)
    {
      Serial.print(byte(mySerial.read()));
      
      /*
//      c = mySerial.read();
      b = mySerial.read();
  
//      if (c != 10)    {valor += c;Serial.print(c);tab();}
      if (b != 10)    {valor += char(b);Serial.print(b);tab();Serial.print(char(b));tab();}
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
        */
        linha();
        valor = "";
//      }
    }
  }
}
