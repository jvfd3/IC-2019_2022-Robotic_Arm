
#include <Servo.h>
//Servo myservo;
Servo s1;
String valor;
char c;
int ang, sv, ang1=90;

void tab  (){Serial.print("\t");}
void line (){Serial.print("\n");}

void setServo (Servo &s, int pos, char servo){
  Serial.print("servo");
  Serial.print(servo);   tab();
  Serial.print(pos);     tab();
  s.write(pos);
}

void setup() {
  Serial.begin(9600);
  s1.attach(4);
}

void loop() {
 
  if (Serial.available() > 0)
  {
    
    c = Serial.read();
    if ((c != 10)/*||(length(valor)==5)*/)    {valor += c;}
    else
    {
      sv= valor.substring(0, 1).toInt();
      ang=valor.substring(1, 4).toInt();
      if (ang>180){ang=180;};
      if (ang<0){ang=0;};
      switch(sv){
        case 1: ang1=ang; break;
      }
      setServo(s1,ang1,'1');


      
      line();
      valor = "";
    }
  }
  
}
