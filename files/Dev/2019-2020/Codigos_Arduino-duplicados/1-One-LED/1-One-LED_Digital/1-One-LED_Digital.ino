const int button = 2, led =  13;
int butonState = 0, ledState = 0;

void setup(){
  pinMode(led,     OUTPUT); 
  pinMode(button,   INPUT);
}

void loop(){
  butonState = digitalRead(button);
  ledState = (butonState==HIGH)?(HIGH):(LOW);
  digitalWrite(led, ledState)
}
