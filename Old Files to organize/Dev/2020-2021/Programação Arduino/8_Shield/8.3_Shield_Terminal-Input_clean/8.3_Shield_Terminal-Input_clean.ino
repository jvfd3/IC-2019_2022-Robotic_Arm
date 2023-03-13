
#include <Servo.h>
//Servo myservo;
Servo s1,s2,s3,s4,s5,s6;
String valor;
char c;
int ang, sv, ang1=90, ang2=90, ang3=90, ang4=90, ang5=90, ang6=90, pos = 0;

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
  s2.attach(5);
  s3.attach(6);
  s4.attach(7);
  s5.attach(8);
  s6.attach(9);
}

void loop() {
 
  if (Serial.available() > 0)
  {
    
    c = Serial.read();
    if (c != 10)    {valor += c;}
    else
    {
      sv= valor.substring(0, 1).toInt();
      ang=valor.substring(1, 4).toInt();
      if (ang>180){ang=180;};
      if (ang<0){ang=0;};
      switch(sv){
        case 1: ang1=ang; break;
        case 2: ang2=ang; break;
        case 3: ang3=ang; break;
        case 4: ang4=ang; break;
        case 5: ang5=ang; break;
        case 6: ang6=ang; break;
//        case 9: ang1=ang;ang2=ang;ang3=ang;ang4=ang; break;
      }
      setServo(s1,ang1,'1');
      setServo(s2,ang2,'2');
      setServo(s3,ang3,'3');
      setServo(s4,ang4,'4');
      setServo(s5,ang5,'5');
      setServo(s6,ang6,'6');

      /*
      switch(sv){
        case 1: setServo(s1,ang,'1'); break;
        case 2: setServo(s2,ang,'2'); break;
        case 3: setServo(s3,ang,'3'); break;
        case 4: setServo(s4,ang,'4'); break;
        case 5: setServo(s5,ang,'5'); break;
        case 6: setServo(s6,ang,'6'); break;
        case 9: ang1=ang;ang2=ang;ang3=ang;ang4=ang; break;
      }
      
      */
      
      line();
      valor = "";
    }
  }
  
}
