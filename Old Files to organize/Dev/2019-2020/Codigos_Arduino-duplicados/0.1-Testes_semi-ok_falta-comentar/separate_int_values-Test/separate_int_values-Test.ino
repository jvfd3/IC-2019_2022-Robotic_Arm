void tab   () {Serial.print("\t");}
void line  () {Serial.print("\n");}

int led1 = 11, led2 = 10, led3 = 6, led4 = 5, part1, part2;
String stringCommand;

void setup () {
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
}

void printLED (int p1, int p2) {
  Serial.print("LED");
  Serial.print(part1);
  Serial.print(", intensity: ");
  Serial.print(part2);
}

void on_off  (int led, int intensity) {analogWrite(led, intensity);}

void lightCorrectLED (int correctLed, int intensity) {
  (correctLed==1)?(on_off(led1, intensity)):(on_off(led1, 0));
  (correctLed==2)?(on_off(led2, intensity)):(on_off(led2, 0));
  (correctLed==3)?(on_off(led3, intensity)):(on_off(led3, 0));
  (correctLed==4)?(on_off(led4, intensity)):(on_off(led4, 0));
}

void loop () {
  if (Serial.available() > 0)   {
    char c;
    c = Serial.read();
    if (c != 10) {
      stringCommand += c;
    } else {
      int intValue = stringCommand.toInt();
      int part1 = (intValue / 1000);
      int part2 = (intValue - 1000 * part1);
      stringCommand = "";
      printLED        (part1, part2);
      lightCorrectLED (part1, part2);
      line();
    }
  }
}
