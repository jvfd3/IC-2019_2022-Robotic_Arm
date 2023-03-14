#include <Servo.h>
//Servo myservo;
Servo s1,s2,s3,s4,s5,s6,s7;
int ang1=180, ang2=80, ang3=90, ang4=100, ang5=80, ang6=100, ang7=90;
int ang, sv, v;
char c;
String valor;
//4, 5, 6 ESTão fracos
void tab  (){Serial.print("\t");}
void line (){Serial.print("\n");}

void servosAttach(){
  s1.attach(8);
  s2.attach(2);
  s3.attach(3);
  s4.attach(4);
  s5.attach(5);
  s6.attach(6);
  s7.attach(7);
}

void setServo (Servo &s, int pos, char servo){
  Serial.print("servo");
  Serial.print(servo);   tab();
  Serial.print(pos);     tab();
  s.write(pos);
}

void setServos(){
  setServo(s1,ang1,'1');
  setServo(s2,ang2,'2');
  setServo(s3,ang3,'3');
  setServo(s4,ang4,'4');
  setServo(s5,ang5,'5');
  setServo(s6,ang6,'6');
  setServo(s7,ang7,'7');
  line();
}

void setAngles(){
  switch(sv){
    case 1: ang1=map(ang,0,180,135,180); break;         /* abremax: 180  meio: ???  fechamax: 135   s1: garra */
    case 2: ang2=ang; break;                            /* abremax: 180  meio: 100  fechamax: 000   s2: Dedos */
    case 3: ang3=ang; break;                            /* abremax: 180  meio: 090  fechamax: 000   s3: pulso */ //   colocar mais para baixo a garra
    case 4: ang4=ang; break;                            /* abremax: 000  meio: 000  fechamax: 000   s4: cotovelo */
    case 5: ang5=ang;ang6=map(ang,0,180,180,0); break;  /* abremax: 180  meio: 100  fechamax: 000   s5: ombro Esquerdo */
    case 6: ang6=ang;ang5=map(ang,0,180,180,0); break;  /* abremax: 000  meio: 100  fechamax: 180   s6: ombro Direito */
    case 7: ang7=ang; break;                            /* abremax: 180  meio: 090 fechamax: 000   s7: base */
  }
}

void cleanValue(){
  

}

bool checkValue(){
  v=valor.toInt();
  if((v>=1000)&&(v<=7180)){
    ang=v%1000;
    sv=(v-ang)/1000;
    
    if (ang>180){ang=180;}
    if (ang<0){ang=0;}
    cleanValue();
    return 1;
  }
  else{
    Serial.print("XXXXXXXXXX Invalid Value XXXXXXXXXX");line();
    return 0;
  }
//  Talvez possa remover esse else, tanto tirar o else e reduzir a indentação do que estiver dentro, quanto tirar também o que está dentro do else.
}

void setup() {
  Serial.begin(9600);
  servosAttach();
  setServos();
}  

void loop() { 
  if (Serial.available() > 0)
  { 
    c = Serial.read();
    if (c != 10)    {valor += c;}
    else
    {
      if(checkValue()){
        setAngles();
        cleanValue();
        setServos();
      }
      
      line();
      valor = "";
    }
  }
  
}
