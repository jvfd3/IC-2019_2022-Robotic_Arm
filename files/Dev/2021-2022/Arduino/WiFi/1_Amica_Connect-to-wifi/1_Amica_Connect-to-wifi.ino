#include <ESP8266WiFi.h>

String global_wifi_name     = "Rede Dias";
String global_wifi_password = "subtendias";

void connect_to_wifi(String wifi_name, String wifi_password) {
  WiFi.begin(wifi_name, wifi_password);
  Serial.print("Connecting");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println();

  Serial.print("Connected, IP address: ");
}

void setup() {
//  Serial.begin(115200);
  Serial.begin(9600);
  Serial.println();
  connect_to_wifi(global_wifi_name, global_wifi_password);
  Serial.println(WiFi.localIP());
}

void loop() {Serial.println(".");delay(500);}
