import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import styles from './MiscJV/Neutral/Styles/neutral_styles'
import Input_wifi_bt from './testing_func'

const Toggling_wifi_bt = (props) => {
    let l_option        = props.option  
    let l_change_func   = props.changing
    return(
        <View style={[styles.test_toggling_wifi_bt_container]} >
            <Text
            // style={[styles.test_switch_names]}
            >
                BT
            </Text>
            <Switch
                value={l_option}
                onValueChange={()=>l_change_func(!l_option)}
            />
            <Text
            // style={[styles.test_switch_names]}
            >
                Wifi
            </Text>
        </View>
    )
}

const PassingComponent = (props) => {
    let l_address   = props.passing_address
    let l_option    = props.option
    return (
        <View style={[styles.test_passing_component_container, ]} >
            <Text style={[styles.test_white_text, ]}>
                {l_option?'WIFI':'BT'}
                {'\n'}
                {l_option?l_address.ip+':'+l_address.port:'X'}
                {/* {l_option?l_address.ip+':'+l_address.port:'X'}
                {!l_option?l_address:'X'} */}
            </Text>
        </View>
    )
}


function app2022 () {
    // let global_option = 1       // 1 = wifi, 0 = bt
    const [option_state, set_option_state] = useState (0)
    let initial_address = option_state? {ip: '192.168.0.107', port: 8888}: false
    // let initial_address = option_state? {ip: '', port: 0}: ''
    const [address,     change_address] = useState(initial_address)
    
    return (
        <View style={[styles.index_container, ]} >
            <Toggling_wifi_bt   option={option_state} changing={set_option_state}       />
            <Input_wifi_bt      option={option_state} change_function={change_address}  />
            <PassingComponent   option={option_state} passing_address={address}         />
        </View>
    )
}

export default app2022