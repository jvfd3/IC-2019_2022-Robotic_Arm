#include <ESP8266WiFi.h>

void setup()
{
//  Serial.begin(115200);
  Serial.begin(9600);
  Serial.println();

  WiFi.begin("Rede Dias", "subtendias");

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {}
