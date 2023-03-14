
void tab() {Serial.print("\t");}
void linha() {Serial.print("\n");}

void setup() { Serial.begin(9600);}

int ang=0;
float a=0, b=0;
void loop() {
  a= sin(ang);
  b= cos(ang);
  Serial.print("Sensor1:");
  Serial.print(5*a);
  Serial.print(",");
  Serial.print("Sensor2:");
  Serial.print(5*b);
  Serial.println(",Min:-5, Max:5");
     
  ang++;
//  delay(100);
}
