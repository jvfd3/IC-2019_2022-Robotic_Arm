import React from 'react'
import {
    View,
    Text,
    FlatList,
} from 'react-native'
import Layout           from '../components/bluetooth_list_layout'
import Empty            from '../components/empty'
import Toggle           from '../components/toggle'
import Subtitle         from '../components/subtitle'
import Device           from '../components/device'
import { useEffect } from 'react'
import BluetoothSerial from 'react-native-bluetooth-serial-next'


BluetoothList = (props) => {
    
    const [list, setList] = React.useState([]);
    const [bolEnable, setBolEnable] = React.useState(false); 
    
    const renderEmpty = () => {
        return (
            <Empty text='No Elements'/>
        );
    };
    
    const renderItem = ({item}) => {
        return (<Device
            {...item}
            iconLeft    ={require('../../icons/devices.svg' )}
            iconRight   ={require('../../icons/cog.png'     )}
        />)
    };
    
    useEffect(()=>{
        async function init(){
            const enable    = await BluetoothSerial.requestEnable();
            const list     = await BluetoothSerial.list();
            setList(list);
            setBolEnable(enable);
            console.log(list);
        }

        init();
        return()=>{
            async function remove(){
                await BluetoothSerial.stopScanning();
                console.log('Scan Finished');
            }
            remove();
        }
    }, []);


    const enableBluetooth = async () => {
        try{
            await BluetoothSerial.requestEnable();
            const list = await BluetoothSerial.list();
            await BluetoothSerial.stopScanning();
            setBolEnable(true);
            setList(list);
        } catch (error) {
            console.log(error);
        }
    };

    const disableBluetooth = async () => {
        try{
            await BluetoothSerial.disable();
            await BluetoothSerial.stopScanning();
            setBolEnable(false);
            setList([]);
        } catch(error) {
            console.log(error);
        }
    };

    const toggleBluetooth = value => {
        if (value) {
            return enableBluetooth();
        }
        disableBluetooth();
    }

    return (
        <Layout title='Bluetooth'>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth} />
            <Subtitle title='List of devices' />
            <FlatList
                data={list}
                ListEmptyComponent={renderEmpty}
                renderItem={renderItem}
            />
        </Layout>
    )
}

export default BluetoothList;