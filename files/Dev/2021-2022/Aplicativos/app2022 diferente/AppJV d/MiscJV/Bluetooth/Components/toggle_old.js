import React                    from 'react'
import { View, Text, Switch, }  from "react-native"
import styles                   from '../Styles/bt_styles';


    /* const Toggle = (props) => {
        let color_on                = 'red'
        let color_off               = 'green'
        let color_on_off            = { false: color_on, true: color_off }
        let toggle_color            = props.color
        let received_value          = props.value
        let toggle_function         = props.onValueChange
        let toggle_function_param   = props.toggle_function_param
        
        function function_to_execute () {
            toggle_function(toggle_function_param)
        }
        
        return (
            <View
                style={[styles.toggle_container, ]}
                backgroundColor = {toggle_color}
            >
                <View style={[styles.toggle_Text_View, ]}>
                    <Text style={[styles.toggle_Text, ]}>
                        Bluetooth: {received_value ? 'ON' : 'OFF'}
                    </Text>
                </View>
                <View  style={[styles.toggle_Switch_View, ]}>
                    <Switch
                        style           = {[styles.toggle_Switch, ]}
                        trackColor      = {color_on_off}
                        value           = {received_value}
                        onValueChange   = {function_to_execute}
                        // thumbColor='cyan'
                    />
                </View>
            </View>
        )
    } */


export default toggle