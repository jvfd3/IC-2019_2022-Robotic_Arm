char    c1, c2, c3, c4;
char    c5, c6, c7, c8;
char    c9, c10, c11, c12;

String  String1, String2, String3, String4;
String  String5, String6, String7, String8;
String  String9, String10, String11, String12;

int     StringTOint1, StringTOint2, StringTOint3, StringTOint4;
int     StringTOint5, StringTOint6, StringTOint7, StringTOint8;
int     StringTOint9, StringTOint10, StringTOint11, StringTOint12;

int     int1, int2, int3, int4;
int     int5, int6, int7, int8;
int     int9, int10, int11, int12;

void tab()    {Serial.print("\t");}
void linha()  {Serial.print("\n");}

void indice(int inicio,int fim)
{
  for (int i = inicio; i < fim; i++) {
    Serial.print(i);
    tab();
  }
  linha();
} 

void setup()
{
  Serial.begin(9600);
  indice(1,11);

//                                     CHAR
  c1 = "1";           Serial.print(c1);                     tab();  //quadrado
  c2 = "1234";       Serial.print(c2);                      tab();  //quadrado
  c3 = "a";           Serial.print(c3);                     tab();  //#
  c4 = "abcd";        Serial.print(c4);                     tab();  //%
  
  c5 = '1';           Serial.print(c5);                     tab();  //1
  c6 = '1234';       Serial.print(c6);                      tab();  //4
  c7 = 'a';           Serial.print(c7);                     tab();  //a
  c8 = 'abc';        Serial.print(c8);                      tab();  //c
  
  c9  = 1;             Serial.print(c9);                    tab();  //quadrado
  c10 = 1234;         Serial.print(c10);                    tab();  //?
//  c11 = a;             Serial.print(c11);                 tab();  //
//  c12 = abc;          Serial.print(c12);                  tab();  //

  linha(); linha(); indice(21,31);

//                                     STRINGS
  String1 = "1";           Serial.print(String1);           tab();  //1
  String2 = "1234";        Serial.print(String2);           tab();  //1234
  String3 = "a";           Serial.print(String3);           tab();  //a
  String4 = "abc";         Serial.print(String4);           tab();  //abc
  
  String5 = '1';           Serial.print(String5);           tab();  //1
  String6 = '1234';        Serial.print(String6);           tab();  //13108
  String7 = 'a';           Serial.print(String7);           tab();  //a
  String8 = 'abc';         Serial.print(String8);           tab();  //25187
  
  String9  = 1;           Serial.print(String9);            tab();  //1
  String10 = 1234;        Serial.print(String10);           tab();  //1234
//  String11 = a;           Serial.print(String11);         tab();  //
//  String12 = abc;         Serial.print(String12);         tab();  //

  linha(); linha(); indice(41,51);

//                                         STRINGS TO INT
  StringTOint1 = String1.toInt();    Serial.print(StringTOint1);      tab();  //1
  StringTOint2 = String2.toInt();    Serial.print(StringTOint2);      tab();  //1234
  StringTOint3 = String3.toInt();    Serial.print(StringTOint3);      tab();  //0
  StringTOint4 = String4.toInt();    Serial.print(StringTOint4);      tab();  //0
  
  StringTOint5 = String5.toInt();    Serial.print(StringTOint5);      tab();  //1
  StringTOint6 = String6.toInt();    Serial.print(StringTOint6);      tab();  //13108
  StringTOint7 = String7.toInt();    Serial.print(StringTOint7);      tab();  //0
  StringTOint8 = String8.toInt();    Serial.print(StringTOint8);      tab();  //25187

  StringTOint9  = String9.toInt();     Serial.print(StringTOint9);    tab();  //1
  StringTOint10 = String10.toInt();    Serial.print(StringTOint10);   tab();  //1234
//  StringTOint11 = String11.toInt();    Serial.print(StringTOint11); tab();  //
//  StringTOint12 = String12.toInt();    Serial.print(StringTOint12); tab();  //

  linha(); linha(); indice(61,71);
//                                         INT
  int1 = "1";           Serial.print(int1);                     tab();  //284
  int2 = "1234";        Serial.print(int2);                     tab();  //286
  int3 = "a";           Serial.print(int3);                     tab();  //291
  int4 = "abc";         Serial.print(int4);                     tab();  //298
   
  int5 = '1';           Serial.print(int5);                     tab();  //49
  int6 = '1234';        Serial.print(int6);                     tab();  //13108
  int7 = 'a';           Serial.print(int7);                     tab();  //97
  int8 = 'abc';         Serial.print(int8);                     tab();  //25187
  
  int9  = 1;           Serial.print(int9);                      tab();  //1
  int10 = 1234;        Serial.print(int10);                     tab();  //1234
//  int11 = a;           Serial.print(int11);                   tab();  //
//  int12 = abc;         Serial.print(int12);                   tab();  //

}
void loop(){}

  /*

    String  stringGeral;
    stringGeral = String("");
    stringGeral = stringGeral + char(Serial.read());
    dimmer = stringGeral.toInt();

  */
