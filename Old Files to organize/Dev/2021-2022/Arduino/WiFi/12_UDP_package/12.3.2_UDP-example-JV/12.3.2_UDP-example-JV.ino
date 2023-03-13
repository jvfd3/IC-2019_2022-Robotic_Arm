/*
  UDPSendReceive.pde:
  This sketch receives UDP message strings, prints them to the serial port
  and sends an "acknowledge" string back to the sender

  A Processing sketch is included at the end of file that can be used to send
  and received messages for testing with a computer.

  created 21 Aug 2010
  by Michael Margolis

  This code is in the public domain.

  adapted from Ethernet library examples
*/

#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
WiFiUDP Udp;
unsigned int localPort = 8888;      // local port to listen on

#ifndef STASSID
#define STASSID "Rede Dias"
#define STAPSK  "subtendias"
#endif


// buffers for receiving and sending data
char  packetBuffer[UDP_TX_PACKET_MAX_SIZE + 1]; //buffer to hold incoming packet,
//char  ReplyBuffer[] = "acknowledged\r\n";       // a string to send back
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

void packet_received_print_info (int local_packetSize) {
  
    Serial.printf("Received packet of size %d\nfrom:\t%s:%d \nto:\t%s:%d\n",
                  local_packetSize,
                  Udp.remoteIP().toString().c_str(), Udp.remotePort(),
                  Udp.destinationIP().toString().c_str(), Udp.localPort()
                  );
}

void read_and_print_packet_content () {
    // read the packet into packetBuffer
    Serial.print("Initial packet buffer:");
    Serial.print(packetBuffer);
    Serial.print("\nInitial UDP_TX_PACKET_MAX_SIZE:");
    Serial.print(UDP_TX_PACKET_MAX_SIZE);
    int n = Udp.read(packetBuffer, UDP_TX_PACKET_MAX_SIZE);
    Serial.print("\nInitial n:");
    Serial.print(n);
    Serial.print("\nMid packet buffer:");
    Serial.print(packetBuffer);
    Serial.print("\nwriting Mid packet buffer:");
    Serial.write(packetBuffer);
//    packetBuffer[n] = 0;
//    Serial.println("Contents:");
    Serial.print("\nFinal packet buffer:");
    Serial.print(packetBuffer);
    Serial.print("\nwriting Final packet buffer:");
    Serial.write(packetBuffer);
}


void testing_minimal_read () {
    // read the packet into packetBuffer
//    int n = Udp.read(packetBuffer, UDP_TX_PACKET_MAX_SIZE);
    Udp.read(packetBuffer, UDP_TX_PACKET_MAX_SIZE);
//    Serial.print("\nInitial n:");
//    Serial.print(n);
    Serial.print(packetBuffer);
}

void reply_packet () {
    // send a reply, to the IP address and port that sent us the packet we received
    Udp.beginPacket(Udp.remoteIP(), Udp.remotePort());
    Udp.write(ReplyBuffer);
    Udp.endPacket();
}

void loop() {
  int packetSize = Udp.parsePacket();
  if (packetSize) {
//    Serial.printf("\\/Package START\\/\n");
//    packet_received_print_info(packetSize);
//    read_and_print_packet_content();   
    testing_minimal_read (); 
//    Serial.printf("/\\Package END  /\\\n");
//    reply_packet();
  }
}
