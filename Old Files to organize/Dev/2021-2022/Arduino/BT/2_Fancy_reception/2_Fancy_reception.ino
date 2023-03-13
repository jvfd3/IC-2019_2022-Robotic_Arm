int hasCustomProcessing  = 1;
int hasCustomSerial      = 1;

void tab() {  Serial.print("\t");}
void linha() {  Serial.print("\n");}
#include <SoftwareSerial.h>
SoftwareSerial mySerial(5, 6); // (TX, RX) - HC05 (T-Transmits; R-Receives) - BT-Transmits, Arduino_Receives
void setup() {
  int baudrate=9600;
  Serial.begin(baudrate);
  mySerial.begin(baudrate);
}
void loop() {
  function_selection();
}
void function_selection() {
  int choice = hasCustomProcessing*2 + hasCustomSerial*1;
  switch (choice) {
    case 0: {simple_reception ();};break;
    case 1: {custom_reception ();};break;
    case 2: {fancy_reception  ();};break;
    case 3: {fancier_reception();};break;
  };
}

void simple_reception () {
  if (Serial.available()){
    Serial.println(Serial.read());
  }
}

void custom_reception () {
  if (mySerial.available()){
    Serial.println(mySerial.read());
  }
}

void fancy_reception () {
  
  String valor = "";
  char c;

  //if (Serial.available() > 0) {
  while (Serial.available() > 0) {
    c = Serial.read();

    if (c != 10)    {      valor += c;    }
    else {
      Serial.print(valor); tab();
      valor = "";
      linha();
    }
  }
}

void fancier_reception () {
  // this needs more filtering
  // but its good enough for now
  String valor = "";
  int c;
  //Serial.print(".");
  //if (mySerial.available() > 0) {
    while (mySerial.available() > 0) {
      //Serial.print("X");
      c = mySerial.read();
      bool valid_value_condition = c>0 and c <= 180;
      if (valid_value_condition) {
        if (c>0 and c<5) {
          Serial.print(c);
          Serial.print("\t- Servo num");
        } else {
          Serial.print(c);
          Serial.print("\t- Angle");
        }
        linha();
      }
    }
 //       linha();
  //}
}
