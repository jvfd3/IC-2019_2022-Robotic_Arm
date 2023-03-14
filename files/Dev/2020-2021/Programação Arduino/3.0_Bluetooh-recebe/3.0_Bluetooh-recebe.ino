
//TX ENVIA, RX RECEBE. LOGO, TX DO HC05 NO RX DO ARDUINO

void tab() {  Serial.print("\t");}
void linha() {  Serial.print("\n");}

void setup() {  Serial.begin(9600);}

String valor;
char c;

void loop()
{
  if (Serial.available() > 0)
  {
    c = Serial.read();

    if (c != 10)    {      valor += c;    }
    else
    {
      Serial.print(valor.substring(0, 1).toInt()); tab();
      Serial.print(valor.substring(1, 4).toInt()); tab();
      valor = "";
      linha();
    }
  }
}
