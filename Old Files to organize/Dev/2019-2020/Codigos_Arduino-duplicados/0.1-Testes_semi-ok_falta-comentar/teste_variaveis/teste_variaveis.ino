// VARIABLES DEFINITIONS
String  String01, String02, String03, String04;
String  String05, String06, String07, String08;
String  String09, String10, String11, String12;

void tab      () {Serial.print("\t");}
void line     () {Serial.print("\n");}
void twoLines () {line ();   line ();}

void index (int start,int end) {
  for (int i = start; i <= end; i++) {
    Serial.print(i);
    tab ();
  }
  line ();
} 

void printValueAsChar (char value) {Serial.print(value);  tab();}

void charVariablesDefinitions   () {
  printValueAsChar ("1"   );     //char: dec:28
  printValueAsChar ("1234");     //char: dec:30
  printValueAsChar ("a"   );     //#
  printValueAsChar ("abcd");     //%

  printValueAsChar ('1'   );     //1
  printValueAsChar ('1234');     //4
  printValueAsChar ('a'   );     //a
  printValueAsChar ('abc' );     //c

  printValueAsChar (1     );     //quadrado
  printValueAsChar (1234  );     //?
  // printValueAsChar (a     );     //a   is treated as an undeclared variable
  // printValueAsChar (abc   );     //abc is treated as an undeclared variable
}

void printValueAsString (String value) {Serial.print(value);  tab();}

void stringVariablesDefinitions () {  
  printValueAsString ("1"   );     //1
  printValueAsString ("1234");     //1234
  printValueAsString ("a"   );     //a
  printValueAsString ("abc" );     //abc
  
  String05 = '1';           Serial.print(String05);           tab();  //1
  String06 = '1234';        Serial.print(String06);           tab();  //13108
  String07 = 'a';           Serial.print(String07);           tab();  //a
  String08 = 'abc';         Serial.print(String08);           tab();  //25187
  
  String09 = 1;             Serial.print(String09);           tab();  //1
  String10 = 1234;          Serial.print(String10);           tab();  //1234
  //String11 = a;             Serial.print(String11);           tab();  //
  //String12 = abc;           Serial.print(String12);           tab();  //

  
  // printValueAsString ('1'   );     //1
  // printValueAsString ('1234');     //13108
  // printValueAsString ('a'   );     //a
  // printValueAsString ('abc' );     //25187
  
  // printValueAsString (1     );     //1
  // printValueAsString (1234  );     //1234
  //printValueAsString (a     );     //
  //printValueAsString (abc   );     //
}

void stringToIntDefinitions     () {
  int StringTOint01 = String01.toInt();    Serial.print(StringTOint01);      tab();  //1
  int StringTOint02 = String02.toInt();    Serial.print(StringTOint02);      tab();  //1234
  int StringTOint03 = String03.toInt();    Serial.print(StringTOint03);      tab();  //0
  int StringTOint04 = String04.toInt();    Serial.print(StringTOint04);      tab();  //0

  int StringTOint05 = String05.toInt();    Serial.print(StringTOint05);      tab();  //1
  int StringTOint06 = String06.toInt();    Serial.print(StringTOint06);      tab();  //13108
  int StringTOint07 = String07.toInt();    Serial.print(StringTOint07);      tab();  //0
  int StringTOint08 = String08.toInt();    Serial.print(StringTOint08);      tab();  //25187

  int StringTOint09 = String09.toInt();    Serial.print(StringTOint09);      tab();  //1
  int StringTOint10 = String10.toInt();    Serial.print(StringTOint10);      tab();  //1234
  //int StringTOint11 = String11.toInt();    Serial.print(StringTOint11);      tab();  //
  //int StringTOint12 = String12.toInt();    Serial.print(StringTOint12);      tab();  //
}

void intVariablesDefinitions    () {
  int int01 = "1";           Serial.print(int01);                     tab();  //284
  int int02 = "1234";        Serial.print(int02);                     tab();  //286
  int int03 = "a";           Serial.print(int03);                     tab();  //291
  int int04 = "abc";         Serial.print(int04);                     tab();  //298

  int int05 = '1';           Serial.print(int05);                     tab();  //49
  int int06 = '1234';        Serial.print(int06);                     tab();  //13108
  int int07 = 'a';           Serial.print(int07);                     tab();  //97
  int int08 = 'abc';         Serial.print(int08);                     tab();  //25187

  int int09 = 1;             Serial.print(int09);                     tab();  //1
  int int10 = 1234;          Serial.print(int10);                     tab();  //1234
  //int int11 = a;             Serial.print(int11);                     tab();  //
  //int int12 = abc;           Serial.print(int12);                     tab();  //
}

void setup () {
  Serial.begin(9600);
  twoLines ();
  index( 1, 10);   charVariablesDefinitions (); twoLines ();
  index(21, 30); stringVariablesDefinitions (); twoLines ();
  index(41, 50);     stringToIntDefinitions (); twoLines ();
  index(61, 70);    intVariablesDefinitions (); twoLines ();
}

void loop () {delay(10000);}