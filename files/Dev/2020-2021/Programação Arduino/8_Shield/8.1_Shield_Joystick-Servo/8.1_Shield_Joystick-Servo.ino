const int pinX =  A0,   pinY =  A1, pinSW = A2;

int X,Y,SW;
int mapX, mapY;

void tab(){Serial.print("\t");}
void line(){Serial.print("\n");}

void setup() {
  Serial.begin(9600);
  pinMode(pinX, INPUT);
  pinMode(pinY, INPUT);
  pinMode(pinSW,INPUT);
}

void loop() {
  X = analogRead(pinX);
  Y = analogRead(pinY);
  SW = analogRead(pinSW);

  mapX=map(X,0,1023,0,180);
  mapY=map(Y,0,1023,0,180);

  Serial.print("mapX"); 
  Serial.print(mapX);
  Serial.print("mapY");
  Serial.print(mapY);   
  
  line();
}
