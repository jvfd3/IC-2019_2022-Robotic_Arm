// BluetoothSlider_tofix
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import Slider from '@react-native-community/slider';
import base64 from 'react-native-base64';
import React, { useEffect } from 'react';
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
9) change the Slider's part later for a Block of already fixed styled sliders
<SlidersBlock/> composed by CustomSlider Component
slidersblock: 4x view, view, text, slider, view, view
CustomSlider: View, slider, props, view
10) fix setTextSlider reducing sendSlider frequency
11) fix CustomSlider not changing properly
12) Check on enable Bluetooth to connect and refresh itemlist properly
13) change the *1000, *2000, from sliders and make it "sendSlider(valueSlider,1)"
13.1) and then "await  BluetoothSerial.writeToDevice(/base64.encode((valueSlider+id*1000).toString().concat('\n')), address);"
*/


const styles = StyleSheet.create({

  textSliderFont:{
    flex:0,
    color: 'white',
    fontWeight: 'bold',
  },
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
    color: 'white',
  },
  whiteText: {
    color: '#fff',
  },
  view1: {
    backgroundColor:  'black',
    borderColor: '#020f1c',
    borderWidth: 1,
    margin: 2,
    flex: 1,
  },
  view2: {
    backgroundColor:  '#777',
    borderColor: '#020f3c',
    borderWidth: 1,
    margin: 5,
    flex: 1,
  },
  view3: {
    backgroundColor:  '#555',
    borderColor: '#020f5c',
    borderWidth: 1,
    margin: 2,
    flex: 1,
  },
  view4: {
    backgroundColor:  '#333',
    borderColor: '#020f7c',
    borderWidth: 1,
    margin: 2,
    flex: 1,
  },
  view5: {
    backgroundColor:  '#111',
    borderColor: '#020f9c',
    borderWidth: 1,
    margin: 2,
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

{ //Global Variables
  var sliderStep        =   1;
  var sliderMinValue    =   0;
  var sliderMaxValue    = 180;
  var sliderStartValue  =  90;
}

var CustomSlider=(props)=>{
  return(
    <View>
      <Text style={[styles.view4,styles.textSliderFont,{}]}>
        LED  {props.number}: {props.sliderValue} (t: {props.t}/si: {props.si}/ss: {props.ss})
      </Text>
      <Slider
        style                 ={[styles.view4,{flex:0, margin:5}]}
        onSlidingComplete     ={props.onSlidingComplete}
        onValueChange         ={props.onValueChange}
        value                 ={sliderStartValue}
        disabled              ={props.BTConnect}
        minimumValue          ={sliderMinValue}
        maximumValue          ={sliderMaxValue}
        step                  ={sliderStep}
        // thumbTintColor        ={'black'}
        maximumTrackTintColor ={'black'}
        minimumTrackTintColor ={'black'}
      />
    </View>
  )
}

const App = () => {

  { //variables and Hooks
    {  //Bluetooth & Connection related Variables
    var [list,           setList]            = React.useState([]);
    var [address,        setAddress]         = React.useState('');
    var [isBTEnabled,    setIsBTEnabled]     = React.useState(false);
    var [isConnected,    setIsConnected]     = React.useState(false);
    var [connectedColor, setConnectedColor]  = React.useState('#777');
    }
    
    { //SliderValue related Variables
      var [sliderValue1,    setSliderValue1]     = React.useState(sliderStartValue);
      var [sliderValue2,    setSliderValue2]     = React.useState(sliderStartValue);
      var [sliderValue3,    setSliderValue3]     = React.useState(sliderStartValue);
      var [sliderValue4,    setSliderValue4]     = React.useState(sliderStartValue);
      var [sliderValue5,    setSliderValue5]     = React.useState(sliderStartValue);
      var [sliderValue6,    setSliderValue6]     = React.useState(sliderStartValue);
    }
  }


  useEffect(() => {
    async function init() {
      try {
        if(await BluetoothSerial.isEnabled()){
          setIsBTEnabled(true);
          setList(await BluetoothSerial.list());
        }
        else {
          setIsBTEnabled(false);
        }
        setConnectedColor('#777')
      } catch (e) {
        console.log('useEffect Error1{', e, '} useEffect Error1');
      };
    }
    init();
  }, [])

  async function scanBT(){
    try {
      var a=(await BluetoothSerial.isEnabled());
      if (a){
        setIsBTEnabled(a);
        setIsConnected(false);
        setConnectedColor('#777');
        setList(await BluetoothSerial.list());
      }
    } catch (e) {
      console.log('scanBT Error {', e, '} scanBT Error');
    };
      
  }

  async function connect(DeviceAddress){
    try {
      setConnectedColor('darkblue');
      if (await BluetoothSerial.isConnected(DeviceAddress)) {
        console.log('connected... disconnecting...');
        await BluetoothSerial.disconnect(DeviceAddress);
        console.log('disconnected!');
        setAddress('');
        // setIsConnected(false);
        setConnectedColor('grey');
        setIsConnected(!isConnected);
      }
      else {
        console.log('not connected...  connecting...');
        await BluetoothSerial.connect(DeviceAddress);
        console.log('connected!');
        setAddress(DeviceAddress);
        // setIsConnected(true);
        setConnectedColor('green');
        setIsConnected(!isConnected);
      }
    } catch (e) {
      setAddress('');
      setConnectedColor('red');
      setIsConnected(false);
      console.log('Connect Error {',e,'} Connect Error');
    }
  }

  async function sendSlider(valueSlider){
    try {
      await BluetoothSerial.writeToDevice(base64.encode(valueSlider.toString().concat('\n')), address);
    } catch (e) {
      console.log('sendSlider Error {',e,'} sendSlider Error ');
    }
  }
  
  /* check later */
  async function enableBluetooth(){
    try {
      await BluetoothSerial.requestEnable();
      var a=(await BluetoothSerial.isEnabled());
      setIsBTEnabled(a);
      setIsConnected(false);
      // await BluetoothSerial.stopScanning();
      if (a){
        setList(await BluetoothSerial.list());
      }
    } catch (e) {
      console.log('enableBluetooth Error{', e, '} enableBluetooth Error');
    }
  }

  async function disableBluetooth(){
    try {
      await BluetoothSerial.stopScanning();
      await BluetoothSerial.disable();
      setConnectedColor('#777');
      setIsConnected(false);
      setIsBTEnabled(false);
      setList([]);
      setAddress('');
    } catch (e) {
      console.log('DisableBluetooth Error{', e, '} DisableBluetooth Error');
    }
  }
  
  // var encrypt=(msg)=>{
  //   return base64.encode(temp.toString().concat('\n'));
  // }

  var [temp, setTemp] = React.useState(0);
  async function sendSliderConstant(){
    try {
      var a1=temp;
      var b1=a1.toString();
      var c1=b1.concat('\n');
      // var a2=base64.encode(a1);
      var b2=base64.encode(b1);
      var c2=base64.encode(c1);
      console.log({a1});
      console.log({b1});
      console.log({c1});
      // console.log({a2});
      console.log({b2});
      console.log({c2});

      setTemp(temp+=1);
      await BluetoothSerial.writeToDevice(b2, address);
      console.log("sending1");
      await BluetoothSerial.writeToDevice(c2, address);
      console.log("sending2");
    } catch (e) {
      console.log('sendSliderConstant Error {',e,'} sendSliderConstant Error');
    }
  }

  // function loopSendSliderConstant() {
  //   try {
  //     var i;
  //     for(i=0;i<10;i=i+1){
  //       sendSliderConstant();
  //       // sleep(1000);
  //     }
  //   } catch (e) {
  //     console.log('sendSliderConstant {',e,'} sendSliderConstant ');
  //   }
  // }
  


  { // COMPONENTS
    var toggleBluetooth = (value) => {
      return (value ? enableBluetooth() : disableBluetooth())
    }

    // Later remove "temp" button and fix properly
    var Toggle = (props) => {
      return (
        <View style={[styles.view3,styles.center,{flex:0, flexDirection:'row'}]}>
          <View style={[styles.view4,{flexDirection:'row', flex:0, width:140}]}>
            <Text style={[styles.view5,{flex:0, alignSelf:'center', width:120},styles.whiteText]}>
              Bluetooth: {props.value ? 'ON' : 'OFF'}
            </Text>
          </View>
          <View  style={[styles.view4,{flexDirection:'row', flex:0}]}>
            <Switch
              style={[styles.view5,{flex:0,alignSelf:'center'}]}
              trackColor={{ false: 'red', true: 'green' }}
              onValueChange={props.onValueChange}
              value={props.value}
              // thumbColor='cyan'
            />
          </View>
        </View>
      )
    }

    var Tests = (props) => {
      return (
        <View style={[styles.view3,{flexDirection:'row', alignSelf:'center', flex:0}]}>
          <View  style={[styles.view4,{flexDirection:'row', flex:0}]}>
            <TouchableOpacity
              style={[styles.view5,{flex:0, height:30, width: 40, alignSelf:'center'}]}
              onPress={scanBT}
            >
              <Text style={[styles.whiteText,{}]}>
                temp
              </Text>
            </TouchableOpacity>
          </View>
          <View  style={[styles.view4,{flexDirection:'row', flex:0}]}>
            <TouchableOpacity
              style={[styles.view5,{flex:0, height:30, width: 110, alignSelf:'center'}]}
              onPress={()=>{sendSliderConstant()}}
              
            >
              <Text style={[styles.whiteText,{}]}>
                constant send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    var renderEmpty = () => {
      return (
        <View style={[styles.view3,styles.center,{flexDirection:'row'}]}>
          <View style={[styles.view4,styles.square,styles.center,{flex:0, width:66}]}  >
            <Image style={[styles.square,{height:55}]} source={require('./MiscJV/Icons/empty.png')} />
          </View>
          <View style={[styles.view4,{flex:0, height: 66,width: 200, flexDirection:'column', justifyContent:'flex-start'}]}  >
            <Text style={styles.whiteText}>
              No Elements
            </Text>
          </View>
          <View style={[styles.view4,styles.square,styles.center,{flex:0, width:66}]}  >
            <Image style={[styles.square,{height:55}]} source={require('./MiscJV/Icons/empty.png')} />
          </View>
        </View>
      )
    }

    var renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={[styles.view3,styles.center,{flexDirection:'row'}]}
          onPress={()=>{connect(item.address)}}
        >
          <View style={[styles.view4,styles.square,styles.center,{flex:0, width:66}]}  >
            <Image style={[styles.square,{height:55}]} source={require('./MiscJV/Icons/devices.png')} />
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
            <Image style={[styles.square,{height:55}]} source={require('./MiscJV/Icons/cog.png')} />
          </View>
        </TouchableOpacity>
      )
    }
    
    var BorderList=(name)=>{
      return(
        <View style={[styles.views,styles.center,{flex:0,width:300,alignSelf:'center', backgroundColor:'#999'}]}  >
          <Text>
            {name}
          </Text>
        </View>
      );
    }

    var SlidersBlock =()=> {
      return(
        <View style={[styles.view2,{flex:0,height: 290}]}>
        </View>
      );
    }

    var CustomTextRates =(props)=>{
    return(
      <View>
        <Text style={[styles.view4,styles.textSliderFont,{}]}>
          LED  {props.number}: {props.sliderValueText} (
          t:{props.t} / 
          si:{props.si} / 
          ss:{props.ss})
        </Text>
      </View>
    )
    }

  }

  return (
<>
    <View style={[styles.view1,{/* if you want to add some CSS */}]}        /* Everything */>
      <View style={[styles.view2,{flex:0,height:40,alignItems:'center'}]}  /* TITLE */>
        <Text style={[styles.title,{}]}>
          Bluetooth Sliders
        </Text>
      </View>
      <View style={[styles.view2,{flex:0}]}                                 /* Bluetooth Connection */>
        <Toggle value={isBTEnabled} onValueChange={toggleBluetooth} />
      </View>
      <View>
        <Tests/>
      </View>
      <View style={[styles.view2,{flex:0, height:200}]}  backgroundColor= {connectedColor} /* Device Selection */>
        <FlatList style={[styles.view3,{}]}
          data                ={list}
          renderItem          ={renderItem}
          ListEmptyComponent  ={renderEmpty}
          ListHeaderComponent ={BorderList('Header of the device\'s list')}
          // ListFooterComponent ={BorderList('Footer of the device\'s list')}
          ListFooterComponent ={BorderList('text:t, sendInterval:si, sliderSmoothness:ss')}
        />
      </View>
      <View style={[styles.view2,{flex:0}]} /* SLIDERS */>
        <View style={[styles.view3,styles.sliderBlocks,{}]} /* SLIDER 1 */>
          <CustomTextRates number='1'
          sliderValueText={sliderValue1}
          t='7' si='4' ss='8'/>
          <Slider
            onValueChange={           (sliderValue1) => {
              setSliderValue1           (sliderValue1);
              sendSlider              (sliderValue1 + 1000);
            }}

            style                 ={[styles.view4,{flex:0, margin:5}]}
            value                 ={sliderStartValue}
            minimumValue          ={sliderMinValue}
            maximumValue          ={sliderMaxValue}
            disabled              ={!isConnected}
            step                  ={sliderStep}
            // thumbTintColor        ={'black'}
            maximumTrackTintColor ={'black'}
            minimumTrackTintColor ={'black'}
          />
        </View>
        <View style={[styles.view3,styles.sliderBlocks,{}]} /* SLIDER 2 */>
          <CustomTextRates number='2' sliderValueText={sliderValue2} t='3' si='9' ss='4'/>
          <Slider
            onSlidingComplete={(sliderValue2) => {
              setSliderValue2(sliderValue2);
            }}
            onValueChange={   (sliderValue2) => {
              // setSliderValue2(sliderValue2);
              sendSlider      (sliderValue2 + 2000);
            }}

            style                 ={[styles.view4,{flex:0, margin:5}]}
            value                 ={sliderStartValue}
            minimumValue          ={sliderMinValue}
            maximumValue          ={sliderMaxValue}
            disabled              ={!isConnected}
            step                  ={sliderStep}
            // thumbTintColor        ={'black'}
            maximumTrackTintColor ={'black'}
            minimumTrackTintColor ={'black'}
          />
        </View>
        <View style={[styles.view3,styles.sliderBlocks,{}]} /* SLIDER 3 */>
          <CustomTextRates number='3' sliderValueText={sliderValue3} t='3' si='9' ss='4'/>
          <Slider
            onSlidingComplete={setSliderValue3}
            onValueChange={   (sliderValue3) => {
              setSliderValue3   (sliderValue3);
              sendSlider      (sliderValue3 + 3000);
              }
            }

            style                 ={[styles.view4,{flex:0, margin:5}]}
            value                 ={sliderStartValue}
            minimumValue          ={sliderMinValue}
            maximumValue          ={sliderMaxValue}
            disabled              ={!isConnected}
            step                  ={sliderStep}
            // thumbTintColor        ={'black'}
            maximumTrackTintColor ={'black'}
            minimumTrackTintColor ={'black'}
          />
        </View>
        <View style={[styles.view3,styles.sliderBlocks,{}]} /* CSLIDER 4 */>
          <CustomSlider number='4'
            t='0' si='0' ss='0'
            BTConnect            ={!isConnected}
            sliderValue          ={sliderValue4}
            hookVar              ={sliderValue4}
            // onSlidingComplete ={setSliderValue4}  //slow
            onValueChange={       (sliderValue4) => {
              setSliderValue4     (sliderValue4);
              sendSlider          (sliderValue4 + 4000);}}
          />
        </View>
        <View style={[styles.view3,styles.sliderBlocks,{}]} /* CSLIDER 5 */>
          <CustomSlider number='5'
            t='0' si='0' ss='0'
            BTConnect            ={!isConnected}
            sliderValue          ={sliderValue5}
            hookVar              ={sliderValue5}
            // onSlidingComplete ={setSliderValue5}  //slow
            onValueChange={       (sliderValue5) => {
              setSliderValue5     (sliderValue5);
              sendSlider          (sliderValue5 + 5000);
            }}
          />
        </View>
        <View style={[styles.view3,styles.sliderBlocks,{}]} /* CSLIDER 6 */>
          <CustomSlider number='6'
            t='0' si='0' ss='0'
            BTConnect            ={!isConnected}
            sliderValue          ={sliderValue6}
            hookVar              ={sliderValue6}
            // onSlidingComplete ={setSliderValue6}  //slow
            onValueChange={       (sliderValue6) => {
              setSliderValue6     (sliderValue6);
              sendSlider          (sliderValue6 + 6000);}}
          />
        </View>
      </View>
    </View>
</>
  );
};

export default App;