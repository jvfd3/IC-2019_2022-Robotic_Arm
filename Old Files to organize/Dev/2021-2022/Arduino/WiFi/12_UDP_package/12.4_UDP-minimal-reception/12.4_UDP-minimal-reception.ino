#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
WiFiUDP Udp;
// ip is 192.168.0.108:8888
//Source port = 8888
unsigned int localPort = 8888;      // local port to listen on
#ifndef STASSID
#define STASSID "Rede Dias"
#define STAPSK  "subtendias"
#endif

char  packetBuffer[UDP_TX_PACKET_MAX_SIZE + 1]; //buffer to hold incoming packet,

void setup() {
  Serial.begin(115200);
  connect_wifi (STASSID, STAPSK);
  connect_udp ();
  Serial.print("Connected\n");
}

void connect_wifi (char* local_SSID, char* local_PASSWORD) {
  WiFi.mode(WIFI_STA);
  WiFi.begin(STASSID, STAPSK);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(500);
  }
  Serial.print("Connected! IP address: ");
  Serial.println(WiFi.localIP());
}

void connect_udp () {
  Serial.printf("UDP server on port %d\n", localPort);
  Udp.begin(localPort);
}

void loop() {
  if (Udp.parsePacket()) {
    int packet_size = Udp.read(packetBuffer, UDP_TX_PACKET_MAX_SIZE);
    packetBuffer[packet_size] = 0;
    Serial.println(packetBuffer);
  }
}
