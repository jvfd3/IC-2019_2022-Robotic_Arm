int datai;
String datas;

void tab() {Serial.print("\t");}
void linha() {Serial.print("\n");}

void setup()
{
  Serial.begin(9600);

  datas = "2097";             Serial.print(datas);                     tab();
  linha();
  datai = datas.toInt();    Serial.print(datai);                     tab();

  /*
        datai2=datas2.toInt();
        data1 = Serial.read();
        Serial.print(datai1);                    tab();
        data2 = Serial.readString();
        Serial.print(datai2);                     tab();
        datas1 = Serial.read();
        Serial.print(datas1);                     tab();
        datas2 = Serial.readString();
        Serial.print(datas2);     tab();
        Serial.print(Serial.readString());     tab();
        Serial.print(Serial.read());     tab();
  */

  /*
      Serial.print("\t");
      int data2 = Serial.read();
      Serial.print(data2, DEC);
  */

  linha();

}

void loop()
{
  if (Serial.available() > 0)
  {
    /*
      data1 = Serial.read();
      Serial.println(data1);
      Serial.print("\t")
      data2 = Serial.read();
      Serial.println(data2);
      datas1 = Serial.readString();
      Serial.println(datas1);
      datas2 = Serial.readString();
      Serial.println(datas2);
      data = Serial.read ();
      Serial.println();
    */
  }
}

