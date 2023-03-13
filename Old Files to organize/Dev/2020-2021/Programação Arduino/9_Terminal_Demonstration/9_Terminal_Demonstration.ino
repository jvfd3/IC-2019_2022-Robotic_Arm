int ang1=180, ang2=80, ang3=90, ang4=100, ang5=80, ang6=100, ang7=90;
int ang, sv, v;
char c;
String valor;
void tab  (){Serial.print("\t");}
void line (){Serial.print("\n");}


void setServo (int pos, char servo){
  Serial.print("servo");
  Serial.print(servo);   tab();
  Serial.print(pos);     tab();
}

void servoMonitor(){
  setServo(ang1,'1');
  setServo(ang2,'2');
  setServo(ang3,'3');
  setServo(ang4,'4');
  setServo(ang5,'5');
  setServo(ang6,'6');
  setServo(ang7,'7');
  line();
}

void servoPlotter(){
  Serial.print("Servo1:");
  Serial.print(ang1);
  Serial.print(",Servo2:");
  Serial.print(ang2);
  Serial.print(",Servo3:");
  Serial.print(ang3);
  Serial.print(",Servo4:");
  Serial.print(ang4);
  Serial.print(",Servo5:");
  Serial.print(ang5);
  Serial.print(",Servo6:");
  Serial.print(ang6);
  Serial.print(",Servo7:");
  Serial.println(ang7);
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

bool checkValue(){
  v=valor.toInt();
  if((v>=1000)&&(v<=7180)){
    ang=v%1000;
    sv=(v-ang)/1000;
    
    if (ang>180){ang=180;}
    if (ang<0){ang=0;}
    return 1;
  }
  else{
    Serial.print("XXXXXXXXXXInvalidValueXXXXXXXXXX");line();
    return 0;
  }
}

void setup() {
  Serial.begin(9600);
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
        servoMonitor();
      }
      
//      line();
      valor = "";
    }
  }
  
}
