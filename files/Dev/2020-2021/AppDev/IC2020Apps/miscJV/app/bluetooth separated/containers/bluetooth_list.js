import React, { Component } from 'react'
import {
    View,
    Text,
    PermissionsAndroid,
    Button,
    StyleSheet,
    FlatList,
}                       from 'react-native'
import Slider           from '@react-native-community/slider';
import Layout           from '../components/bluetooth_list_layout'
import Empty            from '../components/empty'
import Toggle           from '../components/toggle'
import Subtitle         from '../components/subtitle'
import Device           from '../components/device'
import { useEffect }    from 'react'
import BluetoothSerial  from 'react-native-bluetooth-serial-next'
// import BluetoothClassic             from 'react-native-bluetooth-classic';
import base64 from 'react-native-base64';

BluetoothList = (props) => {
    
    const [list,        setList]      = React.useState([]);
    const [bolEnable,   setBolEnable] = React.useState(false);
    const [address,     setAddress]   = React.useState('');
    const [textSlider1,     settextSlider1]   = React.useState(90);
    const [textSlider2,     settextSlider2]   = React.useState(90);
    const [textSlider3,     settextSlider3]   = React.useState(90);
    const [textSlider4,     settextSlider4]   = React.useState(90);
    var     valueSlider1=90;
    var     valueSlider2=90;
    var     valueSlider3=90;
    var     valueSlider4=90;
    
    useEffect(()=>{
        async function init(){
            const enable    = await BluetoothSerial.requestEnable();
            const list      = await BluetoothSerial.list();
            setList(list);
            setAddress(list[0].address);
            setBolEnable(enable);
        }

        init();
        return()=>{
            async function remove(){
                await BluetoothSerial.stopScanning();
                // console.log('Scan Finished');
            }
            remove();
        }
    }, []);

    const renderEmpty = () => {
        return <Empty text='No Elements'/>
    };
    
    const renderItem = ({item}) => {
        return (
            <Device
                {...item}
                iconLeft    ={require('../../icons/devices.svg' )}
                iconRight   ={require('../../icons/cog.png'     )}
                onPress     ={ ()=> {connect()}}
            />
        )
    };

    const enableBluetooth = async () => {
        try{
                        await BluetoothSerial.requestEnable();
                        await BluetoothSerial.stopScanning();
            setList(    await BluetoothSerial.list());
            setBolEnable(true);
        } catch (error) {
            console.log('enableBluetooth Error{');
            console.log(error);
            console.log('} enableBluetooth Error');
        }
    };

    const disableBluetooth = async () => {
        try{
            await BluetoothSerial.disable();
            await BluetoothSerial.stopScanning();
            setBolEnable(false);
            setList([]);
        } catch(e) {
            console.log('DisableBluetooth Error {');
            console.log(e);
            console.log('} DisableBluetooth Error');
        }
    };

    const toggleBluetooth = (value) => {
        return (value?enableBluetooth():disableBluetooth())
    }

    const connect = async ()=>{
        try {
            if (!(await BluetoothSerial.isConnected(address))){
                console.log('not connected...  connecting...');
                const a2 = await BluetoothSerial.connect(address);
                // console.log(a2);
                if (a2){
                    console.log('connected!');
                }
            }
        } catch (e) {
            console.log('Connect Error {');
            console.log(e);
            console.log('}Connect Error ');
        }
    }

    const sendSlider = async (valueSlider) => {
        try {
            // console.log('X  X  Sending...  X   X');
            await BluetoothSerial.writeToDevice(base64.encode(valueSlider.toString().concat('\n')),address);
            // console.log('X  X  Sent...  X   X');
        }   catch (e) {
          console.log('Send Error {');
          console.log(e);
          console.log('}Send Error ');
      }
    };

    /* const SliderJV=(props)=>{
        return(
            <View           style={styles.view3}    flex={0}  alignContent={'center'}>
                <Slider
                    value={props.value}
                    onValueChange={props.onValueChange}
                    step={1}
                    margin={10}
                    minimumValue={0}
                    maximumValue={180}
                    thumbTintColor        ={'black'}
                    maximumTrackTintColor ={'black'}
                    minimumTrackTintColor ={'black'}
                />
                <Text>
                    {props.value}
                </Text>
            </View>
        )
    } */

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    },
    view3: {
      backgroundColor:  '#555',
      borderColor: 'blue',
      borderWidth: 1,
      margin: 10,
      flex: 1,
      // alignContent: 'center',
    },
  });
  
    return (
        <Layout title='Bluetooth'><Toggle value={bolEnable} onValueChange={toggleBluetooth} />
            <Subtitle title='List of devices' />
            <FlatList
                data={list}
                ListEmptyComponent={renderEmpty}
                renderItem={renderItem}
            />
            <View           style={styles.view3}    flex={0}  alignContent={'center'} >
                <Text style={{color:'white'}}>
                    LED 1: {textSlider1}
                </Text>
                <Slider
                    value={ valueSlider1 }
                    onValueChange={(valueSlider1)=>{
                        sendSlider(valueSlider1+1000);
                        settextSlider1(valueSlider1);
                    }}
                    step={1}
                    margin={10}
                    minimumValue={0}
                    maximumValue={180}
                    thumbTintColor        ={'black'}
                    maximumTrackTintColor ={'black'}
                    minimumTrackTintColor ={'black'}
                />
            </View>
            <View style={styles.view3}    flex={0}  alignContent={'center'}>
                <Text style={{color:'white'}}>
                    LED 2: {textSlider2}
                </Text>
                <Slider
                    value={ valueSlider2 }
                    onValueChange={(valueSlider2)=>{
                        sendSlider(valueSlider2+2000);
                        settextSlider2(valueSlider2);
                    }}
                    step={1}
                    margin={10}
                    minimumValue={0}
                    maximumValue={180}
                    thumbTintColor        ={'black'}
                    maximumTrackTintColor ={'black'}
                    minimumTrackTintColor ={'black'}
                />
            </View>
            <View style={styles.view3}    flex={0}  alignContent={'center'}>
                <Text style={{color:'white'}}>
                    LED 3: {textSlider3}
                </Text>
                <Slider
                    value={ valueSlider3 }
                    onValueChange={(valueSlider3)=>{
                        sendSlider(valueSlider3+3000);
                        settextSlider3(valueSlider3);
                    }}
                    step={1}
                    margin={10}
                    minimumValue={0}
                    maximumValue={180}
                    thumbTintColor        ={'black'}
                    maximumTrackTintColor ={'black'}
                    minimumTrackTintColor ={'black'}
                />
            </View>
            <View style={styles.view3}    flex={0}  alignContent={'center'}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>
                        LED 4
                    </Text>
                    <Text style={{color:'white', textAlign:'right'}}>
                        :  {textSlider4}
                    </Text>
                </View>
                <Slider
                    value={ valueSlider4 }
                    onValueChange={(valueSlider4)=>{
                        sendSlider(valueSlider4+4000);
                        settextSlider4(valueSlider4);
                    }}
                    step={1}
                    margin={10}
                    minimumValue={0}
                    maximumValue={180}
                    thumbTintColor        ={'black'}
                    maximumTrackTintColor ={'black'}
                    minimumTrackTintColor ={'black'}
                />
            </View>
        </Layout>
    )
}

export default BluetoothList;