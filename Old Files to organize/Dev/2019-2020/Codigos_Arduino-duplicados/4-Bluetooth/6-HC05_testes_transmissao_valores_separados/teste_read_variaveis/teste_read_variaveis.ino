void tab(){Serial.print("\t");}
void linha(){Serial.print("\n");}

String string1 = "Z";
int int1 = 9999, int2 = 9999;
void setup()
{
  Serial.begin(9600);
}

void loop()
{

//  if (Serial.available() > 0)
//  {

    string1 = Serial.read();        Serial.print(string1);  tab();
    string1 = Serial.read();        Serial.print(string1);  tab();
    int1 = string1.toInt();         Serial.print(int1);     tab();
    int1 = string1.toInt();         Serial.print(int1);     tab();
    int2 = Serial.read();           Serial.print(int2);     tab();
    int2 = Serial.read();           Serial.print(int2);     tab();

    linha();
    linha();


    string1 = Serial.peek();        Serial.print(string1);  tab();
    string1 = Serial.peek();        Serial.print(string1);  tab();
    int1 = string1.toInt();         Serial.print(int1);     tab();
    int1 = string1.toInt();         Serial.print(int1);     tab();
    int2 = Serial.peek();           Serial.print(int2);     tab();
    int2 = Serial.peek();           Serial.print(int2);     tab();

    linha();
    linha();

    string1 = Serial.parseInt();        Serial.print(string1);  tab();
    string1 = Serial.parseInt();        Serial.print(string1);  tab();
    int1 = string1.toInt();             Serial.print(int1);     tab();
    int1 = string1.toInt();             Serial.print(int1);     tab();
    int2 = Serial.parseInt();           Serial.print(int2);     tab();
    int2 = Serial.parseInt();           Serial.print(int2);     tab();

    linha();
    linha();


    //    string1 = Serial.read();        Serial.print(string1, DEC);  tab();
    //    string1 = Serial.read();        Serial.print(string1, DEC);  tab();
    int1 = string1.toInt();         Serial.print(int1, DEC);     tab();
    int1 = string1.toInt();         Serial.print(int1, DEC);     tab();
    int2 = Serial.read();           Serial.print(int2, DEC);     tab();
    int2 = Serial.read();           Serial.print(int2, DEC);     tab();

    linha();
    linha();


    //    string1 = Serial.peek();        Serial.print(string1, DEC);  tab();
    //    string1 = Serial.peek();        Serial.print(string1, DEC);  tab();
    int1 = string1.toInt();         Serial.print(int1, DEC);     tab();
    int1 = string1.toInt();         Serial.print(int1, DEC);     tab();
    int2 = Serial.peek();           Serial.print(int2, DEC);     tab();
    int2 = Serial.peek();           Serial.print(int2, DEC);     tab();

    linha();
    linha();

    //    string1 = Serial.parseInt();        Serial.print(string1, DEC);  tab();
    //    string1 = Serial.parseInt();        Serial.print(string1, DEC);  tab();
    int1 = string1.toInt();             Serial.print(int1, DEC);     tab();
    int1 = string1.toInt();             Serial.print(int1, DEC);     tab();
    int2 = Serial.parseInt();           Serial.print(int2, DEC);     tab();
    int2 = Serial.parseInt();           Serial.print(int2, DEC);     tab();

    linha();
    linha();
    /*  
      if (Serial.availableForWrite() > 0)
      {

      }

    */
//  }
}
