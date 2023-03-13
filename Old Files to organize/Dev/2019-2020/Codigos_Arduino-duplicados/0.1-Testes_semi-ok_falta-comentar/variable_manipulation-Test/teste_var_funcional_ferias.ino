void tab      () {Serial.print("\t");}
void line     () {Serial.print("\n");}
void twoLines () {line();     line();}

String string1 = "Z";
int int1 = 1234, int2 = 1234;

void setup () {
  Serial.begin(9600);
}

void loop () {
  string1 = Serial.read();      Serial.print(string1);  tab();
  string1 = Serial.read();      Serial.print(string1);  tab();
  int1 =  string1.toInt();      Serial.print(int1);     tab();
  int1 =  string1.toInt();      Serial.print(int1);     tab();
  int2 =    Serial.read();      Serial.print(int2);     tab();
  int2 =    Serial.read();      Serial.print(int2);     tab();

  twoLines ();


  string1 = Serial.peek();      Serial.print(string1);  tab();
  string1 = Serial.peek();      Serial.print(string1);  tab();
  int1  = string1.toInt();      Serial.print(int1);     tab();
  int1  = string1.toInt();      Serial.print(int1);     tab();
  int2  =   Serial.peek();      Serial.print(int2);     tab();
  int2  =   Serial.peek();      Serial.print(int2);     tab();

  twoLines ();

  string1 = Serial.parseInt();  Serial.print(string1);  tab();
  string1 = Serial.parseInt();  Serial.print(string1);  tab();
  int1    =   string1.toInt();  Serial.print(int1);     tab();
  int1    =   string1.toInt();  Serial.print(int1);     tab();
  int2    = Serial.parseInt();  Serial.print(int2);     tab();
  int2    = Serial.parseInt();  Serial.print(int2);     tab();

  twoLines ();


  //    string1 = Serial.read();        Serial.print(string1, DEC);  tab();
  //    string1 = Serial.read();        Serial.print(string1, DEC);  tab();
  int1 = string1.toInt();      Serial.print(int1, DEC);     tab();
  int1 = string1.toInt();      Serial.print(int1, DEC);     tab();
  int2 =   Serial.read();      Serial.print(int2, DEC);     tab();
  int2 =   Serial.read();      Serial.print(int2, DEC);     tab();

  twoLines ();


  //    string1 = Serial.peek();        Serial.print(string1, DEC);  tab();
  //    string1 = Serial.peek();        Serial.print(string1, DEC);  tab();
  int1 = string1.toInt();      Serial.print(int1, DEC);     tab();
  int1 = string1.toInt();      Serial.print(int1, DEC);     tab();
  int2 =   Serial.peek();      Serial.print(int2, DEC);     tab();
  int2 =   Serial.peek();      Serial.print(int2, DEC);     tab();

  twoLines ();

  //    string1 = Serial.parseInt();        Serial.print(string1, DEC);  tab();
  //    string1 = Serial.parseInt();        Serial.print(string1, DEC);  tab();
  int1 =   string1.toInt();    Serial.print(int1, DEC);     tab();
  int1 =   string1.toInt();    Serial.print(int1, DEC);     tab();
  int2 = Serial.parseInt();    Serial.print(int2, DEC);     tab();
  int2 = Serial.parseInt();    Serial.print(int2, DEC);     tab();

  twoLines ();
  while (1) {Serial.print("."); delay(1000);}
}
