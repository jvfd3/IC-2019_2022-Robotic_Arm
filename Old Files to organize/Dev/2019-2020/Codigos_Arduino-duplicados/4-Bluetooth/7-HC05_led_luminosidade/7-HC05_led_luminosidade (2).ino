int     led1 = 9;
int     dimmer;
String  stringGeral;

void setup(){
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
}

void loop(){
  if (Serial.available())  {
    stringGeral = String("");
    
    while (Serial.available())    {
      stringGeral = stringGeral + char(Serial.read());
      delay(1);
    }
    dimmer = stringGeral.toInt();
    
    if ( dimmer >= 0 && dimmer <= 255)    {
      analogWrite(led1, dimmer);
      }
  }
}
