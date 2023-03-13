#include <SoftwareSerial.h>
SoftwareSerial mySerial(5, 6); // (TX, RX) - HC05 (TX SENDS, ONLY TX IS NEEDED TO SEND DATA FROM HC05
void tab() {  Serial.print("\t");}  void line() {  Serial.print("\n");}


const byte numChars = 32;
char receivedChars[numChars];

boolean newData = false;

void setup() {
  int baudrate=9600;
  mySerial.begin(baudrate);
  Serial.begin(baudrate);
  Serial.println("<Arduino is ready>");
}

void loop() {
    recvWithStartEndMarkers();
    showNewData();
}

void recvWithStartEndMarkers() {
    static boolean recvInProgress = false;
    static byte ndx = 0;
    char startMarker = '<';
    char endMarker = '>';
    char rc;
 
    while (mySerial.available() > 0 && newData == false) {
        rc = mySerial.read();

        if (recvInProgress == true) {
            if (rc != endMarker) {
                receivedChars[ndx] = rc;
                ndx++;
                if (ndx >= numChars) {
                    ndx = numChars - 1;
                }
            }
            else {
                receivedChars[ndx] = '\0'; // terminate the string
                recvInProgress = false;
                ndx = 0;
                newData = true;
            }
        }

        else if (rc == startMarker) {
            recvInProgress = true;
        }
    }
}

void showNewData() {
    if (newData == true) {
        Serial.print("This just in ... ");
        Serial.println(receivedChars);
        newData = false;
    }
}
