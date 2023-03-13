void setup(){
  Serial.begin(9600);
  pinMode(8, OUTPUT);
}

void loop(){
  if (Serial.available() > 0)  {
    char data = Serial.read(); // Lê o valor recebido via Bluetooth
    Serial.print(data);
    Serial.print("\n");

    switch (data)    {
      case 'a': digitalWrite(8, HIGH); break; // Caso envie o valor a, liga led.
      case 'b': digitalWrite(8, LOW); break; // Caso envie o valor b, desliga led.
      default : break;
    }
  }
  delay(40);
}
