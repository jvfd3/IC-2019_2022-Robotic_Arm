int base = 6;
int speed = 0;


void setup() {
  // put your setup code here, to run once:
pinMode (base, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
for (speed=150; speed <= 250; speed=speed+50){
  analogWrite(base,speed);
  delay(3000);
}
analogWrite(base,0);
delay(1000);
}
