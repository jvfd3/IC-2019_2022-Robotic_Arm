/*Exemplo BT Classic
# ExemploBluetoothRN

Projeto desenvolvido para auxiliar os interessados quanto a utilização da biblioteca React-Native-Bluetooth-Classic

*/

//Esse arquivo não é funcional pois não instalei as dependências necessárias, apenas
//estou exemplificando o uso da biblioteca react-native-bluetooth-classic.
import React from 'react';
import { View, Text } from 'react-native';
//Suponho que você já seguiu a instalação da biblioteca, caso sim, apenas importe ela
//desta forma.
import RNBluetoothClassic, { BTEvents, BTCharsets } from 'react-native-bluetooth-classic';

//base64 será necessário para criptografar as mensagens enviadas via serial para o arduino.
import base64 from 'react-native-base64';

export default function BluetoothExemplo(){
  
  //nesse escopo você irá declarar as funções desejadas

  //inicialmente, vamos descobrir o código mac do dispositivo que desejamos conectar (arduino)

  async function VerDispositivosDisponiveis(){

    try{
      //a função list irá mostrar na tela todos os dispositivos bluetooths encontrados
      //pelo seu smartphone.
        const lista = await RNBluetoothClassic.list();
        console.log(lista); //agora basta dar um console.log(lista) para ver os dispositivos

        //dando um console.log() você irá ver uma série de nomes com seus respectivos endereços
        //mac, por exemplo, ArduinoHC05 12:14:843:2732:23.

        //você deve agora copiar o endereço mac do seu arduino, pois você irá utilizá-lo 
        //posteriormente

        
    }
    catch (e) {
        console.log(e);
    }
  }


  async function AtivarBluetoothDoUsuário(){
    try{
        //utilizando requestEnable() você forçara uma mensagem na tela do usuário requisitando
        //a ativação do bluetooth
        const enable = await RNBluetoothClassic.requestEnable();
        //caso o usuário ligou o bluetooth (enable == true) você chamara a função 
        //ConectarAoDispositivo
        if(enable){
          ConectarAoDispositivo();
        }
    }
    catch (e) {
        console.log(e);
    }
  }

  //Função para conectar ao arduino
  async function ConectarAoDispositivo(){
    try{
        //Agora você irá utilizar a função .connect(), passando o endereço mac do arduino
        //como parâmetro.
        const conectar = await RNBluetoothClassic.connect("12:14:843:2732:23");
        
        console.log(conectar); //caso conectar==true, seu smartphone foi conectado
        //ao arduino

        //OBS: se reparar, seu módulo bluetooth pisca com constância quando não está 
        //conectado a outro dispositivo, porém ao conectar, o módulo pisca periódicamente.


        //se conectar for true, vamos enviar algo para seu arduino. (obs: seu arduino
        //deve estar programado para isso).

      if(conectar){
            //obs: você deve criptografar em base64 o que deseja enviar para o arduino.
             const dado = base64.encode('oi');
             const send =  await RNBluetoothClassic.writeToDevice(dado);  
             console.log(send); //para saber se sua mensagem foi enviada ou não!
      }

    }
    catch (e) {
      console.log(e);
    }

  }
  
  return(
    <View>
      <View>
        <Text>
          💠
        </Text>
      </View>
    </View>
  )
}
