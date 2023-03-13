import BluetoothSerial  from 'react-native-bluetooth-serial-next'
import Slider           from '@react-native-community/slider';
import base64           from 'react-native-base64';
import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Switch,
    Image,
    View,
    Text,
}                       from 'react-native'
import React, { useEffect } from 'react'

BluetoothList = (props) => {
    
        //Variables and States
        let   startingValue=90;
        var   valueSlider1=startingValue;
        var   valueSlider2=startingValue;
        var   valueSlider3=startingValue;
        var   valueSlider4=startingValue;
        const [textSlider1,     settextSlider1]   = React.useState(valueSlider1);
        const [textSlider2,     settextSlider2]   = React.useState(valueSlider2);
        const [textSlider3,     settextSlider3]   = React.useState(valueSlider3);
        const [textSlider4,     settextSlider4]   = React.useState(valueSlider4);
        const [bolEnable,       setBolEnable]     = React.useState(false);
        const [address,         setAddress]       = React.useState('');
        const [list,            setList]          = React.useState([]);
    
    
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

    
    Empty = (props) => {
        return(
            <View style={styles.container6}>
                <Image style={styles.icon}
                    source={require('../../icons/empty.png')}
                />
                <Text style={StyleSheet.text}>
                    {props.text}
                </Text>
            </View>
        )
    }

    const renderEmpty = () => {
        return <Empty text='No Elements'/>
    };
    
    Separator = (props) =>{
        return(
            <View
                style={[styles.separator,
                {
                    borderColor: props.color? props.color:'#eceff1'
                }]}
            />
        )
    }

    Device = (props) => {
        return(
            <TouchableOpacity  
                style={styles.wrapper}
                onPress={props.onPress}
            >
                
                <View           style={styles.wrapperDevice}>
                    <View           style={styles.wrapperLeft}  >
                        <Image      style={styles.iconLeft} source={props.iconLeft}    />
                    </View>
                    <View           style={styles.wrapperName}  >
                        <Text       style={styles.name}         >
                            {props.name}
                        </Text>
                    </View>
                    <Image          style={styles.iconRight} source={props.iconRight}    />
                </View>
                <Separator  />
            </TouchableOpacity>
        )
    }

    const renderItem = ({item}) => {
        return (
            <Device
                {...item}
                iconLeft    ={require('../../icons/devices.png' )}
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

    Toggle = (props) => {
        return(
            <View style={styles.container5}>
                <Text style={styles.text}>
                    {props.value?'ON':'OFF'}
                </Text>
                <Switch style={styles.switch}
                    value={props.value}
                    onValueChange={props.onValueChange}
                />
            </View>
        )
    }

    Subtitle = (props) => {
        return(
            <View style={styles.container2}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <View style={styles.line}/>
            </View>
        )
    }

    
    const styles = StyleSheet.create({

        container1: {
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

        container2: {
            paddingHorizontal:  20,
            paddingVertical:    25,
            backgroundColor:    'black',
            flex: 1,
        },

        title: {
            color: 'white',
            fontSize: 20,
            marginLeft: 10,
            fontWeight:'bold',
        },

        wrapper:{
            backgroundColor: '#333',
            flexDirection:'column',
        },
        
        wrapperDevice:{
            backgroundColor: '#333',
            flexDirection:'row',
            alignItems:'center',
            padding: 10,
            justifyContent: 'space-between'
        },

        wrapperLeft:{
            backgroundColor: '#555',
            width: 40,
            height:40,
            borderRadius: 20,
            borderColor: 'gray',
            borderWidth: 1,
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center',
        },

        wrapperName:{
            color: 'white',
            fontSize: 20
        },

        iconLeft:{
            width:80,
            height:80,
            backgroundColor: 'grey',
        },

        iconRight:{
            width:50,
            height:50,
        },

        name:{
            color: 'white',
        },

        separator:{
            flex: 1,
            borderTopWidth: 1,
            marginLeft: 60,
            marginRight: 25,
            borderColor: '#eceff1',
        },

        container3:{
            flexDirection: 'row',
            marginVertical: 15,
            alignItems:'center',
        },

        title:{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'gray'
        },

        line:{
            borderBottomWidth:1,
            flex: 1,
            marginTop: 3,
            borderColor: '#eceff1'
        },
        
        container4: {
            paddingTop: 30,
            flex: 1,
            backgroundColor: 'black'
        },
        
        container5:{
            paddingVertical: 15,
            flexDirection: 'row',
        },
        
        text:{
            marginLeft:  10,
            fontWeight:'bold',
            fontSize: 20,
            flex: 1,
            color: 'white',
        },

        switch:{
            width: 50,
        },

        container6:{
            alignItems: 'center',
        },

        icon:{
            width:200,
            height: 200,
            marginVertical: 50,
        },

        text:{
            color: 'white' , 
            fontSize: 20,
        },

    });
  
    return (
        <View style={styles.container2}>
            <Text style={styles.title}>
                Bluetooth
            </Text>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth} />
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
        </View>
    )
}

export default BluetoothList;