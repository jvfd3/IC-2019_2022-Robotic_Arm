import BluetoothSerial  from 'react-native-bluetooth-serial-next'
import base64           from 'react-native-base64'
// import BluetoothClassic             from 'react-native-bluetooth-classic'
// FUNCTIONS FROM BLUETOOTH SERIAL WITH TRY CATCH

function printError(errorMessage, error) {
    let message = errorMessage + 'Error { ' + error + ' } ' + errorMessage + 'Error'
    console.log(message)
}

const bt_disconnect_from_address       = async (Device_id) => {
    let returned_value
    try {
        returned_value = await BluetoothSerial.disconnect(Device_id)
    } catch (error) {
        returned_value = false
        let errorMessage = 'bt_StopScan'
        printError(errorMessage, error)
    }
    return returned_value
}

const bt_request_disconnection_from_address = async (Device_id) => {
    let disconnection_succeded
    // console.log('Attempting disconnection from ' + Device_id)
    let is_already_connected = await bt_isConnected(Device_id)
    // console.log(is_already_connected)
    if (is_already_connected) {
        // console.log(Device_id + 'is being disconnected')
        let hasDisconnected = await bt_disconnect_from_address (Device_id)
        
        // let msg = 'Disconnected? -'
        // msg += hasDisconnected?'Yes!':'No!'
        // console.log(msg)

        disconnection_succeded = hasDisconnected
    } else {
        // console.log(Device_id + ' is already disconnected')
        disconnection_succeded = is_already_connected
    }
    // console.log('Connection attempt to '+Device_id+' finished.')
    return disconnection_succeded
}
const bt_StopScan       = async () => {
    try {
        await BluetoothSerial.stopScanning()
    } catch (error) {
        let errorMessage = 'bt_StopScan'
        printError(errorMessage, error)
    }
}
const bt_isEnabled       = async () => {
    let isEnabled = false
    try {
        isEnabled = await BluetoothSerial.isEnabled()
    } catch (error) { printError('bt_isEnabled', error) }
    return isEnabled
}
const bt_RequestEnable  = async () => {
    let enabled = false
    try {
        enabled = await BluetoothSerial.requestEnable()
    } catch (error) {
        let showErrorMessage = false
        let errorMessage = 'bt_RequestEnable'
        if (showErrorMessage) {
            printError(errorMessage, error)
        } else {
            console.log(errorMessage+": Couldn't enable bluetooth on device")
        }
    }
    return enabled
}
const bt_RequestDisable  = async () => {
    let enabled = false
    try {
        enabled = await BluetoothSerial.disable()
    } catch (error) {
        let showErrorMessage = false
        let errorMessage = 'bt_RequestDisable'
        if (showErrorMessage) {
            printError(errorMessage, error)
        } else {
            console.log(errorMessage+": Couldn't disable bluetooth on device")
        }
    }
    return !enabled
}
const bt_List           = async () => {
    let list = []
    try {
        list = await BluetoothSerial.list()
    } catch (error) {
        let errorMessage = 'bt_List'
        printError(errorMessage, error)
    }
    return list
}
const bt_isConnected    = async (Device_id) => {
    let isConnected = false
    try {
        isConnected = await BluetoothSerial.isConnected(Device_id)
    } catch (error) {
        let errorMessage = 'bt_isConnected'
        printError(errorMessage, error)
    }
    // console.log('bt_isConnected: '+Device_id+' is connected -'+isConnected)
    // console.log('bt_isConnected: returned '+isConnected)
    return isConnected
}
const bt_Connect        = async (Device_id) => {
    let connection = false
    try {
        connection = await BluetoothSerial.connect(Device_id)
    } catch (error) {
        let showErrorMessage = false
        if (showErrorMessage) {
            let errorMessage = 'bt_Connect'
            printError(errorMessage, error)
        } else {
            console.log("bt_Connect: Couldn't connect to "+Device_id+".")
        }
    }
    // console.log('bt_Connect: '+Device_id+' has connected -'+connection)
    // console.log('bt_Connect: returned '+connection)
    return connection
}
const bt_Send           = async (encoded_data, Device_id) => {
    try {
        await BluetoothSerial.writeToDevice(encoded_data, Device_id)
    } catch (error) {
        let errorMessage = 'bt_Send'
        printError(errorMessage, error)
    }
}
const bt_connect_to_address           = async (Device_id) => {
    let connection_succeded
    // console.log('Attempting connection to ' + Device_id + '\n')
    let is_already_connected = await bt_isConnected(Device_id)
    // console.log(is_already_connected)
    if (is_already_connected) {
        // console.log(Device_id + ' is already connected')
        connection_succeded = is_already_connected
    } else {
        // console.log('not connected...  connecting...')
        connection_succeded = await bt_Connect(Device_id)
        // let msg = 'Connected? -'
        // msg += connection_succeded?'Yes!':'No!'
        // console.log(msg)
    }
    // console.log('Connection attempt to '+Device_id+' finished.')
    return connection_succeded
}


function encode_and_send_data_to_address (data, local_adress) {
    let encoded_value_to_send = b64_encode(data)
    bt_Send(encoded_value_to_send, local_adress)
}

// FUNCTION TO ENCODE TO BASE64
function b64_encode (string_to_encode) {
    return base64.encode(string_to_encode)
}


export {
    b64_encode,
    printError,

    bt_Send,
    bt_List,
    bt_Connect,
    bt_StopScan,
    bt_isEnabled,
    bt_isConnected,
    bt_RequestEnable,
    bt_RequestDisable,
    bt_connect_to_address,
    encode_and_send_data_to_address,
    bt_request_disconnection_from_address,
}