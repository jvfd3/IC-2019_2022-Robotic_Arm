
void tab() {Serial.print("\t");}
void linha() {Serial.print("\n");}

String inputString = "";
float inputValue = 0.0;
bool stringComplete = false;
 
void setup() { Serial.begin(115200); }
  
int ang=0;
float rad2grad=57.295779513;
  
void loop() {
  Serial.print(sin(ang/rad2grad));
  Serial.print("\t");
  Serial.print(cos(ang/rad2grad)); 
  Serial.print("\t");
  Serial.println(inputValue); 
  ang++;
  delay(100);
 
  if (stringComplete) {
    inputString = "";
    stringComplete = false;
  }
 
  while (Serial.available()) {
    char inChar = (char)Serial.read();
    inputString += inChar;
    if (inChar == '\n') {
      stringComplete = true;
      inputValue = inputString.toFloat();
    }
  }
}
