
//TX ENVIA, RX RECEBE. LOGO, TX DO HC05 NO RX DO ARDUINO
#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void tab() {  Serial.print("\t");}
void linha() {  Serial.print("\n");}

void setup() {
  int baudrate=9600;
//  int baudrate=19200;
  Serial.begin(baudrate);
  mySerial.begin(baudrate);
}

String valor;
char c;
int lum, led, l1=0, l2=0, l3=0, l4=0;

void loop()
{
  if (mySerial.available() > 0)
  {
    c = mySerial.read();

    if (c != 10)    {      valor += c;    }
    else
    {
      led=valor.substring(0, 1).toInt();
      lum=valor.substring(1, 4).toInt();
      if (lum>=257){lum=9999;}
      switch(led){
        case 1: l1=lum; break;
        case 2: l2=lum; break;
        case 3: l3=lum; break;
        case 4: l4=lum; break;
      }

      
      Serial.print("led1"); tab();
      Serial.print(l1);     tab();
      Serial.print("led2"); tab();
      Serial.print(l2);     tab();
      Serial.print("led3"); tab();
      Serial.print(l3);     tab();
      Serial.print("led4"); tab();
      Serial.print(l4);     tab();
      valor = "";
      linha();
    }
  }
}
