import React, { useState }          from 'react'
import SliderJV                     from '../Components/sliderJV'
import { View, }                    from 'react-native'
import { printError, encode_and_send_data_to_address, }     from '../Functions/BT_functions'
import styles                       from '../Styles/bt_styles'

const sliders = (props) => {
    let     temp_fix_bt_bug = true
    let     address = !!props.bt_address
    // let     list    = !!(props.list_of_devices).length
    {/* The !! is needed because when I use the && operator with a string
    it gives (?), throws (?) an error. Using ! will convert to the inverse boolean,
    then do this again to have the original bool value*/}
    let     startingValue = 90
    var     valueSlider1  = startingValue
    var     valueSlider2  = startingValue
    var     valueSlider3  = startingValue
    var     valueSlider4  = startingValue
    const   [textSlider1, settextSlider1] = useState(valueSlider1)
    const   [textSlider2, settextSlider2] = useState(valueSlider2)
    const   [textSlider3, settextSlider3] = useState(valueSlider3)
    const   [textSlider4, settextSlider4] = useState(valueSlider4)
    

    function return_n_char(number_of_char) {
        let string_to_return = ''
        for (let index = 0; index < number_of_char-1; index++) {
            string_to_return+='.'
        }
        let len = string_to_return.length
        let num = Math.trunc(len/256)
        let ang = len-num*256
        let len_s = '\nlen: ('+len+')'
        let num_s = '\nnum: ('+num+')'
        let ang_s = '\nang: ('+ang+')\n'
        let log_output = len_s+num_s+ang_s
        // console.log(log_output)
        return string_to_return
    }
    
    function sendSlider_tempFix(valueSlider) {
        try {
            let slider_number = Math.trunc(valueSlider/1000)
            let slider_angle = valueSlider - slider_number*1000
            let number_of_char = 256*slider_number + slider_angle
            let str_value = return_n_char(number_of_char)
            let str_value_line = str_value+='\n'
            return str_value_line
        }   catch (error) {
            let errorMessage = 'sendSlider_tempFix'
            printError(errorMessage, error)
        }
    }
    
    function sendSlider (valueSlider, Slider_id, local_adress) {
        let true_value_slider = valueSlider + Slider_id * 1000
        let value_to_send
        if (temp_fix_bt_bug) {
            value_to_send = sendSlider_tempFix(true_value_slider)
        } else {
            value_to_send = true_value_slider.toString().concat('\n')
        }
        encode_and_send_data_to_address (value_to_send, local_adress)
    }

    const Actual_slides_component = () => {
        return (
            <View           style={[styles.sliders_container, ]} >
                <SliderJV   slider_id       = {            1 }
                            text_value      = {  textSlider1 }
                            value           = { valueSlider1 }
                            onValueChange   = {(valueSlider1)=>{
                                sendSlider     (valueSlider1,
                                                        1, address)
                                            settextSlider1(
                                                valueSlider1)
                                    }}
                    disabled        = {!address}
                />
                <SliderJV   slider_id       = {            2 }
                            text_value      = {  textSlider2 }
                            value           = { valueSlider2 }
                            onValueChange   = {(valueSlider2 )=>{
                                sendSlider     (valueSlider2 ,
                                                        2 , address)
                                            settextSlider2  (
                                                valueSlider2 )
                                    }}
                    disabled        = {!address}
                />
                <SliderJV   slider_id       = {            3 }
                            text_value      = {  textSlider3 }
                            value           = { valueSlider3 }
                            onValueChange   = {(valueSlider3 )=>{
                                sendSlider     (valueSlider3 ,
                                                        3 , address)
                                            settextSlider3  (
                                                valueSlider3 )
                                    }}
                    disabled        = {!address}
                />
                <SliderJV   slider_id       = {            4 }
                            text_value      = {  textSlider4 }
                            value           = { valueSlider4 }
                            onValueChange   = {(valueSlider4 )=>{
                                sendSlider     (valueSlider4 ,
                                                        4 , address)
                                            settextSlider4  (
                                                valueSlider4 )
                                    }}
                    disabled        = {!address}
                />
            </View>
        )
    }

    return (
        <>
            {address && <Actual_slides_component/>}
        </>
        
    )
}

export default sliders