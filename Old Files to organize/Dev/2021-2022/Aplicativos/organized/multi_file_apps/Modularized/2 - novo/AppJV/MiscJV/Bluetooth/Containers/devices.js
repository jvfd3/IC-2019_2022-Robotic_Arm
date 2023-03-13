import React                        from 'react'
import { View, Text, FlatList, ViewPropTypes, }    from 'react-native'
import styles                       from '../Styles/bt_styles'
import Device                       from '../Components/device'
import icons                        from '../../Icons/icons_exporter'
import Subtitle             from '../Components/subtitle'
{ // icons source variables
    var img_src_empty   = icons.src_empty
    var img_src_devices = icons.src_devices
    var img_src_cog     = icons.src_cog
    // var img_src_missing = icons.src_missing_image
}



const borderList=(name)=>{
    return(
        <View style={[styles.devices_borderList, ]}  >
            <Text>
                {name} LIST COMPONENT
            </Text>
        </View>      
    );
}

const empty_device = ({item}) => {
    let empty_string = ''
    let func_to_pass = console.log
    // console.log(item)
    return (
        <Device
            outter_set_address      = {func_to_pass}
            function_parameter      = {0}
            image_right             = {img_src_empty}
            image_left              = {img_src_empty}
            address                 = {empty_string}
            class                   = {empty_string}
            name                    = {empty_string}
        />
    )
}

const device_component = ({item}) => {
    let set_address_func    = item.outter_set_address
    let item_address        = item.address
    let item_class          = item.class
    let item_name           = item.name
    return (
        <Device
            /* {...item} */
            outter_set_address  = {set_address_func}
            image_right         = {img_src_cog}
            image_left          = {img_src_devices}
            address             = {item_address}
            class               = {item_class}
            name                = {item_name}
        />
    )
}

const get_new_list_of_devices =(props)=> {
    // console.log(props)
    let devices_list        = props.list_of_devices
    let outter_set_address  = props.set_address_function

    let len = devices_list.length
    let new_list_of_devices = []
    for(var i=0; i < len; i++){
        let current_obj = devices_list[i]
        let new_obj = {...current_obj, outter_set_address, }
        new_list_of_devices.push(new_obj)
    }
    // console.log(new_list_of_devices)
    return new_list_of_devices
}

const devices = (props) => {
    let hasToShowList = props.list_of_devices.length
    let new_list_of_devices = get_new_list_of_devices(props)
    return (
        <View style={[styles.devices_view_external,]} >
            {
                hasToShowList?(
                <View style={[styles.devices_view_internal_on,]} >
                    <Subtitle   title='List of devices '                                            />
                    <FlatList
                        data                = {new_list_of_devices}
                        style               = {[styles.devices_flatlist, ]}
                        renderItem          = {device_component}
                        ListEmptyComponent  = {empty_device}
                        ListHeaderComponent = {borderList('HEADER')}
                        ListFooterComponent = {borderList('FOOTER')}
                    />
                </View>
                ):(
                    <View style={[styles.devices_view_internal_off,]} >
                        <Text>
                            CONNECT THE DEVICE FIRST
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default devices