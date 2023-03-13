import React, { useState }            from 'react'
import { View, Text, }  from 'react-native'
import Slider           from '@react-native-community/slider'
import styles           from '../Styles/neutral_styles'
// import { printError, encode_and_send_data_to_address, }     from '../Functions/BT_functions'

const sliderJV =(props)=> {

    const is_component_viewable = props.isEnabled
    const p_slider_id           = props.slider_id
    const p_func_to_do          = props.function_to_execute
    const p_address_to_send     = props.address_to_send
    const l_ip                  = p_address_to_send.ip
    const l_port                = p_address_to_send.port

    function send_slider (slider_value, p_slider_id) {
        // console.log(l_ip+':'+l_port)
        p_func_to_do(slider_value, p_slider_id, l_ip, l_port)
    }

    // const p_slider_key          = props.key

    /*
        everytime a state is changed inside a component all of it is re-rendered
        apparently

        only changing the variable locally doesn't refresh it's value visually
        even when it re-renders for the state update, the local var is still
        unchanged visually. Eventhough it has the right value
    */
    let initial_Slider_Value = 90
    const [textSlider,   settextSlider]   = useState(initial_Slider_Value)

    return(
        <View               style={[styles.sliderjv_container_view, ]} >
            <View           style={[styles.sliderjv_Text_View, ]} >
                <Text   style={[styles.sliderjv_Text_Name, ]} >
                    LED {p_slider_id} :
                </Text>
                <Text   style={[styles.sliderjv_Text_Value, ]} >
                    {textSlider}
                </Text>
            </View>
            <View style={[styles.sliderjv_slider_view, ]} >
                <Slider
                    style                   ={[styles.sliderjv_slider, ]}
                    onValueChange           ={(inside_slider_value)=>{
                        send_slider     (inside_slider_value, p_slider_id)
                        settextSlider   (inside_slider_value)
                        // console.log  (p_slider_id,inside_slider_value)
                    }}
                    disabled                ={!is_component_viewable}
                    value                   ={initial_Slider_Value}
                    thumbTintColor          ={styles.sliderjv_slider_thumbTintColor}
                    maximumTrackTintColor   ={styles.sliderjv_slider_maximumTrackTintColor}
                    minimumTrackTintColor   ={styles.sliderjv_slider_minimumTrackTintColor}
                    maximumValue            ={180}
                    step                    ={1}
                    minimumValue            ={0}
                />
            </View>
        </View>
    )
}

export default sliderJV