/*
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

//The number of the pins and where they should be
//Change accordingly to your schematic
int led1 = 5, led2 = 8, led3 = 6, led4 = 3, PotX = A0, PotY = A1;

//Setting the middle ofthe joysticks as 512 (kind of the half of 1023)
//But joysticks may have a different or jittery middle point, so be careful with that
int middle=512;

// commands just to print a line or a tab
void tab  () {Serial.print("\t");}
void line () {Serial.print("\n");}

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

void mapTest (int input, char letter) {
  Serial.print("Input");
  Serial.print(letter);
  Serial.print(": ");
  Serial.print(input);
  tab();

  Serial.print("Show");
  Serial.print(letter);
  Serial.print(": ");
  Serial.print(calculateCartesianMap (input));
  line();
}

void loop () {
  mapTest (analogRead(PotX),'X');
  mapTest (analogRead(PotY),'Y');
  /* 
  mapTest (700,'X');
  mapTest (700,'Y');
  */
}
