const int led1 = 5, led2 = 8, led3 = 6, led4 = 3;
const int PotX = A0, PotY = A1;
int EntradaX = 0, EntradaY = 0, MapX = 0, MapY = 0;

// commands just to print a line or a tab
void tab  () {Serial.print("\t");}
void line () {Serial.print("\n");}

void setup () {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  Serial.begin(9600);
}

void loop () {
  EntradaX = analogRead(PotX);
  MapX = map(EntradaX, 0, 1023, 0, 254);
  analogWrite(led1, MapX);

  Serial.print("EntradaX: ");
  Serial.print(EntradaX);
  tab();

  Serial.print("MapX: ");
  Serial.print(MapX);
  line();
}
