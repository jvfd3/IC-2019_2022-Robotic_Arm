import React, { useEffect, useState } from 'react'
import styles               from '../Styles/neutral_styles'
import Wifi_container  from '../../WiFi/Components/wifi_input'
import SlidersJV from './sliders'
import { Text, View, Switch, FlatList, TouchableOpacity, Image, PermissionsAndroid, } from 'react-native'
import {
    load_udp,
    send_udp_custom,
} from '../../WiFi/Functions/wifi_functions'
import {
    get_true_slider_value,
} from '../Functions/neutral_functions'

function slider_send_function (valueSlider, Slider_id, l_ip, l_port) {
    let value_to_send = get_true_slider_value(Slider_id, valueSlider)
    send_udp_custom(value_to_send, l_ip, l_port)
}

const neutral_container = (props) => {
    //Variables and States
    let option = 0

    load_udp()
    const [ip_port,     change_ip_port] = useState({ip: '192.168.0.107', port: 8888})
    
    let slider_on_condition = !!ip_port.ip && !!ip_port.port

    return (
    <>
        <View>
            <Wifi_container change_out_value={change_ip_port} initial_out_value={ip_port} />
            {/* {get_input()} */}
            <SlidersJV
                quantity={4}
                isOn={slider_on_condition}
                address={ip_port}
                send_function={slider_send_function}
            />
        </View>
    </>
    )
}

export default neutral_container