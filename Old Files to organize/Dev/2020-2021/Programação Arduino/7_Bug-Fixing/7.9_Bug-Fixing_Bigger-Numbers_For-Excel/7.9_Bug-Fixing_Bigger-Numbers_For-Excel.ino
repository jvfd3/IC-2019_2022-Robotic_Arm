//#include <SoftwareSerial.h>
//SoftwareSerial mySerial(6,5);
void setup() {
  Serial.begin(9600);
//  mySerial.begin(9600);
}

void loop()
{ int a=Serial.available();
  if (a)
  {
//    byte b=Serial.read();
//    if(b==192){
//      
//    }
    byte v[8];
    int b=Serial.readBytes(v,8);
    int i;
    for (i=0;i<=b;i++){
      Serial.print(v[i]);
      Serial.print("\t");
    }
      Serial.print("\n");
    
  }
}
