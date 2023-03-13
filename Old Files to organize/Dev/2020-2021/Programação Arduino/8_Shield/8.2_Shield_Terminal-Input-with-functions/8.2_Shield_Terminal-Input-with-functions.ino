// twelve servo objects can be created on most boards
//pwm:3,5,6,9,10,11
//#include <SoftwareSerial.h>
//SoftwareSerial mySerial(5, 6); // (TX, RX) - HC05 (TX SENDS, ONLY TX IS NEEDED TO SEND DATA FROM HC05
#include <Servo.h>
//Servo myservo;
Servo s1,s2,s3,s4,s5,s6;
int pos = 0;

/*
sv1: garra
abremax: 180
fechamax: 115

s2: Gira garra: 
abremax: 180
meio: 100
fechamax: 0

s3
*/

String valor;
char c;
byte b;
int lum, led, l1=90, l2=90, l3=90, l4=90;


void tab  (){Serial.print("\t");}
void line (){Serial.print("\n");}
void sweep (Servo &s){
  for (pos = 0; pos <= 180; pos += 1) {
    s.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    s.write(pos);
    delay(15);
  }
}
void sweepAll (){
  for (pos = 0; pos <= 180; pos += 1) {
    s1.write(pos);
    s2.write(pos);
    s3.write(pos);
    s4.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    s1.write(pos);
    s2.write(pos);
    s3.write(pos);
    s4.write(pos);
    delay(15);
  }
}


void setup() {
  Serial.begin(9600);
//  mySerial.begin(9600);
//  myservo.attach(pin_number);
  s1.attach(4);
  s2.attach(5);
  s3.attach(6);
  s4.attach(7);
//  s5.attach(8);
//  s6.attach(9);

  if (false){
    Serial.print("led1"); tab();
    Serial.print(l1);     tab();
    s1.write(l1);
    Serial.print("led2"); tab();
    Serial.print(l2);     tab();
    s2.write(l2);
    Serial.print("led3"); tab();
    Serial.print(l3);     tab();
    s3.write(l3);
    Serial.print("led4"); tab();
    Serial.print(l4);     line();
    s4.write(l4);
  }
}

void loop() {
  if(false){
//    sweep(s1);
//    sweep(s2);
//    sweep(s3);
//    sweep(s4);
    sweepAll();
    
  }
  else {  
    if (Serial.available() > 0)
    {
      
      c = Serial.read();
      if (c != 10)    {valor += c;}
      else
      {
        led=valor.substring(0, 1).toInt();
        lum=valor.substring(1, 4).toInt();
        if (lum>180){lum=180;};
        switch(led){
          case 1: l1=lum; break;
          case 2: l2=lum; break;
          case 3: l3=lum; break;
          case 4: l4=lum; break;
          case 9: l1=lum;l2=l1;l3=l1;l4=l1; break;
        }
        Serial.print("led1"); tab();
        Serial.print(l1);     tab();
        s1.write(l1);
        Serial.print("led2"); tab();
        Serial.print(l2);     tab();
        s2.write(l2);
        Serial.print("led3"); tab();
        Serial.print(l3);     tab();
        s3.write(l3);
        Serial.print("led4"); tab();
        Serial.print(l4);     tab();
        s4.write(l4);
  
        line();
        valor = "";
      }
    }
  }
}
