//#include <SoftwareSerial.h>
//SoftwareSerial mySerial(5, 6); // (TX, RX) - HC05 (TX SENDS, ONLY TX IS NEEDED TO SEND DATA FROM HC05
void setup() {
  int baudrate=9600;
  Serial.begin(baudrate);
  mySerial.begin(baudrate);
  }

    int cont=0;
    byte b;
    char c;
    String s;
    String v;
void loop()
{
  if (mySerial.available())
  {
    cont+=1;
    Serial.print("(");
    Serial.print(cont);
    Serial.print(") (");
    while(mySerial.available()){
//      s=mySerial.readString();

//      v+=mySerial.read();

//      v+="<";
//      v+=byte(mySerial.read());
//      v+=">";


  Serial.findUntil("0192", v);
      
//      Serial.print("<");
//      Serial.print(b);
//      Serial.print("/");
//      Serial.print(c);
//      Serial.print(">");
    }
    
      Serial.print(v);
    Serial.print(")");
    Serial.println("");
    v="";
  }
}
