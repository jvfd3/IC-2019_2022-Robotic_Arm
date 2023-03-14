import React, { useEffect, useState } from 'react'
import { Text, View, Switch, FlatList, TouchableOpacity, Image, PermissionsAndroid, } from 'react-native'
import styles from './MiscJV/Neutral/Styles/neutral_styles'
import Wifi_input from './MiscJV/WiFi/Components/wifi_input'

const Input_wifi_bt = (props) => {
    let l_option = props.option
    const [ip_port, change_ip_port] = useState({ ip: '192.168.0.107', port: 8888 })
    return (
        <View style = { styles.test_input_wifi_bt_container } >
            <Wifi_input change_out_value = { change_ip_port } initial_out_value = { ip_port } /> 
        </View>
    )
}

export default Input_wifi_bt