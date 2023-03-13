#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
WiFiUDP Udp;
unsigned int localPort = 8888;      // local port to listen on

#ifndef STASSID
#define STASSID "Rede Dias"
#define STAPSK  "subtendias"
#endif

char  packetBuffer[UDP_TX_PACKET_MAX_SIZE + 1]; //buffer to hold incoming packet,
char  ReplyBuffer[] = "XXX Recebido JV XXX";       // a string to send back


void setup() {
  Serial.begin(115200);
  connect_wifi (STASSID, STAPSK);
  connect_udp ();
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

void reply_packet () {
    Udp.beginPacket(Udp.remoteIP(), Udp.remotePort());
    Udp.write(ReplyBuffer);
    Udp.endPacket();
}

void loop() {
  delay (500);
  reply_packet();
  
}
