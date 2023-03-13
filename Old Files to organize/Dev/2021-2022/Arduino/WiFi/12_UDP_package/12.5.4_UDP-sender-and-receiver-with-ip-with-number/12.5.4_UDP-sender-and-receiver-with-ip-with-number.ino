#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
WiFiUDP Udp;
unsigned int localPort = 8888;      // local port to listen on
String       send_to_ip   = "192.168.0.107"; 
unsigned int send_to_port = 7777; 

#ifndef STASSID
#define STASSID "Rede Dias"
#define STAPSK  "subtendias"
#endif

char  packetBuffer[UDP_TX_PACKET_MAX_SIZE + 1]; //buffer to hold incoming packet,
char  ReplyBuffer[] = "<Arduino Enviando";       // a string to send back


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

unsigned int package_number = 0;

void reply_packet (String local_ip_to_send, unsigned int local_port_to_send) {
  package_number+=1;
  Serial.print("Pacote: ");
  Serial.println(package_number);
  
  IPAddress ip;
  ip.fromString(local_ip_to_send);
  Udp.beginPacket(ip, local_port_to_send);
  Udp.write(ReplyBuffer);
  Udp.write(" - ");
  Udp.write(package_number);
  Udp.write(" >");
  Udp.endPacket();
}

unsigned long previousMillis = 0;
const long interval = 5000;


void check_packet() {
  if (Udp.parsePacket()) {
    Udp.read(packetBuffer, UDP_TX_PACKET_MAX_SIZE);
    Serial.print(packetBuffer);
  }
}
unsigned long currentMillis;

void repeat_reply_packet() {
  currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
  reply_packet(send_to_ip, send_to_port);
  }
}

void loop() {
  check_packet();
  repeat_reply_packet();
}
