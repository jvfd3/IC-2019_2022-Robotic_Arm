/*  a little inaccurate description
  The purpose of this code is to test mapping for a cartesian-like led schematic
  There will be 4 leds disposed in a square
  the top    right one represents the first  quadrant
  the top    left  one represents the second quadrant
  the bottom right one represents the third  quadrant
  the bottom left  one represents the fourth quadrant
  you will also need 2 joysticks,
  one representing the Y axis
  one representing the X axis
  They will range from 0 to 1023
  The code below considers the middle of this range as 512 as seen in the variable middle
  The loop function will continually read the potentiometers X and Y and pass the values to the function map test
  The map test receives the value from the potentiometer and a letter representing which potetiometer was received
  It then shows the input and its respective  calculated cartesian value in the following way:
    if the value is below the middle (512),
      it will be mapped and returned as if it is ranged from 0 to 255
      (but counting backwards from the middle)
    else
      it will be mapped and returned as if it is ranged from 0 to255
      (but counting forward from the middle)
    then returned 
*/

/*
  Variar a intensidade
  de quatro LEDs de acordo com a posicao de
  um joystick
  representando as coordenadas x e y
  Ao carregar o programa, tenha o cuidado de deixar o joystick em sua posicao padrao
*/

//The number of the pins and where they should be
//Change accordingly to your schematic
int led1 = 5, led2 = 8, led3 = 6, led4 = 3, PotX = A0, PotY = A1;

//Setting the middle ofthe joysticks as 512 (kind of the half of 1023)
//But joysticks may have a different or jittery middle point, so be careful with that
int middle=512;

// commands just to print a line or a tab
// void tab  () {Serial.print("\t");}
// void line () {Serial.print("\n");}
//actually didnt use the code above

void setup () {
  //Usual pinMode and Serial.begin
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(PotX, INPUT);
  pinMode(PotY, INPUT);
  Serial.begin(9600);
}

int calculateCartesianMap (int input) {
  /*
  int start = (input>middle)?(0):(255);
  int end   = (input>middle)?(255):(0);
  return map(EntradaX, 0, 1023, start, end);
  */
  /* 
  if      (input > middle)  {return map(EntradaX, 0, 1023, 0, 255);}
  else                      {return map(EntradaX, 0, 1023, 255, 0);}
  */
  // A dense way of doing the sabe as the code above
  return map(input, 0, 1023, (input>middle)?(0):(255), (input>middle)?(255):(0));
}

void on_off  (int led, int intensity) {analogWrite(led, intensity);}

void selectCorrectLed (int x, int y) {
  return (y>=512)?((x>=512)? (led1):(led2)):((x>=512)? (led4):(led3));
}

void lightCorrectLED (int correctLed, int intensity) {
  (correctLed==1)?(on_off(led1, intensity)):(on_off(led1, 0));
  (correctLed==2)?(on_off(led2, intensity)):(on_off(led2, 0));
  (correctLed==3)?(on_off(led3, intensity)):(on_off(led3, 0));
  (correctLed==4)?(on_off(led4, intensity)):(on_off(led4, 0));
}

void Four_LEDs_Analog () {
  int inputX = analogRead(PotX);
  int inputY = analogRead(PotY);
  int max = (inputX>inputY) ? (inputX):(inputY);
  int intensity = calculateCartesianMap (max);
  int correctLed = selectCorrectLed (inputX, inputY);
  lightCorrectLED (correctLed, intensity)
}

/* void Four_LEDs_Analog_Dense () {
  int inputX = analogRead(PotX), inputY = analogRead(PotY);
  lightCorrectLED (selectCorrectLed (inputX, inputY), calculateCartesianMap ((inputX>inputY) ? (inputX):(inputY)))
} */

void loop () {
  Four_LEDs_Analog ();
  // Four_LEDs_Analog_Dense (); // denser
}
