/*
  Ligar
  quatro LEDs de acordo com a posicao de
  dois potenciometros
  representando as coordenadas x e y
*/

const int led1 =  10, led2 =  9, led3 =  6, led4 =  11;
const int inputX =  A0,   inputY =  A1;
int turnedOnLED=-1;

void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
}

void on     (int led) {digitalWrite(led, HIGH);}
void off    (int led) {digitalWrite(led,  LOW);}


void lightCorrectLED (int x, int y) {
  off(turnedOnLED);
  turnedOnLED = (y>=512)?((x>=512)? (led1):(led2)):((x>=512)? (led4):(led3));
  on(turnedOnLED);
}

/* void lightCorrectLED1 (int x, int y) {
  int Xquadrant = (x >= 512);
  int Yquadrant = (y >= 512);
  int ledToTurnOn = (Yquadrant)?((Xquadrant)?(1):(2)):((Xquadrant)?(4):(3));
  (ledToTurnOn==1)?(on(led1)):(off(led1));
  (ledToTurnOn==2)?(on(led2)):(off(led2));
  (ledToTurnOn==3)?(on(led3)):(off(led3));
  (ledToTurnOn==4)?(on(led4)):(off(led4));
} */

void loop() {
  lightCorrectLED (analogRead(inputX), analogRead(inputY));
}
