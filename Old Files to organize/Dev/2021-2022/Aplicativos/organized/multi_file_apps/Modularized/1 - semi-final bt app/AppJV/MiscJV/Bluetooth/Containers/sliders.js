import React                        from 'react'
import SliderJV                     from '../Components/sliderJV'
import { View, }                    from 'react-native'
import { printError, encode_and_send_data_to_address, }     from '../Functions/BT_functions'
import styles                       from '../Styles/bt_styles'

const sliders = (props) => {
    let     temp_fix_bt_bug         = false
    let     number_of_sliders       = 4
    let     address                 = props.bt_address
    let     is_component_viewable   = !!address

    {/* The !! is needed because when I use the && operator with a string
    it gives (?), throws (?) an error. Using ! will convert to the inverse boolean,
    then do this again to have the original bool value*/}

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

    function get_sliders(number) {
        let list_of_sliders = []
        for (let i = 1; i <= number; i++) {
            // console.log('test'+i+' <')
            list_of_sliders.push(
                <SliderJV   slider_id               = { i }
                            key       = {'key_'+i}
                            /*
                            this prop is not needed for the 
                            SliderJV component, but if you remove it, this happens:

ERROR  Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Actual_slides_component`. See https://reactjs.org/link/warning-keys for more information.
sliderJV@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.app2022&modulesOnly=false&runModule=true:113555:28
    in Actual_slides_component (at sliders.js:89)
    in sliders (at bluetooth_container.js:138)
    in RCTView (at View.js:32)
    in View (at bt_list_layout.js:7)
    in bt_list_layout (at bluetooth_container.js:135)
    in bluetooth_list (at AppJV/index.js:11)
    in RCTView (at View.js:32)
    in View (at AppJV/index.js:9)
    in AppJV_index (at renderApplication.js:50)
    in RCTView (at View.js:32)
    in View (at AppContainer.js:92)
    in RCTView (at View.js:32)
    in View (at AppContainer.js:119)
    in AppContainer (at renderApplication.js:43)
    in app2022(RootComponent) (at renderApplication.js:60)
                            */
                            
                            connected_address       = {address}
                            function_to_execute     = {sendSlider}
                />
            )
            // console.log('> '+i+'test')
        }
        // console.log(list)
        return <>{list_of_sliders}</>
    }

    const Actual_slides_component = () => {
        return (
            <View           style={[styles.sliders_container, ]} >
                {get_sliders(number_of_sliders)}
            </View>
        )
    }

    return is_component_viewable && <Actual_slides_component/>
    // return (<>{}</>)
}

export default sliders