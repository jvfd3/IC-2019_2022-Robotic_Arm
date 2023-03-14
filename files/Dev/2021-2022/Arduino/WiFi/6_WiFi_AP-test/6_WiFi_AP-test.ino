#include <ESP8266WiFi.h>

IPAddress local_IP(192,168,4,22);
IPAddress gateway(192,168,4,9);
IPAddress subnet(255,255,255,0);

void access_point_test() {
  String access_point_name = "WiFi Name";
  String access_point_passwd = "abacatinho";
  
  Serial.println();

  Serial.print("Setting soft-AP configuration ... ");
  Serial.println(WiFi.softAPConfig(local_IP, gateway, subnet) ? "Ready" : "Failed!");

  Serial.print("Setting soft-AP ... ");
  Serial.println(WiFi.softAP(access_point_name, access_point_passwd) ? "Ready" : "Failed!");

  Serial.print("Soft-AP IP address = ");
  Serial.println(WiFi.softAPIP());
  Serial.printf("MAC address = %s\n", WiFi.softAPmacAddress().c_str());
}

void setup() {
//  apparently both baudrates can be used normally
  int baudrate = 9600;
//  int baudrate = 115200;
  Serial.begin(baudrate);
  access_point_test();
//  connect_to_wifi(global_wifi_name, global_wifi_password);  // Connect to Wi-Fi network with SSID and password
}

void loop(){
  
  Serial.printf("Stations connected = %d\n", WiFi.softAPgetStationNum());
  delay(3000);
  }
