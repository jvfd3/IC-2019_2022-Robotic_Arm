import BluetoothSerial from 'react-native-bluetooth-serial-next'
import Slider from '@react-native-community/slider';
import base64 from 'react-native-base64';
import React, { useEffect } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Switch,
  Image,
  View,
  Text,
} from 'react-native'

/*
Things to upgrade later:
1) Even with bluetooth device disconnected, it's shown on the list.
2) Connected to the selected device, instead of "list[0].address"
2.1) When "onPress" inside the TouchableOpacity, you should pass the index of the list. How? IDK
3) Put the Bluetooth componentes in another screen other than the main one.
4) Connect via wifi/ip too
5) fix the switch lag
6) upgrade toggle's switch style 
7) Make the app viable horizontally (after making a second screen for the bluetooth part)
8) Make Sliders Disappear while disconnected
*/


const App = () => {


  const ViewsBlock=()=>{
    return (
      <View             style={[styles.view2,{flexDirection:'row', flex:0, height:50}]}           /* Views */  > 
        <View           style={[styles.views,{backgroundColor:'#999'}]}        /* View 1 */ >
          <Text>
            View1
          </Text>
        </View>
        <View           style={[styles.views,{backgroundColor:'#777'}]}        /* View 2 */ >
          <Text>
            View2
          </Text>
        </View>
        <View           style={[styles.views,{backgroundColor:'#555'}]}        /* View 3 */ >
          <Text>
            View3
          </Text>
        </View>
        <View           style={[styles.views,{backgroundColor:'#333'}]}        /* View 4 */ >
          <Text         style={styles.whiteText}>
            View4
          </Text>
        </View>
        <View           style={[styles.views,{backgroundColor:'#111'}]}        /* View 5 */ >
          <Text         style={styles.whiteText}>
            View5
          </Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    sliderBlocks: {
      flex: 0,
      alignContent: 'center',
    },
    square: {
      aspectRatio:1,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize:25,
    },
    whiteText: {
      color: '#fff',
    },
    view1: {                                                      /* All the Screen */
      backgroundColor:  'black',
      borderColor: 'blue',
      borderWidth: 1,
      margin: 5,
      flex: 1,
    },
    view2: {
      backgroundColor:  '#777',
      borderColor: 'blue',
      borderWidth: 1,
      margin: 10,
      flex: 1,
    },
    view3: {
      backgroundColor:  '#555',
      borderColor: 'blue',
      borderWidth: 1,
      margin: 5,
      flex: 1,
    },
    view4: {
      backgroundColor:  '#333',
      borderColor: 'blue',
      borderWidth: 1,
      margin: 5,
      flex: 1,
    },
    view5: {
      backgroundColor:  '#111',
      borderColor: 'blue',
      borderWidth: 1,
      margin: 5,
      flex: 1,
    },
    views: {
      alignContent: 'space-between',
      backgroundColor:  '#555',
      alignItems: 'center', 
      borderColor: 'blue',
      borderRadius: 5,
      borderWidth: 1,
      margin: 10,
      height: 30,
      width: 40,
      flex: 1,
    },
  });

  const [connectedColor, setConnectedColor]     = React.useState('black');
  const [isBTEnabled,    setisBTEnabled]        = React.useState(false);
  const [isConnected,    setIsConnected]        = React.useState(false);
  const [textSlider1,    setTextSlider1]        = React.useState(90);
  const [textSlider2,    setTextSlider2]        = React.useState(90);
  const [address,        setAddress]            = React.useState('');
  const [list,           setList]               = React.useState([]);

  var   valueSlider1 = 90;
  var   valueSlider2 = 90;
  
  var MSGa='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  var i=0;


  useEffect(() => {
    async function init() {
      try {
        var   isBTEnabledVar=await BluetoothSerial.isEnabled(); 
        setisBTEnabled(isBTEnabledVar);
        if(isBTEnabledVar){
        const listUseEffect = await BluetoothSerial.list();
        setList(listUseEffect);
        await BluetoothSerial.stopScanning();
        }
      } catch (e) {
        console.log('useEffect Error1{', e, '} useEffect Error1');
      };
    }
    init();
    try {
      /* return () => {
        async function remove() {
          await BluetoothSerial.stopScanning();
          // console.log('Scan Finished');
        }
      } */
    } catch (e) {
      console.log('useEffect Error2{', e, '} useEffect Error2');
    };
    
    // remove();
  }, [])

  async function connect(DeviceAddress){
    try {
      setConnectedColor('grey');
      setIsConnected(await BluetoothSerial.isConnected(DeviceAddress));
      if (isConnected) {
        await BluetoothSerial.disconnect(DeviceAddress);
        setAddress('');
        setIsConnected(!isConnected);
        setConnectedColor('black');
      }
      else {
        console.log('not connected...  connecting...');
        await BluetoothSerial.connect(DeviceAddress);
        console.log('connected!');
        setAddress(DeviceAddress);
        setIsConnected(!isConnected);
        setConnectedColor('green');
          
      }
    } catch (e) {
      console.log('Connect Error {',e,'} Connect Error');
    }
  }

  async function sendDataLength(info){
    try {
      
      let lenga;
      console.log({info});
      lenga=info.length;
      console.log({lenga});

      let lengb;
      let msg=info.toString();
      console.log({msg});
      lengb=msg.length;
      console.log({lengb});

      let lengc;
      let encodedMsg=base64.encode(msg);
      console.log({encodedMsg});
      lengc=encodedMsg.length;
      console.log({lengc});

      await BluetoothSerial.writeToDevice(encodedMsg, address);
      console.log('sent\n');
      var data=255-lengb;
      console.log('\n192\n',lengb,'\n0\n0\n',data,'\n192\n');
      
      } catch (e) {
      console.log('sendData Error {',e,'} sendData Error ');
      }
    }
    
  async function sendData(info){
    try {
      
      let msg=info.toString();
      let encodedMsg=base64.encode(msg);
      await BluetoothSerial.writeToDevice(encodedMsg, address);
      
      } catch (e) {
      console.log('sendData Error {',e,'} sendData Error ');
      }
    }

    
    async function sendDataLessFunc(info){
    try {
      // await BluetoothSerial.writeToDevice(base64.encode(info.toString().concat('\n')), address);
      // await BluetoothSerial.writeToDevice(info, address);
      await BluetoothSerial.write(info, address);
      console.log({info});
      } catch (e) {
      console.log('sendData Error {',e,'} sendData Error ');
      }
    }
  
  async function sendBTContinuous(){
    try {
      i++;
      let cont;
      console.log('call ',i);
      MSGa+='x';
      
      for (cont=0;cont<4; cont++){
        // MSGa+='X';
      }
      sendDataLength(MSGa);

      
    } catch (e) {
      console.log('sendBTContinuous Error {',e,'} sendBTContinuous Error ');
    }
  }



  
  async function enableBluetooth(){
    try {
      await BluetoothSerial.requestEnable();
      await BluetoothSerial.stopScanning();
      setList(await BluetoothSerial.list());
      setisBTEnabled(true);
    } catch (e) {
      console.log('enableBluetooth Error{', e, '} enableBluetooth Error');
    }
  }

  async function disableBluetooth(){
    try {
      await BluetoothSerial.stopScanning();
      await BluetoothSerial.disable();
      setisBTEnabled(false);
      setList([]);
    } catch (e) {
      console.log('DisableBluetooth Error{', e, '} DisableBluetooth Error');
    }
  }

  const toggleBluetooth = (value) => {
    return (value ? enableBluetooth() : disableBluetooth())
  }

  const Toggle = (props) => {
    return (
      <View style={[styles.view2,styles.center,{flex:0, flexDirection:'row'}]} backgroundColor= {connectedColor}>
        <View style={[styles.view3,{flexDirection:'row', flex:0, width:140}]}>
          <Text style={[styles.view4,{flex:0, alignSelf:'center', width:120},styles.whiteText]}>
            Bluetooth: {props.value ? 'ON' : 'OFF'}
          </Text>
        </View>
        <View  style={[styles.view3,{flexDirection:'row', flex:0}]}>
          <Switch
            style={[styles.view4,{flex:0,alignSelf:'center'}]}
            thumbColor='cyan'
            trackColor={{ false: 'red', true: 'green' }}
            value={props.value}
            onValueChange={props.onValueChange}
          />
        </View>
      </View>
    )
  }

  const renderEmpty = () => {
    return (
      <View style={[styles.view3,styles.center,{flexDirection:'row'}]}>
        <View style={[styles.view4,styles.square,styles.center,{flex:0, width:66}]}  >
          <Image style={[styles.square,{height:55}]} source={require('./icons/empty.png')} />
        </View>
        <View style={[styles.view4,{flex:0, height: 66,width: 200, flexDirection:'column', justifyContent:'flex-start'}]}  >
          <Text style={styles.whiteText}>
            No Elements
          </Text>
        </View>
        <View style={[styles.view4,styles.square,styles.center,{flex:0, width:66}]}  >
          <Image style={[styles.square,{height:55}]} source={require('./icons/empty.png')} />
        </View>
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.view3,styles.center,{flexDirection:'row'}]}
        onPress={()=>{connect(item.address)}}
      >
        <View style={[styles.view4,styles.square,styles.center,{flex:0, width:66}]}  >
          <Image style={[styles.square,{height:55}]} source={require('./icons/devices.png')} />
        </View>
        <View style={[styles.view4,{flex:0, width: 200, flexDirection:'column', justifyContent:'center'}]}  >
          <Text style={styles.whiteText}>
            Name: {item.name}
          </Text>
          <Text style={styles.whiteText}>
            Class: {item.class}
          </Text>
          <Text style={styles.whiteText}>
            Address: {item.address}
          </Text>
        </View>
        <View style={[styles.view4,styles.square,styles.center,{flex:0, height:66,}]}  >
          <Image style={[styles.square,{height:55}]} source={require('./icons/cog.png')} />
        </View>
      </TouchableOpacity>
    )
  }

  

  return (
<>
    <View style={styles.view1}>
      <View style={[styles.view2,{alignItems:'center',flex: 0,height:40}]}>
        {/* TITLE */}
        <Text style={[styles.title,styles.whiteText]}>
          Simplest Send
        </Text>
      </View>
      <Toggle value={isBTEnabled} onValueChange={toggleBluetooth}/>
      <View style={[styles.view2,{flex:0, height:200}]}>
        <FlatList style={[styles.view3,{}]}
          data={list}
          renderItem={renderItem}
          ListEmptyComponent={renderEmpty}
        />
      </View>
      {/* <SlidersBlock/> */}
      <View>
        <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
        Servo 1: {textSlider1}
        </Text>
        <Slider
          value={valueSlider1}
          onValueChange={(valueSlider1) => {
            sendData(valueSlider1 + 1000);
            setTextSlider1(valueSlider1);
          }}
          step={1}
          margin={10}
          minimumValue={0}
          maximumValue={180}
          thumbTintColor={'white'}
          maximumTrackTintColor={'white'}
          minimumTrackTintColor={'white'}
        />
        <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
          Servo 2: {textSlider2}
        </Text>
        <Slider
          value={valueSlider2}
          onValueChange={(valueSlider2) => {
            sendData(valueSlider2 + 2000);
            setTextSlider2(valueSlider2);
          }
        }
          step={1}
          margin={10}
          minimumValue={0}
          maximumValue={180}
          thumbTintColor={'white'}
          maximumTrackTintColor={'white'}
          minimumTrackTintColor={'white'}
        />
      </View>
      <View  style={[styles.view2,styles.center,{flex:1, flexDirection:'column'}]}>
            <View style={[styles.view3,styles.center,{flex:1, flexDirection:'row'}]}>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{sendData(7180)}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   Normal 7180
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{sendDataLength(7180)}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                  Info 7180
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.view3,styles.center,{flex:1, flexDirection:'row'}]}>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{sendBTContinuous()}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   increasing X
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   XXX
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={[styles.view3,styles.center,{flex:1, flexDirection:'row'}]}>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   XXX
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   XXX
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={[styles.view3,styles.center,{flex:1, flexDirection:'row'}]}>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   XXX
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   XXX
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={[styles.view3,styles.center,{flex:1, flexDirection:'row'}]}>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   XXX
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.view3,styles.center,{flex:0, backgroundColor:'#333'}]}
                onPress={()=>{}}
              >
                <Text style={[styles.whiteText,{fontWeight:'bold'}]}>
                   XXX
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    </View>
</>
  );
};

export default App;