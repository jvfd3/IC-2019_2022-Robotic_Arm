import React, { useState } from 'react'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'
import styles from '../Styles/wifi_styles'

const Wifi_container = (props) => {
    const o_change_ip_port  = props.change_out_value
    const o_initial_value   = props.initial_out_value
    const [value_ip,    l_change_ip]   = useState(o_initial_value.ip);
    const [value_port,  l_change_port] = useState(o_initial_value.port);

    function test_changer_ip (text) {
        const variable = {ip: text, port: value_port}
        o_change_ip_port(variable)
    }
    function test_changer_port (text) {
        const variable = {ip: value_ip, port: parseFloat(text)}
        o_change_ip_port(variable)
    }

    return (
        <View style={[styles.wifi_main_container]} >
            <View style={[styles.wifi_address_views]} >
                <TextInput
                    style={[styles.wifi_ip]}
                    onChangeText={text => {l_change_ip(text);test_changer_ip(text)}}
                    value={value_ip}
                    keyboardType='numeric'
                    maxLength={15}
                    />
                <TextInput
                    style={[styles.wifi_port]}
                    onChangeText={text => {l_change_port(text);test_changer_port(text)}}
                    value={value_port.toString()}
                    keyboardType='numeric'
                    maxLength={5}
                />
            </View>
            <Text>
                {value_ip}:{value_port}
            </Text>
        </View>
    )
}

export default Wifi_container