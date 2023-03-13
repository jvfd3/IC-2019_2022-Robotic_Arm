#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#ifndef STASSID
#define STASSID "Rede Dias"   //Set this to the name of the wifi network that you want to connect to
#define STAPSK  "subtendias"  //Set this to the password of the wifi network
#endif

WiFiUDP       Udp;
unsigned int  max_size = UDP_TX_PACKET_MAX_SIZE;          // reduces length of variable name
unsigned int  UDP_port_to_listen  = 8888;                 //Port in which the device will listen for packages
String        send_to_ip          = "192.168.0.107";      //Ip   for which the device will send packages
unsigned int  send_to_port        = 7777;                 //Port for which the device will send packages
//char          packetBuffer[max_size + 1];                 //buffer to hold incoming packet,
//char          ReplyBuffer[]       = "<Arduino Enviando";  // a string to send back
unsigned int  package_number      = 0;          //Variable to count the number of packages sent
const long    interval            = 5000;       //Variable to limit the quantity of packages sent
unsigned long previousMillis      = 0;          //Variable to limit the quantity of packages sent
unsigned long currentMillis;                    //Variable to limit the quantity of packages sent

void setup() {
  Serial.begin(115200);
  connect_wifi (STASSID, STAPSK);     // Connects to an available wifi network
  connect_udp (UDP_port_to_listen);   // Connects the udp to a certain port (is it going to listen from this port?)
}

void connect_wifi (char* local_SSID, char* local_PASSWORD) {    //Connects to an available wifi with certain ssid and password
  WiFi.mode(WIFI_STA);                      // Sets wifi mode to station
  WiFi.begin(local_SSID, local_PASSWORD);   // Begins wifi connection at previously set SSID and password
  while (WiFi.status() != WL_CONNECTED) {   // while it's not connected, prints dots
    Serial.print('.');
    delay(500);
  }
  Serial.print("Connected! IP address: ");  // when connected, prints this
  Serial.println(WiFi.localIP());           // and also prints the local ip in which the device connected (Why is this different then the ipconfig ip?)
}

void connect_udp (unsigned int local_UDP_port_to_listen) {              // Sets a port from where UDP packages will be listened
  Serial.printf("UDP server on port %d\n", local_UDP_port_to_listen);   // prints info on screen
  Udp.begin(local_UDP_port_to_listen);                                  // Starts to listen for packages at said UDP port
}

void loop() {
  check_packet();         // Checks for incoming packages
  repeat_reply_packet();  // Sends packages
}

void check_packet() {                                   // Checks for incoming packages
  char  localPacketBuffer[max_size + 1];                // buffer to hold incoming packet,
  if (Udp.parsePacket()) {                              // if package is available to be read
    Udp.read(localPacketBuffer, max_size);              // reads it to a char buffer
    Serial.println(localPacketBuffer);                    // prints what was read
  }
}

void repeat_reply_packet() {                            // sends a package repeatedly
  currentMillis = millis();                             // checks current millis
  if (currentMillis - previousMillis >= interval) {     // if the interval between the current and the last time is bigger than the interval...
    previousMillis = currentMillis;                     // sets the previous as the current millis
    send_package();                                     // sends the message
  }
}

void send_package () {                                  // Sends a package
  char* message_to_send = get_message_to_send();        // gets the string to be sent via UDP
  print_from_to ();                                     // prints the ip:port that are used to send and receive data
  Serial.printf("\tSending: %s \n", message_to_send);   // print what message is going to be sent
  
  IPAddress ip;                                         // creates a variable of type IPAddress
  ip.fromString(send_to_ip);                            // converts a string ip to the formated ip 
  
  Udp.beginPacket(ip, send_to_port);                  // starts to send an UDP packet to said ip and port
  Udp.write(message_to_send);                         // writes the string present at the packet
  Udp.endPacket();                                    // ends the UDP packet that is being sent
}

void print_from_to () {                                                 // prints from where the package is coming and where it's going
  char from_to[50];                                                     // declares a variable that will hold the info
  String var_a = WiFi.localIP().toString();                             // converts the local ip to String
  const char*   f_ip = var_a.c_str();                                   // converts the String to a c_string
  int           f_po = UDP_port_to_listen;                              // sets the "from_port" value
  const char*   t_ip = send_to_ip.c_str();                              // sets the "to_ip" value as a c_string
  int           t_po = send_to_port;                                    // sets the "to_port" value
  sprintf(from_to, "%s:%d -> %s:%d", f_ip, f_po, t_ip, t_po);           // merges the information into a single c_string
  Serial.printf("%s\n", from_to);                                       // prints the merged information
}

char* get_message_to_send () {
  char* message = (char*) malloc (50*sizeof(char));
  package_number+=1;
  sprintf(message, "<Arduino enviando pacote %d>", package_number);
  return message;
}
