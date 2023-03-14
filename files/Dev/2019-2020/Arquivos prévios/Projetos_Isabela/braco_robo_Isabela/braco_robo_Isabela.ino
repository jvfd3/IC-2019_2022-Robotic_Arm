// Código para teste de funcionamento do Braço Robótico para Arduino




// Controle de movimento realizado por Joysticks;
// Usinainfo - www.usinainfo.com.br
  
#include <VarSpeedServo.h> // Inclui a Biblioteca VarSpeedServo.h
  
VarSpeedServo servo_sobe; //Cria objeto para controlar o servo sobe
VarSpeedServo servo_frente; //Cria objeto para controlar o servo frente
VarSpeedServo servo_garra; //Cria objeto para controlar o servo garra
VarSpeedServo servo_corpo; //Cria objeto para controlar o servo corpo
  
int pino_x = A0; //Inicializa o pino analógico ao eixo X do joystick
int pino_y = A1; //Inicializa o pino analógico ao eixo Y do joystick
int pino_z = A3; //Inicializa o pino analógico ao eixo Z do joystick
int pino_w = A4; //Inicializa o pino analógico ao eixo W do joystick
int val_x; //Armazena o valor lido pelo eixo X do joystick
int val_y; //Armazena o valor lido pelo eixo Y do joystick
int val_z; //Armazena o valor lido pelo eixo Z do joystick
int val_w; //Armazena o valor lido pelo eixo W do joystick
  
void setup() {
 servo_frente.attach(5, 1, 180); //Define que o servo está conectado a porta 5 do Arduino
 servo_sobe.attach(6, 1, 180); //Define que o servo está conectado a porta 6 do Arduino
 servo_garra.attach(10, 1, 180); //Define que o servo está conectado a porta 10 do Arduino
 servo_corpo.attach(11, 1, 180); //Define que o servo está conectado a porta 11 do Arduino
}
  
void loop() {
 val_x = analogRead(pino_x); //Recebe o valor lido pelo eixo X do joystick
 val_x = map(val_x, 0, 1023, 180, 1); //Converte o valor lido para um valor em graus (1 a 180º)
 servo_sobe.slowmove(val_x, 60); //Movimenta o servo até a posição definida pelo eixo X
 
 val_y = analogRead(pino_y); //Recebe o valor lido pelo eixo Y do joystick
 val_y = map(val_y, 0, 1023, 1, 180); //Converte o valor lido para um valor em graus (1 a 180º)
 servo_frente.slowmove(val_y, 60); //Movimenta o servo até a posição definida pelo eixo Y
  
 val_z = analogRead(pino_z); //Recebe o valor lido pelo eixo Z do joystick
 val_z = map(val_z, 0, 1023, 180, 1); //Converte o valor lido para um valor em graus (1 a 180º)
 servo_garra.slowmove(val_z, 60); //Movimenta o servo até a posição definida pelo eixo Z
 
 val_w = analogRead(pino_w); //Recebe o valor lido pelo eixo W do joystick
 val_w = map(val_w, 0, 1023, 1, 180); //Converte o valor lido para um valor em graus (1 a 180º)
 servo_corpo.slowmove(val_w, 60); //Movimenta o servo até a posição definida pelo eixo W
 
 delay(30);
}
