import React, { useState }                                        from 'react'
import { View, Text, Image, TouchableOpacity, }     from 'react-native'
import styles                                       from '../Styles/bt_styles'
import { bt_connect_to_address, bt_request_disconnection_from_address }    from '../Functions/BT_functions'

const Separator = (props) =>{
    return(
        <View
            style={[styles.device_separator_color, {
                borderColor: props.color? props.color:'#eceff1'
            }]}
        />
    )
}

device = (props) => {

    const [connection_status,  set_connection_status]      = useState(false)
    // const [color,  set_color]      = useState('#'+'000000')
    const [color,  set_color]      = useState(styles.device_initial_color)

    const device_connect_to_address = async (local_address, set_address, set_color) => {
        // console.log('Handling connection to ' + local_address)
        let hasConnected
        if (connection_status) {
            hasConnected = ! await bt_request_disconnection_from_address(local_address)
        } else {
            set_color('#'+'000099')
            hasConnected = await bt_connect_to_address(local_address)
        }
        // set_address('connecting')
        let new_color   = '#' + (hasConnected?'009900':'990000')
        let new_address =       hasConnected?local_address:''
        // console.log(new_color)
        set_connection_status(hasConnected)
        set_address(new_address)
        set_color(new_color)
        return hasConnected
    }

    return (
        <TouchableOpacity style={[styles.device_touchable, {backgroundColor: color}]}
            onPress={() => {
                let p_address = props.address
                let in_set_address = props.outter_set_address
                if (p_address) {
                    device_connect_to_address(p_address, in_set_address, set_color)
                } else {
                    console.log('Nothing happens')
                }
            }}
        >
            <View style={[styles.device_icons_view,]}  >
                <Image style={[styles.device_icons,]} source={props.image_left} />
            </View>
            <View style={[styles.device_text_view,]}  >
                <Text style={[styles.device_text,]}>
                    Name: {props.name}
                </Text>
                <Text style={[styles.device_text,]}>
                    Class: {props.class}
                </Text>
                <Text style={[styles.device_text,]}>
                    Address: {props.address}
                </Text>
            </View>
            <View style={[styles.device_icons_view,]}  >
                <Image style={[styles.device_icons,]} source={props.image_right} />
            </View>
            {/* <Separator/> */}
        </TouchableOpacity>
    )
}

export default device