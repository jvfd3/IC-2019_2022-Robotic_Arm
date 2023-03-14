const int lowestPin = 2;
const int highestPin = 13;
const int EX= A0;
const int EY= A1;
//thinkpad

void setup()
{
    Serial.begin(9600);
  // set pins 2 through 13 as outputs:
  for (int thisPin = lowestPin; thisPin <= highestPin; thisPin++) {
    pinMode(thisPin, OUTPUT);
  }
  int Y=0,X=0,mX=analogRead(EX),mY=analogRead(EY),nX=0,nY=0,lux=0;
}

void loop()
{
  X=analogRead(EX);
  Y=analogRead(EY);
  
  if(X<512) {nX=map(X,0,512,255,0);}
  else      {nX=map(X,512,1023,0,255);}
  
  if(Y<512) {nY=map(X,0,512,255,0);}
  else      {nY=map(X,512,1023,0,255);}
  
  if(nx>=ny)  {lux=nx;}
  else        {lux=ny;}
  
  if(X>mX)
  {
    analogWrite(Q1, lux);
    analogWrite(Q4, lux);
  }
  else if(X<mX)
  {
    analogWrite(Q2, lux);
    analogWrite(Q3, lux);
  }
      
  if(Y>mY)
  {
    analogWrite(Q1, lux);
    analogWrite(Q4, lux);
  }
  else if(Y<mY)
  {
    analogWrite(Q2, lux);
    analogWrite(Q3, lux);
  }

}
