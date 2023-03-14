#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
WiFiUDP Udp;
// ip is 192.168.0.106:8888
//Source port = 8888
unsigned int localPort = 8888;      // local port to listen on
#ifndef STASSID
#define STASSID "Rede Dias"
#define STAPSK  "subtendias"
#endif

void tab  () {Serial.print("\t");}
void line () {Serial.print("\n");}

int l1=90, l2=90, l3=90, l4=90;
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
  char* received_package = read_package();
  do_things_with_received_package(received_package);
}

char* read_package () {
  strcpy(packetBuffer, "");
  if (Udp.parsePacket()) {
    int packet_size = Udp.read(packetBuffer, UDP_TX_PACKET_MAX_SIZE);
    packetBuffer[packet_size] = 0;
//    Serial.println(packetBuffer);
  }
  return packetBuffer;
}

void do_things_with_received_package(String msg) {
  set_values(msg);
  print_values();
}

void set_values(String valor) {
  
  int led=valor.substring(0, 1).toInt();
  int lum=valor.substring(1, 4).toInt();
  
  switch(led){
    case 1: l1=lum; break;
    case 2: l2=lum; break;
    case 3: l3=lum; break;
    case 4: l4=lum; break;
  }
}

void print_values () {
  char title[] = "led";
  print_value(title, 1, l1);
  print_value(title, 2, l2);
  print_value(title, 3, l3);
  print_value(title, 4, l4);
  line();
}

void print_value (char* title, int id, int value) {
  char msg [32];
  sprintf(msg, "%s-%d:%d\t", title, id, value);
  Serial.print(msg);
}
