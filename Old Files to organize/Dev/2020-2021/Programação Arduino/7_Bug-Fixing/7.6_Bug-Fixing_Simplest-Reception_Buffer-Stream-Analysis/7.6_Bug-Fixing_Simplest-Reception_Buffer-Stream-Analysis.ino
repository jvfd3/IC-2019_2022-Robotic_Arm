#include <SoftwareSerial.h>
SoftwareSerial bt(5, 6); // (TX, RX) - HC05 (TX SENDS, ONLY TX IS NEEDED TO SEND DATA FROM HC05
void setup() {  int baudrate=9600;  Serial.begin(baudrate);  bt.begin(baudrate);}
void tab() {  Serial.print("\t");}  void line() {  Serial.print("\n");}
int lastA1=0, lastB1=0;
int a1=0,a2=0,b1=0,b2=0;
String valor="";
int cont=0;

void duo(int z){
//    Serial.print("(print/write):");
    Serial.print("(");
    Serial.print(z);
    Serial.print(",");
    Serial.write(z);
    Serial.print(")");
}

void checkLast(int* lastVar, int* var){
  if(*lastVar!=*var){
    *lastVar=*var;
    duo(*var);  line();
  }
}
void loop()
{
  a1=Serial.available();
  if(a1!=0){
    Serial.print("Serial: ");
    duo(a1);
    if(false){ //TRUE FOR READSTRINGUNTIL
      valor=Serial.readStringUntil('\n');
      Serial.print("Data: ");
      Serial.print(valor);line();
      valor="";
      Serial.print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");line();
    }
    else{
      Serial.print(" - Received: ");
      a2=Serial.read();
      duo(a2);
      line();
  
      if (a2 != 10) {
        valor += char(a2);
      }
      else{
        Serial.print("Data: ");
        Serial.print(valor);line();
        valor="";
        Serial.print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");line();
      }
    }
  };


  
  b1=bt.available();
  if(b1!=0){
    Serial.print("BT: ");
    duo(b1);
    Serial.print(" - Received: ");
    b2=bt.read();

;
    duo(b2);
    line();

//    if (b2 != 10) {
//      valor += char(b2);
//    }
//    else{
//      Serial.print("Data: ");
//      Serial.print(valor);line();
//      valor="";
//      Serial.print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");line();
//    }

    if (cont<5) {
      valor += char(b2);
      cont++;
    }
    else{
      Serial.print("Data: ");
      Serial.print(valor);line();
      valor="";
      cont=0;
      Serial.print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");line();
    }

    
  }
}
