import React , { useState, useEffect }      from 'react'
import { View, Text, Switch, }  from 'react-native'
import styles                   from '../Styles/bt_styles';

import {
    printError,
    bt_List,
    bt_isEnabled,
    bt_RequestEnable,
    bt_RequestDisable,
} from '../Functions/BT_functions'

const toggle = (props) => {
    
    const [isEnabled,   set_IsEnabled]  = useState(false)

    let set_address     = props.set_address_function
    let set_list        = props.set_list_func

    let toggle_style   = styles.toggle_color_palette
    
    let color_on  = styles.toggle_color_palette.color_bt_on
    let color_off = styles.toggle_color_palette.color_bt_off
    let Toggle_color_status = isEnabled ? color_on : color_off

    let Toggle_color_track = {false:   toggle_style.track_on, true: toggle_style.track_off}
    let Toggle_color_thumb = isEnabled ? toggle_style.thumb_on      : toggle_style.thumb_off

    useEffect(() => {
        const initial_function = async () => {
            try {
                // console.log('TOGGLE')
    
                const get_btlist = async (bt_is_enabled) => {
                    return bt_is_enabled ? await bt_List()   : []
                }
                let local_isEnabled = await bt_isEnabled()
                let local_list      = await get_btlist(local_isEnabled)
    
                // console.log   (local_isEnabled)
                // set_list   (get_btlist(isEnabled))
                // console.log (local_list)
                set_IsEnabled(local_isEnabled)
                set_list    (local_list)
                // await enableBluetooth()
            } catch (error) {
                printError('init', error)
            }
        }
        initial_function()
    }, [])

    const toggleSwitch = async (switch_status) => {
        // based on the current switch position, tries to enable/disable the bt

        //receives the new value from the switch.
        // if the new value is true, tries to enable the bluetooth
        // if it is false, tries to disable it 
        let current_bt_status = switch_status ? await bt_RequestEnable() : await bt_RequestDisable()
        // the returned status is set
        set_IsEnabled(current_bt_status)
        let list  = current_bt_status ? await bt_List()   : []
        set_list   (list)
        set_address('')
        // console.log(list)
    }

    return (
        <View style = {[styles.toggle_view_container, ]} >
            <View style={[styles.toggle_text_view, {backgroundColor: Toggle_color_status}]} >
                <Text style = {[styles.toggle_text, ]} >
                    Connection status
                </Text>
            </View>
                {/*
                AGORA JOÃO, APARENTEMENTE O TOGGLE TÁ CONCLUÍDO.
                PASSA O TOGGLE DE VOLTA PRO CÓDIGO PRINCIPAL
                REMOVE AS COISAS DESNECESSÁRIAS
                E PROVAVELMENTE JÁ É O MOMENTO DE SALVAR ESSE MODULARIZADO PARA AVANÇAR PRO WIFI
                */}
            <Switch
                trackColor      = {Toggle_color_track}
                thumbColor      = {Toggle_color_thumb}
                value           = {isEnabled}
                // value           = {test_initial_value}
                onValueChange   = {toggleSwitch}  // eventhough it doesn't has parameters, aparently it does sends the changed value
            />
        </View>
    )
}

export default toggle