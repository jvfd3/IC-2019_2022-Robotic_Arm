//the LED pins are defined
const int led1 =  8, led2 =  12, led3 =  10, led4 =  6;

void setup () {
  pinMode(led1, OUTPUT);  // Define the pin 8  as Output
  pinMode(led2, OUTPUT);  // Define the pin 12 as Output
  pinMode(led3, OUTPUT);  // Define the pin 10 as Output
  pinMode(led4, OUTPUT);  // Define the pin 6  as Output
}

void blink (int led) {        // creating procedure "blink"
  digitalWrite(led, HIGH);    // turns LED on
  delay(200);                 // waits for 200 ms
  digitalWrite(led, LOW);     // turns LED off
}

void loop () {                //Blinks each of the LEDs
  blink(led1);
  blink(led2);
  blink(led3);
  blink(led4);
}
