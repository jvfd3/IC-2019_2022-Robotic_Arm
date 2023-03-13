void setup() {
  int baudrate=9600;
  Serial.begin(baudrate);
  }
  void tab() {Serial.print("\t");}
  void line(){Serial.print("\n");}

  void openTag() {Serial.print("<");}
  void closeTag() {Serial.print(">");}
    int cont=0;
    byte b;
    char c;
    String s;
    String v;
void loop()
{
  if (Serial.available())
  {
    cont+=1;
    Serial.print("(");
    Serial.print(cont);
    Serial.print(":  ");
      b+=byte(Serial.read());
      v+="<";v+=b;v+=">";
      Serial.print(v);
      if (c==10) {
      }
      else{}
    Serial.print(")");
    v="";
    line();
  }
}
