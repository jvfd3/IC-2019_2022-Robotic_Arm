// 14/01/22
import React, { useEffect, useState } from 'react'
import Layout               from '../Components/bt_list_layout'
import Toggle               from '../Components/toggle'
import Sliders              from './sliders'
import Devices              from './devices'
import styles               from '../Styles/bt_styles'
import { Text, View, Switch, FlatList, TouchableOpacity, Image, PermissionsAndroid, } from 'react-native'
// import BluetoothSerial, { isConnected }  from 'react-native-bluetooth-serial-next'

import {
    printError,
    bt_List,
    bt_Disable,
    bt_isEnabled,
    bt_StopScan,
    bt_RequestEnable,
    bt_RequestDisable,
    bt_connect_to_address,
    // bt_Connect,
} from '../Functions/BT_functions'
import { TestWatcher } from 'jest'


/* Things to upgrade later:
1) Even with bluetooth device disconnected, it's shown on the list.
X 2) Connected to the selected device, instead of "list[0].address" - DONE
X 2.1) When "onPress" inside the TouchableOpacity, you should pass the index
X   of the list. How? IDK - Actually you should do item.address to pick the
X   value related to that propertie of the object - DONE
3) Put the Bluetooth componentes in another screen that is not the main one.
  3.1) If the connection is disconnected, and the user is in the sliders' screen
    make it go back to the Bluetooth Screen
4) Connect via wifi/ip too
X 5) fix the switch lag
X 6) upgrade toggle's switch style 
7) Make the app viable horizontally (after making a second screen for the bluetooth part)
X 8) Make Sliders Disappear while disconnected
9) make user allow bluetooth only once
*/

const bluetooth_list = (props) => {

    //Variables and States
    const [bt_list, set_bt_list]    = useState([])
    const [address, setAddress ]    = useState(false)


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                title: "Cool Photo App Camera Permission",
                message:
                  "Cool Photo App needs access to your camera " +
                  "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera")
            } else {
                console.log("Camera permission denied")
            }
        } catch (error) {
            printError('requestCameraPermission', error)
        }
    }
    const permission_test_2 = async () => {
        try {
            const once = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      })
            console.log(once)
        } catch (error) {
            printError('permission_test', error)
        }
    }
    const permission_test = async () => {
        try {
            const granted = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN );
            console.log('Granted? '+granted)
        } catch (error) {
            printError('permission_test', error)
        }
    }
    useEffect(() => {
        const init = async () => {
            try {
                console.log('XXXXXXXXXXXXXXXXXXXXXXXXX')
                // await requestCameraPermission()
                await permission_test()
                // console.log(address)
                // await enableBluetooth()
            } catch (error) {
                printError('init', error)
            }
        }
        init()
        // return () => {
        //     async function remove() {
        //         try {
        //             await bt_StopScan()
        //         } catch (error) {
        //             printError('remove', error)
        //         }
        //     }
        //     remove()
        // }
    }, [])

    /* 
    X CONSIGA FAZER COM QUE, CASO O BLUETOOTH JÁ ESTEJA LIGADO, O USUÁRIO NÃO PRECISE
    CLICAR NO SWITCH PARA QUE A LISTA DE DISPOSITIVOS APAREÇA
    TALVEZ COM UM USEEFFECT NO TOGGLE

    TESTA O DEVICES COM MAIS COMPONENTES. SE NECESSÁRIO, USE UM SCROLLVIEW 

    SE DER TEMPO, SALVA OS ARQUIVOS E SEGUE PRO WIFI
    */

    return (
    <>
        <Layout title='Bluetooth'>
            <Toggle  set_list_func   = {set_bt_list}  set_address_function = {setAddress}  />
            <Devices list_of_devices = {bt_list}      set_address_function = {setAddress}  />
            <Sliders bt_address      = {address}                                           />
        </Layout>
    </>
    )
}

export default bluetooth_list